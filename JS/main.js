document.getElementById('find-route-btn').addEventListener('click', function() {
    const startLocation = document.getElementById('start-input').value;
    const endLocation = document.getElementById('end-input').value;

    if (startLocation && endLocation) {
        let routePage = '';
        if (startLocation == "Gate-5") {
            switch (endLocation) {
                case 'A-BLOCK': routePage = 'assets/images/Gate5 to A-BLOCK.html'; break;
                case 'B-BLOCK': routePage = 'assets/images/Gate5 to B-BLOCK.html'; break;
                case 'C-BLOCK': routePage = 'assets/images/Gate5 to C-BLOCK.html'; break;
                case 'D-BLOCK': routePage = 'assets/images/Gate5 to D-BLOCK.html'; break;
                case 'Basketball_Court': routePage = 'assets/images/Gate5 to Basketball_court.html'; break;
                case 'Boys-Hostel': routePage = 'assets/images/Gate5 to Boys-Hostel.html'; break;
                case 'Canteen': routePage = 'assets/images/Gate5 to Canteen.html'; break;
                case 'Parking': routePage = 'assets/images/Gate5 to Parking.html'; break;
                case 'Playground': routePage = 'assets/images/Gate5 to playground.html'; break;
                case 'Girls-Hostel': routePage = 'assets/images/Gate5 to Girls-Hostel.html'; break;
                case 'Sports-Room': routePage = 'assets/images/Gate5 to Sports-Room.html'; break;
                case 'Gate-3': routePage = 'assets/images/Gate5 to Gate3.html'; break;
                case 'Hut': routePage = 'assets/images/Gate5 to Hut.html'; break;
                case 'Hot and Cool': routePage = 'assets/images/Gate5 to Hot and Cool.html'; break;
                case 'Upahar': routePage = 'assets/images/Gate5 to Upahar.html'; break;
                default: alert('Route information not available for the selected end location.'); return;
            }
        } else if (startLocation == "Gate-3") {
            switch (endLocation) {
                case 'A-BLOCK': routePage = 'assets/images/Gate3 to A-BLOCK.html'; break;
                case 'B-BLOCK': routePage = 'assets/images/Gate3 to B-BLOCK.html'; break;
                case 'C-BLOCK': routePage = 'assets/images/Gate3 to C-BLOCK.html'; break;
                case 'D-BLOCK': routePage = 'assets/images/Gate3 to D-BLOCK.html'; break;
                case 'Boys-Hostel': routePage = 'assets/images/Gate3 to Boys-Hostel.html'; break;
                case 'Canteen': routePage = 'assets/images/Gate3 to Canteen.html'; break;
                case 'Parking': routePage = 'assets/images/Gate3 to Parking.html'; break;
                case 'Hot and Cool': routePage = 'assets/images/Gate3 to Hot and Cool.html'; break;
                case 'Upahar': routePage = 'assets/images/Gate3 to Upahar.html'; break;
                case 'Girls-Hostel': routePage = 'assets/images/Gate3 to Girls-Hostel.html'; break;
                case 'Hut': routePage = 'assets/images/Gate3 to Hut.html'; break;
                case 'Sports-Room': routePage = 'assets/images/Gate3 to Sports-Room.html'; break;
                case 'Playground': routePage = 'assets/images/Gate3 to playground.html'; break;
                case 'Basketball_Court': routePage = 'assets/images/Gate3 to Basketball_Court.html'; break;
                case 'Gate-5': routePage = 'assets/images/Gate3 to Gate5.html'; break;
                default: alert('Route information not available for the selected end location.'); return;
            }
        }
        speakDirections(startLocation, endLocation);
        window.location.href = routePage;
    } else {
        alert('Please enter both start and end locations.');
    }
});

// Function to add voice navigation
function speakDirections(start, end) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = `Navigating from ${start} to ${end}. Follow the displayed route.`;
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Autocomplete functionality
const locations = [
    'A-BLOCK', 'B-BLOCK', 'C-BLOCK', 'D-BLOCK', 'Boys-Hostel',
    'Canteen', 'Parking', 'Hot and Cool', 'Upahar', 'Girls-Hostel',
    'Playground', 'Gate-5', 'Gate-3', 'Basketball_Court', 'Hut', 'Sports-Room'
];

function autocomplete(input, locations) {
    let currentFocus;
    input.addEventListener('input', function() {
        closeAllLists();
        if (!this.value) return false;
        currentFocus = -1;
        
        const listContainer = document.createElement('div');
        listContainer.setAttribute('id', `${this.id}-autocomplete-list`);
        listContainer.setAttribute('class', 'autocomplete-items');
        this.parentNode.appendChild(listContainer);

        locations.filter(location => location.toLowerCase().includes(this.value.toLowerCase()))
            .forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.innerHTML = `<strong>${suggestion.substr(0, this.value.length)}</strong>${suggestion.substr(this.value.length)}`;
                suggestionItem.addEventListener('click', function() {
                    input.value = this.innerText;
                    closeAllLists();
                });
                listContainer.appendChild(suggestionItem);
            });
    });

    function closeAllLists(elmnt) {
        document.querySelectorAll('.autocomplete-items').forEach(item => {
            if (elmnt !== item && elmnt !== input) item.remove();
        });
    }

    document.addEventListener('click', function(e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById('start-input'), locations);
autocomplete(document.getElementById('end-input'), locations);
