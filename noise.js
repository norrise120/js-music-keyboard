const notesHash = {
  'a': 'aAudio',
  'b': 'bAudio',
  'c': 'cAudio',
  'd': 'dAudio',
  'e': 'eAudio',
  'f': 'fAudio',
  'g': 'gAudio',
};

$(document).ready( function() {
  $('button').click( function() {
    let noteLetter = this.getAttribute("class");
    noteLetter = noteLetter.split(' ')[1];
    
    const audio = document.getElementById(notesHash[noteLetter]);
    audio.play();
    audio.currentTime = 0
  })
});
