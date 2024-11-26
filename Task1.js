// 1. Write a JavaScript function to calculate the sum of two numbers. 
const add=(a,b)=>{
    return a+b
}
console.log(add(4,5))
// 2. Write a JavaScript program to calculate the factorial of a given number.
const factorial=(n)=>{
    let ans=1
    if(n===0||n==1){
        return 1
    }
    else{
        for(let i=2;i<=n;i++){
            ans=ans*i
        }
    }
    return ans
}
console.log(factorial(5))
//3.  Implement a function to find the sum of all the numbers in an array. 
const arr=[3,4,5,67,8]
const sumarraymarks=(arr)=>{
    let ans=0
    for(let x of arr){
        ans=ans+x
    }
    return ans
}
console.log(sumarraymarks(arr))
// 4. Write a JavaScript function to check if a given string is a palindrome. 
const checkpalindrome=(str)=>{
    let i = 0
    let j = str.length-1
    let ans = false
    while(i<j){
        if(str.charAt(i)===str.charAt(j)){
            ans=true
        }else{
            ans=false
            break
        }
        i++
        j--
    }
    if(ans){
        console.log("str is palindrome")
    }else{
        console.log("str is not palindrome")
    }
}
checkpalindrome("abcba")
// 5. Implement a function to remove duplicates from an array. 
const arr2=[1,3,4,3,5,5,6,2,6]
const removedublicate=(arr2)=>{
    const ans=[]
    for(let i=0;i<arr2.length;i++){
        for(let j=i+1;j<arr2.length;j++){
            if(arr2[i]==arr2[j]){
                arr2[i]=-1
            }
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]!=-1){
            ans.push(arr2[i])
        }
    }
    return ans
}
console.log(removedublicate(arr2))