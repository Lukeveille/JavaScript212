// Get the modal
var modal = document.getElementById('myModal');
var modalBody = document.getElementById('modalBody');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Grabs user input, applies it to modal, then reveals modal

function closeModal() {
    modal.style.display = "none";
}

btn.onclick = function() {
    var title = document.querySelector("#title").value;
    var subtitle = document.querySelector("#subtitle").value;
    var textBody = document.querySelector("#textBody").value;

    modal.style.display = 'block';
    modalHead.innerHTML = title;
    subHead.innerHTML = subtitle;
    modalBody.innerHTML = textBody;
}

// Hides modal when user clicks X
span.onclick = function() {
    closeModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}