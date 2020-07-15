    function playSound(event) {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
        if (!audio) 
            return; //stop the function from running all together
        audio.currentTime = 0; //rewind to the start
        audio.play();    
        key.classList.add('playing');
    }

    function removeTransition(event) {
        if (event.propertyName !== 'transform')
            return;  // skip it if it's not a transform
        this.classList.remove('playing');
    }
    
    // select every single key on the page, to listen to each one of them
    const keys = document.querySelectorAll('.key');
    // each key gets an event listener added to it, which is transitinend. WHen a transition is ending it will remove it
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);    