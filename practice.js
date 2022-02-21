// single parameter
const fn1 = x=>x*5

console.log(fn1(5));

// double parameters

const fn2 = (x,y)=> (x+2)*(y+2)

console.log(fn2(4,5));

const fn2New = (x,y)=> {
    const sum1 = x+2
    const sum2 = y+2
    const result = sum1*sum2
    return result
}

console.log(fn2New(6,7));



// triple parameters

const fn3 = x =>x*x*x
console.log(fn3(5));


const array1= [3,5,6,7,9,10,11]

const newArray1 = array1.map(x=>x*5)

console.log(newArray1);

// const newArray2 = array1.filter(x=>x%2==1) (normal)
const newArray2 = array1.filter(x=>x%2)
// (if the condition is true =1// or false=0)

console.log(newArray2);

const objArr= [{name:'books' , price:4000},
     {name:'head-phone' , price:5000},
    {name:'monitor', price:10000}, {name:'Keyboar', price:5000}]

    const finder = objArr.find(x=>x.price==5000)

    console.log(finder);

    const object1 = {name:"milton akonda", designation: "ceo", 
    org:{name:"shahin traders", address:"valuka bazar"}, 
    father :{name:'jalal uddin', 
    profession :{role1: 'property-owener', role2:"brickfiled-owner" },
     routine :['in-house', 'in-brick-field','in-fisheries']}}

    const role1 = object1.father.politics?.profession.role1

    console.log(role1);

    const {role2} = object1.father.profession

    console.log(role2);
    
    const {routine}=object1.father

    console.log(routine);


    const temp = `he is ${object1.name} , he the ${object1.designation} of ${object1.org.name} 
    situated at ${object1.org.address}. his father ${object1.father.name} is a 
    ${object1.father.profession.role1} & a ${object1.father.profession.role2}. he plays with ${fn1(5)}`

      console.log(temp);

      const arrayNew = [ 4,6,9,22]

      const [one , two ,three] = [4,6,9]

      console.log(three);

   

   