document.querySelectorAll("img")[0].setAttribute("src", "./images/dice6.png")
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png")
document.querySelectorAll("img")[2].setAttribute("src", "./images/dice6.png")
var random_1 = Math.floor(Math.random() * 6) + 1;
var random_2 = Math.floor(Math.random() * 6) + 1;
var random_3 = Math.floor(Math.random() * 6) + 1;
var total = random_1 + random_2 + random_3;
var fromBack = 15 - total;
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + random_1 + ".png")
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + random_2 + ".png")
document.querySelectorAll("img")[2].setAttribute("src", "./images/dice" + random_3 + ".png")
if (total == 17) {
    document.querySelector("h2").textContent = total + ":拿左邊第一跟第二個";
} else if (total == 16) {
    document.querySelector("h2").textContent = total + ": 拿左邊最後一個跟對家第一個";
} else if (total % 4 == 0 && fromBack <= 6) {
    document.querySelector("h2").textContent = total + ": 左邊拿完剩" + (fromBack);
} else if (total % 4 == 0) {
    document.querySelector("h2").textContent = total + ": 左邊" + total;
} else if (total % 4 == 1 && fromBack <= 6) {
    document.querySelector("h2").textContent = total + ": 自己拿完剩" + (fromBack);
} else if (total % 4 == 1) {
    document.querySelector("h2").textContent = total + ": 自己" + total;

} else if (total % 4 == 2 && fromBack <= 6) {
    document.querySelector("h2").textContent = total + ": 右邊拿完剩" + (fromBack);
} else if (total % 4 == 2) {
    document.querySelector("h2").textContent = total + ": 右邊" + total;
} else if (total % 4 == 3 && fromBack <= 6) {
    document.querySelector("h2").textContent = total + ": 對面拿完剩" + (fromBack);
} else {
    document.querySelector("h2").textContent = total + ": 對面" + total;
}
if (random_1 == random_2 && random_2 == random_3 && random_1 == random_3) {
    document.querySelector("h3").textContent = "豹子";
}
if ((random_1 == random_2 + 1 && random_2 == random_3 + 1) || (random_1 == random_2 + 1 && random_3 == random_1 + 1) || (random_2 == random_1 + 1 && random_3 == random_2 + 1)) {
    document.querySelector("h3").textContent = "骰規";
} else if ((random_2 == random_3 + 1 && random_3 == random_1 + 1) || (random_2 === random_1 + 1 && random_1 == random_3 + 1) || (random_1 == random_3 + 1 && random_3 == random_2 + 1)) {
    document.querySelector("h3").textContent = "骰規";
}


document.querySelector("")