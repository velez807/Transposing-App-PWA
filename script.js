function transposeNotesClassic() {
    var notas = ["DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI"]

    var original = document.getElementById("original").value;
    var nOriginal = numeroNota(original, notas);
    var destino = document.getElementById("destino").value;
    var nDestino = numeroNota(destino, notas);

    // Funcion para saber hacia donde hay que hacer el recorrido en la lista de notas
    if (nOriginal > nDestino) {
        var recorrido = nDestino - nOriginal;
    }
    else if (nOriginal < nDestino) {
        var recorrido = 12 - nOriginal + nDestino;
    }
    var resultado = [];

    var notasInput = document.getElementById("notesInput").value;
    notasInput = notasInput.toUpperCase();
    var notasArray = notasInput.split(" ");
    notasArray = bemolSostenido(notasArray, 0);

    var textareaResult = document.getElementById("resultTextarea");

    // Función para transponer las notas
    for (var i = 0; i < notasArray.length; i++) {
        var notaOriginal = notasArray[i];
        var nNotaOriginal = numeroNota(notaOriginal, notas);
        if (nNotaOriginal !== -1) {
            var nNotaTranspuesta = (nNotaOriginal - recorrido + notas.length) % notas.length;
            if (nNotaTranspuesta < 0) {
                nNotaTranspuesta += notas.length; // Desplazamiento cíclico hacia la izquierda
            }
            var notaTranspuesta = notas[nNotaTranspuesta];
            var notaTranspuestaCapitalizada = notaTranspuesta.charAt(0).toUpperCase() + notaTranspuesta.slice(1).toLowerCase();
            resultado.push(notaTranspuestaCapitalizada);
        } else {
            resultado.push('???');
        }
    }

    // Resultado final
    textareaResult.value += resultado.join(" ") + "\n";

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

function bemolSostenido(notasArray, modo) {
    if (modo == 0) {
        for (var i = 0; i < notasArray.length; i++) {
            switch (notasArray[i]) {
                case "DOB":
                    notasArray[i] = "SI";
                    break;
                case "REB":
                    notasArray[i] = "DO#";
                    break;
                case "MIB":
                    notasArray[i] = "RE#";
                    break;
                case "FAB":
                    notasArray[i] = "MI";
                    break;
                case "SOLB":
                    notasArray[i] = "FA#";
                    break;
                case "LAB":
                    notasArray[i] = "SOL#";
                    break;
                case "SIB":
                    notasArray[i] = "LA#";
                    break;
                default:
                    break;
            }
        }
    }
    else if (modo == 1) {
        for (var i = 0; i < notasArray.length; i++) {
            switch (notasArray[i]) {
                case "CB":
                    notasArray[i] = "B";
                    break;
                case "DB":
                    notasArray[i] = "C#";
                    break;
                case "EB":
                    notasArray[i] = "D#";
                    break;
                case "FB":
                    notasArray[i] = "E";
                    break;
                case "GB":
                    notasArray[i] = "F#";
                    break;
                case "AB":
                    notasArray[i] = "G#";
                    break;
                case "BB":
                    notasArray[i] = "A#";
                    break;
                default:
                    break;
            }
        }
    }

    return notasArray;
}

function numeroNota(nota, notas) {
    nota = nota.toUpperCase();
    for (var i = 0; i < notas.length; i++) {
        if (notas[i].toUpperCase() === nota) {
            return i;
        }
    }
    return -1; // Retorna -1 si la nota no se encuentra en el arreglo
}

function limpiarTextarea() {
    document.getElementById("resultTextarea").value = "";
    document.getElementById("resultTextarea1").value = "";
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

window.addEventListener('resize', function () {
    var minWidth = 400; 
    if (window.innerWidth < minWidth) {
        window.resizeTo(minWidth, window.innerHeight);
    }
});


