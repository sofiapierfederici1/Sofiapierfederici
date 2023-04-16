let item = document.querySelector('.uno');
let itemDue = document.querySelector('.due');
let itemTre = document.querySelector('.tre');

item.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = "url(img/tomyF/oriz2.jpg)";
    document.body.style.backgroundSize = "1500px";
})

item.addEventListener("mouseout",() => {
    document.body.style.backgroundImage="none";
})

itemDue.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = "url(img/xp/xp-web.jpg)";
    document.body.style.backgroundSize = "1450px";
})

itemDue.addEventListener("mouseout",() => {
    document.body.style.backgroundImage="none";
})

itemTre.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = "url(img/port/oriz2.jpg)";
    document.body.style.backgroundSize = "1450px";
})

itemTre.addEventListener("mouseout",() => {
    document.body.style.backgroundImage="none";
})




