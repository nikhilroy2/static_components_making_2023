let box = document.querySelector('.box');

box.onmousedown = function (e) {
    console.log(e)
    moveFunc(true);
}
window.onmouseup = function(e){
    moveFunc(false)
}

function moveFunc(_isReady) {
    if (_isReady) {
        window.onmousemove = function (event) {
            if(_isReady){
                //console.log('move', event.target.contains(box));
                if(!event.target.contains(box)){
                    alert('stop')
                }
                box.setAttribute('style', `top: ${event.pageY}px; left: ${event.pageX}px`)
            } else {
               
            }
        }
    };
}