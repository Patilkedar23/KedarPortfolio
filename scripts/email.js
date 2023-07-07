
document.addEventListener('DOMContentLoaded', function() 
{
    document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault(); 
        var from_name = document.getElementById('name').value;
        var email_id = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
        var formData = {
            from_name: from_name,
            email_id: email_id,
            phone: phone,
            message: message
    };
    emailjs.send('service_6hfhnvr', 'template_s5w13su', formData)   
    .then(function(response) {
        console.log('Email sent successfully!', response);
        alert('Email Sent Successfully!\nThank You For Contacing Me.\nI will get back to you soon.');
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 3000);
    })
    .catch(function(error) {
        console.error('Email sending failed:', error);
        alert('Email Sending Failed. Please Try Again Later.');
    });
});
})
