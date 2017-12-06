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

/*Напишите конструктор для объектов Сумматор, со следующим функционалом:
1. Приватное свойство firstNumber;
2. Приватное свойство secondNumber;
3. Публичное свойство result;
4. Приватный метод calc(), который записывает в result сумму свойств
firstNumber и secondNumber;
5. Единые методы геттер-сеттер для свойств firstNumber и secondNumber, во
время работы методов как сеттер, должна происходить валидация (устанавливать
можно только значения типа Number), если валидация происходит успешно, должен
вызываться метод calc(). Получается, что при успешной установке либо firstNumber
либо secondNumber, происходит перерасчет result.*/
"use strict";
function Sum(firstNumber, secondNumber){
	var _firstNumber=0;
	var _secondNumber=0;
	this.result=0;
	function culc(){
		this.result = firstNumber + secondNumber;
	};
	culc();
	function valid1(firstNumber){
		if(typeof(firstNumber)==="number"){
			_firstNumber=firstNumber;
			culc();
		}
		else console.log("Enter the correct value");
	};
	function valid2(secondNumber){
		if(typeof(secondNumber)==="number"){
			_secondNumber=secondNumber;
			culc();
		}
		else console.log("Enter the correct value");
	};
	this.firstNumber = function(firstNumber){
		if (firstNumber === undefined) 
			return _firstNumber;
		valid1(firstNumber);
	};
	this.secondNumber = function(secondNumber){
		if (secondNumber === undefined) 
			return _secondNumber;
		valid2(secondNumber);
	};
}
var sum = new Sum(23, 17);
sum.culc();
sum.firstNumber(17);
sum.secondNumber(13);
console.log(sum.result);
