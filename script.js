
(function(){
	var start;
	var k = 0;
	var time;

	var Memory = {
		init: function(){
			this.$sucsess = $(".sucsess");
			this.$gif = $(".gif");
			this.setup();
		},

		setup: function(){
			this.binding();
		},

		binding: function(){
			this.$sucsess.on("click", $.proxy(this.go, this));
		},

		go: function(){
			this.$sucsess.hide();
			this.$gif.show();

		},
		
	};
    
	Memory.init();

})();