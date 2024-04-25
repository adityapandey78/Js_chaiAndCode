// const coding=["js","ruby","java","python","cpp"]
// const value=coding.forEach((item) => {
//     console.log(item);
//     return;
// });

// console.log(value);
//we can see that it does not return the value it just printts the values

//++++++++++ >Filter< ++++++++++++++

const myNums=[1,2,3,4,5,6,7,8,9,10]
//same as maps in filter asklo for the explicit return you have to write return as you have defined its scope in the cury braces

// const newNums= myNums.filter((num)=>{
//     return num>4
// })

//implicit return here

const newNums= myNums.filter((num)=> num>4
)
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks1=books.filter((bk)=>bk.genre==='History')
  const userBooks2=books.filter((bk)=>{ return bk.publish>=2009 || bk.genre==='Fiction'});
//upar idhr scope open kr liya hai that's why curly braces ko use kiya hai
  console.log(userBooks2);
