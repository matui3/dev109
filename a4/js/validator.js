function isValid() {
    if (blurFirstName() && blurLastName() && blurEmail() && blurPhone() && blurUserName() && blurPassword() && blurAddress() && blurCountry() && blurState() && blurCity() && blurZipCode()) {
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

// feedback div elements
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const username = document.getElementById('username')
const password = document.getElementById('password')
const address = document.getElementById('address')
const city = document.getElementById('city')
const country = document.getElementById('country')
const state = document.getElementById('state')
const zipcode = document.getElementById('zipcode')

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



// event listeners for blur

FirstName.addEventListener('blur', blurFirstName);
LastName.addEventListener('blur', blurLastName);
Email.addEventListener('blur', blurEmail)
Phone.addEventListener('blur', blurPhone);
Username.addEventListener('blur', blurUserName);
Password.addEventListener('blur', blurPassword);
Address.addEventListener('blur', blurAddress);
CountrySelect.addEventListener('blur', blurCountry);
StateSelect.addEventListener('blur', blurState);
City.addEventListener('blur', blurCity);
ZipCode.addEventListener('blur', blurZipCode);

Phone.addEventListener('input', phoneInput)

// Adding focus event listeners to each form field

FirstName.addEventListener('focus', focusFname);
LastName.addEventListener('focus', focusLname);
Email.addEventListener('focus', focusEmail);
Phone.addEventListener('focus', focusPhone);
Username.addEventListener('focus', focusUsername);
Password.addEventListener('focus', focusPassword);
Address.addEventListener('focus', focusAddress);
City.addEventListener('focus', focusCity);
CountrySelect.addEventListener('focus', focusCountry);
StateSelect.addEventListener('focus', focusState);
ZipCode.addEventListener('focus', focusZipcode);


function phoneInput() {
    let phoneNum = Phone.value;

    // Remove all non-digit characters
    phoneNum = phoneNum.replace(/\D/g, '');

    // Format phone number based on the length of the digits
    if (phoneNum.length <= 3) {
        // No dashes needed for the first 3 digits
        phoneNum = phoneNum;
    } else if (phoneNum.length <= 6) {
        // Format as XXX-XXXX
        phoneNum = phoneNum.replace(/(\d{3})(\d+)/, '$1-$2');
    } else if (phoneNum.length <= 10) {
        // Format as XXX-XXX-XXXX
        phoneNum = phoneNum.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3');
    } else if (phoneNum.length <= 15) {
        // Format as +CC-XXX-XXX-XXXX (International format)
        phoneNum = phoneNum.replace(/(\d{1,4})(\d{3})(\d{3})(\d{4})/, '+$1-$2-$3-$4');
    } else {
        // If more than 15 digits, return the number without formatting
        phoneNum = phoneNum.substring(0, 15); // Limit to 15 digits
    }

    // Update the input field with the formatted phone number
    Phone.value = phoneNum;
}

// blur functiuons
function blurFirstName() {


    //1) Create variable
    let validFirstName = false;
    let errorMessages = "";

    //2) read value from HTML
    const firstname = FirstName.value.trim();
    
    fname.innerHTML = "";
    fname.classList.remove('tip')
    fname.classList.add('warning')

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

    //4) Send error message to HTML
    fname.innerHTML = errorMessages || '';

    //5) return status of each field
    return validFirstName;
}

function blurLastName() {

    // initialize values for validation
    let validLastName = false;
    let errorMessages = "";

    const lastName = LastName.value.trim();

    lname.innerHTML = "";
    lname.classList.remove('tip')
    lname.classList.add('warning')
    
    if (lastName === null || lastName === "") {
        errorMessages += "<p>The last name is required.</p>";
    } else if (lastName.length > 50) {
        errorMessages += "<p>The last name cannot be greater than 50 characters</p>";
    } else if (lastName.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
        validLastName = true;
    }

    lname.innerHTML = errorMessages || '';

    return validLastName;
}

function blurEmail() {
    
    // initialize values for validation
    let validEmail = false;
    let errorMessages = ""; // set errors to initially be empty

    // read value from html
    const userEmail = Email.value.trim();

    email.innerHTML = "";
    email.classList.remove('tip')
    email.classList.add('warning')

    const atpos = userEmail.indexOf("@");
    const dotpos = userEmail.lastIndexOf(".")
    // blur email
    if (userEmail === "" || userEmail === null) {
        errorMessages += "<p>An email is required.</p>";
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email.</p>";
    } else {
        validEmail = true;
    }

    email.innerHTML = errorMessages || '';

    // return status
    return validEmail;

}

// NEED TO UPDATE THIS
function blurPhone() {
    const phoneRegex = /^(?:\+?\d{1,3}-)?\d{3}-\d{3}-\d{4}$/; // Match format with dashes
    let validPhone = false;
    let errorMessages = "";

    // Grab data from HTML
    let phoneNum = Phone.value.trim();

    phone.innerHTML = "";
    phone.classList.remove('tip');
    phone.classList.add('warning');

    // Ensure phone number matches the expected format with dashes
    if (phoneNum.length >= 10 && phoneNum.length <= 15) {
        if (phoneRegex.test(phoneNum)) {
            validPhone = true;
        } else {
            errorMessages += "<p>Invalid phone number format. Please use dashes (-) as separators.</p>";
        }
    } else {
        errorMessages += "<p>Phone number must be between 10 and 15 digits.</p>";
    }

    // Display error message if validation fails
    phone.innerHTML = errorMessages || '';

    return validPhone;
}



function blurUserName() {

    // intialize variables for error and validation
    let validUserName = false;
    let errorMessages = "";

    // grab values from html
    const userName = Username.value.trim();

    username.innerHTML = "";
    username.classList.remove('tip')
    username.classList.add('warning')
    // blur username

    if (userName === "" || userName === null) {
        errorMessages += "<p>Username is required.</p>";
    } else if (userName.length > 12) {
        errorMessages += "<p>Username cannot be longer than 12 characters.</p>";
    } else {
        validUserName = true;
    }

    username.innerHTML = errorMessages || '';

    return validUserName;
}

function blurPassword() {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{1,7}$/;


    // initialize values
    let validPassword = false;
    let errorMessages = "";

    // grab information via HTML
    const passWord = Password.value.trim();

    password.innerHTML = "";
    password.classList.remove('tip')
    password.classList.add('warning')

    // blur password
    if (passWord === "" || passWord === null) {
        errorMessages += "<p>Password is required.</p>"
    } else if (passWord > 7) {
        errorMessages += "<p>Password cannot be greater than 7 characters.</p>"
    } else if (!passWord.match(regex)) {
        errorMessages += "<p>Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.</p>";
    } else {
        validPassword = true;
    }

    
    password.innerHTML = errorMessages || '';

    return validPassword;
    
}

function blurAddress() {

    // initialize variables
    let validAddress = false;
    let errorMessages = "";

    // grab values from HTML
    const addressValue = Address.value.trim();

    address.innerHTML = "";
    address.classList.remove('tip')
    address.classList.add('warning')

    // blur address

    if (addressValue === "" || addressValue === null) {
        errorMessages += "<p>Address is required.</p>"
    } else {
        validAddress = true;
    }

    address.innerHTML = errorMessages || '';

    return validAddress;
}

function blurCountry() {


    // initialize variables
    let validCountry = false;
    let errorMessages = "";

    // grab data from HTML
    const countryValue = CountrySelect.value.trim();

    country.innerHTML = ""
    country.classList.remove('tip')
    country.classList.add('warning')


    // blur country
    if (countryValue === "" || countryValue === null) {
        errorMessages += "<p>Country is required.</p>";
    } else {
        validCountry = true;
    }

    country.innerHTML = errorMessages || '';

    return validCountry;

}

function blurCity() {

    // initialize varialbes
    let validCity = false;
    let errorMessages = "";

    // grab data from HTML 
    const cityValue = City.value.trim();

    city.innerHTML = "";
    city.classList.remove('tip')
    city.classList.add('warning')
    // blur city

    if (cityValue === "" || cityValue === null) {
        errorMessages += "<p>City is required.</p>";
    } else {
        validCity = true;
    }

    city.innerHTML = errorMessages || '';

    return validCity;
}

function blurState() {

    // intialize variables
    let validState = false;
    let errorMessages = "";

    const country = CountrySelect.value.trim();

    state.innerHTML = "";
    state.classList.remove('tip')
    state.classList.add('warning')

    if (country === "USA") {
        
        // grab data from HTML
        const stateValue = StateSelect.value.trim();

        // blur state
        if (stateValue === "" || stateValue === null) {
            errorMessages += "<p>State is required.</p>";
        } else {
            validState = true;
        }

    } else {
        validState = true;
    }

    state.innerHTML = errorMessages || '';

    return validState;
    
}

function blurZipCode() {

    let validZipCode = false;
    let errorMessages = "";


    const country = CountrySelect.value.trim();
    const zipcodeValue = ZipCode.value.trim();

    zipcode.innerHTML = "";
    zipcode.classList.remove('tip')
    zipcode.classList.add('warning')
    
    if (country === "USA") {

        const zipcodePattern = /^\d{5}$/;

        if (zipcodeValue === "" || zipcodeValue === null) {
            errorMessages += "<p>Zipcode is required for USA.</p>";
        } else if (!zipcodePattern.test(zipcodeValue)) {
            errorMessages += "<p>Please enter a valid 5-digit zipcode.</p>";
        } else {
            validZipCode = true;
        }
          
    } else {
        validZipCode = true;
    }

    zipcode.innerHTML = errorMessages || '';

    return validZipCode;
}


// focus functions

function focusFname() {
    fname.classList.remove('warning');
    fname.classList.add('tip');
    fname.innerHTML = 'Please enter your first name (max 20 characters).';
}

function focusLname() {
    lname.classList.remove('warning');
    lname.classList.add('tip');
    lname.innerHTML = 'Please enter your last name (max 50 characters).';
}

function focusEmail() {
    email.classList.remove('warning');
    email.classList.add('tip');
    email.innerHTML = 'Enter a valid email address (e.g., name@example.com).';
}

function focusPhone() {
    phone.classList.remove('warning');
    phone.classList.add('tip');
    phone.innerHTML = 'Enter your phone number (numbers only, max 15 digits).';
}

function focusUsername() {
    username.classList.remove('warning');
    username.classList.add('tip');
    username.innerHTML = 'Choose a username (max 12 characters).';
}

function focusPassword() {
    password.classList.remove('warning');
    password.classList.add('tip');
    password.innerHTML = 'Password must be at least 7 characters and include uppercase, lowercase, a number, and a special character.';
}

function focusAddress() {
    address.classList.remove('warning');
    address.classList.add('tip');
    address.innerHTML = 'Enter your street address (e.g., 123 Main St).';
}

function focusCity() {
    city.classList.remove('warning');
    city.classList.add('tip');
    city.innerHTML = 'Enter your city of residence.';
}

function focusCountry() {
    country.classList.remove('warning');
    country.classList.add('tip');
    country.innerHTML = 'Select your country from the dropdown list.';
}

function focusState() {
    state.classList.remove('warning');
    state.classList.add('tip');
    state.innerHTML = 'If in the USA, select your state from the dropdown list.';
}

function focusZipcode() {
    zipcode.classList.remove('warning');
    zipcode.classList.add('tip');
    zipcode.innerHTML = 'Enter your 5-digit ZIP code (only for USA).';
}
