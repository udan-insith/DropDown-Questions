const questionBtns = document.querySelectorAll(".question-btn")


questionBtns.forEach(function(questionBtn) {
    questionBtn.addEventListener('click', function(e) {
        e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
    })
})