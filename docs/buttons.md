# Buttons
Simple ways to interact with on-page content, or referring links.


#### Standard Buttons
Buttons have several different types of elements that they can be used in. Links, Buttons, and as Inputs.
```html
<a href="#" class="btn $color">...</a>
<button class="btn $color">...</button>
<input type="submit" class="btn $color">
```

#### Small Buttons
```html
<button class="btn $color sml">...</button>
```
Small buttons are buttons that are smaller than the standard button size. Who would have guessed?

#### Clean Buttons
```html
<button class="btn $color clean">...</button>
```
A clean button has a simple style, a transparent background with a thick outline and bold text. Good for the times when you're creating a more modern-themed website.


#### Dropdown Buttons
```html
<div class="nav btn dropdown">
    <button class="btn dropdownitem $color">...</button>
    <ul>
        <li><a href="#">...</a></li>
        <li><a href="#">...</a></li>
        <li><a href="#">...</a></li>
    </ul>
</div>
```
Dropdown buttons are extremely useful, and when used correctly, allow your content to be expanded without adding dozens of buttons to the page.
