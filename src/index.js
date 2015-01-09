require('./styles');
var Engine = require('famous/core/Engine');
var ScrollView = require('famous/views/Scrollview');
var Surface = require('famous/core/Surface');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var View = require('famous/core/View');
var context = Engine.createContext();

function satColor(hue, sat, lum) {
	  return "hsl(" + hue + ", "+sat+"%, "+lum+"%)";
	}

function PallettePicker(options) {
	//calls the constructor of View
	View.call(this, options);

	var surfaces = [];
	var surface;

	this.hue = options.hue;
	var sat = 100;
	this.lum = options.lum;

	var scrollView = new ScrollView();
	for (var i = 0; i < 300; i++) {
	  surface = new Surface({
	    size: [200, 100],
	    properties: {
	      backgroundColor: satColor(this.hue, sat, this.lum)
	    }
	  });
	  surfaces.push(surface);
	  scrollView.subscribe(surface);
	  if (sat > 0) {
	  	sat -= 3;
	  }
	  else {
	   sat = 100;
	  }
	}

	scrollView.sequenceFrom(surfaces);
	var horizontal = function(offset) {
	 return Transform.translate(offset, 0, 0);
	// return Transform.translate(offset, offset, 0);
	};
	scrollView.outputFrom(horizontal);


	var scrollModifier = new Modifier({
	  transform: Transform.translate(0, options.height)
	});

	this.add(scrollModifier).add(scrollView);
}
//inherits properties from view Object
PallettePicker.prototype = Object.create(View.prototype);
PallettePicker.prototype.constructor = PallettePicker;

//instantiate color picker views
var orangePicker = new PallettePicker({
	hue: 18,
	lum: 50,
	height: 0

});

var yellowPicker = new PallettePicker({
	hue: 40,
	lum: 50,
	height: 100

});

var turqPicker = new PallettePicker({
	hue: 150,
	lum: 50,
	height: 200
});

var lturqPicker = new PallettePicker({
	hue: 163,
	lum: 50,
	height: 300

});

var bluePicker = new PallettePicker({
	hue: 200,
	lum: 50,
	height: 400

});

var purpPicker = new PallettePicker({
	hue: 330,
	lum: 50,
	height: 500
});


var redPicker = new PallettePicker({
	hue: 344,
	lum: 50,
	height: 600

});

var greenPicker = new PallettePicker({
	hue: 138,
	lum: 50,
	height: 700

});

var blue2Picker = new PallettePicker({
	hue: 222,
	lum: 50,
	height: 800
});


context.add(orangePicker);  
context.add(yellowPicker);
context.add(turqPicker);

context.add(lturqPicker);  
context.add(bluePicker);
context.add(purpPicker);

context.add(redPicker);  
context.add(greenPicker);
context.add(blue2Picker);
