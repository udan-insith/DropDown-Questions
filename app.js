// const questionBtns = document.querySelectorAll(".question-btn")


// questionBtns.forEach(function(questionBtn) {
//     questionBtn.addEventListener('click', function(e) {
//         e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
//     })
// })



// New Method
const questions = document.querySelectorAll(".question")

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })
})