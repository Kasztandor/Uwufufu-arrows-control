document.addEventListener("keydown", (event) => {
	var x = -1
	if (event.isComposing || event.keyCode === 37){
		x = 0
	}
	else if (event.isComposing || event.keyCode === 39){
		x = 1
	}
	if (x!=-1 && document.querySelectorAll(".selection-image").length==2){
		document.querySelectorAll(".selection-image")[x].click()
	}
	else if (x!=-1 && document.querySelectorAll(".selection-video__button").length==2){
		document.querySelectorAll(".selection-video__button")[x].click()
	}
})