function isValid() {
    if (validateFirstName() && validateLastName() && validateEmail() && validatePhone() && validateUserName() && validatePassword() && validateAddress() && validateCountry() && validateState() && validateCity() && validateZipCode()) {
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
const Email = document.getElementById('Email');
const Phone = document.getElementById('Phone');
const Username = document.getElementById('Username');
const Password = document.getElementById('Password');
const Address = document.getElementById('Address');
const CountrySelect = document.getElementById('Country');
const StateSelect = document.getElementById('State');
const City = document.getElementById('City');
const zipCodeContainer = document.getElementById('zipcode-container');
const ZipCode = document.getElementById('Zipcode');


CountrySelect.addEventListener('change', function() {
    if (CountrySelect.value === "USA") {
        StateSelect.disabled = false;
        zipCodeContainer.style.display = 'flex';
    } else {
        zipCodeContainer.style.display = "none";
        StateSelect.disabled = true;
        StateSelect.value = '';
    }
});

// event listeners for focus



// event listeners for blur
FirstName.addEventListener('blur', validateFirstName, false);
LastName.addEventListener('blur', validateLastName, false);
Email.addEventListener('blur', validateEmail, false)
Phone.addEventListener('blur', validatePhone, false);
Username.addEventListener('blur', validateUserName, false);
Password.addEventListener('blur', validatePassword, false);
Address.addEventListener('blur', validateAddress, false);
CountrySelect.addEventListener('blur', validateCountry, false);
StateSelect.addEventListener('blur', validateState, false);
City.addEventListener('blur', validateCity, false);
ZipCode.addEventListener('blur', validateZipCode, false);


function validateFirstName() {


    //1) Create variable
    let validFirstName = false;
    let errorMessages = "";

    //2) read value from HTML
    const firstname = document.getElementById("FirstName").value.trim();
    
    document.getElementById("fname").innerHTML = "";

    //3) Do validation
    if (firstname === null || firstname === "" ) {
        errorMessages += "<p>The first name is required.</p>";
    } else if (firstname.length > 20) {
        errorMessages += "<p>The first name cannot be longer than 20 characters.</p>";
    } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
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

function validateLastName() {

    // initialize values for validation
    let validLastName = false;
    let errorMessages = "";

    const lastName = document.getElementById('LastName').value.trim();

    document.getElementById("lname").innerHTML = "";
    
    if (lastName === null || lastName === "") {
        errorMessages += "<p>The last name is required.</p>";
    } else if (lastName.length > 50) {
        errorMessages += "<p>The last name cannot be greater than 50 characters</p>";
    } else if (lastName.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
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

function validateEmail() {
    
    // initialize values for validation
    let validEmail = false;
    let errorMessages = ""; // set errors to initially be empty

    // read value from html
    const userEmail = document.getElementById("Email").value.trim();

    const atpos = userEmail.indexOf("@");
    const dotpos = userEmail.lastIndexOf(".")
    // validate email
    if (userEmail === "" || userEmail === null) {
        errorMessages += "<p>An email is required.</p>";
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email.</p>";
    } else {
        validEmail = true;
    }

    document.getElementById("email").innerHTML = errorMessages || '';

    // return status
    return validEmail;

}

function validatePhone() {

    var numbers = /^[0-9]+$/;
    // initialize variables
    let validPhone = false;
    let errorMessages = "";

    // grab data from HTML
    const phone = document.getElementById('Phone').value.trim();

    // validate phone

    if (!phone.match(numbers) || phone.length > 15 || phone === null || phone === "") {
        errorMessages += "<p>Invalid phone number.</p>";
    } else {
        validPhone = true;
    }

    document.getElementById('phone').innerHTML = errorMessages || '';
    
    return validPhone;

}

function validateUserName() {

    // intialize variables for error and validation
    let validUserName = false;
    let errorMessages = "";

    // grab values from html
    const username = document.getElementById("Username").value.trim();

    // validate username

    if (username === "" || username === null) {
        errorMessages += "<p>Username is required.</p>";
    } else if (username.length > 12) {
        errorMessages += "<p>Username cannot be longer than 12 characters.</p>";
    } else {
        validUserName = true;
    }

    document.getElementById("username").innerHTML = errorMessages || '';

    return validUserName;
}

function validatePassword() {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{1,7}$/;


    // initialize values
    let validPassword = false;
    let errorMessages = "";

    // grab information via HTML
    const password = document.getElementById("Password").value.trim();

    // validate password
    if (password === "" || password === null) {
        errorMessages += "<p>Password is required.</p>"
    } else if (password > 7) {
        errorMessages += "<p>Password cannot be greater than 7 characters.</p>"
    } else if (!password.match(regex)) {
        errorMessages += "<p>Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.</p>";
    } else {
        validPassword = true;
    }

    document.getElementById("password").innerHTML = errorMessages || '';

    return validPassword;
    
}

function validateAddress() {

    // initialize variables
    let validAddress = false;
    let errorMessages = "";

    // grab values from HTML
    const address = document.getElementById("Address").value.trim();

    // validate address

    if (address === "" || address === null) {
        errorMessages += "<p>Address is required.</p>"
    } else {
        validAddress = true;
    }

    document.getElementById("address").innerHTML = errorMessages || '';

    return validAddress;
}

function validateCountry() {


    // initialize variables
    let validCountry = false;
    let errorMessages = "";

    // grab data from HTML
    const country = document.getElementById("Country").value.trim();

    // validate country
    if (country === "" || country === null) {
        errorMessages += "<p>Country is required.</p>";
    } else {
        validCountry = true;
    }

    document.getElementById('country').innerHTML = errorMessages || '';

    return validCountry;

}

function validateCity() {

    // initialize varialbes
    let validCity = false;
    let errorMessages = "";

    // grab data from HTML 
    const city = document.getElementById("City").value.trim();

    // validate city

    if (city === "" || city === null) {
        errorMessages += "<p>City is required.</p>";
    } else {
        validCity = true;
    }

    document.getElementById("city").innerHTML = errorMessages || '';

    return validCity;
}

function validateState() {

    // intialize variables
    let validState = false;
    let errorMessages = "";

    const country = document.getElementById('Country').value.trim();

    if (country === "USA") {
        
        // grab data from HTML
        const state = document.getElementById('State').value.trim();

        console.log(state)

        // validate state
        if (state === "" || state === null) {
            errorMessages += "<p>State is required.</p>";
        } else {
            validState = true;
        }

    } else {
        validState = true;
    }

    document.getElementById('state').innerHTML = errorMessages || '';

    return validState;
    
}

function validateZipCode() {

    let validZipCode = false;
    let errorMessages = "";


    const country = document.getElementById('Country').value.trim();
    const zipcode = document.getElementById('Zipcode').value.trim();
    
    if (country === "USA") {

        const zipcodePattern = /^\d{5}$/;

        if (zipcode === "" || zipcode === null) {
            errorMessages += "<p>Zipcode is required for USA.</p>";
        } else if (!zipcodePattern.test(zipcode)) {
            errorMessages += "<p>Please enter a valid 5-digit zipcode.</p>";
        } else {
            validZipCode = true;
        }
          
    } else {
        validZipCode = true;
    }

    document.getElementById('zipcode').innerHTML = errorMessages || '';

    return validZipCode;
}