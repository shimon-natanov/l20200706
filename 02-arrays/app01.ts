export { }

interface Person {
    name: string,
    age: number,
    hobbies: string[],
    role: [number , string]  // tupple
}

const person : Person = {
    name: 'popeye',
    age: 102,
    hobbies: ['Sport', 'Cooking'],
    role: [1 , 'admin'],
}


let favorites: string[]

//for  ...in 
//for  ...of 
    
//let favorites: any[]
// favorites = "AAA"
// favorites = ["AAA" , 100]