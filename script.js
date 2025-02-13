// Typing effect for the main title
const text = "My Love For You Knows No Distance ❤️";
const typingText = document.querySelector('.typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeText);

// Floating hearts animation with multiple styles
function createHeart() {
    const heartStyles = ['❤️', '💖', '💗', '💓', '💝'];
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = heartStyles[Math.floor(Math.random() * heartStyles.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.fontSize = Math.random() * 30 + 15 + 'px';
    heart.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts more frequently
setInterval(createHeart, 200);

// Click anywhere to create burst of hearts
document.addEventListener('click', (e) => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart', 'burst-heart');
            heart.innerHTML = '❤️';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.setProperty('--angle', Math.random() * 360 + 'deg');
            document.querySelector('.floating-hearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 50);
    }
});

// Personal message reveal
document.getElementById('reveal-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('personal-message');
    const loveText = document.querySelector('.love-message');
    
    if (name.trim() === '') {
        alert('Please enter your name, my love ❤️');
        return;
    }
    
    const messages = [
        `My dearest ${name}, every moment with you is a treasure I hold close to my heart.`,
        `${name}, my love for you grows stronger with each passing day.`,
        `Sweet ${name}, you make my world complete with your beautiful smile.`
    ];
    
    loveText.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.classList.remove('hidden');
});

// Countdown timer
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 30); // Set this to your next meeting date

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
