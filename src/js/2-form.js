const formData = { email: "", message: "" };
const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const mailArea = form.querySelector("input");
const message = form.querySelector("textarea");

populateText();
form.addEventListener("input", inputTextValue);
form.addEventListener("submit", checkFieldSubmit);

function inputTextValue(event) {

    if (event.target.name === "email" || event.target.name === "message") {

        formData[event.target.name] = event.target.value;
        localStorage.setItem(storageKey, JSON.stringify(formData))
    } 
}

function populateText() {
    const textVal = localStorage.getItem(storageKey)
    if (textVal) {
        const parsedData = JSON.parse(textVal);
        form.elements.email.value = parsedData.email || "";
        form.elements.message.value = parsedData.message || "";
        
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
    }
}

function checkFieldSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert ("Fill please all fields")
        return
    }
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
    formData.email = "";
    formData.message = "";
}