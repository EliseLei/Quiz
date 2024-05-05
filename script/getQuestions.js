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
          class: "text-slate-950 form-input h-10 border-white border-2"
       });
 
       const submitBtn = $("<button>").attr({
          type: "submit",
          class: "check btn",
       }).text("Check");;
 
       div.append(input, submitBtn);
       form.append(questionLabel, "<br>", div);
 
       $("#questionsSection").append(form);
    });
 }


 $(document).ready(function(){
    getQuestions();
 });
 