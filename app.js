var log = function(data){
	console.log(data);
};


var Cloth = function(name, color){
	this.name = name;
	this.color = color;
};



Cloth.prototype.addPrice = function(n){
	log("price: ");
	log(n);
	return this.price = n;
};


var button = function(){
	"use strict"
	var dress = new Cloth("dress", "red");
	log(dress);
	
	
	var btn = document.getElementById("btn");
	btn.onclick = dress.addPrice.bind(dress, 4);
	
	//use bind else this = btn

};


button();














