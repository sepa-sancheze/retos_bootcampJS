const apertura = ['(', '{', '[']
const cierre = [')', '}', ']']
let indices = [];

/** @param {String} cadena  */
const validar_expresion = (cadena) => {
    if (cadena.length % 2 != 0) {
        return false;
    }
    for (let a = 0; a < cadena.length; a++) {
        if (apertura.includes(cadena[a])) {
            indices.push(apertura.indexOf(cadena[a]));
        }else if (cierre.includes(cadena[a])) {
            if (cierre.indexOf(cadena[a]) != indices[indices.length - 1]) {
                return false;
            }
            indices.pop();
        }else{
            return false;
        }
    }
    return indices.length == 0;
};

let a = validar_expresion('(){[]}');

console.log(a);