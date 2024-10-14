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

// Caso de prueba sin ovejas
const testList = [false, false, false];
const result = countSheeps(testList);
console.log(result);

// Caso adicional con ovejas presentes
const testList2 = [true, false, true, true, false];
const result2 = countSheeps(testList2);
console.log(result2);
