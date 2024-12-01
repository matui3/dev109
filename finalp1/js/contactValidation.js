function isValid() {
    
    if (blurName() && blurEmail()) {
        return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

const form = document.getElementById('myForm')

form.addEventListener('submit', isValid)

const nameInput = document.getElementById('name');
const email = document.getElementById('email');

const nameFeedback = document.getElementById('Name')
const emailFeedback = document.getElementById('Email')

const commentInput = document.getElementById('message');
const commentFeedback = document.getElementById('Message');

nameInput.addEventListener('blur', blurName);
email.addEventListener('blur', blurEmail);
commentInput.addEventListener('blur', blurComment)


function blurName() {


    //1) Create variable
    let validName = false;
    let errorMessages = "";

    //2) read value from HTML
    const name = nameInput.value.trim();

    nameFeedback.innerHTML = "";
    nameFeedback.classList.add('warning')

    //3) Do validation
    if (name === null || name === "") {
        errorMessages += "<p>The first name is required.</p>";
    } else if (name.length > 20) {
        errorMessages += "<p>The first name cannot be longer than 20 characters.</p>";
    } else if (name.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
        validName = true;
    }

    //4) Send error message to HTML
    nameFeedback.innerHTML = errorMessages || '';

    //5) return status of each field
    return validName;
}


function blurEmail() {

    // initialize values for validation
    let validEmail = false;
    let errorMessages = ""; // set errors to initially be empty

    // read value from html
    const userEmail = email.value.trim();

    emailFeedback.innerHTML = "";

    const atpos = userEmail.indexOf("@");
    const dotpos = userEmail.lastIndexOf(".")
    // blur email
    if (userEmail === "" || userEmail === null) {
        errorMessages += "<p>An email is required.</p>";
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email.</p>";
    } else {
        email.style.display = none;
        validEmail = true;
    }

    emailFeedback.innerHTML = errorMessages || '';

    // return status
    return validEmail;

}

function blurComment() {
    
    let validComment = false;
    let errorMessages = "";

    const comment = commentInput.value.trim();

    commentFeedback.innerHTML = "";
    commentFeedback.classList.add('warning')

    if (comment === null || comment === "") {
        errorMessages += "<p>Comments are required.</p>"
    } else {
        validComment=  true;
    }

    commentFeedback.innerHTML = errorMessages || '';

    return validComment;
}