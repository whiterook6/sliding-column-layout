angular
	.module('LayoutApp', [])
	.controller('LayoutController', [function() {
		var ctrl = this;

		ctrl.far_left = function(){
			ctrl.layout_class = "la-far-left";
			console.log(ctrl.layout_class);

			ctrl.hide_far_left = ctrl.left;
			ctrl.show_middle = ctrl.far_left_middle;
		};

		ctrl.far_left_middle = function(){
			ctrl.layout_class = "la-far-left-middle";
			console.log(ctrl.layout_class);

			ctrl.hide_far_left = ctrl.left_middle;
			ctrl.hide_middle = ctrl.far_left;
		};

		ctrl.left = function(){
			ctrl.layout_class = "la-left";
			console.log(ctrl.layout_class);

			ctrl.show_far_left = ctrl.far_left;
			ctrl.show_middle = ctrl.left_middle;
		};

		ctrl.left_middle = function(){
			ctrl.layout_class = "la-left-middle";
			console.log(ctrl.layout_class);

			ctrl.show_far_left = ctrl.far_left_middle;
			ctrl.hide_middle = ctrl.left;
			ctrl.show_right = ctrl.middle;
		};

		ctrl.middle = function(){
			ctrl.layout_class = "la-middle";
			console.log(ctrl.layout_class);

			ctrl.show_far_left = ctrl.far_left_middle;
			ctrl.show_left = ctrl.middle;
			ctrl.hide_left = ctrl.right_middle;
			ctrl.hide_right = ctrl.left_middle;
			ctrl.show_right = ctrl.middle;
			ctrl.show_right_far = ctrl.middle_right_far;
		};

		ctrl.middle_right = function(){
			ctrl.layout_class = "la-middle-right";
			console.log(ctrl.layout_class);

			ctrl.show_left = ctrl.middle;
			ctrl.hide_middle = ctrl.right;
			ctrl.show_right_far = ctrl.middle_right_far;
		};

		ctrl.right = function(){
			ctrl.layout_class = "la-right";
			console.log(ctrl.layout_class);

			ctrl.show_middle = ctrl.middle_right;
			ctrl.show_right_far = ctrl.right_far;
		};

		ctrl.middle_right_far = function(){
			ctrl.layout_class = "la-middle-right-far";
			console.log(ctrl.layout_class);

			ctrl.hide_middle = ctrl.right_far;
			ctrl.hide_right_far = ctrl.middle_right;
		};

		ctrl.right_far = function(){
			ctrl.layout_class = "la-right-far";
			console.log(ctrl.layout_class);

			ctrl.show_middle = ctrl.middle_right_far;
			ctrl.hide_right_far = ctrl.right;
		};

		ctrl.middle();
	}]);