const fs = require('fs');
var colors = require('colors');


const crearArchivo = async ( base = 5, listar, hasta ) => {

    try {
        
        let salida =''
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
    
            const resultado = base * index;
            
            salida += `${ base } ${"x".green} ${ index } ${"=".green} ${ resultado }\n`;
            consola += `${ base } x ${ index } = ${ resultado }\n`;
        }
    
        if( listar ) {
            console.log('=============================='.green);
            console.log('         Tabla del:'.green, colors.blue(base) );
            console.log('=============================='.green);

            console.log(salida);
        }
    
       fs.writeFileSync(`./salida/tabla-${ base }.txt`, consola );
    
       return `tabla-${ base }.txt`;
    

    } catch (error) {

        throw error;
        
    }
}

module.exports = {
    crearArchivo
}
