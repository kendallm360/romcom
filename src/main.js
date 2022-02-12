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
var userCover = document.getElementById('cover');
var userTitle = document.getElementById('title');
var userDescriptor1 = document.getElementById('descriptor1');
var userDescriptor2 = document.getElementById('descriptor2');
var createBookButton = document.querySelector('.create-new-book-button');


window.addEventListener("click", clickHandler);
window.addEventListener("load", randomCover);


 function showElement(elementVar) {
  elementVar.classList.remove("hidden")
}

 function hideElement(elementVar) {
   elementVar.classList.add("hidden")
}

function clickHandler(event) {
  if (event.target.classList.contains("make-new-button")){
    makeNewCover()
  } else if (event.target.classList.contains("random-cover-button")){
    randomCover()
  } else if (event.target.classList.contains("view-saved-button")){
    viewSavedCovers()
  } else if (event.target.classList.contains("home-button")){
    viewHome()
  }else if (event.target.classList.contains("create-new-book-button")){
    createNewBookButton()
  }
}

function createNewBookButton() {
  var book1 = new Cover(userCover.value, userTitle.value, userDescriptor1.value, userDescriptor2.value)
  event.preventDefault()
  currentTitle.innerText = book1.title;
  currentImage.src = book1.cover;
  currentTagLine1.innerText = book1.tagline1;
  currentTagLine2.innerText = book1.tagline2;
  viewHome()
  titles.push(userTitle.value);
  covers.push(userCover.value);
  descriptors.push(userDescriptor1.value);
  descriptors.push(userDescriptor2.value);
}

function makeNewCover() {
  hideElement(homeView);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
  showElement(showFormView);
  showElement(homeButton);
}

function viewSavedCovers() {
  hideElement(homeView);
  hideElement(showFormView);
  showElement(savedView);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton)
  showElement(homeButton);
}

function viewHome() {
  showElement(homeView);
  hideElement(showFormView);
  hideElement(savedView);
  showElement(randomCoverButton);
  showElement(saveCoverButton);
  hideElement(homeButton);
}

function randomCover() {
currentTitle.innerText = getRandomBookInfo(titles);
currentImage.src = getRandomBookInfo(covers);
currentTagLine1.innerText = getRandomBookInfo(descriptors);
currentTagLine2.innerText = getRandomBookInfo(descriptors);
}

function getRandomBookInfo(bookInfo) {
  return bookInfo[Math.floor(Math.random() * bookInfo.length)];
}
