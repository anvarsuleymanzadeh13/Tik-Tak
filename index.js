function bashla(){
	document.getElementById('bashla').style.display = "none";
	document.getElementsByTagName('table')[0].style.display = "block";
	document.getElementsByTagName('table')[0].style.margin = "100px auto";
	document.getElementsByTagName('input')[0].style.display = "none";
	document.getElementsByTagName('input')[1].style.display = "none";
	document.getElementById('input1').style.display = "block";
	document.getElementById('input2').style.display = "block";
	document.getElementsByClassName('elan')[0].style.display = "block";
	document.getElementsByClassName('elan')[0].style.margin = "50px auto";


	var g = document.getElementsByTagName('input')[0].value;
	var h = document.getElementsByTagName('input')[1].value;

	if(g!=""){
		document.getElementById('input1').innerHTML = g;
	}
	else{
		document.getElementById('input1').innerHTML = "User 1";
	}

	if(h!=""){
		document.getElementById('input2').innerHTML = h;
	}
	else{
		document.getElementById('input2').innerHTML = "User 2";
	}
}

var arr=[];
var arrst=[];
	
function karona() {

	 var b = "";

	 for (var i = 1; i <=3; i++) {

		b += "<tr>";
		   
	   	arr[i-1]=[];
		arrst[i-1]=[];
		   
	   	for (var j = 1; j <=3; j++) {

	   		arr[i-1][j-1]=[];
			arrst[i-1][j-1]=[];
			   
	   		b += `<td id="id${i}${j}" onclick="yaz(this,id,${i-1},${j-1})"></td>`;
		 }

		b += "</tr>";
	 }

	 document.getElementsByTagName('table')[0].innerHTML = b;
}

karona();

var n = true;
var say = 0;

function yaz(a,id,x,y){
	if (n==true && a.innerHTML!="O") {

		a.innerHTML = "X";
		say++;
		arr[x][y]="X";
		arrst[y][x]="X";
		
		n=false;

	}else if(n==false && a.innerHTML!="X"){

		a.innerHTML = "O";
		say++;
		arr[x][y]="O";
		arrst[y][x]="O";
		
		n=true;
	}
	setTimeout(()=>{
		yoxla();
	},10);
	reng(a);
}	

function reng(a){
	if (a.innerHTML=="X") {
			 a.style.backgroundColor = "blue";
		}else if(a.innerHTML=="O"){
			 a.style.backgroundColor = "orangered";
		}else{
			a.style.backgroundColor = "white";
		}
}

	document.getElementsByClassName('xal1')[0].innerHTML = 0;
 	document.getElementsByClassName('xal2')[0].innerHTML = 0;

function tezele(){

	say = 0; 
	var td = document.getElementsByTagName('td');

	for(var f=0;f<9;f++){

			 document.getElementsByTagName('td')[f].innerHTML = "";
			 reng(td[f]);

	}
	for(i=0;i<3;i++){
		
		for(j=0;j<3;j++){

			arr[i][j] = "";
			arrst[i][j] = "";

		}
	}
}

function yoxla(){
	for (var i = 0; i < 3; i++) {

	   	 var arrs = arr[i];
		 var arrstn = arrst[i];
			
		 if (arrs.every(check1) || arrstn.every(check1)) {

			document.getElementsByClassName('xal1')[0].innerHTML++;
			var m = document.getElementById('input1').innerHTML;
		 	alert(m + " qazandı");
		 	tezele();
		}
		 else if(arrs.every(check2) || arrstn.every(check2)){

			document.getElementsByClassName('xal2')[0].innerHTML++;
			var n = document.getElementById('input2').innerHTML;
			alert(n + " qazandı");
		 	tezele();
		}
		else if((arr[0][2]=="X" && arr[1][1]=="X" && arr[2][0]=="X") || (arr[0][0]=="X" && arr[1][1]=="X" && arr[2][2]=="X")){
			
			document.getElementsByClassName('xal1')[0].innerHTML++;
			var m = document.getElementById('input1').innerHTML;
			alert(m + " qazandi");
			tezele();
		}
		else if((arr[0][2]=="O" && arr[1][1]=="O" && arr[2][0]=="O") || (arr[0][0]=="O" && arr[1][1]=="O" && arr[2][2]=="O")){

			document.getElementsByClassName('xal2')[0].innerHTML++;
			var n = document.getElementById('input2').innerHTML;
			alert(n + " qazandi");
			tezele();
		}
   	}
	
	function check1(ab) {
		return ab == "X";
	}
	function check2(ab) {
		return ab == "O";
	}

	if(document.getElementsByClassName('xal1')[0].innerHTML==3){

		var m = document.getElementById('input1').innerHTML;
        setTimeout(() => {
			alert(m + " qazandı və oyun bitdi");
        	location.reload();
		},10);
    }
    else if(document.getElementsByClassName('xal2')[0].innerHTML==3){

		var n =document.getElementById('input2').innerHTML;
        setTimeout(() => {
			alert(n + " qazandı və oyun bitdi");
        	location.reload();
		},10);
    }
	
	function qazanmiyan() {

		var artan = 0;

		for(var d = 0; d < 3; d++){

			for(var e = 0; e < 3; e++){

				if(arr[d][e] != ""){

					artan++;
				}
			}
		}
		if(artan == 9){

			alert("Qazanan olmadi");
			tezele();

		}
	}

	qazanmiyan();
}

