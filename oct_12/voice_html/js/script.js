const speakBtn = document.getElementById('speak_btn');
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
const searchList = document.querySelector('.list_box');
recognition.onresult = function (event) {
    const result = event.results[0][0].transcript;
    // outputDiv.innerText = result;
    console.log(result);
    filterList(result)
};

speakBtn.addEventListener('click', function () {
    recognition.start();
});

recognition.onend = function() {
    recognition.start(); // Start recognition again when it ends
};

function filterList(keyword) {
    const items = searchList.querySelectorAll('li');
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(keyword.toLowerCase())) {
            item.style.display = 'none';
        } else {
            // item.style.display = 'block';
        }

        if(keyword.toLowerCase() === 'all'){
            item.style.display = 'block';
        }
        if(keyword.toLowerCase() === 'all delete'){
            item.style.display = 'none';
        }
        if(keyword.toLowerCase() === 'revert'){
            item.style.display = 'block';
        }
        if(keyword.toLowerCase() === 'bye-bye'){
            window.close();
        }
    });
}