const pen = document.getElementsByClassName("fa-pencil")[0];
const input_pseu = document.getElementsByTagName("input")[0];
var turn_input_pseu = 0;
pen.onclick = function(){
	if(turn_input_pseu % 2 == 0){
		input_pseu.removeAttribute("disabled")
	}else{
		input_pseu.setAttribute("disabled","true");
	}
	turn_input_pseu++;
}