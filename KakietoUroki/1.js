class Kata {
    static getVolumeOfCuboid(length, width, height) {
        let result = length * width * height
        return result;
    }
}


function otherAngle(a, b) {
    let third = 180 - (a + b);
    return third;
  }

const obj = {
    name: 'Alex',
    age: 30,
};

console.log(name in obj); // true