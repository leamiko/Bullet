
// Declare app level module which depends on filters, and services



define([
   	    'angularAMD'
   	   , 'app'
  	
  	], function (angularAMD, app) {//加载依赖js,
 
	
/* 配置路由器 */

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	
	/* 主页 */
	$routeProvider
		// 主页
		.when('/index', router({
	        templateUrl: 'view/home/index.htm'
	      , controllerUrl: 'view/home/index.js'
		}))
	
		// 登录
		.when('/login', router({
			minTitle: "登录",
			templateUrl: '/view/login/login.htm'
		  , controllerUrl: '/view/login/login.js'
		}))
		
	
		
		// 我的设备
		.when('/user/device', router({
            minTitle: "我的设备"
            , templateUrl: 'view/device/device.htm'
            , controllerUrl: 'view/device/device.js'
		}))
        .when('/user/device/bind', router({
            minTitle: "绑定设备"
            , templateUrl: 'view/device/bind.htm'
            , controllerUrl: 'view/device/bind.js'
        }))
        // 端口映射
        .when('/user/device/:deviceId/mapping', router({
            minTitle: "设备端口映射"
            , templateUrl: 'view/device/mapping.htm'
            , controllerUrl: 'view/device/mapping.js'
        }))
		
		
		.when('/register', router({
			templateUrl: 'view/register/register.htm'
		  , controllerUrl: 'view/register/register.js'
		}))
		
		/* 用户路由  */ 
		.when('/user/profile', router({
			templateUrl: '/template/user/profile.htm'
		  , controllerUrl: '/js/controllers/user/profile.js'
		}))
		.when('/user/archives', router({
			templateUrl: '/template/user/archives.htm' 
		  , controllerUrl: '/js/controllers/user/archives.js'
				
		}))
		.when('/user/photos', router({
			templateUrl: '/template/user/photos.htm' 
		}))
		.when('/user/messages', router({
			templateUrl: '/template/user/messages.htm' 
		}))
		.when('/user/friends', router({
			templateUrl: '/template/user/friends.htm' 
		}))
		.when('/user/wishs', router({
			templateUrl: '/template/user/wishs.htm' 
		}))
		
		
		/* 闪聊模式 */
		.when('/flashchat/index', router({
			templateUrl: '/template/flashchat/index.htm'
		  , controllerUrl: '/js/controllers/flashchat.js'
		}))
		
		/* 心愿墙 */
    	.when('/wishwall/build', router({
			templateUrl: '/template/wishwall/build.htm'
		  , controllerUrl: '/js/controllers/wishwall.js'
		}))

		// 在线视频
		.when('/app/video/index', router({
			minTitle: "登录",
			templateUrl: '/view/video/video.htm'
			, controllerUrl: '/view/video/video.js'
		}))
		
		
		
		.when('/wishwall/item/:objectId', router({
			templateUrl: '/template/wishwall/item.htm'
		  , controllerUrl: '/js/controllers/wishwall/item.js'
		}))
		
		.when('/wishwall/index', router({
			templateUrl: '/template/wishwall/index.htm'
		  , controllerUrl: '/js/controllers/wishwall/index.js'
		}))




		/** ****************************************
		 *
		 *    手机端(AmazeUI)
		 *
		 * ****************************************
		 * */
		.when('/mobi/secret', router({
			templateUrl: '/view/mobi/secret/app.htm'
			, controllerUrl: '/view/mobi/secret/app.js'
		}))
		/** 登录 */
		.when('/mobi/login', router({
			templateUrl: '/view/mobi/login/app.htm'
			, controllerUrl: '/view/mobi/login/app.js'
		}))
        /** 注册账号 */
        .when('/mobi/register', router({
            templateUrl: '/view/mobi/register/app.htm'
            , controllerUrl: '/view/mobi/register/app.js'
        }))
        /** 忘记密码 */
        .when('/mobi/forget', router({
            templateUrl: '/view/mobi/forget/app.htm'
            , controllerUrl: '/view/mobi/forget/app.js'
        }))

		/** 个人资料 */
		.when('/mobi/profile', router({
			templateUrl: '/view/mobi/profile/app.htm'
			, controllerUrl: '/view/mobi/profile/app.js'
		}))
		/** 附近 */
		.when('/mobi/near', router({
			templateUrl: '/view/mobi/near/app.htm'
			, controllerUrl: '/view/mobi/near/app.js'
		}))





		// 访问其他地址，自动跳转至主页
		.otherwise({redirectTo: '/index'});



	// 重写地址支持
    // $locationProvider5Mode(true).hashPrefix('#');
    
    
 
}]);




/**
 * 实现AMD规范异步加载数据
 */
function router(config){
	
	// 生成独立URL，保证不缓存页面数据
	var random = "?t=" + Math.random();
	config.templateUrl = config.templateUrl + random;
	return angularAMD.route(config);
}


//.run(['$rootScope', function($rootScope) {
//	
//	
//    $rootScope.$on('$routeChangeStart', function(evt, next, current) {
//        // 如果用户未登录
//    	var control = next.$$route.controller;// 控制器名称
//    	
//        // alert(JSON.stringify(next.$$route.controller));
//        
////        console.log(control);
////        if(control  == 'RegisterController'){
////        	
////        
////	        require([control],function(c){  
////				
////				console.log(c); 
////			}); 
////        }
//		
//        
//        
//    });
//    
//    
//    
//}]);

 

});