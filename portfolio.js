const iconTrigger = document.querySelector('#iconTrigger')
const icon =document.querySelector('#icon')
const menucontainer = document.querySelector('.menu-container')


iconTrigger.addEventListener('click',()=>{
    if(icon.classList.contains('fa-bars')){

        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')


/*menu container*/
menucontainer.classList.add('show')
menucontainer.classList.remove('hide')
    }
    
    else{
       icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')


        menucontainer.classList.remove('show')
        menucontainer.classList.add('hide')
   

    }
    
})