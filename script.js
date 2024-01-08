
document.querySelectorAll('.accordion-question').forEach((accordionQuestion) => 
    accordionQuestion.addEventListener("click", () => {

    if (accordionQuestion.parentNode.classList.contains("active")) {

        accordionQuestion.parentNode.classList.toggle("active")

    }
    else {
        document.querySelectorAll('.accordion-question').forEach(accordionQuestion => 
            accordionQuestion.parentNode.classList.remove("active"));

        accordionQuestion.parentNode.classList.add("active")
    }

    
}));
