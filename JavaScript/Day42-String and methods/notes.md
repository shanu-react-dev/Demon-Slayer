## Strings in JavaScript

_In JavaScript string is a primitive datatype, it is a sequenece of multiple charaters enclosed within double quotes or single quotes. It is immutable._

_it provides some built in methods and properties which is used to perform some tasks on our string datatype._

#### method

_Method is nothing but a function which is defined inside an object._

1. **length:** Length is a string property used to find the number of characters present inside a string value.
2. **at:** at is a string method and it accepts index value as an argument and returns the characters which is present at the specified index. It can accept negative index also as an argument and if the specified index does not exists then it will return undefined.
3. **charAt:** charAt is a string method and it accepts index as an argument and returns the characters present at the specified index. If the specified argument is not present or it is negative it will return empty string.
4. **charCodeAt:** charCodeAt is a string method and it accepts index value as an argument and return type of this is number (ASCII value). If the specified index does not exist it will return NaN.
5. **concat:** Concat is a string method and it is used to concatenate multiple values. It can accept multiple arguments and returns concatenated string.
6. **endsWith:** endsWith is a string method it accepts string as an argument and returns boolean value if the specified characters lies at the end of string value it will return true else false.
7. **includes:** includes is a string method and it is used to check whether the specified string exists in the variables or not. If it exists it will return true else false.
8. **indexof:** indexOf is a string method and it accepts string as an argument and it will return the index value of the specified character for first iteration. If the specified character is not present it will return -1.
9. **lastIndexOf:** lastIndexOf is a string method it also accepts string as an argument and returns the last iteration index of the specified character. If the specified the character does not exist it will return -1.
10. **slice:** slice is a string method and used to extract the part of the string based on arguments. It can accept upto two arguments as `start index` and `end Index`. If there is only start index it will return the extracted string from the specified index upto the last. If there is start index as well as end index both then it will start from the start index and extract upto end index-1. It can accept negative index as well. If the specified index is not existing then it will return empty string.
11. **substring:** substring is a string method and it is also used to extract the part of the string and it is similar to slice but it does not accept any negative indexes. Here negative indexes will get converted into 0.
12. **substr:** This method belongs to string method and extracts the part of the string. It can accept upto two arguments first is start index and next argument is length (number of characters).
13. **padstart:** This is also a string method and it is used to show the confidential data partially like contact or phone number. It pads the text from starting. It accepts two arguments first is total length and next is the characters needs to be added for hidden character.
14. **padend:** Padend is similar to padstart. It also accepts the same arguments but it pads the character from the last.
15. **split:** Split is a string method and it is used to convert the string into an array in different ways. It can accept empty string, and space as an argument. It returns one array with splitted characters if we are passing empty string. It will return splitted words if we are passing space as an argument. If we are not passing any argument it will convert the entire sentence or word in an array.
16. **toUpperCase:** it is a string method used to convert the specified string into capital character for each letter.
17. **toLowerCase:** This is a string method and it is used to convert each and every character into small case for the specified string.
18. **tostring:** it is a string method and it is used to convert the specified data in the form fo string such as date object and map object
19. **trim:** it is a string method and it is used to remove the white spaces from both starting and ending of the specified string.
20. **trimEnd:** this is also a string method and it is used to remove the white spaces from ending of the specified string.
21. **trimStart:** it is also a string method and it is used to remove the white spaces from starting of the specified string.
