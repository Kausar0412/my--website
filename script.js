let photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg"
];
let index = 0;
function showPhoto() {
    document.getElementById("photo").src =
        photos[index];
    document.getElementById("number").innerHTML =
        (index + 1) + "-сурет";}
function next() {
    index++;
    if (index >= photos.length) {index = 0;}
    showPhoto();}
function previous() {
    index--;
    if (index < 0) {
        index = photos.length - 1; }
    showPhoto();}