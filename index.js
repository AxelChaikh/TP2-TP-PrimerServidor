const fs = require('fs');



function crearNuevoArray(condicion) {

    let condiciones = ["number", "boolean", "string", "null"];
    let condicionXParam = condiciones.find(c => c === condicion);


    if (condicionXParam === undefined) {
        throw new Error("La condicion no existe");
    }else {

        const miArray = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false,2];
        let newArray = [];

        for (let i = 0; i < miArray.length; i++) {
            for (let j = i + 1; j < miArray.length; j++) {
                if (miArray[i] === miArray[j]) {
                    miArray.splice(j, 1);
                    j--;
                }
            }
        }


        if (condicionXParam === "string") {
            newArray = miArray.filter((v) => typeof (v) === condicion).sort();
        }else {
            newArray = miArray.filter((v) => typeof (v) === condicion).sort((a,b)=>a-b);
        }

        const Archivo = fs.writeFileSync('resultado.txt', newArray.toString() ,'utf8');
        const leerArchivo = fs.readFileSync('resultado.txt', "utf-8")
        return console.log("El resultado es: ", leerArchivo);
    }
}


const condicion1 = "number" ;

try {
    crearNuevoArray(condicion1)
} catch (error) {
    console.log(error.message)
}
