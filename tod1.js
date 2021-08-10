/* 
//Ways to loop in ann array and objects
// For, for in, forEach
//1. Using the for loop
let fruits = ['apple','mango','banana','strawberry','guava']
//for(st1;st2;st;)
for(let i=0;i<=fruits.length-1;i++)
{
console.log(fruits[i])
}


//using for... in 
let user = 
{
name:'Janet Boom',
age:59,
occupation:'vicar',
details:function(){console.log('mmmmh')}
}
//user.name  user['name']
for (elem in user)
{
    console.log(elem,user[elem])
}

// using forEach array method
//syntax
*/
let fruits = ['apple','mango','banana','strawberry','guava']

fruits.forEach(function(x,y,z)
{
    if(x==='mango')
    {console.log('my favourite')}
  else
  {
      console.log(x)
  }
})
/*

//Joining two arrays 
let arr1=[1,4,9,10]
let arr2=[3,5,9,11]
let arrsum=[]
//arrsum.concat(arr1,arr2)
//console.log(arrsum)

//can use also the push method
arrsum.push(arr1,arr2)
console.log(arrsum)

*/