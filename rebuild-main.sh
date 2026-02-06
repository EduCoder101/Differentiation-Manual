#!/bin/bash

# Start with the rebuilt file
cp main-rebuilt.html main.html

# Add landing-updates CSS
sed -i '8 a\    <link rel="stylesheet" href="css/landing-updates.css">' main.html

# Remove emojis
sed -i 's/🎯 //g' main.html
sed -i 's/🔄 //g' main.html  
sed -i 's/📚 //g' main.html

# Update scripts - add randomiser
sed -i 's|<script src="js/scripts.js"></script>|<script src="js/search-data.js"></script>\n    <script src="js/randomiser.js"></script>\n    <script src="js/scripts.js"></script>|' main.html

# Update "three different ways" to "four different ways" in the how-to-use callout
sed -i 's/three different ways/four different ways/g' main.html

echo "✓ Rebuilt main.html with all improvements"
