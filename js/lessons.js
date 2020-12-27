function trad(){
	fr = document.getElementById("fr").value;
	var trad = "", letter = "";
	for(var i = 0; i < fr.length; i++){
		switch(fr[i].toLowerCase()){
			case 'a':
				letter = 'i';
				break;
			case 'b':
				letter = 'r';
				break;
			case 'c':
				letter = 't';
				break;
			case 'd':
				letter = 'j';
				break;
			case 'e':
				letter = 'o';
				break;
			case 'f':
				letter = 'p';
				break;
			case 'g':
				letter = 'b';
				break;
			case 'h':
				letter = 'ch';
				break;
			case 'i':
				letter = 'u';
				break;
			case 'j':
				letter = 'z';
				break;
			case 'k':
				letter = 's';
				break;
			case 'l':
				letter = 'f';
				break;
			case 'm':
				letter = 'x';
				break;
			case 'n':
				letter = 'g';
				break;
			case 'o':
				letter = 'a';
				break;
			case 'p':
				letter = 'k';
				break;
			case 'q':
				letter = 'n';
				break;
			case 'r':
				letter = 'd';
				break;
			case 's':
				letter = 'v';
				break;
			case 't':
				letter = 'l';
				break;
			case 'u':
				letter = 'e';
				break;
			case 'v':
				letter = 'af';
				break;
			case 'w':
				letter = 'ol';
				break;
			case 'x':
				letter = 'az';
				break;
			case 'y':
				letter = 'ug';
				break;
			case 'z':
				letter = 'm';
				break;
			case ' ':
				letter = ' ';
				break;	
		}
		trad+=letter;
	}
	document.getElementById("xy").value = trad;
}