

app.factory('APIcall', ['$http', function ($http) {

    //Login
    var dataFactory = {};
    dataFactory.check = function (url, acc) {
        return $http.post(url,
            acc,
            {
                headers: { 'Content-Type': 'application/json' },
            })
    };

    //Dang ki
    dataFactory.register = function (url, info) {
        return $http.post(url,
            info,
            {
                headers: { 'Content-Type': 'application/json' },
            })
    };
   

    //Đưa menu lên Web API
    dataFactory.SendInfo = function (url, info) {
        return $http.post(url, info).then(function (response) {
        });
    };

    //Call google to get location name
    dataFactory.getCityName = function (url) {
        return $http.get(url);
    }

    //Dynamic API test 
    dataFactory.Get = function (url, data) {
        return $http.post(url, data).then(function (respense) {
            console.log(respense);
        });
    }

    //Authorize Request
    dataFactory.AuthencationKey = function (url, key) {
        return $http.post(url, key, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + key
            }
        });
    }
    return dataFactory;

}]);