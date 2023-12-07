// Smooth Scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function redirectToQuiz() {
    window.location.href = 'https://www.washingtonpost.com/lifestyle/interactive/2023/personal-growth-quiz/';
}
