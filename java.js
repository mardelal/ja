
const pepe = document.getElementById("yopepe");
const juan =document.getElementById("yojuan");

const section = document.getElementById("section");
const header = document.getElementById("header");


const jsonObj = {

    "Vajilla": "Cafe y te",
    "Descripcion": "porcelana",
    "codigo": 25,
    "stock": true,
    "productos": [

    {
        "name": "TAZA PLATO FLO",
        "precio": "20E",
        "caracteristicas": "Apta para horno"
        "url":" Y COMO SE ENLAZA EL JAVA??",
    },
    {

        "name": "TAZA PLATO AZUL",
        "precio": "20E",
        "caracteristicas": "Apta para horno"
        "url":" Y COMO SE ENLAZA EL JAVA??",
    },
    {
        "name": "tAZA MANGO",
        "precio": "20E",
        "caracteristicas": "Apta para horno"
        "url":" y COMO SE ENLAZA EL JAVA??",
    }
]
}

jsonObj.active//yo sé lo que contiene cada cosa poniendo el ratón encima, y mediante el punto accedes a todas las características
jsonObj["productos"][1]["caracteristicas"][2]//para acceder más abajo de la jerarquía de archivos, tienes que concatenar con corchetes


function tienda() {
    
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj["Vajilla"];
    juan.appendChild(myH1); //appendChild" es un método utilizado 
    //para agregar un elemento hijo a un elemento padre en el DOM  
   
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Descripcion: ' + jsonObj.Descripcion + ' // codigo: ' + jsonObj['codigo'];
    header.appendChild(myPara);
  }

  function showproductos() {
    const productos = jsonObj['productos'];
  
    for (var i = 0; i < productos.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');

      myH2.textContent = productos[i].name;
      myPara1.textContent = 'caracteristicas: ' + productos[i].caracteristicas;
      myPara2.textContent = 'precio: ' + productosheroes[i].precio;
      myPara3.textContent = 'url';
          }

    console.info(jsonObj)
    console.info(jsonObj.productos[0])
     tienda()
      showproductos()
    
  
  

// //  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  
// //  const request = new XMLHttpRequest();
// //   request.open('GET', requestURL);
// //   request.responseType = 'json';
// //   request.send();
 
  

// //   request.onload = function() {
// //     const superHeroes = request.response;
// //     populateHeader(superHeroes);
// //     showHeroes(superHeroes);
// //   }

  
  
    
  

    
      
  
     
     
 

///EJERCICIO CON LA URL DE UNA IMAGEN///

  // const data= {

  //   "url":"https://cdn.pixabay.com/photo/2023/09/10/00/49/lovebird-8244066_960_720.jpg"
    
  //   }
  //   const section = document.getElementById("section");
    
  //   function pintar(){
  //       const image = document.createElement("img")
  //       image.src = data.url
  //       section.appendChild(image)
  //   }
    
  //   pintar()