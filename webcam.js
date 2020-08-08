var video = document.querySelector("#videoElement");
var button = document.getElementById("webcam-button");
var open = false;
button.addEventListener("click", function () {
    open = !open;
    if (!open) {
        video.srcObject = null;
    }
    open ? (button.innerHTML = "close") : (button.innerHTML = "open");
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: open })
            .then(function (stream) {
            video.srcObject = stream;
        })["catch"](function (err0r) {
            console.log("Something went wrong!");
        });
    }
    console.log(open);
});
