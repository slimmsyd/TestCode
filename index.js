const video = document.getElementById("video-ele")

const body = document.getElementsByTagName("body")

function click() { 
    console.log(video)
    console.log("hellloo")
}

$(body).on('click touchstart', function() { 
    const video = document.getElementById("video-ele")
        if(video.playing) { 
            
        }else { 
            video.play()
        }
})

