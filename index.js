// email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
//    if(!email_regex.test(email_address.val())){ alert('this is not valid email'); e.preventDefault(); return false;  }

function validateEmail()
{
    var email=$("#email").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,3})+$/i;
    if(filter.test(email)== false){
        $('#div_email').html("Enter valid email ");
        $('#email').css("border","2px solid red");
        return false;
    }
    else{
        $('#div_email').hide();
        $('#email').css("border","2px solid green");
        }
}

function checkbox(){
    var error = 0;
    if (!($('#checkboxid').is(':checked'))) {
        error = 1
        alert("Please Tick the Agree to Terms of Use");
    }
    if (error) {
        return false;
    }
    else {
        alert("Form successfully submitted.");
        // return true;
    }
}

function match()
{
    var pass1=$("#pass1").val();
    var pass2=$("#pass2").val();
    if(pass1 != pass2){
        $('#twopass').html("Password doesn't match. ");
        $('#pass2').css("border","2px solid red");
        return false;
    }
    if(pass2.length == 0){
        $('#twopass').html("please enter password. ");
        $('#pass2').css("border","2px solid red");
        return false;
    }
    else{
        $('#twopass').html("password match.");
        $('#twopass').css("color","green");
        $('#pass2').css("border","2px solid green");
        return true;
    }

}


function check(){
    var email=$('#email').val();
    var pass1=$('#pass1').val();
    var pass2=$('#pass2').val();    
    if(email.length == 0){
        $('#div_email').html("Please enter email");
        $('#email').css("border","2px solid red");
        return false;
    }

    if(pass1.length == 0 ){
        $("#onepass").html("please enter password");
        $('#pass1').css("border","2px solid red");
        return false;
    }

    if(pass2.length == 0 ){
        $('#twopass').html("Please enter password ");
        $('#pass2').css("border","2px solid red");
        return false;
    }
    else {
        return true;
        // alert("Successfully submitted");
    }
}

// $(document).ready(function(){
//         $('input[type="checkbox"]').click(function(){
//             if($(this).prop("checked") == true){
//                 alert("Checkbox is checked.");
//             }
//             else if($(this).prop("checked") == false){
//                 alert("Checkbox is unchecked.");
//             }
//         });
//     });

