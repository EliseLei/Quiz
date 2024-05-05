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

function getBingo(score) {
    const questionsData = $("#questionsData").text();
    const questions = JSON.parse(questionsData);
    const totalQuestion = questions.length;

    if(score > 0 && totalQuestion == score){
        const message = $("#messageBingo");
        message.removeClass('hidden');
        console.log("omg j'ai réussi");
    }
}

 $(document).ready(function(){
    getTotal();
    getBingo();
 });
 