"use strict";
function bind(func, context) {
	return func.call(user);
}
function func() {
	console.log(this.name + " - "+ this.age);
}
var user = {
	name: "Tom",
	age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"

/*Напишите конструктор для объектов Аудиоплеер, в котором есть приватное
свойство громкость звука, для доступа к этому свойству реализуйте:
1. Методы геттер и сеттер;
2. Единый метод геттер-сеттер.

Громкость может быть в диапазоне от 0 до 100.*/
"use strict";
function MP3(volume){
	var _volume=0;
	function valid(volume){
		if( volume>0 && volume<100 && typeof(volume)==="number")
			_volume=volume;
		else console.log("Enter the correct value");
	}
	valid(volume);
	this.getVolume = function(){
		return _volume;
	}
	this.setVolume = function(volume){//зачем сеттер если есть валидация
		valid(volume);
	}
	this.volumePlus = function(){
		_volume++;
	}
	this.volumeMinus = function(){
		_volume--;
	}
	this.volume = function(volume){
		if (volume === undefined) 
			return _volume;
		valid(volume);
	};
}
var ipod= new MP3(23);
ipod.volumePlus();
ipod.volumePlus();
console.log(ipod.getVolume());
ipod.volume(-19);
console.log(ipod.getVolume());