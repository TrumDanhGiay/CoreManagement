app.controller("DashboardController", ['$scope', 'APIcall', function ($scope, APIcall) {
    $scope.location = "Đang xác định ...";
    $scope.weather = "Đang lấy dữ liệu";
    var DofW = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $scope.lat = position.coords.latitude;
            $scope.lng = position.coords.longitude;
        });
    }
    var interval = setInterval(function () {
        if ($scope.lat != null) {
            APIcall.getCityName("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + $scope.lat + "," + $scope.lng + "&sensor=true").then(function (response) {
                var location = response.data.results[0].formatted_address;
                $scope.location = location;
                clearInterval(interval);
            }).catch(function (error) {
                $scope.location = "Không xác định";
            })
        }
    }, 2000);
    var interval1 = setInterval(function () {
        if ($scope.lat != null) {
            APIcall.getCityName("http://api.openweathermap.org/data/2.5/weather?lat=" + $scope.lat + "&lon=" + $scope.lng + "&APPID=62927b11771e26157e9bc884aefb9d7e").then(function (response) {
                $scope.temp = (response.data.main.temp -273,15);
                $scope.dayofweek = DofW[new Date().getDay()-1];
                console.log(DofW[new Date().getDay()]);
                $scope.day = new Date().getDate();
                $scope.month = month[new Date().getMonth()];
                console.log(month[new Date().getMonth()]);
                console.log(response.data.weather[0].main);
                switch(response.data.weather[0].main){
                    case "Clouds": {
                        $("#button-wind").click();
                    }
                    case "Clear": {
                        $("#button-sun").click();
                    }
                }
                clearInterval(interval1);
            }).catch(function (error) {
            })
        }
    }, 5000);
    window.onload = function () {

        var dps = []; // dataPoints
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "User"
            },
            axisY: {
                includeZero: false
            },
            data: [{
                type: "line",
                dataPoints: dps
            }]
        });

        var xVal = 1000;
        var yVal = 5000;
        var updateInterval = 100;
        var dataLength = 500; // number of dataPoints visible at any point

        var updateChart = function (count) {

            count = count || 1;

            for (var j = 0; j < count; j++) {
                yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
                dps.push({
                    x: xVal,
                    y: yVal
                });
                xVal++;
            }

            if (dps.length > dataLength) {
                dps.shift();
            }

            chart.render();
        };

        updateChart(dataLength);
        setInterval(function () { updateChart() }, updateInterval);

    }
}]);
