//https://teachablemachine.withgoogle.com/models/VIybRzV9R/

var cat = 0;
var dog = 0;
var lion = 0;
var snake = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace'; 
    }
        img = document.getElementById("image");
    
        if(results[0].label == "Barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://th.bing.com/th/id/R.ed424ce7e8aa8e8ea5909c5ec394be07?rik=Q5S23Xusd9rU%2bQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fXXX%2fKTjXXX8gc.gif&ehk=KUdjPcBBkT%2fjY0VxirZWUyUob6J0qb5M73sJqKYFXbA%3d&risl=&pid=ImgRaw&r=0";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Hissing"){
            img.src = "https://media4.giphy.com/media/8vt1hudTbLfg148hFL/200w.webp?cid=ecf05e478tqr2tpweqwht986k8npvqu7dccd5qjcpx45edmc&rid=200w.webp&ct=g";
            snake = snake+1;
            document.getElementById("detected").innerHTML = "Detected snake - "+ snake;
        }}