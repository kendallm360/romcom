// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = Cover

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }

// class RomCom {
//   constructor() {
//
//   }
// }



var randomCoverButton = document.querySelector(".random-cover-button");
var hideHomeView = document.querySelector(".home-view");
var showFormView = document.querySelector(".form-view");
var currentTitle = document.querySelector('.cover-title');
var currentImage = document.querySelector('.cover-image');
var currentTagLine1 = document.querySelector('.tagline-1');
var currentTagLine2 = document.querySelector('.tagline-2');
var makeCoverButton = document.querySelector(".make-new-button");

window.addEventListener("click", clickHandler);
window.addEventListener("load", randomizeCover);
// randomCoverButton.addEventListener("click", changeButton);
//hideHomeView.addEventListener("click", changeView)
// makeCoverButton.addEventListener("click", showCustomCover)

//redo for hide element
function hideElement(element) {
  document.querySelector(`.${element}`).classList.add("hidden");
}


function clickHandler(event) {
  if (event.target.classList.contains("make-new-button")){
    showCustomCover()
  } else if (event.target.classList.contains("random-cover-button")){
    changeButton()
  }
}


 function randomizeCover() {
   currentTitle.innerText = getRandomBookInfo(titles);
   currentImage.src = getRandomBookInfo(covers);
   currentTagLine1.innerText = getRandomBookInfo(descriptors);
   currentTagLine2.innerText = getRandomBookInfo(descriptors);
 }

function showCustomCover() {
  //hideHomeView.innerHTML += ".view home-view hidden";
  //showFormView.innerHTML = ""
  hideHomeView.classList.add("hidden")
  hideElement("home-view");
  showFormView.classList.remove("hidden");
}

// //lines 39-46(next8) invokes all the randomness at button click random
function changeButton() {
currentTitle.innerText = getRandomBookInfo(titles);
//currentImageSrc.innerText = getRandomBookInfo(covers);
currentImage.src = getRandomBookInfo(covers);
currentTagLine1.innerText = getRandomBookInfo(descriptors);
currentTagLine2.innerText = getRandomBookInfo(descriptors);
}

//hideHomeView.innerHTML = ".view home-view hidden";
//line for randomness below
function getRandomBookInfo(bookInfo) {
  return bookInfo[Math.floor(Math.random() * bookInfo.length)];
}
