function Stat(){
	var money = Math.floor(Math.random()*11);
	var smarts = Math.floor(Math.random()*11);
	var muscles = Math.floor(Math.random()*11);

	document.getElementById("money").innerHTML=money;
	document.getElementById("smarts").innerHTML=smarts;
	document.getElementById("muscles").innerHTML=muscles;

	document.getElementById("scene_button").style.display = "block";
}

function Scene () {
	var scene = Math.trunc((Math.random()*10)+1);
	var money = Number(document.getElementById("money").innerHTML);
	var smarts = Number(document.getElementById("smarts").innerHTML);
	var muscles = Number(document.getElementById("muscles").innerHTML);

	switch(scene) {
	    case 1:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 10 || smarts >= 10 || muscles >= 10) {
	    		document.getElementById("ending").innerHTML = "what the heck you're too powerful we have to nerf you ,,ԾㅂԾ,," + " " +
"you died! (bad ending)";
}
	    	break;

	    case 2:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 7 || smarts >= 7 || muscles >= 7) {
	    		document.getElementById("result").innerHTML = "you're kind of.. a beta. it's okay i love you anyway (´▽`ʃ♡ƪ) but not that much :3" + " " +
"it's.. fine! (coping ending)";
	    	} 
	    	break;

	    case 3:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 3 || smarts >= 3 || muscles >= 3) {
	    		document.getElementById("ending").innerHTML = "...（*゜ー゜*）" + " " +
"you can always try again in the next life!" + "(try again next time ending)";
	    	} 
	    	break;

	    case 4:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 10 || smarts >= 3 || muscles >= 3) {
	    		document.getElementById("ending").innerHTML = "you're rich! but you're not smart and you can't protect yourself, you were one of the first to get eaten.. (⊙ˍ⊙)" + " " +
"eat the rich! (eat the rich ending)";
	 	}
	    	break;

	    case 5:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 3 || smarts >= 7 || muscles >= 10) {
	    		document.getElementById("ending").innerHTML = "wowowow you're so cool!! i like you ☆⌒(*＾-゜)v" + " " +
"you are an alpha wolf! (best ending)";
	    	}
	    	break;

	    case 6:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 3 || smarts >= 10 || muscles >= 7) {
	    		document.getElementById("ending").innerHTML = "wowowow you're so cool!! i like you ☆⌒(*＾-゜)v" + " " +
"you are an alpha wolf! (best ending)";
	    	}

	    	break;
	    case 7:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 7 || smarts >= 3 || muscles >= 10) {
	    		document.getElementById("ending").innerHTML = "wowowow you're so cool!! i like you ☆⌒(*＾-゜)v" + " " +
"you are an alpha wolf! (best ending)";
	    	} 
	    	break;

	    case 8:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 7 || smarts >= 10 || muscles >= 3) {
	    		document.getElementById("ending").innerHTML = "wowowow you're so cool!! i like you ☆⌒(*＾-゜)v" + " " +
"you are an alpha wolf! (best ending)";
	    	} 
	    	break;

	    case 9:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 10 || smarts >= 7 || muscles >= 3) {
	    		document.getElementById("ending").innerHTML = "wowowow you're so cool!! i like you ☆⌒(*＾-゜)v" + " " +
"you are an alpha wolf! (best ending)";
	    	}
	    	break;

	    case 10:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 10 || smarts >= 3 || muscles >= 3) {
	    		document.getElementById("ending").innerHTML = "wowowow you're so cool!! i like you ☆⌒(*＾-゜)v" + " " +
"you are an alpha wolf! (best ending)";
	    	}
	    	break;

	    case 11:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 3 || smarts >= 10 || muscles >= 3) {
	    		document.getElementById("ending").innerHTML = "it's okay! at least you're smart :>" + " " +
"work hard! (you'll probably be fine ending)";
	    	} 
		break;

	    case 12:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 3 || smarts >= 3 || muscles >= 10) {
	    		document.getElementById("ending").innerHTML = "it's okay! at least you're strong :>" + " " +
"work hard! (you'll probably be fine ending)";
	    	} 
	    	break;

	    case 13:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >= 3 || smarts >= 7 || muscles >=7) {
	    		document.getElementById("ending").innerHTML = "you'll do good in life! i believe in you ¯\_(ツ)_/¯" + " " +
"you're okay! (boring ending)";
	    	}
	    	break;

	    case 14:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
	    	if (money >=7 || smarts >= 3 || muscles >=7) {
	    		document.getElementById("ending").innerHTML = "you'll do good in life! i believe in you ¯\_(ツ)_/¯" + " " +
"you're okay! (boring ending)";
	    	}
	    	break;

	    case 15:
	    	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 7 || smarts >= 7 || muscles >= 3) {
	    	document.getElementById("ending").innerHTML = "you'll do good in life! i believe in you ¯\_(ツ)_/¯" + " " +
"you're okay! (boring ending)";
		}
	    	break;

	    case 16:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 7 || smarts >= 7 || muscles >= 10) {
	    	document.getElementById("ending").innerHTML = "you'll do good in life! i believe in you ¯\_(ツ)_/¯" + " " +
"you're okay! (boring ending)";
		}

	    case 17:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 10 || smarts >= 7 || muscles >= 7) {
	    	document.getElementById("ending").innerHTML = "you'll do good in life! i believe in you ¯\_(ツ)_/¯" + " " +
"you're okay! (boring ending)";
		}

	    case 18:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 7 || smarts >= 10 || muscles >= 7) {
	    	document.getElementById("ending").innerHTML = "you'll do good in life! i believe in you ¯\_(ツ)_/¯" + " " +
"you're okay! (boring ending)";
		}	

	    case 19:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 3 || smarts >= 10 || muscles >= 10) {
	    	document.getElementById("ending").innerHTML = "what the heck! you're too powerf- wait you're fine! for now. ಠಿ_ಠ" + " " +
"watch yourself! (thin ice ending)";
		}

	    case 20:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 10 || smarts >= 10 || muscles >= 3) {
	    	document.getElementById("ending").innerHTML = "what the heck! you're too powerf- wait you're fine! for now. ಠಿ_ಠ" + " " +
"watch yourself! (thin ice ending)";
		}

	    case 21:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 3 || smarts >= 3 || muscles >= 7) {
	    	document.getElementById("ending").innerHTML = "wow.. um. it's definitely- LOOK THERE'S SOMETHING COOL BEHIND YOU" + " " +
". (abandoned ending)";
		}

	    case 22:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 3 || smarts >= 7 || muscles >= 10) {
	    	document.getElementById("ending").innerHTML = "wow.. um. it's definitely- LOOK THERE'S SOMETHING COOL BEHIND YOU" + " " +
". (abandoned ending)";
		}

	    case 23:

	document.getElementById("result").innerHTML = "Let's see how your life goes!";
		if (money >= 7 || smarts >= 3 || muscles >=3) {
	    	document.getElementById("ending").innerHTML = "wow.. um. it's definitely- LOOK THERE'S SOMETHING COOL BEHIND YOU" + " " +
". (abandoned ending)";
		}

	} 
}