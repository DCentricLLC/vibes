/* SPLASH SCREEN */


let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");



 window.addEventListener("DOMContentLoaded", ()=> {
	
 	setTimeout(()=> {
		
		logoSpan.forEach((span, idx)=> {
			
			setTimeout(()=> {
 				span.classList.add("active");
 			}, (idx + 1) * 400)
			
 		});
		
 		setTimeout(()=> {
 			logoSpan.forEach((span, idx)=> {
				
 				setTimeout(()=> {
 					span.classList.remove("active");
 					span.classList.add("fade");
 				}, (idx + 1) * 50);
 			})
 		},2000);
		
		
 		setTimeout(()=> {
 			intro.style.top = "-100vh";
 		}, 2300)
		
		
 	})
 })

 /* END */









const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    //Button click active class//
    for(let i =0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }

    //Sections Active class//
    allSections.addEventListener('click', (e) =>{
       const id = e.target.dataset.id;
       if(id) {
        //remove selected from the other btns//
        sectBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        //hide other sections//
        sections.forEach((section) => {
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
       }
    })

}

PageTransitions();