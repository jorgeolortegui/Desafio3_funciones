function pintar(color = '#008000') {
    ele.style.backgroundColor = color;
  }
  
  const ele = document.querySelector("#ele1");
  
  pintar();
  
  ele.addEventListener("click", () => pintar('#e51d2e'));
             