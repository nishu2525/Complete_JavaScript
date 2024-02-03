/*
To store we need memory space.
So we create variables.
Const →value can't be changed.
*/

const n1="Nishad";
const n2="Vaidu";
const n3="Umap";
const n4="Nishu";
 console.log(n1) ;
 console.log(n2) ;
 console.log(n3) ;
 console.log(n4) ;
 /*
If you  want to log multiple things at a time .
Dont use
*/
// → Just do
console.table([n1,n2,n3,n4]);
/*
Prefer Not to use var - bcz of issue in block  scope & functional Scope.

If you don't define any value of variable then you'll get 
undefined
*/