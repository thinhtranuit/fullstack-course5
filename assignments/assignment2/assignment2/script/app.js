(function () {
    var app = angular.module('ShoppingList', []);

    app.controller('Controller', ['ListService', function (ListService) {
        var self = this;
        self.toBuyList = ListService.getToBuyList();
        self.boughtList = ListService.getBoughtList();
        self.buy = function (index) {
            ListService.buy(index);
        };
    }]);

    app.service('ListService', function () {
        var service = this;
        service.toBuyList = [
            {name: "cookies", quantity: 10},
            {name: "coca", quantity: 20},
            {name: "pepsi", quantity: 50},
            {name: "donut", quantity: 90},
            {name: "lollipop", quantity: 100}
        ];
        service.boughtList = [];
        service.buy = function (index) {
            var item = service.toBuyList.splice(index, 1);
            service.boughtList.push(item[0]);
        };
        service.getToBuyList = function () {
            return service.toBuyList;
        };
        service.getBoughtList = function () {
            return service.boughtList;
        };
    });
})();