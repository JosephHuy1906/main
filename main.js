window.addEventListener('scroll', ()=>{
    let x = this.pageYOffset;
    if(x>30){
        document.querySelector('header').classList.add('active')
    }else{
        document.querySelector('header').classList.remove('active')
    }
})
