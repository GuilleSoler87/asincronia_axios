// 2. ¿Quieres saber mi información? Aquí la tienes.
// Para este ejercicio vamos a utilizar la API de usuarios de GitHub, la cual tiene esta URL: https://api.github.com/users/{username}. {username} es el nombre del usuario en GitHub, por lo que si quieres buscar a cualquier usuario, solo tienes que ponerlo en la url. Por ejemplo,https://api.github.com/users/sofiapinilla, o esta https://api.github.com/users/GeerDev. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
// Lo primero que haremos será crear un input de tipo texto y un botón para buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página:

const input = document.getElementById('username');
const boton = document.getElementById('buscar');
const informacionDiv = document.getElementById('informacion');

boton.addEventListener('click', () => {
  const username = input.value;
  axios.get(`https://api.github.com/users/${username}`)
    .then((res) => {
      const { login, public_repos, avatar_url } = res.data;
      informacionDiv.innerHTML = `<div class="card m-1 " style="width: 18rem; ">
      <img src="${avatar_url}" class="card-img-top" alt="...">
      <div class="card-body">
      <p><b>Nombre:</b> ${login}</p>
      <p><b>Número de repositorios:</b> ${public_repos}</p>
      </div>
      </div>
      `;
    })
    .catch((err) => {
      console.error(err);
    });
});

// Lo que queremos que se imprima por consola será:
// Nombre
// Número de repositorios
// Avatar (imagen)
// Recuerda que para estos ejercicios deberás utilizar Axios.Si ya has obtenido toda la información, utiliza las herramientas del árbol DOM para que esta información aparezca en la pantalla.
