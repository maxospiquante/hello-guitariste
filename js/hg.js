const tons = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#" ];
const mM = ["maj" , "min"  , "min7b5"   , "dim" , "aug"  , "maj7"  , "min7"  , "7" , "minmaj7"  , "maj7#5"  , "dim7"  ];
const scale = ["Ionian","Dorian","Phrygian","Lydian","Mixolydian","Aeolian","Locrian"];

 // https://www.anyonecanplayguitar.co.uk/resources/
var leton_;
var lemm_;
var lescale_;
var myChords;
//var familyOfTriads = [[0,4,7],[0,3,7],[0,3,6],[0,4,8]];
//var familyOfTriads = [[0,4,7] ];


var MIDI_NUM_NAMES = ["C_1", "C#_1", "D_1", "D#_1", "E_1", "F_1", "F#_1", "G_1", "G#_1", "A_1", "A#_1", "B_1",
                "C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
                "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
                "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
                "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
                "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
                "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
                "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
                "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
                "C8", "C#8", "D8", "D#8", "E8", "F8", "F#8", "G8", "G#8", "A8", "A#8", "B8",
                "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9"];
var MIDI_SHARP_NAMES = ['B#_0',  'C#_1', 'Cx_1', 'D#_1',   'E_1',  'E#_1',  'F#_1', 'Fx_1',  'G#_1', 'Gx_1', 'A#_1', 'B_1',
                    'B#_1', 'C#0', 'Cx0', 'D#0', 'E0', 'E#0', 'F#0', 'Fx0', 'G#0', 'Gx0', 'A#0', 'B0',
                    'B#0', 'C#1', 'Cx1', 'D#1', 'E1', 'E#1', 'F#1', 'Fx1', 'G#1', 'Gx1', 'A#1', 'B1',
                    'B#1', 'C#2', 'Cx2', 'D#2', 'E2', 'E#2', 'F#2', 'Fx2', 'G#2', 'Gx2', 'A#2', 'B2',
                    'B#2', 'C#3', 'Cx3', 'D#3', 'E3', 'E#3', 'F#3', 'Fx3', 'G#3', 'Gx3', 'A#3', 'B3',
                    'B#3', 'C#4', 'Cx4', 'D#4', 'E4', 'E#4', 'F#4', 'Fx4', 'G#4', 'Gx4', 'A#4', 'B4',
                    'B#4', 'C#5', 'Cx5', 'D#5', 'E5', 'E#5', 'F#5', 'Fx5', 'G#5', 'Gx5', 'A#5', 'B5',
                    'B#5', 'C#6', 'Cx6', 'D#6', 'E6', 'E#6', 'F#6', 'Fx6', 'G#6', 'Gx6', 'A#6', 'B6',
                    'B#6', 'C#7', 'Cx7', 'D#7', 'E7', 'E#7', 'F#7', 'Fx7', 'G#7', 'Gx7', 'A#7', 'B7',
                    'B#7', 'C#8', 'Cx8', 'D#8', 'E8', 'E#8', 'F#8', 'Fx8', 'G#8', 'Gx8', 'A#8', 'B8',
                    'B#8', 'C#9', 'Cx9', 'D#9', 'E9', 'E#9', 'F#9', 'Fx9'];
                          

var MIDI_FLAT_NAMES = ['C_1', 'Db_1', 'D_1', 'Eb_1', 'Fb_1', 'F_1', 'Gb_1', 'G_1', 'Ab_1', 'A_1', 'Bb_1', 'Cb0',
                    'C0', 'Db0', 'D0', 'Eb0', 'Fb0', 'F0', 'Gb0', 'G0', 'Ab0', 'A0', 'Bb0', 'Cb1',
                    'C1', 'Db1', 'D1', 'Eb1', 'Fb1', 'F1', 'Gb1', 'G1', 'Ab1', 'A1', 'Bb1', 'Cb2',
                    'C2', 'Db2', 'D2', 'Eb2', 'Fb2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'Cb3',
                    'C3', 'Db3', 'D3', 'Eb3', 'Fb3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'Cb4',
                    'C4', 'Db4', 'D4', 'Eb4', 'Fb4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'Cb5',
                    'C5', 'Db5', 'D5', 'Eb5', 'Fb5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'Cb6',
                    'C6', 'Db6', 'D6', 'Eb6', 'Fb6', 'F6', 'Gb6', 'G6', 'Ab6', 'A6', 'Bb6', 'Cb7',
                    'C7', 'Db7', 'D7', 'Eb7', 'Fb7', 'F7', 'Gb7', 'G7', 'Ab7', 'A7', 'Bb7', 'Cb8',
                    'C8', 'Db8', 'D8', 'Eb8', 'Fb8', 'F8', 'Gb8', 'G8', 'Ab8', 'A8', 'Bb8', 'Cb9',
                    'C9', 'Db9', 'D9', 'Eb9', 'Fb9', 'F9', 'Gb9', 'G9'];

					
					
					
					
					
 var piano;
var MAJ_CHORD =  [[0,4,7 ]]; 
var MIN_CHORD = [[0,3,7]];
var MIN7B5_CHROD = [[0, 3, 6, 10 ]];	
var DIM_CHORD = [[0,3,6]];
var AUG_CHORD = [[0,4,8]];
var MAJ7_CHORD = [[0,4,7,11]];	
var MIN7_CHORD = [[0,3,7,10]];	
var T7_CHORD = [[0,4,7,11 ]];	
var MINMAJ7_CHORD = [[0,3,7,11 ]];	
var MAJ75_CHORD = [[0,4,8,10 ]];	
var DIM7_CHORD = [[0,3,6,9 ]];	
					
					
var IONIAN_SCALE = [0,2,4,5,7,9,11,12];
var DORIAN_SCALE = [0,2,3,5,7,9,10,12];
var PHRY_SCALE = [0,1,3,5,7,8,10,12];	
var LYDIAN_SCALE = [0,2,4,6,7,9,11,12];
var MYXO_SCALE = [0,2,4,5,7,9,10,12];
var AEO_SCALE = [0,2,3,5,7,8,10,12];	
var LOC_SCALE = [0,1,3,5,6,8,10,12];	
					
					
	
function resetall(){
	
	stop();
	$("#main").hide();
	$("#mydivnotes").hide();	
	$("#scales").hide();	
	$("#bouttonstop").hide();	
	$("#scale_draw").hide();	
	$("#chords_draw").hide();	
	
	$("#scaleoutput").hide();	

	$("#chordoutput").hide();

	// Make the DIV element draggable:
	dragElement(document.getElementById("mydivnotes"));

}

				
function randomALL(){
	
	resetall();
	this.leton_ = tons[Math.floor(Math.random() * tons.length)];
	this.lemm_ = mM[Math.floor(Math.random() * mM.length)];
	this.lescale_ = scale[Math.floor(Math.random() * scale.length)];

	
	document.getElementById("lechord").innerHTML=leton_; 
	document.getElementById("lechord2").innerHTML=leton_;
	document.getElementById("lechord3").innerHTML=leton_;
	
	document.getElementById("lem").innerHTML=lemm_; 
	document.getElementById("lescale").innerHTML=lescale_; 
	
	 
	$( "p[id^='help_']" ).hide();
	$( "p[id='help_"+lemm_+"']" ).show();
	 
	$("#main").show();
	
}


function shownotes(){
	
	playANote();
	$("#scale_draw").hide();
	$("#mydivnotes").show();
	
}


function showscale(){
	
	$("#notes").hide();
	$("#scale_draw").attr("src", "scales/scale_"+lescale_+".png");
	$("#scale_draw").show();
	
	playScale();
	 
}

function showchord(){
	
	playFamilyOfTriads();
 
  	document.getElementById("chordoutput").innerHTML = '(' + myChords + ')';
	 
	$("#chordoutput").show();

	//$("#notes").hide();
	$("#chords_draw_url").attr("src", getChordUrl);
	$("#chords_draw").show();

	$("#bouttonstop").show();	

	
}

function  getNoteChordUrl(){

	if (this.leton_=='A'){
		return '1-a';
	}
	if (this.leton_=='A#'){
		return '1-a';
	}
	if (this.leton_=='B'){
		return '2-b';
	}
	if (this.leton_=='C'){
		return '3-c';
	}
	if (this.leton_=='C#'){
		return '3-c';
	}
	if (this.leton_=='D'){
		return '4-d';
	}
	if (this.leton_=='D#'){
		return '4-d';
	}
	if (this.leton_=='E'){
		return '5-e';
	}
	if (this.leton_=='F'){
		return '6-f';
	}
	if (this.leton_=='F#'){
		return '6-f';
	}
	if (this.leton_=='G'){
		return '7-g';
	}
	if (this.leton_=='G#'){
		return '7-g';
	}

}



function getChordID(){
 
	if(this.lemm_=='maj'){

		if (this.leton_.includes('#') ){
			return '31-major';		
		}

		return '85-major';
	}
	if(this.lemm_=='min'){

		if (this.leton_.includes('#') ){
			return '38-minor';		
		}

		return '92-minor';
	}
	if(this.lemm_=='min7b5'){

		if (this.leton_.includes('#') ){
			return '145-minor-7-b5';		
		}

		return '84-minor-7-b5';
	}
	if(this.lemm_=='dim'){

		if (this.leton_.includes('#') ){
			return '110-dim';
		}

		return '124-dim';
	}
	if(this.lemm_=='aug'){

		if (this.leton_.includes('#') ){
			return '115-aug';
		}

		return '114-aug';
	}
	if(this.lemm_=='maj7'){
		
		if (this.leton_.includes('#') ){
			return '33-major-7';
		}

		return '87-major-7';
	}
	if(this.lemm_=='min7'){
		
		if (this.leton_.includes('#') ){
			return '42-minor-7';
		}
		return '96-minor-7';
	}
		if(this.lemm_=='7'){
		
			if (this.leton_.includes('#') ){
				return '20-7';
			}
			
			return '6-7';
	}
		if(this.lemm_=='minmaj7'){
		
			if (this.leton_.includes('#') ){
				return '45-minormajor-7';
			}

			return '99-minormajor-7';
	}
		if(this.lemm_=='maj7#5'){
		
			if (this.leton_.includes('#') ){
				return '147-major-75';
			}
		
			return '90-major-75';
	}
		if(this.lemm_=='dim7'){
		
		
			if (this.leton_.includes('#') ){
				return '29-dim-7';
			}
			
			return '83-dim-7';
	}

}

function getChordUrl(){

	//1-a   2-b  ..

// https://www.jamplay.com/tools/guitar-chords/1-standard/4-d/145-minor-7-b5
 
return ("https://www.jamplay.com/tools/guitar-chords/1-standard/"+ getNoteChordUrl() +"/"+getChordID());

}

function makeChordArray(root, chordFormula, timeInterval) {
//    console.log("makeChordArray");
    var indexMIDI
    var aChord = [];
    var timeAndChord = [];
    var toneTime = Tone.Time("0");
    var chordArray = [];
    for(let i=0; i<chordFormula.length; i++) {
        for(var j=0; j<chordFormula[i].length; j++) {
            // add the root to each chord tone
            indexMIDI = chordFormula[i][j] + Number(root);
            // tranlate to a pitch/octave name
            aChord.push(MIDI_NUM_NAMES[indexMIDI]);
        }
		
		myChords=aChord;
		
		// create add time and chord together
		timeAndChord.push(toneTime.toNotation());
		timeAndChord.push(aChord);
        chordArray.push(timeAndChord);
		// now calc the time value for next time
		toneTime = toneTime.add(timeInterval);
		// clear the arrays;
		aChord = [];
		timeAndChord = [];
    }
    return chordArray;
}


function playANote(){
	//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

var note = this.leton_+'4';

synth.triggerAttackRelease(note, '8n');
}


function getChordFormula(){


	if(this.lemm_=='maj'){
		return MAJ_CHORD;
	}
	if(this.lemm_=='min'){
		return MIN_CHORD;
	}
	if(this.lemm_=='min7b5'){
		return MIN7B5_CHROD;
	}
	if(this.lemm_=='dim'){
		return DIM_CHORD;
	}
	if(this.lemm_=='aug'){
		return AUG_CHORD;
	}
	if(this.lemm_=='maj7'){
		return MAJ7_CHORD;
	}
	if(this.lemm_=='min7'){
		return MIN7_CHORD;
	}
		if(this.lemm_=='7'){
		return T7_CHORD;
	}
		if(this.lemm_=='minmaj7'){
		return MINMAJ7_CHORD;
	}
		if(this.lemm_=='maj7#5'){
		return MAJ75_CHORD;
	}
		if(this.lemm_=='dim7'){
		return DIM7_CHORD;
	}
	
}


function getScaleFormula(){

	if(this.lescale_=='Ionian'){
		return IONIAN_SCALE;
	}
	if(this.lescale_=='Dorian'){
		return DORIAN_SCALE;
	}
	if(this.lescale_=='Phrygian'){
		return PHRY_SCALE;
	}
	if(this.lescale_=='Lydian'){
		return LYDIAN_SCALE;
	}
	if(this.lescale_=='Mixolydian'){
		return MYXO_SCALE;
	}
	if(this.lescale_=='Aeolian'){
		return AEO_SCALE;
	}
	if(this.lescale_=='Locrian'){
		return LOC_SCALE;
	}
	
}



function playScale(){
   var synth = new Tone.Synth().toMaster();
    
    
  var note = this.leton_+'4';

   var scaleFormula = getScaleFormula();
    
  
  var myScale = makeScale(scaleFormula, note);
   

 
   document.getElementById("scaleoutput").innerHTML = '('+myScale+')';
  
  $("#scaleoutput").show();
   
  var patternName = 'up';
   var pattern = new Tone.Pattern(function(time, note){
   //the order of the notes passed in depends on the pattern
   synth.triggerAttackRelease(note, '4n', time);
   }, myScale, patternName).start(0);    

   var tempo = '90';
   Tone.Transport.bpm.value = tempo   
   synth.volume.value = '-15';
   Tone.Transport.start('+0.1');
   
$("#bouttonstop").show();	
}
/*
function makeChordArray(root, chordFormula ) {
	
	    var indexMIDI
    var aChord = [];
    var timeAndChord = [];
    var toneTime = Tone.Time("0");
    var chordArray = [];
    for(let i=0; i<chordFormula.length; i++) {
        for(var j=0; j<chordFormula[i].length; j++) {
            // add the root to each chord tone
            indexMIDI = chordFormula[i][j] + Number(root);
            // tranlate to a pitch/octave name
            aChord.push(MIDI_NUM_NAMES[indexMIDI]);
        }
		// create add time and chord together
		timeAndChord.push(toneTime.toNotation());
		timeAndChord.push(aChord);
        chordArray.push(timeAndChord);
		// now calc the time value for next time
	//	toneTime = toneTime.add(2n);
		// clear the arrays;
		aChord = [];
		timeAndChord = [];
    }
    return chordArray;
	
	 
}*/

function getRoot(){
	
	if (this.leton_=='A'){
		return '57';
	}
	if (this.leton_=='A#'){
		return '58';
	}
	if (this.leton_=='B'){
		return '59';
	}
	if (this.leton_=='C'){
		return '60';
	}
	if (this.leton_=='C#'){
		return '61';
	}
	if (this.leton_=='D'){
		return '62';
	}
	if (this.leton_=='D#'){
		return '63';
	}
	if (this.leton_=='E'){
		return '64';
	}
	if (this.leton_=='F'){
		return '65';
	}
	if (this.leton_=='F#'){
		return '66';
	}
	if (this.leton_=='G'){
		return '67';
	}
	if (this.leton_=='G#'){
		return '68';
	}
 

} 



function playFamilyOfTriads() {
 
 
 
	root = getRoot();
	
    myChords_ = makeChordArray(root, getChordFormula(), '2n');
	
	  
    if(!piano) {
		piano = new Tone.PolySynth(4, Tone.Synth, {
			"volume" : -8,
			"oscillator" : {
				"partials" : [1, 2, 5],
			},
			"portamento" : 0.005
		}).toMaster()
    }
	var tempo = '90';
	Tone.Transport.bpm.value = tempo;   

	var chordPart = new Tone.Part(function(time, chord){
		piano.triggerAttackRelease(chord, "2n", time);
	}, myChords_ ).start(0);

	chordPart.loop = true;
	chordPart.loopStart = "0:0";
	chordPart.loopEnd = "2:0";

	Tone.Transport.start("+0.1");
	
	 
}


function makeScale(scaleFormula, keyNameAndOctave) {
	 
	var ALPHA_NAMES = ['A','B','C','D','E','F','G'];
	var startingName = keyNameAndOctave;
	var offset;
	for(var i=0; i<ALPHA_NAMES.length; i++) {
		if(startingName.includes(ALPHA_NAMES[i])) {
			offset = i;
			break;
		}
	}
	var startingNote = noteNameToMIDI(keyNameAndOctave);
	var myScaleFormula = scaleFormula;
	var myScale = [];
	
	for(var i=0; i < myScaleFormula.length; i++) {
	 
		if(MIDI_SHARP_NAMES[myScaleFormula[i] + startingNote].includes(ALPHA_NAMES[(offset+i) % ALPHA_NAMES.length])) {
			myScale.push( MIDI_SHARP_NAMES[myScaleFormula[i] + startingNote] );
		} else if(MIDI_FLAT_NAMES[myScaleFormula[i] + startingNote].includes(ALPHA_NAMES[(offset+i) % ALPHA_NAMES.length])) {
			myScale.push( MIDI_FLAT_NAMES[myScaleFormula[i] + startingNote] );
		} else {
 
			 
			 myScale.push("C7"); // high note used to indicate error
		}
	}
	
	return myScale;
	 
}

 



function stop(){
      Tone.Transport.stop();
      Tone.Transport.cancel(0);	
}



function noteNameToMIDI(noteName)  {
    var i;
    var MIDInumber = -1; // default if not found
    // check all three arrays for the nameName
    for(i=0; i < MIDI_SHARP_NAMES.length; i++) {
        if( noteName == MIDI_SHARP_NAMES[i] ||
                noteName == MIDI_FLAT_NAMES[i] ) {
            MIDInumber = i;  // found it
        }
    }
    return Number(MIDInumber); // it should be a number already, but...
}






function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

}

function openyoutube(){

 
str=this.leton_.replace('#', '%23');
 

	var win = window.open('https://www.youtube.com/results?search_query=backing+track+'+str+'+'+this.lescale_, '_youtube');


	//win.focus();

}