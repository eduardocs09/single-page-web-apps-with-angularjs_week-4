(function () {
	'use strict';

	angular.module('MenuApp').component('categories', {
  	templateUrl: 'src/menuapp/components/categories.component.html',
  	bindings: {
    	items: '<'
  	}
	});

})();
