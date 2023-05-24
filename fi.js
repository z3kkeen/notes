const input = document.querySelector("input");
const fiSubButton = document.getElementById("fiSubmit");
const fiList = document.getElementById("fiTextField");
const langHeader = document.getElementById("langHeader");

function svClick() {
    localStorage.setItem("lang", "swedish");
}

// Event listener for the submit button
fiSubButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value.trim() === "") {
        return; // Reject empty notes
    }

    let newNote = document.createElement("p");
    newNote.innerHTML = "•" + " " + input.value;
    fiList.appendChild(newNote);
    input.value = "";

    // Save the new note to local storage
    let notes = JSON.parse(localStorage.getItem('fiNotes')) || [];
    notes.push(newNote.innerHTML);
    localStorage.setItem('fiNotes', JSON.stringify(notes));
});

// Function to display language selection
function showLang() {
    let lang = localStorage.getItem('lang');
    if (lang === 'finnish') {
        langHeader.innerHTML = 'Olet valinnut suomen kielen.';
    } else if (lang === 'swedish') {
        langHeader.innerHTML = 'Du har valt svenska';
    }
}

// Function to display saved notes
function showNotes() {
    let notes = JSON.parse(localStorage.getItem('fiNotes')) || [];
    for (let note of notes) {
        let newNote = document.createElement("p");
        newNote.innerHTML = note;
        fiList.appendChild(newNote);
    }
}

// Removes all appended notes from list and localstorage
function removeAllNotes() {
    fiList.innerHTML = "";
    localStorage.removeItem("fiNotes");
}
// Call the necessary functions
showLang();
showNotes();





