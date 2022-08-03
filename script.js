$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            lname:{
                required:true,
                minlength:4
            },
            eadrs:{
                required:true,
                email:true
            },

            pwd:{
                minlength:6,
            },

            day:{
                required:true,
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"enter first name",
                minlength:"enter atleast 4 characters"
            }
        }

    })
})