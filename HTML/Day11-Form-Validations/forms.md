## Forms in HTML

_Form is a way to collect the data from the users using forms such as Login form, signup form etc._

_In HTML form is a tag and it is used to create forms. It comes up with several attributes such as action and method._

1. `action`: This attribute holds the api or url where the data will be sent after submitting the form.
2. `method`: This attribute allows form to add HTTP method. In form we have only two HTTP method `get` and `post`. `get` is used to get the data from the server where `post` is used to send the data to the server.

## Tags used in form for different perspective

1. `<label>`: This tag generally helps to add the label for any input field. It helps the users like what kind of data needs to be filled in the specific field. It comes with `for` attribute which is used to link the input field.
2. `<input>`: This tag is used to create different input fields to collect distinct data from the users.
3. `<fieldset>`: This tag helps to group the multiple input elements inside a box. It provides segregation for different data for a single resource.
4. `<legend>`: This tag provides one heading or label to the grouped elements.
5. `<select>`: This tag is used to create dropdown. Here we can add multiple options. If we want to collect the data like countries along with options we can use this.
6. `<option>`: This tag helps to create options for select tag.
7. `<datalist>`: This tag is similar to select means it also helps to create the dropdown like content but with added features like search.
8. `<textarea>`: This tag helps you to create multiline input box and generally used to collect the data like feedback comments etc.

## Attributes used by input tags and label tag

1. `type`: This attribute is used to specify which kind of input we want to create. To collect different data we have set of values for attributes.
2. `placeholder`: It shows a faded text inside the input box just to show the what kind of data needs to be filled inside the input box.
3. `name`: This attribute is used to create a name for the input just to store the data.
4. `value`: Using this attribute we can specify the default value for an input. Generally used to specify the data where user is not able to write anything. He can select only. such as checkbox and dropdown.
5. `id`: This attribute will help to link the label tag with input tag. here we need to make sure the value of `id` attribute and `for` attribute needs to be same.

## Form validations

_Form validations is a way to validate the user data. It helps to get the expected data from the users. We can perform form validation using attributes._

1. `required`: This attribute will help you to make the input field needs to be filled mandatorily. Until and unless it is filled form will not get submitted.
2. `minlength`: This attribute helps you to set the minimum length of a text data such as username.
3. `maxlength`: This attribute helps you to set the maximum length of an input box such as text and password.
4. `min`: This attribute helps you to set the minimum value of an input box where we can collect the numeric data such as number, date, range etc...
5. `max`: This attribute helps you to set the maximum value of an input box where we can collect the numeric data such as number, date, range etc...
6. `pattern`: This attribute helps you to customize the pattern of data such as password must and should contain capital letter, small letter, special character etc.
7. `cols`: This attribute is used in textarea tag to define the size of the textarea box. It shows how many columns needs to be visible.
8. `rows`: This attribute is used in textarea tag to define the size of the textarea box. It shows how many rows needs to be visible.
9. `accept`: This attribute is used in `file` type input to customize the what file we need to accept from a user such as png, pdf etc.
10. `checked`: This attribute helps to show the default selected options to the users.
11. `disabled`: This attribute is used to disable the input box. User can't able to write anything here.
12. `readonly`: This attribute helps you to show the input box with predefined data user can see the data but not able to change it.
13. `step`: This is used in input type range just to fill the range in how many steps upto specified value.
14. `autofill`: Using this attribute we can restrict the auto fill input box. Means suggestion will not work for any input. It works on the specified value liek off or on.
