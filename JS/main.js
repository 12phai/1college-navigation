


document.getElementById('find-route-btn').addEventListener('click', function () {
    const startLocation = document.getElementById('start-input').value;
    const endLocation = document.getElementById('end-input').value;

    if (startLocation && endLocation) {
        let routePage = '';
        if (startLocation === "Gate-5") {
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
                case 'Gate-2': routePage = 'assets/images/Gate5 to Gate2.html'; break;
                case 'Gate-1': routePage = 'assets/images/Gate5 to Gate1.html'; break;
                case 'Gate-4': routePage = 'assets/images/Gate5 to Gate4.html'; break;
                case 'Hut': routePage = 'assets/images/Gate5 to Hut.html'; break;
                
                case 'Upahar': routePage = 'assets/images/Gate5 to Upahar.html'; break;
                default: alert('Route information not available for the selected end location.'); return;
            }
        }  else if (startLocation === "Gate-3") {
            switch (endLocation) {
                case 'A-BLOCK': routePage = 'assets/images/Gate3 to A-BLOCK.html'; break;
                case 'B-BLOCK': routePage = 'assets/images/Gate3 to B-BLOCK.html'; break;
                case 'C-BLOCK': routePage = 'assets/images/Gate3 to C-BLOCK.html'; break;
                case 'D-BLOCK': routePage = 'assets/images/Gate3 to D-BLOCK.html'; break;
                case 'Basketball_Court': routePage = 'assets/images/Gate3 to Basketball Court.html'; break;
                case 'Boys-Hostel': routePage = 'assets/images/Gate3 to Boys Hostel.html'; break;
                case 'Canteen': routePage = 'assets/images/Gate3 to Canteen.html'; break;
                case 'Parking': routePage = 'assets/images/Gate3 to Parking.html'; break;
                case 'Playground': routePage = 'assets/images/Gate3 to Playground.html'; break;
                case 'Girls-Hostel': routePage = 'assets/images/Gate3 to Girls-Hostel.html'; break;
                case 'Sports-Room': routePage = 'assets/images/Gate3 to Sports.html'; break;
                case 'Gate-2': routePage = 'assets/images/Gate3 to Gate2.html'; break;
                case 'Gate-1': routePage = 'assets/images/Gate3 to Gate1.html'; break;
                case 'Gate-4': routePage = 'assets/images/Gate3 to Gate4.html'; break;
                case 'Gate-5': routePage = 'assets/images/Gate3 to Gate5.html'; break;
                case 'Hut': routePage = 'assets/images/Gate3 to Hut.html'; break;
                
                case 'Upahar': routePage = 'assets/images/Gate3 to Upahar.html'; break;
                default: alert('Route information not available for the selected end location.'); return;
            }
        } else if (startLocation === "Gate-4") {
            switch (endLocation) {
                case 'A-BLOCK': routePage = 'assets/images/Gate4 to A-Block.html'; break;
                case 'B-BLOCK': routePage = 'assets/images/Gate4 to B-Block.html'; break;
                case 'C-BLOCK': routePage = 'assets/images/Gate4 to C-Block.html'; break;
                case 'D-BLOCK': routePage = 'assets/images/Gate4 to D-Block.html'; break;
                case 'Basketball_Court': routePage = 'assets/images/Gate4 to Basketball Court.html'; break;
                case 'Boys-Hostel': routePage = 'assets/images/Gate4 to Boys Hostel.html'; break;
                case 'Canteen': routePage = 'assets/images/Gate4 to Canteen.html'; break;
                case 'Parking': routePage = 'assets/images/Gate4 to Parking.html'; break;
                case 'Playground': routePage = 'assets/images/Gate4 to Playground.html'; break;
                case 'Girls-Hostel': routePage = 'assets/images/Gate4 to Girls Hostel.html'; break;
                case 'Sports-Room': routePage = 'assets/images/Gate4 to Sports.html'; break;
                case 'Gate-3': routePage = 'assets/images/Gate4 to Gate3.html'; break;
                case 'Gate-2': routePage = 'assets/images/Gate4 to Gate2.html'; break;
                case 'Gate-1': routePage = 'assets/images/Gate4 to Gate1.html'; break;
                case 'Gate-5': routePage = 'assets/images/Gate4 to Gate5.html'; break;
                case 'Hut': routePage = 'assets/images/Gate4 to Hut.html'; break;
                
                case 'Upahar': routePage = 'assets/images/Gate4 to Upahar.html'; break;
                default: alert('Route information not available for the selected end location.'); return;
            }
        } else if (startLocation === "Gate-1") {
            switch (endLocation) {
                case 'A-BLOCK': routePage = 'assets/images/Gate1 to A-Block.html'; break;
                case 'B-BLOCK': routePage = 'assets/images/Gate1 to B-Block.html'; break;
                case 'C-BLOCK': routePage = 'assets/images/Gate1 to C-Block.html'; break;
                case 'D-BLOCK': routePage = 'assets/images/Gate1 to D-Block.html'; break;
                case 'Basketball_Court': routePage = 'assets/images/Gate1 to Basketball Court.html'; break;
                case 'Boys-Hostel': routePage = 'assets/images/Gate1 to Boys Hostel.html'; break;
                case 'Canteen': routePage = 'assets/images/Gate1 to Canteen.html'; break;
                case 'Parking': routePage = 'assets/images/Gate1 to Parking.html'; break;
                case 'Playground': routePage = 'assets/images/Gate1 to Playground.html'; break;
                case 'Girls-Hostel': routePage = 'assets/images/Gate1 to Girls-Hostel.html'; break;
                case 'Sports-Room': routePage = 'assets/images/Gate1 to Sports.html'; break;
                case 'Gate-3': routePage = 'assets/images/Gate1 to Gate3.html'; break;
                case 'Gate-2': routePage = 'assets/images/Gate1 to Gate2.html'; break;
                case 'Gate-4': routePage = 'assets/images/Gate1 to Gate4.html'; break;
                case 'Gate-5': routePage = 'assets/images/Gate1 to Gate5.html'; break;
                case 'Hut': routePage = 'assets/images/Gate1 to Hut.html'; break;
                
                case 'Upahar': routePage = 'assets/images/Gate1 to Upahar.html'; break;
                default: alert('Route information not available for the selected end location.'); return;
            }
        } else if (startLocation === "Gate-2") {
            switch (endLocation) {
                case 'A-BLOCK': routePage = 'assets/images/Gate2 to A-Block.html'; break;
                case 'B-BLOCK': routePage = 'assets/images/Gate2 to B-Block.html'; break;
                case 'C-BLOCK': routePage = 'assets/images/Gate2 to C-Block.html'; break;
                case 'D-BLOCK': routePage = 'assets/images/Gate2 to D-Block.html'; break;
                case 'Basketball_Court': routePage = 'assets/images/Gate2 to Basketball Court.html'; break;
                case 'Boys-Hostel': routePage = 'assets/images/Gate2 to Boys Hostel.html'; break;
                case 'Canteen': routePage = 'assets/images/Gate2 to Canteen.html'; break;
                case 'Parking': routePage = 'assets/images/Gate2 to Parking.html'; break;
                case 'Playground': routePage = 'assets/images/Gate2 to Playground.html'; break;
                case 'Girls-Hostel': routePage = 'assets/images/Gate2 to Girls-Hostel.html'; break;
                case 'Sports-Room': routePage = 'assets/images/Gate2 to Sports.html'; break;
                case 'Gate-3': routePage = 'assets/images/Gate2 to Gate3.html'; break;
                case 'Gate-1': routePage = 'assets/images/Gate2 to Gate1.html'; break;
                case 'Gate-4': routePage = 'assets/images/Gate2 to Gate4.html'; break;
                case 'Gate-5': routePage = 'assets/images/Gate2 to Gate5.html'; break;
                case 'Hut': routePage = 'assets/images/Gate2 to Hut.html'; break;
                
                case 'Upahar': routePage = 'assets/images/Gate2 to Upahar.html'; break;
                default: alert('Route information not available for the selected end location.'); return;
            }
        }
        setTimeout(() => {
            speakDirections(startLocation, endLocation);
            window.location.href = routePage;
        }, 100);
    } else {
        alert('Please enter both start and end locations.');
    }
});

// 🔹 NEW FUNCTION: Detailed Turn-by-Turn Voice Directions


function speakDirections(start, end) {
    const directionsMap = {
        "Gate-4": {
            
            "A-BLOCK": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left again and continue for 60 meters, then take another left and walk for 60 meters. Turn right and proceed for 30 meters, then make a right and walk for 10 meters. A-BLOCK will be on your left.",
            "B-BLOCK": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 60 meters, then take another left and walk for 60 meters. Turn right and continue for 30 meters, then make a right and walk for 20 meters. B-BLOCK will be on your left.",
            "C-BLOCK": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 60 meters, then take another left and walk for 60 meters. Turn right and continue for 30 meters, then make a right and walk for 20 meters. C-BLOCK will be on your right.",
            "D-BLOCK": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 60 meters, then take another left and walk for 60 meters. Turn right and continue for 30 meters, then make a right and walk for 10 meters. D-BLOCK will be on your right.",
            "Hut": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 60 meters. Walk straight for 20 meters, take a right and continue for 35 meters. The Hut will be ahead.",
            "Basketball_Court": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for 16 meters. The Basketball Court will be ahead.",
            "Gate-3": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 60 meters, then take a left and walk for 20 meters. Turn right and continue for 30 meters. Gate-3 will be ahead.",
            "Gate-2": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 60 meters, then take a left and walk for 20 meters. Turn right and continue for 40 meters. Gate-2 will be ahead.",
            "Gate-1": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 60 meters, then take a left and walk for 20 meters. Turn right and continue for 50 meters. Gate-1 will be ahead.",
            "Girls-Hostel": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 70 meters. Walk straight for 5 meters, turn left, and continue for 50 meters. The Girls-Hostel will be ahead.",
            "Canteen": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 20 meters, then turn right and walk for 30 meters. Turn left and proceed for 70 meters. Walk straight for 5 meters, turn left, and continue for 5 meters. Turn right and walk for 5 meters. The Canteen will be ahead.",
            "Gate-5": "Start at Gate 4 and walk straight for 5 meters. Take a left and continue for 10 meters. Gate-5 will be on your left.",
            "Upahar": "Start at Gate 4 and walk straight for 10 meters. Upahar will be ahead.",
            "Parking": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters, then turn right and walk for 30 meters. The Parking slot will be visible.",
            "Boys-Hostel": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters, then turn right and walk for 30 meters. Turn left and continue for 70 meters. Walk straight for 5 meters. The Boys-Hostel will be on your right.",
            "Sports-room": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters, then turn right and walk for 30 meters. Turn left and continue for 70 meters. Walk straight for 10 meters. The Sports-room will be on your right.",
            "Playground": "Start at Gate 4 and walk straight for 20 meters. Turn right and continue for 20 meters. Take a left and walk for 10 meters. The Playground will be visible ahead."
        },
    

        "Gate-5": {
                    
            "A-BLOCK": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 30 meters. Finally, turn right and walk for 10 meters. A-BLOCK will be on your left.",
            "B-BLOCK": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 30 meters. Finally, turn right and walk for 20 meters. B-BLOCK will be on your left.",
            "C-BLOCK": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 30 meters. Finally, turn right and walk for 20 meters. C-BLOCK will be on your right.",
            "D-BLOCK": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 30 meters. Finally, turn right and walk for 10 meters. D-BLOCK will be on your right.",
            "Hut": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 30 meters. The Hut will be on your left.",
            "Gate-1": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 60 meters. Gate-1 will be ahead.",
            "Gate-2": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 50 meters. Gate-2 will be ahead.",
            "Gate-3": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 30 meters. Take a right and walk for 20 meters. Gate-3 will be ahead.",
            "Sports-room": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 20 meters. The Sports-room will be on your right.",
            "Boys-Hostel": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 70 meters, then turn left and continue for 10 meters. The Boys-Hostel will be on your right.",
            "Parking": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left. The parking slot will be visible.",
            "Basketball_Court": "Start at Gate 5 and walk straight for 10 meters. Turn right. The Basketball Court will be ahead.",
            "Playground": "Start at Gate 5 and walk straight for 20 meters. The Playground will be ahead.",
            "Canteen": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 80 meters. Turn right and walk for 10 meters. Turn left and continue for 10 meters. The Canteen will be on your right.",
            "Girls-Hostel": "Start at Gate 5 and walk straight for 20 meters. Turn right and continue for another 20 meters. Take a left and walk for 80 meters. Turn right and walk for 10 meters. Turn left and continue for 10 meters. The Girls-Hostel will be ahead.",
            "Gate-4": "Start at Gate 5 and walk straight for 5 meters. Turn right and continue for 10 meters. Gate-4 will be on your right.",
            "Upahar": "Start at Gate 5 and walk straight for 10 meters. Take a left and continue for 10 meters. Upahar will be ahead."
        },

        "Gate-1": {
                    
            "A-BLOCK": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 10 meters. A-BLOCK will be on your left.",
            "B-BLOCK": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. B-BLOCK will be on your left.",
            "C-BLOCK": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. C-BLOCK will be on your right.",
            "D-BLOCK": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 10 meters. D-BLOCK will be on your right.",
            "Hut": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. The Hut will be ahead.",
            "Gate-2": "Start at Gate 1 and walk straight for 5 meters. Turn  and continue for 10 meters. Gate-2 will be on your right.",
            "Gate-3": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 30 meters. Gate-3 will be on your right.",
            "Girls-Hostel": "Start at Gate 1 and walk straight for 20 meters. The Girls-Hostel will be ahead.",
            "Basketball_Court": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 70 meters. Take a right and walk for 5 meters, then turn left. The Basketball Court will be on your left.",
            "Parking": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 70 meters. The parking slot will be ahead.",
            "Boys-Hostel": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 30 meters. Turn left and walk for 10 meters. The Boys-Hostel will be on your left.",
            "Sports-room": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 30 meters. Turn left and walk for 5 meters. The Sports-room will be on your left.",
            "Playground": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 30 meters. The Playground will be ahead.",
            "Canteen": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. The Canteen will be ahead.",
            "Upahar": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 5 meters. Turn right and walk straight for 70 meters. Turn right and walk for 5 meters, then turn left. Upahar will be on your right.",
            "Gate-5": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 5 meters. Turn right and walk straight for 70 meters. Turn right and walk for 5 meters, then turn left. Walk straight for 10 meters. Gate-5 will be ahead.",
            "Gate-4": "Start at Gate 1 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 5 meters. Turn right and walk straight for 70 meters. Turn right and walk for 5 meters, then turn left. Walk straight for 10 meters. Turn right and walk for 5 meters. Gate-4 will be on your right."

        },
        "Gate-2": {
            "A-BLOCK": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 10 meters. Take a left and walk for another 10 meters. A-BLOCK will be on your left.",
            "B-BLOCK": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 10 meters. Take a left and walk for another 20 meters. B-BLOCK will be on your left.",
            "C-BLOCK": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 10 meters. Take a left and walk for another 20 meters. C-BLOCK will be on your right.",
            "D-BLOCK": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 10 meters. Take a left and walk for another 10 meters. D-BLOCK will be on your right.",
            "Hut": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 20 meters. The Hut will be ahead.",
            "Gate-1": "Start at Gate 2 and walk straight for 5 meters. Turn left and continue for 10 meters. Gate-1 will be on your left.",
            "Gate-3": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 30 meters. Gate-3 will be on your right.",
            "Girls-Hostel": "Start at Gate 2 and walk straight for 5 meters. Turn left and continue for 10 meters. Turn right and walk for another 10 meters. The Girls-Hostel will be ahead.",
            "Basketball_Court": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 30 meters. Take a left and walk for another 20 meters. Turn right and walk for 30 meters. Take another right and walk for 5 meters. Finally, turn left. The Basketball Court will be on your left.",
            "Parking": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 70 meters. The parking slot will be ahead.",
            "Boys-Hostel": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 30 meters. Turn left and walk for 10 meters. The Boys-Hostel will be on your left.",
            "Sports-room": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 30 meters. Turn left and walk for 5 meters. The Sports-room will be on your left.",
            "Playground": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 30 meters. The Playground will be ahead.",
            "Canteen": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. The Canteen will be ahead.",
            "Upahar": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 5 meters. Turn right and walk straight for 70 meters. Turn right and walk for 5 meters, then turn left. Upahar will be on your right.",
            "Gate-5": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 5 meters. Turn right and walk straight for 70 meters. Turn right and walk for 5 meters, then turn left. Walk straight for 10 meters. Gate-5 will be ahead.",
            "Gate-4": "Start at Gate 2 and walk straight for 5 meters. Turn right and continue for 20 meters. Take a left and walk for another 20 meters. Turn right and walk for 5 meters. Turn right and walk straight for 70 meters. Turn right and walk for 5 meters, then turn left. Walk straight for 10 meters. Turn right and walk for 5 meters. Gate-4 will be on your right."
        },

        "Gate-3": {
            "A-BLOCK": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for another 10 meters. Take a right and walk for 10 meters. A-BLOCK will be on your left.",
            "B-BLOCK": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for another 20 meters. Take a right and walk for 20 meters. B-BLOCK will be on your left.",
            "C-BLOCK": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for another 20 meters. Take a right and walk for 20 meters. C-BLOCK will be on your right.",
            "D-BLOCK": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for another 20 meters. Take a right and walk for 10 meters. D-BLOCK will be on your right.",
            "Hut": "Start at Gate 3 and walk straight for 5 meters. The Hut will be on your left.",
            "Gate-2": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for 20 meters. Gate-2 will be on your left.",
            "Gate-1": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for 30 meters. Gate-1 will be on your left.",
            "Girls-Hostel": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for 20 meters. Take a right and walk for another 10 meters. Turn left and walk for 10 meters. The Girls-Hostel will be ahead.",
            "Basketball_Court": "Start at Gate 3 and walk straight for 10 meters. Turn right and continue for 5 meters. Take a left and walk for another 20 meters. Turn right and walk for 30 meters. Take another right and walk for 5 meters. Finally, turn left. The Basketball Court will be on your left.",
            "Parking": "Start at Gate 3 and walk straight for 10 meters. Turn right and continue for 5 meters. Take a left and walk for another 20 meters. Turn right. The parking slot will be on your left.",
            "Sports-Room": "Start at Gate 3 and walk straight for 10 meters. Turn right and continue for 5 meters. Take a left and walk for another 10 meters. The Sports-room will be on your left.",
            "Boys-Hostel": "Start at Gate 3 and walk straight for 10 meters. Turn right and continue for 5 meters. Take a left and walk for another 20 meters. The Boys-Hostel will be on your left.",
            "Playground": "Start at Gate 3 and walk straight for 10 meters. Turn right. The Playground will be ahead.",
            "Canteen": "Start at Gate 3 and walk straight for 10 meters. Turn left and continue for another 20 meters. Take a right and walk for 20 meters. The Canteen will be ahead.",
            "Upahar": "Start at Gate 3 and walk straight for 10 meters. Turn right and continue for 5 meters. Take a left and walk for another 20 meters. Turn right and walk for 30 meters. Take another right and walk for 5 meters. Finally, turn left and walk for 10 meters. Upahar will be on your right.",
            "Gate-5": "Start at Gate 3 and walk straight for 10 meters. Turn right and continue for 5 meters. Take a left and walk for another 20 meters. Turn right and walk for 30 meters. Take another right and walk for 5 meters. Finally, turn left and walk for 10 meters. Gate-5 will be ahead.",
            "Gate-4": "Start at Gate 3 and walk straight for 10 meters. Turn right and continue for 5 meters. Take a left and walk for another 20 meters. Turn right and walk for 30 meters. Take another right and walk for 5 meters. Finally, turn left and walk for 10 meters. Turn right and walk for 5 meters. Gate-4 will be on your right."
        }

        





        
    };

    const instruction = directionsMap[start]?.[end] || `Navigation from ${start} to ${end}. Follow the displayed route.`;
    
    const speech = new SpeechSynthesisUtterance(instruction);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
 
   

    window.speechSynthesis.speak(speech);
}







self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('campus-nav').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/js/main.js',
                '/assets/images/page.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

function calculateWalkingTime(distance) {
    let speed = 5; // Walking speed in km/h
    let time = (distance / speed) * 60; // Convert to minutes
    return `Estimated time: ${Math.round(time)} min`;
}

document.getElementById("find-route-btn").addEventListener("click", function () {
    let start = document.getElementById("start-input").value;
    let end = document.getElementById("end-input").value;

    // Distances between various points in km
    let distances = { 
        "Gate-5_Basketball_Court":0.036,
        "Gate-5_Upahar":0.026,
        "Gate-5_Gate-4":0.025,
        "Gate-5_Parking":0.072,
        "Gate-5_Gate-3":0.250,
        "Gate-5_Gate-1":0.300,
        "Gate-5_Gate-2":0.300,
        "Gate-5_Playground":0.053,
        "Gate-5_Girls-Hostel":0.160,
        "Gate-5_Canteen":0.150,
        "Gate-5_Boys-Hostel":0.140,
        "Gate-5_Sports-Room":0.170,
        "Gate-5_A-BLOCK":0.250,
        "Gate-5_B-BLOCK":0.260,
        "Gate-5_C-BLOCK":0.260,
        "Gate-5_D-BLOCK":0.250,
        "Gate-5_Hut":0.210,

        "Gate-4_Basketball_Court":0.051,
        "Gate-4_Upahar":0.037,
        "Gate-4_Gate-5":0.025,
        "Gate-4_Parking":0.110,
        "Gate-4_Gate-3":0.260,
        "Gate-4_Gate-1":0.310,
        "Gate-4_Gate-2":0.310,
        "Gate-4_Playground":0.095,
        "Gate-4_Girls-Hostel":0.165,
        "Gate-4_Canteen":0.155,
        "Gate-4_Boys-Hostel":0.170,
        "Gate-4_Sports-Room":0.175,
        "Gate-4_A-BLOCK":0.260,
        "Gate-4_B-BLOCK":0.270,
        "Gate-4_C-BLOCK":0.270,
        "Gate-4_D-BLOCK":0.260,
        "Gate-4_Hut":0.220,

        "Gate-3_Basketball_Court":0.220,
        "Gate-3_Upahar":0.300,
        "Gate-3_Gate-4":0.260,
        "Gate-3_Parking":0.160,
        "Gate-3_Gate-5":0.250,
        "Gate-3_Gate-1":0.072,
        "Gate-3_Gate-2":0.055,
        "Gate-3_Playground":0.061,
        "Gate-3_Girls-Hostel":0.170,
        "Gate-3_Canteen":0.150,
        "Gate-3_Boys-Hostel":0.100,
        "Gate-3_Sports-Room":0.064,
        "Gate-3_A-BLOCK":0.120,
        "Gate-3_B-BLOCK":0.130,
        "Gate-3_C-BLOCK":0.130,
        "Gate-3_D-BLOCK":0.120,
        "Gate-3_Hut":0.020,

        "Gate-2_Basketball_Court":0.280,
        "Gate-2_Upahar":0.300,
        "Gate-2_Gate-4":0.310,
        "Gate-2_Parking":0.220,
        "Gate-2_Gate-3":0.055,
        "Gate-2_Gate-1":0.17,
        "Gate-2_Gate-5":0.300,
        "Gate-2_Playground":0.110,
        "Gate-2_Girls-Hostel":0.230,
        "Gate-2_Canteen":0.210,
        "Gate-2_Boys-Hostel":0.150,
        "Gate-2_Sports-Room":0.120,
        "Gate-2_A-BLOCK":0.064,
        "Gate-2_B-BLOCK":0.077,
        "Gate-2_C-BLOCK":0.077,
        "Gate-2_D-BLOCK":0.064,
        "Gate-2_Hut":0.068,

        "Gate-1_Basketball_Court":0.290,
        "Gate-1_Upahar":0.310,
        "Gate-1_Gate-4":0.310,
        "Gate-1_Parking":0.230,
        "Gate-1_Gate-3":0.072,
        "Gate-1_Gate-5":0.300,
        "Gate-1_Gate-2":0.017,
        "Gate-1_Playground":0.0120,
        "Gate-1_Girls-Hostel":0.250,
        "Gate-1_Canteen":0.220,
        "Gate-1_Boys-Hostel":0.150,
        "Gate-1_Sports-Room":0.140,
        "Gate-1_A-BLOCK":0.085,
        "Gate-1_B-BLOCK":0.094,
        "Gate-1_C-BLOCK":0.094,
        "Gate-1_D-BLOCK":0.085,
        "Gate-1_Hut":0.086,
        


        
    };

    let key = `${start}_${end}`;
    
    // Check if the distance exists in the distances object
    if (distances[key]) {
        let distance = distances[key];
        let timeText = calculateWalkingTime(distance);
        let message = `Distance: ${distance} km\n${timeText}`;
        alert(message);

// AFTER alert is acknowledged, then speak and redirect
    setTimeout(() => {
        speakDirections(startLocation, endLocation);
        window.location.href = routePage;
    }, 100);

        // Display the distance and time on the webpage
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p><strong>Distance:</strong> ${distance} km</p>
                               <p><strong>${timeText}</strong></p>`;
    } else {
        alert("Distance and time estimate not available.");
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Distance and time estimate not available.</p>`;
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Toggle Dark Mode";
    toggleBtn.style.position = "absolute";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.cursor = "pointer";
    document.body.appendChild(toggleBtn);

    // Check if Dark Mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        // Save the mode in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleBtn.innerText = "Toggle Light Mode"
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleBtn.innerText = "Toggle Dark Mode"
        }
    });
});








// Autocomplete functionality remains the same
const locations = [
    'A-BLOCK', 'B-BLOCK', 'C-BLOCK', 'D-BLOCK', 'Boys-Hostel',
    'Canteen', 'Parking',  'Upahar', 'Girls-Hostel',
    'Playground', 'Gate-5', 'Gate-3', 'Gate-2', 'Gate-1','Gate-4', 'Basketball_Court', 'Hut', 'Sports-Room'
];

function autocomplete(input, locations) {
    let currentFocus;
    input.addEventListener('input', function () {
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
                suggestionItem.addEventListener('click', function () {
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

    document.addEventListener('click', function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById('start-input'), locations);
autocomplete(document.getElementById('end-input'), locations);
