async function getWebCamUser(){
		try{
				const videoSrc=await navigator.mediaDevices.getUserMedia({video:true});
				var video=document.getElementById("user_camlive");
				video.srcObject=videoSrc;
		}catch(e){
				console.log(e);
		}
}
getWebCamUser();
async function getWebCamPeer(){
		try{
				const videoSrc=await navigator.mediaDevices.getUserMedia({video:true});
				var video=document.getElementById("peer_camlive");
				video.srcObject=videoSrc;
		}catch(e){
				console.log(e);
		}
}
getWebCamPeer();
