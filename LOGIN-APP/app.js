const LOGIN = document.getElementById('login');

const USER_Name = document.getElementById('user');

const PASSWORD = document.getElementById('password');

const SHOW_PASSWORD = document.getElementById('btn-show');

const ERROR_USER = document.getElementById('error-user');

const MODAL = document.getElementById('modal');

const ERROR_PASSWORD = document.getElementById('error-password');

const ERRORS = document.getElementById('errors')

const admin = "Brian";
const password = "1234";

// funcion principal
function login(event) {

    if (USER_Name.value == "" || PASSWORD.value == "") {
        alert("Debes ingresar los datos")
    } else {
        if (USER_Name.value !== admin && PASSWORD.value !== password) {
            ERRORS.classList.add("error");
            ERRORS.classList.remove("d-none");

            ERROR_USER.classList.add("d-none");
            ERROR_PASSWORD.classList.add("d-none");

            MODAL.classList.remove("modal-d-none");
            MODAL.classList.add("mostrar");

        } else if (USER_Name.value !== admin) {
            ERROR_USER.classList.remove("d-none");
            ERROR_USER.classList.add("error");

            ERROR_PASSWORD.classList.add("d-none")
            MODAL.classList.add("modal-d-none");
            MODAL.classList.add("mostrar");
            ERRORS.classList.add("d-none");
        }
        else if (PASSWORD.value !== password) {
            ERROR_PASSWORD.classList.remove("d-none");
            ERROR_PASSWORD.classList.add("error");
            ERROR_USER.classList.add("d-none");
            MODAL.classList.remove("mostrar");
            MODAL.classList.add("modal-d-none");
            ERRORS.classList.add("d-none");
        }
        else if (USER_Name.value == admin && PASSWORD.value == password) {
            alert(`Hola ${admin} puedes pasar`);
            document.addEventListener('click', () => location.reload());
        }
    }


    event.preventDefault();
};
LOGIN.addEventListener('click', login);



// funcion para mostrar y ocultar la contraseña
SHOW_PASSWORD.addEventListener('click', () => {
    if (PASSWORD.type === "password") {
        PASSWORD.type = "text";
        document.getElementById('icon').classList.add("ri-eye-off-line");
        document.getElementById('icon').classList.remove("ri-eye-line");
    } else {
        PASSWORD.type = "password";
        document.getElementById('icon').classList.remove("ri-eye-off-line");
        document.getElementById('icon').classList.add("ri-eye-line");
    }
});

