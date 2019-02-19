class demo{
	

}

function deo(){
	fetch("https://api.myjson.com/bins/xi33u");
	new Promise(function(resolve, reject) {

	  setTimeout(() => resolve(1), 1000); // (*)

	}).then(function(result) { // (**)

	  console.log(result); // 1
	  return result;
	});
}