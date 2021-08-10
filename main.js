//sanity test
// console.log("HEYOO");

//As a user, I would like to display three unique products by chance
// so that the viewers can pick a favorite.

// 3 projects = 3 images, 3 names (constructor)
// viewers pick a favorite = event handler where viewers can clicked a picture

// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image
// Times the image has been shown
// Create an algorithm that will randomly generate three unique product images from the images directory
// and display them side-by-side-by-side in the browser window.

//============== CREATING OUR CONSTRUCTOR FUNCTION================//
class BusMallPictures {
  //This is a class constructor function we will be the base of the ENTIRE project

  // properties that i will want to use outside of the parameters.
  clicks = 0; // amount of clicks for one image
  timesShown = 0; // amounst of times for said image

  //encapsulated inside of class
  // keep up with a name
  // keep up with source of image

  // Initial constructor (MUST BE NAME 'CONSTRUCTOR')
  constructor(
    nameofPicture,
    imageSrc // another method
  ) {
    this.nameofPicture = nameofPicture;
    this.imageSrc = imageSrc;
  }
}
console.log(BusMallPictures); //debugger for our class!
// This class above is basically a template to where we would store ALL of our pictures.

//Lets fill in the template with the pictures we want

let allBusmallPics = [
  //     // you can put all of your new objects inside of your array
  // Below, we have constructed 10 new objects that each have a picture name and url to pull it up!

  new BusMallPictures("bag", "Pictures/bag.jpg"),
  new BusMallPictures("banana", "Pictures/banana.jpg"),
  new BusMallPictures("boots", "Pictures/boots.jpg"),
  new BusMallPictures("breakast", "Pictures/breakfast.jpg"),
  new BusMallPictures("chair", "Pictures/chair.jpg"),
  new BusMallPictures("dragon", "Pictures/dragon.jpg"),
  new BusMallPictures("pen", "Pictures/pen.jpg"),
  new BusMallPictures("shark", "Pictures/shark.jpg"),
  new BusMallPictures("sweep", "Pictures/sweep.png"),
  new BusMallPictures("unicorn", "Pictures/unicorn.jpg"),
];
//  console.log(allBusmallPics); // Sanity test to figure out if the objects show up on the console.

//=========================== END OF CONSTRUCTOR FUNCTION ==============================//

//================== ALL OF THE VARIABLES THAT WILL BE USED ===================== //

let leftBusMallPic = null; //What image would appear on the left.

let middleBusMallPic = null; // What image will appear in the middle.

let rightBusMallPic = null; // what image would appear on the right

let totalClicks = 0; //total amount of clicks

const MAX_CLICKS = 5; // amount of clicks allowed

// We will randomly pull from lsit of  image objects and display them
// We need an array to keep up with the objects!

// ==================== END OF VARIABLE ================================= //

// ================== SET UP OUR ELEMENTS IN THE DOM ======================= //
// Setting up all of our elements in the DOM to manipulate them
const BUSMALL_HEADER = document.getElementById("busmall-header");
const BUSMALL_SECTION = document.getElementById("all-busmall-section");

//LEFT BUSMALL IMAGE AND TEXT
const LEFT_BUSMALL_IMAGE = document.getElementById("left-busmall-img");
const LEFT_BUSMALL_TEXT = document.getElementById("left-busmall-text");

//MIDDLE BUSMALL IMAGE AND TEXT
const MIDDLE_BUSMALL_IMAGE = document.getElementById("middle-busmall-img");
const MIDDLE_BUSMALL_TEXT = document.getElementById("middle-busmall-text");

//RIGHT BUSMALL IMAGE AND TEXT
const RIGHT_BUSMALL_IMAGE = document.getElementById("right-busmall-img");
const RIGHT_BUSMALL_TEXT = document.getElementById("right-busmall-text");

//will display our final scores in the browser
const FINAL_SCORE = document.getElementById("finalScores");

// create our button in the JAVASCRIPT because we don't want it to show up right now
const RESULTS_BUTTON = document.createElement("button");
RESULTS_BUTTON.innerText = "Click me to see results!";

//  Q: What do we want to do now that we have targeted our image and text ids?
//  A: We want to connect the image ids with the images and the text ids with the text.

// ======================= CREATE A FUNCTION THAT WILL RANDOMLY GENERATE OUR PICTURES ======================== //
// out of the 10 photos we have in the 'allBusmallPics' array, we want to generate only three at a time that are chosen by the computer.
let randomPhotoClick = function () {
  // this is an ANON function. TODO: Research more on why we use ANON functions.
  let randomPhotoLeft = Math.floor(Math.random() * allBusmallPics.length); // generates a random photo on the left side of the page
  let randomPhotoMiddle = Math.floor(Math.random() * allBusmallPics.length); // generates a random photo in the middle of the page
  let randomPhotoRight = Math.floor(Math.random() * allBusmallPics.length); // generates a random photo on the right side of the page

  // Update left busmall picutres to show up in DOM. the random photo is generated inside of the square brackets
  LEFT_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoLeft].imageSrc;
  LEFT_BUSMALL_TEXT.innerText = allBusmallPics[randomPhotoLeft].nameofPicture;

  // Update Middle busmall picutres to show up in DOM. the random photo is generated inside of the square brackets
  MIDDLE_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoMiddle].imageSrc;
  MIDDLE_BUSMALL_TEXT.innerText =
    allBusmallPics[randomPhotoMiddle].nameofPicture;

  // Update Right busmall picutres to show up in DOM. the random photo is generated inside of the square brackets
  RIGHT_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoRight].imageSrc;
  RIGHT_BUSMALL_TEXT.innerText = allBusmallPics[randomPhotoRight].nameofPicture;

  // We store our busmall pics inside of our variables!!
  leftBusMallPic = allBusmallPics[randomPhotoLeft];
  middleBusMallPic = allBusmallPics[randomPhotoMiddle];
  rightBusMallPic = allBusmallPics[randomPhotoRight];

  // =============== CHECKING FOR DUPLICATE PHOTOS =================== //

  if (
    randomPhotoLeft === randomPhotoRight ||
    randomPhotoMiddle === randomPhotoRight ||
    randomPhotoMiddle === randomPhotoLeft
  ) {
    // what do we want to do?
    //generate another photo!
    Math.floor(Math.random() * allBusmallPics.length);
  }

  // =========== END OF CHECKING DUPLICATE PHOTOS ================== //
};

// ======================= END OF OUR RANDOM GENERATOR FUNCITON ================================== //

// We have managed to get the random photos to show up on the screen!!

//================== END OF DOM SETUP ============================ //

//TODO: REFRESH ON EVENT LISTENERS
//TODO: ADD EVENT LISTENER!
//TODO:GENERATE TOTAL NUMBER OF CLICKS
//GENERATE TOTAL TIMES IMAGES SHOW UP

//============= EVENT LISTENER=================//

// Handle clicks on the product pictures
// Get which picture clicked on from the EVENT TARGET.
const handleClickOnPicture = function (evt) {
  // a function is stored inside of a variable we use to handle the picture clicked
  console.log(`You clicked this target element id ${evt.target.id}`);
  // if they can still click, do clicky things
  if (totalClicks < MAX_CLICKS) {
    // condition to check if the total clicks the user generates is less than the amount WE SPECIFY.

    const thingWeClickedOn = evt.target; //.notation;
    const id = thingWeClickedOn.id; // to check what we have clicked! it checks the 'ID' of each PICTURE!

    // Mark that they were shown
    leftBusMallPic.timesShown++; //increments the amount of times it has been clicked on the page!
    middleBusMallPic.timesShown++; //increments the amount of times it has been clicked on the page!
    rightBusMallPic.timesShown++; //increments the amount of times it has been clicked on the page!

    //console log to check if the numbers are incrementing each time we click:

    console.log(
      `Left pic ${leftBusMallPic.nameofPicture} has been shown ${leftBusMallPic.timesShown}, middle pic ${middleBusMallPic.nameofPicture} has been shown ${middleBusMallPic.timesShown}, and the right pic ${rightBusMallPic.nameofPicture} has been shown ${rightBusMallPic.timesShown} so far.`
    );

    // Check which was clicked and update counter
    if (
      id === "left-busmall-img" ||
      id === "right-busmall-img" ||
      id === "middle-busmall-img"
    ) {
      //track the pcitures from the ids we recieved from the DOM.

      if (id === "left-busmall-img") {
        // clicked on the left image
        leftBusMallPic.clicks++; // adds to the amount of clicks!
        console.log(
          `Left pic ${leftBusMallPic.nameofPicture} has ${leftBusMallPic.clicks} so far`
        );
      }

      if (id === "middle-busmall-img") {
        // clicked on the middle image
        middleBusMallPic.clicks++; //adds to the amount of clicks!
        console.log(
          `Middle pic ${middleBusMallPic.nameofPicture} has ${middleBusMallPic.clicks} so far`
        );
      }

      if (id === "right-busmall-img") {
        // clicked on the right image
        rightBusMallPic.clicks++; //adds to the amount of clicks!
        console.log(
          `Right pic ${rightBusMallPic.nameofPicture} has ${rightBusMallPic.clicks} so far`
        );
      }

      //after we update the old, pick new pictures to reset!
    }
    randomPhotoClick();
  }

  // increments amount of total clicks in all.
  totalClicks++;
  //when they reach total max clicks, remove the click function
  if (totalClicks === MAX_CLICKS) {
    BUSMALL_SECTION.removeEventListener("click", handleClickOnPicture); // stops the user from clicking any more pictures in the section.
    console.log("You picked 5 pictures, thanks!"); //sanity test to check if the max amount of clicks is documented

    // button to click to show results
    // button appears in if statement
    BUSMALL_SECTION.appendChild(RESULTS_BUTTON); // make the button appear in our DOM.
    RESULTS_BUTTON.addEventListener("click", finalResultsTotal); // Wrap the total results in a function and use an addevent listener to call the button!
    function finalResultsTotal() {
      // display the clicks to the page
      for (let index = 0; index < allBusmallPics.length; index++) {
        //for loop to go through all of the pictures to see what was clicked
        // Probably can do this on one line with dot notation/nesting
        let newLiScore = document.createElement("li");
        newLiScore.innerText = `${allBusmallPics[index].nameofPicture}: ${allBusmallPics[index].clicks}`; // the name of the pic, and how many times it was clicked
        FINAL_SCORE.appendChild(newLiScore); // Add score
      }
    }
  }
};

BUSMALL_SECTION.addEventListener("click", handleClickOnPicture); // adding the event listener to the section!
randomPhotoClick(); //starts us off when the user first loads the page.

// TODO: Prevent two random pictures from showing up at the same time
// Add a button with the text View Results, which when clicked
// displays the list of all the products followed by the votes received,
//  and number of times seen for each.

// REVIEW AND REFRESH EVENT LISTENERS
// REWRITE BUSMALL PAGE WITHOUT LOOKING AT REFERENCE. ONE INSTRUCTION AT A TIME
