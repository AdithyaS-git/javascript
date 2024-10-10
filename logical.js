let aget =25;
let hasDriverLicence =true;
let canDrive =aget >=18 && hasDriverLicence;
console.log(canDrive)

let hasCreditCard =false;
let hasPayPal = true;
let canMakePayment =hasCreditCard || hasPayPal
console.log(canMakePayment)

let isLoggedIn= false;
let isNotLoggedIn =! isLoggedIn
console.log(isNotLoggedIn);

let isAdult=false;
let hasLicense =true;
canDrive =isAdult&&hasLicense;
console.log(canDrive);