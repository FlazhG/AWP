let img=  document.querySelector('img');



fetch('Geo97.jpg')
.then(resp=>resp.blob())
.then(imagen=>{
var imgPath = URL.createObjectURL(imagen);
img.src = imgPath;
});
