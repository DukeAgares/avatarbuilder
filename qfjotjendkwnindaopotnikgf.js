function ChangeAvatar(imageData) {
    var canvas=document.getElementsByClassName("main")[0];
    var ctx=canvas.getContext("2d");
    var img=new Image();
    img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img,0,0,canvas.width,canvas.width);
    };
    img.src=imageData;
}