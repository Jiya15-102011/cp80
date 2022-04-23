c=[];
function a(){
    var b2=[];
    for(var j1=1;j1<=4;j1++){
var j=document.getElementById("i"+j1).value;
 console.log(j);
c.push(j);
    }
console.log(c);

var l=c.length;
console.log(l);
for(var k=0;k<l;k++){
    b2.push("<h4>Name:"+c[k]+"</h4>");
    console.log(b2);
}
document.getElementById("Answer").innerHTML=b2;
var r=b2.join(" ");
console.log(r);
document.getElementById("p").innerHTML=r;
document.getElementById("a1").style.display="none";
document.getElementById("b1").style.display="inline-block";

}
function b(){
    c.sort();
    console.log(c);
    var b3=[];
    var li=c.length;
    console.log(li);
    for(var k=0;k<li;k++){
        b3.push("<h4>Name:"+c[k]+"</h4>");
        console.log(b3);
    }
    
    var r1=b3.join(" ");
console.log(r1);
document.getElementById("p").innerHTML=r1;
}