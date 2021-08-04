(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD966").ss(19,1,1).p("AMHAAQAAFBjkDiQjiDklBAAQlAAAjjjkQjjjiAAlBQAAlADjjjQDjjjFAAAQFBAADiDjQDkDjAAFAg");
	this.shape.setTransform(77.45,77.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD966").s().p("AojIkQjijjgBlBQABlADijjQDjjiFAgBQFBABDjDiQDjDjgBFAQABFBjjDjQjjDjlBgBQlAABjjjjg");
	this.shape_1.setTransform(77.45,77.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(-9.5,-9.5,173.9,173.9), null);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(121,19,27,0.553)").s().p("AgIAAIAPAAIACAAIAAAAIgRABIAAgBg");
	this.shape.setTransform(118.275,218.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(95,15,19,0.427)").s().p("AgJAAIARAAIACAAIAAAAIgTABIAAgBg");
	this.shape_1.setTransform(115.475,218.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(133,22,53,0.631)").s().p("AgHAAIAPAAIAAABIgCAAIgFAAQgFAAgDgBg");
	this.shape_2.setTransform(102.125,218.3225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(103,16,27,0.475)").s().p("AgKAAIAVAAIAAABIgCAAIgHAAQgHAAgFgBg");
	this.shape_3.setTransform(104.95,218.5225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(114,19,40,0.537)").s().p("AgHAAIAPAAIAAABIgCAAIgGAAIgBAAIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_4.setTransform(101.925,204.2125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(85,14,17,0.388)").s().p("AgIAAIARAAIAAAAIgCABIgFAAQgGAAgEgBg");
	this.shape_5.setTransform(105.125,204.4125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(140,21,30,0.635)").s().p("AgHAAIANAAIACAAIAAAAIgPABIAAgBg");
	this.shape_6.setTransform(115.875,204.3625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(170,27,62,0.796)").s().p("AgYAAIAvAAIACAAIAAAAIgWABQgOAAgNgBg");
	this.shape_7.setTransform(110.075,204.5521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(109,17,21,0.49)").s().p("AgHAAIANAAIACAAIAAAAIgPABIAAgBg");
	this.shape_8.setTransform(118.175,204.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(227,32,35,0.992)").s().p("AgHA0IgDAAQgogLgCguIAAgCIAHgUIABgBQAUgfArAMIALADQAIAHAGAIIACABIAEANIABAAQAAAJACAGIAAACQgCAQgHALIgBACQgLANgTAHIAAABIgUAAg");
	this.shape_9.setTransform(127,161.3926);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(134,21,33,0.612)").s().p("AgMAAIAXAAIACAAIgBAAIgLABQgGAAgHgBg");
	this.shape_10.setTransform(110.175,190.84);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(90,15,18,0.404)").s().p("AgHAAIANAAIACAAIAAAAIgIABQgDAAgEgBg");
	this.shape_11.setTransform(110.075,185.0275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(214,33,71,0.988)").s().p("AACB3IgWAAIgCAAQgggGgWgSIgBgBIgTgQIAAgCIgCgDIgBgBQgDgEgFgDIgBgCQgagjgSgqIABAAQACgGgDgEIACAAQAEgHgGgKQAIgHgBgIIgBAAQgBgIAIgHIgBAAQgGgGAGgEIACAAIADgHIABgBQADgSAAgLIABAAQAXBIAkA8IABADQAGAFAFAIIAAACIATARIABACQAKAFALAEIACABQAFADAKgCIAAgBQAfgLAPgaIACAAQAfgtAUg6IABAAQAYAFAcAMIACAAQgRA0gZAqIgBABQgDACgBACIgBABQgEAJgHAIIgBAAQgbAxg8APIgCAAIgCAAg");
	this.shape_12.setTransform(111.025,178.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(78,28,78,0.557)").s().p("AAAAIIAAgPQACAFgBAIIAAACg");
	this.shape_13.setTransform(85.4225,124.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,37,111,0.78)").s().p("AAAAOIAAgcQACAMgBAPIAAABg");
	this.shape_14.setTransform(96.2725,115.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(44,27,55,0.353)").s().p("AAAAOIAAgbIABAAIAAAaIAAABg");
	this.shape_15.setTransform(85.025,113.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(70,33,78,0.522)").s().p("AAAAvIAAhdIABAAIAABbIAAACg");
	this.shape_16.setTransform(90.825,111.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(78,41,85,0.553)").s().p("AAAAWIAAgCIAAgpIABAAIAAApIAAACIgBAAg");
	this.shape_17.setTransform(85,110.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,28,60,0.396)").s().p("AAAATIAAgCIAAgkIABAAIAAAkIAAACIgBAAg");
	this.shape_18.setTransform(85.025,106);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(82,54,101,0.627)").s().p("AAAARIAAgCIAAgaIAAgBIAAgEIABAAIAAAfIAAACIgBAAg");
	this.shape_19.setTransform(90.8125,104.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(222,35,47,0.996)").s().p("AgyBKIAAgCQACgKgCgIQADgDAAgIIABAAQACgzAFhCIAAgCIACAAIAQASIACABQgCAEAEABIAAABQAJAHAHAKIABAAIABAEIAAACQAJAGAFAJIACAAIABAEIABACQAMAKAJAMIACAAQgCAFADAAIABABIAHAHIAAABQgeATgdAUQgOAJgNAAQgIAAgHgDg");
	this.shape_20.setTransform(114.025,117.2188);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(139,59,149,0.996)").s().p("Ag9A1QgCgCgDgBIAAgCQABgQgEgLIAAgCIAAhHQAEgCAGADIAAABQAPAAAMAFIAAABIAGgBIACgBQAiAKA6AGIACAAIAAACIgCAAQg3Aig0AkIgCABIgSAJIAAACIgCgBg");
	this.shape_21.setTransform(103.1,112.435);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(222,34,46,0.992)").s().p("ABfCCQgagGgcgDIAAgCQAEgWADgXIgCAAQhUgkhTgmIgCAAQgdAPgfAPIAAgCQACgEgEgGQAGgFABgIIABAAQgEgJAFgGIABgCQgEgEAFgEIABgBQgDgDACgDIgBAAQADgIAEgGIABgCQgFgEAGgIIABgBQABgEgDgCIAAgCQADgDABgKIgBAAQAEgDAAgFIAAgCQAVAIAQALIACAAQA9gcA3ghIACgBIAGAMIABACIAYAfIABACIAAABIhSAtQAxAfA6AVIAAABIAIgzIAAgCIAyA7IABgBIABgBIAAACQACAHgEADQACAOARAAIAAABIgBAAIgCAAIALAQIAAACQAIAGAFAJIABACQALAJAAAJIAAACQAJABAEAMIgBAAQAFADAEAHIABACIgCgBIhQgaIgBAAQgBASgFANIgCgBg");
	this.shape_22.setTransform(122.075,138.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(138,72,22,0.569)").s().p("AAAAGIAAgNIABAAIAAACQABAIgCAFIAAgCg");
	this.shape_23.setTransform(134.5725,128.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(132,70,21,0.541)").s().p("AAAAHIAAgPIABAAIAAACQABAKgCAEIAAgBg");
	this.shape_24.setTransform(134.7725,125.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(147,103,10,0.588)").s().p("AACAPIAAAAIAAABIAAgBgAAAgPIAAAAIABAdQgEgKADgTg");
	this.shape_25.setTransform(135.1833,114.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(184,146,39,0.729)").s().p("AAAAJIAAgCIAAgGIAAgBIAAgIIABAAIAAAPIAAACIgBAAg");
	this.shape_26.setTransform(135.1125,112.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(236,70,39,0.992)").s().p("AAAAcIgXgeIgBgBIgHgNIAAgCIAWgKIABgBIAmAnIACAAIgBACQgOAJgQAJIgBgCg");
	this.shape_27.setTransform(124.875,126.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(238,87,42,0.992)").s().p("AgJAdIAHgvQADgUgMACIgBAAIgngpIAAgCIARgJIACAAIAgAbIAAACIAEABIACABQACAFAFADIABACQABgBABAAQAAAAABABQAAAAABAAQAAABAAABIABAAQACAEAEACIAAACQABgBABAAQABAAAAAAQABAAAAABQABAAAAABIABAAQAJAKALAHIABABIAAABQgDAvgGArIAAAMIAAACIgCABIAAABIgyg8g");
	this.shape_28.setTransform(129.225,131.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(199,121,20,0.8)").s().p("AAAAIIAAgSIABAAIAAACQABAMgCAGIAAgCg");
	this.shape_29.setTransform(123.9225,116.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(245,129,34,0.996)").s().p("AAUA0IgHgHIgBgBQgDAAACgFIgCAAQgJgMgLgLIgBgCIgBgEIgCAAQgFgJgJgFIAAgCIgCgEIgBAAQgHgKgJgHIAAgBQgEgBACgEIgCgBIgQgSIACAAIACAAQA9AaA4AUIACAAQAEAFAIABIACAAIAAADIAAACIgCAAIAAATIAAACIgCAAQgUAPgZAMIAAgBg");
	this.shape_30.setTransform(117.125,114.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(247,145,30,0.996)").s().p("AASA9QgLgHgIgKIgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBABgBAAIAAgCQgEgCgCgEIgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgBgBQgFgEgCgFIgCAAIgEgCIAAgBIghgbIAAgCIAfgTIACAAIAAgQIAAgBQADgFgBgJIAAgCQAEAAACACIACAAQABgEAAAEIABACIAHAAIACAAQACADAEACIACABQAGAAAIAGIAAABQAJADAFgCIAAABQAGAHAJACIABABQAGgBADABIACAAQAHAGAFABIACABIgBABQgWANgUAOIAAAGIAAACIgCAAIAAAPIAAACIAAAMIAAACIgCAAIAAANIAAACIAAACIAAACIgBgBg");
	this.shape_31.setTransform(132.525,123.2059);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(206,143,9,0.82)").s().p("AAAAGIAAgNIABAAIAAACQABAIgCAFIAAgCg");
	this.shape_32.setTransform(129.3375,117.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(140,99,9,0.561)").s().p("AAAAJIAAgCIAAgPIABAAIAAAPIAAACIgBAAg");
	this.shape_33.setTransform(129.325,116.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(79,56,10,0.325)").s().p("AAAAOIAAgBIAAgaIABAAIAAAaIAAABIgBAAg");
	this.shape_34.setTransform(129.3125,113.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(84,60,10,0.341)").s().p("AAAAKIAAgVIABAAIAAACQABAMgCAJIAAgCg");
	this.shape_35.setTransform(124.1225,111.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEC121").s().p("ABBAgQgIgBgEgFIgCAAQg4gUg9gZICDgMIACAAIAAATIAAACIAAAVIAAACIAAARIAAACIgCAAg");
	this.shape_36.setTransform(117.325,111.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(85,84,45,0.451)").s().p("AAAAbIAAgCIAAgTIAAgCIAAgTIAAgBIAAgIIAAgCQACAYgBAbIAAACIgBAAg");
	this.shape_37.setTransform(124.1225,107.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0BE68").s().p("AhBARIgCAAIgCAAIAAgDIACAAIAZgEIABgBIBtgZIACAAIAAATIAAACIgCAAIiDAMIgCAAg");
	this.shape_38.setTransform(117.025,107.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6E9E86").s().p("Ag3APQA4gPA1gQIACAAIAAAHIAAACIgCAAIhtAYIAAgCg");
	this.shape_39.setTransform(118.4,106.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(9,64,74,0.447)").s().p("AAAAKQAAgKAAgKIABAAIAAAPIAAACIAAACIAAACIgBgBg");
	this.shape_40.setTransform(129.3167,102.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(4,97,140,0.78)").s().p("AAAAJIAAgCIAAgPQACAGgBAJIgBACIAAAAg");
	this.shape_41.setTransform(129.3625,100.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8CD43").s().p("AAPAcIgBAAQgHADgHgFIgBAAIgKACIgBgBQgBgDgDAAIAAABQgHgCgFADIAAgCIAAgvQAcgCAZgGIADAAIAAAJIAAACIAAAUIABAAIAAABIAAACIgBAAIAAARIAAACIAAAIIAAACIgDAAIgBAAQgFAAgEgEg");
	this.shape_42.setTransform(132.3,109.2025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(163,151,72,0.773)").s().p("AAAAJIAAgCIAAgJIAAgCIAAgEIABAAIAAAPIAAACIgBAAg");
	this.shape_43.setTransform(135.125,106.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B1B86D").s().p("AgbAMIAAgNQAagHAbgEIACgBIAAAMIAAABIAAAEIAAACIgCAAQgZAGgcACIAAgCg");
	this.shape_44.setTransform(132.225,105.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(112,123,79,0.69)").s().p("AAAAIIAAgBIAAgLIAAgCIAAgCIABAAIAAAPIAAABIgBAAg");
	this.shape_45.setTransform(135.125,104.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(63,76,55,0.455)").s().p("AgBAHIAAgCIAAgLIADABIAAABIgCAAIAAAJIAAACIgBAAg");
	this.shape_46.setTransform(135.225,103.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(117,161,131,0.996)").s().p("AhLAaIAAgLIAAgCIAAgCQA9gQA5gVIAAgBIAYAPIACAAQABAGAHABIAAABIgCAAQgmAGgkAJIgBgBIgQgJIAAgBIgDAAIAAALIAAACIAAACIAAABIgCABQgcAEgaAHIAAgCg");
	this.shape_47.setTransform(137.05,102.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(215,198,95,0.996)").s().p("AglAJQgDgDgEgCIAAgCQAmgFAngFIAAgBIALAHIAAABIgBAAIhPAJIAAACIgBgBg");
	this.shape_48.setTransform(144.5,105.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(177,183,109,0.992)").s().p("AgZASQgOgKgNgKQAkgJAkgGIACAAIAPAKIABABQAIAEAHAFIAAACIAAABQgoAEgkAGIAAACIgCAAg");
	this.shape_49.setTransform(142.475,103.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(117,20,71,0.6)").s().p("AgdAAIA5AAIACAAIAAAAIgaABQgRAAgQgBg");
	this.shape_50.setTransform(53.5,156.0021);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(105,17,62,0.533)").s().p("AgHAAIANAAIACAAIAAAAIgPABIAAgBg");
	this.shape_51.setTransform(55.325,150.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(197,34,119,0.996)").s().p("AFhIeIgCAAQg/gGg7gLIAAgBQgFAAAAgDIgCAAQgOAAgIgGIgCAAQgRgBgMgGIgCAAQgIAAgDgEIgCAAIgIAAIhWgiQh6gxhohGIgBgBQgNgLgPgJIgBgCQgRgLgNgPIgBAAQgBgDgEACIAAgCQgFgDgDgFIgCAAIgEgCIAAgBQgNgKgKgMIgCgBIgEgBIAAgCQgygwgugzIgBgBQgDgBACgEIgCAAQgDgFgFgCIAAgCIgCgEIgBgBQgMgQgOgOIAAgCQgNgUgQgTIAAgBQgKgPgJgRIAAgCIAAgBQADgDACgDIABgCQAAgBABAAQABgBAAAAQABAAAAABQABAAAAAAIABABQAEgKAGAAIACAAQAFgDACgDQAGAAADgHIABAAQAFAEAEgIIgBAAQAIgBgCgCIAAgCQAIADAEgKIABgBIAIABIAAgBIAMgLIACAAQACAIAFgLIAAgBQAIAHADgLIABAAQACAFAHgIIABgBIAhAvIACAAQADAJAGAHIAAACQAIAGAFAJIABACQA9BKBIA+IAAABIAEACIACAAQAGAJAJAGIABABQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAAQANAMAOAKIAAABQBlBJB/AvQA2AUA6ARQAPAAAMAEIAAACIA+AHIACAAQAQAGAVAAIABAAQABADAFgBIACAAIAAACQgCANgGAIIABACIADAMIAAABIgHAKIAAACQAEACABAEIgBABQgGAJAAAGIABAAQAEATgFARIABAAQgCAIADAIIgBAAQACAOgPAAIgCgBgAHAmHQg8ggg4gkIAAgCIASgJIABAAQA2glA3giIABgBIAAACQgFBDgCAzIgBAAQAAAIgDAEQACAHgCAKIAAACIgCAAg");
	this.shape_52.setTransform(63.925,163.7532);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(73,39,82,0.537)").s().p("AAAAIIAAgPQACAFgBAIIAAACg");
	this.shape_53.setTransform(1.2725,118.775);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(120,93,24,0.486)").s().p("AAAAGIAAgNIABAAIAAACQABAIgCAFIAAgCg");
	this.shape_54.setTransform(0.1225,119.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(57,31,65,0.431)").s().p("AhGAKIgBgQQAEAGgCAJIAAABgABHAHIgBgQQADAFgBAJIAAACg");
	this.shape_55.setTransform(8.1475,116.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(117,91,24,0.475)").s().p("AAAAIIAAgRIABAAIAAACQABAKgCAHIAAgCg");
	this.shape_56.setTransform(0.3225,117.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(82,62,17,0.345)").s().p("AAAAGIAAgNIABAAIAAACQABAIgCAFIAAgCg");
	this.shape_57.setTransform(0.5,114.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(169,135,39,0.675)").s().p("AAAAKIAAgCIAAgRIABAAIAAARIAAACIgBAAg");
	this.shape_58.setTransform(0.5,112.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(40,25,51,0.329)").s().p("AAAAIIAAgPIABAAIAAANIAAACg");
	this.shape_59.setTransform(0.85,112.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(216,177,57,0.859)").s().p("AKgAVIAAgBIAAgSIACAAIAAASIAAABIgCAAgAqhAVIAAgBIAAgQIACAAIAAAQIAAABIgCAAgAKhgBIgBgTIACAAIAAARIAAACIgBAAg");
	this.shape_60.setTransform(67.8125,109.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(80,43,88,0.569)").s().p("AAAAVIAAgCIAAgnIABAAIAAAnIAAACIgBAAg");
	this.shape_61.setTransform(0.85,109.875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(51,26,58,0.392)").s().p("AAAAMIAAgCIAAgWIABAAIAAAWIAAACIgBAAg");
	this.shape_62.setTransform(0.85,106.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(206,168,51,0.82)").s().p("AAAAOIAAgaIABAAIAAAYIAAACg");
	this.shape_63.setTransform(0.5,107.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(127,107,39,0.529)").s().p("AAAAIIAAgCIAAgNQACAFgBAIIAAACIgBAAg");
	this.shape_64.setTransform(0.5,105.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(113,91,29,0.467)").s().p("AAAAJIAAgRQACAGgBAJIAAACg");
	this.shape_65.setTransform(0.3225,101.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(59,33,68,0.439)").s().p("AAAAGIAAgNIABAAIAAACQABAIgCAFIAAgCg");
	this.shape_66.setTransform(1.0725,102.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(66,36,76,0.494)").s().p("AAAAKIAAgUIABAAIAAASIAAACg");
	this.shape_67.setTransform(15,112.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(33,20,41,0.275)").s().p("AAAAMIAAgCIAAgVIABAAIAAAVIAAACIgBAAg");
	this.shape_68.setTransform(15,110.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(56,32,66,0.424)").s().p("AAAASIAAgCIAAghIABAAIAAAhIAAACIgBAAg");
	this.shape_69.setTransform(15,107.075);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(75,43,86,0.549)").s().p("AAAAHIAAgPIABAAIAAACQABAJgCAGIAAgCg");
	this.shape_70.setTransform(15.2225,102.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(71,42,82,0.522)").s().p("AAAAGIAAgNIABAAIAAACQABAIgCAFIAAgCg");
	this.shape_71.setTransform(15.4,100.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(167,46,134,0.992)").s().p("ADuGAQgnhSgThoIgBAAQgKgqgGgvIgBAAQgDgHAAgKIgCAAQhYAkhkAWIgBABQgKAFgPAAIAAABQgtALgzADIgCAAIg6AAIgCAAQgxgFgigUIgBgBQgDgBAAgEIgBAAQgBgDgEACIgBgCQgggaACg9QAEgOACgQIAAgBQAWg3AigtIACAAQAHgOALgLIABAAQAAgBAAgBQgBgBABAAQAAgBAAAAQABgBABAAIAAgBIASgTIABAAIACgEIAAgCQApgrAsgpIAAgBIAEgCIACAAQAMgPAPgLIAAgBIAEgCIACAAQAVgVAXgSIABgCIgMgKIAAgBQgHgCgDgGIgCAAQABgFADgDIAAgCQAKgIAIgLIACAAQgBgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIABgBQAFgEAEgGIAAgCIAHAHIABABQAEgBABADIABAAQAAADADACIABABIAEACIABAAQAGAGAGAFIACAAIAYgRIACAAQAIgJAMgGIABAAQAIgJAJgGIABgBQAGgBAEgEIABgBQAQgBAIAHIACAAQAGgBAFAFIAAACQAEgDAGACIAAgBIAEADIACABQAFgCAHAHIABABQAEgFAKAGIAAgBQADADAEAAIAAgBIAEAEIAAABIAKgBIAAABQAFAEAGgBIABgBQAFAEAIACIACAAIAAAbIAAACIABBfIABAAIAAApIAAABQBKAuBMAqIABABIAAACQgBAFgDADIABAAQgBAKgEAEIABABQADADgCADIAAACQgGAIAEAEIAAACQgFAGgDAHIABAAQgBADACADIAAACQgFADADAFIAAABQgGAHAEAJIgBAAQgBAHgFAGQADAFgBAFIAAABIgCABQgwAYg1AUQAHBCAPA7IABABQADAZAIAVIABAAQABAPAGAMIABAAQgBAIACAGIABACIgBAAQAAAKgDATIgBAAIgDAHIgCABQgGAEAGAFIABAAQgIAIABAIIABAAQABAHgIAIQAGAKgEAHIgCAAQADAEgCAGIgBAAIAAgCgAhejAQg3AzgzA2IAAACIgCAEIgBAAQgGAIgGAGIAAABQgBAAgBAAQAAAAgBABQAAABAAAAQAAABABABIgCABQgHAHgFAKIgBAAQgfAogSA0QgBAVAFAPIAAACIANAMIAAACQASAIAVAEIAAABIAyACIACAAIAQgBIAAgBQAzgEAugJIABAAQBrgdBjgmIAAgBIgLilIAAgCIAAgCQABgJgDgFIgBgBIhDgrIAAgBQgNgIgKgLIgCAAIglgZIAAgBQgJgIgLgGIgCAAQgVAQgUATIgBAAQAAAAAAABQgBAAAAABQgBAAgBAAQAAAAgBAAIgBABQgMAKgLAMIgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgBABgADEhuQABBBAKA2IACAAQA3gZA2gaIgCgBIh4hFIAAACgACClqIgbAQIgBABQgLAKgNAGIgBACQgUANgSAQIgCABIgGADQAIAIAKAFIACABQAEAGAHAEIAAABQASAKAPAMIAAACQAVANAQAFIAAgDIAAgEIAAgCIAAgbIAAgCIAAgqIAAgCIAAglIAAgCQABgKgDgFIAAABg");
	this.shape_72.setTransform(71.9442,138.7868);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(48,39,70,0.439)").s().p("AAAAIIAAgBIAAgOQACAGgCAJIAAAAg");
	this.shape_73.setTransform(61.4114,97.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(114,98,168,0.988)").s().p("AAKA0QgNAAgNgBIgBgCIgLgEIAAgCIgPgOIgBgCIgHgPIAAgCIAAgWQAGgMAHgKIABgCIALgIIAAgBIANgFIABgBIAYAAIACAAIAPAHIACABIAKALIACAAQAGAKADAMIAAACIAAAOIAAACIAAACQgDALgEAKIgCABQgLAOgUAGIgCAAg");
	this.shape_74.setTransform(56.0875,97.2875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(43,36,69,0.459)").s().p("AgIAAIASAAIAAAAIgCABIgFAAQgHAAgEgBg");
	this.shape_75.setTransform(55.9,68.6125);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(43,38,74,0.529)").s().p("AgJAAIASAAIAAABIgBAAIgFAAQgHAAgFgBg");
	this.shape_76.setTransform(56.3,62.7861);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(44,40,77,0.537)").s().p("AgHAAIANAAIACAAIAAAAIgPABIAAgBg");
	this.shape_77.setTransform(50.675,62.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(92,84,153,0.992)").s().p("AhzCQQgEgDgBgGIgBAAQgKgLgIgOIgBAAQgGgKgJgHIAAgCQgYglgSgsIAAgCIAAgIIgBAAQgHgXACggQAKgkAYgVIABgBQAFgBACgDIAAgCQAVgKAYgIIAAgBQARgBAOgDIACAAIAPgBIAAgBIAlAAIACAAQAGADALgBIACAAQA0AGAyAJIACAAQATAHAUAFIABAAQAFAKAJAFIACAAQAAAEABADIABABQAGADAEAGIABABQAEADgDACIgBABQAJACAEAHIABAAQACAIAFAEIABACQAKAIAJAKIAAABIgCAAQgKgHgRgBIAAgBIhHgWIgCAAQgOAAgIgGIgCAAQgrgJgxgEIAAgBIgTgBIgCAAQgfgBgbADIAAABQgTAFgQAHIAAACIgNAMQgEAKACANQAMBEAmAtIACABIAVAaIAAACQgFAEgEAGIgBAAQgBADgEgBIgBABQgKAIgIAKIgCABIgIAFIgBgBg");
	this.shape_78.setTransform(58.3109,77.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(124,74,155,0.996)").s().p("Ah1HGQgxh+gQifIAAgCQACgJgEgEIAAgCIAAgGIAAgBQACgLgEgFIAAgCIAAgRIAAgDIAAgNIAAgCIAAgpIAAgCIAAgXIAAgCIAAgTQAEgFgCgHIAAgDIAAgCIAAgJQAGgjACgmIAAgCQADgBAAgFIABAAIAIg4IAAgCQAFgFgBgLIAAgBQAFgFgBgKIgBgBQAFgIACgLIABAAIAAgIIAAgCQAoiGA/hwQAkg+Aog6QATgVASgXIACgBQgBgBAAAAQAAgBAAgBQABAAAAgBQABAAABAAIAAgBQAHgEADgIIABAAQASANAPAPIAAABQABAAABAAQABAAAAAAQABAAAAABQABAAAAABIABAAIBBA8IABACIgBACQgRARgNAVIgBABQgGAJgJAGIAAACQgCACAAAEIgBABQgBACgDABQgfAvgcAwQhABvgfCOIgBAAQAAAFgDABIAAACIAAAKIgBAAQAAAFgDAAIAAACIgEAlIgBAAQABAFgEAAIAAACQABARgEAKIAAANIAAABIgCAAIAAAOIAAACIAAADIAAACIgCAAIAAAPIAAACIAAARIAAACIgCAAIAAAjIAAACIAAAWIAAABIABAVIABAAIAAAQIAAACIABARIABAAQABAkAEAgIAAACQAJAgAFAkIAAACQAGAPAFAUIABAAIAAAJIAAACIAGAQIABAAIAAAIIAAABQAoB6A/BjIABABIgBACQgHAIgCgFIgBAAQgDALgIgIIAAACQgFAKgCgHIgCAAIgMALIAAABIgIgBIgBAAQgEALgIgDIAAABQACACgIADIABAAQgEAHgFgDIgBAAQgDAHgGAAQgCADgFADIgCAAQgFAAgEAKIgBgBQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBABAAABIgBACQgCADgDACIAAACIAAACQg7hagphrg");
	this.shape_79.setTransform(19.625,102.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(57,65,123,0.996)").s().p("AhXCrIhAg8IgCAAQAAgBAAAAQgBgBAAAAQgBAAgBAAQgBAAgBAAIAAgBQgPgPgSgNIAAgCQAFgCACgDIABgBIACgDIAAgCQA0g2A4gxIABgBIADgBIACAAQAHgKAJgFIAAgBIAEgCIACAAQAKgLANgIIACAAQACgFAEgBIABgBQBCgyBNgoIABAAQAIAIgFAGIAAACQACAIAHAFIAAACQAAAGAEgHIAAABQAEAGgDAHIABAAIAHAOIgBAAQAHAFgDAHIACAAIAIAKIACABQgCAJAEgEIABgBIAIAZIAAACQADAFADgEIAAABIAEALIAAACIgCABQhDAmg/ApIgBACQgCABgBAEIgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQgBAAgBgBIAAABQgEADgBAEIgCAAQgtAmgrAoIAAABQgEAAABAEIgBABIglAmIgBgCg");
	this.shape_80.setTransform(47,29.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(5,90,129,0.714)").s().p("AAAAIIAAgPQACAFgBAIIAAACg");
	this.shape_81.setTransform(134.7725,93.825);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(6,74,105,0.576)").s().p("AAAALIAAgVQACAIgBALIAAACg");
	this.shape_82.setTransform(134.5725,90.225);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(8,67,91,0.498)").s().p("AAAgHIAAgCIABABQADARgFABQADgGgCgLg");
	this.shape_83.setTransform(128.65,90.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(18,97,126,0.675)").s().p("AAKABIgVAAIAAgBIAWAAIAAABIgBAAg");
	this.shape_84.setTransform(146.45,63.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(23,141,193,0.988)").s().p("AAOAzIgcAAIgBgBIgPgHIAAgBIgNgMIgBgCQgDgHgEgHIAAgCIAAgYIAFgNIABgCQAMgQAVgHIACAAIAUAAIACAAIACAAIAPAFIABACQACADAFABIAAACQAKAKAFAPIAAACQACAbgLAPIgCAAIgKALIgCABIgNAHIgCAAg");
	this.shape_85.setTransform(146.4398,68.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(35,143,186,0.996)").s().p("AhEBCIAAgEQAWg+ARhBIAAgCQAwAaAvAdIABABQADAOgBAUIAAACIAAACIgCAAQg2ASg3APIAAACIgBABIgZAFIAAgCg");
	this.shape_86.setTransform(117.1475,102.525);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(6,163,147,0.996)").s().p("AgSBOIAAgCIAAgBQABhOgEhLQAVAGAWAPIAAABIAAACQgRBBgVA+IAAADIAAACIgCAAg");
	this.shape_87.setTransform(111.925,101.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(4,120,103,0.996)").s().p("AAcBNIgBgBIAAgCIg3h4IAAgBQAcgMAXgRIACgBQAEBLAABOIAAABIgBAAg");
	this.shape_88.setTransform(107.1528,101.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(51,152,188,0.992)").s().p("AAIEIIAAgPIAAgDQABgJgDgGIAAgCIAAgNIgCgBQg/gphDgmIAAgBIAAgFQAIgXAGgZIAAgCQA6AcA0AiIABAAQAFgBgDgSIgBAAIAAgCQgCg1gIguIgDAAQgtAXgwATIAAgBIAAgEQAOggAEgfIAAgCIBGgeIACgBQgLg/gNg9IAAgBIAMgaIAAgBQACgXALgWIAAgCQgGgDAHgEIABgBIAEgTIABgCQAEADgBAJIAAACQADADACAGIAAAAQAGAfAJAdIABAAIACAUIAAABQACABAAAFIABAAIAGAnIAAACQAEAAgBAGIABAAQACAYAEAWIAAACIAdgKIABAAQALAYAJAbIAAACQgQAKgXAGIAAABQACA6AIA/IAAACIABAVIABAAIAAAQIAAACIABAPIABAAQAOAUAYALIACAAQAKALAPAHIAAABIAAABQg6AVg9ARIAAgCg");
	this.shape_89.setTransform(128.65,76.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(9,165,151,0.992)").s().p("AALBHQgbgQgdgOIgBgBQgGgdACglQAagEAZgPQAYgOAagMIAAACQgDAggOAgIAAAEIAAABIgBABIgPAHIAKAGIAAABIAAACQgHAZgIAYIAAAEIAAACIgCgBg");
	this.shape_90.setTransform(114.6015,83.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(101,88,157,0.996)").s().p("ABEA1Qg6gGgigJIgCAAIgGACIAAgBQgMgFgPAAIAAgBQgGgDgEACIAAgCIAAg3QAZgMAWgPIACAAQAGAOAMAJIABAAIABAEIAAACQAFACADAFIACABIABAEIAAABQAHAEAEAGIACAAIABADIAAACQAHAEAFAHIACAAIACAEIAAACQAOANALAOIACAAIABACIABAAIAAACIgCAAg");
	this.shape_91.setTransform(103.1,103.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(46,68,115,0.996)").s().p("AArA8QgMgOgOgMIAAgCIgBgEIgCAAQgFgHgIgEIAAgDIgBgDIgBAAQgDgGgHgEIAAgBIgBgEIgCAAQgDgFgFgDIAAgCIgDgDIgBAAQgLgKgHgOIAAgBIAggSIABAAIA3B3IAAACIgBgBg");
	this.shape_92.setTransform(105.45,102.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(42,29,56,0.357)").s().p("AAAAJIAAgTIABAAIAAACQABALgCAIIAAgCg");
	this.shape_93.setTransform(91.0361,99.525);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(53,42,76,0.475)").s().p("AAAAHIAAgPIABAAIAAACQABAKgCAEIAAgBg");
	this.shape_94.setTransform(85.4225,94.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(43,38,72,0.498)").s().p("AAAAJIAAgSIABAAIAAACQABAKgCAHIAAgBg");
	this.shape_95.setTransform(85.6225,91.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(100,90,159,0.996)").s().p("AAnBTQgIgCgGgEIAAABQgGABgFgEIAAgBIgKABIAAgBIgEgEIAAABQgEAAgDgDIAAABQgJgGgEAFIgBgBQgHgHgGACIgCgBIgDgDIAAABQgHgCgDADIAAgCQgGgFgGABIgCAAQgHgHgQABIAAgCQAmgWAigZIACAAQADgFgCgLIAAgBIAAgCIAAgKQAEgHgCgMIAAgCIAAgCIAAgKQAEgGgCgLIAAgCQAuArAwApIAAACIgBAAQgUAOgWALIAAACIgBAAIAAATIAAACIAAAXIAAACIgCAAIAAAEIAAACIgCAAg");
	this.shape_96.setTransform(86.65,95.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(6,114,100,0.992)").s().p("AACBbQgLgXgLgaIAAgBQAVgLASgNIgBgBIhBggIgBgBQgHgGAGAAIgBgCQgKgFABgPIgBAAQgGgMgGgIIAAgCQgCgMgIgMIACAAQBQAiBNAmIABABQgCAmAGAdIABABIAAABQgoATgnAWIgCgBg");
	this.shape_97.setTransform(101.75,82.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(51,66,118,0.992)").s().p("ABUCdQgwgqgugsIAAgCQAHgxADg0IgCAAIhPgdIgBgCQgIgKgLgIIAAgBQgFgEgCgIIgCAAQgDgHgJgCIAAgBQAEgCgEgEIgBAAQgEgGgGgDIgBgBQgCgDAAgEIgBAAQgJgGgFgKQBTAXBLAdIACABIALhCIABgBQAMAUAFAUIAAACQAPAVALAbIABAAIABABIABABIgCAAQAIAMACAMIAAACQAGAIAGAMIABAAQgBAPAKAEIABACQgGAAAHAGIABABIgCAAIgrgQIAAACQgEAygFAwIABAVIABAAQAlgYAogWIACAAQALAaAMAXIACABIgBABQgiATghAVIAAgCg");
	this.shape_98.setTransform(86.95,79.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(7,164,149,0.988)").s().p("ABDCiQgEgIABgMIgBAAQgHgRgCgUIgBAAQgFgTgIgQIAAgCIAAgHIgBgBQgWhDgig3IgBgBIgWgaIgBAAQgBgDgEABIAAgBQgDgCAAgDIgCAAIgQgIIgCAAQgQgBgJAFIAAgBQgDgDADgGIgBAAIADgDIgCgBQgEAAAEgBIAAgBQgDgCADgDIgBAAIADgEIgCAAQAAAAgBgBQAAAAAAAAQABgBAAAAQABgBABgBIgCAAQgHgFAHgFIAAgBIgEgKQAFAAgDgIIAAgCQAygHAeAYIABABQBRBMAgB+IABACIgBACIgDATIgCAAQgGAFAGADIgBABQgLAXgCAWIAAACIgLAZIgBgBg");
	this.shape_99.setTransform(117.825,44.221);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(7,109,95,0.992)").s().p("AgGCrQgKgbgQgVIAAgCQgFgUgMgUIAAgDQAGgQACgVIABAAIAAgJIAAgCQAKgYAEgcIAAgBQAEgDAAgJIAAgBQAWhHAeg/IABAAIAEAVIAAACQADAGgCAFIgBABQAGAFgBACIABAAQgHAGAHACIABAAQgCAEACAIIgBAAQAGAHgEADIgBACQAGABgDAFIgBABQAFAHAAALIABAAIAAABQgYA/gNBJIgBABQgGAWgCAaIgBAAQAAAFgDABIAAACQAAASgFAOIAAAOIAAACg");
	this.shape_100.setTransform(94.025,56);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,135,111,0.992)").s().p("AgmBoQAAgLgFgHIABgBQADgFgGgBIABgCQAEgDgGgHIABAAQgCgIACgEIgBAAQgHgCAHgGIgBAAQABgCgGgFIABgBQACgFgDgGIAAgCIgEgVIAAgCIAAgCQATggAYgdIABAAQgBgEADgBIAAgBIAYgTIAAgCQANgHAOgFIABgBQAHAAADgCIABAAIAAACQADAHgFAAIAEAKIAAABQgHAFAHAFIACAAQgBABgBABQAAAAgBABQAAAAAAABQABAAAAAAIACABIgDADIABAAQgDAEADABIAAABQgEABAEABIACAAIgDADIABAAQgDAGADADIAAABIAAABIgNAHIgBABQgyA2gcBPIAAACIAAADg");
	this.shape_101.setTransform(102.825,38.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(8,84,79,0.533)").s().p("AgIAAIAQAAIABABIgCAAIgGAAQgFAAgEgBg");
	this.shape_102.setTransform(116.375,14.4225);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(3,66,58,0.518)").s().p("AgJAAIALAAIACAAIAEAAIACAAIAAAAIgTABIAAgBg");
	this.shape_103.setTransform(103.875,14.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(2,83,71,0.584)").s().p("AAjABIhHAAIAAgBIBJAAIAAABIgCAAg");
	this.shape_104.setTransform(110.075,14.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(7,113,101,0.996)").s().p("AifB5IgEgMIAAgBQgDAFgDgGIAAgCIgIgZIgBABQgEAFACgKIgCAAIgIgLIgCAAQADgHgHgFIABAAIgHgNIgBAAQADgIgEgGIAAgBQgEAHAAgGIAAgBQgHgFgCgJIAAgCQAFgFgIgIQBSgqBfgeIAAgBIAIAAIABAAQAOgHARgEIAAgBQAZgEAYgGIACAAQAPgIAWABIACAAQA4gOBEgCIACAAIABACQACACgHACQAEAGADAJIABAAIgFAEIgBAAQAAAHAEAHIAAACQgDAHACAGIABAAQgCAHABAHIgBAAQADAGACAHIABACQAAAJgDAJIgBACQAGAFgEAGIAAACQgBAKAEALIAAABIgBAAIgMAAIAAACIgCAAQhIAHhDANIgBABQgJAEgNAAIAAACQgGADgJgBIgBABQhlAdhVAuIAAgCg");
	this.shape_105.setTransform(82.2,12.675);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(1,89,76,0.631)").s().p("AgIAAIAPAAIACAAIAAAAIgRABIAAgBg");
	this.shape_106.setTransform(104.375,0.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(5,46,46,0.341)").s().p("AAdABIg6AAIAAgBIA7AAIAAABIgBAAg");
	this.shape_107.setTransform(110.15,0.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(6,83,77,0.537)").s().p("AgKAAIAUAAIABABIgCAAIgGAAQgHAAgGgBg");
	this.shape_108.setTransform(116.175,0.3125);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(4,161,143,0.996)").s().p("ACQBWQgGgDgKAAIAAgBQgQgFgTgBIAAgBQgFAAgBgEIgCAAQgcgEgegDIAAgBQgFAAgBgDIgBAAIg1gEIgBgBIgRgBIgCAAIgPAAIAAgBIhKgBIAAACIgCAAIgOAAIgBAAIgFAAIAAgCQgEgLABgKIAAgCQAEgGgGgGIABgCQADgJAAgHIgBgCQgCgHgDgHIABAAQgBgGACgHIgBAAQgCgGADgIIAAgCQgEgGAAgHIABAAIAFgEIgBAAQgDgKgEgFQAHgDgCgCIgBgBIARgBIAAgBIASAAIACAAIA6AAIABAAIASAAIACAAQAHADANgBIACAAQBFAEA/ALIACABQABACAEAAIAAABQAMAAAKACIABAAQABADAGAAIAAABIAIAAIABAAQAMAHATACIAAABIgCAAQgFACAFAIIgBAAQgDAGABAHIgBACQgFAGABAJIgBAAIgFAOIAAACIgFAOIAAACQACAGgCAFIAAABQgEgBgEAFIAAACIACAZIAAABQgDgLgFANQAFAJAAAHIgBACIgBgBg");
	this.shape_109.setTransform(120.7,8.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(59,167,184,0.992)").s().p("ABBBrQhNgqhYgdIgCAAQgOgCgMgEIABgCQAAgHgFgJQAFgMADAKIAAgBIgCgYIAAgCQAEgFAEABIAAgBQACgFgCgGIAAgCIAFgOIAAgCIAGgPIAAAAQgBgJAFgGIABgCQgBgHADgGIABAAQgFgIAFgCIACAAQAFACAJgBIACAAQAFAFAKADIAAABIAIAAIACAAQBkAhBYAvIABABIgCAAQgGACgEAGIABAAQgFAFAAADIAAABIgKASIABAAQgDAMgDAFQgCANgCgLIgBABQgHAMgGAVIAAABQgCgCgEgBIgBAAQABAJgBAEIAAgBQgGAFgFANIAAAEIAAADIgBgBg");
	this.shape_110.setTransform(148.1,14.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(222,35,46,0.996)").s().p("Aj+C2IhUAAIAAgBIgVgBIgCAAIgIAAIAAgBIgPgBIgCAAQgMACgHgEQAQABgCgPIABAAQgDgHACgIIgBAAQAGgRgFgUIgBAAQABgFAGgJIABgBQgCgEgDgCIgBgCIAHgKIABgBIgEgMIAAgCQAGgIACgNIAAgCIAGAAIABAAIAOAAIACAAQAFADAKgBIACAAIAOAAIACAAQAXADAbgCIAAgBIAXAAIACAAIAQgBIAAgBIAGAAIABAAIAQgBIAAgBQBQgIBHgRIACgBQCHgkBthBQAggTAcgYQAQgIANgMIAAgBQAEABABgCIABAAQAGgIAIgEIACAAQAGgIAIgFIABgBQAHAEAEAFIABABQADAHAFAEIACAAQgCAFADABIAAAAQAGADADAFIABAAQgBAEADABIAAABQATAUASAWIACAAQgBACAAAAQAAABAAABQABAAAAABQABAAAAAAIABABIAPAQIAAACIAAABQgRAMgOAOIgCAAIgEACIAAABQgDABAAAEIgCAAQgIAEgGAHQguAdguAcQhuBCiDAqIgCAAQgPACgJAGIgCAAIgHAAIgBABQgUAEgQAHIgCAAQgLgCgFAFIgCABQgKACgNgBIAAABQgFAAgBAEIgBAAQgNACgPAAIAAAAQgiAIgnABIgCAAIgQAAIAAACIgBAAIgIAAIgCAAIgSAAIAAACIgBAAg");
	this.shape_111.setTransform(139.875,200.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(238,79,40,0.996)").s().p("AAOBMIgOgQIAAgBQgBAAgBgBQAAAAAAgBQgBAAABgBQAAgBAAgBIgCAAQgRgWgUgUIAAgBQgDgBABgEIgBgBQgDgEgGgCIAAgBQgCgBABgEIgCAAQgFgEgDgHIgBgBQgEgGgHgDIAAgCIAIgFIACgBIArgoIABAAIABABQAEADgHABQAKAHAJANIABACQABAAABABQAAAAABAAQAAAAABAAQAAAAAAgBIABAAQgBAIAHAAIAAgBQADAEABAIIABAAQAEgCADAEIABACQAHAEAGAHIABABQAAAFADAAIACAAQgDAFAFACIABABQAMAEAKAPIAAgBQAFAHAFgCIACgBIAAACIgHAEIgBACIgoAnIgBAAQgBADgEgBIgBABIgGAGIgBgBg");
	this.shape_112.setTransform(179.05,185.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(97,52,16,0.404)").s().p("AgHAAIANAAIACAAIAAAAIgPABIAAgBg");
	this.shape_113.setTransform(169.075,156);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(101,48,17,0.424)").s().p("AgJAAIARAAIACAAIAAABIgCAAIgGAAQgGAAgFgBg");
	this.shape_114.setTransform(164.425,156.0225);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(180,97,29,0.737)").s().p("AANABIgaAAIAAgBIAFAAIACAAIATAAIACAAIAAABIgCAAg");
	this.shape_115.setTransform(166.85,156);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(237,87,41,0.988)").s().p("ACbBCIgGAAIgCAAIgSAAIgBAAQgkgCgggGIAAgBQgFABgBgEIgBAAQgmgEgcgLIgCAAIgHAAIgBgBQgbgHgWgKIgDAAIgHAAIgBgBQgIgCgGgEIgBgCQgEgHgFgDIABAAQgFgLgIgBIAAgCQAAgJgMgJIAAgCQgFgJgIgGIAAgCIgMgQIADAAIABAAQBrArB+AXIABABQADAFAEACIACABQAGAIAJAGIABABQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABIABAAQAIAJAJAHIAAACQAEgCACADIABABQAKAMAKAGIAAABIgBAAg");
	this.shape_116.setTransform(150.5,149.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(103,54,17,0.427)").s().p("AgJAAIASAAIAAABIgBAAIgGAAQgGAAgFgBg");
	this.shape_117.setTransform(165.4,150.2225);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(107,61,17,0.443)").s().p("AgOAAIAcAAIABAAIAAAAIgdABIAAgBg");
	this.shape_118.setTransform(168.1,150.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(245,131,36,0.996)").s().p("AhNC/IAAABQgKgPgMgFIgBgCQgFgCADgEIgCAAQgDgBAAgFIgBAAQgGgHgHgFIgBgBQgDgEgEACIgBgBQgBgHgDgEIAAABQgHgBABgIIgBABQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAgBgBIgBgBQgJgNgKgHQAHgCgEgDIgBgBIAAgCQAHgDAEgGIABAAIACgEIAAgCQAVgSAQgUIACgBIABgEIABgCQAKgHAIgMIABAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAAgBQBMhZAyhzIABAAQAEAHAFABQADAAgBAGIAEgFIAAABQAGgBACAGIAAgBQACgFAFAIIACgBIABgBQACAHADACIAAgBQACgFAEAEIAAgBQAFAIAFgHIACgBQgBANAFgGIAAABQAFAHAFgEIAAABQACAOAJgJIAAABQAIgBAAAIIABAAQAEADAFgCQAFAJAIAEIACAAQABgHAEAEIAAABQACgCAEAAIACAAIAAACQgqBdg3BQIgBABQgNAUgQASIgBACIgBAEIgBAAQgSAYgTAUIAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIgBAAQgFAGgGAEIAAABQAAAAgBAAQAAAAAAABQgBABAAAAQAAABABABIgCABIgvAwIgCAAIgCABQgEAAgEgFg");
	this.shape_119.setTransform(193.25,167.7829);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(107,74,10,0.431)").s().p("AAAANIAAgCIAAgXQACALgCAOg");
	this.shape_120.setTransform(182.3275,145);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(158,94,19,0.639)").s().p("AAAAKIAAgCIAAgRQACAIgCALIAAAAg");
	this.shape_121.setTransform(176.54,145.075);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(250,176,31,0.992)").s().p("ACaEEIgOAAIgCAAIgNAAIgCAAIgUAAIAAgBQgKgFgLgNIgBAAQgBgDgEACIAAgCQgJgHgIgJIgBAAQAAgBgBgBQAAAAgBAAQAAAAgBAAQgBAAgBAAIAAgBQgJgGgGgIIgCgBQgFgDgDgEIA4AGIACAAQAGADAMgBIABAAIACAAIAfgBIAAgBQANgDAOgBIACgBQAPgGANgIIABAAQAGgJAEgLIAAgCIABAAQACgMgDgIIAAgBIAAgIIgBgBQgPgvgcghIgBgCQgFgHgEgJIgBAAQgGgJgJgGIAAgCIgCgEIgBAAQgUgZgZgXIAAgBIgCgEIgBAAIhUhPIgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAQgBAAgBABIAAgBQgLgJgIgJIgCgBIgEgCIAAgBQgJgGgGgIIgCAAIgKgIIgCABQgbARgZAVIgCAAQgaATgcARIgCAAQgFgCgHgFIgCgBQgDAAgGABIgBgBQgJgDgGgGIAAgBQgFACgJgDIAAgBQgIgGgHgBIgCAAQgEgDgCgDIgCAAIgHAAIgBgBQAAgFgBAEIgCAAQgCgBgEAAIAAgCIAAgQIAAgBIAAgbIAAgCIAAgFQAFgCAHABIAAgBQADABABADIABAAIAKgCIACAAQAHAGAHgDIABgBQAEAFAGAAIACAAIAAAFIAAACQgCAUAFAKIAAABIAAAAIABABIAAgBIAlgZIACAAQAAgDADgBIAAgCQAWgMATgPIAAgCQAIgBAEgGIACAAQgUgSgVgPIgCgBIAAgBIBPgKIACAAQANAKAJgOIACAAQAsgCA1gHIAAABIAAACQgWAQgSATIgCABIgEABIgBABQgDADgCAEIgBAAIgEACIAAABIgGAEQACAEAEADIAAABQABAAABAAQABAAAAAAQABAAAAABQAAAAAAABIABAAQASARAUAQIABACIAEACIABAAQA0AwAyAyIABABQgBAEADAAIAAABQAOANAMAOIABAAQAAACAAAAQAAABAAABQAAAAABABQAAAAABAAIAAABQAHAGAFAHIABABQAAABAAABQAAABAAAAQAAABABAAQAAAAABABIAAAAQAEABABACIABAAQAtA4ATBQIAAACIAAAXIAAACIAAACQgIAvghAWIgBABIghARIgCAAQgJgBgDAFIgCAAQgMgBgFAEIgCAAg");
	this.shape_122.setTransform(155.825,129.85);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(253,179,10,0.996)").s().p("AAICUQgIgEgDgJQgFACgEgDIgBAAQAAgIgIABIAAgBQgJAJgDgOIAAgBQgEAEgGgHIAAgBQgEAGABgNIgCABQgFAHgFgIIAAABQgEgEgCAFIAAABQgDgCgDgHIgBABIgBABQgGgIgCAFIAAABQgCgGgGABIAAgBIgDAFQABgGgDAAQgFgBgEgHIAAgCIAAgEQAdg6ARhGIAAgCQALgcAFgiIABAAQADgRACgUIABAAQADAKAEABIACADQAHgHABAEIAAgBQACAHAEgIIAAABQAEAHAEgGIAAABQACAKAFgLIAAABQACANAFgMIAAABQAAAJAEgJIAAADQAHACAEADIABABQAFgIADAFIAAgDQAEAJAEgGIABgBQAGAJAIgCIAAABQAEgGAFAIIABAAQAFgHADAJIABAAQAAgJADAHIABACQAFABACgCIAAABQAMgCABAEIACAAIgBACQgIArgLAoIAAACQABAJgFADIAAABQgVBVgjBJIgCAAQgEAAgCACIAAgBQgFgEgBAHIgCAAg");
	this.shape_123.setTransform(207.5,139.375);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(112,88,24,0.459)").s().p("AAAAGIAAgNIABAAIAAACQABAIgCAFIAAgCg");
	this.shape_124.setTransform(204.9725,116.825);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(135,108,32,0.549)").s().p("AAAAHIAAgPIABAAIAAACQABAJgCAGIAAgCg");
	this.shape_125.setTransform(205.1725,114.025);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(128,105,35,0.529)").s().p("AAAAIIAAgQQACAGgBAJIAAABg");
	this.shape_126.setTransform(205.1725,104.75);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(252,203,58,0.996)").s().p("AA/CZQgCgEgLACIAAgBQgDACgEgBIgBgCQgEgHAAAJIgBAAQgCgJgGAHIgBAAQgFgIgEAGIAAgBQgHACgGgJIgCABQgEAGgDgJIAAADQgCgFgFAIIgBgBQgEgDgIgCIAAgDQgDAJAAgJIAAgBQgGAMgCgNIAAgBQgFALgDgKIAAgBQgDAGgFgHIAAgBQgDAIgCgHIAAABQgCgEgGAHIgCgDQgEgBgDgKIAAgCIAAgCQAEgPgBgWIAAgCQADAAAAgFIABAAIAAgUIAAgCQADgEgBgJIAAgCIAAgCIAAgKQAEgFgCgKIAAgCIAAgCIAAhJIAAgBQACgLgEgFIAAgCIgCgnIAAgCIAAgHQAEAAAEgDIAAABQADACADgEIABAAQAFAEAHgDIAAABQAGgGAGAEIAAACQAGgFAJACIABABQAFgGACABIAAgBQADAFAGgCIAAABQADgBABgDIABAAQADADAFgEIAAgBQAIAEALgHIAAgBQAGAJAEgHIABACIABAAIAMgEIACAAIAGAAIACAAIAAACIABAAIAADnIAAACIgBAAQgCAigGAcIAAAGIAAACIgBAAg");
	this.shape_127.setTransform(211.45,112.575);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(209,196,97,0.996)").s().p("AhCAiIgEgsIAAgCIAAgBQAygLAkgBIACAAQAKgIAMAEIADAAQAHgHAPAFIABACIABAAIAFAkIAAACIgCAAIgGAAIgCAAIgMAEIgBgBIgBgBQgEAHgGgJIAAABQgLAHgIgEIAAABQgFADgDgCIgBAAQgBADgDAAIAAgBQgGACgDgEIAAABQgCgBgFAFIgBgBQgJgCgGAFIAAgBQgGgEgGAFIAAgBQgHAEgFgFIgBABQgDADgDgCIAAgBQgEAEgEgBIAAAIIAAACg");
	this.shape_128.setTransform(211.45,96.412);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(163,178,114,0.992)").s().p("Ag+A4QgGgrgIglQAMAAAHgGIACAAQADACAHgDIAAABQAFgEADACIABAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAAABIAEAAIAAAAQAKgFALgCIAAgBQAFAEACgFIABAAQADADAGgFIACAAQAEAAAJgDIAAgBQAFADAFgEIAAABQAIgDAEgCIABgBQAFABAHgBIACAAQADAGgBAJIAAACQAFAFgBALIAAACQADABAAAEIABAAQACAaAFAYIAAACIgBAAIgBgCQgPgFgIAHIgCAAQgMgEgLAHIgCAAQgjACgzALIAAABIAAACg");
	this.shape_129.setTransform(210.475,89.75);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(104,156,135,0.992)").s().p("Ag7A6IgShHQAWgEARgJIABAAQArgMAvgSIAAgBQAJAUAFAYIAAACQAGAIAAANIAAACQAEAFABAIIAAACIgBAAQgIABgEgBIgCABQgEACgIADIAAgBQgFAEgEgDIgBABQgIADgFAAIgBAAQgHAFgDgDIgCAAQgCAFgEgEIAAABQgKACgKAFIAAAAIgEAAIgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQABABAAABIgCAAQgDgCgFAEIAAgBQgHADgDgCIgBAAQgHAGgNAAIgBAAg");
	this.shape_130.setTransform(208.625,81.45);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(5,54,75,0.416)").s().p("AAAAKIAAgCIAAgSQACAIgCAMg");
	this.shape_131.setTransform(182.34,73.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(191,189,103,0.992)").s().p("Ag7APIABgBQAEABABgCIABgBQAIgKALgHIAAgBQAGgBADgEIABgBIBlgSIAAABIAAABQgHAFgEAHIgBAAQgBADgEgBIgBACIgoAkIAAgBQg0AGgtADIASgRg");
	this.shape_132.setTransform(159.125,101.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(130,165,125,0.992)").s().p("AhTAqQAMgJAKgKIABgBQAEABABgDIABAAIAhgiIACAAQAPgEAJgBIACAAQAEgIAHAFIACAAQAdgNAhgJIACAAIAAACQggAkgiAhIAAgBIhlASIAAgCg");
	this.shape_133.setTransform(165.125,95.75);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(82,147,143,0.988)").s().p("AhFAjQATgQAQgSIACgBIAFgGIABgBQAugKAwgSIACgBIgBACQgJAJgGAMIgBABQgIALgKAJIgCAAQghAIgcANIgCAAQgHgEgFAIIgCAAQgJAAgQAEIAAgCg");
	this.shape_134.setTransform(170.05,90.525);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(6,79,112,0.62)").s().p("AAAAGIAAgNQACAFgCAJIAAABIAAgCg");
	this.shape_135.setTransform(176.5275,73.525);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(6,61,86,0.475)").s().p("AgHAAIANAAIACAAIAAAAIgPABIAAgBg");
	this.shape_136.setTransform(164.225,68.55);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(6,66,93,0.51)").s().p("AgHAAIANAAIACAAIgBAAIgOABIAAgBg");
	this.shape_137.setTransform(163.875,62.75);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(8,126,177,0.988)").s().p("AgWCGQAKgIAIgLIABAAIACgEIAAgCQAHgGAFgJIAAgCQApgqAPhCIABgBIABgBQACgKgDgFIgBgCIgFgPIgCgBQgjgfhHAHIgCgBIgNABIAAABIgCAAIgfACIAAABQgFAAgBADIgCAAIgPAAIAAgCIgIg2QAHAAAGgDIABgBIAsgEIACAAIAPgBIABgBQCMgLAhBgIACABIAAALIAAACIAAATIAAACIAAACIgCAVIgBAAQgRA5ghAnIAAACIgBABQgwASguAKIAAgCg");
	this.shape_138.setTransform(169.675,76.1388);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(10,129,180,0.996)").s().p("AAtDRQgvh8hJhmIgBAAQgLgRgPgNIAAgCQgHgMgKgIIAAgCIgCgDIgBgBQgNgRgQgOIgBgBQgDAAACgEIgCgBQgRgTgVgRQAIgJAIgGIACAAQABgIADAEIAAgBQABgIAJgDIACAAQADgKAHgHIABgBQABACAFgKQADgHABAIQAEgKAFAAIADAAQAAgJAEABIABAAIAKgMIAAABQACAKAAgOIAAgCIANgLIAAgBQAYAWAVAXIACAAQAAABAAABQgBABABAAQAAABAAAAQABAAAAABIABABQASAQAPASIABABQgBADADABIAAABQAQAQANASIACABQgCAEADABIAAABQADAAACADIABABQAHANAIALIAAABQBMBiAzB9QAOAiAKAoIAAABQgvASgsAMIgBAAQgRAJgWAEIgRgqg");
	this.shape_139.setTransform(194.6,54.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(68,155,201,0.996)").s().p("AA2CGQgcgagfgXIgBgCQgOgNgSgKIAAgCQg0gmg8geIAAgDIAAgEQAEgNAGgFIAAABQACgEgCgJIABAAQAFABACACIAAgBQAGgVAGgMIABgBQACALADgNQACgFAEgMIgCAAIAKgSIABgBQAAgEAEgFIgBAAQAFgGAFgCIACAAQA3AcAwAiIABACQAVALASAQIABABQABAAABAAQABAAAAAAQABAAAAABQAAAAABABIABAAQABAEACABIAAABQAJAEAGAGIABABIAEADIACAAQAJAJAKAJIAAABQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIABAAIAhAhIACAAIgBABIgNALIAAABQAAAPgBgKIAAgCIgKANIgCAAQgEgCAAAKIgCAAQgFAAgEAKQgBgIgEAHQgFAKAAgCIgBABQgHAGgEALIgCAAQgIACgCAJIAAABQgCgEgBAHIgCAAQgIAGgIAJIAAgBg");
	this.shape_140.setTransform(169.85,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(0,0,218.8,218.7), null);


(lib.starry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAxgrIgRAQIgfAeIgBACIAAABIABACIAeAeAABhZIAAAxIAAArIAAADIAsAAIAwAAAAAAGIABAAIAAACIAAApIAAApAAfAlIAMALAgrgkIALALIAgAeIgBABIABAAAhcAGIAxAAIAqAAIgeAdIgKAK");
	this.shape.setTransform(40.675,38.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAtAAQAAABAAABQgBARgMANQgBAAAAABQAAAAAAAAIgBAAQgLAKgOACQgCAAgCAAIgBAAQAAAAgBAAQgSgBgMgMIAAgBQAAAAgBAAQgLgMgBgRQAAgBAAgBIAAAAQAAgRALgMQABAAABgBQAAAAAAgBQAMgMASgBQABAAAAAAIABAAQACAAACAAQAPACAMALQANANAAASg");
	this.shape_1.setTransform(40.725,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAtIAAgpIAAApIgBAAQgSgBgMgMIAAAAIAAgBIAdgdIgqAAIAAgCIAAAAQAAgRAMgMIABgBIAAgBQAMgMASgBIABAAIABAAIAEAAQAPACAMALIggAfIAAgsIAAAsIgBABIABABIAAACIAfAdQgMAKgOACIgEAAgAgCACIACAAIgCAAIABgBIgBABgAgBABIgfgegAAAAEIAAgCIAAAAIgBgBIABgBIAAACIAtAAQgBARgMANIgBABIAAAAIAAAAgAgfAfQgMgMgBgRIAqAAIgdAdIAAAAgAAAAEIAAgCIAAAAIAAACgAAtACgAAAACIAAgCIAggfQANANAAASIAAAAIAAACgAAAACgAgsACgAAggfIAAAAg");
	this.shape_2.setTransform(40.725,39.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFCC").ss(1,1,1).p("AAyAAQAAABAAACQAAASgOAPQgBAAAAAAQAAAAAAABIAAABQgNALgQABQgCAAgDAAIgBAAQAAAAgBAAQgUAAgOgOIAAgBIAAAAQgOgOAAgSQAAgCAAgBIAAAAQAAgTANgNQAAgCABAAQAAAAAAgBQAOgOAUAAQABAAAAAAIABAAQADAAACAAQARABANANQAOAPAAAUg");
	this.shape_3.setTransform(40.725,39.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFCC").ss(3,1,1).p("AA3gwIgTASIgjAiIAAADIAAACIAiAhAABhkIAAA3IAAAxIgBACIAAABIABAAIAyAAIA2AAAAAAHIABACIAAAuIAAAuAAjAqIAOAMAgxgoIANANIAkAhIgBABIgiAhIgLALAhoAHIA3AAIAwAAIABAA");
	this.shape_4.setTransform(40.675,39.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("AABAyIgBAAIAAguIAjAiQgNALgQABIgFAAgAAAAyIgBAAQgUAAgOgOIAAgBIAAAAQgOgOAAgSIAvAAIghAgIAhggIACAAIgCAAIABgBIgBABIgvAAIAAgDIAAAAQAAgSANgOIABgCIAAgBQAOgNAUgBIABAAIABAAIAFAAQARABANANQAOAPAAAUIAAAAIAAADIgyAAIAyAAQAAASgOAPIgBAAIAAABIAAABIgjgiIAAgBIAAgDIAkgjIgkAjIAAgxIAAAxIgBACIABABIAAABIAAAugAgBACIgjgigAAAADIAAAAIAAABgAAAADIAAAAIgBgBIABgCIAAADgAgxADgAAAAAg");
	this.shape_5.setTransform(40.725,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("AABhZIAAAxIAAArIgBACIAAABIABAAIAsAAIAwAAAAxgrIgRAQIgfAeIAAADIAAACIAeAeAAAAGIABACIAAApIAAApAAfAlIAMALAgrgkIALALIAgAeIgBABIABAAAhcAGIAxAAIAqAAIgeAdIgKAK");
	this.shape_6.setTransform(40.675,38.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAtIAAgpIAfAdQgMAKgOACIgEAAgAAAAtIgBAAQgSgBgMgMIAAAAIAAgBIAdgdIgqAAIAAgCIAAAAQAAgRAMgMIABgBIAAgBQAMgMASgBIABAAIAAAsIAAgsIABAAIAEAAQAPACAMALQANANAAASIAAAAIAAACIgtAAIAAgCIAggfIggAfIgBABIgfgeIAfAeIgBABIABgBIABABIgBgBIABgBIAAACIAAAAIAAACIAAgCIAtAAQgBARgMANIgBABIAAAAIAAAAIgfgdIAAApgAAAACIgCAAgAgfAfQgMgMgBgRIAqAAIgdAdIAAAAgAAAACIAAAAIAAACgAgsACgAgBABgAAAgsIAAAAg");
	this.shape_7.setTransform(40.725,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},6).to({state:[{t:this.shape_7},{t:this.shape_1},{t:this.shape_6}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.7,27.5,24.000000000000004,23.1);


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8CDFEF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape.setTransform(639.3,394.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CDFEF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_1.setTransform(639.3,394.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8CDEEF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_2.setTransform(639.3,394.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CDEEF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_3.setTransform(639.3,394.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8BDDF0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_4.setTransform(639.3,394.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8BDDF0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_5.setTransform(639.3,394.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8BDCF0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_6.setTransform(639.3,394.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8BDCF0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_7.setTransform(639.3,394.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8BDBF0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_8.setTransform(639.3,394.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8BDBF0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_9.setTransform(639.3,394.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8BDBF1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_10.setTransform(639.3,394.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8BDBF1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_11.setTransform(639.3,394.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8ADAF1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_12.setTransform(639.3,394.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8ADAF1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_13.setTransform(639.3,394.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8AD9F1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_14.setTransform(639.3,394.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8AD9F1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_15.setTransform(639.3,394.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8AD8F2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_16.setTransform(639.3,394.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8AD8F2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_17.setTransform(639.3,394.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#89D7F2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_18.setTransform(639.3,394.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#89D7F2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_19.setTransform(639.3,394.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#89D6F2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_20.setTransform(639.3,394.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#89D6F2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_21.setTransform(639.3,394.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#89D5F3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_22.setTransform(639.3,394.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#89D5F3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_23.setTransform(639.3,394.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#88D4F3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_24.setTransform(639.3,394.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#88D4F3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_25.setTransform(639.3,394.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#88D3F3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_26.setTransform(639.3,394.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#88D3F3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_27.setTransform(639.3,394.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#88D3F4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_28.setTransform(639.3,394.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#88D3F4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_29.setTransform(639.3,394.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#88D2F4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_30.setTransform(639.3,394.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#88D2F4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_31.setTransform(639.3,394.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#87D1F4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_32.setTransform(639.3,394.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#87D1F4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_33.setTransform(639.3,394.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#87D0F4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_34.setTransform(639.3,394.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#87D0F4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_35.setTransform(639.3,394.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#87D0F5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_36.setTransform(639.3,394.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#87D0F5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_37.setTransform(639.3,394.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#87CFF5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_38.setTransform(639.3,394.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#87CFF5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_39.setTransform(639.3,394.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#86CEF5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_40.setTransform(639.3,394.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#86CEF5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_41.setTransform(639.3,394.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#86CDF5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_42.setTransform(639.3,394.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#86CDF5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_43.setTransform(639.3,394.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#86CDF6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_44.setTransform(639.3,394.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#86CDF6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_45.setTransform(639.3,394.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#86CCF6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_46.setTransform(639.3,394.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#86CCF6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_47.setTransform(639.3,394.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#85CBF6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_48.setTransform(639.3,394.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#85CBF6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_49.setTransform(639.3,394.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#85CAF7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_50.setTransform(639.3,394.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#85CAF7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_51.setTransform(639.3,394.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#85C9F7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_52.setTransform(639.3,394.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#85C9F7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_53.setTransform(639.3,394.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#84C8F7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_54.setTransform(639.3,394.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#84C8F7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_55.setTransform(639.3,394.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#84C7F8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_56.setTransform(639.3,394.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#84C7F8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_57.setTransform(639.3,394.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#84C6F8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_58.setTransform(639.3,394.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#84C6F8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_59.setTransform(639.3,394.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#83C5F8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_60.setTransform(639.3,394.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#83C5F8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_61.setTransform(639.3,394.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#83C5F9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_62.setTransform(639.3,394.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#83C5F9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_63.setTransform(639.3,394.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#83C4F9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_64.setTransform(639.3,394.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#83C4F9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_65.setTransform(639.3,394.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#83C3F9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_66.setTransform(639.3,394.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#83C3F9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_67.setTransform(639.3,394.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#82C2FA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_68.setTransform(639.3,394.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#82C2FA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_69.setTransform(639.3,394.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#82C1FA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_70.setTransform(639.3,394.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#82C1FA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_71.setTransform(639.3,394.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#84C0F8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_72.setTransform(639.3,394.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#84C0F8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_73.setTransform(639.3,394.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#87BEF6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_74.setTransform(639.3,394.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#87BEF6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_75.setTransform(639.3,394.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#89BDF4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_76.setTransform(639.3,394.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#89BDF4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_77.setTransform(639.3,394.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#8BBBF3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_78.setTransform(639.3,394.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8BBBF3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_79.setTransform(639.3,394.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#8EBAF1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_80.setTransform(639.3,394.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8EBAF1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_81.setTransform(639.3,394.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#90B8EF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_82.setTransform(639.3,394.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#90B8EF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_83.setTransform(639.3,394.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#92B7ED").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_84.setTransform(639.3,394.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#92B7ED").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_85.setTransform(639.3,394.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#95B5EB").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_86.setTransform(639.3,394.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#95B5EB").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_87.setTransform(639.3,394.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#97B4E9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_88.setTransform(639.3,394.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#97B4E9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_89.setTransform(639.3,394.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#9AB2E8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_90.setTransform(639.3,394.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9AB2E8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_91.setTransform(639.3,394.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#9CB1E6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_92.setTransform(639.3,394.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9CB1E6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_93.setTransform(639.3,394.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#9EAFE4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_94.setTransform(639.3,394.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9EAFE4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_95.setTransform(639.3,394.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#A1AEE2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_96.setTransform(639.3,394.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A1AEE2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_97.setTransform(639.3,394.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A3ACE0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_98.setTransform(639.3,394.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A3ACE0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_99.setTransform(639.3,394.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A5ABDE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_100.setTransform(639.3,394.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A5ABDE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_101.setTransform(639.3,394.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A8A9DD").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_102.setTransform(639.3,394.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A8A9DD").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_103.setTransform(639.3,394.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#AAA8DB").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_104.setTransform(639.3,394.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AAA8DB").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_105.setTransform(639.3,394.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#ACA6D9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_106.setTransform(639.3,394.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#ACA6D9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_107.setTransform(639.3,394.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#AFA5D7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_108.setTransform(639.3,394.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AFA5D7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_109.setTransform(639.3,394.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#B1A3D5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_110.setTransform(639.3,394.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B1A3D5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_111.setTransform(639.3,394.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#B3A2D3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_112.setTransform(639.3,394.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B3A2D3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_113.setTransform(639.3,394.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#B6A0D2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_114.setTransform(639.3,394.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B6A0D2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_115.setTransform(639.3,394.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#B89FD0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_116.setTransform(639.3,394.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B89FD0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_117.setTransform(639.3,394.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#BA9DCE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_118.setTransform(639.3,394.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BA9DCE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_119.setTransform(639.3,394.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#BD9CCC").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_120.setTransform(639.3,394.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BD9CCC").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_121.setTransform(639.3,394.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#BF9ACA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_122.setTransform(639.3,394.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BF9ACA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_123.setTransform(639.3,394.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#C199C8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_124.setTransform(639.3,394.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C199C8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_125.setTransform(639.3,394.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#C497C7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_126.setTransform(639.3,394.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C497C7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_127.setTransform(639.3,394.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#C696C5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_128.setTransform(639.3,394.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C696C5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_129.setTransform(639.3,394.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#C994C3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_130.setTransform(639.3,394.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C994C3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_131.setTransform(639.3,394.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#CB93C1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_132.setTransform(639.3,394.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CB93C1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_133.setTransform(639.3,394.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#CD91BF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_134.setTransform(639.3,394.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CD91BF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_135.setTransform(639.3,394.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#D090BD").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_136.setTransform(639.3,394.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D090BD").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_137.setTransform(639.3,394.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#D28EBC").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_138.setTransform(639.3,394.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D28EBC").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_139.setTransform(639.3,394.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#D48DBA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_140.setTransform(639.3,394.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D48DBA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_141.setTransform(639.3,394.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#D78BB8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_142.setTransform(639.3,394.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D78BB8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_143.setTransform(639.3,394.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#D98AB6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_144.setTransform(639.3,394.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D98AB6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_145.setTransform(639.3,394.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#D488B5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_146.setTransform(639.3,394.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D488B5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_147.setTransform(639.3,394.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#CF87B4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_148.setTransform(639.3,394.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CF87B4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_149.setTransform(639.3,394.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#CA85B3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_150.setTransform(639.3,394.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CA85B3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_151.setTransform(639.3,394.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#C684B2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_152.setTransform(639.3,394.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C684B2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_153.setTransform(639.3,394.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#C182B2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_154.setTransform(639.3,394.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C182B2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_155.setTransform(639.3,394.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#BC81B1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_156.setTransform(639.3,394.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BC81B1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_157.setTransform(639.3,394.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#B77FB0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_158.setTransform(639.3,394.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B77FB0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_159.setTransform(639.3,394.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#B27EAF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_160.setTransform(639.3,394.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#B27EAF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_161.setTransform(639.3,394.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#AD7CAE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_162.setTransform(639.3,394.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#AD7CAE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_163.setTransform(639.3,394.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#A87BAD").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_164.setTransform(639.3,394.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#A87BAD").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_165.setTransform(639.3,394.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#A479AC").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_166.setTransform(639.3,394.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A479AC").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_167.setTransform(639.3,394.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#9F78AB").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_168.setTransform(639.3,394.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#9F78AB").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_169.setTransform(639.3,394.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#9A76AA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_170.setTransform(639.3,394.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#9A76AA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_171.setTransform(639.3,394.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#9575AA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_172.setTransform(639.3,394.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#9575AA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_173.setTransform(639.3,394.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#9073A9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_174.setTransform(639.3,394.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#9073A9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_175.setTransform(639.3,394.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#8B72A8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_176.setTransform(639.3,394.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#8B72A8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_177.setTransform(639.3,394.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#8670A7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_178.setTransform(639.3,394.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#8670A7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_179.setTransform(639.3,394.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#826FA6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_180.setTransform(639.3,394.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#826FA6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_181.setTransform(639.3,394.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#7D6DA5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_182.setTransform(639.3,394.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#7D6DA5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_183.setTransform(639.3,394.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#786CA4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_184.setTransform(639.3,394.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#786CA4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_185.setTransform(639.3,394.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#736AA3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_186.setTransform(639.3,394.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#736AA3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_187.setTransform(639.3,394.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#6E69A3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_188.setTransform(639.3,394.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6E69A3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_189.setTransform(639.3,394.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#6967A2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_190.setTransform(639.3,394.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6967A2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_191.setTransform(639.3,394.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#6466A1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_192.setTransform(639.3,394.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#6466A1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_193.setTransform(639.3,394.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#6064A0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_194.setTransform(639.3,394.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#6064A0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_195.setTransform(639.3,394.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#5B639F").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_196.setTransform(639.3,394.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5B639F").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_197.setTransform(639.3,394.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#56619E").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_198.setTransform(639.3,394.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#56619E").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_199.setTransform(639.3,394.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#51609D").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_200.setTransform(639.3,394.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#51609D").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_201.setTransform(639.3,394.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#4C5E9C").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_202.setTransform(639.3,394.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#4C5E9C").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_203.setTransform(639.3,394.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#475D9B").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_204.setTransform(639.3,394.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#475D9B").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_205.setTransform(639.3,394.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#425B9B").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_206.setTransform(639.3,394.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#425B9B").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_207.setTransform(639.3,394.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#3E5A9A").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_208.setTransform(639.3,394.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#3E5A9A").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_209.setTransform(639.3,394.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#395899").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_210.setTransform(639.3,394.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#395899").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_211.setTransform(639.3,394.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#345798").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_212.setTransform(639.3,394.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#345798").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_213.setTransform(639.3,394.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#2F5597").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_214.setTransform(639.3,394.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#2F5597").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_215.setTransform(639.3,394.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#305798").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_216.setTransform(639.3,394.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#305798").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_217.setTransform(639.3,394.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#325999").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_218.setTransform(639.3,394.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#325999").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_219.setTransform(639.3,394.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#335B9B").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_220.setTransform(639.3,394.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#335B9B").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_221.setTransform(639.3,394.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#345D9C").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_222.setTransform(639.3,394.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#345D9C").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_223.setTransform(639.3,394.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#355F9D").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_224.setTransform(639.3,394.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#355F9D").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_225.setTransform(639.3,394.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#37609E").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_226.setTransform(639.3,394.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#37609E").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_227.setTransform(639.3,394.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#3862A0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_228.setTransform(639.3,394.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#3862A0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_229.setTransform(639.3,394.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#3964A1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_230.setTransform(639.3,394.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#3964A1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_231.setTransform(639.3,394.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#3B66A2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_232.setTransform(639.3,394.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#3B66A2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_233.setTransform(639.3,394.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#3C68A3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_234.setTransform(639.3,394.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#3C68A3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_235.setTransform(639.3,394.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#3D6AA4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_236.setTransform(639.3,394.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#3D6AA4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_237.setTransform(639.3,394.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#3F6CA6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_238.setTransform(639.3,394.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#3F6CA6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_239.setTransform(639.3,394.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#406EA7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_240.setTransform(639.3,394.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#406EA7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_241.setTransform(639.3,394.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#4170A8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_242.setTransform(639.3,394.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#4170A8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_243.setTransform(639.3,394.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#4272A9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_244.setTransform(639.3,394.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#4272A9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_245.setTransform(639.3,394.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#4474AB").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_246.setTransform(639.3,394.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4474AB").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_247.setTransform(639.3,394.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#4576AC").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_248.setTransform(639.3,394.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#4576AC").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_249.setTransform(639.3,394.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#4678AD").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_250.setTransform(639.3,394.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#4678AD").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_251.setTransform(639.3,394.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#4879AE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_252.setTransform(639.3,394.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#4879AE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_253.setTransform(639.3,394.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#497BAF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_254.setTransform(639.3,394.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#497BAF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_255.setTransform(639.3,394.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#4A7DB1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_256.setTransform(639.3,394.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#4A7DB1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_257.setTransform(639.3,394.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#4B7FB2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_258.setTransform(639.3,394.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#4B7FB2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_259.setTransform(639.3,394.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#4D81B3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_260.setTransform(639.3,394.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#4D81B3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_261.setTransform(639.3,394.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#4E83B4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_262.setTransform(639.3,394.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#4E83B4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_263.setTransform(639.3,394.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#4F85B6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_264.setTransform(639.3,394.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4F85B6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_265.setTransform(639.3,394.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#5187B7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_266.setTransform(639.3,394.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#5187B7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_267.setTransform(639.3,394.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#5289B8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_268.setTransform(639.3,394.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#5289B8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_269.setTransform(639.3,394.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#538BB9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_270.setTransform(639.3,394.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#538BB9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_271.setTransform(639.3,394.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#548DBA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_272.setTransform(639.3,394.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#548DBA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_273.setTransform(639.3,394.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#568FBC").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_274.setTransform(639.3,394.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#568FBC").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_275.setTransform(639.3,394.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#5790BD").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_276.setTransform(639.3,394.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#5790BD").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_277.setTransform(639.3,394.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#5892BE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_278.setTransform(639.3,394.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#5892BE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_279.setTransform(639.3,394.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#5A94BF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_280.setTransform(639.3,394.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#5A94BF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_281.setTransform(639.3,394.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#5B96C1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_282.setTransform(639.3,394.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#5B96C1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_283.setTransform(639.3,394.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#5C98C2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_284.setTransform(639.3,394.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#5C98C2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_285.setTransform(639.3,394.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#5E9AC3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_286.setTransform(639.3,394.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#5E9AC3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_287.setTransform(639.3,394.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#5F9CC4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_288.setTransform(639.3,394.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#5F9CC4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_289.setTransform(639.3,394.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#609EC5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_290.setTransform(639.3,394.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#609EC5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_291.setTransform(639.3,394.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#61A0C7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_292.setTransform(639.3,394.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#61A0C7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_293.setTransform(639.3,394.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#63A2C8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_294.setTransform(639.3,394.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#63A2C8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_295.setTransform(639.3,394.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#64A4C9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_296.setTransform(639.3,394.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#64A4C9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_297.setTransform(639.3,394.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#65A5CA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_298.setTransform(639.3,394.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#65A5CA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_299.setTransform(639.3,394.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#67A7CC").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_300.setTransform(639.3,394.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#67A7CC").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_301.setTransform(639.3,394.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#68A9CD").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_302.setTransform(639.3,394.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#68A9CD").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_303.setTransform(639.3,394.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#69ABCE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_304.setTransform(639.3,394.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#69ABCE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_305.setTransform(639.3,394.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#6AADCF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_306.setTransform(639.3,394.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#6AADCF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_307.setTransform(639.3,394.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#6CAFD0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_308.setTransform(639.3,394.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#6CAFD0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_309.setTransform(639.3,394.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#6DB1D2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_310.setTransform(639.3,394.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#6DB1D2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_311.setTransform(639.3,394.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#6EB3D3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_312.setTransform(639.3,394.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#6EB3D3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_313.setTransform(639.3,394.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#70B5D4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_314.setTransform(639.3,394.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#70B5D4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_315.setTransform(639.3,394.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#71B7D5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_316.setTransform(639.3,394.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#71B7D5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_317.setTransform(639.3,394.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#72B9D7").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_318.setTransform(639.3,394.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#72B9D7").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_319.setTransform(639.3,394.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#73BBD8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_320.setTransform(639.3,394.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#73BBD8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_321.setTransform(639.3,394.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#75BDD9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_322.setTransform(639.3,394.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#75BDD9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_323.setTransform(639.3,394.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#76BEDA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_324.setTransform(639.3,394.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#76BEDA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_325.setTransform(639.3,394.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#77C0DB").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_326.setTransform(639.3,394.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#77C0DB").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_327.setTransform(639.3,394.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#79C2DD").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_328.setTransform(639.3,394.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#79C2DD").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_329.setTransform(639.3,394.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#7AC4DE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_330.setTransform(639.3,394.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#7AC4DE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_331.setTransform(639.3,394.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#7BC6DF").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_332.setTransform(639.3,394.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#7BC6DF").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_333.setTransform(639.3,394.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#7CC8E0").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_334.setTransform(639.3,394.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#7CC8E0").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_335.setTransform(639.3,394.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#7ECAE2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_336.setTransform(639.3,394.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#7ECAE2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_337.setTransform(639.3,394.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#7FCCE3").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_338.setTransform(639.3,394.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#7FCCE3").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_339.setTransform(639.3,394.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#80CEE4").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_340.setTransform(639.3,394.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#80CEE4").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_341.setTransform(639.3,394.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#82D0E5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_342.setTransform(639.3,394.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#82D0E5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_343.setTransform(639.3,394.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#83D2E6").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_344.setTransform(639.3,394.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#83D2E6").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_345.setTransform(639.3,394.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#84D4E8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_346.setTransform(639.3,394.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#84D4E8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_347.setTransform(639.3,394.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#86D5E9").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_348.setTransform(639.3,394.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#86D5E9").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_349.setTransform(639.3,394.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#87D7EA").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_350.setTransform(639.3,394.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#87D7EA").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_351.setTransform(639.3,394.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#88D9EB").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_352.setTransform(639.3,394.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#88D9EB").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_353.setTransform(639.3,394.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#89DBED").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_354.setTransform(639.3,394.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#89DBED").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_355.setTransform(639.3,394.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#8BDDEE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_356.setTransform(639.3,394.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#8BDDEE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_357.setTransform(639.3,394.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#8AD8F1").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_358.setTransform(639.3,394.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#8AD8F1").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_359.setTransform(639.3,394.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#84C8F8").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_360.setTransform(639.3,394.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#84C8F8").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_361.setTransform(639.3,394.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#607CAE").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_362.setTransform(639.3,394.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#607CAE").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_363.setTransform(639.3,394.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#91A4C5").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_364.setTransform(639.3,394.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#91A4C5").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_365.setTransform(639.3,394.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#C1CBDB").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_366.setTransform(639.3,394.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C1CBDB").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_367.setTransform(639.3,394.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#F2F2F2").ss(19,1,1).p("EhsxhGKMDZjAAAMAAACMVMjZjAAAg");
	this.shape_368.setTransform(639.3,394.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#F2F2F2").s().p("EhsxBGKMAAAiMTMDZiAAAMAAACMTg");
	this.shape_369.setTransform(639.3,394.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_297},{t:this.shape_296}]},1).to({state:[{t:this.shape_299},{t:this.shape_298}]},1).to({state:[{t:this.shape_301},{t:this.shape_300}]},1).to({state:[{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_307},{t:this.shape_306}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},1).to({state:[{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_313},{t:this.shape_312}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},63).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_message = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// message
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTDDIAAgLIANAAQAZAAALgPQAGgJAAghIAAkpIguAAQgcAAgMAEQgjAMgDAzIgLAAIAEhbIE/AAIAEBbIgLAAQgDgYgGgLQgRggguAAIg3AAIAAEpQABAlAHAIQAKAMAYAAIANAAIAAALg");
	this.shape.setTransform(329.1,163.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ehnzg5YMDPnAAAMAAAByxMjPnAAAg");
	this.shape_1.setTransform(631.825,354.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.973)").s().p("EhnzA5ZMAAAhyxMDPnAAAMAAAByxg");
	this.shape_2.setTransform(631.825,354.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9DNIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgrgCgLQgEgRgPAAQgIAAgLAFIgEgLIBOggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAgSiaQgIgJAAgMQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_3.setTransform(355.325,162.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABfCIIAAgLIAGAAQAeAAAGgVQABgFAAgXIAAhwQAAghgHgNQgLgSgaAAQgeAAgmAkIAAADIAACJQAAAVABAEQACAOAMAFQAIAFAUAAIAAALIiEAAIAAgLQAjAAAGgVQACgFAAgXIAAhwQAAghgKgNQgMgTgXAAQgQAAgPAIQgYANgNAQIAACMQAAAlAOAIQAHAEAWAAIAAALIiDAAIAAgLQAeAAAHgQQAEgJAAgYIAAhkQAAgsgDgMQgEgRgOAAQgIAAgMAFIgEgLIBQggIAMAAIAAA4QAdgcAGgFQAbgXAfAAQA2AAAMA4QAXgbARgMQAYgRAbAAQAtAAARAuQAHARAAAkIAABwQAAAZAEAJQAGAPAeAAIAAALg");
	this.shape_4.setTransform(386.425,169.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRBhQgdgmAAg4QAAg7AdgnQAhgsA6AAQAvAAAbAfQAbAdAAAvIi1AAQAAAwAYAkQAaApAuAAQA1AAAXg/IAJAGQgGAqgdAeQgeAggrAAQg0AAgggrgAgzhhQgQAUgDAdIB6AAQgCgagFgKQgOgjgkAAQgbAAgTAWg");
	this.shape_5.setTransform(422.6,170.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATDNIAAgLQASAAAAgMQAAgGgLgPIhQhnIBCg8QAVgUAEgFQACgDAAgEQAAgNgUgCIAAgJIByAAIAAAJQgpACghAdIhCA9IBCBWQAbAiALALQAOANALAEQAHADASAAIAAALgAiSDNIAAgLQAhAAAHgPQAEgJAAgXIAAjvQAAg/gIgIQgFgDgIAAQgGAAgMAEIgFgKIBPggIANAAIAAEGIAABXQAAAmAOAHQAGAEAXAAIAAALgAg2A6g");
	this.shape_6.setTransform(476.725,162.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AM0CmQgdgmAAg4QAAg8AegmQAhgsA7AAQAvAAAbAfQAbAdAAAuIi2AAQAAAxAXAkQAbApAuAAQA2AAAXg/IAJAGQgGAqgdAeQgfAggqAAQg1AAghgrgANTgcQgQAUgDAcIB6AAQgBgZgFgKQgPgjgkAAQgbAAgTAWgAACCmQgcgmAAg4QAAg8AdgmQAhgsA7AAQAvAAAbAfQAbAdAAAuIi2AAQAAAxAXAkQAbApAuAAQA2AAAXg/IAJAGQgGAqgdAeQgfAggqAAQg1AAghgrgAAhgcQgQAUgDAcIB6AAQgBgZgFgKQgPgjgkAAQgbAAgTAWgAKFDJIAAgLQASAAAAgMQAAgGgLgPIhRhnIBDg8QAVgUAEgFQACgDAAgEQAAgNgUgCIAAgJIByAAIAAAJQgpACghAdIhDA9IBDBWQAbAiALALQAOANALAEQAHADASAAIAAALgAHfDJIAAgLQAhAAAHgPQAEgJAAgXIAAjvQAAg/gIgIQgFgDgIAAQgGAAgMAEIgFgKIBPggIANAAIAAEGIAABXQAAAmAOAHQAGAEAXAAIAAALgAi1DJIAAgLIAGAAQAeAAAGgVQABgFAAgXIAAhxQAAgggHgNQgLgSgaAAQgeAAgmAjIAAADIAACKQAAAVABAEQACAOAMAFQAIAFAUAAIAAALIiFAAIAAgLQAjAAAGgVQACgFAAgXIAAhxQAAgggKgNQgMgTgXAAQgQAAgPAIQgYANgNAPIAACNQAAAlAOAIQAHAEAWAAIAAALIiDAAIAAgLQAeAAAHgQQAEgJAAgYIAAhlQAAgrgDgMQgEgRgOAAQgIAAgMAFIgEgLIBQggIAMAAIAAA4QAdgcAGgFQAbgXAfAAQA3AAAMA4QAXgbARgMQAYgRAbAAQAtAAARAuQAHARAAAjIAABxQAAAZAEAJQAGAPAeAAIAAALgAqJDJIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgqgCgMQgEgRgPAAQgIAAgLAFIgEgLIBPggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAumDJIAAgLIAOAAQAZAAALgPQAGgJAAghIAAkqIgvAAQgcAAgLAEQgjANgDAzIgLAAIAEhcIE/AAIAFBcIgLAAQgDgYgGgLQgRghguAAIg3AAIAAEqQAAAkAIAJQAKAMAYAAIANAAIAAALgAI7A2gApeieQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgMAAgJgIg");
	this.shape_7.setTransform(414.125,163.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.973)").s().p("EhnzA5ZMAAAhyxMDPnAAAMAAAByxgA1L+XQgeAnAAA9QAAA3AdAnQAhAqA1AAQAqAAAfggQAdgdAGgrIgJgFQgXA/g2AAQguAAgbgqQgXgjAAgxIC2AAQAAgvgbgeQgbgegvAAQg7AAghArgEgh9geXQgeAnAAA9QAAA3AdAnQAhAqA1AAQAqAAAfggQAdgdAGgrIgJgFQgXA/g2AAQguAAgbgqQgXgjAAgxIC2AAQAAgvgbgeQgbgegvAAQg7AAghArgA307fQALAPAAAHQAAALgSABIAAAKICAAAIAAgKQgSAAgHgDQgLgEgOgOQgLgLgbgiIhDhVIBDg+QAhgeApgBIAAgKIhyAAIAAAKQAUABAAAOQAAADgCADQgEAGgVATIhDA9IAAkGIgNAAIhPAgIAFAKQAMgFAGAAQAIAAAFAEQAIAHAAA/IAADwQAAAYgEAJQgHAPghAAIAAAKICHAAIAAgKQgXgBgGgDQgOgHAAgmIAAhYgEgk2gazICDAAIAAgKQgeAAgGgQQgEgJAAgZIAAhxQAAgkgHgQQgRgugtAAQgbAAgYARQgRAMgXAbQgMg4g3AAQgfAAgbAXQgGAEgdAdIAAg4IgMAAIhQAgIAEAKQAMgEAIAAQAOAAAEARQADAMAAAsIAABkQAAAZgEAIQgHARgeAAIAAAKICDAAIAAgKQgWAAgHgEQgOgIAAgmIAAiNQANgPAYgNQAPgIAQAAQAXAAAMASQAKAOAAAgIAABxQAAAYgCAFQgGAVgjAAIAAAKICFAAIAAgKQgUAAgIgFQgMgGgCgNQgBgFAAgVIAAiJIAAgEQAmgkAeAAQAaAAALATQAHANAAAgIAABxQAAAYgBAEQgGAWgeAAIgGAAgEgrkgeMQACANAAArIAABlQAAAZgEAIQgHARgdAAIAAAKICAAAIAAgKQgTAAgHgEQgOgJAAglIAAjTIgNAAIhPAgIAEAKQALgEAIAAQAPAAAEAQgEgwngazICmAAIAAgLIgNAAQgYAAgKgMQgIgIAAglIAAkqIA3AAQAuAAARAgQAGALADAYIALAAIgFhbIk/AAIgEBbIALAAQADgzAjgMQALgEAcAAIAvAAIAAEqQAAAhgGAJQgLAPgZAAIgOAAgEgrfghEQgIAIAAANQAAAMAIAIQAJAJAMAAQAMAAAJgJQAIgIAAgMQAAgMgIgJQgJgIgMAAQgMAAgJAIgA1A9oQADgcAQgUQATgWAbAAQAkAAAPAiQAFALABAZgEghygdoQADgcAQgUQATgWAbAAQAkAAAPAiQAFALABAZg");
	this.shape_8.setTransform(631.825,354.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhRBhQgdgmAAg4QAAg7AegnQAggsA6AAQAvAAAbAfQAbAdAAAvIi1AAQAAAwAYAkQAaApAuAAQA1AAAXg/IAJAGQgGAqgdAeQgeAggrAAQg0AAgggrgAgzhhQgQAUgDAdIB6AAQgCgagFgKQgOgjgkAAQgbAAgTAWg");
	this.shape_9.setTransform(530.6,170.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhRBhQgdgmAAg4QAAg7AegnQAggsA6AAQAvAAAbAfQAbAdAAAvIi1AAQAAAwAYAkQAaApAuAAQA1AAAXg/IAJAGQgGAqgdAeQgeAggrAAQg0AAgggrgAgzhhQgQAUgDAdIB6AAQgCgagEgKQgPgjgkAAQgbAAgTAWg");
	this.shape_10.setTransform(504.4,170.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiJDHIAAgLIAHAAQAQAAALgGQAMgHAAgnIAAj4QAAglgKgGQgFgEgJAAQgHAAgLAEIgDgJIBRghIALAAIAAA+QAlg/AvAAQAnAAAbAfQAgAmAAA9QAABEgnAsQggAlgxAAQgUAAgQgGQgMgFgOgNIAABRQAAAUABAFQADAPALAGQAIAEAVAAIAAALgAgKiVQgKAFgYAaIAABjQAAAeADALQAFATARAMQAQALAUAAQAdAAASgXQAXgdAAg0QAAg9gaghQgTgWgZAAQgOAAgNAHg");
	this.shape_11.setTransform(557.125,175.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0CDQgLgDgFAAQgHAAgDAIIgKAAIAAheIAKAAQAGAiAUAWQAXAZAfAAQASAAAOgLQANgLAAgSQAAgYgZgSQgKgIghgRQgjgQgNgNQgUgUAAgeQAAgiAXgVQAXgVAiAAQAOAAAXAHQAOAEAFAAQAIAAAGgLIAKAAIAABaIgKAAQgJgjgOgQQgSgWgeAAQgRAAgNAIQgPAKAAAQQAAAfAuAWIAoAUQA7AcAAAvQAAAjgbAXQgaAWgjAAQgYAAgegJg");
	this.shape_12.setTransform(584.85,170.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhhBcQgdgoAAgyQAAgjARgiQASglAegSQAdgRAgAAQA8AAAkAuQAfAmAAAzQAAAjgQAjQgSAlgeATQgdASgkAAQg8AAgjgwgAhAhQQgJAXAAAkQAAAwARApQAYA0ApAAQBBAAAAhnQAAhFgegpQgVgbgfAAQgnAAgRAog");
	this.shape_13.setTransform(636.725,170.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOCIIAAgLIAGAAQAeAAAFgWQABgEAAgXIAAhrQABhEgpAAQgiAAgiAlIAACKQABAbACAGQAIAQAhAAIAAALIiDAAIAAgLIAGAAQAVAAAIgOQAFgKAAgZIAAhhQAAhAgJgIQgFgEgHAAQgIAAgLAFIgEgLIBPggIAMAAIAAA4QAug4AqAAQAsAAASAuQAGARAAAkIAABwQAAAlAOAIQAHAEAUAAIAAALg");
	this.shape_14.setTransform(666.3,169.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABfCIIAAgLIAGAAQAeAAAGgVQABgFAAgXIAAhwQAAghgHgNQgLgSgaAAQgeAAgmAkIAAADIAACJQAAAVABAEQACAOAMAFQAIAFAUAAIAAALIiEAAIAAgLQAjAAAGgVQACgFAAgXIAAhwQAAghgKgNQgMgTgXAAQgQAAgPAIQgYANgNAQIAACMQAAAlAOAIQAHAEAWAAIAAALIiDAAIAAgLQAeAAAHgQQAEgJAAgYIAAhkQAAgsgDgMQgEgRgOAAQgIAAgMAFIgEgLIBQggIAMAAIAAA4QAdgcAGgFQAbgXAfAAQA2AAAMA4QAXgbARgMQAYgRAbAAQAtAAARAuQAHARAAAkIAABwQAAAZAEAJQAGAPAeAAIAAALg");
	this.shape_15.setTransform(386.425,169.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhhBcQgdgoAAgyQAAgjARgiQASglAegSQAdgRAgAAQA8AAAkAuQAfAmAAAzQAAAjgQAjQgSAlgeATQgdASgkAAQg8AAgjgwgAhAhQQgJAXAAAkQAAAwARApQAYA0ApAAQBBAAAAhnQAAhFgegpQgVgbgfAAQgnAAgRAog");
	this.shape_16.setTransform(636.725,170.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBCIIhejeQgLgYgQgJQgFgCgOgDIAAgLIB8AAIAAALIgIAAQgXAAAAAUQAAAJAGAPIA8CQIA+iWQAHgPAAgJQAAgEgDgCQgFgIgXAAIAAgLIBWAAIAAALQgPABgFAFQgKAJgJAUIhdDhg");
	this.shape_17.setTransform(797.225,170.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag9DNIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgrgCgLQgEgRgPAAQgIAAgLAFIgEgLIBOggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAgSiaQgIgJAAgMQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_18.setTransform(355.325,162.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOCIIAAgLIAGAAQAdAAAHgWQABgEAAgXIAAhrQAAhEgqAAQggAAgiAlIAACKQAAAbADAGQAHAQAgAAIAAALIiCAAIAAgLIAFAAQAXAAAHgOQAFgKAAgZIAAhhQAAhAgJgIQgFgEgHAAQgIAAgLAFIgFgLIBQggIANAAIAAA4QAug4ApAAQAsAAARAuQAHARAAAkIAABwQAAAlAPAIQAGAEATAAIAAALg");
	this.shape_19.setTransform(843.2,169.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhvCuQgVgOAAgQQAAgOAXgdIAdgfQgbgRAAgQQAAgXAugmQgygYAAg3QAAgqAggbQAegaArAAQAlAAAbASIA4AAQAQAAABACQACADAAAHQAAALgEACQgDABgMAAIgiAAQAQAUAAAhQAAApggAZQgdAXgqAAQgUAAgUgGQgWASAAAPQAAAMAYADIAoADQA6ABASACQAaAEAQAPQARAQAAAZQAAAhgfAdQgtAqhHgBQg4AAgmgZgAhbB7QAAANARAKQAdATA1gBQAjAAAcgLQAmgQAAgeQAAgUgegGQgKgCgiAAQhAgDgjgFQgbAeAAAWgAgziiQgKASAAAcQAAAuATAZQAPASAYAAQAxAAAAhDQAAgugUgZQgPgUgWAAQgbABgNAWg");
	this.shape_20.setTransform(873.025,176);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAjDDIAAgLIANAAQAZAAALgOQAHgJAAgjIAAh3Ii1AAIAAB3QAAAdAEAKQAIATAeAAIAOAAIAAALIinAAIAAgLIAOAAQAYAAALgOQAHgJAAgjIAAj7QAAgegEgJQgDgIgJgFQgMgGgOAAIgOAAIAAgLICnAAIAAALIgOAAQgNAAgNAGQgMAGgDARQgBAHAAAWIAABwIC1AAIAAhwQAAgegEgJQgIgTgfAAIgNAAIAAgLICnAAIAAALIgOAAQgNAAgNAGQgMAGgDARQgBAGAAAXIAAD7QAAAdAEAKQACAHAJAFQANAHAOAAIAOAAIAAALg");
	this.shape_21.setTransform(343.425,261.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA3CIIAAg4QgaAcgOAKQgXASgZAAQgvAAgOguQgHgUAAglIAAh0QAAgegQgHQgIgEgVAAIAAgLIBcAAIAACwQAAA7AsAAQAcABAlgmIAAiUQAAgYgKgIQgIgGgYgBIAAgLIBaAAIAACfQgBA+AKAJQAEADAGAAQAKAAAKgEIAFAKIhQAgg");
	this.shape_22.setTransform(346.95,268);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABfCIIAAgLIAGAAQAeAAAGgVQABgFAAgXIAAhwQAAghgHgNQgLgSgaAAQgeAAgmAkIAAADIAACJQAAAVABAEQACAOAMAFQAIAFAUAAIAAALIiEAAIAAgLQAjAAAGgVQACgFAAgXIAAhwQAAghgKgNQgMgTgXAAQgQAAgPAIQgYANgNAQIAACMQAAAlAOAIQAHAEAWAAIAAALIiDAAIAAgLQAeAAAHgQQAEgJAAgYIAAhkQAAgsgDgMQgEgRgOAAQgIAAgMAFIgEgLIBQggIAMAAIAAA4QAdgcAGgFQAbgXAfAAQA2AAAMA4QAXgbARgMQAYgRAbAAQAtAAARAuQAHARAAAkIAABwQAAAZAEAJQAGAPAeAAIAAALg");
	this.shape_23.setTransform(386.425,169.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhmB3QgRgUAAgcQAAgqAygdQAdgQBDgZIAAgKQAAghgIgPQgMgWgcAAQgPAAgMAJQgNAJAAAPIABARQABAbgZABQgZAAAAgcQAAghAigTQAcgPAjAAQBBAAARAoQAFAMAAAmIAABZQAAA1AGAGQADACAFAAQAEAAAEgCQAFgEASgRIAAAQQggArgeAAQgeAAgBgrQgoAfgKAFQgPAIgSgBQgdAAgRgTgAgcAAQgrAYAAAgQAAATALAPQAMAPASAAQAWAAAjgdIAAhkQgqASgNAGg");
	this.shape_24.setTransform(421.675,267.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAOCIIAAgLIAFAAQAfAAAFgWQABgEAAgXIAAhrQABhEgpAAQghAAgjAlIAACKQAAAbADAGQAJAQAgAAIAAALIiDAAIAAgLIAFAAQAXAAAHgOQAFgKAAgZIAAhhQAAhAgJgIQgEgEgIAAQgIAAgLAFIgEgLIBPggIAMAAIAAA4QAug4AqAAQAtAAARAuQAGARAAAkIAABwQAAAlAOAIQAIAEASAAIAAALg");
	this.shape_25.setTransform(448.6,267.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag9DNIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgrgCgLQgEgRgPAAQgIAAgLAFIgEgLIBOggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAgSiaQgIgJAAgMQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_26.setTransform(355.325,162.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfCVQgGgOAAgdIAAiwIgpAAIAAgKQAigOAbgrQAGgKAMgdIAJAAIAABWIA9AAIAAAUIg9AAIAACqQAAArAaAAQAXAAAJgWIALAAQgUA5guAAQgfgBgNgcg");
	this.shape_27.setTransform(488.25,263.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah1C7QgNgJAAgOQABgbAdAAQAKAAAQAGQAMAEADAAQAVAAASgrIASguIhejGQgEgJgKgNQgIgKgDgEQgHgEgPgEIAAgLIB7AAIAAALIgGAAQgaAAAAAUQAAALAKAUIA/CFIA7iSQAEgMAAgLQABgJgKgEQgFgCgMAAIAAgLIBWAAIAAALQgSACgLAQQgCACgIAUIhrEGQgMAfgVAVQgaAageAAQgPAAgLgJg");
	this.shape_28.setTransform(510.85,273.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATDNIAAgLQASAAAAgMQAAgGgLgPIhQhnIBCg8QAVgUAEgFQACgDAAgEQAAgNgUgCIAAgJIByAAIAAAJQgpACghAdIhCA9IBCBWQAbAiALALQAOANALAEQAHADASAAIAAALgAiSDNIAAgLQAhAAAHgPQAEgJAAgXIAAjvQAAg/gIgIQgFgDgIAAQgGAAgMAEIgFgKIBPggIANAAIAAEGIAABXQAAAmAOAHQAGAEAXAAIAAALgAg2A6g");
	this.shape_29.setTransform(476.725,162.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhSBhQgdgmAAg4QAAg7AfgnQAggsA7AAQAuAAAcAfQAaAdABAvIi1AAQAAAwAWAkQAbApAtAAQA2AAAXg/IAKAGQgHAqgdAeQgfAggqAAQg0AAghgrgAgyhhQgQAUgDAdIB4AAQgBgagEgKQgPgjgjAAQgcAAgSAWg");
	this.shape_30.setTransform(594.55,267.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhRBhQgegmAAg4QAAg7AfgnQAggsA7AAQAuAAAbAfQAbAdAAAvIi0AAQAAAwAWAkQAbApAuAAQA1AAAXg/IAJAGQgGAqgdAeQgfAggqAAQg0AAgggrgAgzhhQgPAUgDAdIB4AAQgBgagEgKQgPgjgkAAQgbAAgTAWg");
	this.shape_31.setTransform(620.75,267.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiJDHIAAgLIAHAAQAQAAALgGQAMgHAAgnIAAj4QAAglgKgGQgFgEgJAAQgHAAgLAEIgDgJIBRghIALAAIAAA+QAlg/AvAAQAnAAAbAfQAgAmAAA9QAABEgnAsQggAlgxAAQgUAAgQgGQgMgFgOgNIAABRQAAAUABAFQADAPALAGQAIAEAVAAIAAALgAgKiVQgKAFgYAaIAABjQAAAeADALQAFATARAMQAQALAUAAQAdAAASgXQAXgdAAg0QAAg9gaghQgTgWgZAAQgOAAgNAHg");
	this.shape_32.setTransform(557.125,175.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag0CDQgKgDgGAAQgHAAgDAIIgKAAIAAheIAKAAQAHAiAUAWQAVAZAhAAQARAAANgLQAOgLAAgSQAAgYgYgSQgLgIghgRQgjgQgMgNQgVgUAAgeQAAgiAXgVQAXgVAiAAQAOAAAXAHQAPAEAEAAQAIAAAFgLIAKAAIAABaIgKAAQgIgjgOgQQgSgWgeAAQgQAAgNAIQgQAKAAAQQAAAfAtAWIApAUQA7AcAAAvQAAAjgbAXQgZAWgkAAQgYAAgegJg");
	this.shape_33.setTransform(675,267.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhhBcQgdgoAAgyQAAgjARgiQASglAegSQAdgRAgAAQA8AAAkAuQAfAmAAAzQAAAjgQAjQgSAlgeATQgdASgkAAQg8AAgjgwgAhAhQQgJAXAAAkQAAAwARApQAYA0ApAAQBBAAAAhnQAAhFgegpQgVgbgfAAQgnAAgRAog");
	this.shape_34.setTransform(636.725,170.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOCIIAAgLIAGAAQAdAAAHgWQABgEAAgXIAAhrQgBhEgpAAQggAAgiAlIAACKQAAAbACAGQAJAQAfAAIAAALIiCAAIAAgLIAGAAQAVAAAIgOQAFgKAAgZIAAhhQAAhAgJgIQgEgEgIAAQgIAAgLAFIgFgLIBQggIANAAIAAA4QAtg4AqAAQAsAAARAuQAHARAAAkIAABwQAAAlAPAIQAGAEAUAAIAAALg");
	this.shape_35.setTransform(756.45,267.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhSBhQgcgmAAg4QAAg7AdgnQAigsA5AAQAvAAAcAfQAbAdAAAvIi2AAQAAAwAYAkQAaApAtAAQA2AAAYg/IAJAGQgHAqgdAeQgeAggqAAQg1AAghgrgAgzhhQgPAUgEAdIB6AAQgBgagGgKQgPgjgiAAQgcAAgTAWg");
	this.shape_36.setTransform(810.6,267.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgBCIIhejdQgLgZgQgJQgFgDgOgCIAAgLIB8AAIAAALIgIAAQgXAAAAAUQAAAKAGAOIA8CQIA+iVQAHgRAAgIQAAgEgDgDQgFgHgXAAIAAgLIBWAAIAAALQgPABgFAFQgKAIgJAVIhdDhg");
	this.shape_37.setTransform(838.175,268);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhhBcQgdgoAAgyQAAgjARgiQASglAegSQAdgRAgAAQA8AAAkAuQAfAmAAAzQAAAjgQAjQgSAlgeATQgdASgkAAQg8AAgjgwgAhAhQQgJAXAAAkQAAAwARApQAYA0ApAAQBBAAAAhnQAAhFgegpQgVgbgfAAQgnAAgRAog");
	this.shape_38.setTransform(636.725,170.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag9DNIAAgLQAcAAAHgQQAEgJAAgYIAAjvQAAg9gIgHQgFgEgHAAQgIAAgLAEIgFgKIBNggIANAAIAAFdQAAAlAPAIQAIAEAUAAIAAALg");
	this.shape_39.setTransform(890.925,260.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgBCIIhejdQgLgZgQgJQgFgDgOgCIAAgLIB8AAIAAALIgIAAQgXAAAAAUQAAAKAGAOIA8CQIA+iVQAHgRAAgIQAAgEgDgDQgFgHgXAAIAAgLIBWAAIAAALQgPABgFAFQgKAIgJAVIhdDhg");
	this.shape_40.setTransform(838.175,268);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag9DNIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgrgCgLQgEgRgPAAQgIAAgLAFIgEgLIBOggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAgSiaQgIgJAAgMQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_41.setTransform(355.325,162.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAOCIIAAgLIAFAAQAfAAAFgWQABgEAAgXIAAhrQAAhEgoAAQgiAAgiAlIAACKQAAAbAEAGQAHAQAgAAIAAALIiCAAIAAgLIAFAAQAWAAAIgOQAFgKAAgZIAAhhQAAhAgJgIQgFgEgHAAQgIAAgLAFIgFgLIBQggIAMAAIAAA4QAug4AqAAQAtAAAQAuQAHARAAAkIAABwQAAAlAOAIQAIAEASAAIAAALg");
	this.shape_42.setTransform(959.55,267.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhvCvQgVgPAAgPQAAgPAXgdIAdggQgbgQAAgPQAAgYAuglQgygZAAg3QAAgrAggbQAegaArAAQAlABAbASIA4AAQAQAAABADQACADAAAGQAAALgEABQgDABgMAAIgiAAQAQAVAAAgQAAAqggAaQgdAWgqAAQgUAAgUgGQgWASAAAOQAAANAYAEIAoABQA6ACASADQAaADAQAPQARAQAAAZQAAAhgfAdQgtAqhHAAQg4AAgmgZgAhbB6QAAAOARALQAdARA1ABQAjAAAcgMQAmgQAAgeQAAgUgegGQgKgCgigBQhAgBgjgGQgbAfAAAUgAgziiQgKASAAAdQAAAtATAYQAPAUAYgBQAxAAAAhDQAAgugUgaQgPgSgWAAQgbgBgNAXg");
	this.shape_43.setTransform(989.375,273.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.973)").s().p("ABbDIIhZj5IhYD5IgKAAIh0lDQgNglgEgGQgLgWgfAAIAAgLICQAAIAAALIgHAAQgfAAAAAYQAAAKANAkIBNDaIBAi5IgUg7QgFgMgJgOQgIgLgQgFQgFgCgMAAIAAgLICXAAIAAALIgKAAQgfAAAAAaQAAAOANAlIBLDTIBKjWQANgkAAgNQAAgPgPgGQgLgEgSAAIAAgLIB1AAIAAALQgcAAgPAaQgEAHgOApIhtE6g");
	this.shape_44.setTransform(444.325,337.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.973)").s().p("AAODNIAAgLIAGAAQAeAAAGgWQABgEAAgXIAAhdQAAgggBgJQgEgZgOgKQgKgHgOAAQgdAAgkAlIAACLQAAAVABAEQADAOALAFQAIAFAUAAIAAALIiDAAIAAgLQASAAAKgFQANgHAAglIAAjuQAAg+gJgHQgEgEgIAAQgGAAgOAEIgEgKIBPggIANAAIAADBQAYgaAPgLQAXgSAaAAQAvAAAPAzQAGASgBAxIAABdQABAZAEAJQAGAPAdAAIAAALg");
	this.shape_45.setTransform(486.75,335.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.973)").s().p("AhmB3QgRgUAAgcQAAgqAygdQAdgQBDgZIAAgKQAAghgIgPQgMgWgcAAQgPAAgMAJQgNAJAAAPIABARQABAbgZABQgZAAAAgcQAAghAigTQAcgPAjAAQBBAAARAoQAFAMAAAmIAABZQAAA1AGAGQADACAFAAQAEAAAEgCQAFgEASgRIAAAQQggArgeAAQgeAAgBgrQgoAfgKAFQgPAIgSgBQgdAAgRgTgAgcAAQgrAYAAAgQAAATALAPQAMAPASAAQAWAAAjgdIAAhkQgqASgNAGg");
	this.shape_46.setTransform(515.575,343.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.973)").s().p("AgfCVQgGgOAAgdIAAiwIgqAAIAAgKQAkgOAagqQAHgLALgdIAJAAIAABWIA9AAIAAAUIg9AAIAACqQgBArAbAAQAWAAAKgWIAMAAQgVA5gvAAQgegBgNgcg");
	this.shape_47.setTransform(536.25,339.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.973)").s().p("AAOCIIAAgLIAGAAQAdAAAHgWQABgEAAgXIAAhrQgBhEgpAAQggAAgiAlIAACKQAAAbACAGQAJAQAfAAIAAALIiCAAIAAgLIAGAAQAVAAAIgOQAFgKAAgZIAAhhQAAhAgJgIQgEgEgIAAQgIAAgLAFIgFgLIBQggIANAAIAAA4QAtg4AqAAQAsAAARAuQAHARAAAkIAABwQAAAlAPAIQAGAEAUAAIAAALg");
	this.shape_48.setTransform(585,342.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.973)").s().p("AhSBhQgcgmAAg4QAAg7AdgnQAigsA5AAQAvAAAcAfQAbAdAAAvIi2AAQAAAwAYAkQAaApAtAAQA2AAAYg/IAJAGQgHAqgdAeQgeAggqAAQg1AAghgrgAgzhhQgPAUgEAdIB6AAQgBgagGgKQgPgjgiAAQgcAAgTAWg");
	this.shape_49.setTransform(613.05,343.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.973)").s().p("AAPCEIAAgLQAaAAAAgQQABgGgTgbIgmg4IgqA4QgUAaAAAEQAAASAaABIAAALIhWAAIAAgLQAKgBAIgGQALgIAagiIA3hIIgyhJQgSgZgHgIQgQgOgVAAIAAgLIB8AAIAAALQgVAAgBAPQABAGAJAPIAKAOIASAeIAWgeQAUgcAAgIQAAgOgUAAIAAgLIBZAAIAAALQgOABgLAHQgNAJgZAhIgkAwIBBBeQATAbAHAGQAPAPAVABIAAALg");
	this.shape_50.setTransform(640.7,343.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.973)").s().p("AgfCVQgGgOAAgdIAAiwIgpAAIAAgKQAigOAbgqQAHgLALgdIAJAAIAABWIA9AAIAAAUIg9AAIAACqQgBArAbAAQAXAAAJgWIAMAAQgVA5gvAAQgegBgNgcg");
	this.shape_51.setTransform(663.95,339.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.973)").s().p("AghB4IAfgkIAhAiIgfAlgAgUARQAAgTARgXQALgRAAgRQAAgUgNgNQgOgOgWgBQgHAAgJACIAhgwIALgBQAfAAATARQAVARAAAdQgBAVgTAZQgVAZAAAPQAAAOANAIIghAkQgRgUAAgQg");
	this.shape_52.setTransform(682.2,341.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},474).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}},{t:this.shape_5}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_1}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_13,p:{x:636.725,y:170.025}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_4,p:{x:386.425,y:169.625}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_13,p:{x:636.725,y:170.025}},{t:this.shape_14}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_13,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_3,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:343.425}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_15,p:{x:386.425}},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_4,p:{x:730.175,y:169.625}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18,p:{x:355.325,y:162.725}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_3,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_6,p:{x:476.725,y:162.725}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11,p:{x:557.125,y:175.925}},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_16,p:{x:636.725,y:170.025}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_13,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_34,p:{x:636.725}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_16,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_13,p:{x:726.875,y:267.625}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_34,p:{x:636.725}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_16,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_13,p:{x:726.875,y:267.625}},{t:this.shape_35}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_34,p:{x:636.725}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_16,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_13,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_34,p:{x:636.725}},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_16,p:{x:767.725,y:170.025}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_13,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37,p:{x:838.175}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37,p:{x:838.175}},{t:this.shape_13,p:{x:867.675,y:267.625}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37,p:{x:838.175}},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_26,p:{x:355.325}},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_18,p:{x:820.375,y:162.725}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_3,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_41},{t:this.shape_23},{t:this.shape_5},{t:this.shape_29},{t:this.shape_10},{t:this.shape_9},{t:this.shape_32},{t:this.shape_12},{t:this.shape_38},{t:this.shape_14},{t:this.shape_15,p:{x:730.175}},{t:this.shape_34,p:{x:767.725}},{t:this.shape_17},{t:this.shape_26,p:{x:820.375}},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21,p:{x:310.825}},{t:this.shape_22},{t:this.shape_4,p:{x:384.775,y:267.225}},{t:this.shape_24},{t:this.shape_25},{t:this.shape_18,p:{x:471.675,y:260.325}},{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{x:566.875,y:260.325}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_11,p:{x:647.275,y:273.525}},{t:this.shape_33},{t:this.shape_16,p:{x:726.875,y:267.625}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_40},{t:this.shape_13,p:{x:867.675,y:267.625}},{t:this.shape_39},{t:this.shape_37,p:{x:913.575}},{t:this.shape_3,p:{x:936.725,y:260.325}},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_45},{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51},{t:this.shape_52}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.man8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgaeAiiQAAgIgDgCQg+grAVh8QCqhIDxgBIAPAAQAAgIABAAQCWgLBjg3QAAgHgEgDQg0g0gghGIgPAAQg4gDgDg3QgHgBgFgDQgwgngcg8QBRhuBchkQADgEAAgHQAzgPAogaQAFgDAHAAQALjugZjLIgBgOIgOAAQjDALiegaQgHAAgGgDQgugagsgeQAAgHgDgFQgdgzgag2IAAgPQgBhugOhfIgIgBQgHhCAAhCIgBgOQgRhzgLh5IgIAAQgHhPAAhRQAAgIgBgGQgVhhgHhtIgIgBQgHg6AAg7QAAgHgCgHQgUhKAHhnQgHAAAAgBQgPhJgHhJQBChDAdBPQAAADAIAAIAABnIAAAOQAMAgAJAoQABACAHAAQgHBnAUBKQACAGAAAIQAZAhgJBGIgBAOIAAAPIAAAPQAZAhgKBGIgBAPQAYA4gIBZIgBAPQAjBaAIBzIABAPIAPAAIAOAAIABgPQAQiJAbh/QgHAAgEgDQgkglgLg9IAAgQIAAiSIAAgPIAAn0IAAgOIAAiiIAOAAIAAgPIAAgdQAWgtAPg4QAAgCAHABQAUhMAkg7QADgFAAgIQAmgdASgtQADgHAAgHQBahHBMhXQADgEAHAAQgLhUAlglQAEgDAAgIIAAgOIAAlhIAOAAIAAgPIAAgdQAfg5AngxQAEgEAAgIQBCgOAogpQAEgDAHAAIDOAAIAPAAQBaAqBEBAQADAEAAAIQBoAjApBhQACAHAAAHQgJBAgfAqQgEAEAAAIQhoBUArBeQACAFAAAIQAAAkgHAkQAAABgHAAQgIAPgLALQgDADgIABQgLA2gkAeQgEAEgIAAQAOBehkgcQgCAAAAgIQhEAUgSBFQgCAHAAAHQAHAtAPApQAAACAIAAQABBBAMA1QABAIAAAHQAZAEgDAoIAIAAIAdGqIAAAPQAaA+gLBjIAAAPQAmA4BQAQIAOABICwAAIAPAAQB7AGBUghQAGgCAHAAQBShJBShHQAEgDAIAAQA6gHAaAZQAEAEAAAHQBRAXA+ApQAEACAAAIQgPBQhMgwQgFgDgHAAQhBAIgdAwQgCADgHAAQB4AfCCgeIAOgBIAAgPQBgAABfAHIAAAIQAaATgEA2IAIAAICTAAIAOAAQApgSAdgeQAEgDAAgHQAfAJAFgXQABgBAHAAQAqg9BJghQACgBAAgIQAUgYgEgyIgBgOIABgPQAKg3gagSQgHAAgBACQhJC/hujBQAghAAThSQABgBAHAAQAKinApiLQABgDAHAAQgDg9AXgmQACgEAHAAQAChdAhhBQACgDAHAAQgDhyAnhKQABgDAHAAQgEh6AohRQABgDAIAAQgCiFArhZQADgGAAgHQBYAAA8AbQAGADAHgBQgMBrgQBjIgBAPQgpA3gKBbQgBABgHAAIgOCxIgBAOQhDCnAMEEQALDxAADzQAUAnAkAYQADADAAAHQAPAIAPAEQAHADAHAAQAjA1AyAnQADADAAAIQDcgOCjAqIAOABQAkBogqBjQgBADgIAAIAAAHQiLAHiMAAIAAAOQALKRgaJtIAAKVIAAAPIAACEIAAAPQAAAHACAHQAIAogYAEQAAAIgBAAQh4AThVgbIgHAAQgIkIAAkIIAAgPQALtCgZscIgPAAQmuAKmJgYIgOAAIgeAAIAAAOIABAOQAKD2gZDSIAAAOICUBWQAGACAHAAQBKCTAADcIAAAPQCeGRCFGmQACAHAAAHQgPA7g4AVQgCABAAAIQAMAfAhALQAGACAIAAQAEAZAWAKQADABAAAIQBKAdBKAbQAGADAIAAQAHAOALALQAEAEAHAAQCdALgRBpQAAABgIAAIAAAIQkTATjvgbQgHAAgGgCQg1gdgzAfQAAAIgCAAQhpAShGgaIgHAAQADisgZiIIgPAAIABAPQAKClgZCAQAAAIgCAAQh3AThVgbQgHAAgEgDQgEgEAAgHQgak4AYldQAJiDgzg8QgHAAgEADQhJA6g+BHQgHAAAAABQgGAXgfgJQAAAHgEAEQhzB3iRBaQgIAAgCgDQgYglg2gEQAAgHgEgDQhOg4hfglQAAAHgCABQhTAYgDBkIAOBZIABAOQAYAqASAvQACAHAAAHQBGA2BZAoQACABAAAIIAPAAQDCATC8AZQAAAIADAGQAnBlg5BMIgOAAQh5AKgLhiIAAgHQkcAKj1gSQgIAAgCgDQgcgogygQIgPABQkSApkrARQgHAAgBABQgHAzgOAlQgIgBgDAEQgZAcg0AAQgOAAgQgCgAtKOHQgLCOAaBrQAHAAAEgEQAVgXAbgRQAHAAAHgCQAwgQAagpQAHAAAFgDQBIgsA/g4QAHAAAHgCQA/gQAZg3IgOAAQjYAYi1gKIAAAQgAmwC9QABABAAAHQA3AEAxAKIAOABQBqBGCOAnQACABAAAHQAsAPArANQAHACAHAAIAAgPIAAlgIgOgBQh4gYieALQgIAAgEgEQgagZgkgQQgHAAgDAEQgXAdg3gDIAAAPIAAAHQhFAEgiAgIgOgBQhDgHgkAWQgLA3AWAWQADAEAAAHQAiAhBFgDIAPAAQAaAZAuALg");
	this.shape.setTransform(174.4651,221.2003);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man8, new cjs.Rectangle(0,0,348.9,442.4), null);


(lib.man7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgMWAiUQAAgGgBgBQh4gfhag2QgHAAgFgCIgOgGQgRgGgYgBQgSgBgUADQAAgHgCAAQhlgQgrhFIAAgOIAAhBQAagcATgkQABgCAHAAIAAgOIAAgNQCfljCblmQADgGAAgGQAcgLAPgaQADgDAGAAQgDg4AggUQAFgDAGAAQAmhjAihuQABgCAGAAIAAhCIAAgNQAlgdgKhNIAAgNQAWgEgDgjIAHAAQAKhngdhCQgBgDgGAAQg4ACgEgpIAHAAQAShKAbhFQABgCAHAAIAAhQIAAgNQAigYgHhDIgBgNQASgbAOglQAAgCAIAAQASiSAIieIAAgNIAAgNIAAhpIAAgOIAAk8QAhhwgHiYIAAgNQBMjqB3i+QADgFAAgGQAugoArgrQADgDAAgHQBHgdBlADIANAAQAagNAbgLQAGgCAHAAQAqg/A0g1QAEgDAHAAQBjgUA6iFQBWjFEBghQCKBdBcCNQACAEAGAAQAEA4AgAbQADACABAHIAABCIAAANQg5Cbh1BcQgFAEgGAAQgLAqgNAmQgCAGAAAGQggAig9AFIgNABQgmBDhFAkQgFACgGAAQg5gKgmgaQgFgDgGAAQgYA4AKBZIAAANQAsCvAQDPIAHAAQAbAzBbgKIANgBIBqAAIANAAQAHAAABgDQAXg0AjglIANgCQArgGBMAIQAAAGACABQA3AVAwAYIAOAAIBcAAQAAgGABAAQBGgPAvgfIAOgCQBBgKAOAmQAAAHgCAGQgTA0g6AOQAAAHgEAEQhVCDi8AeQgGAAgGACIh4AyIgNAAQg/gKgdAYIgHAAQADBLgXArQAAAHgBAAQhAAOgoAgIgOABQh1AMhDgnQgHAAAAABQhyIxExEMQABAGADAFQAJAQABAZQAGAAAEAEQDgDZAdGcIAHAAQgDAkAWAEIAAANQAHCfAvB2IAAANQADCbAJCVQgGAAgCACQgRAfgOAhQAAAGADACQAgAXASAjQAHAAAEACQBgAwBbA3IANAAIA0AAQAAAHAEABQA8AcAqArIAAANQgBAngZAOQgHAAgFACQjMA2i0hSIgNAAQipAMiGgnIgBgMQgVhNAIhsQAAgHgDgDQgYgXgMghIgBgOQgbj5gZj8IgHAAQADgjgXgEIAAgOIAAhPQgGAAgCgCQgUgjACg3QgGAAgCgDQh2jph9jiQgGAAgCgCQhUiOhog1QgGAAgCACQgXAuAFBGQgHAAAAACQgOBHggAuIAAANIAAA1QgHAAgBADQguBYgnBeQgGAAgCADQhhCUhqCLQAAAGgCAFQhBBwgzB/IgBANQgjC+g4CnIAAANIAAA1QgBAGgDAFQgRAcgTAaQAAAHADAFQAYAjBBgHQAAAHAEAEQASAUAsgFQAAAHADAFQAQAWAiAGQAAAHADAEQAiAsgYAlQAAAHgBABQhNAShPAAQhCAAhDgNg");
	this.shape.setTransform(125.3,220.8874);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man7, new cjs.Rectangle(0,0,250.6,441.8), null);


(lib.man6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgJDAleIioAAQAAgHgDgBQg/gmhYgKQAAgGgDgDQhHgxhsgLIAAgHQgeABACgWIgOAAQhSgCgsgoIAAgOIAAhwQAHAAAFgEQAVgTgEgvQAGAAACgDQANgZAHgcIABgOQAZiOBjiKIAAgOIAAgqQAHAAAAgBQALgzAngRIAAgOIAAgqQAGAAACgDQA2hfAjhwQAAgHgDgDQkUjPkYjLQgHAAAAgBQgKgzgLgtQAYgugJhQIgBgOQAbgdAUgmQACgDAGAAIAAgOQBuiPBpiTQADgEAGAAQCCA0BhBUQAFAEAHAAQApgIAZgYQADgDAAgHICaAAIAOAAQA5gbAThFQABgCAHAAIAAgqIAAgOQAWACgBgeIAHAAQABnngEnBQABg6AChRQAwjMAIj0IAAgOQAWACgBgeIAHAAIAAgqIAAgOQAthlBcg5QACgDAAgHIArAAIANAAQBJgnBFgqQAGgCAHAAQATg5gFhTIgBgOQh5jaCMi4QAqg3BBghQDbhICSBvQAFADAGAAQAUBAAcA7QACADAGAAQAMBBACBLIABAOQAhAlAUAwQACAGAAAHQgJAhgeAPQgDABAAAHQAMBBACBLIABAOQgVAOgGAcIgBAOQBgCpBbCxQABADAHAAIABAqIgBAOQAbAPAIAnQAAACAHAAIAACaIAAAOQgmAKAJA8IABAOQgxBUhJA7QgDADgBAHIhTAAIgPAAQgfgYgogPQgFgDgHAAQgUAXAFAvIAAAPIABANQAKBDgYAfIgBAOQgdDXgaDbIgHAAQACAdgXgBIgBAOQgFB/gyBRIAAAqIAAAOQEqGDD8GzQADADAGAAIAbC2IABAOQAZBCgLBmIAAAOQALAeADAoIAAAOQC6D3BqFHQACAGAAAHQAzAMAvAOQAHACAHAAICnAAIAPAAQAGAAAEgDQAkgkAJA1IAOgBQBbgNAHBGQAAAHgDAFQgsBJhPApIgOAAIgqAAIAAAHQgdgCABAXQgGAAgHABQhmAeiIgDIAAAHQgegCABAXQgGAAgGABQhPAahoABQAAgHgDgGQg0h5hxg+QAAgHgDgGQh5kFh/kCIAAgNIAAg4QgIAAAAgDQgyhtgNiMIgGAAQACgegXACQAAgHgBgHQhkm2lMjNQAAAHgCAGQgQAngYAgIgBANIgaCaIgIAAQADAegXgCIAAAOIAAA4QgIAAgBADQiSE+i1EZIABANQAGAygjAGQAAAHgCAHQg3D0gpEEQgIAAAAACQgTAwgrAUQAAAHADACQBBAqBkAFQAAAHADACQA4AkAZBCQAAAHgEAEQgYAYgcAVIgOAAg");
	this.shape.setTransform(150.3,239.8336);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man6, new cjs.Rectangle(0,0,300.6,479.7), null);


(lib.man5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgJfAgHQAAgGgCgBQhYgphugTQAAAGgBAAQhEAOgpgUIgLAAQhWgDgDhVQAXghAPgrQABgCAFAAIAAgLIAAgLQAVgMAHgfQAAgBAFAAIAAgLIAAgLQAph4AZiHIABgLIAAgLIAAg4QAXiKAQiVQAAgBAFAAIAAgLIAAgWQAVguALg2IACgLQA9gxAqhHQACgCAFAAQAVg5AHhLQAAgBAGAAIAAgLIAAiQIALAAIAAgLIAAhOQAZg6gDhWIAAgLQATgDgDgeIAGAAQgHg5AagYQADgCAAgGIAAgLIAAgWQAVgMAHgfQAAgBAFAAIAAgMIAAk1QA1hQAehrQABgBAFAAIAAhOIAAgLQgFAAgBgCQgNgigDgqIgBgLQgFg8gbgnQgGAAgCACQgjA8g5AlIgBALQgFAXgQALIAAALIAAALQAJBAgfAZQAAAFgDAFQhACcgsCxIgGAAQACAegSADIgBALQgHAvgDA0IgGABQgIA/gfAkIAAALIAAAsQgFAAgDADQgTAUgGAhQgGAAgEACQgkASgVAjQgFAAgFACQgjATg2ABQAAgFgCgBQg8gagQhDQgFAAgBgCQgFgVAAgWQAWgQAYgPQAEgCAFAAIAAgLQAlgkARg1QACgFAAgGQAyglAkg0QADgEAAgGIAAgLIAAh6IAAgLIAAhYQAQhIAFhTIABgMQAZgeANgtQABgCAFAAIAAgLIAAgWQAVgNAHgfQAAgBAFAAIAAgLIAAgWQAqg6AehJQAAgCAGAAIAAgLIAAgWQATgDgDgeIAGAAIAAgLIAAgXQB8lbDfj4QACgDAGAAQgGgsAPgYQACgEAAgGIAAgLQAChmgNhWIAAgLIAAgLIgGgBQgFg8AAg9IALAAIAAgLIAAgtQAQgLAFgWIABgLQAhgcAfgeQACgDAAgFQAXgGATgKQADgBAAgGIBjAAIALAAQA1AEAuAMQABABAAAGQApACAaARQAEADAGAAQAYAfAcAbQADADAAAFQgECvAECTIAAALQAAAFgBAFQgNAfgTAZQAAAGgDABQguAhgSA8IAAAFQhQgIgHA6QgEAlAMAUQADAEAAAGQATATARAWQADADAFAAQBBB2AyCHQABACAFAAIAACFIAAALQgLARgJARQgCAFAAAFQArDwCUCGQADADAFAAQAwCHBIBvQACAEAAAFQBHBEA8BOQACAEAAAFQAhAygQBcQAAABgGAAQAAAGgCAEQgtBbiCgtIgBgLQgLg0AMhRQgFAAgCgDQgYgrgjgfIAAgLIAAgsQgGAAgCgDQhdhxhuhfIgBgLQgHgfgZgNIAAALQgGCEgbBwIAAA3IAAALQBrCpBLDNQAAACAGAAIAAAsIAAALQA1BAATBlQAAACAGAAIAAAsIAAALQApBnAiBsQACAFAAAGQAUApgIBFIgBAMQA7CdA5CiQABACAFAAIAAAsIAAALQBACTBDCPQACAEAAAGQAZAeAnASQADABAAAGQCMALB+gKIALgBIAAgLIBYgVIALgBIAAgLQBbgDgnBDQgCACgFAAQAAAGgCAEQhPB9iCBMQAAAFgCABQhEAShKAJQgFAAgDADQgpAqg+AVQAAAGgCABQhbAngdhPQgFAAgBgBQgbhGghg+IAAgLIAAgsQgGAAgBgCQg7hjgthuQgGAAgBgCQgHgRgTgDQAAgFgDgEQhViChDiVQgGAAgBgCQgIgRgTgDIgBgLQgGgagPgTIAAgLQgQiFAFibQgFAAgCgDQhtitiViGIgBgLQgHgpgkgPQAAAGgCAEQhbCpgzDRQgGAAgBACQgmBGg3AyQAAAGgCAFQguCjhKCIIAAAMIAAAsQgFAAgBACQgnBngsBeIAAALQgBBXgVBFQAGAAAAABQALAgAFAhQAGAAADADQBWBFBeA9IALABQA/ADAlAdQAAAGACADQAZAegbAcQAAAFgBABQhMAShbAAQggAAghgCg");
	this.shape.setTransform(112.8728,205.6845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man5, new cjs.Rectangle(0,0,225.8,411.4), null);


(lib.man4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAQyAq+QmAgymFAlQAAgIgDgBQgzgSgiggIAAgOIAAiSQAHAAAAgCQAQhOAjg0IAAgPIAAnEIgHAAQADgngYgEIAAgPQgHjVAHjEQAHAAABgCQBAh6AdiZQgHAAgBgDQhkith9iRQgHAAgCADQiCEYiYEBQgHAAgEAEQmnFBliGGIgBAPQgIAigUAYIACAPQAcC0BICNIAOABQAzANAmAAQAHAAAGADQBEAggXA0QAAAIgDABQiLBEizggQAAgIgDgBQgagOgdgHQAAgHgEgEQhehggwiNQgIAAgDgEQgagZgWgdIgOgBQgzgOgWgrQgIAAgFgEQhcgmARiUQAWgPANgaQABgDAIAAIAAgOIAAgPIDOhyQAFgDAIAAQDVj2CnksIAMgnQACgGAAgHIAVgPIALgUQATgmAngZQBeg8B6ggQAfgyAmgpQAEgEAAgHQANj+gNkBIAAgOQh0gfgyhiQgCgCgHAAQgBjrABjnIAAgPQgshPgWhtQAAgCgHAAQgqjmAakKIABgOQCelTC3k7QACgDAIAAQAehdAnhUQAEgFAAgIQBCg8A9hBIAhgjIAwg3QADgEAIAAQA0jeABj4QgCgkACgoIgDhDQgEhMAygtQATgRAOgWQBPgmBegbQADAAAAgIQCIgFBwASQAHACAIAAQAdAdAsAMQAHACAHAAQALAoAuALQABABAAAHQAUAYgFAxIAAAOQAaA9ArAtQAEAEAAAHQAAAzgMAlQgDAHAAAHQA8A0AZBQQADAHAAAIQgTAhglAQQgDABAAAIQgjCEhIBhQgCAEgHAAQhDArhQgaQgGgCgIAAQgaAngKA9QAAACgHAAIAABJIAAAOQBjCcBEDAQAAACAHAAQgJDhgTDVIAAAPQBCBXBaBAQAEACAAAHICiBGQAGADAHAAQAoggALhEQAAgCAHAAIAAhXIAAgPQAZgEgDgoIAHAAQAWiaAriHQABgDAHAAQAIiYArh7QABgCAHAAIAAhJIAAgOQAZgFgDgnIAHAAIAAhJIAAgPQAZgEgDgnIAHAAIAAhJIAAgPQAZgEgDgnIAHAAIAAhYIAAgPQAZgEgDgoIAHAAIAAg6IAAgPQAZgaALgtQABgCAIAAIAAhXIAAgOQAYgFgDgoIAHAAIAAhXIAAgPQAZgEgDgnIAIAAQgBipBOhaQADgEAHAAQAdgdAiAoQADADAHAAQgFBigJBdIgBAOQgYAEADAoIgIAAQggDIgnDCQgCAHAAAHQgZAFAEAnIgIAAQgIBzgUBoIgBAOQgZAFADAnIgHAAQgyEXgzEUIgBAOQgZAEADAoIgIAAIAABJIAAAOQgpAhAMBUIAAAPQgYAEADAoIgIAAIAABJIAAAOQgZAEADAoIgHAAIAABmIAAAPQAXAVANAjQABACAHAAQAABfgOBQIgBAPQgeBIgiBHQgBADgIAAQhVgFALBcIABAPQgoA+gEBhIAAAPQgZAEAEAoIgHAAQABA8gVAnQgDADgHAAQgJBsgSBgQgCAIAAAHQgZAEADAnIgHAAIAAA7IAAAOQgeAegHA5IgHABQgfDvASDKQANAcAMAcQACAHAAAHIgLAuIAAACQAQBXgcBHQgGAMAAAPIABAPQAKB/gZBcIgBAOQgYC7giCyIgHAAQADAngZAFIgBAOQgiCHAVCAQAHAAADADQA1BIBhAbQAAAHADACQAWAKAEAYQAIAAAFAEQBaAoBXAsIAPgBQBigKA+AaQAHAAADACQATAiAAA0QgHAAgBACQggBDhNASIgOgBgAH6n2QAMD+g5C4IAAAdIAAAPQBYDhBGDxQADAHAAAHQARAbAcAOQAGADAHAAIAAgPIAAgOIABgPQAbiqAeilIAIAAQgDgoAYgEQAAgIACgHIAcjLIAHAAQgDgoAZgEIABgOQAKhNgagoQAAgIgDgDQgbgZgrgIQAAgHgDgFQhGh3iggdIABAOg");
	this.shape.setTransform(149.699,275.112);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man4, new cjs.Rectangle(0,0,299.4,550.2), null);


(lib.man3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgNpAnyQAAgHgBAAQhagSgKhbIgHAAQgIhdAAheQAAgIgCgEQg7hkgnh4IgIAAQgHgyAAgyQARgbAWgUQAFgEAAgHQAwgKAngQQAGgDAHAAIAAgOQBYgrAwhUQABgDAIAAIAAgPQA7g5AvhFQACgEAHAAQATg9AegzQACgDAHAAQAHgIAEgJQADgFAAgHIAAgPIAAgOQAdgWAggTQAEgDAIAAIAAgOQBehPB3g4QADgCAAgHQgPilgxiIQgBgDgHAAIAAg6IAAgOQgHAAAAgBQgwjeAMkVIAAgFIgBAAQgGAAgBgDQgZhJgKhTIAAgPQAKg9gZgZIgHgBQgHg4AAg6QASg9ARhDQABgCAHAAIAAgOIAAgsQAYADgCggIAHAAIAAgOIAAgrQAggTAEg1IAHgBQAAgHADgGQBKi/AYjzQAAgHgDgGQgggqhQApQAAAHgDAAQhKAYg1ApIAAAOQAJCohDBcIgCAOQhLC4hSCxIAAAdIAAAPQAAAHgCAGQgZA2gQA/QAAAHgCAGQgGAdgVAPQAAAHgCAGQg8DdjGBTIgOAAIAAAPQAAAHgDABQhCAlg9gfQAAgHgDgCQgagMgdgIQgHAAgDgDQgngygJhNQAEhLBSAKIABAIQBGAeAkhHQACgDAHAAQAehrBKg+QAFgDAHAAQAshWANh0IAAgPIAAgOIAAhlIAPAAIAAgPIAAhlQAkhIgGhzIgBgPQDGn9F0lRQDnjQDujLQBdlTDOjjQAEgEAAgHQAdgHAagOQADgBAAgHID1AAIAPAAQApAYAuARQAHACAHAAQAEAZAWAKQADABAAAIQAcAAARALQAFADAHAAQAWAdAZAZQAEAEAHAAQAMAgACAoIABAPQAvAhAWA3QADAGAAAHQgTBngXBkIgBANQAzArgiA8QgDAFAAAIQAZAngRBLQgBABgHAAQAAAHgDAGQgtBihgAwQgIAAgGgCQhvgoh5geQgHAAgCADQgoA4hDAbIABAPIAOCQQAHAAACADQA/CUAODEQgHAAAAACQgjBrgsBdIAAAPIAAA6IgHAAQADAmgZAEIAAAPQgEBagZBFQAHAAAEADQA9A3BXAdQAAAHAEACQCCBfCbBFIAOAAICRAAQAHAAACgEQAXgkA2gDQAIAAAFADQBsBABSBcIAAAOIAABXQgHAAgCADQgNAagHAcQgHAAgDAEQhWBfhqBKQAAAHgEAFQgkA5gSBLQgHAAgCADQgKAVgZAFQAAAHgCAHQgWA3gTA9QgHAAgDAEQgnAxg0AiQAAAHgDABQgkAQgEgYQgIAAAAgBQgQhtAmh5QAAgHAEgEQASgSAVgPQAAgHADgGQBBiHAThvQAAgHgDgBQkEiUlJgDQgHAAAAACQgZB2goBgQC/HoA2JwIAAAPQgjAzgPBNQAAACgIAAQgKCUgECbIAAAOQgqBfgkBpQgCADgHAAQgTCEAFCcIAAAPQA4AtBKAZQAHACAHAAQANAfAcASQADABAAAIQA7AbBFAXQACAAAAAHQBrgNAwAuQAEAEAAAHQAZA+hUAXQgGABgIAAIAAAIQiNAShogaQhegHhCAPQkLA5hrhsQgIAAAAgBQgHhAAAhBIAPAAIABgOQARhpAnhTIAAgPIAAqJQAIAAACgEQCGi6hki6IgCAPQgdCGgNCaQgHAAAAADQgOApgHArQgIAAgFAEQi7B/iSCtQgHAAgFADQgSAKgcABQAAAHgDACQgcASgMAfQgIAAgGACQhJAbgrA5QgIAAgGADQhJAphIArQAAAHgEAFQgaAmABBBQAAAHADAGQAWAiASAoIAAAOQgTB1ATBWQAHAAAFADQAtAqBJAMQAAAIAEADQAVAXgKA1QgIAAgGACQhbAhh+AAQg3AAg9gGg");
	this.shape.setTransform(136.475,255.2446);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man3, new cjs.Rectangle(0,0,273,510.5), null);


(lib.man1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC4cBQAAgIgDgGQgFgKgIgIQgIAAAAgBQgIg3AAg4QAYAAAWAHQACABAAAIQA0gMgShUIgCgQQA8hkArh5QABgDAIAAQgen0gxncIgBAAIAAgEQgLhugNhuIAIAAQAAgIADgGQBLiBheggQAAAIgCABQg+AXhAAPIgQAAQAAAIgBAAQhZAVhlADIgQAAQAAAIgBAAQiVAKiKAOQAAAIgDAGQgVAigYAgQAAAIACAHQAJAkgbgDQADB+AMByIABAQIAAAQIAAAQQAcBcgUCDQAAABgIAAIAAAQQAAAIACAHQAJAkgbgDIAADwIAAAQIAAAQIAAAQIABAQQALBMgcAkIAAAQIAAAQQgBBXgfA5IAAAwIAAAQQAYAQAUAUQAEAEAAAIQAgAIAdAPQADABAAAIICQAAIAQAAIB9BHQADABAAAIQAAAIACAHQANA4gvgHIAAAQQAAAIgEAFQgWAZg2gGQAAAIgDADQhCAng7giQhYAAhWANQjvAjiThQQAAgIgEgDQgtgjARhiQAAgIACgHQA9jig/jvIgIAAQgFjIgzhoQgIAAgCADQgTAggjANIAAAQQAAAIgEADQgnAig1ATQgIAAgFADQhQAwhTAtIAAAQQAAAIgDACQhJAig0A0QAbAuAEBCIABAQQA1ArAnA4QAEAFAAAIQA2ALAsASQAGADAIAAQBPArAJBlIgIAAQAAAIgDADQguAcg/AJIgQAAIggAAIgQAAIiAAAQAAgIgBAAQhQgHgfgxQgIAAgFgEQgkgagPgyQgIAAgDgEQghgngUg1QAAgIgEgFQgqg0hCgfQgIAAgHgCQhJgegohAIAAgQIAAhgQATgdAZgXQAEgEAAgIQA2gKAsgTQAGgDAIAAQAWgqAsgTQAGgDAIAAQArgVASgsQADgHAAgIIAAgQIAAgQQArgVAbgnQACgEAIAAQBpiPCThmQAEgDAAgIIAAgQQA0gsBKgbQACgBAAgIQgLhFgSg8QgDgHAAgIQAAgIACgHQAJgigbABQgIAAgBgCQgrhqgMiDIAAgQIAAiAQEyo2JbkQQADgCAAgIIAAgQQAwgQAxgNQAHgDAIAAQEUicFJhrQACgBAAgIIAAgQQA/gJAygUQAHgDAIAAQBbglBjgiQACgBAAgIIAAgQQA4gQA5gOQAHgCAIAAIAAgQQAvgJAjgUQAGgDAIAAIAAgQQAggYAjgVQAFgDAIAAIAAgQQAYgQAUgUQAEgEAAgIQAwgQAxgNQAHgDAIAAQAQAAANgGQADgCAAgIIAAgQQB/g7CQAiQABABAAAIQgBAbAigJQAHgCAIAAQBrAVBBA/QAEAEAAAIQAIAQAMAMQAEAEAIAAQBWAzAxBaQABADAIAAQAPBngrAtQgEAEAAAIQAHApAVAaQAEAFAAAIQAAAIAEAEQAEAEAIAAQA5BPAWBxIABAQQAfA/gcBSQgDAHAAAIQAIAAAAABQAGBEhOgFQAAAIgEAEQhbBViRgxIgQAAIgQgBQg1gKgbglQAAgIgEgFQghgmg7gNIgQAAIgwAAQATAugDBCIAAAQIAAAQQAcCUgUC7QAAABgIAAIAAAQIABAQQALBMgcAkQAEB0ALBsIABAQQAbA1ANBJQAAABAIAAQgBBRAQBAQABAHAAAIQBmLRguLOQAAABgIAAQAAAIgEADQhUA1iYgQQAAgIgBAAQhIgGgXgyQgIAAgBgCQgIgdgPgRQAogwA6gdQAGgDAIAAQgPk0gQkMIgBgQQAAgIgCgHQgOghgQggQgIAAgCgDQgbgugLg/QAAgIgCgHQgziDgriOIgIAAQAajphygHQgIAAgBADQgjBZg0BEIAAAwIAAAQIABAQQALBkgcA8IgIAAQADA7gbAVIAABQIAAAQIgBAQQgEBLgbA1IgQAAIAAAwIAAAQIAAAQIAABgQgIAAAAABQgKBFgeAqIgBAQQgWCZg5B3QgIAAgDAEQgwA6glBCIABAQQAGBngXBJQgIAAgEAEQgpAng7AVIgQABQgVACgTAAQhuAAgahTg");
	this.shape.setTransform(194.3951,187.6479);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man1, new cjs.Rectangle(0,0,388.8,375.3), null);


(lib.leaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,0,0.973)").s().p("AgPBlQgFgBgCgJIgBgFIgCgBQgOgNgCgZIAAgUIABgVQAAgVACgGQADgHAIgJIAyg6QAEgFADAAQAHgBADAJQAFANgGAPIAAABQACADAAAHIABAjQABAdgFAOQgCAIgLAQIgOAaQgJAOgIAJQgFADgDAAIgBAAgAAAgMIAAAAIAAAAg");
	this.shape.setTransform(4.2458,10.1328);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,0,0.973)").s().p("AguBbQgDgCgBgJIABgFIgCgCQgKgQAFgYIAFgUIAGgTQAGgVAEgFQAEgHAKgFIA/grQAFgEAEAAQAHABAAAKQABAOgKANQABADgBAHIgIAiQgHAdgIAMQgEAHgPANIgUAVQgMAMgLAFIgGACIgEgBgAgCgOIABAAIAAAAg");
	this.shape_1.setTransform(4.7097,10.3872);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,153,0,0.973)").s().p("AgQBlQgEgBgDgJIAAgFIgDgCQgNgMgCgZIAAgVIABgUQAAgVACgGQADgHAIgIIAyg6QAEgGADAAQAHgBADAJQAFAOgHAPQACADAAAHIACAjQABAdgFAOQgCAHgLARIgOAaQgJAOgJAJQgEADgDAAIgCAAgAgBgMIABAAIAAAAg");
	this.shape_2.setTransform(4.2775,10.3327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},11).to({state:[{t:this.shape_2}]},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0,11.7,20.5);


(lib.cloud3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ak9hjQANgnB7gdQCLggDDAAQDFAACKAgQCLAgAAAuQAAAuiLAgQgdAHgfAFQCHACBjAaQBsAeAAApQAAAqhsAdQhsAdiaAAQiZAAhtgdQgzgOgbgQQgCAAgDABQiNAqjIAAQjIAAiOgqQiNgpAAg7QAAg6CNgqQCDgmC0gDQAPAAAQAAQDIAACNApQBzAiAWAtQAEAKAAALQAAA6iIApAGsABQhpARiDAD");
	this.shape.setTransform(77,20.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACKCrQgzgOgbgQQCIgpAAg6QAAgLgFgKQCEgDBpgRQhpARiEADQAFAKAAALQAAA6iIApIgGABQiMAqjIAAQjIAAiOgqQiNgpAAg7QAAg6CNgqQCDgmC0gDIAfAAQDIAACMApQB0AiAVAtQgVgth0giQiMgpjIAAIgfAAQAOgnB7gdQCLggDCAAQDFAACKAgQCLAgAAAuQAAAuiLAgQgdAHgfAFQCHACBjAaQBsAeAAApQAAAqhsAdQhtAdiZAAQiZAAhtgdg");
	this.shape_1.setTransform(77,20.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud3, new cjs.Rectangle(-2.5,-2.5,159,45.1), null);


(lib.cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ATbgMQDTAMCmAlQD/A5AABRQAABRj/A5Qj+A5lpAAQlgAAj8g2QhWAri4AjQlXBCnnAAQnnAAlYhCQlYhCAAhdQAAhdFYhCQDpgsEqgPQhigQhXgYQkEhLAAhqQAAhqEEhLQEFhKFyAAQFwAAEEBKQC/A3AzBHQGMAAEZA5QEZA5AABRQAAAcggAYgADUBdQA/geBygaQD/g4FpAAQB+AABwAHAE9kDQATAbAAAcQAABqkFBLQh9AjiXATQC0AQCYAdQArAJAmAIQEHA9AABRQAAArhKAmAvnARQCOgHCeAAQEPAADjAV");
	this.shape.setTransform(187.5,46.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A36GKQlYhCAAhdQAAhdFYhCQDpgsEqgPQhigQhXgYQkEhLAAhqQAAhqEEhLQEGhKFwAAQFyAAEDBKQC/A3AzBHQATAbAAAcQAABqkFBLQh9AjiXATQCXgTB9gjQEFhLAAhqQAAgcgTgbQGMAAEYA5QEaA5AABRQAAAcggAYQhxgHh9AAQlpAAj/A4QhyAag/AeQA/geBygaQD/g4FpAAQB9AABxAHQDTAMCmAlQD/A5AABRQAABRj/A5Qj/A5loAAQlgAAj8g2QBKgmAAgrQAAhRkHg9IhSgRQiXgdi0gQQC0AQCXAdIBSARQEHA9AABRQAAArhKAmQhWAri5AjQlWBCnnAAQnmAAlZhCgAjJAfQjjgVkPAAQidAAiPAHQCPgHCdAAQEPAADjAVg");
	this.shape_1.setTransform(187.5,46.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud2, new cjs.Rectangle(-2.5,-2.5,380,97.1), null);


(lib.cactus3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7B86F").s().p("AgbgKQAAgFgBAAQgcgGgLgTQA0ANBDgDIAKAAIABAKQANA9gZAAQgXAAg3gzg");
	this.shape.setTransform(26.9144,408.0556);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2B36E").s().p("AE2BfQj2gojpAVQAAgFgBAAQgpgJgcgQQgFAAgBgCQgdg+gtgtQBLg0AXAhQACAEAAAFIgKAAIgKAAQABBhCBgaIAKgBQAPAOAXAJQACABAAAFQBfANBygDIAKAAQAjAdA2APQABABAAAFIAyAAIAKAAIAKAAIAAAKIgKgBg");
	this.shape_1.setTransform(37.15,415.4187);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C3516").s().p("Ag6gEQgBgBAAgFQBBALAsgBIAKAAQgQALgaAAQgfAAgtgPg");
	this.shape_2.setTransform(43.15,415.061);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#774C26").s().p("AheASQAWgSAZgPQADgBAAgFQBmgOAlgBIAAAPQgFAFABAEQAGAlgOAEQgkAIgjAAQg0AAg2gTgAg/ANQBTAdAjgYIgKAAQgsABhBgLQAAAFABAAg");
	this.shape_3.setTransform(43.65,413.24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0AA77").s().p("AgQAAQgBAAAAgFQAnALgFAAQgEAAgdgGg");
	this.shape_4.setTransform(74.9126,414.5959);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0AC81").s().p("AAIAGQgDgEAAgEQgjAAgWgOQgCgBAAgFQBBgYAlAyQACADAFAAQgGAYgMAAQgMAAgRgZg");
	this.shape_5.setTransform(65.65,415.3001);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A5027").s().p("AASAoIgKAAIgBgFQhQgFAMhFQAoAPAaAaQADADAAAFQBlAahRAEIgKAAg");
	this.shape_6.setTransform(67.3933,420);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0B785").s().p("AgEA2IAAgPQglABhnAOIgFAAQADg0gwgRIAAgKIBFgPQABAAAAgFQAYgKAkAAIAKAAQB0gOB7AXIAKABQAAAFgCABQgvAbgLghQgFAAgEACQgtAOgkAYIgFABQgJBBgVAAQgHAAgHgHg");
	this.shape_7.setTransform(53.65,405.5837);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2D9B3").s().p("ABkAOQh6gWh1ANQCEgmCKAlQAEABAFAAQAAAFgCABQgNAEgPAAIgKgBg");
	this.shape_8.setTransform(62.15,399.4934);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#83532C").s().p("AhPATQBFgyBQAKIAKABQgaA/guggQgDgCgFAAQgRgBg+AQg");
	this.shape_9.setTransform(75.15,407.1424);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEB285").s().p("AgiBaQgngFAngFIgBgKQgKg6gdAcIgKAAQg6gIgMg9QBMANgmgeQgDgDgFAAQgOgrAiADIAKAAQAvARAMA1IABAKIBZAAIAKAAQAFAAAEACQAeAHAzAAQAAAFgBABQgkAMAlAWQAAAFgBABQhRAghhAMIgKAAg");
	this.shape_10.setTransform(99.65,411.9653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#784D29").s().p("AhIA6QgFAAgFACQhUAig4gkQBWADAbgoQACgDAFAAQAdAkA9AEIAKAAQAygdBPgBIAKAAQAlgMALglQACgFAAgFQgTgvgzAHIgKAAQAHgbArAGIAKABQAUAZAWAXQADACAFAAQAAAFACAEQAPAhglAbIAAgFQgtAPgZAoQgFAAgFACQgnAOglAAQg6AAg3gkg");
	this.shape_11.setTransform(98.4767,417.1915);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5BD74").s().p("Ah8A3QAzgeBiAEQA+ADgWgbQgjgwBVgUIAKgBQAAAFgDACQgUASgHBKQAAAFgBAAQhLAQhTgLQAAAFgCAAQgcAKgeAFIAAgKg");
	this.shape_12.setTransform(127.65,420.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#845229").s().p("AgjACQgCgCAAgFQBXgxgNBNQAAABgFAAIgPABQglAAgPgXg");
	this.shape_13.setTransform(135.9837,410.6063);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#825028").s().p("AHyAmQAUgKASgNQACgCAAgFIAKAAIAKAAQAFAAABACQASBAgYAAQgSAAgqgkgAoJgKIgKgBQgYgPgOgaQgCgEAAgFQA6gbAjAjQACACAFAAQAVAqgxAAIgWgBg");
	this.shape_14.setTransform(71.3019,415.166);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6BE98").s().p("AglABQBKgwAAA1IgEAAQgFAAgFAFIgKAAIgKAAQgFAAgCADQgMAIgHAAQgMAAgCgVg");
	this.shape_15.setTransform(124.9,414.8878);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3A981").s().p("AgBAWQgXgWgUgYQBOAKAFASQABABAFAAIAAAFQgbADgNAMQgFAAgBgDg");
	this.shape_16.setTransform(119.65,410.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9B281").s().p("AgXgEQAQgOAgAIQABABAAAFIgKAAIgTAAIAAAJQAAAFgCABQgHADgFAAQgLAAAFgSg");
	this.shape_17.setTransform(123.5819,406.5251);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6B671").s().p("AgsgNQA2gWAZAWIgDAFQgIALAVgGQAAAEgCACQgbAWgTAAQgaAAgPgmg");
	this.shape_18.setTransform(130.65,407.3684);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F4C20").s().p("AgUAPQgBAAgBgFQAggtAMAaIgEAAQAFAdgXAAQgHAAgNgFg");
	this.shape_19.setTransform(151.4,410.0382);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DCB07D").s().p("Ag7ANQAAgFADgBQAJgHgMgaQA5gCA0ALIAKABQAAAFgBAFQgPAhgoAAQgaAAglgOg");
	this.shape_20.setTransform(145.15,405.697);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EECC9C").s().p("AhAA2QgGgThOgKIAAgFQhJANANhDQAggMAwABIAKABQCPAfB0goQAFgBAFAAQAlAVAWAEQABAAAAAFIAAAKIgKgBQg1gLg5ACQAMAagKAHQgCABAAAFIgKAAIgeAAQgVAHAIgNIADgEQgagVg1AVQAAgFgBAAQghgIgQANQgHAbAZgLQACgBAAgFQAoAKgXAcQgCACgFAAQgFAAgBgBg");
	this.shape_21.setTransform(130.0517,405.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2D19A").s().p("AqhB7QAAgFgCgBQgbgPgpABQAAgFgCgBQhPghhPgfQAAgEgCgCIAAh0QC2hCDcATIAKAAQAAAFgBAAIhFAPIAAAKQAAAFgDADQgCACgFAAIgKAAQhEADg0gNQALATAcAGQABAAAAAFIgKAAQgzgFgdAPQAAgFgDgDQgXgihKA0QAtAtAdA+QABACAFAAQAcARApAIQABAAAAAFQDqgUD2AnIAKABQBoATBqgSIAJgBQADARAbgCIAAAFQBnAUBhgTIAKgBQAegFAcgJQACgBAAgFQBUALBLgQQABAAAAgFQAHhLAUgSQADgBAAgFIBkAAIAKAAIAyAAIAKAAQBDAqA/gDIAKAAQAdgPgEgrIgFgBQh2gyg+gJIgKgBQAAgFgCAAQgSgFgKgKIAAgKIAKABQCVAPCNBKQAAAFgCABQhMAlAcAuQAAAFgDADQgYAaghAQIgKABQlwAbmYAAQlIAAljgSg");
	this.shape_22.setTransform(90.575,414.654);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8BA70").s().p("Ag0AUIgKAAIgyAAIAAgKQBtgJhMg2QgDgBAAgFIAKAAQA+AKB1AxIAFAAQAFAsgeAQIgKAAIgHAAQg7AAg/gog");
	this.shape_23.setTransform(162.4298,412.0069);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C5CCAA").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_24.setTransform(164.775,207);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DBE1BB").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_25.setTransform(109.775,373);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C1CA94").s().p("AgEBQIAAgKIAAiVIAJAAIAACVIAAAKIgJAAg");
	this.shape_26.setTransform(109.65,361);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A38E4E").s().p("ABYINIAAgFQgbACgDgRIgKABQhpAShogTIAAgKIAKAAQBSgEhmgaQAAgFgCgDQgbgbgpgPQgLBGBRAFIAAAFIgKAAIgyAAQAAgFgBgBQg1gPgkgdIgKAAQhxADhhgNQAAgFgBgBQgYgJgPgPIgKABQiAAbgChiIAKAAIAKAAQAegQAyAFIAKABQB0BrgZh1IgBgKQAFAAADgDQACgCAAgFQAwASgDA0IAFAAQAAAFgCABQgZAQgXASQBaAhBYgWQAOgEgGgmQgBgEAFgFQAhAcAMhYIAFAAQAkgYAtgPQAEgBAFAAQAMAgAugaQACgBAAgFQAPAAAOgFQABAAAAgFIAAgKIAAgKQARANAhgDIAKAAQAdAaAxAJQABAAAAAFIgKgBQghgDANAsQAFAAADACQAmAfhLgNQALA9A6AIIAKABQAdgcAKA6IABAKQgmAFAmAEIAKABQBigNBRggQABAAAAgFQglgWAkgNQABAAAAgFQgzgBgdgIQgFgBgFAAIAAgKQAhg6gMhmIgBgKIAAgKQAHisgbiJIgFAAQgFAoAAAoQgFAAAAABQgPBNgKBRIgFgBIgZk0IAAAKQgIBggCBnQgFAAAAABQgPAmAAAzIgFgBIgZmEQAOh0ALh8IAFAAQAsBWgNCQIgBAKQALhuAOhuIAFAAQAnA9AjhPQABgCAFAAIAAE2IAAAKIgKAAIAACWIAAAKIAABFIAAAKIAADwIAAAKQgNBEBJgNIAAAFIgKgBQgqgHgIAcIAKgBQA0gHASAwQAAAFgBAEQgLAmgmANIgKAAQhPABgzAdIgKgBQg9gDgdgkQgFAAgBACQgbAohWgCQA5AjBTgiQAEgBAFAAQBaA7BlgmQAEgBAFAAQAZgoAtgPIAAAFQAmgcgQghQgCgEAAgFQANgMAbgDIAAgFQAFAAACgDQAYgbgpgKIAAgKIAUAAIAKAAQAaBDA+gyQACgCAAgFIAeAAIAKAAQBgAkAXg5QABgEAAgFQALAJASAFQABABAAAFQAAAFADABQBMA3htAJIAAAKIgKAAIhkAAIgKABQhVATAjAyQAWAbg+gDQhjgEgzAeIAAAKIgKABQgvAJgxAAQgzAAg1gKgAGMGmQgSANgUAKQBhBSgfhvQgBgBgFAAQAFgFAFAAIAFAAQgBg2hKAxQADAiAdgWQADgCAFAAQAAAFgCACgAj7GBQAAAFACABQAXAOAjAAQAAAFADADQAjAyAMgwQgFAAgBgDQgagjgnAAQgSAAgVAIgAh4GQQBFAQhGgVQAAAFABAAgArHFZQAAAFACAEQAOAZAYAQIAKAAQBKAKgYgyQgFAAgCgDQgUgTgbAAQgVAAgZAMgAHUFjQAAAFADADQASAbAxgFQAFAAAAgBQAIgwgeAAQgTAAgiATgAJ+FtQAAAFACAAQAtARgHgqIAFAAQgEgKgIAAQgMAAgVAegAi1FZIAAAFQA+gQASABQAFAAAEACQAtAgAahAIgKgBQgNgBgNAAQhCAAg6Aqg");
	this.shape_27.setTransform(85.3403,374.5128);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CDD1BB").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_28.setTransform(75.65,383);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AFB695").s().p("AgEBaIAAgKIAAipIAJAAIAACpIAAAKIgJAAg");
	this.shape_29.setTransform(75.65,370);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#878E6B").s().p("AgFBQIAAgKIAAiVQAQA+gHBXIAAAKIgJAAg");
	this.shape_30.setTransform(75.775,353);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9AB044").s().p("AgGgNQgBgFAAgFIAPAvIgOglg");
	this.shape_31.setTransform(44.9942,271.3504);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9BB147").s().p("AgKgVQgCgEAAgFIAZA9IgXg0g");
	this.shape_32.setTransform(42.4505,264.067);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A1B74A").s().p("AgOgxIAAgKQAeAngBBGIAAAKQgUgxgJg8g");
	this.shape_33.setTransform(39.6534,255);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363E18").s().p("AgJgcIAJAAIAKAAIAAAKIgBAKQgDAlgEAAQgEAAgHg5g");
	this.shape_34.setTransform(74.15,247.9384);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A0B64D").s().p("AgYiBIAAgKQAeCBATCMIAAAKQgqh1gHiYg");
	this.shape_35.setTransform(47.65,231);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A1B456").s().p("AgEBsIAAgKIgekDQAKAPAKAKIAAgFQARCXAfCKIABAKQgQgBgDAFg");
	this.shape_36.setTransform(49.65,222.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#96AB42").s().p("AgHAXIAAgoIAAgKQAeAmgeAQg");
	this.shape_37.setTransform(42.9125,211.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9FB355").s().p("AgFgiIABgKQAQAcgHAzIAAAKQgQgbAGg0g");
	this.shape_38.setTransform(43.6601,201.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5F6A2A").s().p("AgEiVIAAgKQARCPgICmIAAAKQgRiOAIing");
	this.shape_39.setTransform(79.65,237);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#353E13").s().p("AgEglIAJAAIAAAUIAAAKIgBAJQgDAkgBAAQgEAAAAhLg");
	this.shape_40.setTransform(74.65,220.7685);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5E6931").s().p("AgFgdIABgKQARAXgIAuIAAAKQgQgWAGgvg");
	this.shape_41.setTransform(64.65,205);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#606D29").s().p("AgEgnIAAgKQARAggIA5IAAAKQgRggAIg5g");
	this.shape_42.setTransform(79.65,202);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#606E22").s().p("AgEjbIAAgKQARDUgIDtIAAAKQgQjVAHjsg");
	this.shape_43.setTransform(77.65,226);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5A662A").s().p("AhsCAQgGgDgFgFQARgSAHgfQABgBAFAAQgHglAPgQQACgCAAgFQAQgNAYgFIAKgBQBBgyAvhEQACgCAFAAQgtBkhRA+QgDACAAAFQBSg3BFgNQADgBAFAKQAAAFgDADQhNBliLAoQgFAAgEgCg");
	this.shape_44.setTransform(133.15,285);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#536125").s().p("AhFA/IAAgUQBUgoAwhNQACgCAFgBQgxCChaAZg");
	this.shape_45.setTransform(133.15,272.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5B6729").s().p("AgxBuIAAhGQAUgtAAg2IAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFIAAgKQAFAAACgDQADgCAAgFQAFAAABADQAlA0g1AtQAAAFADADQAJANARgfIAAgFQAFAigiAyQAFAAABgCQAlg6AagTQAAAFgCAEQgZBdhIAvIAAgKg");
	this.shape_46.setTransform(132.15,263);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D2D8BF").s().p("AgEAjQgFgjAAgiIAJAAQAAAUAEASQABABAFAAQAAAFgDACQgCADgFAAIAAAKIAAAKIgEAAg");
	this.shape_47.setTransform(129.15,252.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5E6C1D").s().p("AgIAAQAigughBBg");
	this.shape_48.setTransform(134.0188,250.0019);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5D6E1F").s().p("AgKAGQAyg8gzBJIgCADQgBAAAEgQg");
	this.shape_49.setTransform(138.2498,256.3799);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5B6B22").s().p("AgYA1QAfgrAQg5QACgFAAgEQAGBag3AYg");
	this.shape_50.setTransform(144.679,264.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#353D12").s().p("AgJAUIABgKQAQgkgCg/IAFAAQAFBIgPBhIAAAKQgRgWAHgwg");
	this.shape_51.setTransform(99.0988,273);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B4CC55").s().p("AgFAUIABgKIAAgKIAAhPQARA+gHBXIgBAKQgQgSAGgqg");
	this.shape_52.setTransform(113.637,225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#607027").s().p("AgFhtIABgKQAQBmgGB/IgBAKQgQhmAGh/g");
	this.shape_53.setTransform(92.65,221);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B9CF62").s().p("AgEAtIAAgKIAAgKIAAiLQARBhgIB6IAAAKQgRgWAIgwg");
	this.shape_54.setTransform(114.65,197.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5B6B23").s().p("AgGgCIABgKQAOhSAAAqQAAA7gFA8QgRgWAHgvg");
	this.shape_55.setTransform(154.775,224.2887);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5C6C22").s().p("AgGAFQAShKgHBAQgEApgCAAQgDAAgCgfg");
	this.shape_56.setTransform(151.8578,242.5494);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B0B889").s().p("AgEBQIAAgKIAAiVIAJAAIAACVIAAAKIgJAAg");
	this.shape_57.setTransform(128.65,241);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#ACB488").s().p("AAABLQgEhLAAhKIAJAAIAACLIAAAKIgFAAg");
	this.shape_58.setTransform(128.65,220.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCD0B8").s().p("AgFAoIAAgKIAAhFQAQAWgHAvIAAAKIgJAAg");
	this.shape_59.setTransform(128.775,209);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B7CB6A").s().p("AgECHIAAipIAAgKIAAhkQAQCFgMCcIgEAAIAAgKg");
	this.shape_60.setTransform(122.6604,202.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BFC996").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_61.setTransform(139.775,202);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5D6D2B").s().p("AgEgnIAAgKQARAhgIA4IAAAKQgRghAIg4g");
	this.shape_62.setTransform(160.65,204);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5E6D25").s().p("AgEgnIAAgKQAQAhgGA4IgBAKQgRggAIg5g");
	this.shape_63.setTransform(157.65,188);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C1CCA4").s().p("AgFBVIAAizIAJAAIAAAKQAHBlgQBOIAAgKg");
	this.shape_64.setTransform(140.775,178.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B5BE98").s().p("AAhASQgTgfg1AEIAAgKQA9gGAQAkQACAEAAAFQgFAAgCgCg");
	this.shape_65.setTransform(118.15,174.952);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A9BF55").s().p("AgFAyIAAhtQAQAlgHA+IAAAKQAAAFgDACQgBADgFAAIAAgKg");
	this.shape_66.setTransform(118.775,182);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#95A945").s().p("AAPHPQBEmrgSoAIAAgKQAFAAACgCQADgDAAgFQAeHmg9GzQgLBSgIAAQgGAAgEgsgAhUHZQBCnKAOn/IAAgKIAJAAQgKHpg4HBQgIBBgHAAQgEAAgEgYg");
	this.shape_67.setTransform(111.6583,236.6573);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9EB347").s().p("AgyImQBFkTgFliIAFAAIgBAKQgGAqARASIABgKQAHhXgSg/IAAgKIAAiWIAKAAIAAAKQgHAwARAWIABgKQAHh6gShiIAAgKQgCg5AWghIAAAKQAKJNhFH0QgFAAAAABQgMA7gKAAQgHAAgGgeg");
	this.shape_68.setTransform(111.2125,233.9618);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A1B25D").s().p("AgOA8IABgKQAKg1gLgaIAAgKQAKgKALgIQADgCAFAAIAAAKQAAA/gTAuIgKAAg");
	this.shape_69.setTransform(112.65,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#63722C").s().p("AgdLkQgnANgLgwQgFAAgCgCQgjgsgSA4IAAAFQgXiJADhsQASi7gIjVIAAgKQAVBVgBBpIAAAKIAUhfIAAAFQgHAwARARIAAgFQAcmCgImdIAAgKQAVBoAEB+IAFAAQARghgHhrQgGhgAQgOIAAAKQARgRAUgZQACgDAAgFQAAgjAUAAIAAgFIAAgKIAAgKQARACgCgWIAFAAQALAagKA2IgBAKIAAAKQgNIAhCHJQAKA/ANhoQA3nBALnpQAUgtAAhBIAAgKQA2gEAUAgQABACAFAAQAAAFgCAEQgDAGgFAFQAABkAFBkIAFAAIAACqIAAAKIAAAKQADGIg1FRIgFAAQACAbgRADQAAAFACAFQAGAWACAcQgFAAAAACQgYA4AdgSIAAgFQAMAlgqAmIAAAKIAAAKQgFAAAAABQgDAQgWgHIAAAKQgFAAAAABQgOA8gyATgAAAGVQAOBHAVhkQAAgBAFAAQBGnzgKpOIAAgKQgWAhACA5IAAAKIAACMIAAAKIgKAAIAACWIAAAKIAABQIAAAKIgFAAQAFFihGETgAB4pmIAAAKIAAAKQASIBhEGqQAKBnAUiNQA9mzgfnmIABgKQAHg+gSgmIAABugAhPD/IAAAKQgHAwARAWIABgKQAPhigGhIIgFAAQADA/gSAlg");
	this.shape_70.setTransform(106.1384,248.4778);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B0BE83").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_71.setTransform(107.65,165);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D0D9BB").s().p("AgFBkIAAgKIAAi9QAQBTgHBqIAAAKIgJAAg");
	this.shape_72.setTransform(107.775,151);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5E6D29").s().p("AgEk1IAAgKQAQEvgHFGIAAAKQgQkuAHlHg");
	this.shape_73.setTransform(91.65,169);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5D6E21").s().p("AgEhPIAAgKQAQBIgGBhIgBAKQgRhIAIhhg");
	this.shape_74.setTransform(157.65,144);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5B6B2A").s().p("AgJgwIABgKQAehRgPB6QgGA1AAA3QgRg5AHhSg");
	this.shape_75.setTransform(161.0919,129.872);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B0C55E").s().p("AgFgiIABgKQAQAcgHAzIAAAKQgQgbAGg0g");
	this.shape_76.setTransform(158.6601,117.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#ACC063").s().p("AgEhKIAAgKQARBDgIBcIAAAKQgRhDAIhcg");
	this.shape_77.setTransform(150.65,121.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B1C179").s().p("AgFAoIAAhZIAJAAIAAAKQAHA4gQAhIAAgKg");
	this.shape_78.setTransform(141.775,110);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BBCF6E").s().p("AgEizIAAgKQARCsgIDFIAAAKQgRitAIjEg");
	this.shape_79.setTransform(146.65,118);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B4CB57").s().p("AgOmMIgBgKQAcgzABBvQADF4gDGJQgJmggTmTg");
	this.shape_80.setTransform(154.7192,145.708);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#566329").s().p("ADBYEIhaAAIgBgKQgLg1gwgRQAAgFgBAAQgxgIgdgbIgKABQghACgRgNIAAgKIAAhkIAAgKIAAhGIAAgKIAAiqIABgKQAHhYgSg+IAAgKIAAlyQAAgFACgEQAKgdAcgWIAFAAQgagwgxggQBjAjgug5QgDgDAAgFQgdgOAlgmQACgDAAgFQgggHAHg1IgFAAQAAgFgCgEQgLgcgbgNQAAgFgCgEQg0hmgaiAQAUhCAPBVQAAABAFAAIgUmaIAAgKQATBbALBjIAAAKQAFjDgKjDIAFAAQARCuAXCmIAAAKQAHjjgajzIgBgKQAdBbALByIAKgFQgHArALAZQABACAFAAQgMBDAHA/IgFAAIgKAAQABB/AJhXIAAgKQAPBugOCCIgBAKIgKAAIgKAAQANBrAHhXIAAgKIAUEIIAAgFQAMg1gCBdIAAAKQAPglgDg3QAHBTAKA7IABAKQAhgEABhgQAKtJACtaQAKK1gDLDQgBF2gGFtQgIGNAVF1QASAWACAmIAAAKQAZkMgBk9QAKExAkETIAAgFQASg6AChIIAAgKQAaA7AJBRIAFAAQgDhKA1AOIAEgIQABgCAFAAIABAKQAMBmghA6IAAAKIgKAAgAhBBaIgBgKIABANIAAgDg");
	this.shape_81.setTransform(85.8368,257);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C2CBB0").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_82.setTransform(46.775,173);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#92A056").s().p("AgOEmQgSkFADkVIAKAAQAgAxgIhjIAFAAQARDBADDOIAAAKQgRgqAHhEIAAgJQgRAqAHBDIAAAKQgOiBgFiMQgBDcABDbIAAAKIgFgBg");
	this.shape_83.setTransform(60.1286,193.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#576525").s().p("AgKhtIAAgKQAeBegKCHIgBAKQgahiAHiDg");
	this.shape_84.setTransform(74.2358,181);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BCC0A7").s().p("AAaAJQgVgMgnAEIAAgJQAsgGAXASQACACAAAFQgFAAgEgCg");
	this.shape_85.setTransform(66.65,158.937);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#97AC45").s().p("AgFgxIABgKQARArgIBCIAAAKQgQgqAGhDg");
	this.shape_86.setTransform(28.65,191);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DEE3C2").s().p("AAAC+QgEi+AAi9IAJAAIAAFxIAAAKg");
	this.shape_87.setTransform(22.65,174);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#95AA41").s().p("AgFgdIABgKQARAWgIAvIAAAKQgQgXAGgug");
	this.shape_88.setTransform(28.65,173);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9CB246").s().p("AgJA3IAAgKQARhrgHiEIgBgKQAXDGgWDJIgBAKQgQg+AHhYg");
	this.shape_89.setTransform(28.1063,148.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A9C04F").s().p("AgfpSIAAgKQAhD2gDEmQgEEWAXEFQARADgCAbIAFAAQgGAgAFA6IABAKQhgobAbqUg");
	this.shape_90.setTransform(34.3645,188.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A2B84C").s().p("AgKjlIAAgKQAeDWgLD/IAAAKQgPjlgEjwg");
	this.shape_91.setTransform(36.294,153);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7BD9E").s().p("AAaAJQgWgMgmAEIAAgJQAsgGAWASQADACAAAFQgFAAgEgCg");
	this.shape_92.setTransform(34.65,122.937);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B4C288").s().p("AgOAJIAAgJIAAgKQAKgFAKgDQAEgCAFAAIgBAKQgGAfgJAAQgGAAgHgMg");
	this.shape_93.setTransform(29.65,125.086);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5A6928").s().p("AgElTIAAgKQARFMgIFlIAAAKQgRlNAIlkg");
	this.shape_94.setTransform(79.65,158);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B2B892").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_95.setTransform(74.775,149);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5F6F24").s().p("AgEhFIAAgKQARA/gHBWIgBAKQgRg/AIhWg");
	this.shape_96.setTransform(77.65,137);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#889C41").s().p("AgEgdIAAgKQAQAWgGAvIgBAKQgRgXAIgug");
	this.shape_97.setTransform(40.65,141);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9CAF4F").s().p("AAYFcQgah9ACiZQACiXgaiAIAAgKQgBhFgJg9QARASAHAfQABABAFAAQASCXABCoIAAAKQAAAoAFAnIAFABQgGB+APBoIABAKQgKAAgBgCg");
	this.shape_98.setTransform(44.65,166);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A1B750").s().p("AAAFoQgIlogVldQARBQAMhaIAAgKQAbAbADA1IAAAKQgFAAgBgBQgHgfgRgSQAJA9ABBFIAAAKIABAKQAZEdgkEIIAAgKgAgJkDQgIAvARAXIABgKQAGgwgQgWIAAAKg");
	this.shape_99.setTransform(41.15,164);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#758636").s().p("ADlOZIhaAAQAAgFgCgBIhYgiQgtgzgngzQkPlgAaqFIAAgKIAAlyIAAgKIAAhaQARgmgHg+IAAgKQAYgfALgwQAAgBAFAAQATAfAKgzIABgKQAngFAWANQAEACAFAAQARAIAHAUQABACAFAAIgBAKQgMBZgRhPQAVFdAJFpIAAAKQAjkIgZkeIAAgKQAbB/gCCZQgDCYAbB+QABACAKAAIAAA8IAAAKIAAAFQgKgKgKgPIAdEDIABAKIAUA2QADgFAQABQAHAgACAmIABAKQA8D1CWBaIAAgPIAFAAQgIA0AhAIQAAAFgDACQglAmAeAPQAAAFACADQAvA5hjgjQAwAfAbAxIgFAAQgdAWgKAcQgBAFAAAFIgKAAgAhFImQAgBQghhZQAAAFABAEgAjItaQgbKVBhIaIAAAKQAJA9AVAxQAAAFACAEQAxBtgzh2IAAgKQABhIgfgmIgBgKQgFg6AGggIgFAAQACgbgRgDQgYkFAEkWQAEkmgij2IAAAKgAg8AfQAHCYArB2IgBgKQgSiNgfiBIAAAKgAhagwIAAAoIAAAFQAegRgegmIAAAKgAhRioQgGA0ARAcIAAgKQAHg0gRgcIgBAKgAjnkgQgHBDASArIAAgKQAHhEgRgqIgBAKgAigtQQAEDxAQDlIAAgKQALkAgfjWIAAAKgAjmtaQAHCEgRBsIgBAKQgHBXASA/IgBAKQgHAvASAXIAAgKQAHgwgRgWIAAgKQAXjKgXjGIAAAKg");
	this.shape_100.setTransform(51.2864,214.9404);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D7DCBC").s().p("AgEBuIAAgKIAAjRIAJAAIAADRIAAAKIgJAAg");
	this.shape_101.setTransform(74.65,134);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5C6E1A").s().p("AgEhFIAAgKQARA+gHBXIgBAKQgRg/AIhWg");
	this.shape_102.setTransform(77.65,113);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5E6E29").s().p("AgGgKQAahGgYBzIgBACQgCAAABgvg");
	this.shape_103.setTransform(79.8667,110.1347);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C1C8A9").s().p("AgFA8IAAiBIAJAAIAAAKQAHBMgQA1IAAgKg");
	this.shape_104.setTransform(75.775,77);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5D7020").s().p("AgEg2IAAgKQARAvgIBIIAAAKQgRgvAIhIg");
	this.shape_105.setTransform(78.65,71.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5D6B2B").s().p("AgEjgIAAgKQAQDZgHDyIAAAKQgRjaAIjxg");
	this.shape_106.setTransform(80.65,80.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#AEB98F").s().p("AgFAjIAAhPIAJAAIAAAKQAHA0gQAbIAAgKg");
	this.shape_107.setTransform(76.775,45.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D1DBB8").s().p("AgEAoIAAgKIAAhFIAJAAIAABFIAAAKIgJAAg");
	this.shape_108.setTransform(76.65,37);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AEC35C").s().p("AgEgdIAAgKQAQAWgGAvIgBAKQgRgXAIgug");
	this.shape_109.setTransform(157.65,101);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C2D099").s().p("AgKAoIAAgKIAAgUQAQgMgCglIAFAAIABAKQAGAkgQANIAAAKIAAAKIgKAAg");
	this.shape_110.setTransform(142.2783,101);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B1BE86").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_111.setTransform(106.65,93);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D2DCB5").s().p("AgFBGIAAgKIAAiBQAQA0gHBNIAAAKIgJAAg");
	this.shape_112.setTransform(106.775,82);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5C6B2A").s().p("AgEi4IAAgKQAQCxgHDKIAAAKQgQiyAHjJg");
	this.shape_113.setTransform(91.65,109.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#606F2C").s().p("AgEgdIAAgKQAQAXgGAuIgBAKQgRgWAIgvg");
	this.shape_114.setTransform(85.65,53);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AEB87C").s().p("AAAAoQgEgoAAgnIAJAAIAABFIAAAKIgFAAg");
	this.shape_115.setTransform(105.65,45);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CDD3B1").s().p("AgFAoIAAgKIAAhFQAQAWgHAvIAAAKIgJAAg");
	this.shape_116.setTransform(105.775,37);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5E6D27").s().p("AgQAOIAAgKIAbgqQAKAegHAYIAAACIgBgEIAAAGQgFATgHAAQgHAAgKgZg");
	this.shape_117.setTransform(79.828,23.6249);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5C6C25").s().p("AgEiVIAAgEIAAgGIAAAFQAQCMgHCkIAAAKQgRiPAIimg");
	this.shape_118.setTransform(81.6523,41);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B1C65A").s().p("AgFhFIABgKQARA+gIBXIAAAKQgRg/AHhWg");
	this.shape_119.setTransform(98.65,32);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5E6E25").s().p("AgEjlIAAgKQAQDfgHD2IAAAKQgQjeAHj3g");
	this.shape_120.setTransform(91.65,57);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#AFC460").s().p("AgFhKIABgKQAQBDgGBcIgBAKQgQhDAGhcg");
	this.shape_121.setTransform(93.65,22.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B7CF59").s().p("AgEj0IAAgKQARDugIEFIAAAKQgRjtAIkGg");
	this.shape_122.setTransform(88.65,29.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B7CB67").s().p("AgEgnIAAgKQARAhgIA4IAAAKQgRggAIg5g");
	this.shape_123.setTransform(97.65,16);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#57671F").s().p("AgFgdIABgKQARAWgIAvIAAAKQgRgXAHgug");
	this.shape_124.setTransform(90.65,5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7A8C39").s().p("AAyfLQgCgmgSgWQgWl1AHmNQAIltABl3QADrCgLq1QgDNagJNJQgBBgggAEIgBgKQgLg7gGhTQADA3gPAlIAAgKQABhdgLA1IAAAFIgUkJIAAgKIABgKQAOiCgPhuIAAgKIAAgUIAFAAQgHg/AMhDQgFAAgBgCQgLgZAHgqIgKAFQgLhygdhbIAAAKQAaDygGDjIgBgKQgXimgQitIgFAAQAKDCgFDDIAAgKQgLhjgThbIAAgKQAIgvgSgXIgBAKQgGAwARAWIAAAKIAUGaQgFAAAAgBQgPhVgUBCQgFAAAAgBQgZh9gKiGIAAgKQgCjaACjdQAFCMAPCBIAAgKQgIhCASgrIgBAKQgHBDASAqIAAgKQgDjOgRjBIgFAAQAIBjghgxIAAgKIAAgUQAQgnAggYQACgCAAgFQAogFAVANQAEACAFAAQA1BrgNinIAAgKQARgXgGgvIgBgKIAAgKIAAjSIAAgKIAAl8QARg1gGhNIgBgKIAAgKIAAi+QARgbgGg1IgBgKIAAgKIAAhGIAAgKIAAhGIAKAAQATAuALgoIAAAEQgICnASCPIAAgKQAHilgRiMIABgCQAGgZgJgfIgcArIAAgKIAAg8QAXhNAfhHQABgCAEAAQAfgTAxgBIAKAAQA+AgAkA8QACADAAAFQAJBvALBtIAAAKIAABGIAAAKQAAAoAFAoIAFAAIAAD6IAAAKIAACCIAAAKQAAAoAFAnIAFABIAAGuIAAAKIAAC+IAAAKQAAAoAFAnIAFABQAAA8AFA8IAFAAIAAAFQgUAAAAAjQAAAFgCADQgVAZgRARIAAgKQgQANAGBhQAHBqgRAhIgFAAQgEh+gVhnIAAAKQAIGcgcGDIAAAFQgRgSAHgvIAAgFIgUBfIAAgKQAAhpgUhVIAAAKQAHDUgRC8QgDBsAXCJIAAgFQASg5AjAtQACACAFAAQAKAwAogNIAAAFQAzgTAOg8QAAgBAFAAIAAAyIAAAKQgFAAgBACQgjBPgng9IgFAAQgPBvgKBtIAAgKQAOiPgshXIgFAAQgLB8gOB0IAZGFIAFABQgBgzAPgmQABgBAFAAQAChnAHhhIABgKIAZE1IAFABQAKhQAPhPQAAgBAFAAQAAgoAFgnIAFgBQAbCKgHCsIAAAKQgFAAgBACIgEAIQg1gOADBKIgFAAQgJhRgag7IAAAKQgDBIgRA6IAAAFQgkkTgKkxQAAE9gYEMIAAgKgAgxKPIABADIgBgNIAAAKgAgxDXQgICoASCOIAAgKQAIingSiPIAAAKgAhFAjQgHDtARDVIAAgKQAIjugSjUIAAAKgABPBfQgGCAARBmIABgKQAGiAgRhmIgBAKgAgxgYQgIA5ASAgIAAgKQAIg5gSggIAAAKgABGpwQgHFIAREtIAAgJQAHlHgRkvIAAAKgAgxr8QgIFlASFNIAAgKQAIlmgSlMIAAAKgAhtkwQgHCEAbBiIABgKQAKiIgfheIAAAKgAhFrAQgIBXASA/IABgKQAHhXgSg/IAAAKgABGxGQgHDKARCyIAAgKQAHjLgRixIAAAKgAhFuwQgIBXASA/IABgKQAHhYgSg+IAAAKgAgxuSQgBA9ADgPQAQhIgFAAQgDAAgKAagAgn2QQgIDyASDaIAAgKQAHjzgRjZIAAAKgABG6AQgHD4ARDeIAAgKQAHj3gRjfIAAAKgAg71AQgIBJASAvIAAgKQAIhJgSgvIAAAKgAAK3gQgIAwASAWIABgKQAGgvgRgXIAAAKgAAo+iQgIEHASDtIAAgKQAIkGgSjuIAAAKgACL7aQgHBXASA/IAAgKQAIhYgSg+IgBAKgABZ8+QgGBdARBDIABgKQAGhdgRhDIgBAKgACC9cQgIA6ASAgIAAgKQAIg5gSghIAAAKgAA7/AQgHAvASAXIAAgKQAIgwgSgWIgBAKgAi9BVIAAAAg");
	this.shape_125.setTransform(84.15,200.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C3C7B0").s().p("AgEC+IAAmFQAQC7gMDUIgEAAIAAgKg");
	this.shape_126.setTransform(165.6604,173);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#5B6B2C").s().p("AgFhZIABgKQARBTgIBqIAAAKQgRhSAHhrg");
	this.shape_127.setTransform(161.65,167);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C2C9A3").s().p("AAAAnQgFgnAAgnQAQAXgHAuIAAAKIgEgBg");
	this.shape_128.setTransform(164.775,129);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#81943C").s().p("AkDRbIAAgKQAqgmgMglIAAAFQgdASAXg4QABgCAFAAQgCgcgHgXQgBgEAAgFQARgDgCgbIAFAAQA0lSgCmIIAAgKIAFAAQANidgSiEIAABkIAAAKIgFAAQgFhkAAhkQAFgFADgGQACgEAAgFQAcAWAHAvQAAABAFAAIAAAyIAAAKQARADgCAbIAFAAIAABtIAAAKIAABGIAAAKQAABLAFBLIAFAAIAAAoIAAAKIgKAAIAACWIAAAKQAAAjAFAjIAFAAIAAAKQAAA2gUAuIAABGIAAAKQBJgvAZheQACgEAAgFQgaATgmA7QgBACgFAAQAjgygFgjIAAAFQgSAggJgOQgDgDAAgFQA2gtgmg0QgBgDgFAAIAAgKIAAgKQAQgYAIgjQABgBAFAAIAAgoIAAgKQARgDgCgbIAFAAQAKhBAAhLIAAgKQARgDgCgbIAEAAIAAhkIAAgKQARgWgGgvIgBgKIAAgKIAAhaQAShOgHhmIgBgKIAAgKIAAoSQASghgIg5IAAgKIAAgKIAAgKQARgNgGglIgBgKIAAgKQAUhHBQgJIAKAAQA2AWALBDQAAABAFAAIAAAoIAAAKQARADgCAbIAFAAQgBBlAKBZIABAKQAAAoAFAnIAFABIAAC+IAAAKIAAGGIAAAKIAABZIAAAKIgKAAIAABGIAAAKIgBAKIgnF8QgFAAAAABQglDKhsB/QgFgKgDABQhEANhTA4QAAgFADgCQBSg/AshkQgFAAgCADQguBDhCAyIgKABQgYAFgQAOQAAAFgCACQgPAQAHAlQgFAAgBABQgHAfgRASQAFAFAGADQAEACAFAAQAAAFgCABQgIAEgBADQgiBSg3A3IAAgKgAADKHQgvBOhVAoIAAAUIAAAPQBbgYAwiDQgFAAgCACgABOJSQgPA7ghAqIAAAFQA4gYgGhbQAAAFgCAEgAgTI1QgGAWAFgJQAbgpgCAAQgCAAgWAcgAg7HvIAAATQAUgmgDAAQgDAAgOATgAB4GpQAEBEAIhPQADgdgCAAQgDAAgKAogACWDhIgBAKQgGAvARAXQAFg8AAg8QAAgOgCAAQgDAAgKA2gADSgEQgIA4ASAhIAAgKQAIg5gSggIAAAKgAC0ikQgIA6ASAgIABgKQAGg5gRghIAAAKgACMu6IAAAKQAVGVAJGfQADmJgEl5QAAhMgOAAQgGAAgJAQgADbmoQgHBsASBSIAAgKQAIhrgShTIgBAKgAC0qEQgIBiASBIIABgKQAGhigRhIIAAAKgADSr8IAAAKQgIBSASA6QAAg3AHg2QAJhKgIAAQgFAAgNAhgABGvsQgIDFASCtIAAgKQAIjGgSisIAAAKgAButgQgIBdASBDIAAgKQAIhdgShDIAAAKgAC+tgQgHA1ARAbIABgKQAHg0gSgcIAAAKgAC0wAQgIAvASAXIABgKQAGgwgRgWIAAAKg");
	this.shape_129.setTransform(139.15,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cactus3, new cjs.Rectangle(0,0,181.2,428.8), null);


(lib.cactus2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A6012").s().p("AgCAMQgNgBgHgWQBLAXgyAAIgFAAg");
	this.shape.setTransform(126.2857,148.5042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDBD54").s().p("AgCAFQgDAAgJgKQAoALgPAAIgNgBg");
	this.shape_1.setTransform(146.5064,148.8769);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#714723").s().p("AhTAIQAUgBAIgKQACgDAAgFQBHgnBAAWQAEACgHAGQgJAIAGAUQgFAAgEACQgcAPgDgHQAAAFgCABQgeANgYAAQglAAgagdg");
	this.shape_2.setTransform(150.3594,181.527);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#71441C").s().p("AgYAcQgGgDgFgFQAcgNATgSQACgDAAgFQAFAAABgCIAEgIQAjAxhKAAIAAAKQgFAAgEgCg");
	this.shape_3.setTransform(126.5568,184.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7B363").s().p("AAKAmQAFgFADgGQACgEAAgFQAAgFgCgCQgdgUgSggQAyggAIBbIABAKQAAAFgCAFQgEAMgEAAQgFAAgFgMg");
	this.shape_4.setTransform(120,173.4684);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#496D14").s().p("AgSAAQgBgBAAgFQAsANgGAAQgEAAghgHg");
	this.shape_5.setTransform(137.9876,166.9654);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7BE65").s().p("AgPAGQgBgEAAgEQAzgxgbA/IgFAAIAAAFQgDAHgEAAQgFAAgGgSg");
	this.shape_6.setTransform(130.7114,170.6098);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AAC066").s().p("AgMAHIAAgdQA0gTg0BEg");
	this.shape_7.setTransform(132.3438,161.5602);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#465E12").s().p("AgWgSIABgKQBAgKgdBDQgBACgFAAQgggMACglg");
	this.shape_8.setTransform(126.2165,161.2359);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#495D0E").s().p("AgQgDQgCgBAAgFQAnATgDAAQgCAAgggNg");
	this.shape_9.setTransform(125.8503,154.2818);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3BC5D").s().p("AgSACQBMg4hMBMg");
	this.shape_10.setTransform(144.9313,160.0581);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4D8AA").s().p("AgaBLIAAgUQAQABgFgVIgBgKIAAgKQASgjABg2IAAgKQAFAAACADQAlArgsA1IAFAAQgCAeggAoIAAgKg");
	this.shape_11.setTransform(159.7075,156.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CABA7F").s().p("AgPAjIAAgKIAAgKQAQgRAHgfQABgBAFAAIABAKQAFAVgQgBIAAATIAAAKQAAAFgDADQgBACgFAAIgKAAg");
	this.shape_12.setTransform(156.6188,162.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B1874E").s().p("Ag7gVQAcApBRgLIAKgBQAAAFgBABQgeAIgWAAQg1AAgNgrg");
	this.shape_13.setTransform(99,185.4613);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B18351").s().p("ABVAjQg/gCg4gIIgBgFQgngFgoAAIAAgKQAFgFADgFQACgEAAgFQA0gXAcADIAKAAQAAAFgCABQgNAEgPAAQARAaAXgFIAJgBQA4ATATglQAGgLATgBQAAAFADADQACACAFAAQAAAFgDADQgTATgcAMQAFAFAGADQAEACAFAAIAKAAIAAAKIgKAAg");
	this.shape_14.setTransform(116.5,184.758);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6E4923").s().p("AgZgEQAPAAANgFQABAAAAgFQAbgHgGAaIgBAKIgJABIgJABQgRAAgOgVg");
	this.shape_15.setTransform(114.5973,182.8405);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#794F29").s().p("Ag2ATQAAgFgCgCQgRgNgBgdIAAgKIAAgKIAKAAQAiAeA3AJIAKABQAJAUAVAHQAFACAFAAQAAAFgCAEQgDAGgFAFIAAAKIgKAAQgRACgPAAQg3AAgWggg");
	this.shape_16.setTransform(98.5,181.4402);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AB7C55").s().p("AgFAdQgFgdAAgdQAcgEgIAiIgBAJIgJAAIAAAKIAAAKQgFAAAAgBg");
	this.shape_17.setTransform(91.1451,175.2792);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9B8D57").s().p("AAIAcQgRgYgFghQAeAJgBAoIAAAKQgFAAgCgCg");
	this.shape_18.setTransform(94.5016,160.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B0B952").s().p("AgMgRQgDgEAAgFIAfA1Igcgsg");
	this.shape_19.setTransform(106.5944,162.9983);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AAB760").s().p("AgCAXQgPgPADggQAPAJAMAVQACAEAAAFIgKAAIAAAKQgFAAgCgCg");
	this.shape_20.setTransform(109.4678,169.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A6117").s().p("AgcgcIgBgKQA/gNgEA2QgBAJABAdQgvgMgLg5g");
	this.shape_21.setTransform(113.0147,163.1748);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#486014").s().p("AgZgOIAAgKQBXADg8AsQgCACgFAAQgWgIACgfg");
	this.shape_22.setTransform(111.6079,151.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#495E13").s().p("AgVgFQgCgBAAgFQAxAXgDAAQgCAAgqgRg");
	this.shape_23.setTransform(110.3628,155.4733);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AFBF60").s().p("AgOAtIgFAAQAjgegqggQgDgCAAgFQAQgjAagrQACgCAFAAQgCBTgHAaIgBAKQAGAOANBCIABAKQgygOAGgug");
	this.shape_24.setTransform(119,154.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A6317").s().p("AgFAIIgRgQQBCARggAAIgRgBg");
	this.shape_25.setTransform(110.2546,146.1889);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#496014").s().p("AgTgHIgIgEQgCgBAAgFQA1goABA7QAAAKAFAUQgPACgLAAQgpAAASgpg");
	this.shape_26.setTransform(111,141.136);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#44590F").s().p("AgJgBQgCgBAAgFQAZAPgCAAQgCAAgTgJg");
	this.shape_27.setTransform(110.188,134.1457);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ABC559").s().p("AgMARIAAgKIAAgcQAyAFgyAng");
	this.shape_28.setTransform(103.2625,132.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A6413").s().p("AgVAHQgDgDAAgEQAsg+AAA+QAAAJAFAUQgGADgHAAQgQAAgRgZg");
	this.shape_29.setTransform(111.5,128.4279);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AFB75C").s().p("AgUACQBSgThSAYg");
	this.shape_30.setTransform(103.075,147.1179);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#56681D").s().p("AgCCKQgCgCgFAAQgFAAgBgCQgEgIAAgKIAAgKQABgpgfgJIgFAAQAAgogPgTIABgKQAHghgIhDQAWgDgBgbIgBgKQAugMAIAfQAAABAFAAIABAKQAEAkgFAYQgFAFgFABIgOAEQBEAWhdgCQBHAPgCBKIAAAKQgsAYAsAFIAKABQgVAqAyAMQABABAAAFIgVABQgjAAgQgTg");
	this.shape_31.setTransform(98,151.7018);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A0975F").s().p("AADA3QgDgbgLgNQAQgWgCgvIAFAAQAHBCgGAhIgBAKIgFAAg");
	this.shape_32.setTransform(90.2009,145.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9B8C57").s().p("AgEAZQgPgEAGgVQAQgCgCgbIAFAAQAFAFADAGQACAEAAAFIAAAJQACAbgVADQAAgFgBAAg");
	this.shape_33.setTransform(91.4441,137.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A29359").s().p("AgOARIAAgKIAAgTQASAAALgFIAAAFIAAAKQgDAUgWAAIgEgBg");
	this.shape_34.setTransform(98.5,119.5583);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AFBF5D").s().p("AgMAAQgBAAAAgFQAfALgEAAQgDAAgXgGg");
	this.shape_35.setTransform(118.419,116.9163);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#657726").s().p("AgDBtQgIgfgvAMQAAgFgCgEQgDgGgFgFIAAgKIAAgUQAYgvAYgrQACgEAAgFQAaACADgWIAAgKQARACgCgWIAFAAQA9gEgmAuQgDADAAAFIAAAFQgUgJgKAiQAOARgDAgIgBAKIAAAeIAAAKQgFAAAAgBQgGgfgTAgQAUAUgRANQgDACAAAFQgEAAAAgBg");
	this.shape_36.setTransform(98.858,127.2801);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C2AC6C").s().p("AgfABIAAgJQAjgTAWAVQACADAAAEQAAAFACAEQAFAIgKAAQgOAAgqgRg");
	this.shape_37.setTransform(118.172,110.2367);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B3AB5F").s().p("AgqA0QAngvg9AFIAAgKIAAgJQAbgnA0AEIAAgFQAbgIANgCIAKAAIAAAKQAAAFgCAEQgWAfgfAQQgJAngtAOQAAgFACgDg");
	this.shape_38.setTransform(108.5,115.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B3B65F").s().p("AgMgOIAKAAQAEAAACgCQADgDAAgFIAFABQAEAwgHAAQgGAAgPgng");
	this.shape_39.setTransform(146.3442,141.7627);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8C36C").s().p("AgDAMQAAgSgKgLQAmgPgRAjQgCAEAAAFQAAAFgCADQgDACgEAAIAAgKg");
	this.shape_40.setTransform(146.358,138.0794);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B5BF59").s().p("AgEAUQgQgTABgZQBDAngwAKg");
	this.shape_41.setTransform(145.0023,127.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AAC064").s().p("AgQgiIgBgKQA2ASgdBFQgBACgFAAQgLglgHgqg");
	this.shape_42.setTransform(132.7786,139.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#516D17").s().p("AgHANQgBgNgHgbQA7AwgxAGg");
	this.shape_43.setTransform(138.6488,137.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ADBC5A").s().p("AghgWQABgJgBgdQAkguAbBKQABACAFAAQgkAcAhAhQADADAAAFQgrgGANAkIgHAEQgCABAAAFQgmgNAIhYg");
	this.shape_44.setTransform(118.4304,136.4338);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ADB563").s().p("AgPgjIgBgKQAzgWgbA0IAFAAQgIAfgKAcIgBAJQgBgpgIgvg");
	this.shape_45.setTransform(132.7227,150.9105);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D6315").s().p("AgZgiIAAgKQBPAEgrAqQgCADgFAAQARAUgTASQgCACgFAAQgUgnAAgog");
	this.shape_46.setTransform(126.6236,141.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#465A11").s().p("AgTAAQgBAAAAgFQAuALgGAAQgEAAgjgGg");
	this.shape_47.setTransform(126.0876,134.9451);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#445813").s().p("AgWAKQgCgDAAgFQA3g+gMA4QgEAQAKAUQgigBgNgVg");
	this.shape_48.setTransform(125.5,130.1448);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AABF5F").s().p("AgPgSQgCgEAAgFQA1gygcB2QgBABgFAAQgFghgMgbg");
	this.shape_49.setTransform(131.756,130.0604);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4A661A").s().p("AgUgoQgCgEAAgFQA6AGgSBTIgBAKQgSgUgThGg");
	this.shape_50.setTransform(137.2604,126.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4A5D15").s().p("AgDAIQgLgBgKgOQBHAPgfAAIgTAAg");
	this.shape_51.setTransform(134.5472,116.1481);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4B5A11").s().p("AgYATIAAgFQAgg3APAlQACAEAAAEQgNAQgXAAIgNgBg");
	this.shape_52.setTransform(123.5,116.8942);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#ADB153").s().p("AgFgCIgBgeQATABgIAtQgDATgCAAQgDAAgCgjg");
	this.shape_53.setTransform(130.7143,120.5719);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#435617").s().p("AgTABQBPgQhPAVg");
	this.shape_54.setTransform(125,121.1672);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C5B36C").s().p("AgnAJIAAgJQBQgfgBAfIAAAJQgFAAgFACQgOAGgQAAQgSAAgVgIg");
	this.shape_55.setTransform(126.0006,109.3823);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C8AD6B").s().p("AgdABIAAgJQAjgRAWAcQACADAAAFQgFAAgEACQgGACgHAAQgPAAgWgOg");
	this.shape_56.setTransform(135,110.1772);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E4D9AD").s().p("AATBQQgMhSgqgvIAAgKQAFgFADgGQACgEAAgFQBJAXgzAfQgCABAAAFQA8AbgdA/QgCAEAAAFIgFAAg");
	this.shape_57.setTransform(157.5563,127.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D0C287").s().p("AANAbQgWgbgUgdQAFAFAGADQAEACAFAAQAlgNgDAgIAFAAQAAAFgCAEQgDAGgFAFIAAAKQgFAAgCgDg");
	this.shape_58.setTransform(152,119.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#89963C").s().p("AAoGBIgxAAIgKAAIAAgKQBKAAgjgyIgEAIQgBACgFAAQgFAAgCgCQgDgDAAgFQAFAAAAgBQAIg0g0ADIgBgKQgIhcgzAgQASAfAeAWQACACAAAFQgFAAgEACQg9AigohMQAAgFgCgEQgMgWgQgJQgDAhAPAPQADACAFAAIAAAFQgzABgngQQAAgFgDgCQgVgYgQgdQAFAAACACQAVAYA0gGQAAgFgBAAQgygNAVgqIgKAAQgtgGAtgYIAAgKQAChLhIgOQBeAChFgWIAOgDQAGgCAFgFQAFgYgEgkIgBgKQAAgFADgCQAQgNgTgUQATggAGAfQAAABAFAAIAAAFQAzgngzgGIABgKQACgigNgQQAJgiAVAJIAAgFQAugOAJgnQAfgRAVgfQADgEAAgFQBJAegLgVQgCgEAAgFIAKAAQAnAOAfgNQAEgBAFAAIAKAAIAKAAQAfAUAUgJQAEgBAFAAQgBAQAVgFIAKgBQgGATAkABIAKAAQAPAKAQAIQAEACAFAAQAUAeAXAbQACADAFAAQAqAvANBTIAFAAIAABuIAAAKIAAAKIAAAJQgBA2gTAkIAAAKQgFAAgBABQgHAfgRASIAAAKIAAAKIgKAAIAAAKIAAAKQgFAAgEACQgkAQgjAMIAAgFQgoAOAUgdIAAgFQgkAOgsA9QgDBHBUgeQAEgBAFAAQAAAFgDAEQgHALgUAAQArAxBLghQACgBAAgFQACAHAdgPQAEgCAFAAQAAAFgCACQhBAzijgcIAAAFQgbgCgDARIgKAAgAAUDXQAAAFABAFQAJAdAKgTIAAgFIAFAAQAPgkgKAAQgHAAgXAVgABbC1QBOAShPgYQAAAFABABgAipBpIABAKQALA5AwANQgBgdABgKQAEgsgqAAQgKAAgMADgAjZB8QA8Bfg+hoQAAAFACAEgAhCgqQgbAqgQAjQAAAFADACQArAhgkAeIAFAAQgGAuAzAOIgBgKQgNhCgGgOIABgKQAHgbAChSQgFAAgCACgAgdBfIgBAKQgBAnAfALQAFAAABgCQAZg7gtAAIgPABgAAoBpIAAAeIAAATQAqg1gYAAQgGAAgMAEgACgBzIAAAUQAsgsgGAAQgFAAghAYgAi7A9QBcAmhegsQAAAFACABgAAogYIABAKQAIAvABApIABgJQALgcAIggIgFAAQATgkgUAAQgIAAgQAHgAgbAzQBGAehIgkQAAAFACABgAizAPQgCAgAWAIQAFAAADgCQA8gthYgDIAAAKgAgJAJQA7ABhPgYQAGAWAOABgADAAFQAqAFg2gOQAKAKACgBgAkDgOIAAAFQAugOgFAAQgEAAglAJgAitgRQBBAFhRgWgAgdhoQAAApAUAnQAFAAADgCQASgSgRgUQAFAAACgDQAsgrhQgEIAAAKgAi9heQAAAFACABIAIAEQgXA1BJgNQgFgTAAgLQAAgkgUAAQgNAAgWAQgAAph8QAGArANAlQAFAAABgCQAdhGg3gSIABAKgAh3i4QABAdgBAJQgIBZAmANQAAgFACgBIAIgEQgOgkAsAGQAAgFgCgCQgjgjAlgcQgFAAgBgCQgRgtgUAAQgNAAgOARgADNheIgFAAQAAgFACgEQARgkgnAPQAKAKAAAUIAAAKIgKAAQAiBTgJhdgABthoIABAPQAzgGg9gxQAIAcABAMgAgciLQBRAShSgXQAAAFABAAgAixiUQAtAYgvgeQAAAFACABgAAejWQAAAFACAEQAMAbAGAiQAFAAABgBQAThUgUAAQgJAAgQAPgAgni4QAAAFACADQANAWAiAAQgKgUAEgRQAGgagKAAQgJAAgeAhgAizjMQAAAFADADQAYAjAXgNQgFgUAAgKQAAgfgLAAQgMAAgWAfgABSkJQASBHAUAUIABgKQAShUg7gGQAAAFACAEgACvi9IAFAFQAxgKhFgoQgBAaAQATgAAfkcQADA9AIgsQAIgvgUAAIABAegAgnkSIAAAFQAsgNgFAAQgEAAgjAIgAg7kwIAAAFQAjAEAPgTQAAgFgCgEQgGgPgJAAQgNAAgUAigAhhk/QA2ARg4gWQAAAFACAAgABHk+QBFAFhagVQAKAPALABg");
	this.shape_59.setTransform(127,148.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C1A974").s().p("AAKAQQgiAAAFgTIAAgKQATgKASAeQACAEAAAFIgKAAg");
	this.shape_60.setTransform(142.9631,112.6688);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E3D4A0").s().p("AD3BKQgGgCgFgGQgFAAgEgCQgQgIgPgKQAAgEgCgEQgSgggUALIAAAKIgKABQgVAFABgQQAAgGgDgCQgVgcgkAQIAAAKIgKAAIgKAAIAAgKQABgfhQAfIAAAKIgKAAQAAgGgDgBQgWgVgjASIgKABQgNACgbAHIAAAEQg1gEgbAnIgKABQgQABAGgVQAWgyAkgOQACgBAAgFQAgAlAZgmQADgEAAgEQAIgGAMAfIAAgGQAdgfAgAUQAEABAFAAIABghIAHAAIABAYIABAJQAWgDAagCIABgEQAdATAPgmQABgBAFAAQAMAyAmgPIAAAEQAkgiAJA2IAFAAQAgABAwAIIAKABQgHAfAGAmIABAKQgFAAgEgCg");
	this.shape_61.setTransform(125.4182,109.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6F441C").s().p("AgdAPQAagWAhgMIAAAFQAFAehAAEg");
	this.shape_62.setTransform(67.0213,181.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BA8A58").s().p("AAVAaQgVgNgdgFIAAgJQA6g9ABBQIAAAKQgFAAgEgCg");
	this.shape_63.setTransform(73,177.502);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#794F27").s().p("AgngJIAKAAIAKAAQAVAIAcABIAKAAQAAAFgBAAQgSAFgPAAQgeAAgPgTg");
	this.shape_64.setTransform(52,183.2561);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#687B2F").s().p("AgdAUQAngEgFgtIAFAAIAAAKQAAAFACADQAiApgeAAQgPAAgegKg");
	this.shape_65.setTransform(49.025,163.3222);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#697F31").s().p("AgSgJQAFgFADgGQACgEAAgFIATAAIAKAAQAAAFgCABQgIAEgKAAQASAIACAVIAAAKQAAAFgCACQgDADgFAAIgKAAIgBAAQgcAAAKgng");
	this.shape_66.setTransform(56.856,163.3012);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4C6A13").s().p("AAFAPIgTAAIAAgKIAAgJQATgTAIATQACAEAAAFIAAAKIgKAAg");
	this.shape_67.setTransform(57.5,158.8312);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5F7728").s().p("AAABOIAAgKQgOg6gPhRQBBgvgGBcIgKgFQgMAfAQAkQABACAFAAQgOAdgKATQgBACgFAAIAAgKg");
	this.shape_68.setTransform(50.0289,152.5054);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8E5F3A").s().p("AhZARQAcg5CWAhQABAAAAAFQAAAEgCABQgIAEgKAAIgKABQg4AMgvAAQgYAAgWgDg");
	this.shape_69.setTransform(57,172.6132);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7F993A").s().p("AgTALIAAgTQAUgYAQAZQADAEAAAEIAAAKQgFAAgDACQgMAHgTABIAAgKg");
	this.shape_70.setTransform(63,164.2307);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0DAB2").s().p("AgQAZQASgLABgcIAAgKIAAgKIAKAAIABAKQAMA4gqADIAAgKg");
	this.shape_71.setTransform(66.6725,161.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#749133").s().p("AgdgLQAcgZAdATQACABAAAFIAAAKIAAAJIgKAAIAAAKQgFAAgDADQgFAGgGAAQgNAAgRgmg");
	this.shape_72.setTransform(65,157.4904);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E3DABC").s().p("AgHAPIAAgTIAAgKIAAgKIAJAAQAFAAAAABQAHAkgVAMIAAgKg");
	this.shape_73.setTransform(69.8438,152.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9A713E").s().p("Ai4AVIAAgFQgtgBgPgXQAKgFALgEQAEgBAFAAQAWAkBDgMQABAAAAgFQBHAFAhgSQAMgHgGAUIgKAAIgKAAQAWAcA4gNQABAAAAgFQA6gCAogVQACgBAAgFIAAgKQAKgKAUAAIAKAAQAdAFAWANQAEACAFAAQAAAFgCACIgmAqIgKAAQhOAIhLAAQhzAAhvgSgAB9ALIAAAFQBBgFgFgdIAAgFQgiALgaAXg");
	this.shape_74.setTransform(51.5,182.221);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#794920").s().p("AgsAQIAAgKIAAgxQAnApAqAkQADACAFAAQAAAFgBAAQgQADgOAAQgpAAgRgcg");
	this.shape_75.setTransform(34.5,178.6969);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EABC93").s().p("AgQgBQBEABhEACg");
	this.shape_76.setTransform(39.725,175.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#DCB77D").s().p("AlHFhIgKAAQiZgHhhg/QATgUAJgeQACgFAAgFQAbgDAHgZQABgCAFAAIABAKQAFAWgQgCQA5AzA/gaIAAAFQADAfg+AOQgBAAAAAFQAfAiBFgDIAKgBQC4AfDDgUIAKgBIAlgqQADgDAAgFIAAgKQgBhQg7A8IAAAKIgKAAQgTABgKAJIAAAKQgFAAgBgCQgPgbgJgfQAFAAACgCQADgDAAgFQAKAAAIgEQACgBAAgFIAFAAQgNgohIgUQAFAAACgCQADgDAAgFQAFAFAGADQAEACAFAAQATAAAMgHQAEgDAFAAQCOBCB2hKQAEgCAFAAQgOA0AWg0QACgFAAgFQg+gpAogNQACgBAAgFQgzgEATg4QACgEAAgFQgzgbA1gyQADgDAFAAQgjgwASgeQACgCAFAAQgfgTAugLIgFAAQgDgNgLgDQgXgHgDgRQBOgFgkgcQgCgCAAgFQAwgNgDgQQAAgBgFAAQgtgEBGgQIgFAAQgIgnA6gaIAAAFQgGAWAQgBIAKgBIAAAKIAAAKIgFAAQABAWgQgCIAAgFQgLAFgTAAIAAAUIAAAKQAAAFgCAEQgYArgYAwIAAAUIAAAKIgFAAQACAbgRADQgGAWAPADQABAAAAAFIgFAAQACAwgRAWQAMANADAaIAFAAQAOAVABAnIAFAAQAFAjASAXQACACAFAAQAAAKAEAIQABACAFAAQAPAeAWAXQADACAAAFQAnAQAzgBIAAgFIAAgKIAKAAQAoBMA9giQAEgCAFAAQAAAFgCAEQgDAGgFAFQAKAYAIgYQACgFAAgFQA1gDgIA0QAAABgFAAQgUABgGALQgSAmg4gUIABgKQAFgagaAGIgKAAQgdgDgzAXQgFAAgFgBQgWgHgIgWIgKAAQg4gJgigfIABgJQAIgjgdAEQAAAeAFAdQAAABAFAAQABAdAQAOQADACAAAFQASA+BlgaQABgBAAgFQAoAAAnAFIABAFImPAaQgrADgoAAQicAAiDgng");
	this.shape_77.setTransform(68.8083,150.9863);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#86542A").s().p("AgggIIAAgKQBtgLhHAvQgEADgEAAIgEAAQgcAAACgdg");
	this.shape_78.setTransform(21.2906,173.2072);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#758F34").s().p("AgZgDQgCgEAAgFQBFgvgSBCQgCAFAAAFQgMAPgKAAQgOAAgLgjg");
	this.shape_79.setTransform(42.7684,158.6076);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBD4A1").s().p("AgMA+QgXgWg2gUIAAgKQAbAMAGgJQACgDAFAAQAwAhBFglQACgBAAgFQgdgKAIgxIABgKQAFAAACADQADACAAAFQAAAFACAFQARApALAwQgFAAgEACQgqARgwALQAAgFgDgDg");
	this.shape_80.setTransform(29,166.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#728435").s().p("AgIAPQAAgFgDgCQgCgDgFAAIAAgJIAAgKIAAgKIAAgKQAcAWACAEQANArgKAAQgHAAgQgUg");
	this.shape_81.setTransform(35.9111,158.768);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D5CFA5").s().p("AgTAQQARgRgHgqIAAgKQAQADgGAbIgBAKQACAbAMAUQABACAFAAIAAAKQgFAAgEADQgHAFgEAAQgQAAgDgmg");
	this.shape_82.setTransform(32,153.6519);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#627B27").s().p("AgTAcQAAgFACgDQAHgHgJgiQBHgkg3BWQgDAEgEAAQgEAAgFgFg");
	this.shape_83.setTransform(42.025,148.5342);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#86AE37").s().p("AAAAWQgLgHgBgTQAQABgCgVIAFAAQAJAigGAIQgDACAAAFQgFAAgCgDg");
	this.shape_84.setTransform(39.2613,148.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#667B2D").s().p("AgSAgIABgKQAGgagRgDIAAgKIAAgKQAPAAANgFQABAAAAgFQAFAAABACQApBJglAAQgLAAgSgGg");
	this.shape_85.setTransform(33.864,149.1337);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DCCDB0").s().p("AgRAOQASgLAGgbQAAgBAFAAQAMAagKAGQgCACAAAFQgFAAgCACQgFAKgGAAQgGAAgFgMg");
	this.shape_86.setTransform(27.8349,143.9205);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B5B485").s().p("AgdAiQAggBgTgNQgDgBAAgFQAAgFADgCQAJgGgMgaIAAgKIAAgKQAOAlAbATQADADAFAAQAAAFgBAAQgOAFgPAAIAAAKIAAAKIgIABIgKABQgMAAABgMg");
	this.shape_87.setTransform(30.9978,143.9188);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CEC69D").s().p("AARAmQgWgWgTgZQAigBgEgTIgBgKQARADADARIAAAKIAAAJIAAAeIAAAKQgFAAgDgCg");
	this.shape_88.setTransform(26.5,134.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#748437").s().p("AADAnQgHgUgQg6IAKAAIAKAAQAhAVgTA5QAAABgFAAQgFAAgBgBg");
	this.shape_89.setTransform(33.1124,139.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#596C25").s().p("AAQA1QgbgVgNgkIAAgKIAAgKIAAgeQAUAAASAEQABABAAAFIgKAAIgJAAQAQA6AIAUQAAABAFAAIAAAKIAAAKQgFAAgEgCg");
	this.shape_90.setTransform(31.5,139.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#647430").s().p("AgPAeQgCgRgRgDIAAgKIAAgnIAeAAIAJAAIAKAAQAFAAABACQAoBKhLADIgBgKg");
	this.shape_91.setTransform(30.501,129.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#86AC37").s().p("AAJAdQgigJAFgxIAUAAIAJAAQARAkgFANQgCAFAAAFIgKgBg");
	this.shape_92.setTransform(37.1349,129.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6B7A30").s().p("AAEAeQgEAAgDgDQgHgHgFgKQAFgFADgFQACgEAAgFIAAgKIAAgKIAJAAIAKAAIABAKQAFAVgQgCQAAATAFALg");
	this.shape_93.setTransform(31.6188,120.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8AB438").s().p("AgNgWQAKAFAJAAIAAgFQAIASACALIAAAKIAAAFIgHABQgfAAAJgtg");
	this.shape_94.setTransform(35.399,117.5727);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8B9B5D").s().p("AAPAUIgdAAIgKAAIAAgKIAAgTIAAgKIAKAAQgIApAvgHIAAAFIgKAAg");
	this.shape_95.setTransform(28.5,123.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B8AE85").s().p("AAAASQgJgSgFgTIAKAAQAQADACAQIABAKIgKAAIAAAKQgFAAAAgCg");
	this.shape_96.setTransform(25.5,120.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E1D5B6").s().p("AAOAmQgNgdgUgSQAKgPALgNQADgCAFAAIAAAKIgKAAQAFAUAJARQABACAFAAIAAAUIAAAKQgFAAgBgCg");
	this.shape_97.setTransform(24,121.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A4A16E").s().p("AgHAjIAAgKIAAg7QAXAhgMAbQgCAEAAAFIgJAAg");
	this.shape_98.setTransform(24.8,109.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#899549").s().p("AgTgEQAFgFAGgDQAEgCAEAAQARgRADARIAAAKIgKAAIgKAAIAAAJIAAAKQgEAAgCACQgFAGgDAAQgGAAABgbg");
	this.shape_99.setTransform(30.9882,117.8108);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#566924").s().p("AAZA4IAAgFQgvAHAIgqIgBgKQgCgQgRgDIAAgKIAAgKIAAgUQApgHAQATQACADAAAFQgFAAgEACQgGADgFAFQgCApAPgSQACgDAFAAQAAAEgCAEQgDAGgFAFQAFAKAHAIQADACAFAAIAAAKIAAAKIgKAAg");
	this.shape_100.setTransform(28.5,119.6958);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DBCBAB").s().p("AgOAAQAOgJAEgUIABgKIAKAAIAAA7IAAAKQgFAAgBACQgDAIgEAAQgHAAgJgog");
	this.shape_101.setTransform(22.5,110.3131);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#596D27").s().p("AgTA2IgKAAQAAgFACgEQAMgdgYgfIAAgKIAAgeQBeAHgUBcIAFAAQgNAMgaAAQgIAAgMgCg");
	this.shape_102.setTransform(28,107.9149);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#83AB35").s().p("AgZgBQAhgXAJgOQACgDAFAAIABAKQAFAWgQgCIAJAnIABAKQgFAAgFACQgGACgFAAQgWAAgGgrg");
	this.shape_103.setTransform(34.6188,106.4925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7E9939").s().p("AgigFQAWgsAtASQACABAAAFIAAAKIAAATIAAAKIgKAAIAAAKIAAAKQgFAAgFABQgFACgFAAQgaAAgNgqg");
	this.shape_104.setTransform(66.5,148.9179);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E2D6B6").s().p("AgPAPQAKgPAHgPQACgEAAgFQAFAAABACQAUAngtAIIAAgKg");
	this.shape_105.setTransform(71.6136,144.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C5BC90").s().p("AgLAeIAAgxQAQABgCgVIAFAAQAAAFACAEQAJAhgeAlIAAgKg");
	this.shape_106.setTransform(73.1775,132.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#698628").s().p("AADBKQgHgTgUATIABgKQAKgrgVguIAFAAQgFgLAAgTQA4g7AIBEIAFABQgUAtgPAsIAFAAQAcgMgWAyQgBACgFAAQAAgFgCgFg");
	this.shape_107.setTransform(58.5,150.9349);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5A7122").s().p("AAHAiQgrgFAOg/QA/ADgTBAQAAACgFAAIgKgBg");
	this.shape_108.setTransform(51.3222,135.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#546D20").s().p("AASAoQgFAAgFgCQghgJAEgwQAKgJARgGQACAAAAgFQAOA3ABAYg");
	this.shape_109.setTransform(41.2292,137.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#738F32").s().p("AgdgdQAWAGgBgQIgBgKQAQAQAHgOQABgCAFAAIAAAKQAAAFgCAAQgRAFgKAKQgEAwAhAJQAFACAFAAQAAAFgCABQgKAEgIAAQgjAAgEhPg");
	this.shape_110.setTransform(40,137.3092);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#61762B").s().p("AgHAuQAAgFADgFQAEgNgRgkIAGAAQgGgKgKgKQALAAAHgEQACgBAAgFIAAgKIAJAAIALAAQAHAbAHBIIgEAAQgGAAgBACQgDAGgFAAQgGAAgJgIg");
	this.shape_111.setTransform(39.75,127.7391);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#748D34").s().p("AgFAxIgZhiIAKAAIAKAAQgOA/ArAFIAKABIABAKQAEATgiABQgFAAAAgBg");
	this.shape_112.setTransform(50.0705,137.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5B6822").s().p("AgQAAQgBAAAAgFQAnALgFAAQgEAAgdgGg");
	this.shape_113.setTransform(50.7626,129.8959);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#85A841").s().p("AgDASQgJgSgFgTIATAAIAKAAIAFABQACAQgRACIAAAKIAAAKQgEAAgBgCg");
	this.shape_114.setTransform(56.7605,137.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#647C2C").s().p("AgiAAQAngLgOgdIAFAAQAAAFACADQACACAFAAIAAAKQACAjAcgGQAAAFgDAEQgPAXgPAAQgSAAgSgpg");
	this.shape_115.setTransform(50.5,124.3653);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5F7522").s().p("AgIAeQgCgCAAgFQAFAAACgDQADgDgegXQAOgaAjABIAAAFQAAAEACAEQAdAugyAFQgFAAgDgDg");
	this.shape_116.setTransform(51.1474,118.0495);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5D711F").s().p("AgKAPQgRgDAHgaQA1gEgMAQQgCACAAAFIgKAAIgJAAIAAAKIgKAAg");
	this.shape_117.setTransform(39.1239,121.7506);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#475F12").s().p("AgTgMQAagHAHAPQABACAFAAIAAAJQgFAAgDACQgLAHgGAAQgPAAABgcg");
	this.shape_118.setTransform(39.9985,116.6336);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5F7826").s().p("AgWAlIAAgKQgCgMgIgRIAAgKIAAgKQA6grACA/IAAAJQgGAAgBgCQgHgOgaAHQAAApAfgUQADgCAGAAIAEAAQgBAXgcAAQgKAAgPgDg");
	this.shape_119.setTransform(39.25,115.6014);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#6C852C").s().p("AgWAVQgCgbgIgWQBEgNgEA0IgFAAIAAgFQgiAAgPAZIAAgKg");
	this.shape_120.setTransform(50.2585,114.163);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#5E7725").s().p("AgYAAQBjgHhjALg");
	this.shape_121.setTransform(49.5125,109.4211);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#65862E").s().p("AgQgOQAKAFAJAAIAAgFIAKAAQAAAFABAFQAGATgGAAQgHAAgXgdg");
	this.shape_122.setTransform(48.7047,100.7554);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#617625").s().p("AgiAHQgCgBAAgFQA4gvARAqQACAEgGAVQgJADgJAAQgUAAgdgRg");
	this.shape_123.setTransform(51.7485,105.2029);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#779831").s().p("AgIgGQgDgDAAgFQAYAdgBAAIgUgVg");
	this.shape_124.setTransform(57.1696,105.7828);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6E8D2B").s().p("AgiC9IgFAAIAAgKIAAgKQARgDgCgQIgFgBQAAgFACgEQAIgUgehHQAvgLgjgWQgCgCAAgFQAAhAAUgEIAKgBQAYAAgqgYQgCgBAAgFQAmgdgfgmQgCgDgFAAQAigXgTgbIAFAAQAwAJAKAzIABAKQgQAYgJAaIAFAAQAQA8gdAlQgCACgFAAQgNATAeAYQADACAAAFQgDAmgYAQQgDABAAAFQAjAYgdBAQgBACgFAAIgSACQgdAAANgWg");
	this.shape_125.setTransform(61,120.3804);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CAC499").s().p("AgNA8IAAg8QAQgVgCgwIAFAAIAAAKIABAJQAVBWgpAiIAAgKg");
	this.shape_126.setTransform(75.4111,118.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E2D4B7").s().p("AgNAZIAAgKIAAgKQAQgDgFgaIgBgKQAEAAADADQAcAZgtApIAAgKg");
	this.shape_127.setTransform(77.4415,108.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#799932").s().p("Ag3CTQAoArAMhHQACgMgigKQgbg6BBgHIABgFQgvgrAugLQABAAAAgFQgpgnA9gKIAKgBIg5g/QgCgCAAgFQAbgpANgHQAEgCAFAAQAigJgEAdIAAAKIABAKQAGAbgRADQAAAPAEANQABACAFAAIAAAKIgFAAQACAvgRAXIAAA7IAAAKIAAAUIAAAKIgFAAQABAVgQgBIAAAyIAAAKIABAJQAFAWgQgBIAAAKQgEAAgEACQgMAHgKAAQgbAAgCg7g");
	this.shape_128.setTransform(70.6283,120.6468);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B7B587").s().p("AgGAiQgEgOAAgPQAQgDgGgaIAAgKIAJAAIAAAKIAAAKIABAKQAGAagQADIAAAKQgFAAgBgBg");
	this.shape_129.setTransform(76.1283,106.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6B7F2A").s().p("AgagFQAxgqADA0QACAUgLAAQgMAAgfgeg");
	this.shape_130.setTransform(39.6602,41.8991);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#DEDBB9").s().p("AgBAgQgOgPAHgkIAAgKIAAgKIAJAAQAEBGAGAAIgKAJQAAgFgCgDg");
	this.shape_131.setTransform(77.911,95.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C5BF93").s().p("AgDAoQAAgFgCgEQgLgSADggQAQABgCgVIAFAAQAPAdgNApQgCAEAAAFIgJAAg");
	this.shape_132.setTransform(77.3525,87.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#688726").s().p("AgjgYIAAgKQAjAAAhAFIABAFQAIAagWAfQgBACgFAAQgwgMgBgvg");
	this.shape_133.setTransform(61.6085,95.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7E8D3F").s().p("AADAiQgOgHgDgRQAFgFADgFQACgEAAgFIAAgKQAEgFADgGQACgEAAgFQARAbgMAzQAAABgFAAQAAgFgCgBg");
	this.shape_134.setTransform(52.5191,95.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#728530").s().p("AgWAAQBSgchDAmQgDACgDAAQgGAAgDgMg");
	this.shape_135.setTransform(61.2612,89.301);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#54691C").s().p("AAPAPIgTAAIgKAAQAAgFgCgEQgDgGgFgEQAKgFAKgDQAEgCAFAAQADAQAPAHQACABAAAFIgKAAg");
	this.shape_136.setTransform(50.5,97.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#50651C").s().p("AAAAPIgJAAQAAgFgCgEQgDgGgFgEQAFAAADgCQACgDAAgFIATAAIAKAAQAAAFgCAEQgDAFgFAFIAAAKIgKAAg");
	this.shape_137.setTransform(51,92.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#758E32").s().p("AgOgMQAQgRAHAPQABACAFAAQAAAFgCACQgDADgFAAQAFAEADAGQACAEAAAFIAAAFQgbgDgCgfg");
	this.shape_138.setTransform(48.5,92.6109);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#5E7126").s().p("AgOABIgBgEQAmAHgJAAIgcgDg");
	this.shape_139.setTransform(49.5938,87.7261);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5F6D24").s().p("AgTgCQBQAChQADg");
	this.shape_140.setTransform(49.0375,80.55);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#687B29").s().p("AgbgPQBigBhJAeQgHACgFAAQgRAAAEgfg");
	this.shape_141.setTransform(49.7696,84.9405);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#506B13").s().p("AgKgMIAAgKIAKAAIAJAAIABAKQACAjgFAAQgFAAgMgjg");
	this.shape_142.setTransform(61.0531,81.5875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#73942D").s().p("AgrgbIAUAAIAKAAQAXBHgEhHIAAgKIAKABQAxADgdBBIgKABQgRAFgMAAQg0AAAMhBg");
	this.shape_143.setTransform(61.4451,83.056);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#86A839").s().p("AAFARQgVgDACgaQAKgEAJAAIAAAEQAFAKAEAKQABAFAAAFIgKgBg");
	this.shape_144.setTransform(57.4875,65.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4E6019").s().p("AgRgKIAKAAIAJAAIAKAAIAFAAQADAVgJAAQgJAAgTgVg");
	this.shape_145.setTransform(49.773,69.4188);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#627529").s().p("AgRAKQgCgDAAgFQANgMgegUQgDgCAAgFQBCAHALArQACAEAAAFQgFAQgMAAQgPAAgZgcg");
	this.shape_146.setTransform(50,75.0913);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#748235").s().p("AgJARIgKAAIAAgKIAAgJIAAgKIAKAAQA0gNgoAjQgDACAAAFIgJAAg");
	this.shape_147.setTransform(50.9899,66.6372);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#647B2E").s().p("AgFAlQgTgPgDgfQAoAYgGg2IAKAFIgFAFQAeAPgbAaQgDADAAAFIgKAAIAAAKIAAAKQgEAAgDgDg");
	this.shape_148.setTransform(48.7701,63.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#66772E").s().p("AgHARQgKgBgKgiIAUAAIAJAAIAKAAIAKAAQASAlggAAIgPgCg");
	this.shape_149.setTransform(48.8398,56.182);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#5E6A23").s().p("AAHAUIgJAAQAAgFgDgCQgOgKgDgWQA7gFgSAjQgCAEAAAFIgKAAg");
	this.shape_150.setTransform(49.3166,52.264);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#7D953B").s().p("AgRgFQAFgFAGgDQAEgCAEAAQAWADgGAZQgBABgFAAIgKABIgHABQgRAAAFgVg");
	this.shape_151.setTransform(57.7851,54.8973);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#7D9D35").s().p("Ag2BsQAihFAEAKQACAEAAAFQASgRgkg2QgCgDAAgFQAegPAYgPIgFAAQhEgKA1gyIgEAAQg7AWArg8QABgCAFAAQAtgMAIAfQABABAFAAIABAKQAGAggRAIIATBGIABAKIgFAAQACAUgRgBQgEAhAMASQACAEAAAFIAAAKIAAAKQgFAAgBABQgXA5gXAAQgXAAgYgwg");
	this.shape_152.setTransform(72.5,83.5431);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#657E24").s().p("AghAaQAbgiAMgSQAFgHAPAAQAPALgNAdQgCAEAAAFQAAAFgDABQgSAMgOAAQgNAAgLgIg");
	this.shape_153.setTransform(61.4142,74.7349);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#87AB37").s().p("AgHAaQAMgdgOgLIAAgKIAAgKQAkAZgeApQgBADgFAAQAAgFACgEg");
	this.shape_154.setTransform(65.0141,72.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#5D7623").s().p("AgNBIIgFAAQAAgFgCgEQgDgLgFgKQAFAAAAgBQAHgcgMgoQAFAAACgCQADgDAAgFQAFAAAAgBQAHgagWgDQAAgFgBAAQgPgDAGgWQAvgPAUAkQACAEAAAFQgSAwgGAKQgBACgFAAQAoAWAAAbIAAAKQgZAcgJAUQgBACgFAAQgYgOAKgQg");
	this.shape_155.setTransform(60.9146,60.0794);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DCD2AC").s().p("AgECMIgBgKIgThGQARgIgGggIgBgKIAAgKQAAhKgKhBQAdAAgGAoQgQBhAqBcQgZgGAAA4g");
	this.shape_156.setTransform(78.5,69.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#779730").s().p("AgRAFQABAAAAgFQgWgCACgbIAAgKQAiABAjAEIAAAFQASAvg5AUQgFACgFAAQgigZAhgKg");
	this.shape_157.setTransform(71.6786,63.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#76942F").s().p("AgfgTIgBgKQAvADASAaIgGAAQgUAegMAAQgSAAgIgxg");
	this.shape_158.setTransform(70.25,53.2943);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#91B83D").s().p("AgCAhQgPgPADggQAQABgCgVIAFAAQAUAwgRAOQgDACAAAFQgFAAgCgCg");
	this.shape_159.setTransform(34.4887,95.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#889246").s().p("AgTAJQAKgOALgNQADgCAFAAQARADgLAYQgBACgFAAQgFAAgCACQgFAKgGAAQgGAAgFgMg");
	this.shape_160.setTransform(29.0161,97.4205);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#DFD4B4").s().p("AAUAnQgJgxgjgTQAaACAOgJQAEgDAFAAQAAAFgCACQgDADgFAAQAIATABAoIABAKQgFAAAAgBg");
	this.shape_161.setTransform(20.5,98.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E3D9B8").s().p("AAQArQgQgNgYgiQAlADgDgrIAFAAIABAKQAGAggRAHQAFAKAHAIQADACAFAAIAAAKIAAAKQgFAAgEgCg");
	this.shape_162.setTransform(20.5,87.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#5D7823").s().p("AgPAAIAAgJQA4AFguAMQgFACgFAAIAAgKg");
	this.shape_163.setTransform(40.5545,85.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#5F7624").s().p("AgTB4IgBgKIgJgoQARABgGgWIgBgJQAAgFACgBQAbgJgxgPQAAgFADgCQAQgNgTgxQAFAAADgDQAQgMgYgZIAAgKIAKAAQAKgFALgEQAEgBAEAAQAAAFACABQAiAVgQAhIgBAKQgEAdgYALQAAAFACAAQAvATAABBQAAAFgCABIgIAEQAMAegzAAIgKAAg");
	this.shape_164.setTransform(39,98.3125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#4D6419").s().p("AgNASQAAgFgCgEQgDgGgFgEQAPgYAIAMQABACAFAAQAAAFADACQAjAWgvAAIgKAAg");
	this.shape_165.setTransform(39.358,76.4997);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#54661D").s().p("AgHAYQgDgegMgSIAKAAQBBACg1AoQgCACAAAFIgFgBg");
	this.shape_166.setTransform(39.3226,81.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#9AB04D").s().p("AgOAhIAAAKQgFAAgBgCQgIgUgGg5QARAQADgQIAAgKQAOgVAZgIQAFgCAFAAQAAAGgDACQgCADgFAAQAEA9AFA6IABAJIgKAAIAAAKIAAAGQgggOgHgfg");
	this.shape_167.setTransform(32.5,81.05);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#647D26").s().p("AgSAqQgHgggIgaQBOg9gOBPQAAABgFAAQAIAjglAFIgKAAQgFAAAAgBg");
	this.shape_168.setTransform(37.3554,63.9682);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#627C28").s().p("AgWBQQgGg7gEg8QAFAAADgCQACgDAAgFQAAgFgBgEQgEgLgFgKIAAgKIAKAAQBSAJgoArQgDADAAAFQgFAAgBgCQgJgMgOAYQAFAFADAGQACAEAAAEIAAAKIgKAAQAMASACAfIAFABIAAAKIAAAKQgFAAgDACQgLADgKAFIAAgKg");
	this.shape_169.setTransform(38.2781,78.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#8AB33F").s().p("AAAAmQgNgigBgrIAKAAQAHAbAHAfQAAABAFAAIAAAKIgKAAIAAAKQgFAAAAgCg");
	this.shape_170.setTransform(34.5,66.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C4BE92").s().p("AACBTQgHgIgFgKQAQgIgGggIAAgKQAAgFgCgEQgLgRADghIAAgKIAAgKQAQACgCgWIAFAAQAEBkgDA7IgBAKQgFAAgCgCg");
	this.shape_171.setTransform(22.0644,81.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E0D7B5").s().p("AAAA/QgUhCAZASIAFAAQgEgtgegYQAaAHAHgPQABgCAFAAQAAAFgCAEQgDAGgFAFQAFAKAHAHQADADAFAAIAAAnIAAAKIgFAAQACAWgRgCIAAAKIAAAKQgFAAAAgCg");
	this.shape_172.setTransform(20.5,70.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B0AC7D").s().p("AgDAlQgHgHgFgKQAFgFADgGQACgEAAgFIAAgJIAAgKQAFgFACgGQACgEAAgFIAKAAIAAAKQAHApgRASIAAAKQgEAAgDgDg");
	this.shape_173.setTransform(22.6149,64.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#BFB58C").s().p("AgBATQgPgHAHgaQAFgFAFgDQAEgCAFAAIABAKQAGAfgRAIQAAgFgBgBg");
	this.shape_174.setTransform(24.0169,54.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#DFD6B6").s().p("AAAAzQAAgFgBgEQgNgZgFgjQALgzAVAdQACACAFAAIAAAKQgFAAgEACQgGADgFAFQgGAaAOAHQACABAAAFIAAAUIAAAKIgKAAg");
	this.shape_175.setTransform(23,55.1642);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#627C29").s().p("AgbATQAFAAAAgBQAEgSgJgKQAKAAAIgEQACgBAAgFIASgBQAmArguAAQgLAAgTgDg");
	this.shape_176.setTransform(37.8252,55.443);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#86AA39").s().p("AgBAVQgPgHgDgQQAQgjAUASQADACAAAFQAAAFgCABQgIAEgKAAQAKAJgFATQAAABgFAAQAAgFgBgBg");
	this.shape_177.setTransform(35,54.6443);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#667C2C").s().p("AgRANQAphFgHA6QgDAXgLAAQgHAAgNgMg");
	this.shape_178.setTransform(28.7755,46.022);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#667F2B").s().p("AgVgRIgBgKQBPgUg5BHQgCADAAAFQgNgPgGgig");
	this.shape_179.setTransform(39.3273,49.0741);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#61752A").s().p("AgtC/IAAgKIAAgKIAAgKIAAgKIABgKQADg7gEhkIAAgKIAAgoIAAgKQARgSgGgqIgBgKIAAgKIAAgUQARgIgGggIgBgKIAAgKQAFgFADgGQACgEAAgFIAKAAQA8gBgLAzQAAAFgCADQgNARgFAZIgKAAQg6gCBEAgQAAAFACAFQAdBJhTgCQAzAEAKAsIABAKIAAAKQgDARgRgRQAGA7AIATQABACAFAAIAAAKQABA3g8gFQAuALADATIAAAKQgFAAgCADQgNAMgJAPQAJAYAOgVQABgDAFAAQAAAFgCADQgPAUgMAAQgYAAgQhEg");
	this.shape_180.setTransform(27.5776,75.1779);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#DACEB1").s().p("AgKAjQgCgkgHghQAUAHAEgQQAAgBAFAAQAAAFACABQAVANghABQAMAOgLAZQgBAFAAAFQAAAFgBAEQgDAGgFAFIgBgKg");
	this.shape_181.setTransform(26.0178,46.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D8CFA6").s().p("AgdAgIAAgKQAYhaAcAmQACADAFAAQAAAFgDACQgeAbgaAjIAAgKg");
	this.shape_182.setTransform(32,36.1131);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#76922E").s().p("AgSAAQBKgLhKAQg");
	this.shape_183.setTransform(67.875,44.2896);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#6F8634").s().p("AgYgVQAKAFALADQADACAFAAIAKAAQAAAFACACQADADAFAAQAAAEgCACQgRARgKAAQgRAAgDgrg");
	this.shape_184.setTransform(64.5,36.5485);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#5A6B21").s().p("AgTAAQBOgKhOAPg");
	this.shape_185.setTransform(58.975,47.3259);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5E7122").s().p("AgWgBQgBAAAAgFQA0ANgFAAQgFAAgpgIg");
	this.shape_186.setTransform(57.4126,42.9821);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#5A6828").s().p("AgVACQgDgCAAgFQA+gwgRBMQgBABgFAAQgWgGgOgQg");
	this.shape_187.setTransform(49.4652,46.8666);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#5E6927").s().p("AAOAaQgEgCgFAAQgJgZgRgRQgDgCAAgFQApACAGAJQACAEAAAFQgEAfgGAAIgBAAg");
	this.shape_188.setTransform(48.5,37.9118);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#DCD3A4").s().p("AAfAuQAAgFgCgBQgagLgLgXIgKAAQgSABgMgeQAZgyAgA9QACAEAAAFQA1ANgVAcQgCADAAAFIgKAAg");
	this.shape_189.setTransform(61.921,30.6739);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A8AE61").s().p("Aj5LuQAAgFABAAQA+gOgDgfIAAgFQg/Aag5gzQAQACgFgWIgBgKIAAgKQAVAHAEgQQAAgBAFAAQA2AUAXAXQADACAAAFQAxgLAqgRQAEgCAFAAQgLgxgRgpQgCgFAAgFQArAxgWhJQgCgEgdgWIAAAKIAAAKQgFAAgBgCQgMgUgCgcQBPAdg1hhQgBgCgFAAIAAgKIAAgKQAFAAABgBQASg5gigWQAAgFgBAAQgTgFgUAAIAAgKQBNgDgphLQgBgCgFAAIAAgKIAAgKIAFAAQgEgKgBgUQAQACgFgWIgBgKIgBgKQgCgQgRAQQAAgFgCgDQgQgTgqAHIAAgKIAKABQAqAGASgRIgFAAQAUhbhfgIIAAAeIAAAJIgKAAIAAgJIAAgeIgBgKQgBgogIgUQAFAAADgCQACgDAAgFQAZBoArg4QACgDAAgFQAFAAABgCQALgZgRgDIAAgKQgDgTgvgLQA8AFAAg3IAAgKIAAgKQAHAfAhAOIAAgFQAYAZgQANQgDACgFAAIgFAAQABAWgQgCQgEAiAQAOQADACAFAAQAyAQgcAJQgCAAAAAFQgFAAgBADQgKAOgiAWQAIA2AhgMQAEgCAFAAQA/ADgNghIAIgEQACgBAAgFQAAg/gwgUQgCgBAAgFQAZgKAEgeIABgKQAQgggigVQgCgCAAgFQAFAAAFgBQAvgNg5gGQAAgFACgCQA2gphCgCIAAgKQA9ADgngaQgCgCAAgFQAAgFACgCQAogshSgJIAAgKIAKAAQAmgFgIgjQAFAAAAgBQAOhQhPA9IgKAAQABAsAOAjQAAABAFAAQAFAKADALQACAEAAAFQgFAAgFACQgZAIgPAUIgBgKQgKgtg0gEQBTACgdhJQgBgFAAgFQhFggA7ACIAKAAQAFgZANgRQACgDAAgFQAKgzg8ABIgKAAQAAgFACgEQAKgagMgPQAhAAgUgNQgDgCAAgFIAAgKIAAgUQAKAKAKAFIAAgFQAagiAfgdQADgCAAgFQA8gOgKgaIAIAEQACABAAAFQA8gbBZAHIAKAAQAMAfASgBIAKAAQAMAXAaALQACABAAAFQgFAAgEgBQgLgEgKgFQAEBJAsgtQACgDAAgFQAKAPAIAQQACAEAAAFQAKAKAMAIQADACAFAAQACAcALAUQACACAFAAQABAsANAjQABABAFAAQAKBBAABLIAAAKQgFAAgBgBQgIgfguAMQgFAAgBADQgrA7A7gWIAFAAQg2AzBFAJIAFAAQgZAPgeAPQAAAFACAEQAlA3gTAQQAAgFgCgEQgEgKgiBFQAyBlAshtQABgCAFAAQgHAlAPAQQACACAAAFIgKAAIAAAeIAAAKIgKAAIAAgKQAFgdgjAJQgFAAgEACQgNAIgcAoQAAAFACADIA6A9IgKABQg+AKAqAnQAAAFgBABQgvALAwArIgBAFQhCAIAbA5QAjAKgCAMQgMBIgpgsQADBQAwgcQAEgCAFAAQAAAKAEAIQABACAFAAQAAAFgCAEQgIAQgKAPQAAgFgCAAQgugSgWArQAQA0AigKQAFgCAFAAIAAAUIAAAKQAAAFgCADQgDACgFAAQAAgFgCgBQgegTgcAZQAYA2ASgVQADgDAFAAIAAAKQgBAdgTALQAAgFgDgDQgQgZgVAXIAAAUIAAAKQgFAAgEgCQgGgDgFgFIAAgKQgCgWgSgIQAKAAAIgEQACgBAAgFIAAgKQAFAAABgCQAWgxgcALIgFAAQAPgtAUgtIgFAAQgIhFg5A7QAAAUAFAKIgFAAQAVAwgKArIgBAJIAAAKIAAAKQAAAFgCAEQgDAGgFAFQgLApAfgBIAKAAQBIAUANAoIgFAAQAAgFgBAAQiXgggcA5QBCAJBUgSIAKgBQAAAFgDADQgCACgFAAQAJAfAPAbQABACAFAAQAAAFgCABQgoAWg6ACIgKAAQgcgCgWgIQAGgVgMAIQggAThHgGQgFAAgDgCQgrglgngpIAAAyIAAAKQgFAAgEACQgLADgKAFQAPAZAtAAIAAAFIgKABIgNAAQg7AAgcgfgAhZK3QBFgChFgDgAkhKKIgBAKQgBAhAggDQAFAAAEgCQA5gog+AAQgOAAgUACgAgJJOQBcAggzhAQgCgDAAgFQAFAAABgCQALgSANgeQgFAAgBgCQgQgkAMggIAKAFQAGhchCAvQAPBTAOA6IABAJIgFAAQAFAvgnADgAhFH+QAAAFABAFQASA7AfgnQAAgFACgEQAKgogTAAQgOAAgdATgAhOHAQAEACAFAAQALAKAFgJQA3hWhHAjIgFAAQABAWgQgCQAAAUALAIgAgpFkQACgBAAgFIAFAAQgBgYgOg4IAAgKIAFAAQgIhJgHgbQAAgFACgDQAMgQg2AEQgHAbARADIAKAAQAAAFgCABQgIAEgKAAQAKAKAFAKIgFAAIgKAAIgUAAQgFAzAkAIIAJABIABAKQABARgWgHQAFBjA1gXgAAYFnQABABAFAAQAjAAgEgUIgBgKQAFAAAAgBQAThBhAgEIgKAAIgKAAIAYBjgABeFIQABACAFAAIAFAAQgRAcA0gIQAFAAABgCQAdhAgjgYQAAgFADgBQAYgQADgmQAAgFgDgCQgfgYAOgTQAFAAACgCQAdgmgQg8IgFAAQAJgaAQgYIgBgJQgKgzgxgJIgFAAQAUAbgjAXQAFAAACADQAgAlgnAdQAAAFACABQArAYgZAAIgKABQgUAEAABBQAAAFACACQAjAWgvALQAeBHgIAUQgCAEAAAFIgKAAIgUAAQAFAUAJASgAAVDrQBFAQhGgVQAAAFABAAgAAAC0QAfBIAkg1QADgEAAgFQgcAGgCgkIAAgKQAzgEgcgvQgDgEAAgFIAFAAQAEg1hFANQAIAWACAcIAAAKQAfAYgDAEQgDACgFAAIgFAAQAPAdgoALgAhjCHIAAgFQA1ANACghIgFAAIAAgKIAAgKQgCg/g6ArIAAAKIAAAKIAAAFQgKAAgKgFQgKAyAogFgAAAAeIAAAFQA/gHgQAAIgvACgAAKgJQAAAFACACQAqAXAagLQAHgUgDgFQgIgTgQAAQgUAAgeAZgABdgLQArAugug2QAAAFADADgAAfg7QgBgFAAgFIAUAAIAKAAQAFAAAAgBQAMgzgRgcIgKAAIgUAAQgFAAgBgCQgHgOgRAQQACAgAcADIAAgFIAKAAIAKAAQAAAFgCAEQgDAGgFAFQgFAAgFACQgKADgKAFQAFAFADAGQACAEAAAFIAAAFQgKAAgKgFQArA1gMgrgABuiBQACAxAwALQAFAAABgCQAWgfgIgbIAAgFQgjgFgjAAIAAAKgAB4ipQADARAMgGQAngXgLAAQgIAAgjAMgAALi4QA/AJhAgOIABAFgACrjGIAJgBQAehCgygDIgKgBIgKAAIgKAAIAAAKIgKAAIgUAAQgPBSBWgVgAAAjlQgEArAcgNQBIgehaAAIgGAAgAAAj+QBRgChRgDgAgGlWQAdAUgNANQAAAFACADQAtAxANglQAAgFgCgEQgLgshCgHQAAAFADACgACqlnIAAAKQgPAAgFAHQgNATgbAiQAZATAggWQADgCAAgFQAFAAABgCQAfgrglgZIAAAKgAAtl6IgFgBQAAgFACgCQAogjg0AMQAAgFACgCQAbgbgdgQIAFgFIgKgFQAGA3gogZQADAgASAQQADACAFAAIAAAKIgKAAQAoAtgFgsgABamjQgCAbAWADIAKAAIAFAAQgKAQAZAOQAFAAABgCQAJgUAZgcIAAgKQAAgbgogXQAFAAABgCQAGgKASgwQAAgFgCgEQgUgkgwAPQgGAWAPADQABAAAAAFQgFAAgEACQgGADgFAFQgHAbAbgGIAKgBQAAAFgCADQgDACgFAAQAMApgGAcQgBABgFAAIAAgFQgKAAgKAFgADRnLQgCAbAXADQAAAFgCABQggAKAiAYQAFAAAEgBQA7gVgSgwIAAgFQglgEghgBIgBAKgAALnjQAzAKgWguQAAgFACgEQATgkg9AFQADAXAPAKQACACAAAFIgKAAIgTAAQAJAjALABgAiLoHQADARAPAHQACABAAAFQBXAQgvg4IgUAAQAAgFgDgCQgHgGgHAAQgNAAgKAXgADIolQAOBZAuhFIAFAAQgSgbgvgDIAAAKgAhjpXIABAKQAHAjAMAPQAAgFACgDQAtg4gmAAQgLAAgSAEgAAApXQAAAFADADQANAQAYAGQAFAAABgBQAKgvgTAAQgNAAgYASgAjHpNQAdAdAFgnQAEgbgHAAQgJAAgWAlgABkpNIAAAFQAvgJgJAAIgmAEgAC+prIAAAFQAsgKgIAAIgkAFgAhjqJQA4A4gDgtQgCgdgQAAQgNAAgWASgABRp6QBfAUhggZQAAAFABAAgAgGq9QAQARAKAZQAFAAAEACQAGADAFgjQAAgFgCgDQgGgKgpgCQAAAFADADg");
	this.shape_190.setTransform(47,106.2533);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E4D9AB").s().p("AhoAoQgPgDAGgWQAlgaAzgRQACgBAAgFQAyALAbgPQACgBAAgFQAXgDAiAkQADACAAAFIgKAAQhZgHg8AaQAAgFgCgBIgIgEQAKAag8AOQAAgFgBAAg");
	this.shape_191.setTransform(45.4143,28.7883);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F1D2A0").s().p("AAPCCIgxAAIAAgFQgbACgDgRIgKAAIj6AAIAAAFQgbgCgDARIgKgBIksgxIAAgFQgbACgDgRIgKgBQgugIg2gBQAAgFgBAAQg7gKgogZQAxgUAmggQADgCAAgFQgSg6BYAIIAKAAIAAAKQgFAAAAACQgIAZgbADQAAAFgBAEQgJAfgUATQBhA/CZAHIAKAAQCmAxDNgNIGOgaQA5AIA/ACIAKAAQDBAJCdgcIAKgBQANgbAZgQQACgCAAgFQAugJAjgSQAEgCAFAAQhMgcg2gCIgKAAQg+gagHgiIgBgKIAAgKIAAgKIAKAAIAKAAQAAAFACADQA5BNCNgFIAAAFQAtAAAFAjQAAAFgCAAQhDAUg9AYQAAAFgCADQgXAcgZAYQhcAIhhgIQkagXjlA1IgKAAg");
	this.shape_192.setTransform(90.5,179.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DAB178").s().p("Aj0BjIAAgKIAyAAIAKAAQADgRAbACIAAgFQCiAcBBgzQACgCAAgFQgGgVAIgIQAIgGgEgCQhBgVhGAmQgFAAgEABQhUAeADhGQAsg9AkgOIAAAFQgUAdAogOIAAAFQAjgMAjgQQAEgCAFAAIABAKQAHAiA+AaIAKAAQA2ABBMAdQgFAAgEABQgjATguAJQAAAFgCABQgZARgNAbIgKABQh3AViNAAQgrAAgugCg");
	this.shape_193.setTransform(150.5,178.4003);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DDD5A7").s().p("AgTA8IAAgKIAAhtQAXA1AOAbQACAEAAAFQgmAFAEAZg");
	this.shape_194.setTransform(162,141.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cactus2, new cjs.Rectangle(0,24.3,181,168), null);


(lib.cactus1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF8A54").s().p("AAoAUIhZAAQAAgFADgCQAQgNgTgTQAqAHAIgFQAEgCAFAAQgIApAwgHIAAAFIgKAAg");
	this.shape.setTransform(112,137);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86A452").s().p("AgiAeIAAgeQAcgVAggQQAEgCAFAAQAAAFgCADQgbArgoAcIAAgKg");
	this.shape_1.setTransform(113.5,128);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#643C1A").s().p("AgwADIgBgEQA7ADAogIIAAAFQgIAIghAAQgWAAgjgEg");
	this.shape_2.setTransform(88,145.2362);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6A187").s().p("AgxgFIBZAAIAKAAIAAAJIgKAAQgQACgPAAQgjAAgXgLg");
	this.shape_3.setTransform(85,147.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF9A83").s().p("AAtAFIgKAAIgKAAIhPAAIAAgJIBjAAIAKAAIAAAJIgKAAg");
	this.shape_4.setTransform(95.5,147.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663A16").s().p("AhLANQgBAAAAgFQBQggBKANIgGAAQAKANgUAFIgJABQgLgJgTAAIgKAAQgUARgkAAQgPAAgRgDg");
	this.shape_5.setTransform(93.75,141.2298);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDB185").s().p("Ag/A3Qg1gOAqgsIgFAAIAAgFQgkAVgTgkQAygiAyAJIAAgFQBbgLA8AwQADADAFAAQAFAAABABQAUA3hggbQAAAFgBAAQg9AMgvAXIgJgBg");
	this.shape_6.setTransform(90.4554,135.4058);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7DFB9").s().p("AgRAFQAFgFADgFQACgEAAgFQAFAAADACQAqAXg8AEIAAgKg");
	this.shape_7.setTransform(155.8063,137.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99693A").s().p("Ag1AdIAAgFQgwAHAIgpIAAgKIAAgUQAdgKATAfQACAEAAAFQAmAHAXATQADADAFAAQAFAAAEgCQAygTALAfQgFAAgEACQgeANgiAAQgjAAgpgPg");
	this.shape_8.setTransform(122.4489,136.1395);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C88D59").s().p("AAbAOQgYgTglgIQA2gKANAeQACAEAAAFQgFAAgDgCg");
	this.shape_9.setTransform(121.5,136.3765);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9C28C").s().p("AkNCCQAxgQAKg2IABgKIBaAAIAKAAQBQAdA8gbQAEgCAFAAQgLgggxAVQgEABgFAAQAAgFgCgEQgNgfg3AKQAAgFgCgDQgSgfgeAKIAAATIAAAKQgFAAgEACQgJAFgqgHIAAgKQATAAAIgLQADgDAAgFQApgcAbgsQACgDAAgFQASgMAKgTQACgEAAgFIAKAAIgBAKQgEAUgPAKQAdAzBQAEIAAAFQBSAIBOALIAKABQAjATAsAOQABABAAAFQAAAFgCAEQgDAGgFAFIAAAKIAAAFQgvADgXAWIgKAAQiLAQiMAOIAAAFQgbgCgDARIgKABQg3AHhLACIAAgKg");
	this.shape_10.setTransform(128,134);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9FB674").s().p("AgnBaIAAgKIAAgKQAuhEAbhZQABgCAFAAIgBAKQgYBegsBLIgKAAg");
	this.shape_11.setTransform(124,111);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B59E66").s().p("AiVAOQAVgIAIgVQABgFAAgFIAAgKQBAgLApgcQAqACAqAGIAKABQAUAOAdALQABAAAAAFQAKAKAIAMQACADAAAFQgFAAgDgCQg8gwhbAKIAAAFQgygIgyAhQATAlAkgWIAAAEIAFAAQgrAtA2AOIAJABQAAAFgBABQgVAFgRAAQg5AAgYg9g");
	this.shape_12.setTransform(88,134.5962);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BEA07A").s().p("AB9APQiGgFh9gOIAAgKQCZAJBzAPIABAFIgKAAg");
	this.shape_13.setTransform(66.5,145.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#643B17").s().p("Ag1AAQgBAAAAgEIBjAAIAKAAQgZAJggAAQgXAAgcgFg");
	this.shape_14.setTransform(62.5,143.5104);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#855F37").s().p("ADXBfIhkAAIgKAAIhaAAIgBgFQhygQiagJQgFAAgDgDQghgagTgoQAKgJAUgBIAKAAQB7ALBNgfIgIgEQgCgBAAgFQAqARAMgZQABgCAFAAQAAAFgBAEQgIAWgVAJQAgBQBWgZQABgBAAgFQAvgXA+gMQABAAAAgEQBgAagUg2QgBgCgFAAQAAgFgCgEQgIgLgKgKQAiglAdAUIAQgGQAGgCAFgFIAAAeIAAAKQAAAFgDADQgIAMgTAAIAAAKQATAUgQAMQgDACAAAFIgBAKQgKA2gxAQIgKAAgAAuBQQBVAMAOgRIAAgFQgoAJg8gEIABAFgAjVA8QBCAMArgRIgKAAIhkAAQAAAFABAAgABLAtQAAAFABAAQA8ALAdgaIAKAAQATABALAJIAKgBQATgFgJgOIAFAAQgVgEgVAAQg2AAg7AYg");
	this.shape_15.setTransform(78.5,137.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A87B4C").s().p("AgTAPIAAgnQATAPASARQACACAAAFIgKAAQgTABgKAJIAAgKg");
	this.shape_16.setTransform(49,134.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0B374").s().p("AA3BaQiJgGhmgsQgFAAAAgBQgJgrgugtQCTgWChgNIABgFQAhAgBDgCIAKAAIA6AZQACAAAAAFQAAAFACABIAIAEQhNAeh7gLQAAgEgCgCQgSgSgUgPIAAAnIAAAKQATApAhAaQADADAFAAIAAAKIgKAAg");
	this.shape_17.setTransform(46.5,136);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFD1A3").s().p("AlOA0QAAgFgCgCQgwgrgygnQA+grBXgWQABAAAAgFQCLACBkgHIABgFQAKAFAHAHQADADAAAFIgBAFQiiAMiTAXQAuAtAJArQAAABAFAAQBmArCKAHIAKAAQB8AOCHAGIAKAAQAgARA6gHIAKAAIBQAAIAKAAIAAAFQg+ABg7AAQlwAAkYhCg");
	this.shape_18.setTransform(55.5,136.8368);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AA255").s().p("AgnAKQAAgFgDgDQgHgGgKgFQAAgFgCgEQgDgGgFgFIAAgKQA8AcANAdQABACAFAAQAYAKAkAFIAAAFIgKAAIgGAAQg+AAgfgeg");
	this.shape_19.setTransform(57,126.0034);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9DB572").s().p("AASArQgcglgOgyQAcAfATAnQACAEAAAFIAAAKQgFAAgCgCg");
	this.shape_20.setTransform(47.5,118.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A6BB82").s().p("AAJAcQgNgcgKgdQAbANABAkIABAKQgFAAgBgCg");
	this.shape_21.setTransform(42.5,110);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ABC37B").s().p("AAJAcQgNgcgKgdQAaAMADAlIAAAKQgFAAgBgCg");
	this.shape_22.setTransform(39.5,104);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#80A14B").s().p("AgRgDQgCAAAAgFQApARgDAAQgCAAgigMg");
	this.shape_23.setTransform(66.9564,115.9496);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#85A05C").s().p("AhAiOQAoA3AUAUIAAgEQAQAHALAYQAhBIAJBpIAAAGQhHiGg6iXg");
	this.shape_24.setTransform(61.5,96.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8CAE55").s().p("AgTgMQAAgFgCgEQgDgGgFgFIAKAAIAKAAQAFAAAAABQAHAjAbANQAAAFgDADQgGAIgHAAQgOAAgTgtg");
	this.shape_25.setTransform(51,98.3275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#88AE4E").s().p("AAGAXQgVgGgJgVQAaAGADgQIAAgKQAKAKAIALQACADAAAFIgKAAIgKAAQAFAFADAGQACAEAAAFQgFAAgEgCg");
	this.shape_26.setTransform(47.5,94.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8EA56F").s().p("AAHAcQgVgOAAghIAAgKQATAUAIAeQACAEAAAFQgFAAgDgCg");
	this.shape_27.setTransform(53.5,79);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#90A372").s().p("AALAcQgXgPgHggIAAgKQATAUASAVQACADAAAFIAAAKQgFAAgEgCg");
	this.shape_28.setTransform(50,74);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#87A164").s().p("AARAbQgagRgPgdQAFAAACgCQADgDAAgFQAVASAQAWQACAEAAAFIAAAKQgFAAgDgDg");
	this.shape_29.setTransform(45.5,69);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ACBF7B").s().p("AANAcQgUgZgMggQAdAPAJAjIABAJQgFAAgCgCg");
	this.shape_30.setTransform(33,91);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A9BD7A").s().p("AASAXQgWgXgUgYQAkAIAMAfQABAFAAAFQgFAAgCgCg");
	this.shape_31.setTransform(26.5,83.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B6C88E").s().p("AAQASQgbgMgNgZQAeAJAQAWQADADAAAFQgFAAgEgCg");
	this.shape_32.setTransform(32.5,82);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#849554").s().p("AAGANQgPgIgPgJIAAgKQAbACAUAMQACAAAAAFIgKAAIAAAKQgFAAgEgCg");
	this.shape_33.setTransform(8.5,69.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9CA085").s().p("AAUANQgcgJgVgSQAdAFAcAJQACAAAAAFIAAAKQgFAAgFgCg");
	this.shape_34.setTransform(3,67.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#95B36B").s().p("AA3CQQgFAAgCgDQgXgWgUgZIAFAAQglhlg5iKIAKAAIAKAAQAZAyAXAzQACAEAAAFQAQADAHAPQABACAFAAQgHAaAPAHQACABAAAFQAKAKAMAHQADADAFAAQgBAzAdAWQACACAAAFIAAAKQgCAMgOAAQgGAAgIgCg");
	this.shape_35.setTransform(39.5,79.6021);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#96B170").s().p("AAUBLIgKAAQAAgFgCgEQgag/gLhNQAjA/AWBNQACAEAAAFIgKAAg");
	this.shape_36.setTransform(30,57.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#98AF77").s().p("AAmA6QgdggghgaQAAgEgCgFQgIgZgKgZQAvAzAnA8QADADAAAFQgFAAgCgCg");
	this.shape_37.setTransform(39.5,60);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ACBE92").s().p("AASAmQgfgegLgvQAcAfATAnQACAEAAAFQgFAAgCgCg");
	this.shape_38.setTransform(32.5,48);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A3B286").s().p("AAKAxQgQgzgSgvQAcAWATAdQACADAAAFQgFAAgEgCQgGgDgFgFIAJAoIABAKQgFAAAAgBg");
	this.shape_39.setTransform(22.5,35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#87AC53").s().p("AAnF3QABiEgQiKIgFAAQgFA3AAA3QgOAKgDAVIgCAJQgUgngUAdIAAgKQggjVgIjsIAAgKIAAiWIAKAAQAIAhACAlIAAAKQASAWAHAlQAAABAFAAQAWCLA3BlQACAEAAAFQAgiTADi2IAFAAQAFCUgKBwQgTDYgQDVg");
	this.shape_40.setTransform(64.5723,56.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B4C79D").s().p("AgEBUQgFhUAAhUQAJAAAIAEQACABAAAFIgKAAIAACVIAAAKIgEgBg");
	this.shape_41.setTransform(56,26.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A5B488").s().p("AgJAaIAAg7QAUgGgBAQIAAAKIgFAAQACAkgQANIAAgKg");
	this.shape_42.setTransform(74.0272,7.4182);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#86A851").s().p("AgnAtQArgaALg+QAAgBAFAAQABAhANgVQABgCAFAAQAAAFgCAEQgmBGggAAIgHAAg");
	this.shape_43.setTransform(121,91.5411);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D0DFB5").s().p("AgPAcQgEgIAAgKQATgKAFgcQAAgBAFAAQAAAKAEAIQABACAFAAQAAAFgDACQgMAMgOAKIAAAKQgFAAgBgCg");
	this.shape_44.setTransform(132,79);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#92B167").s().p("AhUBzIAAgKQATgaAKgjIABgJQBHhNA9haQACgCAFAAIAAAKQAAAFgBAEQgIAWgVAJQAAAFgBAEQgRArgWAlQgFAAAAABQgGAcgSALQAAAKAEAIQABACAFAAQAAAFgCABQghAYgZAeQgFAAgBACQgFAIgEAAQgFAAAAgUg");
	this.shape_45.setTransform(131.5,75.5178);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A6BF84").s().p("AgiAjIAAgKIAAgKQApgOAVggQACgDAFAAQAAAFgCAEQgVAlgkAXIgKAAg");
	this.shape_46.setTransform(135.5,55.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7F9251").s().p("AgVATQgIgEgKAAIAAgKQAngKAfgRQAEgCAFAAIAAAKQgFAAgDADQgVAVgeAPQAAgFgCgBg");
	this.shape_47.setTransform(154,64.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A2BA7D").s().p("AgdAjIAAgKIAAgKQAfgVAVgkQACgCAFAAQAAAFgCAEQgXAtgiAjIAAgKg");
	this.shape_48.setTransform(143,58.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4A6F15").s().p("AghAxQAIhCAWgDIAJAAQAHghAXgMIAAAFQgLBrgyASIgFABQgIAAAFgRg");
	this.shape_49.setTransform(105.4122,95.106);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9DB87E").s().p("AgiAkIAKAAQAfgrAXg2QAAgCAFAAQAAAFgBAEQgTA7gdAzQgFAAgCACQgFAGgDAAQgGAAABgcg");
	this.shape_50.setTransform(113.4882,82.4233);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#819F53").s().p("AgECyQABgkgTgRQgCgDAAgFQATh6gTinIAAgJQAbBuAMBUIAKgFQACAfgUAMQgCABAAAGQASBZgbAjg");
	this.shape_51.setTransform(86.5091,80.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9CB784").s().p("AgOgUIAKAAQAPgBgBAVIAFAAQAAAEgCAEQgFANgFAAQgJAAgIgpg");
	this.shape_52.setTransform(83.5,56.055);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#94AA74").s().p("AAPBZQgFgngTgUIgBgKQgJgyAAg7QAaBPANBaIAAAKIgFgBg");
	this.shape_53.setTransform(81,43);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#95B171").s().p("AhAA3QA0g+BBgyQACgCAAgFIAKAAQAAAFgCADQg0BIhLAxIAAgKg");
	this.shape_54.setTransform(126.5,65.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CADBA7").s().p("AgEA2QgFgYAAgZIAAgJIAAgyIAJAAQAAAeAFAcQAAABAFAAQAAAFgCAEQgDAGgFAFIAAAUIAAAKQgEAAAAgBg");
	this.shape_55.setTransform(105,63.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A1BD70").s().p("AgPAeIAAgUQAFgFADgFQACgEAAgFIAAgKQAQABgCgVIAFAAIABAKQAFA3gjAOIAAgKg");
	this.shape_56.setTransform(106.5559,65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B2CB8A").s().p("AgOAeIAAgUQAQgRAHgfQABgBAFAAIAAAKQgFAsgYAZIAAgKg");
	this.shape_57.setTransform(119.5,50);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A4B870").s().p("AgTA3IAAgeQASgqAPgtQABgCAFAAIAAAKQgLBEgcAzIAAgKg");
	this.shape_58.setTransform(107,44.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C2D4A6").s().p("AAAAyQgFgyAAgxQAQAhgHA4IAAAKIgEAAg");
	this.shape_59.setTransform(95.625,43);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C7D1AF").s().p("AAAAxQgFgxAAgxQAQAhgHA4IAAAKIgEgBg");
	this.shape_60.setTransform(94.625,21);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8CB254").s().p("AgDFeQAJhUgoguQAAgFADgEQATgagqg3IAAgKIAAgeQAUg3AAhKIAAgKQAfiLAIihIAAgKQAbA6gHBcIAAAKQAAAyAFAxIAFABIAABtIAAAKQAAAyAFAyIAFAAQAAAoAFAoIAFAAIgBAKQgTBVgnBBIABgKg");
	this.shape_61.setTransform(91.5,36);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#ADB296").s().p("AgQAfQgDgGgFgFIAAgKQAYgTATgbQABgDAFAAQgMAqgUAjQgCACgFAAQAAgFgCgEg");
	this.shape_62.setTransform(115.5,22);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A7BF86").s().p("AgYAPIAAgKQAYgKASgQQACgDAFAAQAAAFgDAEQgRAYgdAQIAAgKg");
	this.shape_63.setTransform(142.5,48.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#618423").s().p("AifJ4QAAgFgCgBIg6gYIAAgFQgkgFgYgKQgFAAgBgCQgOgeg8gcQAAgFgCgEQgTgogdgfQgFAAgCgDQgDgCAAgFIgBgKQgBgmgcgMIAAgKQgDgmgbgMQAAgFgDgCQgYgVgDgqIgBgKQgJgjgegPIgFAAQABgVgQABQAAgFgBgFQgMggglgIQgFAAgCgDQgPgZgSgWQgFAAgEgCQgzgSgogeIAAgKIAKAAQBqAiBMA/QADADAFAAQANAaAcAMQAEACAFAAQAUAYAcATQACACAAAFQAUAZAXAWQACADAFAAQAJAVAWAHQAEACAFAAQAbBCAUgcQADgDAAgFQgbgNgIgkQAAgBgFAAQAAgFgCgEQgIgLgKgKQAAgFgCgCQgdgWABgzQgFAAgDgDQgMgHgKgKQAAgFgCgBQgPgHAHgbQgFAAgBgCQgHgPgRgDQAAgFgCgEQgXgzgZgxQAAgFgCgFQgWhNgkg/QAAgFgCgFQgQgqgMgwIgBgKIgJgoQAFAFAGADQAEACAFAAQAWAlAaAjQACADAAAFQALAwAgAdQACADAFAAIAAAKIAAAKQAKAZAIAZQACAFAAAFQAiAaAdAfQACADAFAAQAAAFgDACQgCADgFAAQAPAcAbASQADADAFAAQAHAhAYAPQAEACAFAAQAAAiAWAOQADACAFAAQA6CYBICFIAAgFQgJhqghhIQgLgYgRgIQAAgFgCgFQgKgdACgpQAUgdAUAnIACgKQADgUAPgKQAAg3AFg2IAFAAQAQCJgBCEIAFAAQAQjWATjXQAJhwgEiUIAAgKIAAiCQARgNgCglIAFAAQAIA5ACA/IAAAKQAbA5ADBTIAAAKQAAA7AJAzIABAKQAUAUAFAnIAFABIAAAKIAAAKIgKAAQANA/APgiQACgEAAgFIAAgKIAAgKQAQgIgGggIgBgKQAqA3gTAaQgDAEAAAFQApAugKBTIgBAKQAohAAThVIABgKQBBirBYiTQACgCAFAAQAFAFADAGQACAEAAAFQgFAAAAABQgPBAgeAtIAAAKQgFAAgBABQgQAugSArIAAAeIAAAKIAAA8IAAAKIgKAAIAAAyIAAAKIgFAAQABCRgkBoQAVAwgTA0QgCAFAAAFQAMArgCA5IAAAKQANAHAUgjQACgCAFAAQAIhIAngpQADgCAAgFQgGgdAYgqQACgEAAgFQAegzASg8QACgEAAgFQANgRALgVQABgCAFAAQBMgwA0hJQACgDAAgFQAlgXAVgmQACgEAAgFIAAgKIAKAAQAegQARgaQADgDAAgFIAAgKQBAg4BUgmQACgBAAgFQAKAAAIAEQACABAAAFQgFAAgCACQhJBchQBWQgFAAgCACQgVAjggAXIAAAKIAAAKQgFAAgCACQg9BZhIBOIgBAJQgKAjgTAaIAAAKQgFAAAAABQgLA/gsAaQAiAIAshPQACgEAAgFQAZgeAhgYQACgBAAgFIAAgKQAPgKAMgNQADgCAAgFQBOg5BKg8QADgCAFAAQAKAAAIAEQACABAAAFQgFAAgCACQhBBBhEA+QAAAFgCADQgIAMAAAUQgFAAgBACQgHAPgRADQAAAFgCAEQghBHgZBQQgFAAgBABQgbBagvBFIAAAKIAAAKQAAAFgCAEQgKATgSAMQgFAAgEACQghAPgcAXQgFAFgGACIgQAGQgdgUgiAlQAAgFgBgBQgdgKgUgOIgKgBQgqgGgrgDQgoAdhAALIAAAKQgFAAgBACQgHAOgSAAQgMAAgRgGgAjPHJQBMAehOgjQAAAFACAAgAgShDQASCmgTB7QAAAFACACQASARgBAkIAAAFQAcgkgShZQAAgFACgCQAUgLgCggIgKAFQgMhUgbhuIABAKg");
	this.shape_64.setTransform(86,69.832);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7EA546").s().p("AhjFdIAAgKQACg5gMgrQAAgFACgEQATg1gVgwQAkhogBiRIAFAAQAAAZAFAYQAAABAFAAQAjgOgEg4IgBgKIAAgKQAyheA1heQABgCAFAAQAbgCACAWIABAKQAAAFgCAEQgDAGgFAFQgFAAgBABQgHAfgRASIAAAUIAAAKIAAAKQgCAwgcAWIAAAKIAAAoIgFAAQACAbgRADIAAAKQAHAzgbASIAABGIAAAKIgJAAQgCAqAOgTQACgDAFAAQAAAFgCAEQgXArAGAcQAAAFgDADQgnAogIBIQgFAAgCACQgRAegLAAIgFgCgAgxCpIgKABQgWADgIBCQgGAWAPgGQAygRALhtIAAgFQgXAMgHAhg");
	this.shape_65.setTransform(111,76.0571);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B5D38D").s().p("AgOAUIAAgUQAOgJAJgSQABgCAFAAQAAAFgCAFQgIAcgTAVIAAgKg");
	this.shape_66.setTransform(124.5,39);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8EAA6C").s().p("AgGAmQgDgWgbACIAAgKQAuhHAaAVQACABgFAKQgFAAgBACQgJASgPAKIAAATIAAAKQAAAFgCAEQgCAGgFAFIAAgKg");
	this.shape_67.setTransform(122.6786,39.1892);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2D19A").s().p("AgHgEIAPgHIAAAXIgPgQg");
	this.shape_68.setTransform(182.8,134.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B3B7A1").s().p("AgsAUIAAgKQAqgSAmgTQAEgCAFAAQgkAigsAXQgEACgFAAIAAgKg");
	this.shape_69.setTransform(162.5,60);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B3C193").s().p("AgGAMQgIgEgKAAIAAgJQBTgmg5A2QgCADgEAAQAAgFgCgBg");
	this.shape_70.setTransform(162.511,34.2278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cactus1, new cjs.Rectangle(0,0,183.6,148.7), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.treefull = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leaf();
	this.instance.setTransform(36.65,17.85,0.9999,0.9999,30.0017,0,0,4.4,10);

	this.instance_1 = new lib.leaf();
	this.instance_1.setTransform(40.8,28.65,0.9999,0.9999,30.0017,0,0,4.4,10);

	this.instance_2 = new lib.leaf();
	this.instance_2.setTransform(47.7,43,0.9999,0.9999,30.0017,0,0,4.4,10);

	this.instance_3 = new lib.leaf();
	this.instance_3.setTransform(45.3,36.8,0.9999,0.9999,30.0017,0,0,4.4,10);

	this.instance_4 = new lib.leaf();
	this.instance_4.setTransform(46.25,47.1,1,1,45.0006,0,0,4.3,10);

	this.instance_5 = new lib.leaf();
	this.instance_5.setTransform(36,57,1,1,45.0006,0,0,4.3,10);

	this.instance_6 = new lib.leaf();
	this.instance_6.setTransform(13.5,12.7,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_7 = new lib.leaf();
	this.instance_7.setTransform(12.35,19.25,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_8 = new lib.leaf();
	this.instance_8.setTransform(10.3,26.35,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_9 = new lib.leaf();
	this.instance_9.setTransform(11.05,36.25,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_10 = new lib.leaf();
	this.instance_10.setTransform(8.45,42.9,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_11 = new lib.leaf();
	this.instance_11.setTransform(17.4,57.65,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_12 = new lib.leaf();
	this.instance_12.setTransform(26.05,10.95,1,1,-15.0007,0,0,4.2,10.2);

	this.instance_13 = new lib.leaf();
	this.instance_13.setTransform(30.45,12.8,1,1,14.9994,0,0,4.2,10.1);

	this.instance_14 = new lib.leaf();
	this.instance_14.setTransform(22.05,12.7,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_15 = new lib.leaf();
	this.instance_15.setTransform(13.45,51.5,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_16 = new lib.leaf();
	this.instance_16.setTransform(17.4,47,0.9112,1,0,-29.9969,150.0028,4.2,10.2);

	this.instance_17 = new lib.leaf();
	this.instance_17.setTransform(19.4,40.65,0.9112,1,0,-14.9992,165.0013,4.2,10.1);

	this.instance_18 = new lib.leaf();
	this.instance_18.setTransform(19.95,34.1,0.9112,1,0,-14.9992,165.0013,4.2,10.1);

	this.instance_19 = new lib.leaf();
	this.instance_19.setTransform(22.15,20.7,0.9112,1,0,-14.9992,165.0013,4.2,10.2);

	this.instance_20 = new lib.leaf();
	this.instance_20.setTransform(32.45,28.65,1,1,29.9992,0,0,4.2,10.1);

	this.instance_21 = new lib.leaf();
	this.instance_21.setTransform(34.4,32.6,1,1,29.9992,0,0,4.2,10.1);

	this.instance_22 = new lib.leaf();
	this.instance_22.setTransform(35,39.65,1,1,29.9992,0,0,4.2,10.1);

	this.instance_23 = new lib.leaf();
	this.instance_23.setTransform(33.5,49,1,1,29.9992,0,0,4.2,10.1);

	this.instance_24 = new lib.leaf();
	this.instance_24.setTransform(20.55,27.75,0.9112,1,0,-14.9992,165.0013,4.2,10.1);

	this.instance_25 = new lib.leaf();
	this.instance_25.setTransform(41.05,55,1,1,45.0006,0,0,4.3,10);

	this.instance_26 = new lib.leaf();
	this.instance_26.setTransform(30.5,21.25,1,1,0,0,0,4.2,10.1);

	this.instance_27 = new lib.leaf();
	this.instance_27.setTransform(37.5,47.1,1,1,29.9992,0,0,4.2,10.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#744E28").ss(1,1,1).p("AgrnFIgIBYIgeExQgrD6AaEIIAxAAIBlAAIA1AAQAQkDgoj6IgekoIgCgSIgIhQ");
	this.shape.setTransform(26.6887,109.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(42,26,12,0.376)").s().p("AgsADIgGAAIAAgDIBlAAIAAAEIgnABQgcAAgcgCgAAzAAgAgyAAIAAgEIAGAAIBfAAIAAAEg");
	this.shape_1.setTransform(26.775,154.665);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.482)").s().p("AACAoIgBgBQgDgbgBgbIAAgIIAAgQIAHBPIgCAAg");
	this.shape_2.setTransform(31.15,68.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(58,37,17,0.514)").s().p("AgCgUIAFAAIgDAXIgCATIAAgqg");
	this.shape_3.setTransform(24.0375,40.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(57,37,16,0.502)").s().p("AAAAoQgFgoAAgnQAQAXgHAuIAAAKIgEAAg");
	this.shape_4.setTransform(28.375,28.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#744E28").s().p("AA0J6IAAgEIgLtqQABAbAEAcIABAAIAEA5IAAgnIAeEnQAoD7gQEDgAhiJ6QgakIArj6IAekwIAIhZIgIBZIgBgIIgCgMQgBgIACgJIACgEQAAgaACgKQABgGADgDIACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQACAAADAFQAGANgDAPIgBAGIADAPIACAHIABAPQgBAKgCAGIAJAIQAIAHACAFQAEAGABAMQABAMgFAKQgCAGgEAAIgEgDIgRgQIgHgKIgCgEIgDDeIgBAAIAAItIAAAEgAgYllQgEAAgCgHIgBgFQgEgUADgUIAEgTIAAgHIAAgGIAAAAIgCgWQAAgJACgOIACgTIAEgYIABgRIAAgpQAAgPADgLQABgIADgFQADgIAFABQACABACAEQADAKgBANIgCAZQgBALABAYQAAAWgBAMIgGAgQgBAJACAPIABAXQgBAPgFAfIgBANQgBAHgDAFQgDAEgCAAIgBAAgAAYmjQgGgKACgWQADgUgCgNQgBgHgDgEIgIgLQgFgGAAgNQAAgOAEgHQACgEACgBQADAAADACQAEADAEAFIAHANIAEAMQADALAAAjIgBAaQgBAOgFAKIgCAEIgCAAQgCAAgDgDg");
	this.shape_5.setTransform(26.6887,91.1382);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(59,37,17,0.518)").s().p("AgBAoIgKAAIAAgKIAAhFQAgAMgMA5IgBAKIgJAAg");
	this.shape_6.setTransform(26.9573,15.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(113,73,34,0.973)").s().p("AgrKjIgHAAIAAouIABAAIAEjdIACAEIAHAJIAQARIAFACQADABADgGQAEgKgBgMQgBgMgEgHQgCgEgIgHIgJgIQACgGACgKIgBgPIgDgHIgDgQIABgFQADgPgFgNQgDgFgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgshbhcgtICMAmIAHACIABAFQACAHAFAAQACAAAEgFQACgEABgHIABgOQAFgeABgPIgBgXQgCgQACgIIAFggQACgMgBgWQAAgZAAgKIADgZQABgNgEgKQgBgEgDgBQgEgCgEAJQgDAFgBAHIAAgtQARgNgGglIgBgKIAJAAIAKAAIAAAoIAAAKQAAAoAFAoIAFAAIAFAwQgEgGgEgDQgDgCgDABQgCAAgCAEQgDAIgBAOQABANAEAGIAJALQACADABAIQACANgDAUQgCAWAGAKQAEADABAAIACAAIAAAlIAAAKQBOgMA/gaQAEgCAFAAQhUAzg2BQQgCAEAAAFIAAAQIAAAIIALNrIheAAgAAuiQIACAAIACAAIAAASIgCgSIACASIAAAmgAgdmKIAAgCIAAAGIAAAHIAAgLg");
	this.shape_7.setTransform(26.75,86.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.treefull, new cjs.Rectangle(0,0,56.2,155.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.starry();
	this.instance.setTransform(899.3,32.8,0.3839,0.4531,0,0,0,40.1,40.9);

	this.instance_1 = new lib.starry();
	this.instance_1.setTransform(868.55,181.75,0.3839,0.4531,0,0,0,40.1,40.9);

	this.instance_2 = new lib.starry();
	this.instance_2.setTransform(705.55,111.75,0.3839,0.4531,0,0,0,40.1,40.9);

	this.instance_3 = new lib.starry();
	this.instance_3.setTransform(680.5,28.85,0.5489,0.5489,0,0,0,40.1,40.8);

	this.instance_4 = new lib.starry();
	this.instance_4.setTransform(591.55,191.7,0.699,0.699,0,0,0,40.1,40.8);

	this.instance_5 = new lib.starry();
	this.instance_5.setTransform(437.6,144.85,0.3839,0.4531,0,0,0,40.1,40.9);

	this.instance_6 = new lib.starry();
	this.instance_6.setTransform(317.6,198.95,0.3839,0.4531,0,0,0,40.1,40.9);

	this.instance_7 = new lib.starry();
	this.instance_7.setTransform(368.35,28.5,0.699,0.699,0,0,0,40.1,40.8);

	this.instance_8 = new lib.starry();
	this.instance_8.setTransform(193.25,97.4,0.5489,0.5489,0,0,0,40.1,40.8);

	this.instance_9 = new lib.starry();
	this.instance_9.setTransform(48.95,170.1,0.4992,0.4992,0,0,0,40.1,40.8);

	this.instance_10 = new lib.starry();
	this.instance_10.setTransform(18.05,44,0.4501,0.4501,0,0,0,40.1,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{regY:40.9,scaleX:0.3839,scaleY:0.4531,x:437.6,y:144.85}},{t:this.instance_4,p:{regX:40.1,regY:40.8,scaleX:0.699,scaleY:0.699,x:591.55,y:191.7}},{t:this.instance_3,p:{scaleX:0.5489,scaleY:0.5489,x:680.5,y:28.85}},{t:this.instance_2,p:{x:705.55,y:111.75}},{t:this.instance_1,p:{regY:40.9,scaleX:0.3839,scaleY:0.4531,x:868.55,y:181.75}},{t:this.instance,p:{x:899.3,y:32.8}}]}).to({state:[{t:this.instance_5,p:{regY:40.6,scaleX:0.4501,scaleY:0.4501,x:18.05,y:44}},{t:this.instance_4,p:{regX:0,regY:0,scaleX:0.5489,scaleY:0.5489,x:94.3,y:104}},{t:this.instance_3,p:{scaleX:0.699,scaleY:0.699,x:418.35,y:48.5}},{t:this.instance_2,p:{x:619.15,y:38.55}},{t:this.instance_1,p:{regY:40.8,scaleX:0.5489,scaleY:0.5489,x:253.5,y:81.7}},{t:this.instance,p:{x:668.55,y:159.75}}]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.5,19.9,890.2,182.9);


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.instance = new lib.sun();
	this.instance.setTransform(122.65,118.75,1,1,0,0,0,77.5,77.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:129.05,y:122.05},0).wait(1).to({x:135.45,y:125.4},0).wait(1).to({x:141.85,y:128.7},0).wait(1).to({x:148.25,y:132.05},0).wait(1).to({x:154.65,y:135.4},0).wait(1).to({x:161.05,y:138.7},0).wait(1).to({x:167.45,y:142.05},0).wait(1).to({x:173.9,y:145.35},0).wait(1).to({x:180.3,y:148.7},0).wait(1).to({x:186.7,y:152.05},0).wait(1).to({x:193.1,y:155.35},0).wait(1).to({x:199.5,y:158.7},0).wait(1).to({x:205.9,y:162},0).wait(1).to({x:212.3,y:165.35},0).wait(1).to({x:218.75,y:168.7},0).wait(1).to({x:225.15,y:172},0).wait(1).to({x:231.55,y:175.35},0).wait(1).to({x:237.95,y:178.65},0).wait(1).to({x:244.35,y:182},0).wait(1).to({x:250.75,y:185.35},0).wait(1).to({x:257.15,y:188.65},0).wait(1).to({x:263.6,y:192},0).wait(1).to({x:270,y:195.3},0).wait(1).to({x:276.4,y:198.65},0).wait(1).to({x:282.8,y:202},0).wait(1).to({x:289.2,y:205.3},0).wait(1).to({x:295.6,y:208.65},0).wait(1).to({x:302,y:211.95},0).wait(1).to({x:308.45,y:215.3},0).wait(1).to({x:314.85,y:218.65},0).wait(1).to({x:321.25,y:221.95},0).wait(1).to({x:327.65,y:225.3},0).wait(1).to({x:334.05,y:228.6},0).wait(1).to({x:340.45,y:231.95},0).wait(1).to({x:346.85,y:235.3},0).wait(1).to({x:353.25,y:238.6},0).wait(1).to({x:359.7,y:241.95},0).wait(1).to({x:366.1,y:245.25},0).wait(1).to({x:372.5,y:248.6},0).wait(1).to({x:378.9,y:251.95},0).wait(1).to({x:385.3,y:255.25},0).wait(1).to({x:391.7,y:258.6},0).wait(1).to({x:398.1,y:261.9},0).wait(1).to({x:404.55,y:265.25},0).wait(1).to({x:410.95,y:268.6},0).wait(1).to({x:417.35,y:271.9},0).wait(1).to({x:423.75,y:275.25},0).wait(1).to({x:430.15,y:278.55},0).wait(1).to({x:436.55,y:281.9},0).wait(1).to({x:442.95,y:285.25},0).wait(1).to({x:449.4,y:288.55},0).wait(1).to({x:455.8,y:291.9},0).wait(1).to({x:462.2,y:295.2},0).wait(1).to({x:468.6,y:298.55},0).wait(1).to({x:475,y:301.9},0).wait(1).to({x:481.4,y:305.2},0).wait(1).to({x:487.8,y:308.55},0).wait(1).to({x:494.25,y:311.9},0).wait(1).to({x:500.65,y:315.2},0).wait(1).to({x:507.05,y:318.55},0).wait(1).to({x:513.45,y:321.85},0).wait(1).to({x:519.85,y:325.2},0).wait(1).to({x:526.25,y:328.55},0).wait(1).to({x:532.65,y:331.85},0).wait(1).to({x:539.05,y:335.2},0).wait(1).to({x:545.5,y:338.5},0).wait(1).to({x:551.9,y:341.85},0).wait(1).to({x:558.3,y:345.2},0).wait(1).to({x:564.7,y:348.5},0).wait(1).to({x:571.1,y:351.85},0).wait(1).to({x:577.5,y:355.15},0).wait(1).to({x:583.9,y:358.5},0).wait(1).to({x:590.35,y:361.85},0).wait(1).to({x:596.75,y:365.15},0).wait(1).to({x:603.15,y:368.5},0).wait(1).to({x:609.55,y:371.8},0).wait(1).to({x:615.95,y:375.15},0).wait(1).to({x:622.35,y:378.5},0).wait(1).to({x:628.75,y:381.8},0).wait(1).to({x:635.2,y:385.15},0).wait(1).to({x:641.6,y:388.45},0).wait(1).to({x:648,y:391.8},0).wait(1).to({x:654.4,y:395.15},0).wait(1).to({x:660.8,y:398.45},0).wait(1).to({x:667.2,y:401.8},0).wait(1).to({x:673.6,y:405.1},0).wait(1).to({x:680.05,y:408.45},0).wait(1).to({x:686.45,y:411.8},0).wait(1).to({x:692.85,y:415.1},0).wait(1).to({x:699.25,y:418.45},0).wait(1).to({x:705.65,y:421.75},0).wait(1).to({x:712.05,y:425.1},0).wait(1).to({x:718.45,y:428.45},0).wait(1).to({x:724.85,y:431.75},0).wait(1).to({x:731.3,y:435.1},0).wait(1).to({x:737.7,y:438.4},0).wait(1).to({x:744.1,y:441.75},0).wait(1).to({x:750.5,y:445.1},0).wait(1).to({x:756.9,y:448.4},0).wait(1).to({x:763.3,y:451.75},0).wait(1).to({x:769.7,y:455.05},0).wait(1).to({x:776.15,y:458.4},0).wait(1).to({x:782.55,y:461.75},0).wait(1).to({x:788.95,y:465.05},0).wait(1).to({x:795.35,y:468.4},0).wait(1).to({x:801.75,y:471.7},0).wait(1).to({x:808.15,y:475.05},0).wait(1).to({x:814.55,y:478.4},0).wait(1).to({x:821,y:481.7},0).wait(1).to({x:827.4,y:485.05},0).wait(1).to({x:833.8,y:488.35},0).wait(1).to({x:840.2,y:491.7},0).wait(1).to({x:846.6,y:495.05},0).wait(1).to({x:853,y:498.35},0).wait(1).to({x:859.4,y:501.7},0).wait(1).to({x:865.85,y:505.05},0).wait(74).to({x:122.65,y:118.75},0).wait(1).to({x:128.65,y:121.85},0).wait(1).to({x:134.7,y:125},0).wait(1).to({x:140.75,y:128.15},0).wait(1).to({x:146.8,y:131.3},0).wait(1).to({x:152.85,y:134.45},0).wait(1).to({x:158.9,y:137.55},0).wait(1).to({x:164.9,y:140.7},0).wait(1).to({x:170.95,y:143.85},0).wait(1).to({x:177,y:147},0).wait(1).to({x:183.05,y:150.15},0).wait(1).to({x:189.1,y:153.25},0).wait(1).to({x:195.15,y:156.4},0).wait(1).to({x:201.15,y:159.55},0).wait(1).to({x:207.2,y:162.7},0).wait(1).to({x:213.25,y:165.85},0).wait(1).to({x:219.3,y:169},0).wait(1).to({x:225.35,y:172.1},0).wait(1).to({x:231.4,y:175.25},0).wait(1).to({x:237.45,y:178.4},0).wait(1).to({x:243.45,y:181.55},0).wait(1).to({x:249.5,y:184.7},0).wait(1).to({x:255.55,y:187.8},0).wait(1).to({x:261.6,y:190.95},0).wait(1).to({x:267.65,y:194.1},0).wait(1).to({x:273.7,y:197.25},0).wait(1).to({x:279.7,y:200.4},0).wait(1).to({x:285.75,y:203.5},0).wait(1).to({x:291.8,y:206.65},0).wait(1).to({x:297.85,y:209.8},0).wait(1).to({x:303.9,y:212.95},0).wait(1).to({x:309.95,y:216.1},0).wait(1).to({x:316,y:219.25},0).wait(1).to({x:322,y:222.35},0).wait(1).to({x:328.05,y:225.5},0).wait(1).to({x:334.1,y:228.65},0).wait(1).to({x:340.15,y:231.8},0).wait(1).to({x:346.2,y:234.95},0).wait(1).to({x:352.25,y:238.05},0).wait(1).to({x:358.25,y:241.2},0).wait(1).to({x:364.3,y:244.35},0).wait(1).to({x:370.35,y:247.5},0).wait(1).to({x:376.4,y:250.65},0).wait(1).to({x:382.45,y:253.75},0).wait(1).to({x:388.5,y:256.9},0).wait(1).to({x:394.55,y:260.05},0).wait(1).to({x:400.55,y:263.2},0).wait(1).to({x:406.6,y:266.35},0).wait(1).to({x:412.65,y:269.5},0).wait(1).to({x:418.7,y:272.6},0).wait(1).to({x:424.75,y:275.75},0).wait(1).to({x:430.8,y:278.9},0).wait(1).to({x:436.8,y:282.05},0).wait(1).to({x:442.85,y:285.2},0).wait(1).to({x:448.9,y:288.3},0).wait(1).to({x:454.95,y:291.45},0).wait(1).to({x:461,y:294.6},0).wait(1).to({x:467.05,y:297.75},0).wait(1).to({x:473.1,y:300.9},0).wait(1).to({x:479.1,y:304},0).wait(1).to({x:485.15,y:307.15},0).wait(1).to({x:491.2,y:310.3},0).wait(1).to({x:497.25,y:313.45},0).wait(1).to({x:503.3,y:316.6},0).wait(1).to({x:509.35,y:319.75},0).wait(1).to({x:515.35,y:322.85},0).wait(1).to({x:521.4,y:326},0).wait(1).to({x:527.45,y:329.15},0).wait(1).to({x:533.5,y:332.3},0).wait(1).to({x:539.55,y:335.45},0).wait(1).to({x:545.6,y:338.55},0).wait(1).to({x:551.65,y:341.7},0).wait(1).to({x:557.65,y:344.85},0).wait(1).to({x:563.7,y:348},0).wait(1).to({x:569.75,y:351.15},0).wait(1).to({x:575.8,y:354.25},0).wait(1).to({x:581.85,y:357.4},0).wait(1).to({x:587.9,y:360.55},0).wait(1).to({x:593.9,y:363.7},0).wait(1).to({x:599.95,y:366.85},0).wait(1).to({x:606,y:370},0).wait(1).to({x:612.05,y:373.1},0).wait(1).to({x:618.1,y:376.25},0).wait(1).to({x:624.15,y:379.4},0).wait(1).to({x:630.2,y:382.55},0).wait(1).to({x:636.2,y:385.7},0).wait(1).to({x:642.25,y:388.8},0).wait(1).to({x:648.3,y:391.95},0).wait(1).to({x:654.35,y:395.1},0).wait(1).to({x:660.4,y:398.25},0).wait(1).to({x:666.45,y:401.4},0).wait(1).to({x:672.45,y:404.5},0).wait(1).to({x:678.5,y:407.65},0).wait(1).to({x:684.55,y:410.8},0).wait(1).to({x:690.6,y:413.95},0).wait(1).to({x:696.65,y:417.1},0).wait(1).to({x:702.7,y:420.25},0).wait(1).to({x:708.75,y:423.35},0).wait(1).to({x:714.75,y:426.5},0).wait(1).to({x:720.8,y:429.65},0).wait(1).to({x:726.85,y:432.8},0).wait(1).to({x:732.9,y:435.95},0).wait(1).to({x:738.95,y:439.05},0).wait(1).to({x:745,y:442.2},0).wait(1).to({x:751,y:445.35},0).wait(1).to({x:757.05,y:448.5},0).wait(1).to({x:763.1,y:451.65},0).wait(1).to({x:769.15,y:454.75},0).wait(1).to({x:775.2,y:457.9},0).wait(1).to({x:781.25,y:461.05},0).wait(1).to({x:787.3,y:464.2},0).wait(1).to({x:793.3,y:467.35},0).wait(1).to({x:799.35,y:470.5},0).wait(1).to({x:805.4,y:473.6},0).wait(1).to({x:811.45,y:476.75},0).wait(1).to({x:817.5,y:479.9},0).wait(1).to({x:823.55,y:483.05},0).wait(1).to({x:829.55,y:486.2},0).wait(1).to({x:835.6,y:489.3},0).wait(1).to({x:841.65,y:492.45},0).wait(1).to({x:847.7,y:495.6},0).wait(1).to({x:853.75,y:498.75},0).wait(1).to({x:859.8,y:501.9},0).wait(1).to({x:865.85,y:505.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stars
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1860.55,77.2,1,1,0,0,0,457.2,110);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).wait(1).to({regX:458.5,regY:111.3,x:1832.4,y:78.95},0).wait(1).to({x:1802.95,y:79.35},0).wait(1).to({x:1773.5,y:79.75},0).wait(1).to({x:1744.05,y:80.2},0).wait(1).to({x:1714.6,y:80.6},0).wait(1).to({x:1685.15,y:81},0).wait(1).to({x:1655.7,y:81.45},0).wait(1).to({x:1626.25,y:81.85},0).wait(1).to({x:1596.85,y:82.25},0).wait(1).to({x:1567.4,y:82.7},0).wait(1).to({x:1537.95,y:83.1},0).wait(1).to({x:1508.5,y:83.5},0).wait(1).to({x:1479.05,y:83.9},0).wait(1).to({x:1449.6,y:84.35},0).wait(1).to({x:1420.15,y:84.75},0).wait(1).to({x:1390.7,y:85.15},0).wait(1).to({x:1361.25,y:85.6},0).wait(1).to({x:1331.85,y:86},0).wait(1).to({x:1302.4,y:86.4},0).wait(1).to({x:1272.95,y:86.85},0).wait(1).to({x:1243.5,y:87.25},0).wait(1).to({x:1214.05,y:87.65},0).wait(1).to({x:1184.6,y:88.05},0).wait(1).to({x:1155.15,y:88.5},0).wait(1).to({x:1125.7,y:88.9},0).wait(1).to({x:1096.25,y:89.3},0).wait(1).to({x:1066.85,y:89.75},0).wait(1).to({x:1037.4,y:90.15},0).wait(1).to({x:1007.95,y:90.55},0).wait(1).to({x:978.5,y:91},0).wait(1).to({x:949.05,y:91.4},0).wait(1).to({x:919.6,y:91.8},0).wait(1).to({x:890.15,y:92.25},0).wait(1).to({x:860.7,y:92.65},0).wait(1).to({x:831.25,y:93.05},0).wait(1).to({x:801.85,y:93.45},0).wait(1).to({x:772.4,y:93.9},0).wait(1).to({x:742.95,y:94.3},0).wait(1).to({x:713.5,y:94.7},0).wait(1).to({x:684.05,y:95.15},0).wait(1).to({x:654.6,y:95.55},0).wait(1).to({x:625.15,y:95.95},0).wait(1).to({x:595.7,y:96.4},0).wait(1).to({x:566.3,y:96.8},0).wait(1).to({x:536.85,y:97.2},0).wait(1).to({x:507.4,y:97.6},0).wait(1).to({x:477.95,y:98.05},0).wait(1).to({x:448.55,y:98.45},0).wait(1).to({x:419.1,y:98.85},0).wait(1).to({x:389.65,y:99.3},0).wait(1).to({x:360.2,y:99.7},0).wait(1).to({x:330.75,y:100.1},0).wait(1).to({x:301.35,y:100.55},0).wait(1).to({x:271.9,y:100.95},0).wait(1).to({x:242.45,y:101.35},0).wait(1).to({x:213,y:101.8},0).wait(1).to({x:183.55,y:102.2},0).wait(1).to({x:154.1,y:102.6},0).wait(1).to({x:124.65,y:103},0).wait(1).to({x:95.2,y:103.45},0).wait(1).to({x:65.75,y:103.85},0).wait(1).to({x:36.35,y:104.25},0).wait(1).to({x:6.9,y:104.7},0).wait(1).to({x:-22.55,y:105.1},0).wait(1).to({x:-52,y:105.5},0).wait(1).to({x:-81.45,y:105.95},0).wait(1).to({x:-110.9,y:106.35},0).wait(1).to({x:-140.35,y:106.75},0).wait(1).to({x:-169.8,y:107.15},0).wait(1).to({x:-199.25,y:107.6},0).wait(1).to({x:-228.65,y:108},0).wait(1).to({x:-258.1,y:108.4},0).wait(1).to({x:-287.55,y:108.85},0).wait(1).to({x:-317,y:109.25},0).wait(1).to({x:-346.45,y:109.65},0).wait(1).to({x:-375.9,y:110.1},0).wait(1).to({x:-405.35,y:110.5},0).wait(1).to({x:-434.8,y:110.9},0).wait(1).to({x:-464.25,y:111.3},0).wait(116).to({regX:457.2,regY:110,x:1860.55,y:77.2},0).wait(1).to({regX:458.5,regY:111.3,x:1861.85,y:78.5},0).wait(49).to({x:1827.1,y:79},0).wait(1).to({x:1792.4,y:79.5},0).wait(1).to({x:1757.65,y:80},0).wait(1).to({x:1722.95,y:80.5},0).wait(1).to({x:1688.25,y:80.95},0).wait(1).to({x:1653.5,y:81.45},0).wait(1).to({x:1618.8,y:81.95},0).wait(1).to({x:1584.1,y:82.45},0).wait(1).to({x:1549.35,y:82.95},0).wait(1).to({x:1514.65,y:83.4},0).wait(1).to({x:1479.95,y:83.9},0).wait(1).to({x:1445.2,y:84.4},0).wait(1).to({x:1410.5,y:84.9},0).wait(1).to({x:1375.75,y:85.4},0).wait(1).to({x:1341.05,y:85.85},0).wait(1).to({x:1306.35,y:86.35},0).wait(1).to({x:1271.6,y:86.85},0).wait(1).to({x:1236.9,y:87.35},0).wait(1).to({x:1202.2,y:87.85},0).wait(1).to({x:1167.45,y:88.3},0).wait(1).to({x:1132.75,y:88.8},0).wait(1).to({x:1098.05,y:89.3},0).wait(1).to({x:1063.3,y:89.8},0).wait(1).to({x:1028.6,y:90.25},0).wait(1).to({x:993.9,y:90.75},0).wait(1).to({x:959.15,y:91.25},0).wait(1).to({x:924.45,y:91.75},0).wait(1).to({x:889.7,y:92.25},0).wait(1).to({x:855,y:92.7},0).wait(1).to({x:820.3,y:93.2},0).wait(1).to({x:785.55,y:93.7},0).wait(1).to({x:750.85,y:94.2},0).wait(1).to({x:716.15,y:94.7},0).wait(1).to({x:681.4,y:95.15},0).wait(1).to({x:646.7,y:95.65},0).wait(1).to({x:612,y:96.15},0).wait(1).to({x:577.25,y:96.65},0).wait(1).to({x:542.55,y:97.15},0).wait(1).to({x:507.85,y:97.6},0).wait(1).to({x:473.1,y:98.1},0).wait(1).to({x:438.45,y:98.6},0).wait(1).to({x:403.7,y:99.1},0).wait(1).to({x:369,y:99.6},0).wait(1).to({x:334.3,y:100.05},0).wait(1).to({x:299.55,y:100.55},0).wait(1).to({x:264.85,y:101.05},0).wait(1).to({x:230.15,y:101.55},0).wait(1).to({x:195.4,y:102},0).wait(1).to({x:160.7,y:102.5},0).wait(1).to({x:126,y:103},0).wait(1).to({x:91.25,y:103.5},0).wait(1).to({x:56.55,y:104},0).wait(1).to({x:21.85,y:104.45},0).wait(1).to({x:-12.9,y:104.95},0).wait(1).to({x:-47.6,y:105.45},0).wait(1).to({x:-82.35,y:105.95},0).wait(1).to({x:-117.05,y:106.45},0).wait(1).to({x:-151.75,y:106.9},0).wait(1).to({x:-186.5,y:107.4},0).wait(1).to({x:-221.2,y:107.9},0).wait(1).to({x:-255.9,y:108.4},0).wait(1).to({x:-290.65,y:108.9},0).wait(1).to({x:-325.35,y:109.35},0).wait(1).to({x:-360.05,y:109.85},0).wait(1).to({x:-394.8,y:110.35},0).wait(1).to({x:-429.5,y:110.85},0).wait(1).to({x:-464.25,y:111.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_office = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// office
	this.instance = new lib.man8();
	this.instance.setTransform(657.15,382.15,0.7598,0.7762,0,0,0,174.5,221.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("EB7fA1YMjyEAAAIoEAAMAAAhquMD9TAAAMAAABqug");
	this.shape.setTransform(654.3,124.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9725F").s().p("Eh5BAUCMAAAgoDMDyDAAAMAAAAoDg");
	this.shape_1.setTransform(669.925,594.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},427).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_actions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhTDDIAAgLIAOAAQAYAAALgPQAGgJAAghIAAkpIgvAAQgbAAgMAEQgiAMgEAzIgLAAIAFhbIE9AAIAFBbIgLAAQgDgYgGgLQgRggguAAIg3AAIAAEpQAAAlAIAIQAKAMAYAAIANAAIAAALg");
	this.shape.setTransform(715.4,393.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ABaDDIiDi3IgYABIgRgBIAAByQAAAkAIAKQALAMAWAAIAPAAIAAALIinAAIAAgLIAOAAQAZAAALgQQAGgJAAghIAAj7QAAglgIgJQgLgMgXAAIgOAAIAAgLICOAAQAzAAAZAFQApAJAYAcQAVAYAAAiQAABPhhAUIBRBwQAZAiARANQAWARAjADIAAALgAhSinIAACiIAIAAIAIABQAvAAAdgUQAkgWAAgsQAAgmgXgWQgXgXglAAQgRAAgcAGg");
	this.shape_1.setTransform(678.275,393.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AA1DIIAAgLQAogCAAgWQAAgNgMgbIgXg4IiWAAIgbA9QgJAXAAALQgBAWAuADIAAALIh8AAIAAgLQAZgFAIgGQANgOATgrICKlAIAJAAICIFEQANAhAKALQAPASAcACIAAALgAhTAwICFAAIhCidg");
	this.shape_2.setTransform(636.45,392.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhTDDIAAgLIANAAQAZAAALgPQAGgJAAghIAAkpIguAAQgcAAgMAEQgjAMgDAzIgLAAIAFhbIE9AAIAFBbIgLAAQgDgYgGgLQgRggguAAIg3AAIAAEpQAAAlAIAIQALAMAXAAIANAAIAAALg");
	this.shape_3.setTransform(597.4,393.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgYDKQgJgCgcgJQgagJgKAAQgOAAgDAWIgLAAIAAiGIALAAQAGAmALAUQANAZAdAPQAaAOAeAAQAfAAAWgQQAZgSAAgeQAAggghgYQgUgQgtgZQgugYgVgQQgrgiAAgvQAAguAjgdQAhgcAuAAQAfAAAiAPQARAHAGAAQAPAAAFgWIALAAIAACHIgLAAQgKhJgvgaQgYgOgaAAQgaAAgVARQgWARAAAaQAAASANAPQASAWBCAkQAuAYANAIQAhAXANAaQALAVAAAYQAAAwgmAfQgjAdgyAAQgQAAgPgCg");
	this.shape_4.setTransform(563.075,393.425);

	this.start_btn = new lib.start();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(636.85,226.7,1,1,0,0,0,109.4,109.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAOCIIAAgLIAFAAQAeAAAGgWQABgEAAgXIAAhrQAAhEgoAAQgiAAgiAlIAACKQAAAbAEAGQAIAQAfAAIAAALIiCAAIAAgLIAFAAQAWAAAIgOQAFgKAAgZIAAhhQAAhAgJgIQgEgEgIAAQgIAAgLAFIgFgLIBQggIAMAAIAAA4QAug4AqAAQAtAAARAuQAGARAAAkIAABwQAAAlAOAIQAIAEASAAIAAALg");
	this.shape_5.setTransform(672.8,234.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("Ag9DNIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgrgCgLQgEgRgPAAQgIAAgLAFIgEgLIBOggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAgSiaQgIgJAAgMQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_6.setTransform(649.975,227.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AhmB3QgRgUAAgcQAAgqAygdQAdgQBDgZIAAgKQAAghgIgPQgMgWgcAAQgPAAgMAJQgNAJAAAPIABARQABAbgZABQgZAAAAgcQAAghAigSQAcgQAjAAQBBAAARAoQAFAMAAAmIAABZQAAA1AGAGQADACAFAAQAEAAAEgCQAFgEASgRIAAAQQggArgeAAQgeAAgBgrQgoAfgKAFQgPAIgSgBQgdAAgRgTgAgcAAQgrAYAAAhQAAASALAPQAMAPASAAQAWAAAjgdIAAhkQgqASgNAGg");
	this.shape_7.setTransform(629.475,235.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AhvCvQgVgPAAgPQAAgPAXgdIAdggQgbgQAAgPQAAgYAuglQgygZAAg3QAAgrAggbQAegaArAAQAlABAbASIA4AAQAQAAABADQACADAAAGQAAALgEABQgDABgMAAIgiAAQAQAVAAAgQAAAqggAaQgdAWgqAAQgUAAgUgGQgWASAAAOQAAANAYAEIAoABQA6ACASADQAaADAQAPQARAQAAAZQAAAhgfAcQgtArhHAAQg4AAgmgZgAhbB6QAAAOARALQAdARA1ABQAjAAAcgMQAmgQAAgeQAAgUgegGQgKgCgigBQhAgBgjgGQgbAfAAAUgAgziiQgKASAAAdQAAAtATAYQAPAUAYgBQAxAAAAhDQAAgugUgZQgPgTgWAAQgbgBgNAXg");
	this.shape_8.setTransform(601.025,241.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AhmB3QgRgUAAgcQAAgqAygdQAdgQBDgZIAAgKQAAghgIgPQgMgWgcAAQgPAAgMAJQgNAJAAAPIABARQABAbgZABQgZAAAAgcQAAghAigSQAcgQAjAAQBBAAARAoQAFAMAAAmIAABZQAAA1AGAGQADACAFAAQAEAAAEgCQAFgEASgRIAAAQQggArgeAAQgeAAgBgrQgoAfgKAFQgPAIgSgBQgdAAgRgTgAgcAAQgrAYAAAhQAAASALAPQAMAPASAAQAWAAAjgdIAAhkQgqASgNAGg");
	this.shape_9.setTransform(573.775,235.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("Ah1C7QgNgJAAgOQABgbAdAAQAJAAARAGQAMAEADAAQAVAAASgrIASguIhejGQgEgJgKgNQgIgKgDgEQgHgEgPgEIAAgLIB7AAIAAALIgGAAQgaAAAAAUQAAALAKAUIA/CFIA7iSQAEgMABgLQAAgJgJgEQgFgCgNAAIAAgLIBWAAIAAALQgSACgLAQQgCACgIAUIhrEGQgMAfgWAVQgZAageAAQgOAAgMgJg");
	this.shape_10.setTransform(531.9,241.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AhmB3QgRgUAAgcQAAgqAygdQAdgQBDgZIAAgKQAAghgIgPQgMgWgcAAQgPAAgMAJQgNAJAAAPIABARQABAbgZABQgZAAAAgcQAAghAigSQAcgQAjAAQBBAAARAoQAFAMAAAmIAABZQAAA1AGAGQADACAFAAQAEAAAEgCQAFgEASgRIAAAQQggArgeAAQgeAAgBgrQgoAfgKAFQgPAIgSgBQgdAAgRgTgAgcAAQgrAYAAAhQAAASALAPQAMAPASAAQAWAAAjgdIAAhkQgqASgNAGg");
	this.shape_11.setTransform(505.025,235.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("Ag9DNIAAgLQAcAAAHgQQAEgJAAgYIAAjvQAAg9gIgHQgFgEgHAAQgIAAgLAEIgFgKIBNggIANAAIAAFdQAAAlAPAIQAIAEAUAAIAAALg");
	this.shape_12.setTransform(483.025,227.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AiJDHIAAgLIAHAAQAQAAALgGQAMgHAAgnIAAj4QAAglgKgGQgFgEgJAAQgHAAgLAEIgDgJIBRghIALAAIAAA+QAlg/AvAAQAnAAAbAfQAgAmAAA9QAABEgnAsQggAlgxAAQgUAAgQgGQgMgFgOgNIAABRQAAAUABAFQADAPALAGQAIAEAVAAIAAALgAgKiVQgKAFgYAaIAABjQAAAeADALQAFATARAMQAQALAUAAQAdAAASgXQAXgdAAg0QAAg9gaghQgTgWgZAAQgOAAgNAHg");
	this.shape_13.setTransform(458.725,241.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AAOCIIAAgLIAFAAQAfAAAFgWQABgEAAgXIAAhrQAAhEgoAAQgiAAgiAlIAACKQAAAbAEAGQAHAQAgAAIAAALIiCAAIAAgLIAFAAQAWAAAIgOQAFgKAAgZIAAhhQAAhAgJgIQgFgEgHAAQgIAAgLAFIgFgLIBQggIAMAAIAAA4QAvg4ApAAQAtAAAQAuQAHARAAAkIAABwQAAAlAOAIQAIAEASAAIAAALg");
	this.shape_14.setTransform(417.3,234.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AhmB3QgRgUAAgcQAAgqAygdQAdgQBDgZIAAgKQAAghgIgPQgMgWgcAAQgPAAgMAJQgNAJAAAPIABARQABAbgZABQgZAAAAgcQAAghAigSQAcgQAjAAQBBAAARAoQAFAMAAAmIAABZQAAA1AGAGQADACAFAAQAEAAAEgCQAFgEASgRIAAAQQggArgeAAQgeAAgBgrQgoAfgKAFQgPAIgSgBQgdAAgRgTgAgcAAQgrAYAAAhQAAASALAPQAMAPASAAQAWAAAjgdIAAhkQgqASgNAGg");
	this.shape_15.setTransform(390.375,235.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AhSBfQgcgoAAg3QAAg5AigoQAjgqA4AAQAeAAAbAQQAgATAAAcQAAAZgbAAQgRAAgIgLQgEgFgDgTQgCgRgKgJQgJgIgSAAQgdAAgRAVQgXAdAAAuQAAAsAUAjQAYAoAoAAQAcAAAXgTQAQgOAPgiIAIAEQgJAtgbAdQgfAigrAAQg0AAgfgtg");
	this.shape_16.setTransform(363.225,235.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AA3CIIAAg4QgaAcgOAKQgXASgZAAQgvAAgOguQgHgUAAglIAAh0QAAgegQgHQgIgEgVAAIAAgLIBdAAIAACwQAAA7ArAAQAcABAlgmIAAiUQAAgYgKgIQgIgGgZgBIAAgLIBaAAIAACfQAAA+AJAJQAFADAGAAQAKAAAKgEIAFAKIhQAgg");
	this.shape_17.setTransform(322.3,235.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AhhBcQgdgoAAgyQAAgjARgiQASglAegSQAdgRAgAAQA8AAAkAuQAfAmAAAzQAAAjgQAjQgSAlgeATQgdASgkAAQg8AAgjgwgAhAhQQgJAXAAAkQAAAwARApQAYA0ApAAQBBAAAAhnQAAhFgegpQgVgbgfAAQgnAAgRAog");
	this.shape_18.setTransform(292.775,235.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AhTDDIAAgLIAOAAQAZAAAKgPQAHgJAAghIAAhcIhriiQgSgbgFgFQgKgLgVgLQgGgCgLAAIAAgLICnAAIAAALIgJAAQgOAAgKAFQgMAHAAANQAAAKARAbIBRB9IBNh3QARgbAAgOQAAgQgQgIQgIgDgQAAIAAgLICJAAIAAALIgIAAQgXAAgZAZQgKALgTAeIheCTIAABhQAAAkAIAJQALAMAXAAIANAAIAAALg");
	this.shape_19.setTransform(256.625,228.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AgiB4IAhgkIAhAiIggAlgAgUARQAAgTARgXQALgRAAgRQAAgUgNgNQgPgOgVgBQgIAAgHACIAggwIAKgBQAfAAAUARQAUARAAAdQABAVgVAZQgUAZAAAPQAAAOAMAIIgfAkQgSgUAAgQg");
	this.shape_20.setTransform(429.35,173.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgfCVQgGgOAAgcIAAixIgqAAIAAgKQAkgOAagqQAGgLALgeIAJAAIAABXIA+AAIAAAUIg+AAIAACqQAAAsAbgBQAWAAAKgXIALAAQgUA6guAAQgfgBgNgcg");
	this.shape_21.setTransform(411.1,171.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("Ag9DNIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgrgCgLQgEgRgPAAQgIAAgLAFIgEgLIBOggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAgSiaQgIgJAAgMQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_22.setTransform(394.525,167.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AAvDRIAAgmQgkAmgpAAQgwAAgfgpQgdgmAAgyQAAg6AjgsQAlgwA4AAQAiAAAXAXIAAgxQAAg/gJgHQgFgEgGAAQgIAAgMAEIgEgKIBPggIAMAAIAAEwQABA/AIAIQAFAEAHAAQAHAAAOgFIACAKIhOAhgAg7geQgaAeAAA5QAAAsASAiQAXAqApAAQAaAAAYgaIAAiIQgEgqgegRQgNgIgNAAQgaAAgUAWg");
	this.shape_23.setTransform(359.4,168.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AhSBhQgdgmAAg4QAAg7AegnQAhgsA7AAQAuAAAcAfQAbAdAAAvIi1AAQAAAwAWAkQAbApAtAAQA2AAAYg/IAJAGQgHAqgdAeQgfAggpAAQg1AAghgrgAgyhhQgQAUgDAdIB4AAQgBgagEgKQgQgjgiAAQgcAAgSAWg");
	this.shape_24.setTransform(330.75,175.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AATDNIAAgLQASAAAAgMQAAgGgLgPIhQhnIBCg8QAVgUAEgFQACgDAAgEQAAgNgUgCIAAgJIByAAIAAAJQgpACghAdIhCA9IBCBWQAbAiALALQAOANALAEQAHADASAAIAAALgAiSDNIAAgLQAhAAAHgPQAEgJAAgXIAAjvQAAg/gIgIQgFgDgIAAQgGAAgMAEIgFgKIBPggIANAAIAAEGIAABXQAAAmAOAHQAGAEAXAAIAAALg");
	this.shape_25.setTransform(303.075,167.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("Ag9DNIAAgLQAdAAAHgQQAEgJAAgYIAAhmQAAgrgCgLQgEgRgPAAQgIAAgLAFIgEgLIBOggIANAAIAADTQAAAlAOAIQAHAEATAAIAAALgAgSiaQgIgJAAgMQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_26.setTransform(279.875,167.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AinDDIAAgLIAPAAQAYAAALgQQAGgJAAghIAAj7QAAglgIgJQgLgMgWAAIgPAAIAAgLICwAAIAAALQgygBgKAWQgFAJAAAjIAAD0QAAAYAFAJQAFAKAVACIA5AAQAlAAAQgEQAZgGATgUQAOgRAPglIAKACIghBqg");
	this.shape_27.setTransform(253.45,168.825);

	this.playAgain_btn = new lib.start();
	this.playAgain_btn.name = "playAgain_btn";
	this.playAgain_btn.setTransform(806.95,190.65,0.8835,0.8833,0,0,0,109.5,109.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start_btn},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.playAgain_btn},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},584).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.roadbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.treefull();
	this.instance.setTransform(5570,-78.95,1.2605,1.2605,0,0,0,28.1,77.5);

	this.instance_1 = new lib.treefull();
	this.instance_1.setTransform(4702,-43.35,1.5457,1.5457,0,0,0,28.1,77.5);

	this.instance_2 = new lib.man7();
	this.instance_2.setTransform(4022.4,68.25,0.7462,0.7462,0,0,0,125.3,220.7);

	this.instance_3 = new lib.man6();
	this.instance_3.setTransform(2854.95,79.35,0.7334,0.7334,0,0,0,150.3,239.8);

	this.instance_4 = new lib.man5();
	this.instance_4.setTransform(1575.55,76.75,0.8433,0.8433,0,0,0,112.9,205.5);

	this.instance_5 = new lib.treefull();
	this.instance_5.setTransform(3855.55,-44.25,1.2605,1.2605,0,0,0,28.1,77.5);

	this.instance_6 = new lib.treefull();
	this.instance_6.setTransform(3272.05,-14.3,1.5457,1.5457,0,0,0,28.1,77.5);

	this.instance_7 = new lib.treefull();
	this.instance_7.setTransform(2784.2,-0.85,1,1,0,0,0,28.1,77.6);

	this.instance_8 = new lib.treefull();
	this.instance_8.setTransform(2157.45,-29.7,1,1,0,0,0,28.1,77.6);

	this.instance_9 = new lib.treefull();
	this.instance_9.setTransform(927.25,-49.95,0.9289,0.9289,0,0,0,28.2,77.5);

	this.instance_10 = new lib.treefull();
	this.instance_10.setTransform(1672.85,-22.6,1.2803,1.2803,0,0,0,28.1,77.6);

	this.instance_11 = new lib.treefull();
	this.instance_11.setTransform(568.9,-54.8,1.511,1.511,0,0,0,28.1,77.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(19,1,1).p("EHELAAjIuKAAEGlCAAjIuLAAEFhJAAjIuLAAEGAmAAjIuKAAEEhuAAjIuKAAEFAKAAjIuLAAEDz3gAiIOLAAEC0dgAiIOKAAECU/gAiIOLAAEDVcgAiIOKAAEBRagAiIOLAAEAwrgAiIOKAAAuugiIOKAAEhNcgAiIOKAAEguBgAiIOKAAAO+giIOKAAEBwkgAiIOKAAEiC2gAiIOLAAEhn5gAiIOKAAEihRgAiIOKAAEjhugAiIOLAAEkGJgAiIOKAAEjCQgAiIOKAAElGCgAiIOKAAElnvgAiIOKAAEmkvgAiIOKAAEnEKgAiIOKAAEmFcgAiIOKAAEklTgAiIOLAA");
	this.shape.setTransform(3112.825,291.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A9D18E").ss(1,1,1).p("EGYLgZVQCGAZB6AjQG8B/AAC1QAAC0m8CAQm8B/pzAAQp0AAm8h/Qm7iAAAi0QAAi1G7h/QBLgWBRgREFREgdBQDrAUC2BBQEIBdAACEQAACEkIBeQjuBUlGAJEEbrgbBQFSCQAADFQAADUmDCVQl6CSoTADQD2DOAAD1QAABVgdBQQgCAGgDAFEC0xgZCQCGAZB6AjQG8CAAAC0QAAC1m8CAQm8B/pzAAQp0AAm8h/Qm7iAAAi1QAAi0G7iAQBLgVBRgSEBmugctQA/gFBDgCQAugCAxAAQBuAABlAIQDwATC5BCQEIBeAACEQAACEkIBdQjvBVlKAIQi9ApjpAAQlrAAkAhjQkAhiAAiLQAAiLEAhjQEAhiFrAAQBDAAA/ADgEBrSgS5QghABgiAAQl1AAkIheQkHhdAAiEQAAiEEHheQC0hADogUAUU1xQAWjEFriMQGDiVIjAAQIjAAGCCVQAZAJAYAKQFSCQAADGQAADTmDCVQl6CSoTAEQD2DOAAD0QAABVgdBRQgCAFgDAGAUU1xQF/BNFMB7QGaCYDaC3EgvqgDyQgehRAAhVQAAipB2iXQCyjjG8i5QBAgbBGgaQNrlFTUAAQL/AAJ0B9EgvlgDnQgDgGgCgFAxQdrMgkvAAAMk++AAAIzBAAIAAuNIAAmWQhAgLg+gNQmLhNlVh+QhGgahAgbQrkk0AAmnQAAmoLkk1QBAgbBGgaQNrlFTUAAQMAAAJ0B+QAWjEFriNQGDiVIjAAQIjAAGCCVQAZAKAYAKQFSCQAADFQAADUmDCVQl6CSoTADQD2DOAAD1QAABfglBaEizQgTlQAAC0m8CAQm8B/pzAAQp0AAm8h/Qm7iAAAi0QAAi1G7h/QBLgWBRgRQGKhZIKAAQHIAAFnBEQCGAZB6AjQG8B/AAC1gEkMPgdAQA/gGBDgCQAugCAxAAQBuAABlAJQDwATC5BCQEIBdAACEQAACEkIBeQjvBVlKAIQghAAgiAAQl1AAkIhdQkHheAAiEQAAiEEHhdQC0hADogUgEkHrgTMQi9AojpAAQlrAAkAhiQkAhjAAiLQAAiLEAhiQEAhiFrAAQBDAAA/ADElepgWEQF/BNFMB6QGaCZDaC2EmH+AJIIAAs6MBBlAAAMEWvAAA");
	this.shape_1.setTransform(2682.275,208.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ehl8AQzMgkvAAAMk++AAAIzBAAIAAuMIAAmWIAAs7MBBlAAAMEWvAAAIAFALMBcNAAAIFGAAIAAAIMEaTAAAIgOgTIEzAAIAAgIMDevAAAICCAAMAAAAhKMjL6AAAIAAAbgEGyxAAjIuLAAgEGTnAAjIuKAAgEFvMAAjIuLAAgEFPuAAjIuKAAgEEuvAAjIuKAAgEEQUAAjIuLAAgEDwngAiIuKAAgEDSMgAiIuLAAgECxNgAiIuLAAgECRvgAiIuKAAgEBtUgAiIuLAAgEBOKgAiIuKAAgEAtbgAiIuLAAgALugiIuKAAgAx+giIuLAAgEgxRgAiIuLAAgEhQsgAiIuLAAgEhrJgAiIuLAAgEiGGgAiIuKAAgEikhgAiIuLAAgEjFggAiIuLAAgEjk+gAiIuKAAgEkJZgAiIuLAAgEkojgAiIuKAAgElJSgAiIuLAAgElq/gAiIuLAAgEmIsgAiIuLAAgEmn/gAiIuLAAgEnHagAiIuLAAg");
	this.shape_2.setTransform(3224.2875,291.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9D18E").s().p("EjRiAnPQ3QghzJkfQnAhqmciKUghGAI4gs6AAAUgyAAAAgjWgLAQoHiimQixME++AAAQklCfluCUUgcmALggodAAAQjFAAjBgEgEnQDACGIB9AXIAAGXQh3jQgGjegEnQDACGQmMhNlUh+QhGgahAgbQrkk0AAmoQAAmoLkk0QBAgbBGgaQNqlFTVAAQMAAAJ0B+QAVjFFsiMQGCiVIjAAQIjAAGDCVIAwAUQTSiLWLAAQDjAADfAEQhDACg/AGQA/gGBDgCQAvgCAwAAQBvAABlAJQX4ApUTDXQhQAShLAWQm8B/AAC0QAAC1G8B/QG8CAJzAAQJ0AAG7iAQG8h/AAi1QAAi0m8h/Qh5gkiHgYQCHAYB5AkQG8B/AAC0QAAC1m8B/Qm7CAp0AAQpzAAm8iAQm8h/AAi1QAAi0G8h/QBLgWBQgSQGLhYIJAAQHIAAFnBEQWUmncegoQDBgEDFAAUAnSAAAAcHAK3IBqApQLMEhG0FOQh2CXAACpQAABVAeBRMkWwAAAQAmhaAAhfQAAj0j2jOQD2DOAAD0QAABfgmBaMhBlAAAIAAM6Ih9gXgEmZmgZnQGbCZDaC2Qjai2mbiZQlLh7l/hMQF/BMFLB7gEmBkgWtQl6CRoTAEQITgEF6iRQGCiVAAjUQAAjGlSiPQFSCPAADGQAADUmCCVgEliEgeeQAACLEABiQEBBjFqAAQDqAAC9goQi9AojqAAQlqAAkBhjQkAhiAAiLQAAiLEAhiQEBhjFqAAQBDAAA/AEQjnAUi0BAQkIBdAACEQAACEEIBdQEHBeF1AAIBEAAQFJgJDwhVQEHhdAAiEQAAiEkHhdQi6hCjvgTQDvATC6BCQEHBdAACEQAACEkHBdQjwBVlJAJIhEAAQl1AAkHheQkIhdAAiEQAAiEEIhdQC0hADngUQg/gEhDAAQlqAAkBBjQkABiAACLIAAAAgA0ZqJIAAgIIlGAAIAEgMQAehRAAhVQAAjzj2jPQITgDF6iSQGCiVAAjUQAAjGlSiPQFSCPAADGQAADUmCCVQl6CSoTADQD2DPAADzQAABVgeBRIgEAMMhcOAAAIgEgMQgehRAAhVQAAipB2iXQCyjiG8i6QBAgaBGgaQNqlGTVABQMAAAJ0B9QF/BMFLB8QGbCYDaC2Qjai2mbiYQlLh8l/hMQAVjEFsiMQGCiVIjAAQIjAAGDCVIAwATQTRiLWLABQDjAADfADQhDACg/AGQA/gGBDgCQAvgBAwAAQBvgBBlAJQX4AqUTDWQGLhXIJAAQHIgBFnBEQWUmmcegoQDBgFDFABQaygBVmFDQHmgzIEgdQBYg9CHg0QGDiVIjAAQIjAAGCCVIAxAUQBGAdA4AhIABAAQX0AqUPDWQGLhYIJAAQHIAAFnBEQWUmncegoQDBgEDFAAUAnSAAAAcHAK3IBqApQSpHgGfJhIAIAMMjevAAAIAAAIIkzAAIANAUgEDJ+gKxIgEAMIAEgMQAehQAAhVQAAj0j2jOQITgEF6iRQGCiVAAjUQAAjGlSiPQFSCPAADGQAADUmCCVQl6CRoTAEQD2DOAAD0QAABVgeBQgEBKPgZ8QAAC1G8B/QG8CAJzgBQJ0ABG7iAQG8h/AAi1QAAi1m8h/Qh5gjiHgZQCHAZB5AjQG8B/AAC1QAAC1m8B/Qm7CAp0gBQpzABm8iAQm8h/AAi1QAAi1G8h/QBLgWBQgSQhQAShLAWQm8B/AAC1IAAAAgEEtpgaQQAAC1G8B/QG8CAJzAAQJ0AAG7iAQG8h/AAi1QAAi0m8h/Qh5gkiHgYQCHAYB5AkQG8B/AAC0QAAC1m8B/Qm7CAp0AAQpzAAm8iAQm8h/AAi1QAAi0G8h/QBLgWBQgSQhQAShLAWQm8B/AAC0IAAAAgAQ5+KQAACLEABiQEBBiFqABQDqAAC9gpQFJgIDwhVQEHhdAAiFQAAiDkHheQi6hCjvgTQDvATC6BCQEHBeAACDQAACFkHBdQjwBVlJAIIhEAAQl1AAkHhdQkIhdAAiFQAAiDEIheQC0hADngUQjnAUi0BAQkIBeAACDQAACFEIBdQEHBdF1AAIBEAAQi9ApjqAAQlqgBkBhiQkAhiAAiLQAAiLEAhjQEBhiFqAAQBDAAA/ADQg/gDhDAAQlqAAkBBiQkABjAACLIAAAAgEERegbUQjuBVlHAJQFHgJDuhVQEHhdAAiEQAAiEkHhdQi3hBjqgUQDqAUC3BBQEHBdAACEQAACEkHBdgEj5YgaQIAAAAgElSXgjqIAAAAg");
	this.shape_3.setTransform(3131.0125,251.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roadbg, new cjs.Rectangle(-1,-176.6,6276.1,679.6), null);


(lib.desertbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.man4();
	this.instance.setTransform(599.9,14.55,0.8156,0.8156,0,0,0,149.7,275.2);

	this.instance_1 = new lib.man3();
	this.instance_1.setTransform(-650.75,22.9,0.7689,0.7689,0,0,0,136.4,255.2);

	this.instance_2 = new lib.man1();
	this.instance_2.setTransform(-1911.25,88.75,0.635,0.635,0,0,0,194.4,187.7);

	this.instance_3 = new lib.cactus3();
	this.instance_3.setTransform(2377,-57.3,0.5414,0.5414,0,0,0,90.5,214.3);

	this.instance_4 = new lib.cactus1();
	this.instance_4.setTransform(2304.5,1.6,0.9268,0.9268,0,0,0,91.9,74.2);

	this.instance_5 = new lib.cactus2();
	this.instance_5.setTransform(1482.8,-50.2,1,1,0,0,0,104.7,96.2);

	this.instance_6 = new lib.cactus1();
	this.instance_6.setTransform(465.35,-46.2,0.9268,0.9268,0,0,0,91.9,74.2);

	this.instance_7 = new lib.cactus1();
	this.instance_7.setTransform(-2878.25,16.65,0.8762,0.8762,0,0,0,91.9,74.2);

	this.instance_8 = new lib.cactus3();
	this.instance_8.setTransform(-733.3,-67.3,0.5414,0.5414,0,0,0,90.5,214.3);

	this.instance_9 = new lib.cactus1();
	this.instance_9.setTransform(533.35,-22.25,0.605,0.605,0,0,0,91.8,74.2);

	this.instance_10 = new lib.cactus3();
	this.instance_10.setTransform(-771.35,-93.9,0.5414,0.5414,0,0,0,90.5,214.3);

	this.instance_11 = new lib.cactus2();
	this.instance_11.setTransform(-1914.2,-56.2,1,1,0,0,0,104.7,96.2);

	this.instance_12 = new lib.cactus1();
	this.instance_12.setTransform(-2943.6,-19.35,0.8762,0.8762,0,0,0,91.9,74.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FACC94").ss(12,1,1).p("EBB9AAUIA+AAEhC6gATMA6bAAAMA9PAAAINNAA");
	this.shape.setTransform(3114.025,153.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F8B05B").ss(1,1,1).p("EHTKgFDQCGAZB6AjQG8B/AAC0QAAC0m8CAQm8B/pzAAQp0AAm8h/Qm7iAAAi0QAAi0G7h/QBLgWBRgSEGFHgIuQA/gGBDgCQAugCAxAAQBuAABlAJQDwATC5BCQEIBdAACEQAACEkIBeQiQAyiwAXEGChgIZQBPgOBXgHEGB6gIxQAlgBAmAAQBDAAA/AEEF4vgG+QAHgDAGgDEE8HgIHQE7hRGSAAQIjAAGCCVQAZAKAYAKQFSCPAADGQAADQlQKhEE9BABAQAcAKAbAKQFHB6DNCNEE8HgIHQCWBrAACEQAABuhcDqQhWDdimFMQgMAYgNAWQgFAJgFAJEEVOgEwQAWjEFriNQGDiVIjAAQIjAAGCCVQAZAKAYAKQBxAwBLA2EEVOgEwQCWAeCNAkQDeA6DKBLQFHB5DNCNEDQxAKnQAAgKABgJQAHi7CaikQCSicEViIQBJgiBSgjQBAgbBGgaQAPgFAOgFQNik7TAAAQMAAAJ0B+EDuXAMXQAJg4AXg2EBsCgAOQAAC0m8B/Qm8CApzAAQp0AAm8iAQm7h/AAi0QAAi0G7iAQBLgVBRgSQGKhYIKAAQHIAAFnBDQCGAZB6AjQG8CAAAC0gEneFAMCQCPkjIjjkQBAgbBGgaQNqlETVAAQMAAAJ0B9QF/BMFLB7QGbCYDaC3QCHBwA9B9EmaagABQAVjEFsiMQGCiVIjAAQIjAAGDCVQAZAJAXAKQFSCQAADFQAADTmCCVQl6CSoTAEElDcAC2Qi9ApjqAAQlqAAkBhjQkAhiAAiKQAAiLEAhjQEBhiFqAAQBDAAA/ADEiDxAMCQAelfIpkOQBJgkBSgiQBAgbBGgaQNrlETUAAQMAAAJ0B9QF/BNFMB6QFHB5DNCNEg/WgCtQAWjEFriMQGDiVIjAAQIjAAGCCVQAZAJAYAKQFSCQAADGQAADSlYKuQgGALgFALAXnAKQghABgiAAQl1AAkIhdQkHhdAAiEQAAiEEHheQC0hADogUAXnAKQi9ApjpAAQlrAAkAhiQkAhiAAiLQAAiLEAhjQEAhiFrAAQBDAAA/ADQA/gFBDgDQAugBAxAAQBuAABlAIQDwATC5BCQEIBeAACEQAACEkIBdQjvBUlKAIgElDcAC2QgiABgiAAQl1AAkHheQkIhcAAiEQAAiEEIheQC0hADngUQA/gFBDgDQAvgBAwAAQBvAABlAIQDvATC6BCQEHBeAACEQAACEkHBcQjwBVlJAIgEjvCACdQAAC1m8B/Qm7CAp0AAQpzAAm8iAQm8h/AAi1QAAizG8iAQBLgVBQgSQGLhYIJAAQHIAAFnBDQCHAZB5AjQG8CAAACzg");
	this.shape_1.setTransform(-489.0375,67.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FACC94").s().p("EglzAQ5IABgVMoMEAAAMAAAghcIQtAAMBbuAAAMDaHAAAIAUALQAhAPAbgFQAXgFAQgQMAioAAAMBoHAAAMA6GAAAIAAATIAAACMDP7AAAMBoVAAAINHAAIAUALQAhAPAbgFQAXgFAQgQMDE1AAAIgBATIABAcIAAALMA9aAAAINCAAIAAAcMAAAAgGgEHnbgP0Mg6bAAAg");
	this.shape_2.setTransform(-59.825,252.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8B05B").s().p("EHlmANRIgBgLMA9QAAAMg9QAAAIAAgcIAAgTMjE1AAAQgQAQgWAFQgcAFghgPIgUgLItHAAQFQqhAAjQQAAjGlSiPQFSCPAADGQAADQlQKhMhoVAAAQAKg4AXg2QgXA2gKA4MjP7AAAIAAgCIABgTMg6HAAAIALgWQFYquAAjSQAAjGlSiQQTSiKWLAAQDjAADfADQhDADg/AFQg/gDhDAAQlqAAkBBiQkABjAACLQAACLEABiQEBBiFqAAQDqAAC9gpIhEABQl1AAkHhdQkIhdAAiEQAAiEEIheQC0hADngUQjnAUi0BAQkIBeAACEQAACEEIBdQEHBdF1AAIBEgBQi9ApjqAAQlqAAkBhiQkAhiAAiLQAAiLEAhjQEBhiFqAAQBDAAA/ADQA/gFBDgDQAvgBAwAAQBvAABlAIQX4AqUSDXQhPAShLAVQm8CAAAC0QAAC0G8B/QG7CAJzAAQJ0AAG7iAQG8h/AAi0QAAi0m8iAQh5gjiHgZQWUmmcegoQDBgEDFAAUAnSAAAAcHAK2IBhAnIgcAKQhGAahAAbQhSAjhJAiQkWCIiSCcQiZCkgIC7IAAATIAAgTQAIi7CZikQCSicEWiIQBJgiBSgjQBAgbBGgaIAcgKQNik7TBAAQMAAAJ0B+QAVjEFsiNQGCiVIjAAQIjAAGDCVIAwAUQBxAwBLA2QE7hRGSAAQIjAAGDCVIAwAUQTSiLWLAAQDjAADfAEQhDACg/AGQA/gGBDgCQAvgCAwAAQBvAABlAJQX4ApUTDXQGLhYIJAAQHIAAFnBEQWUmmcegoQDBgFDFAAUAnSAAAAcHAK3IBqAqQPkGQHGHrIALALgED4HABAQhWDdimFMIgYAuIgLASIALgSIAYguQCmlMBWjdQBcjrAAhtQAAiEiWhrQCWBrAACEQAABthcDrgEGBhAHfQJ0AAG7h/QG8iAAAi0QAAi0m8h/Qh5gjiHgZQCHAZB5AjQG8B/AAC0QAAC0m8CAQm7B/p0AAQpzAAm8h/Qm8iAAAi0QAAi0G8h/QBLgWBQgSQhQAShLAWQm8B/AAC0QAAC0G8CAQG8B/JzAAIAAAAgED4+ABUQFIB6DNCNQjNiNlIh6Ig3gUIA3AUgEDU3gDuQDeA6DKBLQFIB5DNCNQjNiNlIh5QjKhLjeg6QiNgkiVgeQCVAeCNAkgEFNrgAXQiQAyixAXQCxgXCQgyQEHheAAiEQAAiEkHhdQi4hCjugTIgDAAIADAAQDuATC4BCQEHBdAACEQAACEkHBegEgkYgBSQjwBUlJAIQFJgIDwhUQEHhdAAiEQAAiEkHheQi6hCjvgTQDvATC6BCQEHBeAACEQAACEkHBdgEEz2gG+IANgBIAAgFIgNAGgEE9AgIxIAAAXIAnABQBPgOBXgHQg/gEhDAAIhLABgEHllANGgEjs2AMNIgTgLMjaIAAAQg9h9iHhwQITgEF6iSQGDiVAAjTQAAjFlSiQQFSCQAADFQAADTmDCVQl6CSoTAEQjai3maiYQlMh7l/hMQAWjEFriMQGDiVIjAAQIjAAGCCVIAxATQTSiKWKAAQDkAADfADQhDADg/AFQg9gDhBAAIgEAAQlrAAkABiQkABjAACLQAACKEABiQEABjFrAAQDpAAC9gpQFKgIDvhVQEIhcAAiEQAAiEkIheQi5hCjwgTQDwATC5BCQEIBeAACEQAACEkIBcQjvBVlKAIQi9ApjpAAQlrAAkAhjQkAhiAAiKQAAiLEAhjQEAhiFrAAIAEAAQBBAAA9ADQjoAUi0BAQkHBeAACEQAACEEHBcQEIBeF1AAIBDgBIhDABQl1AAkIheQkHhcAAiEQAAiEEHheQC0hADogUQA/gFBDgDQAugBAxAAQBuAABlAIQX5AqUTDXQhRAShLAVQm7CAAACzQAAC1G7B/QG8CAJ0AAQJzAAG8iAQG8h/AAi1QAAizm8iAQh6gjiGgZQWUmmcdgoQDBgEDFAAUAnSAAAAcHAK1IBrAqIBBAbQAJAgAPAfQopEOgfFfMginAAAQgQAQgXAFIgPABQgWAAgYgLgEhgkAMCMhoHAAAQAflfIpkOQBJgkBSgiQBAgbBGgaQNqlETVAAQMAAAJ0B9QF/BNFLB6QFIB5DNCNQjNiNlIh5QlLh6l/hNQAVjEFsiMQGCiVIjAAQIjAAGDCVIAwATQFSCQAADGQAADSlYKuIgLAWgEoi/AMCQCPkjIjjkQBAgbBGgaQNrlETUAAQMAAAJ0B9QF/BMFMB7QGaCYDaC3QCHBwA9B9gElcWAHRQm7h/AAi1QAAizG7iAQBLgVBRgSQGKhYIKAAQHIAAFnBDQCGAZB6AjQG8CAAACzQAAC1m8B/Qm8CApzAAQp0AAm8iAgEnKVAIVIAAAAgAhRElQm8h/AAi0QAAi0G8iAQBLgVBPgSQGLhYIJAAQHIAAFnBDQCHAZB5AjQG8CAAAC0QAAC0m8B/Qm7CAp0AAQpzAAm7iAgEkz7ACdIAAAAgEAnIgAOIAAAAgEmM6gG9IAAAAg");
	this.shape_3.setTransform(-48.0625,67.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.desertbg, new cjs.Rectangle(-3655.7,-209.9,7204,570.9), null);


(lib.cloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud3();
	this.instance.setTransform(547.4,108.1,1,1,0,0,0,77,20);

	this.instance_1 = new lib.cloud2();
	this.instance_1.setTransform(227.85,46,1,1,0,0,0,187.5,46);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAsirQAZgMAfgLQCXgzDWAAQDWAACWAzQA2ASAiAVQA/AmAAAvQAAAvg/AlQgiAVg2ASQhTAchkANQhVAKhgAAQjWAAiXgzQg0gSgigUQgvgbgMgiQgXAJgcAJQiXAsjXAAQjWAAiYgsQgqgNgfgOQhOglAAguQAAgvBOgkQAfgPAqgMQCYguDWAAQDXAACXAuQBuAhAeAsQAGAIADAJQACAIAAAIQAAAqhAAiQgQAIgUAIAKGBeQBKAbAAAhQAAA6jmApQjmAplEAAQlFAAjmgpQjmgpAAg6QAAg6DmgpQDmgpFFAAQAoAAAmAB");
	this.shape.setTransform(-29.1,157.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AprD+QjmgpAAg6QAAg7DmgoQDmgpFFgBIBPABQgwgbgMgiQAVgIAPgHQBAgjAAgqQAAgIgCgIQgDgIgGgJQAGAJADAIQACAIAAAIQAAAqhAAjQgPAHgVAIQgWAJgdAJQiXAsjWAAQjXAAiYgsQgqgNgfgOQhOglAAguQAAgvBOgkQAfgPAqgMQCYgtDXAAQDWAACXAtQBvAiAdArQAZgMAfgLQCYgzDVAAQDWAACWAzQA2ASAiAVQA/AmAAAwQAAAug/AlQgiAVg2ASQhTAchkANQhVAKhgAAQjVABiYg0Qg0gRghgVQAhAVA0ARQCYA0DVgBQBgAABVgKQBKAbAAAiQAAA6jmApQjmAolEAAQlFAAjmgog");
	this.shape_1.setTransform(-29.1,157.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud1, new cjs.Rectangle(-129.6,-2.5,756.5,192.1), null);


(lib.Scene_1_road = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// road
	this.instance = new lib.roadbg();
	this.instance.setTransform(1103.85,573.8,1,1,0,0,0,1285.9,251.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).wait(1).to({regX:3137.3,regY:162.8,x:2936.3,y:485.1},0).wait(1).to({x:2917.3},0).wait(1).to({x:2898.3},0).wait(1).to({x:2879.35},0).wait(1).to({x:2860.35},0).wait(1).to({x:2841.35},0).wait(1).to({x:2822.35},0).wait(1).to({x:2803.4},0).wait(1).to({x:2784.4},0).wait(1).to({x:2765.4},0).wait(1).to({x:2746.4},0).wait(1).to({x:2727.45},0).wait(1).to({x:2708.45},0).wait(1).to({x:2689.45},0).wait(1).to({x:2670.45},0).wait(1).to({x:2651.5},0).wait(1).to({x:2632.5},0).wait(1).to({x:2613.5},0).wait(1).to({x:2594.5},0).wait(1).to({x:2575.55},0).wait(1).to({x:2556.55},0).wait(1).to({x:2537.55},0).wait(1).to({x:2518.55},0).wait(1).to({x:2499.6},0).wait(1).to({x:2480.6},0).wait(1).to({x:2461.6},0).wait(1).to({x:2442.6},0).wait(1).to({x:2423.65},0).wait(1).to({x:2404.65},0).wait(1).to({x:2385.65},0).wait(1).to({x:2366.7},0).wait(1).to({x:2347.7},0).wait(1).to({x:2328.7},0).wait(1).to({x:2309.7},0).wait(1).to({x:2290.75},0).wait(1).to({x:2271.75},0).wait(1).to({x:2252.75},0).wait(1).to({x:2233.75},0).wait(1).to({x:2214.8},0).wait(1).to({x:2195.8},0).wait(1).to({x:2176.8},0).wait(1).to({x:2157.8},0).wait(1).to({x:2138.85},0).wait(1).to({x:2119.85},0).wait(1).to({x:2100.85},0).wait(1).to({x:2081.85},0).wait(1).to({x:2062.9},0).wait(1).to({x:2043.9},0).wait(1).to({x:2024.9},0).wait(1).to({x:2005.9},0).wait(1).to({x:1986.95},0).wait(1).to({x:1967.95},0).wait(1).to({x:1948.95},0).wait(1).to({x:1929.95},0).wait(1).to({x:1911},0).wait(1).to({x:1892},0).wait(1).to({x:1873},0).wait(1).to({x:1854},0).wait(1).to({x:1835.05},0).wait(1).to({x:1816.05},0).wait(1).to({x:1797.05},0).wait(1).to({x:1778.1},0).wait(1).to({x:1759.1},0).wait(1).to({x:1740.1},0).wait(1).to({x:1721.1},0).wait(1).to({x:1702.15},0).wait(1).to({x:1683.15},0).wait(1).to({x:1664.15},0).wait(1).to({x:1645.15},0).wait(1).to({x:1626.2},0).wait(1).to({x:1607.2},0).wait(1).to({x:1588.2},0).wait(1).to({x:1569.2},0).wait(1).to({x:1550.25},0).wait(1).to({x:1531.25},0).wait(1).to({x:1512.25},0).wait(1).to({x:1493.25},0).wait(1).to({x:1474.3},0).wait(1).to({x:1455.3},0).wait(1).to({x:1436.3},0).wait(1).to({x:1417.3},0).wait(1).to({x:1398.35},0).wait(1).to({x:1379.35},0).wait(1).to({x:1360.35},0).wait(1).to({x:1341.35},0).wait(1).to({x:1322.4},0).wait(1).to({x:1303.4},0).wait(1).to({x:1284.4},0).wait(1).to({x:1265.4},0).wait(1).to({x:1246.45},0).wait(1).to({x:1227.45},0).wait(1).to({x:1208.45},0).wait(1).to({x:1189.5},0).wait(1).to({x:1170.5},0).wait(1).to({x:1151.5},0).wait(1).to({x:1132.5},0).wait(1).to({x:1113.55},0).wait(1).to({x:1094.55},0).wait(1).to({x:1075.55},0).wait(1).to({x:1056.55},0).wait(1).to({x:1037.6},0).wait(1).to({x:1018.6},0).wait(1).to({x:999.6},0).wait(1).to({x:980.6},0).wait(1).to({x:961.65},0).wait(1).to({x:942.65},0).wait(1).to({x:923.65},0).wait(1).to({x:904.65},0).wait(1).to({x:885.7},0).wait(1).to({x:866.7},0).wait(1).to({x:847.7},0).wait(1).to({x:828.7},0).wait(1).to({x:809.75},0).wait(1).to({x:790.75},0).wait(1).to({x:771.75},0).wait(1).to({x:752.75},0).wait(1).to({x:733.8},0).wait(1).to({x:714.8},0).wait(1).to({x:695.8},0).wait(1).to({x:676.85},0).wait(1).to({x:657.85},0).wait(1).to({x:638.85},0).wait(1).to({x:619.85},0).wait(1).to({x:600.9},0).wait(1).to({x:581.9},0).wait(1).to({x:562.9},0).wait(1).to({x:543.9},0).wait(1).to({x:524.95},0).wait(1).to({x:505.95},0).wait(1).to({x:486.95},0).wait(1).to({x:467.95},0).wait(1).to({x:449},0).wait(1).to({x:430},0).wait(1).to({x:411},0).wait(1).to({x:392},0).wait(1).to({x:373.05},0).wait(1).to({x:354.05},0).wait(1).to({x:335.05},0).wait(1).to({x:316.05},0).wait(1).to({x:297.1},0).wait(1).to({x:278.1},0).wait(1).to({x:259.1},0).wait(1).to({x:240.1},0).wait(1).to({x:221.15},0).wait(1).to({x:202.15},0).wait(1).to({x:183.15},0).wait(1).to({x:164.15},0).wait(1).to({x:145.2},0).wait(1).to({x:126.2},0).wait(1).to({x:107.2},0).wait(1).to({x:88.25},0).wait(1).to({x:69.25},0).wait(1).to({x:50.25},0).wait(1).to({x:31.25},0).wait(1).to({x:12.3},0).wait(1).to({x:-6.7},0).wait(1).to({x:-25.7},0).wait(1).to({x:-44.7},0).wait(1).to({x:-63.65},0).wait(1).to({x:-82.65},0).wait(1).to({x:-101.65},0).wait(1).to({x:-120.65},0).wait(1).to({x:-139.6},0).wait(1).to({x:-158.6},0).wait(1).to({x:-177.6},0).wait(1).to({x:-196.6},0).wait(1).to({x:-215.55},0).wait(1).to({x:-234.55},0).wait(1).to({x:-253.55},0).wait(1).to({x:-272.55},0).wait(1).to({x:-291.5},0).wait(1).to({x:-310.5},0).wait(1).to({x:-329.5},0).wait(1).to({x:-348.5},0).wait(1).to({x:-367.45},0).wait(1).to({x:-386.45},0).wait(1).to({x:-405.45},0).wait(1).to({x:-424.45},0).wait(1).to({x:-443.4},0).wait(1).to({x:-462.4},0).wait(1).to({x:-481.4},0).wait(1).to({x:-500.35},0).wait(1).to({x:-519.35},0).wait(1).to({x:-538.35},0).wait(1).to({x:-557.35},0).wait(1).to({x:-576.3},0).wait(1).to({x:-595.3},0).wait(1).to({x:-614.3},0).wait(1).to({x:-633.3},0).wait(1).to({x:-652.25},0).wait(1).to({x:-671.25},0).wait(1).to({x:-690.25},0).wait(1).to({x:-709.25},0).wait(1).to({x:-728.2},0).wait(1).to({x:-747.2},0).wait(1).to({x:-766.2},0).wait(1).to({x:-785.2},0).wait(1).to({x:-804.15},0).wait(1).to({x:-823.15},0).wait(1).to({x:-842.15},0).wait(1).to({x:-861.15},0).wait(1).to({x:-880.1},0).wait(1).to({x:-899.1},0).wait(1).to({x:-918.1},0).wait(1).to({x:-937.1},0).wait(1).to({x:-956.05},0).wait(1).to({x:-975.05},0).wait(1).to({x:-994.05},0).wait(1).to({x:-1013.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_desert = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// desert
	this.instance = new lib.desertbg();
	this.instance.setTransform(3269.5,434.5,1,1,0,0,0,-53.8,75.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-53.7,x:3250.5},0).wait(1).to({x:3231.45},0).wait(1).to({x:3212.35},0).wait(1).to({x:3193.3},0).wait(1).to({x:3174.25},0).wait(1).to({x:3155.15},0).wait(1).to({x:3136.1},0).wait(1).to({x:3117.05},0).wait(1).to({x:3097.95},0).wait(1).to({x:3078.9},0).wait(1).to({x:3059.85},0).wait(1).to({x:3040.75},0).wait(1).to({x:3021.7},0).wait(1).to({x:3002.65},0).wait(1).to({x:2983.55},0).wait(1).to({x:2964.5},0).wait(1).to({x:2945.45},0).wait(1).to({x:2926.35},0).wait(1).to({x:2907.3},0).wait(1).to({x:2888.25},0).wait(1).to({x:2869.15},0).wait(1).to({x:2850.1},0).wait(1).to({x:2831.05},0).wait(1).to({x:2811.95},0).wait(1).to({x:2792.9},0).wait(1).to({x:2773.85},0).wait(1).to({x:2754.75},0).wait(1).to({x:2735.7},0).wait(1).to({x:2716.65},0).wait(1).to({x:2697.55},0).wait(1).to({x:2678.5},0).wait(1).to({x:2659.45},0).wait(1).to({x:2640.35},0).wait(1).to({x:2621.3},0).wait(1).to({x:2602.25},0).wait(1).to({x:2583.15},0).wait(1).to({x:2564.1},0).wait(1).to({x:2545},0).wait(1).to({x:2525.95},0).wait(1).to({x:2506.9},0).wait(1).to({x:2487.8},0).wait(1).to({x:2468.75},0).wait(1).to({x:2449.7},0).wait(1).to({x:2430.6},0).wait(1).to({x:2411.55},0).wait(1).to({x:2392.5},0).wait(1).to({x:2373.4},0).wait(1).to({x:2354.35},0).wait(1).to({x:2335.3},0).wait(1).to({x:2316.2},0).wait(1).to({x:2297.15},0).wait(1).to({x:2278.1},0).wait(1).to({x:2259},0).wait(1).to({x:2239.95},0).wait(1).to({x:2220.9},0).wait(1).to({x:2201.8},0).wait(1).to({x:2182.75},0).wait(1).to({x:2163.7},0).wait(1).to({x:2144.6},0).wait(1).to({x:2125.55},0).wait(1).to({x:2106.5},0).wait(1).to({x:2087.4},0).wait(1).to({x:2068.35},0).wait(1).to({x:2049.3},0).wait(1).to({x:2030.2},0).wait(1).to({x:2011.15},0).wait(1).to({x:1992.1},0).wait(1).to({x:1973},0).wait(1).to({x:1953.95},0).wait(1).to({x:1934.9},0).wait(1).to({x:1915.8},0).wait(1).to({x:1896.75},0).wait(1).to({x:1877.65},0).wait(1).to({x:1858.6},0).wait(1).to({x:1839.55},0).wait(1).to({x:1820.45},0).wait(1).to({x:1801.4},0).wait(1).to({x:1782.35},0).wait(1).to({x:1763.25},0).wait(1).to({x:1744.2},0).wait(1).to({x:1725.15},0).wait(1).to({x:1706.05},0).wait(1).to({x:1687},0).wait(1).to({x:1667.95},0).wait(1).to({x:1648.85},0).wait(1).to({x:1629.8},0).wait(1).to({x:1610.75},0).wait(1).to({x:1591.65},0).wait(1).to({x:1572.6},0).wait(1).to({x:1553.55},0).wait(1).to({x:1534.45},0).wait(1).to({x:1515.4},0).wait(1).to({x:1496.35},0).wait(1).to({x:1477.25},0).wait(1).to({x:1458.2},0).wait(1).to({x:1439.15},0).wait(1).to({x:1420.05},0).wait(1).to({x:1401},0).wait(1).to({x:1381.95},0).wait(1).to({x:1362.85},0).wait(1).to({x:1343.8},0).wait(1).to({x:1324.75},0).wait(1).to({x:1305.65},0).wait(1).to({x:1286.6},0).wait(1).to({x:1267.55},0).wait(1).to({x:1248.45},0).wait(1).to({x:1229.4},0).wait(1).to({x:1210.3},0).wait(1).to({x:1191.25},0).wait(1).to({x:1172.2},0).wait(1).to({x:1153.1},0).wait(1).to({x:1134.05},0).wait(1).to({x:1115},0).wait(1).to({x:1095.9},0).wait(1).to({x:1076.85},0).wait(1).to({x:1057.8},0).wait(1).to({x:1038.7},0).wait(1).to({x:1019.65},0).wait(1).to({x:1000.6},0).wait(1).to({x:981.5},0).wait(1).to({x:962.45},0).wait(1).to({x:943.4},0).wait(1).to({x:924.3},0).wait(1).to({x:905.25},0).wait(1).to({x:886.2},0).wait(1).to({x:867.1},0).wait(1).to({x:848.05},0).wait(1).to({x:829},0).wait(1).to({x:809.9},0).wait(1).to({x:790.85},0).wait(1).to({x:771.8},0).wait(1).to({x:752.7},0).wait(1).to({x:733.65},0).wait(1).to({x:714.6},0).wait(1).to({x:695.5},0).wait(1).to({x:676.45},0).wait(1).to({x:657.4},0).wait(1).to({x:638.3},0).wait(1).to({x:619.25},0).wait(1).to({x:600.2},0).wait(1).to({x:581.1},0).wait(1).to({x:562.05},0).wait(1).to({x:542.95},0).wait(1).to({x:523.9},0).wait(1).to({x:504.85},0).wait(1).to({x:485.75},0).wait(1).to({x:466.7},0).wait(1).to({x:447.65},0).wait(1).to({x:428.55},0).wait(1).to({x:409.5},0).wait(1).to({x:390.45},0).wait(1).to({x:371.35},0).wait(1).to({x:352.3},0).wait(1).to({x:333.25},0).wait(1).to({x:314.15},0).wait(1).to({x:295.1},0).wait(1).to({x:276.05},0).wait(1).to({x:256.95},0).wait(1).to({x:237.9},0).wait(1).to({x:218.85},0).wait(1).to({x:199.75},0).wait(1).to({x:180.7},0).wait(1).to({x:161.65},0).wait(1).to({x:142.55},0).wait(1).to({x:123.5},0).wait(1).to({x:104.45},0).wait(1).to({x:85.35},0).wait(1).to({x:66.3},0).wait(1).to({x:47.25},0).wait(1).to({x:28.15},0).wait(1).to({x:9.1},0).wait(1).to({x:-9.95},0).wait(1).to({x:-29.05},0).wait(1).to({x:-48.1},0).wait(1).to({x:-67.1},0).wait(1).to({x:-86.2},0).wait(1).to({x:-105.25},0).wait(1).to({x:-124.35},0).wait(1).to({x:-143.4},0).wait(1).to({x:-162.45},0).wait(1).to({x:-181.55},0).wait(1).to({x:-200.6},0).wait(1).to({x:-219.65},0).wait(1).to({x:-238.75},0).wait(1).to({x:-257.8},0).wait(1).to({x:-276.85},0).wait(1).to({x:-295.95},0).wait(1).to({x:-315},0).wait(1).to({x:-334.05},0).wait(1).to({x:-353.15},0).wait(1).to({x:-372.2},0).wait(1).to({x:-391.25},0).wait(1).to({x:-410.35},0).wait(1).to({x:-429.4},0).wait(1).to({x:-448.45},0).wait(1).to({x:-467.55},0).wait(1).to({x:-486.6},0).wait(1).to({x:-505.65},0).wait(1).to({x:-524.75},0).wait(1).to({x:-543.8},0).wait(1).to({x:-562.85},0).wait(1).to({x:-581.95},0).wait(1).to({x:-601},0).wait(1).to({x:-620.05},0).wait(1).to({x:-639.15},0).wait(1).to({x:-658.2},0).wait(1).to({x:-677.25},0).wait(1).to({x:-696.35},0).wait(1).to({x:-715.4},0).wait(1).to({x:-734.45},0).wait(1).to({x:-753.55},0).wait(1).to({x:-772.6},0).wait(1).to({x:-791.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.instance = new lib.cloud1();
	this.instance.setTransform(1474.75,70.65,1,1,0,0,0,98,29.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:248.7,regY:93.5,x:1605.2,y:134.75},0).wait(1).to({x:1585},0).wait(1).to({x:1564.8},0).wait(1).to({x:1544.6},0).wait(1).to({x:1524.4},0).wait(1).to({x:1504.2},0).wait(1).to({x:1484},0).wait(1).to({x:1463.8},0).wait(1).to({x:1443.6},0).wait(1).to({x:1423.4},0).wait(1).to({x:1403.2},0).wait(1).to({x:1383},0).wait(1).to({x:1362.8},0).wait(1).to({x:1342.6},0).wait(1).to({x:1322.4},0).wait(1).to({x:1302.2},0).wait(1).to({x:1282},0).wait(1).to({x:1261.75},0).wait(1).to({x:1241.55},0).wait(1).to({x:1221.35},0).wait(1).to({x:1201.15},0).wait(1).to({x:1180.95},0).wait(1).to({x:1160.75},0).wait(1).to({x:1140.55},0).wait(1).to({x:1120.35},0).wait(1).to({x:1100.15},0).wait(1).to({x:1079.95},0).wait(1).to({x:1059.75},0).wait(1).to({x:1039.55},0).wait(1).to({x:1019.35},0).wait(1).to({x:999.15},0).wait(1).to({x:978.95},0).wait(1).to({x:958.75},0).wait(1).to({x:938.55},0).wait(1).to({x:918.3},0).wait(1).to({x:898.1},0).wait(1).to({x:877.9},0).wait(1).to({x:857.7},0).wait(1).to({x:837.5},0).wait(1).to({x:817.3},0).wait(1).to({x:797.1},0).wait(1).to({x:776.9},0).wait(1).to({x:756.7},0).wait(1).to({x:736.5},0).wait(1).to({x:716.3},0).wait(1).to({x:696.1},0).wait(1).to({x:675.9},0).wait(1).to({x:655.7},0).wait(1).to({x:635.5},0).wait(1).to({x:615.3},0).wait(1).to({x:595.1},0).wait(1).to({x:574.85},0).wait(1).to({x:554.65},0).wait(1).to({x:534.45},0).wait(1).to({x:514.25},0).wait(1).to({x:494.05},0).wait(1).to({x:473.85},0).wait(1).to({x:453.65},0).wait(1).to({x:433.45},0).wait(1).to({x:413.25},0).wait(1).to({x:393.05},0).wait(1).to({x:372.85},0).wait(1).to({x:352.65},0).wait(1).to({x:332.45},0).wait(1).to({x:312.25},0).wait(1).to({x:292.05},0).wait(1).to({x:271.85},0).wait(1).to({x:251.65},0).wait(1).to({x:231.45},0).wait(1).to({x:211.25},0).wait(1).to({x:191.05},0).wait(1).to({x:170.85},0).wait(1).to({x:150.65},0).wait(1).to({x:130.45},0).wait(1).to({x:110.25},0).wait(1).to({x:90.05},0).wait(1).to({x:69.85},0).wait(1).to({x:49.65},0).wait(1).to({x:29.45},0).wait(1).to({x:9.25},0).wait(1).to({x:-10.95},0).wait(1).to({x:-31.15},0).wait(1).to({x:-51.35},0).wait(1).to({x:-71.55},0).wait(1).to({x:-91.8},0).wait(1).to({x:-112},0).wait(1).to({x:-132.2},0).wait(1).to({x:-152.4},0).wait(1).to({x:-172.6},0).wait(1).to({x:-192.8},0).wait(1).to({x:-213},0).wait(1).to({x:-233.2},0).wait(1).to({x:-253.4},0).wait(1).to({x:-273.6},0).wait(1).to({x:-293.8},0).wait(1).to({x:-314},0).wait(1).to({x:-334.2},0).wait(1).to({x:-354.4},0).wait(1).to({x:-374.6},0).wait(1).to({x:-394.8},0).wait(1).to({x:-415},0).wait(1).to({x:-435.25},0).wait(91).to({regX:98,regY:29.4,x:1474.75,y:70.65},0).wait(1).to({regX:248.7,regY:93.5,x:1610.4,y:134.75},0).wait(1).to({x:1595.35},0).wait(1).to({x:1580.3},0).wait(1).to({x:1565.25},0).wait(1).to({x:1550.2},0).wait(1).to({x:1535.2},0).wait(1).to({x:1520.15},0).wait(1).to({x:1505.1},0).wait(1).to({x:1490.05},0).wait(1).to({x:1475},0).wait(1).to({x:1459.95},0).wait(1).to({x:1444.95},0).wait(1).to({x:1429.9},0).wait(1).to({x:1414.85},0).wait(1).to({x:1399.8},0).wait(1).to({x:1384.75},0).wait(1).to({x:1369.7},0).wait(1).to({x:1354.7},0).wait(1).to({x:1339.65},0).wait(1).to({x:1324.6},0).wait(1).to({x:1309.55},0).wait(1).to({x:1294.5},0).wait(1).to({x:1279.45},0).wait(1).to({x:1264.45},0).wait(1).to({x:1249.4},0).wait(1).to({x:1234.35},0).wait(1).to({x:1219.3},0).wait(1).to({x:1204.25},0).wait(1).to({x:1189.2},0).wait(1).to({x:1174.2},0).wait(1).to({x:1159.15},0).wait(1).to({x:1144.1},0).wait(1).to({x:1129.05},0).wait(1).to({x:1114},0).wait(1).to({x:1098.95},0).wait(1).to({x:1083.95},0).wait(1).to({x:1068.9},0).wait(1).to({x:1053.85},0).wait(1).to({x:1038.8},0).wait(1).to({x:1023.75},0).wait(1).to({x:1008.7},0).wait(1).to({x:993.7},0).wait(1).to({x:978.65},0).wait(1).to({x:963.6},0).wait(1).to({x:948.55},0).wait(1).to({x:933.5},0).wait(1).to({x:918.45},0).wait(1).to({x:903.45},0).wait(1).to({x:888.4},0).wait(1).to({x:873.35},0).wait(1).to({x:858.3},0).wait(1).to({x:843.25},0).wait(1).to({x:828.2},0).wait(1).to({x:813.2},0).wait(1).to({x:798.15},0).wait(1).to({x:783.1},0).wait(1).to({x:768.05},0).wait(1).to({x:753},0).wait(1).to({x:737.95},0).wait(1).to({x:722.95},0).wait(1).to({x:707.9},0).wait(1).to({x:692.85},0).wait(1).to({x:677.8},0).wait(1).to({x:662.75},0).wait(1).to({x:647.7},0).wait(1).to({x:632.7},0).wait(1).to({x:617.65},0).wait(1).to({x:602.6},0).wait(1).to({x:587.55},0).wait(1).to({x:572.5},0).wait(1).to({x:557.45},0).wait(1).to({x:542.45},0).wait(1).to({x:527.4},0).wait(1).to({x:512.35},0).wait(1).to({x:497.3},0).wait(1).to({x:482.25},0).wait(1).to({x:467.2},0).wait(1).to({x:452.2},0).wait(1).to({x:437.15},0).wait(1).to({x:422.1},0).wait(1).to({x:407.05},0).wait(1).to({x:392},0).wait(1).to({x:376.95},0).wait(1).to({x:361.95},0).wait(1).to({x:346.9},0).wait(1).to({x:331.85},0).wait(1).to({x:316.8},0).wait(1).to({x:301.75},0).wait(1).to({x:286.7},0).wait(1).to({x:271.7},0).wait(1).to({x:256.65},0).wait(1).to({x:241.65},0).wait(1).to({x:226.6},0).wait(1).to({x:211.55},0).wait(1).to({x:196.5},0).wait(1).to({x:181.5},0).wait(1).to({x:166.45},0).wait(1).to({x:151.4},0).wait(1).to({x:136.35},0).wait(1).to({x:121.3},0).wait(1).to({x:106.25},0).wait(1).to({x:91.25},0).wait(1).to({x:76.2},0).wait(1).to({x:61.15},0).wait(1).to({x:46.1},0).wait(1).to({x:31.05},0).wait(1).to({x:16},0).wait(1).to({x:1},0).wait(1).to({x:-14.05},0).wait(1).to({x:-29.1},0).wait(1).to({x:-44.15},0).wait(1).to({x:-59.2},0).wait(1).to({x:-74.25},0).wait(1).to({x:-89.25},0).wait(1).to({x:-104.3},0).wait(1).to({x:-119.35},0).wait(1).to({x:-134.4},0).wait(1).to({x:-149.45},0).wait(1).to({x:-164.5},0).wait(1).to({x:-179.5},0).wait(1).to({x:-194.55},0).wait(1).to({x:-209.6},0).wait(1).to({x:-224.65},0).wait(1).to({x:-239.7},0).wait(1).to({x:-254.75},0).wait(1).to({x:-269.75},0).wait(1).to({x:-284.8},0).wait(1).to({x:-299.85},0).wait(1).to({x:-314.9},0).wait(1).to({x:-329.95},0).wait(1).to({x:-345},0).wait(1).to({x:-360},0).wait(1).to({x:-375.05},0).wait(1).to({x:-390.1},0).wait(1).to({x:-405.15},0).wait(1).to({x:-420.2},0).wait(1).to({x:-435.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.evolution = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,585];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start_btn = this.actions.start_btn;
		var self = this;
		self.stop()
		
		self.start_btn.addEventListener("click",startPlay);
		
		function startPlay() {
		self.gotoAndPlay(1);
			
			
		}
	}
	this.frame_1 = function() {
		this.start_btn = undefined;
		playSound("naturlBlues");
	}
	this.frame_585 = function() {
		this.playAgain_btn = this.actions.playAgain_btn;
		this.___loopingOver___ = true;
		var self = this;
		self.stop();
		
		self.playAgain_btn.addEventListener("click",playAgain);
		
		function playAgain() {
		self.gotoAndPlay(1);	
			
		}
		
		createjs.Sound.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(584).call(this.frame_585).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(430).to({_off:false},0).wait(1).to({scaleX:0.9789,scaleY:0.9789,x:638.8283,y:360.0359},0).wait(1).to({scaleX:0.9579,scaleY:0.9579,x:637.6565,y:360.0717},0).wait(1).to({scaleX:0.9368,scaleY:0.9368,x:636.4848,y:360.1076},0).wait(1).to({scaleX:0.9158,scaleY:0.9158,x:635.313,y:360.1435},0).wait(1).to({scaleX:0.8947,scaleY:0.8947,x:634.1413,y:360.1794},0).wait(1).to({scaleX:0.8736,scaleY:0.8736,x:632.9696,y:360.2152},0).wait(1).to({scaleX:0.8526,scaleY:0.8526,x:631.7978,y:360.2511},0).wait(1).to({scaleX:0.8315,scaleY:0.8315,x:630.6261,y:360.287},0).wait(1).to({scaleX:0.8105,scaleY:0.8105,x:629.4544,y:360.3228},0).wait(1).to({scaleX:0.7894,scaleY:0.7894,x:628.2826,y:360.3587},0).wait(1).to({scaleX:0.7683,scaleY:0.7683,x:627.1109,y:360.3946},0).wait(1).to({scaleX:0.7473,scaleY:0.7473,x:625.9391,y:360.4304},0).wait(1).to({scaleX:0.7262,scaleY:0.7262,x:624.7674,y:360.4663},0).wait(1).to({scaleX:0.7052,scaleY:0.7052,x:623.5957,y:360.5022},0).wait(1).to({scaleX:0.6841,scaleY:0.6841,x:622.4239,y:360.538},0).wait(1).to({scaleX:0.663,scaleY:0.663,x:621.2522,y:360.5739},0).wait(1).to({scaleX:0.642,scaleY:0.642,x:620.0804,y:360.6098},0).wait(1).to({scaleX:0.6209,scaleY:0.6209,x:618.9087,y:360.6457},0).wait(1).to({scaleX:0.5999,scaleY:0.5999,x:617.737,y:360.6815},0).wait(1).to({scaleX:0.5788,scaleY:0.5788,x:616.5652,y:360.7174},0).wait(1).to({scaleX:0.5577,scaleY:0.5577,x:615.3935,y:360.7533},0).wait(1).to({scaleX:0.5367,scaleY:0.5367,x:614.2217,y:360.7891},0).wait(1).to({scaleX:0.5156,scaleY:0.5156,x:613.05,y:360.825},0).wait(1).to({scaleX:0.4946,scaleY:0.4946,x:611.8783,y:360.8609},0).wait(1).to({scaleX:0.4735,scaleY:0.4735,x:610.7065,y:360.8967},0).wait(1).to({scaleX:0.4524,scaleY:0.4524,x:609.5348,y:360.9326},0).wait(1).to({scaleX:0.4314,scaleY:0.4314,x:608.363,y:360.9685},0).wait(1).to({scaleX:0.4103,scaleY:0.4103,x:607.1913,y:361.0044},0).wait(1).to({scaleX:0.3893,scaleY:0.3893,x:606.0196,y:361.0402},0).wait(1).to({scaleX:0.3682,scaleY:0.3682,x:604.8478,y:361.0761},0).wait(1).to({scaleX:0.3471,scaleY:0.3471,x:603.6761,y:361.112},0).wait(1).to({scaleX:0.3261,scaleY:0.3261,x:602.5044,y:361.1478},0).wait(1).to({scaleX:0.305,scaleY:0.305,x:601.3326,y:361.1837},0).wait(1).to({scaleX:0.284,scaleY:0.284,x:600.1609,y:361.2196},0).wait(1).to({scaleX:0.2629,scaleY:0.2629,x:598.9891,y:361.2554},0).wait(1).to({scaleX:0.2418,scaleY:0.2418,x:597.8174,y:361.2913},0).wait(1).to({scaleX:0.2208,scaleY:0.2208,x:596.6457,y:361.3272},0).wait(1).to({scaleX:0.1997,scaleY:0.1997,x:595.4739,y:361.363},0).wait(1).to({scaleX:0.1787,scaleY:0.1787,x:594.3022,y:361.3989},0).wait(1).to({scaleX:0.1576,scaleY:0.1576,x:593.1304,y:361.4348},0).wait(1).to({scaleX:0.1365,scaleY:0.1365,x:591.9587,y:361.4707},0).wait(1).to({scaleX:0.1155,scaleY:0.1155,x:590.787,y:361.5065},0).wait(1).to({scaleX:0.0944,scaleY:0.0944,x:589.6152,y:361.5424},0).wait(1).to({scaleX:0.0734,scaleY:0.0734,x:588.4435,y:361.5783},0).wait(1).to({scaleX:0.0523,scaleY:0.0523,x:587.2717,y:361.6141},0).wait(1).to({scaleX:0.0313,scaleY:0.0313,x:586.1,y:361.65},0).wait(1).to({scaleX:0.7635,scaleY:0.7635,x:617.55,y:337.45},0).wait(107).to({_off:true},1).wait(1));

	// actions_obj_
	this.actions = new lib.Scene_1_actions();
	this.actions.name = "actions";
	this.actions.setTransform(636.9,265.6,1,1,0,0,0,636.9,265.6);
	this.actions.depth = 0;
	this.actions.isAttachedToCamera = 0
	this.actions.isAttachedToMask = 0
	this.actions.layerDepth = 0
	this.actions.layerIndex = 0
	this.actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.actions).wait(586));

	// message_obj_
	this.message = new lib.Scene_1_message();
	this.message.name = "message";
	this.message.depth = 0;
	this.message.isAttachedToCamera = 0
	this.message.isAttachedToMask = 0
	this.message.layerDepth = 0
	this.message.layerIndex = 1
	this.message.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.message).wait(474).to({regX:541.5,regY:335.2,scaleX:13.6306,scaleY:13.6306,y:0.7},0).wait(2).to({regX:566.1,regY:350.4,scaleX:32,scaleY:32,y:0},0).wait(2).to({regX:128.9,regY:62.6,scaleX:1.3098,scaleY:1.3098,y:0.05},0).wait(106).to({_off:true},1).wait(1));

	// office_obj_
	this.office = new lib.Scene_1_office();
	this.office.name = "office";
	this.office.depth = 0;
	this.office.isAttachedToCamera = 0
	this.office.isAttachedToMask = 0
	this.office.layerDepth = 0
	this.office.layerIndex = 2
	this.office.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.office).wait(427).to({_off:true},45).wait(114));

	// road_obj_
	this.road = new lib.Scene_1_road();
	this.road.name = "road";
	this.road.depth = 0;
	this.road.isAttachedToCamera = 0
	this.road.isAttachedToMask = 0
	this.road.layerDepth = 0
	this.road.layerIndex = 3
	this.road.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.road).wait(217).to({regX:971.1,regY:485.1,x:971.1,y:485.1},0).wait(208).to({_off:true},1).wait(160));

	// desert_obj_
	this.desert = new lib.Scene_1_desert();
	this.desert.name = "desert";
	this.desert.depth = 0;
	this.desert.isAttachedToCamera = 0
	this.desert.isAttachedToMask = 0
	this.desert.layerDepth = 0
	this.desert.layerIndex = 4
	this.desert.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.desert).wait(2).to({regX:1238.9,regY:434.6,x:1238.9,y:434.6},0).wait(212).to({_off:true},1).wait(371));

	// stars_obj_
	this.stars = new lib.Scene_1_stars();
	this.stars.name = "stars";
	this.stars.depth = 0;
	this.stars.isAttachedToCamera = 0
	this.stars.isAttachedToMask = 0
	this.stars.layerDepth = 0
	this.stars.layerIndex = 5
	this.stars.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.stars).wait(105).to({regX:698.8,regY:94.9,x:698.8,y:94.9},0).wait(194).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:698.8,regY:94.9,x:698.8,y:94.9},0).wait(115).to({_off:true},1).wait(170));

	// clouds_obj_
	this.clouds = new lib.Scene_1_clouds();
	this.clouds.name = "clouds";
	this.clouds.depth = 0;
	this.clouds.isAttachedToCamera = 0
	this.clouds.isAttachedToMask = 0
	this.clouds.layerDepth = 0
	this.clouds.layerIndex = 6
	this.clouds.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(2).to({regX:595.1,regY:134.8,x:595.1,y:134.8},0).wait(192).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:595.1,regY:134.8,x:595.1,y:134.8},0).wait(136).to({_off:true},1).wait(254));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 7
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(2).to({regX:494.2,regY:311.9,x:494.2,y:311.9},0).wait(189).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:494.2,regY:311.9,x:494.2,y:311.9},0).wait(122).to({_off:true},1).wait(271));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 8
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(426).to({_off:true},1).wait(159));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-3753.7,142.8,10625.3,710);
// library properties:
lib.properties = {
	id: '4535FA9F09C5C6429051E443B798B2CC',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"sounds/naturlBlues.mp3?1628084751825", id:"naturlBlues"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4535FA9F09C5C6429051E443B798B2CC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;