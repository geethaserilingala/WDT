<!doctype html>
<html ng-app="myApp">
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-route.min.js"></script>

    <style>
        #footer {
            position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer */
            height: 40px;
        }

#footer{
position:fixed;
left:0;
bottom:0;
width:100%;
color:white;
background:green;
text-align:center;
}
    </style>
</head>
<body>
    <script>
        var app = angular.module('myApp', ['ngRoute']);
        app.config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller : 'HomeController'
            })
            .when('/blog', {
                templateUrl : 'pages/blog.html',
                controller : 'BlogController'
            })
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller : 'AboutController'
            })
            .otherwise({redirectTo: '/'});
        });

        app.controller('HomeController', function($scope) {
            $scope.message = 'Hello from HomeController';
        });

        app.controller('BlogController', function($scope) {
            $scope.message = 'Hello from BlogController';
        });

        app.controller('AboutController', function($scope) {
            $scope.message = 'Hello from AboutController';
        });
    </script>

    <script type="text/ng-template" id="pages/home.html">
        <h1>Home</h1>
        <h3>{{message}}</h3>
    </script>

    <script type="text/ng-template" id="pages/blog.html">
        <h1>Blog</h1>
        <h3>{{message}}</h3>
    </script>

    <script type="text/ng-template" id="pages/about.html">
        <h1>About</h1>
        <h3>{{message}}</h3>
    </script>

    <a href="#/">Home</a>
    <a href="#/blog">Blog</a>
    <a href="#/about">About</a>
    <div ng-view></div>

    <div id="footer">
        <p align="center"> &copy; M. Hemanth Kumar Rao--all rights reserved </p>
    </div>
</body>
</html>