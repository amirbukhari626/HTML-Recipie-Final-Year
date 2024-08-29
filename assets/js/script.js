document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".site-responsive-menu");
    const subMenu = document.querySelector(".site-responsive-sub-menu");

    menuButton.addEventListener("click", function() {
        const currentTransform = getComputedStyle(subMenu).transform;

        if (currentTransform === "matrix(1, 0, 0, 1, 0, 0)") { // translateX(0px)
            subMenu.style.transform = "translateX(-160px)";
            subMenu.style.width = ""; // Reset width
        } else {
            subMenu.style.transform = "translateX(0px)";
            subMenu.style.width = "400px"; // Set width to 400px
        }
    });

    
});
