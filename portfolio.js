/* Start of Portfolio Section */
/* Start of Portfolio Filter and Popup */
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;

    /* Filter Portfolio Items */
    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
            console.log("true");
        }
    })

})();
/* End of Portfolio Filter and Popup */
/* End of Portfolio Section */
