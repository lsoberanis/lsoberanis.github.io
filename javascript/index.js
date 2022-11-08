/*var elements = document.getElementsByClassName("container");

for (i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

var string;

function imgHover(img){
    let imgwidth = img.clientWidth;
    img.style.width = (imgwidth * 1.1) + "px";
    console.log(img.style.width);
}

function imgHover2(img){
    let imgwidth = img.clientWidth;
    img.style.width = (imgwidth * 0.9) + "px";
    console.log(img.style.width);
}

document.querySelector('img.hover').addEventListener('click', (event)=>{
    window.alert("you found the rat.");
    console.log(document.querySelector('img.hover'));
});

document.querySelector('img.hover').addEventListener('mouseenter', (event)=>{
    string = 'img.hover';
    const img = document.querySelector(string);
    imgHover(img);
});
document.querySelector('img.hover').addEventListener('mouseout', (event)=>{
    string = 'img.hover';
    const img = document.querySelector(string);
    imgHover2(img);
});


document.querySelector('img.me').addEventListener('mouseenter', (event)=>{
    string = 'img.me';
    const img = document.querySelector(string);    
    imgHover(img);
});
document.querySelector('img.me').addEventListener('mouseout', (event)=>{
    string = 'img.me';
    const img = document.querySelector(string);    
    imgHover2(img);
});


const btn = document.getElementById('btn');
const all_list = document.querySelectorAll('.title, .list, .bio, .bio-container');

function removestyle(){
    btn.removeAttribute('class');
    for (const element of all_list){
        element.removeAttribute('class');
    }
    btn.innerHTML = "why did you take away my style :(";
}*/

function dropEnter() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function dropExit() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }