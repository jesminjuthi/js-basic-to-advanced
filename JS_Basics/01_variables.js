const accountId = 1342343 // acceptable ✔️
let accountEmail = "abc@gmail.com" // acceptable ✔️
var accountPassword = "13434" // We should avoid this ⚠️
accountCity = "Dhaka" // This format is not acceptable ❌
let accountMobile; // (;) doesn't matter here! ⚠️

// accountId = 3434234 // we can't change const value ⚠️

accountEmail = "xyz@gmail.com" // we can change let varibales value 
accountPassword = "1343432" // we can change var variables value too 

/* 
    We should not use var, 
    because of block scope and functional scope!⚠️⚠️⚠️
*/

// we can print multiple variables with console.table and the output will show in table format 😎

console.table([accountId, accountEmail, accountPassword, accountCity, accountMobile])

