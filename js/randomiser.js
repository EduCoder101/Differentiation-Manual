// Randomiser for "Try These First" section
// Uses the searchData array from search-data.js

// Function to get random strategies
function getRandomStrategies(count = 3) {
    // Create a copy of searchData to avoid modifying original
    const strategiesCopy = [...searchData];
    
    // Shuffle array using Fisher-Yates algorithm
    for (let i = strategiesCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [strategiesCopy[i], strategiesCopy[j]] = [strategiesCopy[j], strategiesCopy[i]];
    }
    
    // Return first 'count' strategies
    return strategiesCopy.slice(0, count);
}

// Function to render strategy cards
function renderRandomStrategies() {
    const container = document.getElementById('randomStrategies');
    if (!container) {
        console.error('Container element not found');
        return;
    }
    
    console.log('Rendering strategies, searchData length:', searchData.length);
    const strategies = getRandomStrategies(3);
    console.log('Got strategies:', strategies);
    
    container.innerHTML = strategies.map(strategy => {
        // Create a problem statement from keywords
        const problemStatement = generateProblemStatement(strategy);
        
        // Create link with anchor to specific strategy
        const strategyLink = `${strategy.link}#${strategy.id}`;
        
        return `
            <div class="random-strategy-card" onclick="window.location.href='${strategyLink}'">
                <span class="strategy-category-badge">${strategy.category}</span>
                <h3>${strategy.title}</h3>
                <p class="strategy-problem">"${problemStatement}"</p>
                <p>${strategy.description.substring(0, 120)}...</p>
                <a href="${strategyLink}" class="view-strategy-btn">View AI Prompts →</a>
            </div>
        `;
    }).join('');
}

// Generate a problem statement based on strategy keywords
function generateProblemStatement(strategy) {
    const problemTemplates = {
        'tiered': 'My students are at different reading levels',
        'early finishers': 'Students finish at wildly different times',
        'struggling': 'Some students struggle with complex content',
        'choice': 'I want students to have more options',
        'assessment': 'I need quick ways to check understanding',
        'scaffolding': 'Some students need extra support',
        'visual': 'Students learn differently - some need visuals',
        'grouping': 'I need better ways to organise student groups',
        'interest': 'Students are not engaged with the content',
        'vocabulary': 'Academic language is a barrier',
        'complexity': 'The task is too easy or too hard for some',
        'advanced': 'Some students already know this material',
        'organisation': 'Students feel overwhelmed by complex tasks'
    };
    
    // Check keywords for matches
    for (const [key, template] of Object.entries(problemTemplates)) {
        if (strategy.keywords.some(keyword => keyword.includes(key))) {
            return template;
        }
    }
    
    // Default problem statement
    return strategy.whenToUse || 'I need a new differentiation approach';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if searchData is available
    if (typeof searchData === 'undefined') {
        console.error('searchData is not loaded. Make sure search-data.js is loaded before randomiser.js');
        return;
    }
    
    // Render initial strategies
    renderRandomStrategies();
    
    // Add click handler to refresh button
    const refreshBtn = document.getElementById('refreshStrategies');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            renderRandomStrategies();
            
            // Add a subtle animation
            const container = document.getElementById('randomStrategies');
            if (container) {
                container.style.opacity = '0';
                setTimeout(() => {
                    container.style.opacity = '1';
                    container.style.transition = 'opacity 0.3s ease';
                }, 50);
            }
        });
    }
});
