
window.addEventListener("load", setup);

function setup() {

	window.addEventListener('mousemove', mousemove);

	}

	
	
	function mousemove(event){

let date = document.querySelector(".dates");

		date.style.left = event.clientX+"px";
		date.style.top = event.clientY+"px";

}



function masquer(id){
	
	let bebe = document.getElementsByClassName('enfant');
	let n = document.getElementById(id).style.display;
	let i;
	console.log(bebe);
	
	for (i=0; i<bebe.length; i++){
		bebe[i].style.display="none";
		}
	if (n == 'none' || n=='')
  {
       document.getElementById(id).style.display = 'block';
  }
  else
  {
       document.getElementById(id).style.display = 'none';
  }
}





