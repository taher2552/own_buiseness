const citySearchInput = document.querySelector(".fb_city_search_input");
// on hover sports js

// Get all the sport options
const sportOptions = document.querySelectorAll(".fb_nav_option ul li");
const sportDiv = document.querySelector(".sports_div");
const sports = document.querySelector(".fb_sports");

// Function to check if the cursor is outside the sport div
function isHoveredOutsideSport(event) {
  return !sportDiv.contains(event.target) && !sports.contains(event.target);
}

// Event listener to close the sport div when hovered outside
document.addEventListener("mouseover", function (event) {
  if (isHoveredOutsideSport(event)) {
    sportDiv.style.display = "none";
  }
});

sports.addEventListener("mouseover", () => {
  sportDiv.style.display = "block";
});

// on hover sports js

// on hover city js

const cityDiv = document.querySelector(".city_div");
const city = document.querySelector(".fb_new_city");
const viewAllCities = document.querySelector(".fb_all_cities"); // Select the "View All Cities" element
const cityListDiv = document.querySelector(".city_list_div"); // Select the city list div

// Function to check if the cursor is outside the div
function isHoveredOutsideCity(event) {
  return !cityDiv.contains(event.target) && !city.contains(event.target);
}

// Event listener to close the sport div when hovered outside
document.addEventListener("mouseover", function (event) {
  if (isHoveredOutsideCity(event)) {
    cityDiv.style.display = "none";
    cityDiv.style.height = "auto";
    cityListDiv.style.display = "none";
    viewAllCities.textContent = "View All Cities";
  }
});

// Function to clear search input
function clearSearchInput() {
  citySearchInput.value = ""; // Reset the search input field
}

// Event listener for city modal open
city.addEventListener("mouseover", () => {
  cityDiv.style.display = "block";
  clearSearchInput(); // Call the function to clear the search input
});

// on hover city js ends

// view and hide city list js

document.addEventListener("DOMContentLoaded", function () {
  // Toggle function to handle the click event
  function toggleCityList() {
    if (viewAllCities.textContent === "View All Cities") {
      cityListDiv.style.display = "block"; // Show the city list
      viewAllCities.textContent = "Hide All Cities";
      cityDiv.style.height = "29rem";
    } else {
      cityListDiv.style.display = "none"; // Hide the city list
      viewAllCities.textContent = "View All Cities";
      cityDiv.style.height = "auto";
    }
  }

  // Event listener for toggling the city list
  viewAllCities.addEventListener("click", toggleCityList);
});

// view and hide city list js ends

document.addEventListener("DOMContentLoaded", function () {
  const cityList = document.querySelectorAll(".city_list_div ul li");
  const noCityFound = document.createElement("li");
  noCityFound.textContent = "No city found";
  noCityFound.style.color = "#222";
  noCityFound.style.display = "none";
  document.querySelector(".city_list_div ul").appendChild(noCityFound);

  // Function to filter cities based on input
  function filterCities() {
    cityListDiv.style.display = "block";
    viewAllCities.textContent = "Hide All Cities";

    const searchValue = citySearchInput.value.toLowerCase();
    let matchFound = false;

    cityList.forEach((city) => {
      const cityName = city.textContent.toLowerCase();
      if (cityName.includes(searchValue)) {
        city.style.display = "block";
        matchFound = true;
      } else {
        city.style.display = "none";
      }
    });

    // Display 'No city found' message if no match is found
    if (!matchFound) {
      noCityFound.style.display = "block";
    } else {
      noCityFound.style.display = "none";
    }
  }

  // Event listener for changes in the search input
  citySearchInput.addEventListener("input", filterCities);
});
