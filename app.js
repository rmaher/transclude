var app = angular.module('mustardApp', []);


app.directive('optIn', function() {
	return {
		restrict: 'E',
		trasclude: true,
		template: '<div class="opt-in"><span ng-transclude></span><form><p>First Name: <input type="text" name="fname"></p><p>Last Name: <input type="text" name="lname"></p><p>Email: <input type="email"></p><input type="submit" value="Subscribe"></form></div>',
        replace: true
	}
});