const VideoElement = document.getElementById("video");
const button = document.getElementById("button");

//prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    VideoElement.srcObject = mediaStream;
    VideoElement.onloadedmetadata = () => {
      VideoElement.play();
    };
  } catch (error) {
    //catch error here
    console.log("Whoops, error here:", error);
  }
}

//onLoad
selectMediaStream();
