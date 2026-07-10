## DOM (Document Object Model)

_DOM stands for Document Object Model, It is a browser API which helps to interact with HTML using JavaScript. It creates a tree like structure for our HTML document. Using DOM we can perform dynamic changes on the UI._

_It represents the entire HTML document in the form of Object or node in the Browser._

_Standardizes how web browsers read and modify HTML and XML files. It transforms a static web page into an interactive layout that changes instantly upon user input._

### Ways to access HTML Elements using DOM

1. **getElementById():** This is a DOM method and helps to access an element which is having id. It returns the first matching element with the same id Provided in the argument. If the passed id is incorrect then it will return me null.
2. **getElementsByClassName():** This is a DOM method and it accepts classNames as an argument and returns HTML collection. If the passed argument is incorrect or invalid it will return empty html collection.
3. **getElementsByTagName():**This is a DOM method and it accepts tag name as an argument and returns HTML collection. If the passed argument is incorrect or invalid it will return empty html collection.
4. **querySelector():** This DOM method accepts CSS selectors as an argument and returns the first matching element. If the specified argument is incorrect then it will return null.
5. **querySelectorAll():** This is similar to queryselector but it returns nodelist. If the specified argument is incorrect; it will return empty nodelist.

### HTMLCollection

_HTMLCollection is an array like object which contains only element nodes. It does not support any array methods. It has only length property and we can use classical loop such as for loop._

_Array methods can be performed after converting the HTMLCollection into an array. We can convert it into an array using `Array.from` method._

### nodelist

_Nodelist is an array like object Here we will get entire nodes of an element. Node is an object. In DOM Each and every element, text, comment, attribute everything will be considered as node._

_Here we get only one array method forEach to iterate this array like object. We can use any array methods here also after converting this into an array._
