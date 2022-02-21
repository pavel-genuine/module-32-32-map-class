
const business = (a,b='Ai')=>{
    const temp = `our word will be change dramatically in near future.
    ${a} and application of ${b} will change the way peaple thinking`

    console.log(temp);

    const arr = ['machine learning','data analytics',`${a}`,`${b}`]
    console.log(...arr);

    const nums =[32,43,55,77]
    const biggest= Math.max(...nums)
    console.log(biggest);
    const newArr = [22,...arr, 99]
    console.log(newArr);
    const newNums = [22,...nums, 88]
    console.log(...newNums);

}

business('data science')