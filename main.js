console.log("debut");
var elements = document.getElementsByClassName("grid-container");
let ligne = 1

for (let pas = 1; pas < 31; pas += 6) {


  for (let j = pas; j <= pas + 5; j++) {
    const para = document.createElement("a");
    para.innerHTML = j;
    para.href = "enigme.html?day=" + j;
    para.className = 'grid-item' + ligne + ' notextdecoration grid-item';
    elements[0].appendChild(para);
  }
  ligne++;
}



