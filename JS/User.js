function createUser(){
   	var _createTable = JSON.parse(localStorage.getItem("_userTbl")) || [];
   	let tmpObj = {};
    tmpObj["userName"]= document.getElementById("userNameTxt").value;
    tmpObj["userPassword"]= document.getElementById("userPasswordTxt").value;
   	tmpObj["userCourses"]= "";
   	tmpObj["userCourseStatus"]= "";
	_createTable.push(tmpObj);
	localStorage.setItem("_userTbl", JSON.stringify(_createTable));
	console.log("User Created...");
}

function showUser() {
        var div=document.getElementById("usertable");
        div.innerHTML="";
        div.setAttribute("style","margin-top:30px");

        var _userTable = JSON.parse(localStorage.getItem("_userTbl"));
        // console.log(_userTable["userName"]);
        for(let a in _userTable){
        		console.log(_userTable[a].userName);
        }

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        var obj = {};
        for (var i = 0; i < _userTable.length; i++) {
            for (var key in _userTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }	
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.border="5px solid";
        // table.setAttribute("style","cellspacing:10");
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < _userTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = _userTable[i][col[j]];
            }	
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("usertable");
        divContainer.innerHTML += "";
        divContainer.appendChild(table);
    }	

function removeUser(){
	console.log("Remove User");
	let myarrget = JSON.parse(localStorage.getItem('_userTbl'));	
	var select=document.getElementById("userList");
	for(let k in myarrget){
		console.log(myarrget[k].userName);	
		let option=document.createElement("option");
		option.text=myarrget[k].userName;
		select.add(option);
	}
}

function removeDataBtnFun(){
	var select=document.getElementById("userList");
	var opt = select.options[select.selectedIndex].value
	console.log(opt);
	var drophistory = JSON.parse(localStorage.getItem("_userTbl")) || [];
 	let tmpObj = {};
 	drophistory.pop(opt);
    console.log(drophistory);
    localStorage.setItem("_userTbl", JSON.stringify(drophistory));
}

