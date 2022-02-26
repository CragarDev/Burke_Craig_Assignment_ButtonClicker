console.log("Button Checker JS");

function example(element) {
  console.log("element clicked", element);
  console.log(element.attributes);
  console.log(element.innerText);
  console.log(element.innerHTML);
  console.log(element.outerHTML);
  console.log(element.lastChild);
}

function turnOff(element) {
  if (element.innerText == "On") {
    element.innerText = "Off";
    element.style.backgroundColor = "Red";
    element.style.color = "White";
  } else {
    element.innerText = "On";
    element.style.backgroundColor = "Blue";
  }
}

function hide(element) {
  element.remove();
  console.log(element.alt);
  console.dir(`You have removed the ${element.alt}!!!`);
}

function grow(element) {
  element.width *= 2;
}
