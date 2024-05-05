let score = 0;

function checkAnswer() {
   $(".check").click(function(event){
      event.preventDefault();
      const form = $(this).closest("form");
      const input = form.find(".form-input");

      if (!input[0].checkValidity()) {
         input.removeClass('validStyle'); 
         input.addClass('errorStyle'); 
      } else {
         input.removeClass('errorStyle');
         input.addClass('validStyle'); 
         input.prop('disabled', true);
         score++;
         getScore(score);
      }
   });
}

$(document).ready(function(){
   checkAnswer();
});
