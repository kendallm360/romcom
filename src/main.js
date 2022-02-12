// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = Cover

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇



var homeView = document.querySelector(".home-view");
var showFormView = document.querySelector(".form-view");
var savedView= document.querySelector(".saved-view");
var randomCoverButton = document.querySelector(".random-cover-button");
var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var currentTitle = document.querySelector('.cover-title');
var currentImage = document.querySelector('.cover-image');
var currentTagLine1 = document.querySelector('.tagline-1');
var currentTagLine2 = document.querySelector('.tagline-2');



window.addEventListener("click", clickHandler);
window.addEventListener("load", randomCover);


//redo for hide element
// function hideElement(element) {
//   document.querySelector(`.${element}`).classList.add("hidden");
// }


function clickHandler(event) {
  if (event.target.classList.contains("make-new-button")){
    makeNewCover()
  } else if (event.target.classList.contains("random-cover-button")){
    randomCover()
  } else if (event.target.classList.contains("view-saved-button")){
    viewSavedCovers()
  } else if (event.target.classList.contains("home-button")){
    viewHome()
  }
}


function makeNewCover() {
  //hideHomeView.innerHTML += ".view home-view hidden";
  //showFormView.innerHTML = ""
  homeView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  //hideElement("home-view");......referenced in line33-34(hide elementfunction)
  showFormView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
}

function viewSavedCovers() {
  homeView.classList.add("hidden");
  showFormView.classList.add("hidden");
  savedView.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function viewHome() {
  homeView.classList.remove("hidden");
  showFormView.classList.add("hidden");
  savedView.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
}



// //lines 39-46(next8) invokes all the randomness at button click random
function randomCover() {
currentTitle.innerText = getRandomBookInfo(titles);
currentImage.src = getRandomBookInfo(covers);
currentTagLine1.innerText = getRandomBookInfo(descriptors);
currentTagLine2.innerText = getRandomBookInfo(descriptors);
}

//line for randomness below
function getRandomBookInfo(bookInfo) {
  return bookInfo[Math.floor(Math.random() * bookInfo.length)];
}
