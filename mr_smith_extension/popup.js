(function () {
    const btnS1 = document.getElementById("btnS1");
    const btnS2 = document.getElementById("btnS2");
    const video = document.getElementById("video");
    
    btnS1.addEventListener('click', e=> {
        console.log('Series 1');
        video.src = 
            'https://www.youtube.com/embed/3_G3-SS0Z0k?&loop=1&playlist= 3_G3-SS0Z0k;rel=0&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;start=0;showinfo=0&amp';
        
    });
    
    btnS2.addEventListener('click', e=> {
        video.src = 
            'https://www.youtube.com/embed/HaK8Z9X-GcI?&loop=1&playlist=HaK8Z9X-GcI;rel=0&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;start=0;showinfo=0&amp'
        console.log('Series 2');
    });

})();