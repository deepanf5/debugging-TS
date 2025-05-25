"use strict";
// incase your getting some error in while debugging 
// AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system. For 
// more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
// At line:1 char:1
// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// reverting to pervious changes
// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Undefined
let age = 20;
if (age < 50) {
    age += 10;
    console.log(age);
}
//# sourceMappingURL=index.js.map