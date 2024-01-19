const accountId = 144553
let accountEmail =" kaglekhraj@gmail.com"
var accountPassword = "12345"
accountCity = "indore"
let accountState;

// accountId = 2; //not allowed

accountEmail = "kag@gmail.com"
accountPassword = "223232"
accountCity = ' JABALPUR'

console.log(accountId);

/*
prefer not to use var
because of issue in blank scope and functional scope
*/

console.table([accountId ,accountEmail,accountPassword, accountCity,accountState]);