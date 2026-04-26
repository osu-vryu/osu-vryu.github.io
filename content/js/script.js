// Just de-blur the background the further down you go;
// make it look just a little more professional!
const MAX_BLUR_SIZE = 6.0;
function setBlur(t) {
	document.documentElement.style.setProperty("--blur-size", `${t * MAX_BLUR_SIZE}px`);
}
function calcScrollProg(element) {
	return (element.scrollTop / (element.scrollHeight - element.clientHeight));
}

scroller = document.getElementById("main-scroller");
scroller.addEventListener("scroll", (event) => {
	setBlur(1.0 - calcScrollProg(scroller));
});
setBlur(1.0 - calcScrollProg(scroller));
