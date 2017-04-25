function main(){
	var list = randomNumber(10)
	var list_txt = listToString(list)
	var testDiv = document.getElementById("test")
	var a = document.createElement("p")
	a.appendChild(document.createTextNode("产生的数组为："+list_txt))
	testDiv.appendChild(a)
	//
	//排序开始
	var times = 0
	for(var i=0;i<list.length;i++){
		for(var j=i;j<list.length;j++){
			if(list[j]<list[i]){
				times++
				var num1 = list[i]
				list[i] = list[j]
				list[j] = num1
				saveChange(times,list)
			}
		}
	}
	
	//调用延时显示函数
	delayShow();
}
var changeList = new Array();//全局变量用来存放改变后的元素节点

function saveChange(n,lis){
	var a = document.createElement("p")
	var txt1 = "第 "+n+" 次变化后："
	a.appendChild(document.createTextNode(txt1))
	//tmp.appendChild(a)
	
	var b = document.createElement("p")
	var txt2 = listToString(lis)
	b.appendChild(document.createTextNode(txt2))
	//tmp.appendChild(b)
	
	changeList[changeList.length] = a
	changeList[changeList.length] = b
}

function delayShow(){
	var tmp = document.getElementById("test")
	if(changeList.length != 0){
		tmp.appendChild(changeList.shift())
		tmp.appendChild(changeList.shift())
		setTimeout('delayShow()',1000)
	}
}

function listToString(li){
	var tmp = ""
	for(var i=0;i<li.length;i++){
		tmp = tmp + " "+li[i]
	}
	return tmp
}

function preShow(){
	var tmp = document.getElementById("test")
	var main_title = document.createElement("p")
	var main_title_txt = document.createTextNode("即将演示冒泡法过程,升序排列")
	
	main_title.appendChild(main_title_txt)
	tmp.appendChild(main_title)
	
	var temp = setTimeout("main()",2000)
}

//产生len个0~99的随机数
function randomNumber(len){
	var tmp = new Array(len);
	for(var i=0;i<len;i++){
		tmp[i] = Math.ceil(Math.random()*99)
	}
	return tmp
}

function addLoadEvent(fun){
	var tmp = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = function(){
			fun();
		}
	}else{
		window.onload = function(){
			tmp();
			fun();
		}
	}
}

addLoadEvent(preShow);