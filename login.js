document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username-a');

    if (loginForm && usernameInput) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const nameValue = usernameInput.value.trim();

            if (nameValue === "") {
                alert("الرجاء إدخال الاسم أولاً!");
                return;
            }

            localStorage.setItem("loggedInUser", nameValue);

            if (nameValue.startsWith('t_')) {
                window.location.href = 'doctor_dashboard.html';
            } else {
                window.location.href = 'student_dashboard.html';
            }
        });
    }
});