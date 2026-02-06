const fs = require('fs');

// Load the search data file
const searchDataCode = fs.readFileSync('js/search-data.js', 'utf8');

// Create a context to eval in
const context = {};
const Function = function() {}.constructor;
new Function('context', searchDataCode + '; context.searchData = searchData;')(context);

const searchData = context.searchData;

console.log('=== COMPREHENSIVE SEARCH AUDIT ===\n');
console.log('✓ searchData loaded:', searchData.length, 'strategies\n');

// Test the actual search logic from search.js
function matchesSearch(strategy, searchTerm) {
    const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 2);
    
    if (searchWords.length <= 1) {
        if (strategy.title.toLowerCase().includes(searchTerm)) return true;
        if (strategy.description.toLowerCase().includes(searchTerm)) return true;
        if (strategy.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))) return true;
        if (strategy.whenToUse.toLowerCase().includes(searchTerm)) return true;
        if (strategy.category.toLowerCase().includes(searchTerm)) return true;
        return false;
    }
    
    return searchWords.some(word => {
        return strategy.title.toLowerCase().includes(word) ||
               strategy.description.toLowerCase().includes(word) ||
               strategy.keywords.some(keyword => keyword.toLowerCase().includes(word)) ||
               strategy.whenToUse.toLowerCase().includes(word) ||
               strategy.category.toLowerCase().includes(word);
    });
}

console.log('=== TESTING SEARCH TERMS ===');
const tests = [
    'text too hard',
    'text',
    'too hard',
    'struggling readers',
    'early finishers',
    'finish early',
    'reading levels',
    'assessment',
    'choice',
    'grouping',
    'EAL',
    'scaffold'
];

tests.forEach(term => {
    const results = searchData.filter(s => matchesSearch(s, term));
    console.log(`"${term}": ${results.length} results`);
    if (results.length > 0 && results.length <= 3) {
        results.forEach(r => console.log(`  → ${r.title}`));
    } else if (results.length > 3) {
        console.log(`  → ${results[0].title}, ${results[1].title}, +${results.length - 2} more`);
    }
});

console.log('\n=== DATA INTEGRITY CHECK ===');
let errors = [];
searchData.forEach((s, i) => {
    if (!s.id) errors.push(`Strategy ${i}: missing id`);
    if (!s.title) errors.push(`Strategy ${i}: missing title`);
    if (!s.category) errors.push(`${s.title || i}: missing category`);
    if (!s.link) errors.push(`${s.title || i}: missing link`);
    if (!s.description) errors.push(`${s.title || i}: missing description`);
    if (!s.keywords || s.keywords.length === 0) errors.push(`${s.title || i}: no keywords`);
    if (!s.whenToUse) errors.push(`${s.title || i}: missing whenToUse`);
});

if (errors.length === 0) {
    console.log('✓ All 45 strategies have complete data');
} else {
    console.log(`✗ Found ${errors.length} issues:`);
    errors.forEach(e => console.log(`  - ${e}`));
}

console.log('\n=== POPULAR SEARCH TAGS ===');
const popularSearches = [
    { tag: 'Text too hard', count: 0 },
    { tag: 'Finish early', count: 0 },
    { tag: 'Reading levels', count: 0 },
    { tag: 'Assessment', count: 0 },
    { tag: 'Scaffolding', count: 0 },
    { tag: 'Student choice', count: 0 },
    { tag: 'Grouping', count: 0 },
    { tag: 'Interest-based', count: 0 }
];

popularSearches.forEach(search => {
    search.count = searchData.filter(s => matchesSearch(s, search.tag.toLowerCase())).length;
});

console.log('Popular search buttons (should all return results):');
popularSearches.forEach(s => {
    const status = s.count > 0 ? '✓' : '✗';
    console.log(`  ${status} "${s.tag}": ${s.count} results`);
});

