//for loop practice
/*let pre_stones=['gold','diamond','jasper','sardine','beryllium']
for(let i=pre_stones.length;i>=0;i--)
{
console.log(pre_stones[i],i)
} */



/*let num= [1,9,80,78,56,76,24,2,64,39,85,47,21]
let i=0;
for(;i<num.length;)
{
console.log(num[i]);
i++;
}
console.log(num.sort((a,b)=>{
    return a-b;
}))
*/


/*
//working with for loop
//summing numbers
let total=0;
for(i=0;i<=10;i+=5)
{
    total+=i;
}
console.log(total)
*/


/*
//add even numbers from 1-10
let sum_even=0;
for(i=0;i<=10;i++)
{
    if(i%2==0)
    {
        sum_even+=i;
    }
}
console.log(sum_even)
*/


/*
//for loops to loop through an object
let utensil={
    name:'knife',
    price:'200',
    colour:'gray',
}
for (elem in utensil)
{
console.log(elem,utensil[elem])
} */


//Practice exercises from https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/
/* 
//1.Summing two arrays with only integer numbers
let arr1=[3,8,9,11,34,90,74,31,26,7,32,99]
let arr2=[89,54,67,21,21]
let sum1=0;
let sum2=0;
for (let i=0;i<arr1.length;i++)
{
   sum1=sum1 +arr1[i]
}

for(i=0;i<arr2.length;i++)
{
    sum2+=arr2[i]; 
}
x=sum1+sum2;
console.log(sum1)
console.log(sum2)
console.log(x) 
*/

/*
//Exercise 2: Printing out all even numbers upto and including n, excluding 0
let n= 10
for(num=1;num<=n;num++)
{
    if (num % 2==0)
    {
        console.log(num)
    }
}
*/


/*
//Exercise 3: Using a for loop to output results in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i=arr.length-1;i>=0;i--)
{
console.log(arr[i])
}
*/


//Exercise 4:Adding elements in the same position
let arrA=[3,9,4]
let arrB=[6,1,8]
let sum=0;
let sum_arr=[];
for(let i=0;i<arrA.length;i++)
{
sum=arrA[i]+arrB[i]
sum_arr.push(sum)
}
console.log(sum_arr)




    

