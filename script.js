
// start firsi name validation


function fname_val(){
    var x=document.getElementById("firstname").value;
    var y=document.getElementById("firstname");
    var z=document.getElementById("icon");
    x == ""?y.setAttribute("value","This field is empty ! !"):z.style.display="inline";
    x == ""?y.style.border="1px red solid":z.style.display="inline";
    x == ""?y.setAttribute("class","animated infinite bounce"):z.style.display="inline";

}
function fname_val_close(){
    var x=document.getElementById("firstname").value;
    var y=document.getElementById("firstname");
    var z=document.getElementById("icon");
    x=="This field is empty ! !"?y.setAttribute("class",""):z.style.display="none";
    x=="This field is empty ! !"?y.setAttribute("value",""):z.style.display="none";
    x=="This field is empty ! !"?y.style.border="1px #ccc solid":z.style.display="none";

}
// end firsi name validation



// start last name validation




function lname_val(){
    var x=document.getElementById("lastname").value;
    var y=document.getElementById("lastname");
    var z=document.getElementById("icon2");
    x == ""?y.setAttribute("value","This field is empty ! !"):z.style.display="inline";
    x == ""?y.style.border="1px red solid":z.style.display="inline";
    x == ""?y.setAttribute("class","animated infinite bounce"):z.style.display="inline";

}
function lname_val_close(){
    var x=document.getElementById("lastname").value;
    var y=document.getElementById("lastname");
    var z=document.getElementById("icon2");
    x=="This field is empty ! !"?y.setAttribute("class",""):z.style.display="none";
    x=="This field is empty ! !"?y.setAttribute("value",""):z.style.display="none";
    x=="This field is empty ! !"?y.style.border="1px #ccc solid":z.style.display="none";

}

// end last name validation

// start mobile  validation


function mobile_val(){
    var x=document.getElementById("mobile").value;
    var y=document.getElementById("mobile");
    var z=document.getElementById("icon3");
    var chack_digit_length = x == ""?y.setAttribute("value","This field is empty ! !"):x;
    var chack_digit_length = x == ""?y.setAttribute("style","border:1px solid red"):x;
    var chack_digit_length = x == ""?y.setAttribute("class","animated infinite bounce"):x;
    var digit_length = chack_digit_length.length == 10 ? x :window.alert("Enter 10 Digit number !");
    digit_length.charAt(0)==9 ||  digit_length.charAt(0)==8 || digit_length.charAt(0)==7 ||  digit_length.charAt(0)==6 ? z.style.display="inline" : window.alert("Enter indian number ! !")
}

function mobile_stop_validation(){
    var x=document.getElementById("mobile");
   x.setAttribute("class","");
    x.setAttribute("value","");
    x.style.border=("1px #ccc solid");
}
// end mobile  validation




// start remobile validation
function remobile_val(){
    var x=document.getElementById("mobile").value;
    var y=document.getElementById("remobile").value;
    var z=document.getElementById("remobile");
    var a=document.getElementById("retick");
    var c = y == "" ? window.alert("remobile is empty"): y;
    var q= c == x ? a.style.display="inline": window.alert("Incorrect remobile " );
}



//end re mobile validation


// start email  validation
function email_val(){
    var x=document.getElementById("email").value;
    var y=document.getElementById("email_hint");
    var z=document.getElementById("echeck");


    x.match('@') ? email_hint.style.display="inline" : email_hint.style.display="none" 

    x.match("gmail.com")?y.style.display="none":x;
    x.match("gmail.com")?z.style.display="inline":x;
    x.match("yahoomail.com")?y.style.display="none":x;
    x.match("yahoomail.com")?z.style.display="inline":x;

}

function gmail(){
    var x=document.getElementById("email").value;
    var y=document.getElementById("email");
    var z=document.getElementById("echeck");
    var div=document.getElementById("email_hint");

    


    y.value=x+"gmail.com";
    div.style.display="none";
    z.style.display="inline";


}



function yahoo(){
    var x=document.getElementById("email").value;
    var y=document.getElementById("email");
    var z=document.getElementById("echeck");
    var div=document.getElementById("email_hint");
    y.value=x+"yahoomail.com";
    div.style.display="none";
    z.style.display="inline";


}


// end mail validation




// start user name  validation

function uname_val(){
    var x=document.getElementById("firstname").value;
    var y=document.getElementById("lastname").value;
    var z=document.getElementById("user_name");
    z.setAttribute("value",x+y);
    z.setAttribute("disabled","disabled");
    
}


// end user name  validation




// start submit  validation
function submit(){
    var a=document.getElementById("firstname");
    var b=document.getElementById("lasstname");
    var c=document.getElementById("mobile");
    var d=document.getElementById("remobile");
    var e=document.getElementById("email");
    var f=document.getElementById("user_name");
    var g=document.getElementById("pword");
    var btn=document.getElementById("submit");

    a,b,c,d,e,f,g = "" ? btn.disabled= true :btn.disabled=false;
    a,b,c,d,e,f,g = "" ? btn.disabled= true :btn.style.backgroundColor="red"
    a,b,c,d,e,f,g = "" ? btn.disabled= true :btn.style.cursor="pointer";


}


// end submit  validation





// start password validation

function password_check_val()
{
    var x=document.getElementById("pword").value;
    var y=document.getElementById("pword");
    var z=document.getElementById("pcheck");
    var upp=/[A-Z]/g;
    var low=/[a-z]/g;
    var num=/[0-9]/g;
    var alp=/[!|@|#|$|%|^|&|*|(|)|_|~|`|<|>|?]/g;

    var upper= x == ""?window.alert("Password Field is empty") : x;

    var number= upper.charAt(0).match(upp)? upper:window.alert("Enter first digit Capital letter in password");

    var alpha= number.match(num) ? number: window.alert("Enter at least one number in password");

    var lower= alpha.match(alp) ? alpha : window.alert("Enter at least one numaric character");

    var length= lower.match(low) ? lower : window.alert("Enter at least one small digit");

    var length=alpha.length>6 ? z.style="inline": window.alert("Your password is weak. Enter at least 7 digit");
    



}




// end password  validation