const baseMusicLine = document.getElementById('baseLine');

// -----------------------------------------------------------
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
*/
// -----------------------------------------------------------------------------------------------------------

let noteKey = {
  0 : "C",
  1 : "D",
  2 : "E",
  3 : "F",
  4 : "G",
  5 : "A",
  6 : "B"
}



// for (let key in noteKey) {
//   console.log(key + " " + (noteKey[key]));
// }


// -----------------------------------------------------------
while (true) {
  // Generate note nums:
  note1_rawVal = Math.floor(Math.random() * 12);
  




  // ---------------------------------------
  // Determine corresponding noteKey index for each note via modulo result:
  num1_noteVal = (note1_rawVal % 7);


  // ---------------------------------------
  for (let noteVal in noteKey) {
    if (noteVal == num1_noteVal) {
      console.log(`Raw Note Value: ${note1_rawVal} | Note: ${noteKey[noteVal]}`);
    
      // Determine # of lines and spaces to traverse:
      [num_of_spaces, num_of_lines] = [(note1_rawVal - (Math.floor(note1_rawVal / 2))), (Math.floor(note1_rawVal / 2))];
      console.log(`spaces: ${num_of_spaces} | Lines: ${num_of_lines}`);
      
      // Render Note:
      let newNote = document.createElement('span');

      newNote.className = 'note';
      
      if (note1_rawVal % 2 == 0) {
        newNote.style.transform = `translate(0px, calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px))`;
        baseMusicLine.appendChild(newNote);
      }
      else {
        newNote.style.transform = `translate(0px, calc(1px - (33px/2) - (${(num_of_spaces)} * 32px) - (${num_of_lines} * 1px) + (16px - 1px))`;
        baseMusicLine.appendChild(newNote);
      }
    }

    
  }
















  
  break;




}























