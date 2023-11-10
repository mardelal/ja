
const section = document.getElementById("section");
const main = document.getElementById("main");

const jsonObj = {
    "Vajilla": "Cafe y te",
    "Descripcion": "porcelana",
    "codigo": 25,
    "stock": true,
    "productos": [
        {
            "name": "TAZA PLATO FLORES",
            "precio": 20 + " €",
            "caracteristicas": "Apta para horno",
            "imagen" :"./imgdev/IMG-20231104-WA0000.jpg"
        },
        {

            "name": "TAZA PLATO AZUL",
            "precio": 20 + " €",
            "caracteristicas": "Apta para horno",
            "imagen" :"./imgdev/IMG-20231104-WA0000.jpg"
        },
        {
            "name": "TAZA MANGO",
            "precio": 20 + " €",
            "caracteristicas": "Apta para horno",
           
        }
    ]
}

jsonObj.active//yo sé lo que contiene cada cosa poniendo el ratón encima, y mediante el punto accedes a todas las características
jsonObj["productos"][1]//para acceder más abajo de la jerarquía de archivos, tienes que concatenar con corchetes


function tienda() {

    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj["Vajilla"];
    main.appendChild(myH1); //appendChild" es un método utilizado 
    //para agregar un elemento hijo a un elemento padre en el DOM  


    const myPara = document.createElement('p');
    myPara.textContent ='Descripcion: '  + jsonObj.Descripcion + ' // codigo: ' + jsonObj['codigo'];
    main.appendChild(myPara);
}

function showproductos() {

    const productos = jsonObj['productos'];

    for (var i = 0; i < productos.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myImg = document.createElement('img');

        myH2.textContent = productos[i].name;
        myPara1.textContent = 'caracteristicas: ' + productos[i].caracteristicas;
        myPara2.textContent = 'precio ' + productos[i].precio;
        myImg.src =  productos[i].imagen;


        

        //myPara3.textContent = 'url';

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myImg);
        
    
        section.appendChild(myArticle);
      }

    }


    console.info(jsonObj)
    console.info(jsonObj.productos[0])
    tienda()
    showproductos()

