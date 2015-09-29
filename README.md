# Validator-js
Simple JS function to validate html input fields using jQuery

# Usage
In html tag insert "validate=''" attribute.
In this attribute place one or several rules that describe needed validation separated by space.

In JS call function "validateAll(<success_callback>,<mark_failed_fields>,<fail_callback>)"

#Rules

notempty - string must be 1 or more characters.
email - must be valid email
phone - must be valid phone (Estonian phone code only)
number - must be a valid integer or float.