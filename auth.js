// สมัครสมาชิก
function register() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    localStorage.setItem(user, pass);
    alert("สมัครสมาชิกสำเร็จ!");
    window.location.href = "login.html";
}

// ล็อกอิน
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const savedPass = localStorage.getItem(user);

    if (savedPass === pass) {
        localStorage.setItem("loggedIn", user);
        alert("เข้าสู่ระบบสำเร็จ");
        window.location.href = "index.html";
    } else {
        alert("ข้อมูลไม่ถูกต้อง");
    }
}

// ตรวจสอบ login
function checkLogin() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
}

// logout
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
