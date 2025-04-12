document.getElementById("magenta").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  document.getElementById("blue").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  document.getElementById("red").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  document.getElementById("yellow").addEventListener("click", function() {
    this.style.backgroundColor = "black";
  });
  
  document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
  
    if (event.key === 'a') {
      keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
      keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
      keyDiv.style.backgroundColor = 'lightblue';
    } else if (event.key === 'q') {
      createNewDiv('purple');
    } else if (event.key === 'w') {
      createNewDiv('gray');
    } else if (event.key === 'e') {
      createNewDiv('brown');
    }
  });
  
  function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('color-box');
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
  }
  