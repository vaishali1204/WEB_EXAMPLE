from flask import Flask, render_template

app = Flask(__name__)

# Set the static folder path
app.static_folder = '/Users/vaishaliverma/Desktop/WEB_EXAMPLE/static'

# Sample data
sample_itineraries = [
    {"destination": "Paris, France", "description": "Explore the City of Love", "image": "istockphoto-932767686-1024x1024.jpg"},
    {"destination": "Tokyo, Japan", "description": "Discover the beauty of Tokyo", "image": "istockphoto-1287303049-1024x1024.jpg"},
    {"destination": "New York, USA", "description": "Experience the Big Apple", "image": "istockphoto-1412670722-1024x1024.jpg"},
]

@app.route('/')
def index():
    return render_template('index.html', itineraries=sample_itineraries)

@app.route('/itinerary_details/<destination>')
def itinerary_details(destination):
    selected_itinerary = [itinerary for itinerary in sample_itineraries if itinerary['destination'] == destination]
    return render_template('itinerary_details.html', itinerary=selected_itinerary[0])

if __name__ == '__main__':
    app.run(debug=True)
