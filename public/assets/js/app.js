/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGL1Renderer, WebGLCubeRenderTarget, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _scripts_planet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/planet */ \"./src/scripts/planet.js\");\n/* Styles */\n\n\n/* Scripts */\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/VRButton.js":
/*!*********************************!*\
  !*** ./src/scripts/VRButton.js ***!
  \*********************************/
/*! exports provided: VRButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VRButton\", function() { return VRButton; });\nclass VRButton {\n\n\tstatic createButton( renderer, options ) {\n\n\t\tif ( options ) {\n\n\t\t\tconsole.error( 'THREE.VRButton: The \"options\" parameter has been removed. Please set the reference space type via renderer.xr.setReferenceSpaceType() instead.' );\n\n\t\t}\n\n\t\tconst button = document.createElement( 'button' );\n\n\t\tfunction showEnterVR( /*device*/ ) {\n\n\t\t\tlet currentSession = null;\n\n\t\t\tfunction onSessionStarted( session ) {\n\n\t\t\t\tsession.addEventListener( 'end', onSessionEnded );\n\n\t\t\t\trenderer.xr.setSession( session );\n\t\t\t\tbutton.textContent = 'EXIT VR';\n\n\t\t\t\tcurrentSession = session;\n\n\t\t\t}\n\n\t\t\tfunction onSessionEnded( /*event*/ ) {\n\n\t\t\t\tcurrentSession.removeEventListener( 'end', onSessionEnded );\n\n\t\t\t\tbutton.textContent = 'ENTER VR';\n\n\t\t\t\tcurrentSession = null;\n\n\t\t\t}\n\n\t\t\t//\n\n\t\t\tbutton.style.display = '';\n\n\t\t\tbutton.style.cursor = 'pointer';\n\t\t\tbutton.style.left = 'calc(50% - 50px)';\n\t\t\tbutton.style.width = '100px';\n\n\t\t\tbutton.textContent = 'ENTER VR';\n\n\t\t\tbutton.onmouseenter = function () {\n\n\t\t\t\tbutton.style.opacity = '1.0';\n\n\t\t\t};\n\n\t\t\tbutton.onmouseleave = function () {\n\n\t\t\t\tbutton.style.opacity = '0.5';\n\n\t\t\t};\n\n\t\t\tbutton.onclick = function () {\n\n\t\t\t\tif ( currentSession === null ) {\n\n\t\t\t\t\t// WebXR's requestReferenceSpace only works if the corresponding feature\n\t\t\t\t\t// was requested at session creation time. For simplicity, just ask for\n\t\t\t\t\t// the interesting ones as optional features, but be aware that the\n\t\t\t\t\t// requestReferenceSpace call will fail if it turns out to be unavailable.\n\t\t\t\t\t// ('local' is always available for immersive sessions and doesn't need to\n\t\t\t\t\t// be requested separately.)\n\n\t\t\t\t\tconst sessionInit = { optionalFeatures: [ 'local-floor', 'bounded-floor', 'hand-tracking' ] };\n\t\t\t\t\tnavigator.xr.requestSession( 'immersive-vr', sessionInit ).then( onSessionStarted );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tcurrentSession.end();\n\n\t\t\t\t}\n\n\t\t\t};\n\n\t\t}\n\n\t\tfunction disableButton() {\n\n\t\t\tbutton.style.display = '';\n\n\t\t\tbutton.style.cursor = 'auto';\n\t\t\tbutton.style.left = 'calc(50% - 75px)';\n\t\t\tbutton.style.width = '150px';\n\n\t\t\tbutton.onmouseenter = null;\n\t\t\tbutton.onmouseleave = null;\n\n\t\t\tbutton.onclick = null;\n\n\t\t}\n\n\t\tfunction showWebXRNotFound() {\n\n\t\t\tdisableButton();\n\n\t\t\tbutton.textContent = 'VR NOT SUPPORTED';\n\n\t\t}\n\n\t\tfunction stylizeElement( element ) {\n\n\t\t\telement.style.position = 'absolute';\n\t\t\telement.style.bottom = '20px';\n\t\t\telement.style.padding = '12px 6px';\n\t\t\telement.style.border = '1px solid #fff';\n\t\t\telement.style.borderRadius = '4px';\n\t\t\telement.style.background = 'rgba(0,0,0,0.1)';\n\t\t\telement.style.color = '#fff';\n\t\t\telement.style.font = 'normal 13px sans-serif';\n\t\t\telement.style.textAlign = 'center';\n\t\t\telement.style.opacity = '0.5';\n\t\t\telement.style.outline = 'none';\n\t\t\telement.style.zIndex = '999';\n\n\t\t}\n\n\t\tif ( 'xr' in navigator ) {\n\n\t\t\tbutton.id = 'VRButton';\n\t\t\tbutton.style.display = 'none';\n\n\t\t\tstylizeElement( button );\n\n\t\t\tnavigator.xr.isSessionSupported( 'immersive-vr' ).then( function ( supported ) {\n\n\t\t\t\tsupported ? showEnterVR() : showWebXRNotFound();\n\n\t\t\t} );\n\n\t\t\treturn button;\n\n\t\t} else {\n\n\t\t\tconst message = document.createElement( 'a' );\n\n\t\t\tif ( window.isSecureContext === false ) {\n\n\t\t\t\tmessage.href = document.location.href.replace( /^http:/, 'https:' );\n\t\t\t\tmessage.innerHTML = 'WEBXR NEEDS HTTPS'; // TODO Improve message\n\n\t\t\t} else {\n\n\t\t\t\tmessage.href = 'https://immersiveweb.dev/';\n\t\t\t\tmessage.innerHTML = 'WEBXR NOT AVAILABLE';\n\n\t\t\t}\n\n\t\t\tmessage.style.left = 'calc(50% - 90px)';\n\t\t\tmessage.style.width = '180px';\n\t\t\tmessage.style.textDecoration = 'none';\n\n\t\t\tstylizeElement( message );\n\n\t\t\treturn message;\n\n\t\t}\n\n\t}\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/VRButton.js?");

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! exports provided: APP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APP\", function() { return APP; });\n\nlet APP = {\n\n\tPlayer: function () {\n\n\t\tlet renderer = new THREE.WebGLRenderer({ antialias: true });\n\t\trenderer.setPixelRatio(window.devicePixelRatio);\n\t\trenderer.outputEncoding = THREE.sRGBEncoding;\n\n\t\tlet loader = new THREE.ObjectLoader();\n\t\tlet camera, scene;\n\n\t\tlet vrButton = VRButton.createButton(renderer);\n\n\t\tlet events = {};\n\n\t\tlet dom = document.createElement('div');\n\t\tdom.appendChild(renderer.domElement);\n\n\t\tthis.dom = dom;\n\n\t\tthis.width = 500;\n\t\tthis.height = 500;\n\n\t\tthis.load = function (json) {\n\n\t\t\tlet project = json.project;\n\n\t\t\tif (project.vr !== undefined) renderer.xr.enabled = project.vr;\n\t\t\tif (project.shadows !== undefined) renderer.shadowMap.enabled = project.shadows;\n\t\t\tif (project.shadowType !== undefined) renderer.shadowMap.type = project.shadowType;\n\t\t\tif (project.toneMapping !== undefined) renderer.toneMapping = project.toneMapping;\n\t\t\tif (project.toneMappingExposure !== undefined) renderer.toneMappingExposure = project.toneMappingExposure;\n\t\t\tif (project.physicallyCorrectLights !== undefined) renderer.physicallyCorrectLights = project.physicallyCorrectLights;\n\n\t\t\tthis.setScene(loader.parse(json.scene));\n\t\t\tthis.setCamera(loader.parse(json.camera));\n\n\t\t\tevents = {\n\t\t\t\tinit: [],\n\t\t\t\tstart: [],\n\t\t\t\tstop: [],\n\t\t\t\tkeydown: [],\n\t\t\t\tkeyup: [],\n\t\t\t\tmousedown: [],\n\t\t\t\tmouseup: [],\n\t\t\t\tmousemove: [],\n\t\t\t\ttouchstart: [],\n\t\t\t\ttouchend: [],\n\t\t\t\ttouchmove: [],\n\t\t\t\tupdate: []\n\t\t\t};\n\n\t\t\tlet scriptWrapParams = 'player,renderer,scene,camera';\n\t\t\tlet scriptWrapResultObj = {};\n\n\t\t\tfor (let eventKey in events) {\n\n\t\t\t\tscriptWrapParams += ',' + eventKey;\n\t\t\t\tscriptWrapResultObj[eventKey] = eventKey;\n\n\t\t\t}\n\n\t\t\tlet scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\\\"/g, '');\n\n\t\t\tfor (let uuid in json.scripts) {\n\n\t\t\t\tlet object = scene.getObjectByProperty('uuid', uuid, true);\n\n\t\t\t\tif (object === undefined) {\n\n\t\t\t\t\tconsole.warn('APP.Player: Script without object.', uuid);\n\t\t\t\t\tcontinue;\n\n\t\t\t\t}\n\n\t\t\t\tlet scripts = json.scripts[uuid];\n\n\t\t\t\tfor (let i = 0; i < scripts.length; i++) {\n\n\t\t\t\t\tlet script = scripts[i];\n\n\t\t\t\t\tlet functions = (new Function(scriptWrapParams, script.source + '\\nreturn ' + scriptWrapResult + ';').bind(object))(this, renderer, scene, camera);\n\n\t\t\t\t\tfor (let name in functions) {\n\n\t\t\t\t\t\tif (functions[name] === undefined) continue;\n\n\t\t\t\t\t\tif (events[name] === undefined) {\n\n\t\t\t\t\t\t\tconsole.warn('APP.Player: Event type not supported (', name, ')');\n\t\t\t\t\t\t\tcontinue;\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tevents[name].push(functions[name].bind(object));\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\tdispatch(events.init, arguments);\n\n\t\t};\n\n\t\tthis.setCamera = function (value) {\n\n\t\t\tcamera = value;\n\t\t\tcamera.aspect = this.width / this.height;\n\t\t\tcamera.updateProjectionMatrix();\n\n\t\t};\n\n\t\tthis.setScene = function (value) {\n\n\t\t\tscene = value;\n\n\t\t};\n\n\t\tthis.setSize = function (width, height) {\n\n\t\t\tthis.width = width;\n\t\t\tthis.height = height;\n\n\t\t\tif (camera) {\n\n\t\t\t\tcamera.aspect = this.width / this.height;\n\t\t\t\tcamera.updateProjectionMatrix();\n\n\t\t\t}\n\n\t\t\tif (renderer) {\n\n\t\t\t\trenderer.setSize(width, height);\n\n\t\t\t}\n\n\t\t};\n\n\t\tfunction dispatch(array, event) {\n\n\t\t\tfor (let i = 0, l = array.length; i < l; i++) {\n\n\t\t\t\tarray[i](event);\n\n\t\t\t}\n\n\t\t}\n\n\t\tlet time, prevTime;\n\n\t\tfunction animate() {\n\n\t\t\ttime = performance.now();\n\n\t\t\ttry {\n\n\t\t\t\tdispatch(events.update, { time: time, delta: time - prevTime });\n\n\t\t\t} catch (e) {\n\n\t\t\t\tconsole.error((e.message || e), (e.stack || \"\"));\n\n\t\t\t}\n\n\t\t\trenderer.render(scene, camera);\n\n\t\t\tprevTime = time;\n\n\t\t}\n\n\t\tthis.play = function () {\n\n\t\t\tif (renderer.xr.enabled) dom.append(vrButton);\n\n\t\t\tprevTime = performance.now();\n\n\t\t\tdocument.addEventListener('keydown', onDocumentKeyDown);\n\t\t\tdocument.addEventListener('keyup', onDocumentKeyUp);\n\t\t\tdocument.addEventListener('mousedown', onDocumentMouseDown);\n\t\t\tdocument.addEventListener('mouseup', onDocumentMouseUp);\n\t\t\tdocument.addEventListener('mousemove', onDocumentMouseMove);\n\t\t\tdocument.addEventListener('touchstart', onDocumentTouchStart);\n\t\t\tdocument.addEventListener('touchend', onDocumentTouchEnd);\n\t\t\tdocument.addEventListener('touchmove', onDocumentTouchMove);\n\n\t\t\tdispatch(events.start, arguments);\n\n\t\t\trenderer.setAnimationLoop(animate);\n\n\t\t};\n\n\t\tthis.stop = function () {\n\n\t\t\tif (renderer.xr.enabled) vrButton.remove();\n\n\t\t\tdocument.removeEventListener('keydown', onDocumentKeyDown);\n\t\t\tdocument.removeEventListener('keyup', onDocumentKeyUp);\n\t\t\tdocument.removeEventListener('mousedown', onDocumentMouseDown);\n\t\t\tdocument.removeEventListener('mouseup', onDocumentMouseUp);\n\t\t\tdocument.removeEventListener('mousemove', onDocumentMouseMove);\n\t\t\tdocument.removeEventListener('touchstart', onDocumentTouchStart);\n\t\t\tdocument.removeEventListener('touchend', onDocumentTouchEnd);\n\t\t\tdocument.removeEventListener('touchmove', onDocumentTouchMove);\n\n\t\t\tdispatch(events.stop, arguments);\n\n\t\t\trenderer.setAnimationLoop(null);\n\n\t\t};\n\n\t\tthis.dispose = function () {\n\n\t\t\trenderer.dispose();\n\n\t\t\tcamera = undefined;\n\t\t\tscene = undefined;\n\n\t\t};\n\n\t\t//\n\n\t\tfunction onDocumentKeyDown(event) {\n\n\t\t\tdispatch(events.keydown, event);\n\n\t\t}\n\n\t\tfunction onDocumentKeyUp(event) {\n\n\t\t\tdispatch(events.keyup, event);\n\n\t\t}\n\n\t\tfunction onDocumentMouseDown(event) {\n\n\t\t\tdispatch(events.mousedown, event);\n\n\t\t}\n\n\t\tfunction onDocumentMouseUp(event) {\n\n\t\t\tdispatch(events.mouseup, event);\n\n\t\t}\n\n\t\tfunction onDocumentMouseMove(event) {\n\n\t\t\tdispatch(events.mousemove, event);\n\n\t\t}\n\n\t\tfunction onDocumentTouchStart(event) {\n\n\t\t\tdispatch(events.touchstart, event);\n\n\t\t}\n\n\t\tfunction onDocumentTouchEnd(event) {\n\n\t\t\tdispatch(events.touchend, event);\n\n\t\t}\n\n\t\tfunction onDocumentTouchMove(event) {\n\n\t\t\tdispatch(events.touchmove, event);\n\n\t\t}\n\n\t}\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/app.json":
/*!******************************!*\
  !*** ./src/scripts/app.json ***!
  \******************************/
/*! exports provided: metadata, project, camera, scene, scripts, default */
/***/ (function(module) {


/***/ }),

/***/ "./src/scripts/planet.js":
/*!*******************************!*\
  !*** ./src/scripts/planet.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/scripts/app.js\");\n/* harmony import */ var _VRButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VRButton */ \"./src/scripts/VRButton.js\");\n/* harmony import */ var _app_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.json */ \"./src/scripts/app.json\");\nvar _app_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./app.json */ \"./src/scripts/app.json\", 1);\n\n\n\n\n\nwindow.THREE = three__WEBPACK_IMPORTED_MODULE_0__;\nwindow.VRButton = _VRButton__WEBPACK_IMPORTED_MODULE_2__[\"VRButton\"];\n\nlet player = new _app__WEBPACK_IMPORTED_MODULE_1__[\"APP\"].Player();\nplayer.load(_app_json__WEBPACK_IMPORTED_MODULE_3__);\nplayer.setSize(window.innerWidth, window.innerHeight);\nplayer.play();\n\ndocument.body.appendChild(player.dom);\n\nwindow.addEventListener('resize', function () {\n\n  player.setSize(window.innerWidth, window.innerHeight);\n\n});\n\n\n//# sourceURL=webpack:///./src/scripts/planet.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ });