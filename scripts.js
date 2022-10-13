// Javascript for TP5 

window.onload = function() {
  
  document.querySelector("#ingredients h4").classList.add("tp");
  
  document.querySelector("#centered h1").onclick = function() {
    this.classList.toggle("black");
  }
  
  document.querySelector ("#row #ingredients").onclick =function() {
   
    this.classList.toggle("tpShow");
    
  }
  
  document.querySelector ("#row #equipment").onclick =function() {
   
    this.classList.toggle("tpShow");
    
  }
  
  document.querySelector ("#row #directions").onclick =function() {
   
    this.classList.toggle("tpShow");
    
  }
    
    
   document.querySelector("#row #ingredients ul").innerHTML += "<li> A hunger for chocolate </li>";


  
}


// end window.onload