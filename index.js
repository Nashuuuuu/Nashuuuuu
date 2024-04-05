  // Function to generate and append badge
        function generateBadge() {
            // Replace these placeholders with actual project details
            var badgeText = "Build: Passing";
            var badgeColor = "green";
   // Create a span element for the badge
            var badgeSpan = document.createElement("span");
            badgeSpan.textContent = badgeText;
            badgeSpan.style.backgroundColor = badgeColor;
            badgeSpan.style.color = "white";
            badgeSpan.style.padding = "5px";
            badgeSpan.style.borderRadius = "5px";
            badgeSpan.style.fontFamily = "Arial, sans-serif";
            badgeSpan.style.fontSize = "14px";
            badgeSpan.style.fontWeight = "bold";
            badgeSpan.style.marginRight = "10px";
// Append the badge span to the badge container
            document.getElementById("badgeContainer").appendChild(badgeSpan);
        }

        // Call the function to generate and append the badge
        generateBadge();
