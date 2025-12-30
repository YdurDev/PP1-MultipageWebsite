// Target form and add an event listener to it
let form = document.querySelector("form");
form.addEventListener("submit",validateEmail);

//Target the two emails given and verify they match, if not sent alert.

function validateEmail(event) {

    //Do not allow browser to submit as this is a mock page.
    event.preventDefault();

    let email1 = document.querySelector("#emailAddress").value.trim();
    let email2 = document.querySelector("#emailAddressConfirm").value.trim();

    if (email1 !== email2){
        let errorField1 = document.querySelector("#emailAddress");
        let errorField2 = document.querySelector("#emailAddressConfirm");

        // Visual Indicator of what field is invalid
        errorField1.classList.add("invalid");
        errorField2.classList.add("invalid");

        //Alert Box
        alert("Email Addresses do not match!");




    }
    
}
