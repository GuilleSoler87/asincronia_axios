
// Recuerda que para estos ejercicios deberás utilizar Axios. 

// Extras

// 1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?
// En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de razas de todos los perros.

function allRaces() {
    axios
        .get("https://dog.ceo/api/breeds/list/all")
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
}

allRaces()

// Imprimir por consola una imagen random de una raza.


function getDogs() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        const dogs = res.data;
        console.log(dogs.message);
      })
      .catch((err) => console.error(err));
  }
  
  getDogs();

// Imprimir por consola todas las imágenes de una raza concreta.

function getDogsImages() {
    axios
      .get("https://dog.ceo/api/breed/hound/afghan/images")
      .then((res) => {
        const dogs = res.data;
        console.log(dogs.message);
      })
      .catch((err) => console.error(err));
  }
  
  getDogsImages();



// Recuerda que para estos ejercicios deberás utilizar Axios.
// Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el árbol DOM.
const perrosDiv = document.querySelector('.imgdogs');

axios
  .get('https://dog.ceo/api/breed/husky/images')
  .then((res) => {
    const dogImages = res.data.message;
    mostrarImgDogs(dogImages);
  })
  .catch((err) => console.error(err));

function mostrarImgDogs(images) {
  perrosDiv.innerHTML = images.map(
    (image) => `<div class="card m-1 " style="width: 18rem; ">
      <img src="${image}" class="card-img-top" alt="...">
    </div>`
  );
}

// *Extra ¿Y si ahora te pidiéramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.

function getDogsImages2() {
    axios
      .get("https://dog.ceo/api/breed/husky/images")
      .then((res) => {
        const dogs = res.data;
        console.log(dogs.message);
      })
      .catch((err) => console.error(err));
  }
  
  getDogsImages2();