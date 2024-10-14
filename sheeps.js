function countSheeps(list) {
    let sheepCount = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] === true) {
            sheepCount++;
        }
    }
    
    if (sheepCount > 0) {
        return `There are ${sheepCount} sheep in total`;
    } else {
        return "UPS!!! Wolfs eaten Sheeps";
    }
}
 // Caso de prueba
 const list = [false, false, false];

const result = countSheeps(list);
console.log(result)
