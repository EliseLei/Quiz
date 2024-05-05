function getTotal() {
    const questionsData = $("#questionsData").text();
    const questions = JSON.parse(questionsData);

    const total = $("#total");
    const totalQuestion = questions.length;
    total.append(totalQuestion);
};

function getScore() {
    const score = $("#score");
    score.append(scoreQuestion);
};

 $(document).ready(function(){
    getTotal();
 });
 