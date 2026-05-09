// Just de-blur the background the further down you go;
// make it look just a little more professional!
const MAX_BLUR_SIZE = 6.0;
const MAX_EXTRA_SCALE = 0.1;
function setBlur(t) {
	document.documentElement.style.setProperty("--blur-size", `${t * MAX_BLUR_SIZE}px`);
	document.documentElement.style.setProperty("--background-scale", `${1.0 + t * MAX_EXTRA_SCALE}`);
}
function calcScrollProg(element) {
	return (element.scrollTop / (element.scrollHeight - element.clientHeight));
}

scroller = document.getElementById("main-scroller");
scroller.addEventListener("scroll", (event) => {
	setBlur(1.0 - calcScrollProg(scroller));
});
setBlur(1.0 - calcScrollProg(scroller));
