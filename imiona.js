


window.onload = start;

var litery = new Array(35);
litery[0] = "Aaron";
litery[1] = "Aaronek";
litery[2] = "Abachum";
litery[3] = "Abakuk";
litery[4] = "Abdiasz";
litery[5] = "Abelard";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start()
{

    var tresc_diva = "";
	
	for (i=0; i<=34; i++)
	{
        var element ="lit" + i;

		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">' + litery[i] + '</div>';
		if ((i+1) % 20 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';

 
	}
     document.getElementById("alfabet").innerHTML = tresc_diva;
     
  
}


function sprawdz(nr)
{

    var element = "lit" + nr;

        document.getElementById(element).style.backgroundColor = "red"; // backcolor
        klikniete = false;
    


  
}

