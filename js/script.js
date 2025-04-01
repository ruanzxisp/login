document.addEventListener("DOMContentLoaded", function(){

    const signupTab = document.getElementById('signup-tab');

    const loginTab = document.getElementById('login-tab');

    const signupForm = document.getElementById('signup'); 

    const loginForm = document.getElementById('login');

    function showSignup() {

    signupForm.style.display = 'block';
    
    loginForm.style.display = 'none';

    signupTab.parentElement.classList.add('active')

    loginTab.parentElement.classList.remove('active')
    
}

function showLogin() {

    loginForm.style.display = 'block';
    
    signupForm.style.display = 'none';

    loginTab.parentElement.classList.add('active')

    signupTab.parentElement.classList.remove('active')
    
}

signupTab.addEventListener('click', function (event) {
    event.preventDefault(); 
    showSignup();
});

loginTab.addEventListener('click', function (event) {
    event.preventDefault(); 
    showLogin();
});

showSignup();

});