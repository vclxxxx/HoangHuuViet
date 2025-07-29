document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.querySelector('.hearts-container');
    const character = document.querySelector('.character');
    
    const messages = [
        "Hello!",
        "I love you!",
        "Be mine!",
        "You're cute!",
        "Hugs!",
        "Kisses!",
        "Sweet!",
        "Adorable!",
        "Cutie!",
        "Lovely!"
    ];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        const text = document.createElement('div');
        text.classList.add('heart-text');
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        text.textContent = randomMessage;
        
        heart.appendChild(text);
        
        const characterRect = character.getBoundingClientRect();
        const startX = characterRect.right - 50;
        const startY = characterRect.top + characterRect.height / 2;
        
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        
        heartsContainer.appendChild(heart);
        
        const deltaX = (Math.random() * 200 + 100); // 100-300px
        const deltaY = -(Math.random() * 200 + 100); // -100 to -300px
        
        const animation = heart.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${deltaX}px, ${deltaY}px)`, opacity: 0 }
        ], {
            duration: 2000,
            easing: 'linear',
            fill: 'forwards'
        });
        
        animation.onfinish = () => {
            heart.remove();
        };
    }
    
    setInterval(createHeart, 1000);
});