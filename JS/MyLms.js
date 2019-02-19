class MyLms{
	
}

function LoginValidation(){
	var _userTable = JSON.parse(localStorage.getItem('_userTbl'));
	var _userName = document.getElementById("userNameTxt").value;
	var _userPassword = document.getElementById("userPasswordTxt").value;
	if(_userName=="Aakash" &&  _userPassword=="admin"){
		console.log("Welcome Admin");
		sessionStorage.setItem("UserNameSsn", _userName);
		window.location="MyAdmin.html";
	}
	else{
		for(let a in _userTable){  
			if(_userName == _userTable[a].userName && _userPassword == _userTable[a].userPassword){
				sessionStorage.setItem("UserNameSsn", _userName);
				window.location = "MyUser.html"; // Redirecting to other page.
			}
		}	
	}
}

function usersCheck(){
	//alert("Users");
}

function courseCheck(){
	//alert("Course");
}

// function createTable(){
//    	var _createTable = JSON.parse(localStorage.getItem("_userTbl")) || [];
//    	let tmpObj = {};
//     tmpObj["userName"]= "Aakash";
//     tmpObj["userPassword"]= "Aakash";
//    	tmpObj["userCourses"]= "Not Assigned"
//    	tmpObj["userCourseStatus"]= "Not Assigned";
// 	_createTable.push(tmpObj);
// 	localStorage.setItem("_userTbl", JSON.stringify(_createTable));
// }