//test parameters 10 possible scenes, randomly choose 5 to be fillers, five to be test
var scenes = ['bus', 'chr', 'ser', 'rep', 'cmp', 'orc', 'thp', 'pol', 'emc', 'bis'];
//var scenes = ['tbus', 'tact', 'tman', 'trep', 'temc', 'tchr', 'tflt', 'tdet', 'ttch'];
var test_conds = ['pro', 'null', 'np'];
var fc_conds = ['filler', 'control'];
//var fillers = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'];

//pick random item from set
function random(a, b) {
    if (typeof b == "undefined") {
	a = a || 2;
	return Math.floor(Math.random()*a);
    } else {
	return Math.floor(Math.random()*(b-a+1)) + a;
    }
}

function Label(a1, str) {
    var l_trials = new Array();
    for (var i = 0; i<a1.length; i++) {
	var label = [a1[i], str];
	l_trials.push(label);
    }
    return l_trials;
}



Array.prototype.random = function() {return this[random(this.length)];}

//shuffle an array
function shuffle(v) { //non-destructive
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}


//make trials list
var preTest = shuffle(scenes);

var test_trials = (Label(preTest.slice(0,5), 'test')).concat(Label(preTest.slice(5, 10), 'fc'));

var questions = shuffle(test_trials);


//var addTrials = fillers.concat(preTest.slice(0,5));
//var questions = shuffle(addTrials);

function Capitalize(string) {
    var firstLetter = string.substring(0,1);
    firstLetter = firstLetter.toUpperCase();
    var rest = string.substring(1, string.length);
    return firstLetter.concat(rest);
}

function psQs(string) {
    return Capitalize(string).concat('.');
}




var busT = "Two or three local business executives have decided to run for political office in San Francisco, due to the large number of regulatory measures currently under debate in city government.  Each of them has been campaigning for support within the business and financial community, with varying degrees of success.  They have also each faced pushback from businesspeople who are supporting the other candidates.  <br><br>Arthur, Jessica, and Frank work at a small start-up in the city.";
var busNull = "Before deciding who to support, Arthur wanted to find out which executive his business partners had endorsed.";
var busNP = "Before deciding who to support, only Arthur wanted to find out which executive his business partners had endorsed.";
var busPro = "Before deciding who to support, Arthur wanted to find out which executive only his business partners had endorsed.";
var busControl = "Before deciding who to support, Arthur wanted to find out which executive had been endorsed by his business partners.";
var busFiller = "Before deciding who to support, Arthur wanted to find out which executive’s business partners had endorsed him.";
var busQ = "Who did Arthur want to identify?";
var busWCO = "An executive who had been endorsed by that executive's business partners.";
var busNo = "An executive who had been endorsed by Arthur's business partners.";
var busFCo = "An executive whose partners endorsed that executive.";
var busFNo = "An executive whose partners endorsed Arthur.";

var chrT = "In Rosedale high school, social studies classes have been covering the Middle East for the last three weeks.  Rosedale is a religiously and ethnically diverse school district, and administrator have been concerned that some students and their parents will be unhappy if they believe teachers are expressing opinions about ongoing regional conflicts.  Some of the teachers have said that it is difficult to have any political discussion that cannot be called biased from one point of view or another, and observed that students may misreport what was said to their friends or parents.<br><br>Having heard about some complaints, the social sciences faculty at Rosedale held a meeting.  Carmen is currently the department chair, as well as an eleventh-grade history teacher.";
var chrNull = "During the meeting, Carmen asked which teacher her students had accused of bias.";
var chrNP = "During the meeting, only Carmen asked which teacher her students had accused of bias.";
var chrPro = "During the meeting, Carmen asked which teacher only her students had accused of bias.";
var chrControl = "During the meeting, Carmen asked which teacher had been accused of bias by her students.";
var chrFiller = "During the meeting, Carmen asked which teacher's students had accused her of bias.";
var chrQ = "Who was Carmen trying to identify?";
var chrWCO = "A teacher who had been accused of bias by that teacher's students.";
var chrNo = "A teacher who had been accused of bias by Carmen's students.";
var chrFCo = "A teacher whose students had accused that teacher of bias.";
var chrFNo = "A teacher whose students had accused Carmen of bias.";


var serT = "Waitstaff at Mickey's diner run a monthly competition for 'good service'.  The person who gets the most tips gets a bonus at the end of the month.  Several of the newer hires are students at the nearby community college, and since the diner gets a lot of business from the college, these waitstaff sometimes end up serving their friends while on shift.  In the past, the good service bonus went to the staff member who was tipped by the most customers, but restaurant management is thinking of changing this, since some staff obviously have more friends among the customers than others, and the bonus is meant to go to the server who does the best job, not the one who knows the most people.<br><br>Taylor, Malia, and Bill have been waitstaff at Mickey's for a few years, and are currently the shift managers.  Taylor and Malia are also students at the college, and recommended some of the new hires.  At the end of the second week of November, they met to figure out what to do about the service bonus.";
var serNull = "Taylor asked which server her friends had regularly tipped.";
var serNP = "Only Taylor asked which server her friends had regularly tipped.";
var serPro = "Taylor asked which server only her friends had regularly tipped.";
var serControl = "Taylor asked which server had been regularly tipped by her friends.";
var serFiller = "Taylor asked which server's friends had regularly tipped her.";
var serQ = "Who did Taylor want to identify?";
var serWCO = "A server who was regularly tipped by that server's friends.";
var serNo = "A server who was regularly tipped by Taylor's friends.";
var serFCo = "A server whose friends had regularly tipped that server.";
var serFNo = "A server whose friends had regularly tipped Taylor.";


var repT = "The Greentown Gazette has been reviewing applicants for an editorial position on the newspaper.  A handful of the candidates already work (in different jobs) at the Gazette, so some of their recommendation letters come from higher-ups within the organization.  The managing editor always convenes hiring committees from a mix of editorial staff and senior writers.  Since the internal letter-writers are known to members of the committee, they feel free to be quite straightforward in their assessments.<br><br>Jesse has been writing for Viewpoints for several years now, and this is the third time he's been on a hiring committee.  Some of the first-timers seemed a little uncertain about how to handle recommendations involving people they work with.";
var repNull = "During the shortlisting, Jesse asked which applicant his current superior had given a poor review.";
var repNP = "During the shortlisting, only Jesse asked which applicant his current superior had given a poor review.";
var repPro = "During the shortlisting, Jesse asked which applicant only his current superior had given a poor review.";
var repControl = "During the shortlisting, Jesse asked which applicant had been given a poor review by his current superior.";
var repFiller = "During the shortlisting, Jesse asked which applicant's current superior had given him a poor review.";
var repQ = "Who was Jesse asking for information about?";
var repWCO = "An applicant who had been given a poor review by that applicant's superior.";
var repNo = "An applicant who had been given a poor review by Jesse's superior.";
var repFCo = "An applicant whose superior had given that applicant a poor review.";
var repFNo = "An applicant whose superior had given Jesse a poor review.";


var cmpT = "At Tikihama summer camp, the kids get to rank which cabin they would like to be in.  It's a popular camp, and a lot of the kids go back many times, and eventually become camp counselors  A lot of the regulars have siblings who are starting at Tikihama this year, and they have been sharing notes amongst families about which counselors are the most strict and most fun, and whose cabins have the best and worst activities.<br><br>Jordan and her friends Nadia and Alexis all have older siblings who have been to Tikihama before, and they are excited about going for the first time.  They are all anxious about which cabin they will be assigned to, and have been asking lots of questions.";
var cmpNull = "Jordan wanted to know which camper her sister had warned against Cabin Moose.";
var cmpNP = "Only Jordan wante to know which camper her sister had warned against Cabin Moose.";
var cmpPro = "Jordan wanted to know which camper only her sister had warned against Cabin Moose.";
var cmpControl = "Jordan wanted to know which camper had been warned against Cabin Moose by her sister.";
var cmpFiller = "Jordan wanted to know which camper's sister had warned her against Cabin Moose.";
var cmpQ = "Who did Jordan want to identify?";
var cmpWCO = "A camper who had been warned against Moose by that camper's sister.";
var cmpNo = "A camper who had been warned against Moose by Jordan's sister.";
var cmpFCo = "A camper whose sister had warned that camper against Moose.";
var cmpFNo = "A camper whose sister had warned Jordan against Moose.";


var orcT = "The Allegro Ensemble has been Maryville's community orchestra for twenty-one years.  It has always been open, without auditions, to anyone who wishes to join, and participants have primarily been older town residents who have come back to their instruments after a hiatus.  Recently, however, a large number of semi-professional, technically-advanced players have joined, and the board hired a new conductor.  The conductor wanted to include more challenging repertoire in the upcoming concert, and the board agreed if he would instate a policy of holding auditions to determine seating within each section.  Some of the long-term members of the orchestra are unhappy about the changes, and have been saying they will vote for new board members in the next election.<br><br>Saideh and Russell are both on the board.  Saideh joined the violin section two years ago, and Russell has been playing clarinet with the orchestra since he retired in 2001.  In a recent meeting, he said that several of his friends in the orchestra were hoping that the board's stance would change after the election.";
var orcNull = "During the discussion that followed, Saideh asked which board member her current stand mate was voting against.";
var orcNP = "During the discussion that followed, only Saideh asked which board member her current stand mate was voting against.";
var orcPro = "During the discussion that followed, Saideh asked which board member only her current stand mate was voting against.";
var orcControl = "During the subsequent discussion, Saideh asked which board member was being voted against by her current stand mate.";
var orcFiller = "During the subsequent discussion, Saideh asked whose current stand mate was voting against her.";
var orcQ = "Who was Saideh asking about?";
var orcWCO = "A board member who was being voted against by that member's stand mate.";
var orcNo = "A board member who was being voted against by Saideh's stand mate.";
var orcFCo = "A board member whose current stand mate was voting against that board member.";
var orcFNo = "A board member whose current stand mate was voting against Saideh.";


var thpT = "The Shangri-La sanatorium takes a holistic view of psychiatric therapy.  Inpatients are required to participate in both individual sessions with a staff therapist of their choice, as well as in a weekly group therapy session.  All three staff psychiatrists are present at the group session, and interact with all of the patients.  This can sometimes be complicated, since the therapists use different modes of therapy in their one-on-one sessions, and have different attitudes towards psychiatric practice. Since they are not as familiar with the case history of patients they only see in the group session, they are often quite careful and general in dealing with them.<br><br>Jasmine is one of the staff therapists.  She has six patients who meet with her individually.  In this week's meeting with Shangri-La management, Jasmine and her two colleagues were discussing the reasons for a conflict that occurred at the previous group therapy session.  They thought it had something to do with the attitude of the therapists to the patients they don't see individually.";
var thpNull = "Jasmine asked which therapist her patients liked.";
var thpNP = "Only Jasmine asked which therapist her patients liked.";
var thpPro = "Jasmine asked which therapist only her patients liked.";
var thpControl = "Jasmine asked which therapist was liked by her patients.";
var thpFiller = "Jasmine asked which therapist's patients liked her.";
var thpQ = "Who was Jamine trying to identify?";
var thpWCO = "A therapist who was liked by that therapist's patients.";
var thpNo = "A therapist who was liked by Jasmine's patients.";
var thpFCo = "A therapist whose patients liked that therapist.";
var thpFNo = "A therapist whose patients liked Jasmine.";


var polT = "A married couple, the Rydells, were arguing about whether or not a new economic bill should be passed in the state legislature.  One of them felt that the governor and lieutenant governor's modifications to the bill did not take enough account of the individual constituencies in the state.  The other thought that the numerous riders attached to the bill by independent assemblypersons were too petty and specific to allow the bill to pass.<br><br>To prove his point, Mr. Rydell showed his wife a clip of the local TV station's broadcast of the legislature in session.  In it, the state House was debating the bill.  Everyone was getting impatient.";
var polNull = "The lieutenant governor demanded to know which assemblyman's initiatives his constituents benefitted from.";
var polNP = "Only the lieutenant governor demanded to know which assemblyman's initiatives his constituents benefitted from.";
var polPro = "The lieutenant governor demanded to know which assemblyman's initiatives only his constituents benefitted from.";
var polControl = "The lieutenant governor demanded to know which assemblyman's initiatives benefitted his constituents.";
var polFiller = "The lieutenant governor demanded to know which assemblyman's constituents benefitted from his initiatives.";
var polQ = "Who did the lieutenant governor want an answer from?";
var polWCO = "An assemblyman whose initiatives benefitted that assemblyman's constituents.";
var polNo = "An assemblyman whose initiatives benefitted the lieutenant governor's constituents.";
var polFCo = "An assemblyman whose constituents benefitted from that assemblyman's initiatives.";
var polFNo = "An assemblyman whose constituents benefitted from the lieutenant governor's initiatives.";

var emcT = "The student union at Belford College holds a variety show once a semester.  Different student groups put on performances--short plays, music, dance, and so on.  The student government has a committee in charge of organizing the show, fundraising, and finding people to introduce the performers and emcee each section. The two rival improv troupes on campus both asked the committee to include a stand-up comedy portion on the program for the next show.  The committee agreed, as long as the groups would provide an emcee.<br><br>Ilias is a member of one of the improv groups.  He doesn't enjoy doing stand-up, so he volunteered to emcee the event instead.  People mostly seemed to enjoy the show, but in the last few acts, things got very rowdy, which was embarrassing.  Ilias thought it was due both to the established rivalry between the two improv groups, as well as other members of the audience shouting personal comments at some of the performers.   During the intermission, the emcees for the first and second halves met to talk about what to do.";
var emcNull = "Ilias asked which comedian his friends had heckled.";
var emcNP = "Only Ilias asked which comedian his friends had heckled.";
var emcPro = "Ilias asked which comedian only his friends had heckled.";
var emcControl = "Ilias asked which comedian had been heckled by his friends.";
var emcFiller = "Ilias asked which comedian's friends had heckled him.";
var emcQ = "Who was Ilias trying to identify?";
var emcWCO = "A comedian who had been heckled by that comedian's friends.";
var emcNo = "A comedian who had been heckled by Ilias's friends.";
var emcFCo = "A comedian whose friends had heckled that comedian.";
var emcFNo = "A comedian whose friends had heckled Ilias.";

var bisT = "Four Elements Bistro has a reputation for being a great learning environment for recent culinary school graduates.  New cooks are paired with one of the senior chefs to learn restaurant techniques and trademark dishes, but they are also given the opportunity to experiment on their own.  Once a quarter, the junior cooks are given an opportunity to come up with a special menu featuring one dish created by each of them.  On 'showcase' nights, restaurant-goers can order off of the specials menu or the regular menu.  Each junior cook is responsible for the dish he or she invented.<br><br>Sam and Elena were both hired at Four Elements a month and a half ago, and this is their first showcase night. It is not going well. A lot of the diners are ordering from the regular menu, and Sam and Elena haven't had the opportunity to make their new dishes much.  The other junior cooks are not doing much better.  Someone even sent a dish back to the kitchen, which rarely happens at Four Elements.  The junior cooks have been taking turns to look out at the dining room to check the expressions on diner's faces.";
var bisNull = "Sam asked which gentleman his special order had disappointed.";
var bisNP = "Only Sam asked which gentleman his special order had disappointed.";
var bisPro = "Sam asked which gentleman only his special order had disappointed.";
var bisControl = "Sam asked which gentleman had been disappointed by his special order.";
var bisFiller = "Sam asked which gentlemen's special order had disappointed him.";
var bisQ = "Who was Sam trying to identify?";
var bisWCO = "A gentleman who had been disappointed by that gentleman's special order.";
var bisNo = "A gentleman who had been disappointed by Sam's special order.";
var bisFCo = "A gentleman whose special order had disappointed that gentleman.";
var bisFNo = "A gentleman whose special order had disappointed Sam.";

//build test text 
function mainText(txt) {
    var mdisplay = "<br><br>" + txt + "  ";
    return mdisplay;
}

function lastText(txt) {
    var sent = txt + "<br><br><br>";
    return sent;
}

function qText(question) {
    var qdisplay = "<strong>" + question + "</strong><br><br><br>";
    return qdisplay;
}







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
    showSlide("intro");
    $j(".numquestions").html(numberOfQuestions);
    $j("#totaltime").html(15);
    $j("#mustaccept").hide()
    return false;
});

//experiment event
var experiment = {
    data: {},
    consent: function() {
	if (turk.previewMode) {
	    $j("#mustaccept").show();
	} else {
	    showSlide("consent");
	}
	return false;
    },
    instr: function() {
	showSlide("instr");
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
	  //  document.getElementById("r3").checked = false;

	    var qdata = {}; //initialize dict for trial info
	    $j("#error").hide();
	    $j("#questiontxt").hide();
	    $j("#aborc").hide();
	    $j("#continue").hide();
	    $j("#showq").show();

	    //pop trial
	    var condition = questions.shift();
	    var scene = condition[0];
	    var corefAns = ["A", "B"].random();
	    var trial = condition[1];

	    
	    if (trial == "test") {
		var type = test_conds.random();
	    } else {
		var type = fc_conds.random();
	    }

	    qdata.trial = trial;
	    qdata.type = type;
	    qdata.scene = scene;
	    qdata.corefAns = corefAns;
	    
	    if (scene == "bus") {
		var maintxt = busT;
		var qstn = busQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = busFCo;
			var ansB = busFNo;
		    } else if (corefAns == "B") {
			var ansA = busFNo;
			var ansB = busFCo;
		    }
		    var lsent = busFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = busWCO;
			var ansB = busNo;
		    } else if (corefAns == "B") {
			var ansA = busNo;
			var ansB = busWCO;
		    }
		    if (type == "control") {
			var lsent = busControl;
		    } else if (type == "null") {
			var lsent = busNull;
		    } else if (type == "np") {
			var lsent = busNP;
		    } else if (type == "pro") {
			var lsent = busPro;
		    }
		}


	    } else if (scene == "chr") {
		var maintxt = chrT;
		var qstn = chrQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = chrFCo;
			var ansB = chrFNo;
		    } else if (corefAns == "B") {
			var ansA = chrFNo;
			var ansB = chrFCo;
		    }
		    var lsent = chrFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = chrWCO;
			var ansB = chrNo;
		    } else if (corefAns == "B") {
			var ansA = chrNo;
			var ansB = chrWCO;
		    }
		    if (type == "control") {
			var lsent = chrControl;
		    } else if (type == "null") {
			var lsent = chrNull;
		    } else if (type == "np") {
			var lsent = chrNP;
		    } else if (type == "pro") {
			var lsent = chrPro;
		    }
		}

	    } else if (scene == "ser") {
		var maintxt = serT;
		var qstn = serQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = serFCo;
			var ansB = serFNo;
		    } else if (corefAns == "B") {
			var ansA = serFNo;
			var ansB = serFCo;
		    }
		    var lsent = serFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = serWCO;
			var ansB = serNo;
		    } else if (corefAns == "B") {
			var ansA = serNo;
			var ansB = serWCO;
		    }
		    if (type == "control") {
			var lsent = serControl;
		    } else if (type == "null") {
			var lsent = serNull;
		    } else if (type == "np") {
			var lsent = serNP;
		    } else if (type == "pro") {
			var lsent = serPro;
		    }
		}

	    } else if (scene == "rep") {
		var maintxt = repT;
		var qstn = repQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = repFCo;
			var ansB = repFNo;
		    } else if (corefAns == "B") {
			var ansA = repFNo;
			var ansB = repFCo;
		    }
		    var lsent = repFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = repWCO;
			var ansB = repNo;
		    } else if (corefAns == "B") {
			var ansA = repNo;
			var ansB = repWCO;
		    }
		    if (type == "control") {
			var lsent = repControl;
		    } else if (type == "null") {
			var lsent = repNull;
		    } else if (type == "np") {
			var lsent = repNP;
		    } else if (type == "pro") {
			var lsent = repPro;
		    }
		}

	    } else if (scene == "cmp") {
		var maintxt = cmpT;
		var qstn = cmpQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = cmpFCo;
			var ansB = cmpFNo;
		    } else if (corefAns == "B") {
			var ansA = cmpFNo;
			var ansB = cmpFCo;
		    }
		    var lsent = cmpFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = cmpWCO;
			var ansB = cmpNo;
		    } else if (corefAns == "B") {
			var ansA = cmpNo;
			var ansB = cmpWCO;
		    }
		    if (type == "control") {
			var lsent = cmpControl;
		    } else if (type == "null") {
			var lsent = cmpNull;
		    } else if (type == "np") {
			var lsent = cmpNP;
		    } else if (type == "pro") {
			var lsent = cmpPro;
		    }
		}

	    } else if(scene == "orc") {
		var maintxt = orcT;
		var qstn = orcQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = orcFCo;
			var ansB = orcFNo;
		    } else if (corefAns == "B") {
			var ansA = orcFNo;
			var ansB = orcFCo;
		    }
		    var lsent = orcFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = orcWCO;
			var ansB = orcNo;
		    } else if (corefAns == "B") {
			var ansA = orcNo;
			var ansB = orcWCO;
		    }
		    if (type == "control") {
			var lsent = orcControl;
		    } else if (type == "null") {
			var lsent = orcNull;
		    } else if (type == "np") {
			var lsent = orcNP;
		    } else if (type == "pro") {
			var lsent = orcPro;
		    }
		}

	    } else if(scene == "thp") {
		var maintxt = thpT;
		var qstn = thpQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = thpFCo;
			var ansB = thpFNo;
		    } else if (corefAns == "B") {
			var ansA = thpFNo;
			var ansB = thpFCo;
		    }
		    var lsent = thpFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = thpWCO;
			var ansB = thpNo;
		    } else if (corefAns == "B") {
			var ansA = thpNo;
			var ansB = thpWCO;
		    }
		    if (type == "control") {
			var lsent = thpControl;
		    } else if (type == "null") {
			var lsent = thpNull;
		    } else if (type == "np") {
			var lsent = thpNP;
		    } else if (type == "pro") {
			var lsent = thpPro;
		    }
		}

	    } else if (scene == "pol") {
		var maintxt = polT;
		var qstn = polQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = polFCo;
			var ansB = polFNo;
		    } else if (corefAns == "B") {
			var ansA = polFNo;
			var ansB = polFCo;
		    }
		    var lsent = polFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = polWCO;
			var ansB = polNo;
		    } else if (corefAns == "B") {
			var ansA = polNo;
			var ansB = polWCO;
		    }
		    if (type == "control") {
			var lsent = polControl;
		    } else if (type == "null") {
			var lsent = polNull;
		    } else if (type == "np") {
			var lsent = polNP;
		    } else if (type == "pro") {
			var lsent = polPro;
		    }
		}

	    } else if  (scene == "emc") {
		var maintxt = emcT;
		var qstn = emcQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = emcFCo;
			var ansB = emcFNo;
		    } else if (corefAns == "B") {
			var ansA = emcFNo;
			var ansB = emcFCo;
		    }
		    var lsent = emcFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = emcWCO;
			var ansB = emcNo;
		    } else if (corefAns == "B") {
			var ansA = emcNo;
			var ansB = emcWCO;
		    }
		    if (type == "control") {
			var lsent = emcControl;
		    } else if (type == "null") {
			var lsent = emcNull;
		    } else if (type == "np") {
			var lsent = emcNP;
		    } else if (type == "pro") {
			var lsent = emcPro;
		    }
		}

	    } else if (scene == "bis") {
		var maintxt = bisT;
		var qstn = bisQ;
		if (type == "filler") {
		    if (corefAns == "A") {
			var ansA = bisFCo;
			var ansB = bisFNo;
		    } else if (corefAns == "B") {
			var ansA = bisFNo;
			var ansB = bisFCo;
		    }
		    var lsent = bisFiller; 
		} else {
		    if (corefAns == "A") {
			var ansA = bisWCO;
			var ansB = bisNo;
		    } else if (corefAns == "B") {
			var ansA = bisNo;
			var ansB = bisWCO;
		    }
		    if (type == "control") {
			var lsent = bisControl;
		    } else if (type == "null") {
			var lsent = bisNull;
		    } else if (type == "np") {
			var lsent = bisNP;
		    } else if (type == "pro") {
			var lsent = bisPro;
		    }
		}

	    }



		
		$j("#contexttxt").html(mainText(maintxt) + lastText(lsent));
		$j("#questiontxt").html(qText(qstn));
		$j("#Atxt").html("<strong>A: </strong>" + ansA);
		$j("#Btxt").html("<strong>B: </strong>" + ansB);
	//	$j("#Ctxt").html("<strong>C: </strong>" + "Either A or B.");


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
