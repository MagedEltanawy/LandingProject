/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections =document.querySelectorAll('main section');  //select sections from main
const navList=document.querySelector('#navbar__list');  //select the list of navigation parent UL element
const fragment=document.createDocumentFragment();   //make fragment to decrease reflow and repaint (efficient)


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// test code
//console.log('Hello Tanawy'); 
/*it worked so the script tag was added 
and the relative path ok */

// check that sections were selected
//console.log(sections);
//Tested and OK

// check that nav_list were selected
console.log(navList.outerHTML);
//Tested and OK
