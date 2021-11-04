/*self.addEventListener('fetch',event =>{
    if(event.request.url.includes('style.css')){
        event.respondWith(null);
    }
    else{
        event.respondWith(fetch(event.request));
    }
});
*/
self.addEventListener('fetch',event =>{
    if(event.request.url.includes('.jpg')){
    event.respondWith(fetch('img/cuervillos.jpg'));   
    
        /*let fotoreq = fetch('img/Geo97.jpg')
   event.respondWith(fotoreq);*/
    }
});

self.addEventListener('fetch',event =>{
    if(event.request.url.includes('mazda4.jpg')){
    event.respondWith(fetch('img/mazda4.jpg'));   
    
        /*let fotoreq = fetch('img/mazda4.jpg')
   event.respondWith(fotoreq);*/
    }
});

self.addEventListener('fetch',event =>{
    if(event.request.url.includes('fiesta.jpg')){
    event.respondWith(fetch('img/fiesta.jpg'));   
    
        /*let fotoreq = fetch('img/mazda4.jpg')
   event.respondWith(fotoreq);*/
    }
});

