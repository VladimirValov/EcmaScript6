function check(str) {
	"use_strict";
	
	let brackets = {
		'[' : 1,
		']' : 1,
		'(' : 1,
		')' : 1,
		'{' : 1,
		'}' : 1
	}
	
	for( i = 0; i < str.length; i++ ) {		
		if ( brackets[ str[ i ] ] ) {					
			 brackets[ str[ i ] ] ++;
		}
		
		//Если закрывающая скобка появляется раньше открывающей - false!
		
		if ( brackets[ '[' ] < brackets[ ']' ] ||
			   brackets[ '(' ] < brackets[ ')' ] || 
			   brackets[ '{' ] < brackets[ '}' ] 
			 )			
			return false;		
	}
	
	//Если количество скобок не равно - false!

	if ( brackets[ '[' ] - brackets[ ']' ] ||
		   brackets[ '(' ] - brackets[ ')' ] ||
		   brackets[ '{' ] - brackets[ '}' ]
		 )
		return false;
	else
		return true;
	
}

console.log( check("a(b)") );	// true
console.log( check("[{}]") );	// true
console.log( check("[(]") );	// false
console.log( check("}{") );		// false
console.log( check("z([{}-()]{a})") ); // true
console.log( check("") );		// true
