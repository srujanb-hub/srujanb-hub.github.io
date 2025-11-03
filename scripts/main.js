// Store reference to the <h1> in a variable
const myHeading = document.querySelector("h1");

// Store reference to the <button> in a variable
const myButton = document.querySelector("button")

// Update the text content of the <h1>
myHeading.addEventListener("click", () => {
    myHeading.textContent = "Grab Your Template!!"
});

function setUserName() {
    const myName = prompt("Please enter your name.")
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = `Hello, ${myName}`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello , ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});