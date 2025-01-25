const pageNumbers = document.querySelectorAll("a");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

prevBtn.addEventListener("click", event => {
    
    const pathName = (event.view.location.pathname).toString();
    const  currentPageNumber = pathName.slice(5,6);
    
    if(currentPageNumber > 1) {
        
        event.view.location.pathname = `page${currentPageNumber - 1}.html`;
       
    }

})

nextBtn.addEventListener("click", event => {

    const pathName = (event.view.location.pathname).toString();
    const currentPageNumber = pathName.slice(5,6);
    
    if(currentPageNumber < pageNumbers.length) {
       
        event.view.location.pathname = `/page${Number(currentPageNumber) + 1}.html`;
        pageNumbers[currentPageNumber].classList.add("active");
        
    } 
    
})
