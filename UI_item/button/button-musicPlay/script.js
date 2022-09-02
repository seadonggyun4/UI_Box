document.querySelectorAll('.play-pause-button').forEach(button => {
    button.addEventListener('click', e => {
        if(button.classList.contains('playing')) {
            button.classList.remove('paused', 'playing');
            button.classList.add('paused');
        } else {
            if(button.classList.contains('paused')) {
                button.classList.add('playing');
            }
        }
        if(!button.classList.contains('paused')) {
            button.classList.add('paused');
        }
    });
});