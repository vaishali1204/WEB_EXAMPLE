document.addEventListener('DOMContentLoaded', function () {
    const tripForm = document.getElementById('trip-form');
    const itineraryContent = document.getElementById('itinerary-content');
    const generatedItinerarySection = document.getElementById('generated-itinerary');

    tripForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user inputs
        const budget = parseFloat(document.getElementById('budget').value);
        const time = parseInt(document.getElementById('time').value);

        // Call backend API or implement logic to generate itinerary based on budget and time
        const generatedItinerary = generateItinerary(budget, time);

        // Display the generated itinerary
        itineraryContent.innerHTML = generatedItinerary;
        generatedItinerarySection.style.display = 'block';
    });

    function generateItinerary(budget, time) {
        // For demonstration purposes, let's create a sample itinerary
        const sampleItineraries = [
            {
                destination: "Himachal Pradesh",
                description: "Explore the City of Love",
                image: "images/istockphoto-932767686-1024x1024.jpg"
            },
            {
                destination: "Agra",
                description: "Discover the beauty of Agra",
                image: "images/istockphoto-1287303049-1024x1024.jpg"
            },
            {
                destination: "Kerala",
                description: "Experience the beauty of beaches",
                image: "images/istockphoto-1412670722-1024x1024.jpg"
            }
        ];

        // Generate itinerary cards
        const itineraryCards = sampleItineraries.map(itinerary => `
            <div class="itinerary-card">
                <img src="static/images/${itinerary.image}" alt="${itinerary.destination}">
                <h3>${itinerary.destination}</h3>
                <p>${itinerary.description}</p>
                <a href="#">View Details</a>
            </div>
        `);

        // Combine and return the itinerary cards
        return itineraryCards.join('');
    }
});
