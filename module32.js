
// destructuring object & extract value to variable// nested objest // optional chaining

// destructuring is extract value from object property or array element to new variable
const masjid = {
    name:'sector 7 masjid', 
    location:'sec -7', 
    Khatib:{ name : ' Zakaria Abdullah', Address1:'Majid-Housing', Education:
     { InstitudeName : 'Markajud-dawa', Address2:'hazratpur'}
    }, 
    Imam:{ name: ' Maksudur Rahman', Address3:"Masjid-Housing"}
}

const {Address2} = masjid.Khatib.Education
const {Address3} = masjid.Imam

// optional chaining( used for just read a specific property value not for destructuring)

// console.log( masjid?.commite?.Khatib?.Education.Address2, Address3);

// destructuring array

const array = [ 2,4,5,6]

const [a,b]= [2,4]

// console.log(b);


// array map 

const array1 = [2,4,6,8]

newArr = array1.map(item=>item*item*item)

console.log(newArr);

const array2= ['mam', 'nam', 'tam']

const length = array2.map(item=>item.length)

console.log(length);



const objArr = [ {name:'milton', addr:'valuka', Profession:'biz'},
{name:'maruf', addr:'valuka', Profession:'biz'},
{name:'mamun', addr:'valuka', Profession:'biz'},
{name:'shafeen', addr:'valuka', Profession:'job'}]


// map is deliver a new array by functioning & looping through existing array

const newObjArr = objArr.map (item=>item.Profession)

console.log(newObjArr);

//filter
// filter is deliver a new array by applying a conditon in form of arraow function
//  through existing array
const newFilter = objArr.filter(item=>item.Profession=='job')
console.log('filter',newFilter);

//find
//find works as like as filter but instead of array return just the specific element
const newFind = objArr.find(item=>item.Profession=='job')

console.log(newFind);


//class , constructor , method , create object from class

class University{
    
    location = "campus-area";

    service = "giving education";

    propertyOwner= "govt.";

    studentName;
    studentId;

    constructor(name, id){
        this.studentName = name
        this.studentId= id
    }
}

class Engineering extends University {
    section;
    constructor(name,id,section){
        super(name,id)
        this.section= section
    }
}

class Philosophy extends University {
    section;
    constructor(name,id,section){
        super(name,id)
        this.section= section
    }
}
class Humanities extends University {
    section;
    constructor(name,id,section){
        super(name,id)
        this.section= section
    }
}

const objectnew = new Philosophy('milton','0323','a')

console.log(objectnew);


