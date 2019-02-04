let a = document.getElementById("output");

function click(e){
	let n = e.innerHTML;
	a.value += parseInt(n);
}
