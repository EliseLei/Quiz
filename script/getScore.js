function getTotal() {
    const questionsData = $("#questionsData").text();
    const questions = JSON.parse(questionsData);

    const total = $("#total");
    const totalQuestion = questions.length;
    total.append(totalQuestion);
};

function getScore(score) {
    const scoreDiv = $("#score");
    scoreDiv.text(score);
    getBingo(score);
};

let finish = false; 

function getBingo(score) {
    const questionsData = $("#questionsData").text();
    const questions = JSON.parse(questionsData);
    const totalQuestion = questions.length;

    if(score > 0 && totalQuestion == score){
        const message = $("#messageBingo");
        message.removeClass('hidden');
        finish = true;
    }
}

 $(document).ready(function(){
    getTotal();
    getBingo();
 });
 