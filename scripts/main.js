const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";
/* *We use the querySeletor() function to grab/select the referance of the element that we want to write the script for.
 * In the next step we selected the vairable that we stored the referance of the element using querySelector() and we changed the property of the variable textContent to "Hello World".
 * A variable is used as a tag to store a value and we can access that value using the variable name that where we stored value. In more complex term a variable acts as a referance to memory location of where the value has been stored. In order to access the value we can refer to the variable that stores that value.
 */
// console.error(myHeading);
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
const result = multiply(2, 6);
console.log(multiply(2, 3));
console.log(result);

// document.querySelector("html").addEventListener(
//     "click",() => {
//         alert("This is a mistake");
//     }
// )

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox.png");
  }
};

const myButton = document.querySelector("button");
const myHead = document.querySelector("h2");

function setUserName() {
  const userName = prompt("Please Enter your Name:");
  if(!userName) {
    setUserName();
  } else {
  localStorage.setItem("name", userName);
  myHead.textContent = `Mozilla is cool ${userName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const userName = localStorage.getItem("name");
  myHead.textContent = `Mozilla is great ${userName}`;
}

myButton.onclick = () => {
  setUserName();
};
