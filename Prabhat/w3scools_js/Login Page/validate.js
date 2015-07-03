<script>
    $("#registration").validate(
    {
        rules: 
        {
            First Name: 
            {
                minlength: 3;
                maxlength: 15;
                required: true;
            },
            Last Name:
            {
                minlength: 3;
                maxlength: 15;
                required: true;
            },
            Email:
            {
                required: true;
                email: true;
            },
            Password: 
            {
                required: true;
                Password: true;
            },
            messages:
            {
                First Name:
                {
                    required: "Please enter the Name"
                },
                Last Name: 
                {
                    required: "Please enter the Name"
                },
                Email:
                {
                    required: "Please enter'your Email"
                }
            }
        }
    });
</script>