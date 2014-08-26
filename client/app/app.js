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
		    	controller: 'selfiesRecentCtrl'
		    })
		    .when('/MostRecent', {
		    	templateUrl: 'templates/mostrecent.html',
		    	controller: 'selfiesRecentCtrl'
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
});

selfies.controller('selfiesRecentCtrl', function($scope, $http) {

	$scope.imageLocations = ["./testphotos/img1.jpeg",
							"./testphotos/img2.jpeg",
							"./testphotos/img3.jpeg",
							"./testphotos/img4.jpeg",
							"./testphotos/img5.jpeg",
							"./testphotos/img6.jpg"];
	// $scope.imageLocations = [];
	
	$scope.getRecent = function() {
		$http({method: 'GET', url: '/getRecent'}).
		   success(function(data, status) {
			console.log('data is: ', data);
			console.log('status is: ', status);
		   }).
		   error(function(data, status, headers, config) {
		   		console.log('error!!');
		   });
	};

});

selfies.controller('selfiesMostLikedCtrl', function($scope) {

});

