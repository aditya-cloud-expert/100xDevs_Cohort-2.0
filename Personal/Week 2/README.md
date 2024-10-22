funtion sum(a, b) {
    return a + b
}

const sum = (a, b) => {
    return a + b
}

### There are 2 ways to create a function

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/', function (req, res) {
    
})


# Given an array , give me back a new array with every element multiplied by 2 by map function
// [1, 2, 3] -> [2, 4, 6]
const intArray = [1, 2, 3]

function transformArray(i) {
    return i * 2
}

output = intArray.map(transformArray)


# fitering , given an input array, give me back all the even values from it

const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

output = intArray.filter((i) => i % 2 === 0) # arrow function

## 2nd Way more simple

function isEven(i) {
    return i % 2 === 0
}

output = intArray.filter(isEven)
