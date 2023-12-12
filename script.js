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
    document.body.style.backgroundImage = "url(img/xp/sfondo-xp.jpg)";
    document.body.style.backgroundSize = "1420px";
})

itemDue.addEventListener("mouseout",() => {
    document.body.style.backgroundImage="none";
})

itemTre.addEventListener("mouseover", () => {
    document.body.style.backgroundImage = "url(img/port/oriz1.jpg)";
    document.body.style.backgroundSize = "1440px";
})

itemTre.addEventListener("mouseout",() => {
    document.body.style.backgroundImage="none";
})




// elements
var elements_to_watch = document.querySelectorAll('.watch');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});




