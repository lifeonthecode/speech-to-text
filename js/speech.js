// get all html element 
const startSpeech = document.getElementById('startBtn');
const endSpeech = document.getElementById('endBtn');
const selectLang = document.getElementById('lang');
const outputSpeech = document.getElementById('output');
const character = document.getElementById('character');


// declare variable 
let content = "";
let speechRecognitionIsOn = false;


// speechRecognition api 
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.continuous = false;


// startSpeech click event function. this is work  recognition start
startSpeech.addEventListener('click', () => {
    // active  style 
    startSpeech.style.backgroundColor = 'crimson';
    startSpeech.style.color = 'white';

    //active remove endSpeech button style 
    endSpeech.style.backgroundColor = '';
    endSpeech.style.color = '';

    // speechRecognitionIsOn set true
    speechRecognitionIsOn = true;

    // language select 
    recognition.lang = selectLang.value; 

    // click and start recognition 
    recognition.start();
});


// endSpeech click event function. this is work recognition stop 
endSpeech.addEventListener('click', () => {

    //active  endSpeech button style 
    endSpeech.style.backgroundColor = 'crimson';
    endSpeech.style.color = 'white';

    // active remove  style 
    startSpeech.style.backgroundColor = '';
    startSpeech.style.color = '';

    // speechRecognitionIsOn set false
    speechRecognitionIsOn = false;


    // click and stop recognition 
    recognition.stop();

    // clear textarea value 
    outputSpeech.value = "";

});


// recognition onstart function 
recognition.onstart = () => {
    if(content.length) {
        content = " ";
    }
}


// recognition onend function 
recognition.onend = () => {
    if(speechRecognitionIsOn) {
        recognition.start();
    }
};


// recognition onerror function 
recognition.onerror = (event) => {
    console.log('speech recognition error detected:  '+event.error);
};


// recognition onresult function 
recognition.onresult = (event) => {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;

    // set content data
    content += transcript;
    console.log(content);

    // set textarea value 
    outputSpeech.value += " " + content;

    // outputSpeech value length in set character 
    character.innerHTML = outputSpeech.value.length - 1;
} 






