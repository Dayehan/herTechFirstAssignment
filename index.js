const firstImage = document.getElementById("image1");
const secondImage = document.getElementById('image2');
const thirdImage = document.getElementById('image3');
const fourthImage = document.getElementById('image4');
const fifthImage = document.getElementById('image5');
const sixthImage = document.getElementById('image6');
const seventhImage = document.getElementById('image7');
const eightImage= document.getElementById('image8');
const ninthImage = document.getElementById('image9');
const tenthImage = document.getElementById('image10');
const eleventhImage= document.getElementById('image11');
const twelfthImage= document.getElementById('image12');

firstImage.addEventListener('click', (e) => {
    e.target.style.background = "brown";
    e.target.style.color ='rgb(179,131,91)';
})
secondImage.addEventListener('click', (e) => {
    e.target.style.background = "hsl(219,69%,19%)";
    e.target.style.color ='white';
})
thirdImage.addEventListener('click', (e) => {
    e.target.style.background = "hsl(30,74%,60%)";
    e.target.style.color ='hsl(31,26%,75%)';
})
fourthImage.addEventListener('click', (e) => {
    e.target.style.background = "hsl(36,44%,41%)";
    e.target.style.color ='hsl(35,5%,56%)';
})
fifthImage.addEventListener('click', (e) => {
    e.target.style.background = "hsl(9,37%,14%)";
    e.target.style.color ='hsl(1,54%,37%)';
})
sixthImage.addEventListener('click', (e) => {
    e.target.style.background = "rgb(212,149,136";
    e.target.style.color ='rgb(253,200,36)';
})
seventhImage.addEventListener('click', (e) => {
    e.target.style.background = "rgb(76,74,68)";
    e.target.style.color ='hsl(229,45%,46%)';
})
eightImage.addEventListener('click', (e) => {
    e.target.style.background = "hsl(22,33%,37%)";
    e.target.style.color ='rgb(192,192,189)';
})
ninthImage.addEventListener('click', (e) => {
    e.target.style.background = "hsl(30,25%,56%)";
    e.target.style.color ='hsl(216,58%,26%)';
})
tenthImage.addEventListener('click', (e) => {
    e.target.style.background = "black";
    e.target.style.color ='rgb(137,129,120)';
})
eleventhImage.addEventListener('click', (e) => {
    e.target.style.background = "hsl(356,32%,57%)";
    e.target.style.color ='pink';
})
twelfthImage.addEventListener('click', (e) => {
    e.target.style.background = "silver";
    e.target.style.color ='rgb(233,153,157)';
})