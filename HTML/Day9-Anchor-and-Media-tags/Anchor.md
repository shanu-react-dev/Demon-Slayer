## Anchor Tag in HTML

_Anchor tag in HTML is used to create links in our webpages. By using link we can redirect and access to specified resources. It accepts multiple attributes such as href stands for Hyper Reference and it holds the path of the resources it can be absolute path or relative path._

### syntax

```html
<a href="./path" target="" download>content</a>
```

## Attributes and Usage for Anchor tag

- **href:** This attribute stands for Hyper Reference and it holds the path of the resources. Path can be relative (resources will be available in the same directory) or absolute (https://www.google.com).
- **target:** This attribute allows us to open the specified link in different location. It accepts values such as `_self` which is by default. If I want to open my link in new tab then we can go with the value `_blank`. Here we have two more values such as `_parent` and `_top`.
- **Download:** This attribute allows you to create downloadable links by which we can download the specified resources.

## How to create different types of links

- **Redirective Link:** Using this link we can simply redirect to the specified resources. `<a href="https://www.google.com">Visit Google</a>`

- **Bookmark Link:** This link helps us to redirect to the different resources in the same web page. `<a href="#html">HTML</a>`

_Note:_ In the href here we have # html which is an ID name this should be same on the section which I want to redirect.

- **Downloadable link:** By using this link we can create a downloadable link. By which we can download the specified resources generally used to create links to download resume or any other content. `<a href="./SQL_fullpdf (1).pdf" download>Download SQL Notes</a>`
- **Mail link:** This kind of link will help to open the application by which we can send mail such as gmail or outlook etc. `<a href="mailto: amarjeetjtpr@gmail.com">Click here to write a mail</a>`
- **Contact link:** By using this kind of link we can create one contact link. After clicking the link it will open the respected Application in the device to make a call. `<a href="tel: +911234567890">Contact US</a>`
