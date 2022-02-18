var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus', () => {
    email.style.borderColor = "#4A5F6A";
});
email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
});
password.addEventListener('focus', () => {
    email.style.borderColor = "#4A5F6A";
});
password.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
});

function Enviar() {
    email.value = "";
    password.value = "";
    alert("Dados Enviados Com Sucesso!");
}