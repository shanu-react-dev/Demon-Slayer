## CSS

_CSS stands for Cascading Style Sheets, It is used to add stylings and positionings to the HTML elements. We can add CSS in four ways mentioned below._

1. **Inline CSS :** This CSS is having the highest priority to the stylings of elements. We can add inline CSS using `style` attribute inside opening tag of HTML elements. It consist of properties and values. such as `color: "blue";`
   ```html
   <h1 style="color: red;">hii this is Shanu</h1>
   ```
2. **Internal CSS :** This is a way to add CSS to the HTML elements using style tag inside head tag of HTML file.

```html
<style>
  h1 {
    color: yellow;
  }

  p {
    background-color: aquamarine;
  }
</style>
```

3. **External CSS :** This is also a way to add the CSS to our HTML elements using external file having extension as `.css`. This file contains properties and values for our targeted elements. It must and should be linked to our HTML file inside head tag using `link` tag.
   ```html
   <link rel="stylesheet" href="./specificity.css" />
   ```
4. **@import:** This is a way to add CSS to our HTML elements using `@import` keyword in CSS file. It allows us to add third Party css file or another CSS file created by users.
   ```css
   @import url("./style2.css");
   @import "./style2.css";
   ```
