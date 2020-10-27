let lastRenderTime = 0;



function main(currentTime){
    const secondLastRenderTime = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main); 
    lastRenderTime = currentTime;
    console.log(secondLastRenderTime);
}

window.requestAnimationFrame(main);
