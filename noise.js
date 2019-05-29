const notes = {
  'a': 'aAudio',
  'b': 'bAudio',
  'c': 'cAudio',
  'd': 'dAudio',
  'e': 'eAudio',
  'f': 'fAudio',
  'g': 'gAudio',
};

const playNote = (letter) => {
  const audio = document.getElementById(notes[letter]);
  audio.play();
  audio.currentTime = 0
}

$(document).ready( function() {
  $('button').click( function() {
    let noteLetter = this.getAttribute("class");
    noteLetter = noteLetter.split(' ')[1];
    
    playNote(noteLetter);
  })

  $('body').keydown(function(event) {
    let noteLetter = event.key 

    playNote(noteLetter);
  })
});
