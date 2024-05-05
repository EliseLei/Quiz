
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
      }
   });
}

$(document).ready(function(){
   checkAnswer();
});
