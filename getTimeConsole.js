let getTimeConsole = () => {
	
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	return hours + ":" + minutes + ":" + seconds;
}

getTimeConsole();

setInterval( () => {
	let time = getTimeConsole();
	console.clear();
	console.log( time );
	
	setTimeout ( ( () => { 
		console.clear();
		console.log( time.replace(/:/g, " " ) ) 
		}), 500 );
	}, 1000);
