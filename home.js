function printError(error, message) {
    document.getElementById(error).innerHTML = message;
}

//validations

function validation() {
    validatefirstname();
    validatelastname();
    validateemail();
    validatemobile();
    validateaddress();
}
function validatefirstname() {
    var fname = document.Form.Firstname.value;
    if (fname == "") {
        printError("Ferror", "Please enter your Firstname")
    }
    else {
        printError("Ferror", "")
    }
}
function validatelastname() {
    var lname = document.Form.Lastname.value;
    if (lname == "") {
        printError("Lerror", "Please enter your Lastname")
    }
    else {
        printError("Lerror", "")
    }
} function validateemail() {
    var mail = document.Form.Email.value;
    if (mail == "") {
        printError("Eerror", "Please enter your Email")
    }
    else {
        printError("Eerror", "")
    }
} function validatemobile() {
    var mob = document.Form.Mobilenumber.value;
    if (mob.length != 10) {
        printError("Merror", "Mobile number should be 10 digits")
    }
    else {
        printError("Merror", "")
    }
} function validateaddress() {
    var add = document.Form.Firstname.value;
    if (add == "") {
        printError("Aerror", "Please enter your Address")
    }
    else {
        printError("Aerror", "")
    }
}

var selectedrow = null

//onclick function

function formsubmit() {
    if (validation() == true) {
    }
    else {
        var formData = readFormData();
        if (selectedrow == null)
            insertNewRecord(formData);
        else
            updatedata(formData);
        resetformData();
    }
    checkform();
}

//read data

function readFormData() {
    var formData = {};
    formData["Firstname"] = document.getElementById("Firstname").value;
    formData["Lastname"] = document.getElementById("Lastname").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Mobilenumber"] = document.getElementById("Mobilenumber").value;
    formData["Address"] = document.getElementById("Address").value;
    return formData;
}

//insert new data

function insertNewRecord(data) {
    var table = document.getElementById("tableform").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Mobilenumber;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Address;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onclick="formedit(this)" class="btns-1"><i class="fa-solid fa-pen-to-square btns"></i></button>
    <button onclick="formdelete(this)" class="btns-1"><i class="fa-solid fa-trash btns"></i></button>`;
}

//reset data

function resetformData() {
    document.getElementById("Firstname").value = "";
    document.getElementById("Lastname").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Mobilenumber").value = "";
    document.getElementById("Address").value = "";
    selectedrow = null;
}

//edit data

function formedit(td) {
    selectedrow = td.parentElement.parentElement;
    document.getElementById("Firstname").value = selectedrow.cells[0].innerHTML;
    document.getElementById("Lastname").value = selectedrow.cells[1].innerHTML;
    document.getElementById("Email").value = selectedrow.cells[2].innerHTML;
    document.getElementById("Mobilenumber").value = selectedrow.cells[3].innerHTML;
    document.getElementById("Address").value = selectedrow.cells[4].innerHTML;
    document.getElementById("change").value = "Update";
}

// update data 

function updatedata(formData) {
    selectedrow.cells[0].innerHTML = formData.Firstname;
    selectedrow.cells[1].innerHTML = formData.Lastname;
    selectedrow.cells[2].innerHTML = formData.Email;
    selectedrow.cells[3].innerHTML = formData.Mobilenumber;
    selectedrow.cells[4].innerHTML = formData.Address;
    document.getElementById("change").value = "submit";
}

// delete data 

function formdelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement.remove();
        document.getElementById("tableinfo").deleteRow(row.rowinfo);
        resetformData();
    }
}



// function checkform() {
//     var f = document.forms["Form"].elements;
//     var cansubmit = true;
//     for (var i = 0; i < f.length; i++) {
//         if (f[i].value.length == 0) cansubmit = false;
//     }
//     if (cansubmit) {
//         document.getElementById('change').disabled = false;
//     }
//     else {
//         document.getElementById('change').disabled = 'disabled';
//     }
// }

