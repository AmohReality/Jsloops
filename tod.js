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


/*
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
*/


//***********
//app.all('path', (req, res, next) => {    
//});
//**********


/*
//Exercise 5: Making every second item of a string uppercase
let names='oluwadara';
for(i=0;i<names.length;i++)
{
    if (i%2 !=0)
    {
        console.log (names[i].toUpperCase());
    }
    else
    {
     console.log(names[i])
    }
}
*/



/*
//Exercise 6: Check if a string contains letter 'y', if it does pring yes, otherwise, print 'no'
//###### Check it again
let text = 'I did not see you';
let x=""
for(i=0;i<text.length;i++)
{
    if(text[i]==='y')
    {
        x='yes'
    }
    else
    {
        x='no'
    }
    console.log(x)
}
*/


/*
//Exercise 7: Given a number n, calculate the factorial of the number
let n = 4;
let x=1;
for(i=n;i>0;i--)
{
 x*=i;
}
console.log(x) 
*/

/*
//Exercise 8: Allows the user to guess a 4-digit pit exactly four times
let pin= 4367;
let access= 4367
let y='please make your guess';
let x= 'that was correct!'
for(i=0;i<4;i++)
{
    if(pin===access)
    {
        console.log(x)
    }
    else
    {
        console.log(y)
    }

}
*/


//Exercise 9:Find whether a string is a palindrome, i.e reads the same forward and backwork
/*
let str= "nun";
const stringy= ()=>
{
let splittyarr = str.split('')
let splitreverse= splittyarr.reverse();
let joinsplre= splitreverse.join('')
return joinsplre;
}
for(i=0;i<str.length;i++)
{
    if(str[i]===stringy()[i])
    {
        console.log("that's a palindrome")
    }
    else
    {
        "That's not a palindrome"
    }
}




//Better still:

let word ='nurses' ;
let wordr='';
function myword()
{
for(let i=0;i<word.length;i++)
{
    let x=word.split(word[i]);
    let y=x.reverse();
    wordr=y.join();  
}
return wordr;
}
if(word===myword())
{
    console.log("That's is a palindrome")
}
else
{
    console.log('Not a palindrome')
}





//Another way

let word= 'racecar';
const workout= ()=>{
let reverse_word= '';
for(let i=word.length-1;i>=0;i-- )
{
   reverse_word+= word[i];
}
return reverse_word;
}
if(word===workout())
{
    console.log("That's is a palindrome")
}
else
{
    console.log('Not a palindrome')
}
*/




//Exercise 10;Given a num, do the summation from 1 to that number
let num=2;
let sum=0;
for (i=0;i<=num;i++)
{
   sum+=i
}
console.log(sum)




    

