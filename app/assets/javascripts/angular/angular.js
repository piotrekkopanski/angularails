angular.module('myApp', []).controller('namesCtrl', function($scope,$timeout) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }

      $scope.myHeader = "Hello World!(wait 2 seconds)";
  $timeout(function () {
      $scope.myHeader = "How are you today?";
  }, 2000);

  $scope.firstname = "John";
    $scope.changeName = function() {
        $scope.firstname = "Nelly";
    }

  $scope.showMe = false;
  $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    };

    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
});
