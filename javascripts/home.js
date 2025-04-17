
//Stop auto sliding when mouse is over
const slideContainer = document.querySelector('.slide-container')
slideContainer.addEventListener('mouseover', function(){
clearInterval(deleteInterval);
})
//Resume auto sliding when mouse is out
slideContainer.addEventListener('mouseout', autoSliding)



const faqs = document.querySelectorAll('.faq-container');

faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active");
    })
})


