// Toggle functions for reorganised pages

// Simple function to jump to and expand a strategy
function jumpToStrategy(strategyId) {
    console.log('Jump to strategy:', strategyId);
    const targetCard = document.getElementById(strategyId);
    console.log('Found card:', targetCard);
    
    if (targetCard) {
        // Find the strategy header and content
        const header = targetCard.querySelector('.strategy-header');
        const content = targetCard.querySelector('.strategy-content');
        
        console.log('Found header:', header);
        console.log('Found content:', content);
        
        if (header && content) {
            // Check if it's collapsed
            if (content.style.display === 'none' || !content.style.display) {
                console.log('Expanding...');
                // Click the header to expand
                header.click();
            }
            
            // Scroll to it
            setTimeout(function() {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
}

function toggleTheoryBox(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.expand-icon');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.classList.add('rotated');
    } else {
        content.style.display = 'none';
        icon.classList.remove('rotated');
    }
}

// Function to expand and scroll to a strategy
function expandAndScrollToStrategy(strategyId) {
    const targetCard = document.querySelector(strategyId);
    if (targetCard && targetCard.classList.contains('strategy-card')) {
        // Find the header and content
        const header = targetCard.querySelector('.strategy-header');
        const content = targetCard.querySelector('.strategy-content');
        
        if (header && content) {
            // Expand if not already expanded
            if (content.style.display === 'none' || !content.style.display) {
                header.click();
            }
            
            // Scroll to the card
            setTimeout(() => {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
}

// Handle quick nav link clicks
document.addEventListener('DOMContentLoaded', function() {
    console.log('Reorganised pages JS loaded');
    
    // Add click handlers to quick nav links
    const quickNavLinks = document.querySelectorAll('.quick-nav-link');
    console.log('Found quick nav links:', quickNavLinks.length);
    
    quickNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Quick nav link clicked:', this.getAttribute('href'));
            const targetId = this.getAttribute('href');
            expandAndScrollToStrategy(targetId);
        });
    });
    
    // Also handle direct anchor links (from randomiser or external)
    const hash = window.location.hash;
    if (hash) {
        console.log('Hash detected:', hash);
        setTimeout(() => {
            expandAndScrollToStrategy(hash);
        }, 300);
    }
});
