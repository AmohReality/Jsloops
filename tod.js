//for loop practice
/*let pre_stones=['gold','diamond','jasper','sardine','beryllium']
for(let i=pre_stones.length;i>=0;i--)
{
console.log(pre_stones[i],i)
} */

let num= [1,9,80,78,56,76,24,2,64,39,85,47,21]
let i=0;
for(;i<num.length;)
{
console.log(num[i]);
i++;
}
console.log(num.sort((a,b)=>{
    return a-b;
}))