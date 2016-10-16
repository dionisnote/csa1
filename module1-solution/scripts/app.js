(function(){
    "use strict";

    angular.module('LunchApp', []);

    angular.module('LunchApp')
        .controller('LunchAmountCtrl', LunchAmountCtrl);

    LunchAmountCtrl.$inject = ['$scope'];

    function LunchAmountCtrl($scope) {
        $scope.msg = '';
        $scope.lunchData = '';

        $scope.checkLunch = checkLunch;
        $scope.clearMsg = clearMsg;

        function checkLunch() {
            if( $scope.lunchData !== "") {
                var itemsCnt = csvItemsCnt($scope.lunchData);
                setMsgByCnt(itemsCnt);
            } else {
                $scope.msg = "Please enter Data first.";
            }

        }

        function clearMsg() {
            $scope.msg = '';
        }

        function csvItemsCnt(str) {
            var itemsArr = str.split(',');
            var cnt = 0;
            for(var i = 0; i < itemsArr.length; i++) {
                var val = itemsArr[i];
                if( val ) {
                    cnt++;
                }
            }

            return cnt;
        }

        function setMsgByCnt(cnt) {
            if(cnt < 1) {
                $scope.msg = '';
            } else if( cnt < 4 ) {
                $scope.msg = 'Enjoy!';
            } else {
                $scope.msg = 'Too much!';
            }
        }

    }

})();