const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls'); //Parent button
const sectBtn = document.querySelectorAll('.control'); //Child button
const allSections = document.querySelector('.main-content'); //This is the body

function PageTransitions() {
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    

    //Sections Active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id; //The dataset refers to whatever element I have clicked on
        if(id){
            //Remove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //Hide other sections
            sections.forEach((section) =>{
               section.classList.remove('active')
           })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

   
}

PageTransitions();

//About
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

 //Typing effect on the header section
 let typed = new Typed('#auto-input', {
    strings: ['Ira Clariz O. Lim'],
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 100,
    loop: true
})




