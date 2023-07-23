
const buttonHome = document.getElementById("button-home");
const pHome = document.getElementById("p-home");

const buttonAbout = document.getElementById("button-about");
const pAbout = document.getElementById("p-about");

const buttonSetting = document.getElementById("button-setting");
const pSetting = document.getElementById("p-setting");

const buttonMenu = document.getElementById("button-menu");
const pMenu = document.getElementById("p-menu");


buttonHome.addEventListener("mouseover", (e) => {
    pHome.style.opacity = 1;
})
buttonHome.addEventListener("mouseout", (e) => {
    pHome.style.opacity = 0;
})

buttonAbout.addEventListener("mouseover", (e) => {
    pAbout.style.opacity = 1;
})
buttonAbout.addEventListener("mouseout", (e) => {
    pAbout.style.opacity = 0;
})

buttonSetting.addEventListener("mouseover", (e) => {
    pSetting.style.opacity = 1;
})
buttonSetting.addEventListener("mouseout", (e) => {
    pSetting.style.opacity = 0;
})

buttonMenu.addEventListener("mouseover", (e) => {
    pMenu.style.opacity = 1;
})
buttonMenu.addEventListener("mouseout", (e) => {
    pMenu.style.opacity = 0;
})

buttonHome.addEventListener("click", (e) => {
    buttonHome.style.animationName = "destello";

    setTimeout(() => {
        buttonHome.style.animationName = "none";
    }, 400);
})

buttonAbout.addEventListener("click", (e) => {
    buttonAbout.style.animationName = "destello";

    setTimeout(() => {
        buttonAbout.style.animationName = "none";
    }, 400);
})

buttonSetting.addEventListener("click", (e) => {
    buttonSetting.style.animationName = "destello";

    setTimeout(() => {
        buttonSetting.style.animationName = "none";
    }, 400);
})

buttonMenu.addEventListener("click", (e) => {
    buttonMenu.style.animationName = "destello";

    setTimeout(() => {
        buttonMenu.style.animationName = "none";
    }, 400);
})