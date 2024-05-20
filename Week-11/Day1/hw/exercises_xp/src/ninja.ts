// Exercise 1

const mapType = (val: number | string): number => {
    if (typeof val === 'number') {
        return val ** 2
    }
    return val.length
}
console.log(mapType(15));

// Exercise 2

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

console.log(getProperty({ name: 'Jack', age: 27 }, 'name'));

// Exercise 3

function multiplyProperty<T extends Record<K, number>, K extends keyof T>(obj: T, key: K, factor: number)  {
    if (typeof obj[key] === 'number') {
        console.log('hi');
        console.log(typeof obj[key]);
        
        // obj[key] *= factor
    } else {
        // console.log(`The property "${key}" is not a number.`);

    }
}

multiplyProperty({ name: 'Jack', age: 27 }, 'age',2)

