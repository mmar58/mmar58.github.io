const phrases = [
  "Pushing the boundaries of interactive gameplay.",
  "Always exploring new technologies and innovations.",
  "Turning ideas into reality through code.",
  "Passionate developer crafting immersive experiences.",
  "Building digital playgrounds for boundless exploration.",
  "Bridging the gap between dreams and digital reality.",
  "Creating immersive experiences through interactive media.",
  "Innovating at the intersection of art and technology.",
  "Pioneering new frontiers of interactive storytelling.",
  "Coding the extraordinary experience.",
  "Mastering the art of digital craftsmanship.",
  "Designing worlds that ignite the imagination.",
  "Mastering the art of digital craftsmanship."
];
let currentPhraseIndex=-100000
// Get random phrase number
function GetRandomPhraseIndex() {
  var tempPhraseIndex= Math.floor(Math.random() * phrases.length);
  if(phrases.length>1&&tempPhraseIndex==currentPhraseIndex){
    return GetRandomPhraseIndex();
  }
  else{
    return tempPhraseIndex;
  }
}

currentPhraseIndex = GetRandomPhraseIndex();
//Parameters for the animation
var typingTimeDelay=30;
var eraseTimeDelay=40;


//End Parameters for the animation
function typePhrase(phrase, element, callback) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < phrase.length) {
      element.textContent += phrase.charAt(i);
      i++;
      setTimeout(type, typingTimeDelay);
    } else {
      setTimeout(callback, 2000);
    }
  }

  type();
}

function erasePhrase(element, callback) {
  let text = element.textContent;
  let i = text.length;

  function erase() {
    if (i > 0) {
      element.textContent = text.slice(0, i - 1);
      i--;
      setTimeout(erase, eraseTimeDelay);
    } else {
      setTimeout(callback, 500);
    }
  }

  erase();
}

function cyclePhrases() {
  const textElement = document.getElementById('dynamic-text');

  typePhrase(phrases[currentPhraseIndex], textElement, () => {
    erasePhrase(textElement, () => {
      currentPhraseIndex = GetRandomPhraseIndex();
      cyclePhrases();
    });
  });
}

cyclePhrases();