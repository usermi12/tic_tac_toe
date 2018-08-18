let tura = 0;
let p1 = 0;
let p2 = 0;
function ustaw() {
  let reset = document.getElementById("reset");
  let pierwszy = document.getElementById("wynikpierwszy");
  let drugi = document.getElementById("wynikdrugi");
  reset.innerHTML = "nowa gra?";
 
  let l = "gr1:" + p1;
  let pr = "gr2:" + p2;
  pierwszy.innerHTML = l;
  drugi.innerHTML = pr;
}
function operacja()
{
    let gra = document.getElementById("gra");
    let reset = document.getElementById("reset");
    let pierwszy = document.getElementById("wynikpierwszy");
    let drugi = document.getElementById("wynikdrugi");
    tura = 0;
    p1++;
    gra.style.display = "none";
    reset.innerHTML = "jeszcze raz?";
    let l = "gr1:" + p1;
    pierwszy.innerHTML = l;
}

function operacja2()
{
    let gra = document.getElementById("gra");
    let reset = document.getElementById("reset");
    let pierwszy = document.getElementById("wynikpierwszy");
    let drugi = document.getElementById("wynikdrugi");
    tura = 0;
    p2++;
    gra.style.display = "none";
    reset.innerHTML = "jeszcze raz?";
    let r = "gr2:" + p2;
    drugi.innerHTML = r;
}
function koniecgry() {
    let gra=document.getElementById("gra");
    let reset=document.getElementById("reset");
    let pierwszy = document.getElementById("wynikpierwszy");
    let drugi = document.getElementById("wynikdrugi");
    let licznik =1;
    for (let i=1;i<=9;i++)
    {
        let k="pole"+ i;
        document.getElementById(k); 
    }
  let text1=pole1.innerHTML;
    let text2 = pole2.innerHTML;
    let text3 = pole3.innerHTML;
    let text4 = pole4.innerHTML;
    let text5 = pole5.innerHTML;
    let text6 = pole6.innerHTML;
    let text7 = pole7.innerHTML;
    let text8 = pole8.innerHTML;
    let text9 = pole9.innerHTML;
    
//////////////////////gracz1
if (tura%9==0)
{
    tura = 0;
    gra.style.display = "none";
    reset.innerHTML = "jeszcze raz?";
}
else
{
    if (text1=='o' && text2=='o' && text3=='o')
    {
      operacja();
    }

    else if (text4 == 'o' && text5 == 'o' && text6 == 'o') {
        operacja();
    }

    else if (text7 == 'o' && text8 == 'o' && text9 == 'o') {
        operacja();
    }

    else if (text1 == 'o' && text4 == 'o' && text7 == 'o') {
        operacja();
    }

    else if (text1 == 'o' && text4 == 'o' && text7 == 'o') {
        operacja();
    }

    else if (text2 == 'o' && text5 == 'o' && text8 == 'o') {
        operacja();
    }

    else if (text3 == 'o' && text6 == 'o' && text9 == 'o') {
        operacja();
    }
  
    else if (text1=='o' && text5=='o' && text9=='o')
    {
        operacja();
    }

    else if (text3=='o' && text5=='o' && text7=='o')
    {
        operacja();
    }

    /////////////////////////////gracz2
    if (text1 == 'x' && text2 == 'x' && text3 == 'x') {
       operacja2();
    }

    else if (text4 == 'x' && text5 == 'x' && text6 == 'x') {
        operacja2();
    }

    else if (text7 == 'x' && text8 == 'x' && text9 == 'x') {
        operacja2();
    }

    else if (text1 == 'x' && text4 == 'x' && text7 == 'x') {
        operacja2();
    }

    else if (text1 == 'x' && text4 == 'x' && text7 == 'x') {
        operacja2();
    }

    else if (text2 == 'x' && text5 == 'x' && text8 == 'x') {
        operacja2();
    }

    else if (text3 == 'x' && text6 == 'x' && text9 == 'x') {
        operacja2();
    }

    else if (text1 == 'x' && text5 == 'x' && text9 == 'x')
    {
        operacja2();
    }

    else if (text3 == 'x' && text5 == 'x' && text7 == 'x') {
        operacja2();
    }
    
}
}

function reset() {
    let reset=document.getElementById("reset");
    let gra=document.getElementById("gra");
    if (reset.innerHTML=='jeszcze raz?')
    {
        reset.innerHTML='nowa gra?';
    gra.style.display="block";
    }
  for (let i = 1; i <= 9; i++) {
    let d = "pole" + i;
    let x = document.getElementById(d);
    x.style.background = "white";
    x.style.cursor = "pointer";
    x.innerHTML = "";
  }
}
function klik(id) {
  
    let x = document.getElementById(id);
  x.style.background = "lightgray";
  x.style.cursor = "default";
  if (x.innerHTML === "" && tura % 2 == 0) {
    x.innerHTML = "o";
    tura++;
      koniecgry();
  } else if (x.innerHTML === "" && tura % 2 == 1) {
    x.innerHTML = "x";
    tura++;
      koniecgry();
  }

}

function start() {
  ustaw();
}
