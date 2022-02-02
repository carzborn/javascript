/**
 * Workshop: Password Checker
 *
 * Link: https://teams.microsoft.com/l/message/19:ee60e4662a5a4a95babd494649401fdc@thread.tacv2/1634737231314?tenantId=1f14a049-d614-4ea3-8d0d-040443a8bc19&groupId=10a26e5b-f1f9-4c41-892c-ba5f3e43d8ba&parentMessageId=1634737231314&teamName=FED21M&channelName=JavaScript%20Grundkurs-%2065%20Yhp&createdTime=1634737231314
 */

let password;
 //password = "password"; // inte giltigt
//password = "p@ssw%rd"; // giltigt
 password = "pa$$word"; // giltigt
 // password = "secretpassword"; // inte giltigt
 //password = "secret-password"; // giltigt
 //password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
 "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

let containsSpecialChar = false;

//Check for special chars
for (let i = 0;  i < specialChars.length; i++ )   
 {
    //console.log("At special char:", specialChars[i]);
    if (password.includes(specialChars[i])) 
    {
        console.log("Password contained char:", specialChars[i]);
        containsSpecialChar = true;
    } 
}
 
console.log("Specialtecken? ", containsSpecialChar)

//Har lösenordet minst 16 chars
if (password.length >= 16) {
    console.log("- Toppen");
}

else if (password.length >= 12 && password.includes ('-'))   {
    console.log("- Pretty good password");
} 

else if(password.length >= 8 && containsSpecialChar == true)   {
        console.log("- That's a great password");
}

 else {
        console.log("- Try again..");
    }

    






