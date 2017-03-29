  //var pokemon1=document.getElementById("pokemon1");
var pokemon={
  this.nombre = document.getElementById("pokemon").value;
  this.color = document.getElementById("color").value;
  this.puntos = document.getElementById("puntosAtaque").value;
};

function agregarLista(){
  var caja = document.createElement("option");
  //var resultado = caja.innerHTML += pokemon;
var resultado = document.createTextNode(pokemon);
    resultado.appendChild("pokemon1");
};

function Pokemon(nombre,color,puntosAtaque){
  this.nombre=nombre;
  this.color=color;
  this.vida=100;
  this.puntosAtaque=puntosAtaque;
};

function guardar(){


};

this.pelear=function(pokemonObjeto){
  pokemonObjeto.vida=pokemonObjeto.vida - this.puntosAtaque;
  };
