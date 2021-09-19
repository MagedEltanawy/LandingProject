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




// add sections
createSection();
createSection();

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('main section'); //select sections from main 
const navList = document.querySelector('#navbar__list'); //select the list of navigation parent UL element
const fragment = document.createDocumentFragment(); //make fragment to decrease reflow and repaint (efficient)
const main = document.querySelector('main'); //select main element contains sections after the added section

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
//add the active section class
function activeSection(section) {
    const rec = section.getBoundingClientRect();
    if (rec.top <= 200) {
        let nodes = section.parentNode.childNodes
        nodes.forEach(function(node) {
            if (node.nodeName == 'SECTION') {
                node.classList.remove('your-active-class');
            }
        })
        section.classList.add('your-active-class');
    }

    showNavList();
}

function showNavList() {
    setTimeout(function(e) {
        const x = document.body.parentElement.getBoundingClientRect();
        if (x.top == 0) {
            document.querySelector('nav').style.display = 'block';
        }
    }, 100)
}

function createNavLinks(section) { //function for list creation
    // sectionAddListener(section);
    const listItem = document.createElement('li'); //create empty list element
    listItem.innerHTML = `<a href='' link='#${section.getAttribute('id')}'>${section.getAttribute('data-nav')}</a>`; //add html contents to list element
    fragment.appendChild(listItem); //add the links to the fragment 
}

function createSection() { // function to add more sections to page
    const main = document.querySelector('main'); //select main element contains sections 
    const section = document.createElement('section');
    const div = document.createElement('div')
    const title = document.createElement('h2');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    title.innerHTML = `section ${main.childElementCount}`; // get the section increased by one due to head element
    para1.textContent = main.querySelectorAll('section p')[0].textContent; // get one paragraph from other sections
    para2.textContent = main.querySelectorAll('section p')[1].textContent; // get one paragraph from other sections
    div.classList.add("landing__container"); // add the class for style
    section.setAttribute("id", `section${main.childElementCount}`);
    section.setAttribute("data-nav", `section ${main.childElementCount}`);
    section.setAttribute("class", "");
    div.appendChild(title);
    div.appendChild(para1);
    div.appendChild(para2);
    section.appendChild(div);
    main.appendChild(section);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */


// build the nav 
sections.forEach(createNavLinks); //add sections to the fragment
document.addEventListener('scroll', function(e) {
    sections.forEach(activeSection);
    document.querySelector('nav').style.display = 'none';
}) //
navList.appendChild(fragment); //add the fragment to the nav list
//Add eventListener to Nav links
navList.addEventListener('click', function(evnt) {
    if (evnt.target.nodeName === 'A') {
        evnt.preventDefault();
        document.querySelector(evnt.target.getAttribute('link')).scrollIntoView({
            behavior: "smooth"
        });
    }

})
document.querySelector('button').addEventListener('click', function(e) {
    document.body.parentElement.scrollIntoView();
    showNavList();
})


/**
 * End Main Functions
 * Begin Events
 * 
 */