const students = [
    {
        name: 'Davina J Eskew',
        gender: 'female',
        age: 61,
        courses: ['math', 'bio']
    },
    {
        name: 'Jordan M Johnson',
        gender: 'male',
        age: 67,
        courses: ['math', 'chemistry']
    },
    {
        name: 'James G Carmona',
        gender: 'male',
        age: 25,
        courses: ['bio', 'computer']
    },
    {
        name: 'Orville S Schuyler',
        gender: 'male',
        age: 59,
        courses: ['computer', 'bio']
    },
    {
        name: 'Monica H Hill',
        gender: 'female',
        age: 37,
        courses: ['computer', 'math', 'chemistry']
    },
    {
        name: 'Zachary J Hawkins',
        gender: 'male',
        age: 34,
        courses: ['bio']
    },
    {
        name: 'Elizabeth J Mercer',
        gender: 'female',
        age: 12,
        courses: []
    },
]

// Under 50 and studied chemistry
const a = students.filter((person) => {
    return person.age < 50 && person.courses.includes('chemistry')
});
console.log(a)

// Male and studied math
const b = students.filter((person) => {
    return person.gender === 'male' && person.courses.includes('math')
});
console.log(b)

// Over 40, studied computer, but NOT math
const c = students.filter((person) => {
    return person.age > 40 && person.courses.includes('computer') && !person.courses.includes('math')
});
console.log(c)

// Studied nothing (empty courses)
const d = students.filter((person) => {
    return person.courses.every ((item) => {})  
});
console.log(d)

// Is there a student named “Elizabeth J Mercer”?
const e = students.some ((person) => {
    return person.name === 'Elizabeth J Mercer'
});
console.log(e)

// Is there a male student older than 60?
const f = students.some ((person) => {
    return person.age > 60 && person.gender === 'male'
});
console.log(f)

// Courses that all female students share
const list =[]
const g = students.forEach((person) => {
    if (person.gender === 'female') {
        list.push(person.courses)
    }
});
console.log(list)

// Sort students by age (ascending)
const list2 = []
const h = students.sort((a, b) => a.age - b.age)
console.log(h)
