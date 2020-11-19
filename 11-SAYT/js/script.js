const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const main = document.querySelector(".main");

// Sidebar Menu Toggle
burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
});

// Close Sidebar by Click Outside


// Close Sidebar by Press Escape(ESC)
window.addEventListener("load",function() {
   this.document.getElementById('mainload').style.display ='none';
});
