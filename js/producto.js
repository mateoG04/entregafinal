let producto =document.querySelector("produc-tos");

fetch("data.json")
.then((resp) => resp.json())
.then((data) => {
  console.log(data.results);

  data.map((item) =>{
    const content = document.createElement("div");
    content.innerHTML = `
    <h4>${producto.nombre}</h4>
    <p>${producto.precio} $</p>
    <img src="${producto.img}">
    `;
    producto.append(content);

  });
});