function checkInput() {
   $(".check").click(function(event){
        event.preventDefault();
        const form = $(this).closest("form");
        const input = form.find(".form-input");
        const inputValue = input.val();
        console.log(input);
        console.log(inputValue);
        if (!input[0].checkValidity()) {
            input.removeClass('border-emerald-700 bg-emerald-400'); 
            input.addClass('border-red-700 bg-red-400'); 
        } else {
            input.removeClass('border-red-700 bg-red-400');
            input.addClass('border-emerald-700 bg-emerald-400'); 
        }
    });
}

 $(document).ready(function(){
    checkInput();
 });