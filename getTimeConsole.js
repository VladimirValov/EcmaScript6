//Тест стрелочных функций
//Выводит в консоли браузера время в формате hh:mm:ss c мигающим символом ":"

"use strict";

let getTimeConsole = () => {
	
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	let format = (num) => num > 10 ? num : num + "0";
	
	return format(hours) + ":" + format(minutes) + ":" + format(seconds);
}

console.log( getTimeConsole() );

setInterval( () => {
	let time = getTimeConsole();
	console.clear();
	console.log( time );
	
	setTimeout ( () => { 
		console.clear();
		console.log( time.replace(/:/g, " " ) ) 
	}, 500 );
}, 1000);
