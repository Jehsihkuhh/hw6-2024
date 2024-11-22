// var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

let video; 

window.addEventListener("load", function() {    
	console.log("Window is open!")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false; 
	console.log("Autoplay is " + video.autoplay)
	console.log("Loop is " + video.loop)
	console.log()
	});

document.querySelector("#play").addEventListener("click", function(){
	video.play()
	console.log("play video")
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
	});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down video")
	video.playbackRate *= 0.90
	console.log("New speed is " + video.playbackRate)
	console.log("Speed is ", video.playbackRate)
});
