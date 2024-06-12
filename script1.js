// Declare document elements needed:
const baseMusicLine = document.getElementById('baseLine');

const buttonA = document.getElementById("noteA");
const buttonB = document.getElementById("noteB");
const buttonC = document.getElementById("noteC");
const buttonD = document.getElementById("noteD");
const buttonE = document.getElementById("noteE");
const buttonF = document.getElementById("noteF");
const buttonG = document.getElementById("noteG");


// -----------------------------------------------------------------------------------------------------------

/* 
NOTES:

- Math.floor()
- Math.random() : generate random number [0, 1)

- To determine note position:
  - determine offset from middle C (baseMusicLine)
    -> Modulo Operator 
  - transform: translate(0px, calc(1px - (33px/2) - ([# spaces] * 32px) - ([# lines] * 1px))); 

- Create array storing current iteration's correct answers

- const ASCII_C = "C".charCodeAt(0);


- Since we are positioning notes relative to middle C, translations to Notes on lines will need to be translated down by the radius of the note 
  (b/c by starting on C, a line, the note itself is actually already its radius' away from middleC line)
    -*** Find out if translations can be done via "center" and if this is easier.

*/
// -----------------------------------------------------------------------------------------------------------
// Create the key from which we will use with note values to determine notes on lines:
let noteKey = {
  0 : "C",
  1 : "D",
  2 : "E",
  3 : "F",
  4 : "G",
  5 : "A",
  6 : "B"
}


const note_spacing = 4;



// -----------------------------------------------------------------------------------------------------------

// Output Testing:

// for (let key in noteKey) {
//   console.log(key + " " + (noteKey[key]));
// }

// console.log(buttonA.textContent);







// -----------------------------------------------------------------------------------------------------------
// Returns: Array with answers as Note Chars
function renderNotes() {
  // Generate note nums:
  note1_rawVal = Math.floor(Math.random() * 13);
  note2_rawVal = Math.floor(Math.random() * 13);
  note3_rawVal = Math.floor(Math.random() * 13);
  note4_rawVal = Math.floor(Math.random() * 13);


  // ---------------------------------------
  // Determine corresponding noteKey index for each note via modulo result:
  num1_noteVal = (note1_rawVal % 7);
  num2_noteVal = (note2_rawVal % 7);
  num3_noteVal = (note3_rawVal % 7);
  num4_noteVal = (note4_rawVal % 7);


  // Create Array with current iteration's correct Answers:
  let answers = [noteKey[num1_noteVal], noteKey[num2_noteVal], noteKey[num3_noteVal],noteKey[num4_noteVal],];
  console.log(answers);


  // Render and translate the Notes on the music lines:
  for (let noteVal in noteKey) {
    if (noteVal == num1_noteVal) {
      console.log(`Raw Note1 Value: ${note1_rawVal} | Note1: ${noteKey[noteVal]}`);


      // Determine # of lines and spaces to traverse:
      [num_of_spaces, num_of_lines] = [(note1_rawVal - (Math.floor(note1_rawVal / 2))), (Math.floor(note1_rawVal / 2))];
      console.log(`Note1 Spaces: ${num_of_spaces} | Note1 Lines: ${num_of_lines}`);
      

      // Render Note:
      let newNote = document.createElement('span');
      newNote.className = 'note';
      newNote.id = 'note1';
      
      if (note1_rawVal % 2 == 0) { // IF LINE NOTE
        newNote.style.transform = `translate(calc(${note_spacing} * 2.5rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px))`;
        baseMusicLine.appendChild(newNote);
      }
      else { // IF SPACE NOTE
        newNote.style.transform = `translate(calc(${note_spacing} * 2.5rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px) + (16px - 1px))`;
        baseMusicLine.appendChild(newNote);
      }
    }


    if (noteVal == num2_noteVal) {
      // Determine # of lines and spaces to traverse:
      [num_of_spaces, num_of_lines] = [(note2_rawVal - (Math.floor(note2_rawVal / 2))), (Math.floor(note2_rawVal / 2))];
      

      // Render Note:
      let newNote = document.createElement('span');
      newNote.className = 'note';
      newNote.id = 'note2';

      if (note2_rawVal % 2 == 0) {
        newNote.style.transform = `translate(calc(${note_spacing} * 5rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px))`;
        baseMusicLine.appendChild(newNote);
      }
      else {
        newNote.style.transform = `translate(calc(${note_spacing} * 5rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px) + (16px - 1px))`;
        baseMusicLine.appendChild(newNote);
      }
    }


    if (noteVal == num3_noteVal) {
      // Determine # of lines and spaces to traverse:
      [num_of_spaces, num_of_lines] = [(note3_rawVal - (Math.floor(note3_rawVal / 2))), (Math.floor(note3_rawVal / 2))];
      

      // Render Note:
      let newNote = document.createElement('span');

      newNote.className = 'note';
      newNote.id = 'note3';

      if (note3_rawVal % 2 == 0) {
        newNote.style.transform = `translate(calc(${note_spacing} * 7.5rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px))`;
        baseMusicLine.appendChild(newNote);
      }
      else {
        newNote.style.transform = `translate(calc(${note_spacing} * 7.5rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px) + (16px - 1px))`;
        baseMusicLine.appendChild(newNote);
      }
    }

    
    if (noteVal == num4_noteVal)  {
      // Determine # of lines and spaces to traverse:
      [num_of_spaces, num_of_lines] = [(note4_rawVal - (Math.floor(note4_rawVal / 2))), (Math.floor(note4_rawVal / 2))];
      

      // Render Note:
      let newNote = document.createElement('span');

      newNote.className = 'note';
      newNote.id = 'note4';

      if (note4_rawVal % 2 == 0) {
        newNote.style.transform = `translate(calc(${note_spacing} * 10rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px))`;
        baseMusicLine.appendChild(newNote);
      }
      else {
        newNote.style.transform = `translate(calc(${note_spacing} * 10rem), calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px) + (16px - 1px))`;
        baseMusicLine.appendChild(newNote);
      }
    }
    
  }


  return answers;
}




function checkAnswers(answerArray) {
  buttonA.addEventListener("click", () => (console.log("Hello")))
}







// ---------------------------------------------------------------------------------------------------------------------------
// Main: 

function trebleStart() {
  let answerArray = renderNotes();
  checkAnswers(answerArray);
}


trebleStart();














