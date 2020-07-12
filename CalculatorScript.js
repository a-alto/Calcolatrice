var c= "";
function add() {
c='+';
document.getElementById("operazione").value = c;
}
function sott() {
c='-';
document.getElementById("operazione").value = c;
}
function molt() {
c='*';
document.getElementById("operazione").value = c;
}
function divi() {
c='/';
document.getElementById("operazione").value = c;
}
function opera() {
var a= parseInt(document.getElementById("primo").value);
var b= parseInt(document.getElementById("secondo").value);
var c=document.getElementById("operazione").value;
var d=document.getElementById("risultato").value;
if (a && b) {
if (c=='+') {
d=a+b;
}
else if (c=='-') {
d=a-b;
}
else if (c=='*') {
d=a*b;
}
else if (c=='/') {
d=a/b;
}
else {
alert('Fornire un operazione');
d = 0;
}
document.getElementById("risultato").value = d;

}
else {
alert('Inserire i due fattori');
}
} 
