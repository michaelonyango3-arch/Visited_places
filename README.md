# Visited_places
# Places I've Been

## Description
Places I've Been is a simple JavaScript web application that allows users to keep track of destinations they have visited. Each place is stored as an object with properties such as location, landmarks, time of year, and personal notes. Users can add new places and click on a place name to view its details.

This project focuses on practicing:
- JavaScript constructors and prototypes
- Object-oriented programming
- Test-driven development (TDD)
- Separating business logic from UI logic

---

## Technologies Used
- HTML
- CSS
- JavaScript

---

## Setup Instructions
1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Use the form to add places you’ve been and click on a place name to see its details.

---

## Business Logic

### Place Constructor
A `Place` object stores information about a destination.

**Properties:**
- `location` (string)
- `landmarks` (array of strings)
- `season` (string)
- `notes` (string)

**Methods (via prototype):**
- `getLocation()`
- `getLandmarks()`
- `getDetails()`

---

## Tests

The following tests describe the expected functionality of the business logic. These tests were written before or alongside the implementation, following test-driven development principles.

---

### Describe: Place()

**Test:**  
It should create a Place object with a location, landmarks, season, and notes.

**Code:**
```js
const place = new Place("Paris", ["Eiffel Tower"], "Spring", "Great food");

Expected Output:

place.location === "Paris"
place.landmarks[0] === "Eiffel Tower"
place.season === "Spring"
place.notes === "Great food"

Describe: Place.prototype.getLocation()

Test:
It should return the location of the place.

Code:

place.getLocation();


Expected Output:

"Paris"

Describe: Place.prototype.getLandmarks()

Test:
It should return the landmarks as a comma-separated string.

Code:

place.getLandmarks();


Expected Output:

"Eiffel Tower"

Describe: Place.prototype.getDetails()

Test:
It should return a formatted string containing the location and season.

Code:

place.getDetails();


Expected Output:

"Paris (Spring)"

Application Logic

Users submit a form to create new Place objects.

Each Place object is stored in an array.

The list of places is dynamically rendered in the DOM.

Clicking a place name displays its details.

Known Issues

No edit or delete functionality yet.

No persistent storage (data resets on page reload).

License

MIT License

Author

Created by [Michael Onyango]