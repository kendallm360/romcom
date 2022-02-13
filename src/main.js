// Create variables targetting the relevant DOM elements here 👇

// We've provided a few variables below
var savedCovers = [new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
"Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];

var currentCover

// Add your event listeners here 👇

// Create your event handlers and other functions here 👇
var homeView = document.querySelector(".home-view");
var showFormView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");

var coverGallery = document.querySelector(".saved-covers-section")

var randomCoverButton = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button")
var galleryButton = document.querySelector(".view-saved-button")
var homeButton = document.querySelector(".home-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var currentTitle = document.querySelector(".cover-title");
var currentImage = document.querySelector(".cover-image");
var currentTagLine1 = document.querySelector(".tagline-1");
var currentTagLine2 = document.querySelector(".tagline-2");
var userCover = document.getElementById("cover");
var userTitle = document.getElementById("title");
var userDescriptor1 = document.getElementById("descriptor1");
var userDescriptor2 = document.getElementById("descriptor2");
var createBookButton = document.querySelector(".create-new-book-button");

window.addEventListener("load", randomCover);

function showElement(elementVar) {
  elementVar.classList.remove("hidden");
}

function hideElement(elementVar) {
  elementVar.classList.add("hidden");
}

makeNewButton.addEventListener("click", makeNewCover)
randomCoverButton.addEventListener("click", randomCover)
galleryButton.addEventListener("click", viewSavedCovers)
homeButton.addEventListener("click", viewHome)
createBookButton.addEventListener("click", createNewBook)
saveCoverButton.addEventListener("click", saveCover)

function createNewBook() {
  event.preventDefault();
  var newTitle = userTitle.value
  var newCover = userCover.value
  var newDescriptor1 =  userDescriptor1.value
  var newDescriptor2= userDescriptor2.value
  displayCover(newTitle, newCover, newDescriptor1, newDescriptor2)
  //event.preventDefault();
  //console.log(currentCover);
    viewHome();
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

function saveCover() {
  if (!savedCovers.includes(currentCover)){
    savedCovers.push(currentCover);
  }

console.log(savedCovers)
}

function viewSavedCovers() {
  savedView.innerHTML = '';
  hideElement(homeView);
  hideElement(showFormView);
  showElement(savedView);
  hideElement(randomCoverButton);
  hideElement(saveCoverButton);
  showElement(homeButton);
    for (var i = 0; i < savedCovers.length; i++) {


      savedView.innerHTML += `
        <section class="mini-cover">
          <img class="cover-image" src=${savedCovers[i].cover}>
          <h2 class="cover-title">${savedCovers[i].title}</h2>
          <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
          <img class="price-tag" src="./assets/price.png">
          <img class="overlay" src="./assets/overlay.png">
        </section>`
        console.log(savedCovers)
    }

      show(savedView);
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
  var newTitle = titles[getRandomBookInfo(titles)];
  var newCover = covers[getRandomBookInfo(covers)];
  var newDescriptor1 = descriptors[getRandomBookInfo(descriptors)];
  var newDescriptor2= descriptors[getRandomBookInfo(descriptors)];
  displayCover(newCover, newTitle, newDescriptor1, newDescriptor2)
}

function displayCover(newCover, newTitle, newDescriptor1, newDescriptor2) {
  console.log(currentCover);
  currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2);
  console.log(currentCover);

  currentTitle.innerText = newTitle
  currentImage.src = newCover
  currentTagLine1.innerText = newDescriptor1
  currentTagLine2.innerText = newDescriptor2
}

function getRandomBookInfo(bookInfo) {
  return Math.floor(Math.random() * bookInfo.length);
}


function duplicates() {
console.log(savedCovers);
}

function pushToArray() {
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1);
  descriptors.push(currentCover.tagline2);
};
