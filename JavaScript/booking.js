function formValidation(){

    var uname = document.form1.username;
    var uphone=document.form1.phone;
    var ucountry = document.form1.country;
    var uemail = document.form1.email;
    var umsex = document.form1.msex;
    var ufsex = document.form1.fsex;

    if(allLetter(uname))
    {
        if(phonenumber(uphone))
        {  
            if(countryselect(ucountry))
            {
            {
                if(ValidateEmail(uemail))
                {
                if(validategender(form))
                {
                    window.location="form-valid.html";
                }
                }
            }
    }	
    }
        }
        
    return false;
    }
            function allLetter(uname)
    { 
            var letters = /^[A-Za-z]+$/;
            if(uname.value.match(letters))
            {
            return true;
            }
            else
            {
            alert('Please input alphabet characters only');
            uname.focus();
            return false;
            }
    }
    function phonenumber(uphone)
    {
        var phoneno = /^\d{10}$/;
        if(uphone.value.match(phoneno))
        {
        return true;
        }
        else
        {
        alert("Not a valid Phone Number");
        return false;
        }
    }        
                
    function countryselect(ucountry)
        {
        if(ucountry.value == "PS")
        {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
        }
        else
        {
        return true;
        }
    }
    function ValidateEmail(uemail)
        {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat))
        {
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
        }
    }
            function validategender(form){
    ErrorText= "";
    if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) )
    {
    alert ( "Please choose your Gender: Male or Female" );
    return false;
    }
    if (ErrorText= "") { form.submit() }
    }
      