const input = document.querySelector("input");
const svSubButton = document.getElementById("svSubmit");
const svList = document.getElementById("svTextField");
const langHeader = document.getElementById("langHeader");

function fiClick() {
    localStorage.setItem("lang", "finnish");  
}

// Event listener for the submit button
svSubButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value.trim() === "") {
        return; // Reject empty notes
    }

    let newNote = document.createElement("p");
    newNote.innerHTML = "•" + " " + input.value;
    svList.appendChild(newNote);
    input.value = "";

    // Save the new note to local storage
    let notes = JSON.parse(localStorage.getItem('svNotes')) || [];
    notes.push(newNote.innerHTML);
    localStorage.setItem('svNotes', JSON.stringify(notes));
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
    let notes = JSON.parse(localStorage.getItem('svNotes')) || [];
    for (let note of notes) {
        let newNote = document.createElement("p");
        newNote.innerHTML = note;
        svList.appendChild(newNote);
    }
}

function removeAllNotes() {
    svList.innerHTML = "";
    localStorage.removeItem("svNotes");
}

// Call the necessary functions
showLang();
showNotes();
