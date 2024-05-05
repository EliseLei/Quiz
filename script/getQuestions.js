function getQuestions() {
   const questionsData = $("#questionsData").text();
   const questions = JSON.parse(questionsData);

    questions.forEach(function(question) {
       const form = $("<form>"); 
       const div = $("<div>").attr({
          class: "flex justify-center"
       });
 
       const questionLabel = $("<label>").text(question.question);
 
       const input = $("<input>").attr({
          type: "text",
          pattern: question.pattern, 
          class: "text-slate-950 form-input h-10 border-white border-2 w-full"
       });

       const clue = $('<div>').addClass("text-white");
       const clueButton = $('<div>').addClass("clue-btn cursor-pointer").text("See clue");
       const clueText = $('<span>').addClass("clue-text hidden").text(question.help);
      
       showClue(clueButton, clueText);
       clue.append(clueButton, clueText);

       const submitBtn = $("<button>").attr({
          type: "submit",
          class: "check btn",
       }).text("Check");;
 
       div.append(input, submitBtn);
       form.append(questionLabel, clue, "<br>", div);
 
       $("#questionsSection").append(form);
    });

 }

 function showClue(clueButton, clueText) {
   clueButton.click(function() {
      clueText.toggleClass("hidden");
   });
}

 $(document).ready(function(){
   getQuestions();
 });
 