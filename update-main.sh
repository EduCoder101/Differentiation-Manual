#!/bin/bash

# Add Google Fonts
sed -i '7 a\    <link rel="stylesheet" href="css/landing-updates.css">' main.html

# Remove emojis from headings
sed -i 's/🎯 Try These First/Try These First/g' main.html
sed -i 's/🔄 Show Me 3/Show Me 3/g' main.html  
sed -i 's/📚 Core Principles/Core Principles/g' main.html

# Add randomiser script
sed -i 's|<script src="js/scripts.js"></script>|<script src="js/search-data.js"></script>\n    <script src="js/randomiser.js"></script>\n    <script src="js/scripts.js"></script>|' main.html

echo "✓ Updated main.html"
