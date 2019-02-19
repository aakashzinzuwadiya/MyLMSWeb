function createCourse(){
   	var _createTable = JSON.parse(localStorage.getItem("_courseTbl")) || [];
   	let tmpObj = {};
    tmpObj["courseId"]= document.getElementById("courseIdTxt").value;
    tmpObj["courseName"]= document.getElementById("courseNameTxt").value;
   	_createTable.push(tmpObj);
	localStorage.setItem("_courseTbl", JSON.stringify(_createTable));
	console.log("Course Created...");
}

function showCourse() {
        document.getElementById("coursetable").innerHTML="";

        var _userTable = JSON.parse(localStorage.getItem("_courseTbl"));
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
        var divContainer = document.getElementById("coursetable");
        divContainer.innerHTML += "";
        divContainer.appendChild(table);
    }	

function removeCourse(){
	console.log("Remove Course");
	let myarrget = JSON.parse(localStorage.getItem('_courseTbl'));	
	var select=document.getElementById("courseList");
	for(let k in myarrget){
		console.log(myarrget[k].courseName);	
		let option=document.createElement("option");
		option.text=myarrget[k].courseName;
		select.add(option);
	}
}

function removeCourseBtnFun(){
	var select=document.getElementById("courseList");
	var opt = select.options[select.selectedIndex].value;
	console.log(opt);
	var drophistory = JSON.parse(localStorage.getItem("_courseTbl")) || [];
 	let tmpObj = {};
 	drophistory.pop(opt);
    console.log(drophistory);
    localStorage.setItem("_courseTbl", JSON.stringify(drophistory));
}

function AssignCourse(){
    let myarrget = JSON.parse(localStorage.getItem('_userTbl'));    
    select=document.getElementById("AssignUserList");
    for(let k in myarrget){
        console.log(myarrget[k].userName);  
        let option=document.createElement("option");
        option.text=myarrget[k].userName;
        select.add(option);
    }
    myarrget = JSON.parse(localStorage.getItem('_courseTbl'));  
    var select=document.getElementById("AssignCourseList");
    for(let k in myarrget){
        console.log(myarrget[k].courseName);    
        let option=document.createElement("option");
        option.text=myarrget[k].courseName;
        select.add(option);
    }
}

function AssignCourseUser(){
    var userselect=document.getElementById("AssignUserList");
    var useropt = userselect.options[userselect.selectedIndex].value;
    var courseselect=document.getElementById("AssignCourseList");
    var courseopt = courseselect.options[courseselect.selectedIndex].value;
    console.log("");                
    var existing = localStorage.getItem('_userTbl');
    existing = existing ? JSON.parse(existing) : {};
    for(let a in existing){
        if( existing[a].userName == useropt ){
            existing[a].userCourses = existing[a].userCourses ? existing[a].userCourses + "," +courseopt : courseopt;
        }
        localStorage.setItem('_userTbl', JSON.stringify(existing));
    }
    alert("Assigned Successfully....");
    console.log("Assigned Successfully....");
}

