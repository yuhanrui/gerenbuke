var imgs =["011.jpg","012.jpg","013.jpg","014.jpg","015.jpg","016.jpg","017.jpg","018.jpg","019.jpg"];
var xa = 0;
var xb = 1;
var xc = 2;
var xd = 3;
var xe = 4;
var xf = 5;
var xg = 6;
var xh = 7;
var xi = 8;
function timea(){
    xa++;
    if(xa==9){
    	xa=0;
    }
    document.getElementById("a46").style="background-image:url(images/"+imgs[xa];
}
function timeb(){
    xb++;
    if(xb==9){
    	xb=0;
    }
    document.getElementById("a47").style="background-image:url(images/"+imgs[xb];
}
function timec(){
    xc++;
    if(xc==9){
    	xc=0;
    }
    document.getElementById("a48").style="background-image:url(images/"+imgs[xc];
}
function timed(){
    xd++;
    if(xd==9){
    	xd=0;
    }
    document.getElementById("a49").style="background-image:url(images/"+imgs[xd];
}
function timee(){
    xe++;
    if(xe==9){
    	xe=0;
    }
    document.getElementById("a50").style="background-image:url(images/"+imgs[xe];
}
function timef(){
    xf++;
    if(xf==9){
    	xf=0;
    }
    document.getElementById("a51").style="background-image:url(images/"+imgs[xf];
}
function timeg(){
    xg++;
    if(xg==9){
    	xg=0;
    }
    document.getElementById("a52").style="background-image:url(images/"+imgs[xg];
}
function timeh(){
    xh++;
    if(xh==9){
    	xh=0;
    }
    document.getElementById("a53").style="background-image:url(images/"+imgs[xh];
}
function timei(){
    xi++;
    if(xi==9){
    	xi=0;
    }
    document.getElementById("a54").style="background-image:url(images/"+imgs[xi];
}
setInterval("timea(),timeb(),timec(),timed(),timee(),timef(),timeg(),timeh(),timei()",2000);