window.addEventListener('scroll',(event)=>{
    const skillsLeftClass = document.querySelector(".skills_left")
    const skillsRightClass = document.querySelector(".skills_right")
    let position = this.scrollY;
    if(position>=1050){
        skillsLeftClass.classList.add("moveFromLeft")
        skillsRightClass.classList.add("moveFromRight")
    }else{
        skillsLeftClass.classList.remove("moveFromLeft")
        skillsRightClass.classList.remove("moveFromRight")
    }
})

window.addEventListener('scroll',(event)=>{
    const aboutClass_1 = document.querySelector(".about-1")
    const aboutClass_2 = document.querySelector(".about-2")
    let position = this.scrollY;
    if(position>=300){
        aboutClass_1.classList.add("moveFromBottom")
        aboutClass_2.classList.add("moveFromBottom")
    }else{
        aboutClass_1.classList.remove("moveFromBottom")
        aboutClass_2.classList.remove("moveFromBottom")
    }
})