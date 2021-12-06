function agregar_arrays(array){
    let new_array = [];
    for (let x = 0; x < array.length; x++) {
        for (let y = x + 1; y < array.length; y++) {
            for (let z = y + 1; z < array.length; z++) {
                new_array.push([array[x], array[y], array[z]]);
            }
        }
    }
    return new_array;
}

function arrays_sumados(array){
    let final_array = [];
    let suma = 0;
    for (let a = 0; a < array.length; a++) {
        suma = 0;
        array[a].forEach(element => {
            suma += element;
        });
        if (suma == 0) {
            final_array.push(array[a]);
        }
    }
    return final_array;
}

let array = [-1,0,1,2,-1,-4]

let final_array = arrays_sumados(agregar_arrays(array));

console.log(final_array);
