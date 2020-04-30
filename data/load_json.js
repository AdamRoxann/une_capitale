var myRequest = new Request("./json/dinner.json");

fetch(myRequest)
  .then(function(resp){
      return resp.json();
  })
  .then(function(data){
    // console.log(data);
     document.getElementById("json").innerHTML = `<img style="width: 200px; class="square" src="${data[0].menu_image}">`
     // `<h1 style="color: white;">Hello  with ${data[1].name}</h1> `;
  });