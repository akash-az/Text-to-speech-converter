let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));


};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
});
document.querySelector("button").addEventListener('click',()=>{

    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

gsap.from("h1",{
    opacity:0,
    x:100,
    duration:2,
    delay:1
});

gsap.from(".tarea,select",{
    opacity:0,
    x:-100,
    duration:2,
    delay:1.5
});

gsap.from("span,button",{
    opacity:0,
    duration:1,
    delay:3.5
});
    

