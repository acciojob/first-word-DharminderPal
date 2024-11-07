// function firstWord(s) {
//   // your code heredfs
// s =s.trim();
// 	if(s===" "){
// 		return " ";
// 	}
// 	const spaceindex =s.indexof('');
// 	return spaceindex === -1 ?s:s.substring(0,spaceindex);
// }

// const s ="see and stop ";
// console.log(firstWord(s));

// Do not change the code below
// const s = prompt("Enter String:");
// alert(firstWord(s));
function firstWord(s) {
  s = s.trim();
  if(s === " "){
    return " ";
  }
  const spaceIndex = s.indexOf(' ');
  return spaceIndex === -1 ? s : s.substring(0, spaceIndex);
}

const s = "see and stop ";
console.log(firstWord(s));