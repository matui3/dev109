function isValid() {
    if (firstName() //&& // lastName()
    ) {
        return true;
    }  else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

// grab input field elements
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');


FirstName.addEventListener('blur', firstName, false);
LastName.addEventListener('blur', lastName, false);

function firstName() {
    //1) Create variable
    let validFirstName = false;
    let errorMessages = "";

    //2) read value from HTML
    let firstname = document.getElementById("FirstName").value.trim();
    
    document.getElementById("fname").innerHTML = "";

    //3) Do validation
    if (firstname === "null" || firstname === "" ) {
        errorMessages += "<p>The first name is required.</p>";
    } else if (firstname.length > 20) {
        errorMessages += "<p>The first name cannot be longer than 20 characters.</p>";
    } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
        validFirstName = true;
        
    }

    if (validFirstName) {
        console.log("First name valid")
    } else {
        console.log("First name is invalid")
    }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages || '';

    //5) return status of each field
    return validFirstName;
}

function lastName() {

    let validLastName = false;
    let errorMessages = "";

    let lastName = document.getElementById('LastName').value.trim();

    document.getElementById("lname").innerHTML = "";
    
    if (lastName === "null" || lastName === "") {
        errorMessages += "<p>The last name is required.</p>";
    } else if (lastName.length > 50) {
        errorMessages += "<p>The last name cannot be greater than 50 characters</p>";
    } else if (lastName.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>The last name can only contain letters and the following characters: ,.'-</p>";
    } else {
        validLastName = true;
    }

    if (validLastName) {
        console.log("Last name is valid");
    } else {
        console.log("Last name is invalid");
    }

    document.getElementById("lname").innerHTML = errorMessages || '';

    return validLastName;
}
