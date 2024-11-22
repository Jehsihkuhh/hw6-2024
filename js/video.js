let video; 

window.addEventListener("load", function() {    
	console.log("Window is open!")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false; 
	console.log("Autoplay is " + video.autoplay);
	console.log("Loop is " + video.loop);
	console.log();
	});

document.querySelector("#play").addEventListener("click", function(){
	video.play();
	console.log("play video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("pause video");
	});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("slow down video");
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate);
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up video");
	video.playbackRate *= (1/0.90);
	console.log("New speed is " + video.playbackRate);
	console.log("Speed is ", video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip ahead 10 seconds");
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		console.log("restart video");
	}
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("mute video");
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
})

document.querySelector("#slider").addEventListener("change", function(){
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is ", video.volume);
})

document.querySelector("#vintage").addEventListener("click", function(){
	 	video.classList.add("oldSchool");
		console.log("Old School enabled");
})

document.querySelector("#orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
		console.log("Old School disabled");
})
