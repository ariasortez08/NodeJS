import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'



const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        description: 'Recibe la base de la tabla'

    })
    .check((argv, options) => {
        if (isNaN(argv.base || argv.demandOption == false)) {
            throw 'Introduzca los datos correctos'
        }
        return true;

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: 'false',
        default: false,
        description: 'Lista la tabla'
    })
    .option('h', {
        alias: 'limite',
        type: 'number',
        demandOption: 'false',
        default: 10,
        description: 'Recibe un limite para la tabla'

    })
    .argv
export { argv }