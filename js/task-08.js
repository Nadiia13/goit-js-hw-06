const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements
    console.log({email, password});
    
    const formData = new FormData(event.currentTarget);
    console.log(formData)

    formData.forEach((name, value) => {
        console.log("onFormSubmit -> name", name);
        console.log("onFormSubmit -> value", value);
    });

    if (email.value === "" || password.value === "") {
        alert("Fill in the fields on the form");
    } else {
        alert("The form has been submitted!")
        console.log({ email: email.value, password: password.value });
    }
        event.currentTarget.reset();
}

const form = document.querySelector(".login-form").reset();
