// =====================
// Business Logic
// =====================

function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Place.prototype.getLocation = function() {
  return this.location;
};

Place.prototype.getLandmarks = function() {
  return this.landmarks.join(", ");
};

Place.prototype.getDetails = function() {
  return `${this.location} (${this.season})`;
};

// =====================
// UI Logic
// =====================

let places = [];

function displayPlaces() {
  const placesList = document.getElementById("places-list");
  placesList.innerHTML = "";

  places.forEach(function(place, index) {
    const li = document.createElement("li");
    li.textContent = place.getLocation();
    li.addEventListener("click", function() {
      showPlaceDetails(index);
    });
    placesList.appendChild(li);
  });
}

function showPlaceDetails(index) {
  const place = places[index];
  const detailsDiv = document.getElementById("place-details");

  detailsDiv.innerHTML = `
    <h3>${place.location}</h3>
    <p><strong>Landmarks:</strong> ${place.getLandmarks()}</p>
    <p><strong>Time of Year:</strong> ${place.season}</p>
    <p><strong>Notes:</strong> ${place.notes}</p>
  `;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const landmarksInput = document.getElementById("landmarks").value;
  const season = document.getElementById("season").value;
  const notes = document.getElementById("notes").value;

  const landmarks = landmarksInput.split(",").map(function(landmark) {
    return landmark.trim();
  });

  const newPlace = new Place(location, landmarks, season, notes);
  places.push(newPlace);

  displayPlaces();
  event.target.reset();
}

// =====================
// Event Listeners
// =====================

window.addEventListener("load", function() {
  document
    .getElementById("place-form")
    .addEventListener("submit", handleFormSubmit);
});
