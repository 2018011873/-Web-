var right=document.getElementById("right");
var left=document.getElementById("left");
var case3=document.getElementById("case3");
var li=document.getElementsByTagName("li");
var pictures=document.getElementById("pictures");
var prompt=document.getElementById("prompt");
var d;
var i=1;
function prompt1(){
	setInterval(function(){
	var t=parseInt(prompt.style.left)-1;
	if(t<-442.69)
		t=974;
	prompt.setAttribute("style", "left:"+t+"px");
	},10);
}
prompt1();
var sI=function(){
	d=setInterval(function(){
		li[i-1].removeAttribute("class", "active");
		++i;
		animate(pictures,{left:-1200*i},function(){
			if (i===6) {
				pictures.style.left='-1200px';
				i=1;
			}
		});
		li[(i-1)%5].setAttribute("class", "active");
	}, 3000);
}

sI();

case3.onmouseover=function(){
	left.style.opacity='0.5';
	right.style.opacity='0.5';
}

case3.onmouseleave=function(){
	left.style.opacity='0';
	right.style.opacity='0';
}

left.onclick=function(){
	clearInterval(d);
	li[i-1].removeAttribute("class", "active");
	--i;
	animate(pictures,{left:-1200*i},function(){
		if (i===0) {
			pictures.style.left='-6000px';
			i=5;
		}
	});
	li[(i+4)%5].setAttribute("class", "active");
	sI();
}

right.onclick=function(){
	clearInterval(d);
	li[i-1].removeAttribute("class", "active");
	++i;
	animate(pictures,{left:-1200*i},function(){
		if (i===6) {
			pictures.style.left='-1200px';
			i=1;
		}
	});
	li[(i-1)%5].setAttribute("class", "active");
	sI();
}

for(var j=0;j<li.length;++j){
	li[j].onclick=function(){
		clearInterval(d);
		li[i-1].removeAttribute("class", "active");
		i=parseInt(this.getAttribute("name"));
		li[i-1].setAttribute("class", "active");
		animate(pictures,{left:-1200*i});
		sI();
	}
}