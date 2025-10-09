let a = 1;
let r = 0;
let target = 6
for (let index = 1; index <= target; index++) {
    let f = index * a
    a = f
    r = r + f
}

console.log(r)