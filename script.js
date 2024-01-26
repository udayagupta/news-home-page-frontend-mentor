function openSideBar() {
    document.querySelector(".side-bar-section").classList.toggle('hidden')
    document.body.style.backgroundColor = 'hsl(233, 8%, 79%)'
}   

function closeSideBar() {
    document.querySelector(".side-bar-section").classList.toggle('hidden')
    document.body.style.backgroundColor = 'white'
}