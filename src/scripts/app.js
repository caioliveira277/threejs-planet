
let APP = {

	Player: function () {

		let renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.outputEncoding = THREE.sRGBEncoding;

		let loader = new THREE.ObjectLoader();
		let camera, scene;

		let vrButton = VRButton.createButton(renderer);

		let events = {};

		let dom = document.createElement('div');
		dom.appendChild(renderer.domElement);

		this.dom = dom;

		this.width = 500;
		this.height = 500;

		this.load = function (json) {

			let project = json.project;

			if (project.vr !== undefined) renderer.xr.enabled = project.vr;
			if (project.shadows !== undefined) renderer.shadowMap.enabled = project.shadows;
			if (project.shadowType !== undefined) renderer.shadowMap.type = project.shadowType;
			if (project.toneMapping !== undefined) renderer.toneMapping = project.toneMapping;
			if (project.toneMappingExposure !== undefined) renderer.toneMappingExposure = project.toneMappingExposure;
			if (project.physicallyCorrectLights !== undefined) renderer.physicallyCorrectLights = project.physicallyCorrectLights;

			this.setScene(loader.parse(json.scene));
			this.setCamera(loader.parse(json.camera));

			events = {
				init: [],
				start: [],
				stop: [],
				keydown: [],
				keyup: [],
				mousedown: [],
				mouseup: [],
				mousemove: [],
				touchstart: [],
				touchend: [],
				touchmove: [],
				update: []
			};

			let scriptWrapParams = 'player,renderer,scene,camera';
			let scriptWrapResultObj = {};

			for (let eventKey in events) {

				scriptWrapParams += ',' + eventKey;
				scriptWrapResultObj[eventKey] = eventKey;

			}

			let scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\"/g, '');

			for (let uuid in json.scripts) {

				let object = scene.getObjectByProperty('uuid', uuid, true);

				if (object === undefined) {

					console.warn('APP.Player: Script without object.', uuid);
					continue;

				}

				let scripts = json.scripts[uuid];

				for (let i = 0; i < scripts.length; i++) {

					let script = scripts[i];

					let functions = (new Function(scriptWrapParams, script.source + '\nreturn ' + scriptWrapResult + ';').bind(object))(this, renderer, scene, camera);

					for (let name in functions) {

						if (functions[name] === undefined) continue;

						if (events[name] === undefined) {

							console.warn('APP.Player: Event type not supported (', name, ')');
							continue;

						}

						events[name].push(functions[name].bind(object));

					}

				}

			}

			dispatch(events.init, arguments);

		};

		this.setCamera = function (value) {

			camera = value;
			camera.aspect = this.width / this.height;
			camera.updateProjectionMatrix();

		};

		this.setScene = function (value) {

			scene = value;

		};

		this.setSize = function (width, height) {

			this.width = width;
			this.height = height;

			if (camera) {

				camera.aspect = this.width / this.height;
				camera.updateProjectionMatrix();

			}

			if (renderer) {

				renderer.setSize(width, height);

			}

		};

		function dispatch(array, event) {

			for (let i = 0, l = array.length; i < l; i++) {

				array[i](event);

			}

		}

		let time, prevTime;

		function animate() {

			time = performance.now();

			try {

				dispatch(events.update, { time: time, delta: time - prevTime });

			} catch (e) {

				console.error((e.message || e), (e.stack || ""));

			}

			renderer.render(scene, camera);

			prevTime = time;

		}

		this.play = function () {

			if (renderer.xr.enabled) dom.append(vrButton);

			prevTime = performance.now();

			document.addEventListener('keydown', onDocumentKeyDown);
			document.addEventListener('keyup', onDocumentKeyUp);
			document.addEventListener('mousedown', onDocumentMouseDown);
			document.addEventListener('mouseup', onDocumentMouseUp);
			document.addEventListener('mousemove', onDocumentMouseMove);
			document.addEventListener('touchstart', onDocumentTouchStart);
			document.addEventListener('touchend', onDocumentTouchEnd);
			document.addEventListener('touchmove', onDocumentTouchMove);

			dispatch(events.start, arguments);

			renderer.setAnimationLoop(animate);

		};

		this.stop = function () {

			if (renderer.xr.enabled) vrButton.remove();

			document.removeEventListener('keydown', onDocumentKeyDown);
			document.removeEventListener('keyup', onDocumentKeyUp);
			document.removeEventListener('mousedown', onDocumentMouseDown);
			document.removeEventListener('mouseup', onDocumentMouseUp);
			document.removeEventListener('mousemove', onDocumentMouseMove);
			document.removeEventListener('touchstart', onDocumentTouchStart);
			document.removeEventListener('touchend', onDocumentTouchEnd);
			document.removeEventListener('touchmove', onDocumentTouchMove);

			dispatch(events.stop, arguments);

			renderer.setAnimationLoop(null);

		};

		this.dispose = function () {

			renderer.dispose();

			camera = undefined;
			scene = undefined;

		};

		//

		function onDocumentKeyDown(event) {

			dispatch(events.keydown, event);

		}

		function onDocumentKeyUp(event) {

			dispatch(events.keyup, event);

		}

		function onDocumentMouseDown(event) {

			dispatch(events.mousedown, event);

		}

		function onDocumentMouseUp(event) {

			dispatch(events.mouseup, event);

		}

		function onDocumentMouseMove(event) {

			dispatch(events.mousemove, event);

		}

		function onDocumentTouchStart(event) {

			dispatch(events.touchstart, event);

		}

		function onDocumentTouchEnd(event) {

			dispatch(events.touchend, event);

		}

		function onDocumentTouchMove(event) {

			dispatch(events.touchmove, event);

		}

	}

};

export { APP };
