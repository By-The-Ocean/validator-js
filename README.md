# Validator-js
Simple JS function to validate html input fields using jQuery

# Usage
In html tag insert "validate=''" attribute.
In this attribute place one or several rules that describe needed validation separated by space.

In JS call function "validateAll(success_callback,mark_failed_fields,fail_callback)"

# Rules

* notempty - string must be 1 or more characters.
* email - must be valid email
* phone - must be valid phone (Estonian phone code only)
* number - must be a valid integer or float.
* 1-10 - range is defined like this.
# Examples
Paste this code to see it work

        <input type="text" validate="notempty number" placeholder="notempty number">
        <input type="text" validate="number" placeholder="number">
        <input type="text" validate="email" placeholder="email">
        <input type="text" validate="phone" placeholder="phone">
        <input type="text" validate="notempty 6-9 number" placeholder="6-9">