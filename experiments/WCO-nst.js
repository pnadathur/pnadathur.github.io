//test parameters -- 27 possible configs -- each participant sees 5 at random
var scenes = ['tbus', 'tact', 'tman', 'trep', 'temc', 'tchr', 'tflt', 'tdet', 'ttch'];
var foc = ['pro', 'none', 'np'];
var fillers = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'];

//pick random item from set
function random(a, b) {
    if (typeof b == "undefined") {
	a = a || 2;
	return Math.floor(Math.random()*a);
    } else {
	return Math.floor(Math.random()*(b-a+1)) + a;
    }
}


Array.prototype.random = function() {return this[random(this.length)];}

//shuffle an array
function shuffle(v) { //non-destructive
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}

var preTest = shuffle(scenes);


var addTrials = fillers.concat(preTest.slice(0,5));
var questions = shuffle(addTrials);

function Capitalize(string) {
    var firstLetter = string.substring(0,1);
    firstLetter = firstLetter.toUpperCase();
    var rest = string.substring(1, string.length);
    return firstLetter.concat(rest);
}

function psQs(string) {
    return Capitalize(string).concat('.');
}


//build test text 
function trialText(txt, wco1, wco2, focus) {
    var displayText = '<br><br><br>';
    if (focus == "none") {
	displayText = displayText + Capitalize(txt) + '  '+ Capitalize(wco1) + " " + wco2 + '.<br><br><br><br><br>';
    } else if (focus == "pro") {
	displayText = displayText + Capitalize(txt) + '  '+ Capitalize(wco1) + " only " + wco2 +  '.<br><br><br><br><br>';
    } else if (focus == "np") {
	displayText = displayText + Capitalize(txt) + '  Only '+ wco1 + " " + wco2 +  '<br><br><br><br><br>';
    } else {
	displayText = displayText + txt + question + focus;
    }
    return displayText;
}


function qText(question) {
    var qdisplay = "<i> Based on the paragraph above, select the best answer to the question in bold.</i><br><br>" + "<strong>" + Capitalize(question) + "?</strong><br><br><br>";
    return qdisplay;
}


//text for trials
var busT = "a number of local businesses took a serious interest in this year's political campaigns, with some businessmen even running for office.";
var busSFirst = "one executive asked who";
var busSSecond = "his business partners had endorsed for mayor";
var busQ = "who could the executive have been asking about";
var busA = "a businessman who was endorsed by his own partners in the mayoral race";
var busB = "a candidate who the executive's partners had endorsed";

var actT = "celebrity agents have to manage a lot of information about the actors and actresses they represent as well as other stars they interact with.  Sometimes they make mistakes and unfortunate rumors get started, which upsets people.";
var actSFirst = "the sitcom  actress wanted to know who";
var actSSecond = "her agent had offended";
var actQ = "who could the actress be wondering about";
var actA = "another actress who was offended by her own agent";
var actB = "a celebrity who the sitcom actress's agent had offended";

var manT = "waitstaff at Mickey's diner get a bonus for good service if they are tipped by the most customers, but it is sometimes complicated to figure out who should get the bonus at the end of the evening.";
var manSFirst = "the manager asked who";
var manSSecond = "her friends had tipped";
var manQ = "who could the manager have been asking about";
var manA = "a waitress who was tipped by her own friends";
var manB = "a member of the waitstaff who was tipped by the manager's friends";

var repT = "the hiring committee has been reviewing candidates for an editorial assistant position.  A number of the candidates already work at different jobs on the paper, and some of the letters of recommendation come from people the hiring committee are answerable to."
var repSFirst = "a reporter asked who";
var repSSecond = "his employer expressed reservations about";
var repQ = "who could the reporter be asking about";
var repA = "a job candidate whose current employer was uncertain about him";
var repB = "a candidate who the reporter's employer was uncertain about";

var emcT = "heckling at a comedy club is a pretty bold move; you have to be funnier (or smarter) than the comedian if you don't want everyone in the audience to hate you.  Still, a lot of people do it.";
var emcSFirst = "the emcee asked who";
var emcSSecond =  "his friends cheered on for heckling";
var emcQ = "who could the emcee have asked about";
var emcA = "a heckler whose friends supported his interruptions";
var emcB = "a heckler who was supported by the emcee's friends";

var chrT = "in Cameron's high school, social studies classes have been covering the middle east in the last couple of weeks.  Because of recent news, school administrators have been worried about the teachers expressing political opinions.";
var chrSFirst = "the history chair asked who";
var chrSSecond = "her students called biased";
var chrQ = "who could the history chair have asked about";
var chrA = "a teacher whose own students accused her of bias";
var chrB = "a teacher accused of bias by the chair's students";

var fltT = "if cabin pressure drops during a flight, and oxygen masks are needed, passengers are told to put on their own mask before paying attention to others.  A recent safety drill showed that people sometimes get confused about whether to help others.";
var fltSFirst = "the flight attendant wanted to know who";
var fltSSecond = "his companions ignored in the drill";
var fltQ = "who could the attendant be worrying about";
var fltA = "a passenger whose traveling companions didn't help him";
var fltB = "a passenger who was not helped by other flight attendants";

var detT = "the city police department has been getting a lot of reports of excessive force lately.  Some officers have been asked by internal affairs to keep an eye on others in their precincts.";
var detSFirst = "the detective wanted to know who";
var detSSecond = "his partner accused of excessive force";
var detQ = "who could the detective be trying to find out about";
var detA = "a policeman who was accused by his own partner";
var detB = "a policeman who was accused by the detective's partner";

var tchT = "in Jordan's high school, the kids get to rank choices for the classes they want to take.  The students often get recommendations about teachers from their older siblings or the older siblings of friends.";
var tchSFirst = "Jordan asked who";
var tchSSecond = "her sister forgot to warn about the bad English teacher";
var tchQ = "who could Jordan have been asking about";
var tchA = "a girl whose sister forgot to tell her about the bad teacher";
var tchB = "which student Jordan's sister forgot to warn";

//build filler text
function fillerText(txt) {
    var displayText = '<br><br><br>' + Capitalize(txt) + '<br><br><br><br><br>';
    return displayText;
}

function fillerQText(question, ansa, ansb) {
    var qdisplay = '<strong>' + Capitalize(question) + "?</strong><br><br><br>" + "<strong>A:</strong> " + Capitalize(ansa) + "<br><br><strong>B:</strong> " + Capitalize(ansb) + "<br><br><strong>C:</strong> Either A or B";
    return qdisplay;
}

//filler text
var f1T = "Jane attended the high school graduation of a neighbor's son.  The speaker was a former mayor of the town, who went on and on about the famous graduates of the school.  Jane later expressed amazement that the audience had not walked out on him.";
var f1Q = "who was Jane amazed people had not walked out on";
var f1A = "her neighbor's son";
var f1B = "the former mayor";

var f2T = "Before the football game, some fans held a tailgate party.  One man at the party consumed more beer than he should have. A security officer at the game noticed and told the man that he would have to leave.";
var f2Q = "who did the officer think would have to leave";
var f2A = "the officer himself";
var f2B = "the man who had too much to drink";

var f3T = "The coach decided that the team needed a new strategy. Opposing teams were having too much success anticipating offensive plays and breaking down the defense.  The quarterback should have plays that would take advantage of his versatility.";
var f3Q = "whose versality should be taken advantage of";
var f3A = "the team's coach";
var f3B = "the team's quarterback";

var f4T = "The governor worried that the legislature would never pass the budget.  The leader of the opposition party had made demands that were politically untenable.  The governor told a reporter that the demands he had made were strictly for the benefit of the press.";
var f4Q = "whose demands were for the benefit of the press";
var f4A = "the opposition party leader";
var f4B = "the governor";

var f5T = "The conductor thought the string section didn't sound quite right.  One of the violins wasn't perfectly in tune. The concertmaster wondered why the conductor looked like he was upset.";
var f5Q = "who looked like he was upset";
var f5A = "the conductor";
var f5B = "the concertmaster";

var f6T = "A news anchor for a major TV network announced his retirement from the daily evening broadcast.  Speculation as to who the successor would be began immediately among media watchers.  A major newspaper's media critic speculated whether he stepped down voluntarily or was pushed.";
var f6Q = "who might have stepped down involuntarily";
var f6A = "the news anchor";
var f6B = "the media critic";

var f7T = "The therapist was dissatisfied with the patient's progress. The treatment was now in its third year, but the patient still had not opened up enough.  The therapist asked a colleague for a way to get the patient to reveal more to him.";
var f7Q = "who did the therapist want the patient to reveal more to";
var f7A = "the therapist himself";
var f7B = "the therapist's colleague";

var f8T = "A couple was discussing the upcoming election.  The wife was angry about the economy and said all incumbents should be thrown out of office.  The husband believed the problem was due to the previous president's policies and said they couldn't do anything about that.";
var f8Q = "who couldn't do anything about the previous policies";
var f8A = "the couple";
var f8B = "the incumbents";

var f9T = "The bartender worried that one customer might be under age.  He suspected that the young woman's driver's license belonged to someone else. Another customer was surprised to hear him ask what city she was born in.";
var f9Q = "who did the bartender ask about her place of birth";
var f9A = "the young woman with the questionable driver's license";
var f9B = "the other customer";

var f10T = "The new chef was having a very hard evening.  One fussy man had sent back his appetizer and a woman had complained that the soup was cold.  Nobody realized how hard he was working to make a good impression on everyone.";
var f10Q = "who was trying to make a good impression";
var f10A = "the chef";
var f10B = "the man who sent back the appetizer";


var $j = jQuery.noConflict();


//set counter to number of questions
var numberOfQuestions = questions.length;

function showSlide(id) {
    $j(".slide").hide();
    $j("#"+id).show();
}

//validate a radio button
function valButton(btn) {
    var cnt = -1;
    for (var i=btn.length-1; i > -1; i--) {
	if (btn[i].checked) {
	    cnt = i;
	    i = -1;
	}
    }
    if (cnt > -1) {
	return btn[cnt].value;
    } else {
	return null;
    }
}


$j(document).ready(function() {
    
    showSlide("consent");
   // $j(".numquestions").html(numberOfQuestions);
   // $j("#totaltime").html(Math.ceil(numberOfQuestions/2));
    $j("#consent #mustaccept").hide();
    return false;
});

//experiment event
var experiment = {
    data: {},
    intro: function () {
	if (turk.previewMode) {
	    $j("#consent #mustaccept").show();
	} else {
	    showSlide("intro");
	    $j(".numquestions").html(numberOfQuestions);
	    $j("#totaltime").html(Math.ceil(2*(numberOfQuestions/3)));
	    $j("#intro #mustaccept").hide();
	}
	return false;
    },

    instr: function () {
	if (turk.previewMode) {
	    $j("#intro #mustaccept").show();
	} else {
	    showSlide("instr");
	}
	return false;
    },
    
  
    begin: function () {
	showSlide("stage");
	experiment.next(1);
	return false;
    },

    next: function(num) {
	if (num > numberOfQuestions) {//ask for language & submit data
	    showSlide("language");
	    $j("#lgerror").hide();
	    $j("#lgbox").keypress(function(e){//capture return so exp doesn't restart
		if (e.which == 13) {
		    return false;
		}
	    });
	    $j("#lgsubmit").click(function() {
		var lang = document.getElementById("lgbox").value;
		//var point = document.getElementById("pointbox").value;
		//var comments = document.getElementById("commentbox").value;
		if (lang.length >= 3) {
		    experiment.data.language = lang;
		    //experiment.data.point = point;
		    //experiment.data.comments = comments;
		    showSlide("finished");
		    setTimeout(function() {
			turk.submit(experiment.data);
			return false;
		    }, 1000);
		}
		return false;
	    });
	} else {
	    //main experiment code
	    //$j("#continue").unbind("click");
	    $j("#showq").unbind("click");
	    
	    document.getElementById("r1").checked = false; //uncheck all radio buttons
	    document.getElementById("r2").checked = false;
	    document.getElementById("r3").checked = false;

	    var qdata = {}; //initialize dict for trial info
	    $j("#error").hide();
	    $j("#questiontxt").hide();
	    $j("#aborc").hide();
	    $j("#continue").hide();
	    $j("#showq").show();

	    //pop trial
	    var condition = questions.shift();
	    
	    if (condition.startsWith('t')) {
		var trial = "test";
		var type = foc.random();
		var scene = condition.slice(1,4);
		var wcoAns = ["A", "B"].random();
	    } else {
		var trial = "filler";
		var type = "filler";
		var scene = condition;
		var wcoAns = "NA";
	    }

	    qdata.trial = trial;
	    qdata.type = type;
	    qdata.scene = scene;
	    qdata.wcoAns = wcoAns;
	    
	    if (trial == "test") {
		if (scene == "bus") {
		    var txt = busT;
		    var wco1 = busSFirst;
		    var wco2 = busSSecond;
		    var qstn = busQ;
		    if (wcoAns == "A") {
			var ansa = busA;
			var ansb = busB;
		    } else if (wcoAns == "B") {
			var ansa = busB;
			var ansb = busA;
		    }
		} else if (scene == "act") {
		    var txt = actT;
		    var wco1 = actSFirst;
		    var wco2 = actSSecond;
		    var qstn = actQ;
		    if (wcoAns == "A") {
			var ansa = actA;
			var ansb = actB;
		    } else if (wcoAns == "B") {
			var ansa = actB;
			var ansb = actA;
		    }
		} else if (scene == "man") {
		    var txt = manT;
		    var wco1 = manSFirst;
		    var wco2 = manSSecond;
		    var qstn = manQ;
		    if (wcoAns == "A") {
			var ansa = manA;
			var ansb = manB;
		    } else if (wcoAns == "B") {
			var ansa = manB;
			var ansb = manA;
		    }
		} else if (scene == "rep") {
		    var txt = repT;
		    var wco1 = repSFirst;
		    var wco2 = repSSecond;
		    var qstn = repQ;
		    if (wcoAns == "A") {
			var ansa = repA;
			var ansb = repB;
		    } else if (wcoAns == "B") {
			var ansa = repB;
			var ansb = repA;
		    }
		} else if (scene == "emc") {
		    var txt = emcT;
		    var wco1 = emcSFirst;
		    var wco2 = emcSSecond;
		    var qstn = emcQ;
		    if (wcoAns == "A") {
			var ansa = emcA;
			var ansb = emcB;
		    } else if (wcoAns == "B") {
			var ansa = emcB;
			var ansb = emcA;
		    }
		} else if (scene == "chr") {
		    var txt = chrT;
		    var wco1 = chrSFirst;
		    var wco2 = chrSSecond;
		    var qstn = chrQ;
		    if (wcoAns == "A") {
			var ansa = chrA;
			var ansb = chrB;
		    } else if (wcoAns == "B") {
			var ansa = chrB;
			var ansb = chrA;
		    }
		} else if (scene == "flt") {
		    var txt = fltT;
		    var wco1 = fltSFirst;
		    var wco2 = fltSSecond;
		    var qstn = fltQ;
		    if (wcoAns == "A") {
			var ansa = fltA;
			var ansb = fltB;
		    } else if (wcoAns == "B") {
			var ansa = fltB;
			var ansb = fltA;
		    }
		} else if (scene == "det") {
		    var txt = detT;
		    var wco1 = detSFirst;
		    var wco2 = detSSecond;
		    var qstn = detQ;
		    if (wcoAns == "A") {
			var ansa = detA;
			var ansb = detB;
		    } else if (wcoAns == "B") {
			var ansa = detB;
			var ansb = detA;
		    }
		} else if (scene == "tch") {
		    var txt = tchT;
		    var wco1 = tchSFirst;
		    var wco2 = tchSSecond;
		    var qstn = tchQ;
		    if (wcoAns == "A") {
			var ansa = tchA;
			var ansb = tchB;
		    } else if (wcoAns == "B") {
			var ansa = tchB;
			var ansb = tchA;
		    }
		} 
		
		$j("#contexttxt").html(trialText(txt, wco1, wco2, type));
		$j("#questiontxt").html(qText(qstn));
		$j("#Atxt").html("<strong>A: </strong>" + psQs(ansa));
		$j("#Btxt").html("<strong>B: </strong>" + psQs(ansb));
		$j("#Ctxt").html("<strong>C: </strong>" + "Either A or B.");


	

	    } else if (trial == "filler") {
		if (scene == "f1") {
		    var txt = f1T;
		    var qstn = f1Q;
		    var ansa = f1A;
		    var ansb = f1B;
		} else if (scene == "f2") {
		    var txt = f2T;
		    var qstn = f2Q;
		    var ansa = f2A;
		    var ansb = f2B;
		} else if (scene == "f3") {
		    var txt = f3T;
		    var qstn = f3Q;
		    var ansa = f3A;
		    var ansb = f3B;
		} else if (scene == "f4") {
		    var txt = f4T;
		    var qstn = f4Q;
		    var ansa = f4A;
		    var ansb = f4B;
		} else if (scene == "f5") {
		    var txt = f5T;
		    var qstn = f5Q;
		    var ansa = f5A;
		    var ansb = f5B;
		} else if (scene == "f6") {
		    var txt = f6T;
		    var qstn = f6Q;
		    var ansa = f6A;
		    var ansb = f6B;
		} else if (scene == "f7") {
		    var txt = f7T;
		    var qstn = f7Q;
		    var ansa = f7A;
		    var ansb = f7B;
		} else if (scene == "f8") {
		    var txt = f8T;
		    var qstn = f8Q;
		    var ansa = f8A;
		    var ansb = f8B;
		} else if (scene == "f9") {
		    var txt = f9T;
		    var qstn = f9Q;
		    var ansa = f9A;
		    var ansb = f9B;
		} else if (scene == "f10") {
		    var txt = f10T;
		    var qstn = f10Q;
		    var ansa = f10A;
		    var ansb = f10B;
		} 

		$j("#contexttxt").html(fillerText(txt));
		$j("#questiontxt").html(qText(qstn));
		$j("#Atxt").html("<strong>A: </strong>" + psQs(ansa));
		$j("#Btxt").html("<strong>B: </strong>" + psQs(ansb));
		$j("#Ctxt").html("<strong>C: </strong>" + "Either A or B.");
	    }

	    $j("#showq").click(function() {
		$j("#continue").unbind("click");
		$j("#questiontxt").show();
		$j("#aborc").show();
		$j("#continue").show();
		$j("#showq").hide();

		var startTime = (new Date()).getTime();
		
		$j("#continue").click(function() {
		    var btn = valButton(document.getElementsByName('abc'));
		    if (btn == null) {
			$j("#error").show();
		    } else {
			qdata.response = btn;
			$j('.bar').css('width', (200.0 * num/numberOfQuestions) + 'px');
			var endTime = (new Date()).getTime();
			qdata.rt = endTime - startTime;
			experiment.data['q' + num + 'data'] = qdata;
			experiment.next(num + 1);
			
			return false;
		    }
		});
		
		return false;
	    });
	}
	return false;
    }
}
