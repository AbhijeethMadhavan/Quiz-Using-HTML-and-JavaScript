const quizForm = document.getElementById('quiz-form');
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    checkAnswers();
});


function checkAnswers() {
	let total = 0;
	let q1 = document.getElementById("quiz-form").q1.value;
	let q2 = document.getElementById("quiz-form").q2.value;
	let q3 = document.getElementById("quiz-form").q3.value;
	let q4 = document.getElementById("quiz-form").q4.value;
	let q5 = document.getElementById("quiz-form").q5.value;

	if (q1 == "a") { total++; }
	if (q2 == "b") { total++; }
	if (q3 == "b") { total++; }
	if (q4 == "a") { total++; }
	if (q5 == "a") { total++; }

    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = "You scored " + total + " out of 5.<br> Ans 1 = Paris<br>Ans 2 = Jupiter <br>Ans 3 = Girrafe <br>Ans 4 = J.K Rowling <br>Ans 5 = Alexander Graham Bell";
    
}