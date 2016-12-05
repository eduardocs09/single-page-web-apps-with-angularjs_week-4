(function () {
	'use strict';

	angular.module('MenuApp').component('items', {
  	templateUrl: 'src/menuapp/components/items.component.html',
  	bindings: {
    	menuItems: '<'
  	}
	});

})();
