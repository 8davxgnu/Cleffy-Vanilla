// Declare document elements needed:
const baseMusicLine = document.getElementById('baseLine');
const currentNoteShader = document.getElementById('currentNoteBg');
let currentNoteShadingTransform = currentNoteShader.style.transform;

const buttons = {
  "A": document.getElementById("noteA"),
  "B": document.getElementById("noteB"),
  "C": document.getElementById("noteC"),
  "D": document.getElementById("noteD"),
  "E": document.getElementById("noteE"),
  "F": document.getElementById("noteF"),
  "G": document.getElementById("noteG")
};

// Create the key from which we will use with note values to determine notes on lines:
let noteKey = {
  0 : "C",
  1 : "D",
  2 : "E",
  3 : "F",
  4 : "G",
  5 : "A",
  6 : "B"
};

const note_spacing = 4;
let answerArray = [];
let currentNoteIndex = 0;
let answerArrayLength = 4;

function renderNotes() {
  // Generate note nums:
  let note1_rawVal = Math.floor(Math.random() * 13);
  let note2_rawVal = Math.floor(Math.random() * 13);
  let note3_rawVal = Math.floor(Math.random() * 13);
  let note4_rawVal = Math.floor(Math.random() * 13);

  // Determine corresponding noteKey index for each note via modulo result:
  let num1_noteVal = (note1_rawVal % 7);
  let num2_noteVal = (note2_rawVal % 7);
  let num3_noteVal = (note3_rawVal % 7);
  let num4_noteVal = (note4_rawVal % 7);

  // Create Array with current iteration's correct Answers:
  answerArray = [noteKey[num1_noteVal], noteKey[num2_noteVal], noteKey[num3_noteVal],noteKey[num4_noteVal],];
  console.log(answerArray);

  // Render and translate the Notes on the music lines:
  for (let noteVal in noteKey) {
    if (noteVal == num1_noteVal) {
      // console.log(`Raw Note1 Value: ${note1_rawVal} | Note1: ${noteKey[noteVal]}`);


      // Determine # of lines and spaces to traverse:
      [num_of_spaces, num_of_lines] = [(note1_rawVal - (Math.floor(note1_rawVal / 2))), (Math.floor(note1_rawVal / 2))];
      // console.log(`Note1 Spaces: ${num_of_spaces} | Note1 Lines: ${num_of_lines}`);
      

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
}


function checkAnswer() {
  let note1 = document.getElementById('note1');
  let note2 = document.getElementById('note2');
  let note3 = document.getElementById('note3');
  let note4 = document.getElementById('note4');
  let currentRenderedNotes = [note1, note2, note3, note4];

  // console.log(currentNoteIndex);


  // Check if correct Note Button Pressed:
  if (this.textContent == answerArray[currentNoteIndex]) {
    console.log("CORRECT!");
    // console.log(answerArray);

    currentRenderedNotes[currentNoteIndex].style.backgroundColor = 'green';
    
  } else {
    console.log("WRONG!");
    // console.log(answerArray);

    currentRenderedNotes[currentNoteIndex].style.backgroundColor = 'red';
  }


  // Increment currentNote counter to check for next available note:
  currentNoteIndex++;



  // Reset CurrentNoteIndex once user has submitted answer for each note and begin new iteration:
  if (currentNoteIndex >= answerArrayLength) {
    // Reset Note Index Counter:
    currentNoteIndex = 0;

    // Remove event listeners (so users cant modify currentNoteIndex during timeout)):
    Object.keys(buttons).forEach(note => {
      buttons[note].removeEventListener("click", checkAnswer);
    });

    setTimeout(()=>{
      
    // Delete rendered notes
    while (baseMusicLine.firstChild) {
      baseMusicLine.removeChild(baseMusicLine.firstChild);
    }

    // Render new iteration of notes
    renderNotes();

    // Re-add event listeners
    Object.keys(buttons).forEach(note => {
      buttons[note].addEventListener("click", checkAnswer);
    });

    // Shift currentNoteBg back to start Position:
    currentNoteShader.style.transform = `translate(calc(var(--note-spacing) * 2.5rem * ${currentNoteIndex + 1} - 2 * (var(--note-dimension)) + (var(--note-dimension) / 2)), 0)`;

    }, 500);
  }
  else {
    // Shift currentNote Shading:
    currentNoteShader.style.transform = `translate(calc(var(--note-spacing) * 2.5rem * ${currentNoteIndex + 1} - 2 * (var(--note-dimension)) + (var(--note-dimension) / 2)), 0)`;
  }
}




// Main: 
renderNotes();

// Add event listeners
Object.keys(buttons).forEach(note => {
  buttons[note].addEventListener("click", checkAnswer);
});