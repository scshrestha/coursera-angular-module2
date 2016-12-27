(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var showItemsToBuy = this;
  
	showItemsToBuy.items = ShoppingListCheckOffService.getAvailableItems();

	showItemsToBuy.buyItem = function (item)
	{
		ShoppingListCheckOffService.buyItem(item);
	}
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var showAlreadyBoughtItems = this;
	
	showAlreadyBoughtItems.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
	var service = this;
	
	var availableItems = [ 
		{
            name: "apple",
            quantity: 1
        },
        {
            name: "orange",
            quantity: 2
        },
        {
            name: "banana",
            quantity: 8
        },
        {
            name: "mango",
            quantity: 12
        },
        {
          name: "avocado",
          quantity:3
        }];
	var boughtItems = [];
	
	service.getAvailableItems = function()
	{
		return availableItems;
	}
	
	service.getBoughtItems = function()
	{
		return boughtItems;
	}
		
	service.buyItem = function(item)
	{
		availableItems.splice(availableItems.indexOf(item),1);
		boughtItems.push(item);
	}
};

})();
