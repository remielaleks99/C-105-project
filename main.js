Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
};

console.log("ml5 Version: ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/74JU7cN-E/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded Successfully!");
};
function check() {
    img = document.getElementById("selfie_image");
    classifier.classify(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_objectname").innerHTML = results[0].label;
        document.getElementById("result_objectaccuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}