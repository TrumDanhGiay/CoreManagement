

app.controller('LoginController', ['$scope','$state', 'APIcall', function ($scope, $state, APIcall, dataFactory) {

    $scope.login = function () {
        var acc = "grant_type=password&username=" + $scope.username + "&password=" + $scope.password;
        APIcall.check('/Token', acc).then(function (response) {
            sessionStorage['token'] = response.data.access_token;
            APIcall.AuthencationKey('api/Key', sessionStorage['token']).then(function (response) {
                $scope.errors = "Đăng nhập thành công";
                setTimeout(function () {
                    $state.go("layoutAadmin");
                }, 200);
               
            })
        }).catch(function (error) {
            var errorlogin = [];
            errorlogin.push("The username or password is incorrect.");
            $scope.loginerror = errorlogin;
        });;
    };

    $scope.register = function () {
        var info = "username=" + $scope.username + "&email=" + $scope.email + "&password=" + $scope.password + "&confirmpassword=" + $scope.confirmpassword;
        APIcall.register('/api/Account/Register', info).then(function (response) {
            $scope.errors = "Đăng kí thành công";
            window.location.href = "/#/Home/Login";
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