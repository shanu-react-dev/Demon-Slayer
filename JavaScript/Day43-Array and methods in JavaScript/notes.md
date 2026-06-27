### Array

_Array is a non-primmitive datatype in JavaScript. It can be homogeneous or heterogeneous. It helps to store multiple values in a single variable. It is also known as a continuous block of memory. It is mutable in nature._

## ways to create an Array

_In JavaScript we have multiple ways to create an array such as array literals, new keyword and array constructor Function._

1. **Array literals:** ["Shanu", "Shiva", "Shadab", "Shabnam"]
2. **new Keyword:** new Array("Hii", "Hello", "Byee)
3. **Array constructor Function:** Array("hey", "Shanu", "Byee")

### several methods and explanations as follows

1. **length:** It is a property used to count the elements present inside an array. It gives the number of the elements present.
2. **at():** This is an array method as well as string method. It accepts negative or positive index value as an argument and returns the element at the specified index. If the specified index does not exist then it will return undefined.
3. **concat():** This method accepts values or an array as an argument and returns one new array with merged elements. If we are passing an object as an argument then it will not get spreaded the entire object will be stored on a single index.
4. **flat():** This is an array method and it is used to flatten a nested array into a single array. It accepts argument as number. Upto what level of nested array we want to merge. If we pass infinity it will merge the entire nested array into a single array. It does not modify the original array.
5. **includes():** It is an array method and it accepts one argument. If the specified argument is present inside an array then it will return true else false. It does not modify the original array.
6. **indexOf():** It is an array method and it accepts element as an argument and if the specified argument is present it will return the index of the argument. If the specified argument is incorrect it will return -1.
7. **join():** It is an array method and it accepts separator as an argument. It converts the array in string. It does not modify the orginal array.
8. **keys():** It is an array method and it does not accept any argument. It returns one object containing indexes of the elements present inside an array.
9. **lastIndexOf():** This is an array method and accepts elements as an argument and returns the index of the last iteration of the element. If the specified argument is not present inside an array it will return `-1`.
10. **pop():** This is an array method and used to remove the element from the last index. It does not accept any argument. It returns the removed element.
11. **push():** It is an array method and it is used to add the elements from the last index and it returns the updated length of an array. It modifies the original array.
12. **shift():** This is an array method and it does not accept any argument. It removes the first element from an array. It also modifies the actual array. It returns the removed element.
13. **unshift():** This is also an array method and it accepts multiple arguments and it can add the elements from the starting index and it returns the updated length of an array.
14. **slice():** Slice is a string and array method as well and it can accept upto two arguments. It returns one new array with extracted part of an array based on the specified arguments. If there is only one argument then it will return new array from the specified argument upto last element. If there are two arguments then it will return one new array from the starting index upto last index-1. It does not modify the orginal array.
15. **splice():** it is also an array method and used to extract the part of an array. It can accpet upto three or more arguments. first is start index second is delete count and third and later is elements needs to be added. It modifies the original array.
