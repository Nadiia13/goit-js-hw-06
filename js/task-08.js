const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements
    console.log(formElements);
    const email = formElements.email;
    const password = formElements.password;
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
        console.log(`The form has email ${email.value} and password ${password.value}`);
    }

}

const form = document.querySelector(".login-form").reset();
