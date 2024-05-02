const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controlls");
const sectionBtn = document.querySelectorAll(".control");
const mainContent = document.querySelector(".main-content");



function pageTransition(){
    for(let i = 0;i < sectionBtn.length;i++){
        sectionBtn[i].addEventListener('click',function() {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn","");
            this.className += " active-btn";     
        })
    }
    mainContent.addEventListener('click',(e) => {
        const id = e.target.dataset.id;
        console.log(e.target);
        if (id){
            sectionBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add("active");
            sections.forEach((section) => {
                section.classList.remove("active");
            })
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
};


pageTransition();