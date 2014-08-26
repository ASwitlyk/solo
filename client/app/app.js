var selfies = angular.module('selfies', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		  $routeProvider
		  	.when('/signup', {
		  		templateUrl: 'templates/signup.html',
		  		controller: 'loginCtrl'
		  	})
		    .when('/login', {
		    	templateUrl: 'templates/login.html',
		    	controller: 'loginCtrl'
		    })
		    .when('/upload', {
		    	templateUrl: 'templates/upload.html',
		    	controller: 'selfiesCtrl'
		    })
		    .when('/MostLiked', {
		    	templateUrl: 'templates/mostliked.html',
		    	controller: 'selfiesCtrl'
		    })
		    .when('/MostRecent', {
		    	templateUrl: 'templates/mostrecent.html',
		    	controller: 'selfiesCtrl'
		    })
		    .when('/useradmin', {
		    	templateUrl: 'template/useradmin.html',
		    	controller: 'loginCtrl'
		    })
		    .otherwise({
		    	templateUrl: 'templates/splash.html',
		    	controller: 'selfiesCtrl'
		    });
		  // html5Mode allows your routes to not have a hash
		  $locationProvider.html5Mode(true);
		}]);

selfies.controller('selfiesCtrl', function($scope) {
	$scope.test = 'hello world!';
})