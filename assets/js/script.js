document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    // deklarasi username dan password yang benar
    const correctUsername = "Atha"
    const correctPassword = "1234"

    // mengambil username dan password yang didapat
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // pengkondisian ketika username dan password benar maupun salah
    if  (username === correctUsername && password === correctPassword) {
        alert("Login berhasil");
        window.location.href = 'index.html';
    }else{
        alert("Username atau password salah");
    }
});