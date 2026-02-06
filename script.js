document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const slideshow = document.getElementById('slideshow');
    const slideshowImg = document.getElementById('slideshow-img');
    
    // All the photos in our folder
    const photos = [
        'Photos/Me%20and%20Anika%20Photos/20250128_213832.jpg',
        'Photos/Me%20and%20Anika%20Photos/20250301_015333.jpg',
        'Photos/Me%20and%20Anika%20Photos/20250504_022028.jpg',
        'Photos/Me%20and%20Anika%20Photos/20251011_171623.jpg',
        'Photos/Me%20and%20Anika%20Photos/20251012_192937.jpg',
        'Photos/Me%20and%20Anika%20Photos/20251027_135050.jpg',
        'Photos/Me%20and%20Anika%20Photos/20260111_000154.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250214-WA0004.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250214-WA0006.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250326-WA0000.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250326-WA0007.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250326-WA0008.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0064.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0068.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0135.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0137.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0138.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0154.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0193.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0194.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20250504-WA0195.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20251008-WA0034.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20251025-WA0018.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20251027-WA0000.jpeg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20251030-WA0060.jpeg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20251111-WA0000.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20251201-WA0052.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20260111-WA0031.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20260111-WA0032.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20260121-WA0006.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20260121-WA0008.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20260121-WA0009.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20260121-WA0011.jpg',
        'Photos/Me%20and%20Anika%20Photos/IMG-20260121-WA0017.jpg'
    ];
    
    const noPhrases = [
        "Are you sure?",
        "Are you REALLY sure?",
        "Think about this...",
        "Please reconsider!",
        "Don't do this to me!",
        "My heart can't take it!",
        "You're breaking my heart!",
        "Give me a chance?",
        "Pretty please?",
        "I'll be sad forever!",
        "Wrong answer!",
        "Try again!"
    ];
    
    let phraseIndex = 0;
    let yesScale = 1;
    
    noBtn.addEventListener('click', function() {
        // Change button text to a random phrase
        noBtn.textContent = noPhrases[phraseIndex % noPhrases.length];
        phraseIndex++;
        
        // Grow the Yes button by 10%
        yesScale += 0.1;
        yesBtn.style.transform = `scale(${yesScale})`;
        
        moveButton();
    });
    
    function moveButton() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;
        
        // Calculate random position within viewport, leaving some margin
        const margin = 50;
        const randomX = Math.random() * (windowWidth - btnWidth - margin * 2) + margin;
        const randomY = Math.random() * (windowHeight - btnHeight - margin * 2) + margin;
        
        // Set position to fixed and move to random location
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
    
    // Yes button click - start photo slideshow
    yesBtn.addEventListener('click', function() {
        startSlideshow();
    });
    
    function startSlideshow() {
        slideshow.classList.add('active');
        let currentIndex = 0;
        
        // Show first photo immediately
        slideshowImg.src = photos[currentIndex];
        
        // Rapidly cycle through photos (300ms each)
        const interval = setInterval(function() {
            currentIndex++;
            
            if (currentIndex >= photos.length) {
                // All photos shown, stop and show final message
                clearInterval(interval);
                showFinalMessage();
                return;
            }
            
            // Trigger animation by resetting the element
            slideshowImg.style.animation = 'none';
            slideshowImg.offsetHeight; // Force reflow
            slideshowImg.style.animation = 'photoEnter 0.15s ease-out';
            slideshowImg.src = photos[currentIndex];
        }, 300);
    }
    
    function showFinalMessage() {
        const content = document.querySelector('.slideshow-content');
        content.innerHTML = `
            <h2 class="slideshow-title">I Love You! 💕</h2>
            <p style="font-size: 24px; color: white; text-shadow: 1px 1px 3px rgba(0,0,0,0.3); margin-top: 20px;">
                Happy Valentine's Day, Shortcake! ❤️
            </p>
            <div style="font-size: 80px; margin-top: 30px;">💖💕💝💗💓</div>
        `;
    }
});
