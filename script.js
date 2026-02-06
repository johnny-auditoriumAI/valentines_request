document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('no-btn');
    
    noBtn.addEventListener('click', function() {
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
});
