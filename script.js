alert("This is my First working Website!")
// Grab the elements we need from the page
const searchInput = document.getElementById("searchInput");
const searchBtn   = document.getElementById("searchBtn");
const clearBtn    = document.getElementById("clearBtn");
const message     = document.getElementById("message");
const images      = document.querySelectorAll("#gallery figure");

// Show only the images that match the typed keyword
function searchImages() {
  const keyword = searchInput.value.trim().toLowerCase();
  let found = 0;

  images.forEach(function (item) {
    // Combine the caption and the hidden keywords into one searchable text
    const text = (item.dataset.keywords + " " + item.textContent).toLowerCase();

    if (text.includes(keyword)) {
      item.classList.remove("hidden");   // show it
      found++;
    } else {
      item.classList.add("hidden");      // hide it
    }
  });

  // Tell the visitor what happened
  if (keyword === "") {
    message.textContent = "";
  } else if (found === 0) {
    message.textContent = 'No images found for "' + keyword + '". Try another word.';
  } else {
    message.textContent = found + " image(s) found for \"" + keyword + "\".";
  }
}

// Show everything again
function showAll() {
  searchInput.value = "";
  searchImages();
  searchInput.focus();
}

// Run the search when the button is clicked...
searchBtn.addEventListener("click", searchImages);

// ...or when the Enter key is pressed in the box
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchImages();
  }
});

clearBtn.addEventListener("click", showAll);
