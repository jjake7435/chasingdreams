/**
 * Created by JMPC-B4-PC-010 on 30/06/2017.
 */

$(document).ready(function(){

/*-------submitbutton-------*/
    $("#survey").submit(function (event) {
        event.preventDefault();
        if( !$(this).valid() ) {
            return false;
        }
        $("#form-container").fadeOut(1000);
        setTimeout(function(){
            $("#form-container").remove();
            $("#left-section").html("<div id='form-container'><header id='left-header'>Thank you for answering the survey!</header></div>");
        }, 1000);
    });

/*-------searchbar-------*/

    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbox-icon').css('display','block');
            submitIcon.click();
        }
    });
});
    function buttonUp(){
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        }
}



$('#survey').validate({

    rules: {
        code:{
            required:true,
            minlength:4
        },
        garbageSeparation:{
            required: true
        },
        email:{
            required:true
        },
        number:{
            required:true,
            minlength:11
        }
    },
    messages: {
        code:{
            required: "*This is a required field.",
            minlength: "Must be at least 4 characters."
        },
        garbageSeparation:{
            required: "*Please select your answer."
        },
        email:{
            required: "*This is a required field."
        },
        number:{
            required: "*This is a required field.",
            minlength: "Must be at least 11 characters."
        }
    },
    errorPlacement: function (error, element) {
        if (element.is(":radio")){
            error.appendTo(element.parents('.btn-radio-container'));
        }else{
            error.insertAfter(element);
        }
    }
});




/*
if (localStorage.getItem('flag') != null){
    $('#form-container').remove();
}else{
    $('#form-container').show();
}
for backend side
*/


/*
$("#survey").submit(function(event){
    event.preventDefault();
    if( !$(this).valid() ) {
        return false;
    }
    localStorage.setItem('flag', "true");
    /!*localStorage.setItem('Email Address', $('#email-input').val());
    localStorage.setItem('Mobile Number', $('#mobile-num').val());
    localStorage.setItem('Did you Agree?', $(':radio:checked').val());*!/
    /!*$("#left-section").html("<div id='form-container'><header id='left-header'>Thank you for answering the survey!</header></div>");*!/
    $('#survey').remove();
});*/
