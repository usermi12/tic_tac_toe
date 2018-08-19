let tura = 0;
let p1 = 0;
let p2 = 0;

function ustaw(a,b,c) {

  a.innerHTML = "nowa gra?";
  let l = "gr1:" + p1;
  let pr = "gr2:" + p2;
  b.innerHTML = l;
  c.innerHTML = pr;
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
function koniecgry(a,b,c,d) {
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

    if ((text1 == "o" && text2 == "o" && text3 == "o") || (text4 == "o" && text5 == "o" && text6 == "o") || (text7 == "o" && text8 == "o" && text9 == "o") || (text1 == "o" && text4 == "o" && text7 == "o") || (text2 == "o" && text5 == "o" && text8 == "o") || (text3 == "o" && text6 == "o" && text9 == "o") || (text1 == "o" && text5 == "o" && text9 == "o") || (text3 == "o" && text5 == "o" && text7 == "o")) {
        operacja();
    }


    if ((text1 == "x" && text2 == "x" && text3 == "x") || (text4 == "x" && text5 == "x" && text6 == "x") || (text7 == "x" && text8 == "x" && text9 == "x") || (text1 == "x" && text4 == "x" && text7 == "x") || (text2 == "x" && text5 == "x" && text8 == "x") || (text3 == "x" && text6 == "x" && text9 == "x") || (text1 == "x" && text5 == "x" && text9 == "x") || (text3 == "x" && text5 == "x" && text7 == "x")) {
        operacja2();
    }
    
}


function Reset() {
   
    tura=0;
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
    let gra = document.getElementById("gra");
    let reset = document.getElementById("reset");
    let pierwszy = document.getElementById("wynikpierwszy");
    let drugi = document.getElementById("wynikdrugi");
    let x = document.getElementById(id);
  x.style.background = "lightgray";
  x.style.cursor = "default";
  if (x.innerHTML === "" && tura % 2 == 0) {
    x.innerHTML = "o";
    tura++;
      koniecgry(gra,reset,pierwszy,drugi);
  } else if (x.innerHTML === "" && tura % 2 == 1) {
    x.innerHTML = "x";
    tura++;
      koniecgry(gra, reset, pierwszy, drugi);
  }

}

function start() {
    let reset = document.getElementById("reset");
    let pierwszy = document.getElementById("wynikpierwszy");
    let drugi = document.getElementById("wynikdrugi");
  ustaw(reset,pierwszy,drugi);
}
