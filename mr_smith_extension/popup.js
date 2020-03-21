(function () {
    const btnS1 = document.getElementById("btnS1");
    const btnS2 = document.getElementById("btnS2");
    const video = document.getElementById("video");
    
    btnS1.addEventListener('click', e=> {
        console.log('Series 1');
        video.src = 'videos/s1.mp4';
    });
    
    btnS2.addEventListener('click', e=> {
        video.src = 'videos/s2.mp4'
        console.log('Series 2');
    });

})();