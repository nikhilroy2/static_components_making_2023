let my_text = document.querySelector('#my_text');
my_text.innerHTML = my_text.textContent.replace(/\S/g, `<span>$&</span>`);
let my_text_all = document.querySelectorAll('#my_text span');


my_text_all.forEach((v,i)=> {
    v.style = `--r: ${i}`
})

document.body.onmousemove = function(e){
    let x = e.pageX;
    let y = e.pageY;
    my_text.style = `top: ${y-100}px; left: ${x-100}px`
}