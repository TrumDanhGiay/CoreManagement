
var app = angular.module('LoginApp', ['ui.router', 'ngAnimate', 'angular-loading-bar', 'oc.lazyLoad']);

//app.controller('homecontroller', function ($ocLazyLoad) {
//    $ocLazyLoad.load('/Scripts/bootstrap.js');
//});

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider', 'cfpLoadingBarProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider, cfpLoadingBarProvider, $ocLazyLoadProvider) {


    $ocLazyLoadProvider.config({
        debug: true
    });

    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

    $urlRouterProvider.when('/Login', '/Login/LoginPartial');
    $urlRouterProvider.when('/Layout', '/Layout/Dashboard');

    $stateProvider.state('login', {
        url: "/Login",
        templateUrl: "/Home/Login"
        }).state('login.loginPartial', {
            url: "/LoginPartial",
            templateUrl: "/Home/LoginPartial",
            controller : "LoginController"
        }).state('login.register', {
            url: "/Register",
            templateUrl: "/Home/Register",
            controller: "LoginController"
        })

    .state('layoutAadmin', {
        url: "/Layout",
        templateUrl: "/Home/LayoutAdmin",
        controller: 'DashboardController'
        }).state('layoutAadmin.dashboard', {
            url: "/Dashboard",
            templateUrl: "/Home/Dashboard",
            controller: 'DashboardController'
        }).state('layoutAadmin.userprofile', {
            url: "/UserProfile",
            templateUrl: "/Home/UserProfile",
            controller: 'DashboardController'
        })
    $urlRouterProvider.otherwise("/Login");


    $locationProvider.hashPrefix('');
    //cfpLoadingBarProvider.includeBar = false;
    //cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
    //cfpLoadingBarProvider.latencyThreshold = 500;
}]);

//app.run(function ($rootScope, cfpLoadingBar) {
//    $rootScope.$on('$routeChangeStart', function () {
//        cfpLoadingBar.start();
//    });

//    $rootScope.$on('$routeChangeSuccess', function () {
//        cfpLoadingBar.complete();
//    });
//});







