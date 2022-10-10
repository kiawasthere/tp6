// Javascript for TP5 

window.onload = function() {
  
  document.querySelector("#ingredientsh1").classList.add("tp");
  
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
  
}


// end window.onload