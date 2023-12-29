const apiKey = '46d99cc235a6d26be5df8165a452de39';
const city = 'LUCKNOW'; // Replace with the city for which you want the temperature

const temperatureElement = document.getElementById('temperature');

function updateTemperature() {
    // Construct the API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            temperatureElement.textContent = `${temp}° c`;
        })
        .catch(error => {
            console.error('Error fetching temperature data:', error);
            temperatureElement.textContent = 'Failed to fetch temperature';
        });
}

// Fetch and update temperature every 10 minutes (600,000 milliseconds)
updateTemperature();
setInterval(updateTemperature, 600000);


function updateGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greetingElement = document.getElementById("greeting");

    if (currentHour < 11) {
        greetingElement.textContent = "Good morning!";
    } else if (currentHour >= 11 && currentHour < 15) {
        greetingElement.textContent = "Good afternoon!";
    } else {
        greetingElement.textContent = "Good evening!";
    }
}

// Call the function to update greeting when the page loads
updateGreeting();


function printCurrentDateAndMonth() {

    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var month = currentDate.getMonth();
    var currentMonth = months[month];

    // Format the date and month as needed
    var formattedDate = currentMonth + " " + currentDay + ".";

    // Print the result
    var dateElement = document.getElementById("date");
    dateElement.textContent = formattedDate;
}

// Call the function to print the current date and month
printCurrentDateAndMonth();

// Speech Recognition
let recognition;

  function startSpeechRecognition() {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      document.getElementById('searchInput').value = transcript;
    };

    recognition.onend = function() {
      recognition.stop();
    };

    recognition.start();
  }

  function search() {
    const query = document.getElementById('searchInput').value;
    const googleSearchURL = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = googleSearchURL;
  }

  function handleEnterKey(event) {
    if (event.key === 'Enter') {
      search();
    }
  }