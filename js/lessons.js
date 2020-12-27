function trad(){
	const fr = document.getElementById("fr").value;
	var trad = "", letter = "";
	var alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var xyl = ['i','r','t','j','o','p','b','ch','u','z','s','f','x','g','a','k','n','d','v','l','e','af','ol','az','ug','m'];
	for(var i = 0; i < fr.length; i++){
		var index = alph.indexOf(fr[i].toLowerCase());
		if (index == -1) {
			trad+=fr[i];
		}else{
			trad+=xyl[index];
		}
	}
	document.getElementById("xy").value = trad;
}