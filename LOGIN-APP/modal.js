const NEW_USER = document.getElementById('user-new');

const NEW_PASSWORD = document.getElementById('password-new');

const signUp = document.getElementById('sign-up');

const PASSWORD = [1,2,3,4,5,6,7,8];

const SECURE = document.getElementById('password-secure');

const NO_SECURE = document.getElementById('password-no-secure');

class NewUsers {
    constructor(NEW_USER, NEW_PASSWORD) {
        this.user = NEW_USER
    this.password = NEW_PASSWORD
  }
}

signUp.addEventListener('click', (event) => {
    const user = new NewUsers(NEW_USER.value, NEW_PASSWORD.value)
    console.log(user);
    event.preventDefault();
  })
  

  // comprobando de que sea una password segura
  function validPassword(event) {
    const PASSWORD_USER = [];

    PASSWORD_USER.push(NEW_PASSWORD.value);

    const PASSWORD_USER_LENGTH = PASSWORD_USER[0].split("").map(l => l + " ");

    if (PASSWORD_USER_LENGTH.length >= PASSWORD.length) {
      SECURE.classList.remove("d-none");
      SECURE.classList.add("true");
      NO_SECURE.classList.add("d-none");
      alert(`Bienvenido ${NEW_USER.value} tu cuenta se ha creado exitosamente`)
    } else {
      NO_SECURE.classList.remove("d-none");
      NO_SECURE.classList.add("false");
      SECURE.classList.add("d-none");
    }
    event.preventDefault();
  }

signUp.addEventListener('click', validPassword);


// función para mostrar y ocultar la contraseña
document.getElementById('btn-show').addEventListener('click', () => {
  if (NEW_PASSWORD.type === "password") {
    NEW_PASSWORD.type = "text"
    document.getElementById('icon').classList.add("ri-eye-off-line");
    document.getElementById('icon').classList.remove("ri-eye-line");
  } else {
    NEW_PASSWORD.type = "password";
    document.getElementById('icon').classList.remove("ri-eye-off-line");
    document.getElementById('icon').classList.add("ri-eye-line");
  }
})

