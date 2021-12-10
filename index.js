var button1= document.getElementById("h1")
var button2=document.getElementById("h2")
var button3=document.getElementById("h3")
var button4=document.getElementById("h4")
var song1=document.getElementById("mysong1")
var song2=document.getElementById("mysong2")
var song3=document.getElementById("mysong3")
var song4=document.getElementById("mysong4")
var video1=document.getElementById("video0")
var video2=document.getElementById("video1")
var video3=document.getElementById("video2");

button1.onclick=function(){
  if(song1.paused){
    song1.play()
    video1.src="v1.mp4"
  }
  else{
    song1.pause()
    video1.pause()
  }
}
button2.onclick=function(){
  if(song2.paused){
    song2.play()
    video3.src="v1.mp4"
    
  }
  else{
    song2.pause()
   
  }
}
  button3.onclick=function(){
    if(song3.paused){
      song3.play()
      video3.src="v2.mp4"
    }
    else{
      song3.pause()
    }
  }
  button4.onclick=function(){
    if(song4.paused){
      song4.play()
    }
    else{
      song4.pause()
    }
  }

  
