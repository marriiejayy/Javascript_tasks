    document.addEventListener('DOMContentLoaded', function() {
            const visitCountElement = document.getElementById('visitCount');
            const firstVisitElement = document.getElementById('firstVisit');
            const resetButton = document.getElementById('resetBtn');
            
            // Check if visitCount exists in localStorage
            let visitCount = localStorage.getItem('visitCount');
            let firstVisit = localStorage.getItem('firstVisit');
            
            if (visitCount) {
                // If it exists, increment by 1
                visitCount = parseInt(visitCount) + 1;
            } else {
                // If not, set to 1
                visitCount = 1;
            }
            
            // If first visit doesn't exist, set it to current date
            if (!firstVisit) {
                firstVisit = new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                localStorage.setItem('firstVisit', firstVisit);
            }
            
            // Update localStorage with new visit count
            localStorage.setItem('visitCount', visitCount);
            
            // Update the display
            visitCountElement.textContent = visitCount;
            firstVisitElement.textContent = `First visit: ${firstVisit}`;
            
            // Reset button functionality
            resetButton.addEventListener('click', function() {
                localStorage.removeItem('visitCount');
                localStorage.removeItem('firstVisit');
                
                // Update display to show reset state
                visitCountElement.textContent = '0';
                firstVisitElement.textContent = 'First visit: Not recorded';
                
                // Show confirmation message
                alert('Visit counter has been reset!');
            });
        });