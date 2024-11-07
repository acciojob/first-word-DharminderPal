function firstWord(s) {
  // your code heredfs
s =s.trim();
	if(s===" "){
		return " ";
	}
	const spaceindex =s.indexof('');
	return spaceindex === -1 ?s:s.substring(0,spaceindex);
}

cosnt s ="see and stop ";
console.log(firstWord(s));

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
