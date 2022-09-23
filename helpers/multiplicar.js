import * as fs from 'node:fs';
import colors from 'colors';

let x = 10;
let resultado = 1;
let salida = '', consola;

function crearTabla(base, listar, limite) {
    preguntarBase(base, limite);
    fs.writeFileSync(`./archivos/${base}.txt`, salida, 'utf-8');

    if (listar === true) {
        console.log(`Tabla del ${base}\n`);
        console.log(consola);
        console.log(`El archivo de la tabla del ${base} se ha
        creado correctamente`.rainbow);
        return;
    }

}

function preguntarBase(base, limite) {

    for (let i = 1; i <= limite; i++) {
        resultado = i * base;
        salida += `${base} ${'x'} ${i} =  ${resultado}\n`;
        consola += `${base} ${'x'.black} ${i} ${'='.black}  ${resultado}\n`;
    }
}

export { crearTabla, preguntarBase }