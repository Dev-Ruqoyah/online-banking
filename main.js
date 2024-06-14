window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navLink = document.querySelectorAll('.nav-link')
    var signUpBtn = document.querySelector('.signupbtn')
    console.log(navbar);
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        signUpBtn.classList.add('scrolled');

        navLink.forEach(function(link) {
            link.classList.add('scrolled');
        });
    }
    else {
        navbar.classList.remove('scrolled');
        signUpBtn.classList.remove('scrolled');
        navLink.forEach(function(link) {
            link.classList.remove('scrolled');
        });
    }
});

