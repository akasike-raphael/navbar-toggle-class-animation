const navbar = document.querySelector(".navbar").querySelectorAll("a")
navbar.forEach(element =>{
    element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active")
        console.log(navbar)
    })
})
