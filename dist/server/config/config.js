'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),exports.default=function(a,b){var c=(0,_expressSession2.default)({name:'net.aivn',secret:'M\xE3 b\u1EA3o m\u1EADt session \u1EDF m\xE1y ch\u1EE7',resave:!1,saveUninitialized:!0,cookie:{path:'/',httpOnly:!0,secure:!1,maxAge:null}});b.use(function(a,b){c(a.request,a.request.res,b)}),a.use(c),a.use(_bodyParser2.default.json()),a.use(_bodyParser2.default.urlencoded({extended:!0})),a.use((0,_cookieParser2.default)()),a.set('json spaces',2),(0,_config2.default)(a)};var _expressSession=require('express-session'),_expressSession2=_interopRequireDefault(_expressSession),_bodyParser=require('body-parser'),_bodyParser2=_interopRequireDefault(_bodyParser),_cookieParser=require('cookie-parser'),_cookieParser2=_interopRequireDefault(_cookieParser),_config=require('./config.client'),_config2=_interopRequireDefault(_config);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}