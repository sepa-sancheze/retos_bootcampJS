function es_palindromo(x){
    const cadena_numero = "" + x;
    const cadena_nuevo = cadena_numero.split("").reverse().join("");
    return cadena_numero == cadena_nuevo;
}

console.log(es_palindromo(151));