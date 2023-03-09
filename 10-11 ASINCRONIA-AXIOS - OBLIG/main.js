// 1.Pintar usuarios
// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de usuarios.

function getUsers() {
    axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
}

getUsers()

// Imprimir por consola solo el nombre de los usuarios.

function getUsers() {
    axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((res) => {
            const users = res.data;
            users.forEach((user) => {
                console.log(user.name);
            });
        })
        .catch((err) => console.error(err));
}

getUsers();

// Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)

let globalUsers = []

axios
    .get("https://jsonplaceholder.typicode.com/users/")
    .then((res) => {
        globalUsers = res.data;
        console.log(globalUsers);
    })
    .catch((err) => console.error(err));


// Crea una función que muestre por consola la variable global que habías creado

function mostrarUsuarios() {
    console.log(globalUsers);
}

// Crea un botón que cuando lo cliques ejecute la función que habías creado

// const btnEjecutar = document.getElementById("btn-ejecutar");

// btnEjecutar.addEventListener("click", function mostrarUsuarios() {
//     console.log(globalUsers);
// });


// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)

const btnEjecutar = document.getElementById("btn-ejecutar");
const nombresDiv = document.querySelector(".nombres");

btnEjecutar.addEventListener("click", function () {
    mostrarNombresUser();
});

function mostrarNombresUser() {
    nombresDiv.innerHTML = globalUsers.map((user) => `<div class="card m-1 " style="width: 18rem; ">
    <img src="istockphoto.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <p id="nombre"> ${user.name}}</p>
    </div>
    </div>`

    )
};

