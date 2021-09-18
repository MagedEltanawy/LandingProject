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
const main=document.querySelector('main'); //select main element contains sections

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//add the active section class
function activeSection(section){  
    const rec=section.getBoundingClientRect();
     if (rec.top<=200){             
        let nodes=section.parentNode.childNodes
        nodes.forEach(function(node){
             if (node.nodeName == 'SECTION'){
             node.classList.remove('your-active-class');                       
             }            
            } ) 
            section.classList.add('your-active-class'); 
    } 
}


//Add eventListener for sections in viewport
/* function sectionAddListener(section){
    main.addEventListener('scroll',activeSection);
 }  */

function createNavLinks(section){   //function for list creation
    // sectionAddListener(section);
    const listItem = document.createElement('li');  //create empty list element
    listItem.innerHTML=`<a href='' link='#${section.getAttribute('id')}'>${section.getAttribute('data-nav')}</a>`;  //add html contents to list element
    fragment.appendChild(listItem);  //add the links to the fragment 
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav 
sections.forEach(createNavLinks);  //add sections to the fragment
document.addEventListener('scroll',function(e){sections.forEach(activeSection);})  //
navList.appendChild(fragment);  //add the fragment to the nav list
//Add eventListener to Nav links
 navList.addEventListener('click',function(evnt){
        if(evnt.target.nodeName==='A'){
            evnt.preventDefault();
            document.querySelector(evnt.target.getAttribute('link')).scrollIntoView({behavior:"smooth"});
        }
     
}) 

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
//console.log(navList.outerHTML);
//Tested and OK

//check that createNavLinks function work correctly
/* createNavLinks(document.querySelector('section'));
createNavLinks(document.querySelector('#section2'));
document.body.appendChild(fragment); */
//Tested and Ok