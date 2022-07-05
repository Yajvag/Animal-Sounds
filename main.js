main.js
function startClassification() {
    navigator.mediaDevices.getUserMedia({  audio: true});
    classifier = mlf.soundClassifier('https://teachablemachine.withgoogle.com/models/HLCUM1iwy/model.json',modelLoaded);
}