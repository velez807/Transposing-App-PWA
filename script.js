function transposeNotesClassic() {
    var notas = ["DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI"]

    var original = document.getElementById("original").value;
    var destino = document.getElementById("destino").value;

    var notasInput = document.getElementById("notesInput").value;
    notasInput = notasInput.toUpperCase();

    var textareaResult = document.getElementById("resultTextarea");

    // mostrar las notasinput en el textarea
    textareaResult.value = original + " " + notasInput + " " + destino + "Clásicas" + "\n";
}

function transposeNotesAmerican() {
    var notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B"]

    var original = document.getElementById("original1").value;
    var destino = document.getElementById("destino1").value;

    var notasInput = document.getElementById("notesInput1").value;
    notasInput = notasInput.toUpperCase();

    var textareaResult = document.getElementById("resultTextarea1");

    // mostrar las notasinput en el textarea
    textareaResult.value = original + " " + notasInput + " " + destino + "Americanas" + "\n";
}


function handleKeyPress(event) {
    if (event.keyCode === 13) {
        transposeNotesClassic();
    }
}

function handleKeyPress1(event) {
    if (event.keyCode === 13) {
        transposeNotesAmerican();
    }
}

// nav
function changeTab(event, tabName) {
    event.preventDefault();

    // Obtener todos los elementos de navegación
    var navLinks = document.getElementsByTagName('a');

    // Quitar la clase 'active' y agregar la clase 'inactive' a todos los elementos de navegación
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
        navLinks[i].classList.add('inactive');
    }

    // Agregar la clase 'active' al elemento de navegación seleccionado
    event.target.classList.remove('inactive');
    event.target.classList.add('active');

    // Mostrar u ocultar los elementos correspondientes según el tab seleccionado
    var americano = document.querySelector('.americano');
    var tradicional = document.querySelector('.tradicional');

    if (tabName === 'americano') {
        americano.style.display = 'block';
        tradicional.style.display = 'none';
    } else if (tabName === 'tradicional') {
        americano.style.display = 'none';
        tradicional.style.display = 'block';
    }
}


