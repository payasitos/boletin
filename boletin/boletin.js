function Cargar() {

    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let emition = document.getElementById("emition").value;

    if (!name || !year || !emition) {
        alert("error")
    }
    else {


        let parrafo1 = document.createElement('p')
        let elementopadre = document.querySelector('.padre')
        elementopadre.appendChild(parrafo1)
        let textoparrafo1 = document.createTextNode('nombre y apellido: ' + name)
        parrafo1.appendChild(textoparrafo1)

        let parrafo2 = document.createElement('p')
        elementopadre.appendChild(parrafo2)
        let textoparrafo2 = document.createTextNode('curso: ' + year)
        parrafo2.appendChild(textoparrafo2)

        let parrafo3 = document.createElement('p')
        elementopadre.appendChild(parrafo3)
        let textoparrafo3 = document.createTextNode('fecha de emision: ' + emition)
        parrafo3.appendChild(textoparrafo3)

    }

    let num1 = document.getElementById("num1");
    num1.remove();

}

let cont = 0
let promfinal = 0

function ingresar() {

    let subject = document.getElementById("subject").value
    let first = parseFloat(document.getElementById("first").value)
    let second = parseFloat(document.getElementById("second").value)

    if (!subject || !first || !second) {
        alert("error")
    }
    else {

        const tr = document.createElement("tr")
        const elementotr = document.querySelector('.abuelo')
        elementotr.appendChild(tr)

        // materia

        const td1 = document.createElement("td")
        elementotr.appendChild(td1)
        const text1 = document.createTextNode(subject)
        td1.appendChild(text1)

        // nota 1

        const td2 = document.createElement("td")
        elementotr.appendChild(td2)
        const text2 = document.createTextNode(first)
        td2.appendChild(text2)

        // nota 2

        const td3 = document.createElement("td")
        elementotr.appendChild(td3)
        const text3 = document.createTextNode(second)
        td3.appendChild(text3)

        // promedio 

        let prom = (first + second) / 2;
        const td4 = document.createElement("td")
        elementotr.appendChild(td4)
        const text4 = document.createTextNode(prom)
        td4.appendChild(text4)

        cont++
        promfinal = (promfinal + prom) / cont
        document.getElementById("foot").textContent = 'promedio final: ' + promfinal

    }
}

function Imprimir() {
    
    let num2 = document.getElementById("num2");
    num2.remove();
    let imprice = document.getElementById("imprice");
    imprice.remove();

    window.print();
}