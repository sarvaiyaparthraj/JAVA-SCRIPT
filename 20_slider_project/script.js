const photo = [
"https://i.pinimg.com/control1/736x/f3/0a/1c/f30a1cd9f258fe356a8e7855abddac36.jpg",
"https://i.pinimg.com/736x/01/b5/bc/01b5bc282d75a0b324f37bcbc9c5789c.jpg",
"https://i.pinimg.com/736x/df/11/13/df11137f7ea78702571c15bccc691eb6.jpg",
"https://i.pinimg.com/control1/736x/07/03/9b/07039b6d92d1fedad474f289de8de2aa.jpg",
"https://i.pinimg.com/1200x/68/cd/68/68cd68d16d4f1f85778c8b3090cc089d.jpg",
"https://i.pinimg.com/1200x/36/b6/2b/36b62bb084b71019d2599a14ba638acd.jpg",
"https://i.pinimg.com/736x/97/69/01/976901809bbc67000ce284ee016029a3.jpg",
"https://i.pinimg.com/736x/d2/dd/cf/d2ddcf13a3b26850b3de023908de7aaf.jpg",
"https://i.pinimg.com/control1/1200x/e0/92/40/e09240498fbf942934a46d6e1b420f37.jpg",
"https://i.pinimg.com/736x/3f/11/15/3f11158249cdc83f734ccc2e5795d923.jpg",
"https://i.pinimg.com/736x/f9/e6/43/f9e643f96e32cdfcc29be882b5cf3338.jpg",
"https://i.pinimg.com/736x/48/2b/98/482b9849109b82dd5b1b6136f2f4a719.jpg",
"https://i.pinimg.com/1200x/3f/3d/04/3f3d04c11a5ccbe4e660fdfb11dfc26b.jpg",
"https://i.pinimg.com/736x/d8/ec/2f/d8ec2f901aa4e993beddd1f3b11f345a.jpg",
"https://i.pinimg.com/736x/d2/26/09/d22609efc42984ac31068cafc8f9427b.jpg"
];

let btnPri = document.getElementById("pri");
let btnNext = document.getElementById("next");
let photoImg = document.getElementById("img");

let index = 0;


photoImg.src = photo[index];

function priIMG() {
    index--;

    if (index < 0) {
        index = photo.length - 1;
    }

    photoImg.src = photo[index];
}


function nextIMG() {
    index++;

    if (index >= photo.length) {
        index = 0;
    }

    photoImg.src = photo[index];
}


btnPri.addEventListener("click", priIMG);
btnNext.addEventListener("click", nextIMG);


setInterval(() => {
    nextIMG();
}, 2000);