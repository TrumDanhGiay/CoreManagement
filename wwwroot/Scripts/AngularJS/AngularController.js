
app.controller('LoginController', ['$scope', '$state', 'APIcall', function ($scope, $state, APIcall, dataFactory) {

    $scope.login = function () {
        var acc = {
            UserName: $scope.username,
            Password: $scope.password,
            RememberMe: true
        }
        APIcall.check('/api/AccessUser/Login', acc).then(function (response) {
            sessionStorage['token'] = response;
            $state.go("layoutAadmin");
        }).catch(function (error) {
            var errorlogin = [];
            errorlogin.push("The username or password is incorrect.");
            $scope.loginerror = errorlogin;
        });;
    };

    $scope.register = function () {
        var info = {
            UserName: $scope.username,
            Email: $scope.email,
            Password: $scope.password,
            ConfirmPassword: $scope.confirmpassword
        }
        APIcall.register('/api/Account/Register', info).then(function (response) {
            $scope.errors = "Đăng kí thành công";
            $state.go("login");
            //alert("Đăng kí thành công, tên đăng nhập là : " + data.UserName);
        }).catch(function (error) {
            $scope.errors = parseErrors(error);
            console.log($scope.errors);
        });
    };

    $scope.change = function () {
        $scope.loginerror = {};
        $scope.errors = {};
    }

}]);

function parseErrors(response) {
    var errors = [];
    for (var key in response.data.ModelState) {
        for (var i = 0; i < response.data.ModelState[key].length; i++) {
            errors.push(response.data.ModelState[key][i]);
        }
    }
    return errors;
}