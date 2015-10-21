# Navigation
An easy way to have a set of links on any page of your site.


#### Usage
A nav bar requires the following items to function.
```html
<nav class="nav bar">
    <ol>
        <li class="collapse"><a><i class="fa fa-bars"></i></a></li>
        <li><a href="#">...</a></li>
    </ol>
</nav>
```
Nav bars must include a collapse class. This makes nav bars work on mobile or devices with a width smaller than the collapse point. Any items after the collapse object will be rendered on the nav bar. See `Advanced Usage` for some examples of style options.

#### Styles
Available styles for nav bars include the following options:  
`Normal`, `Dark`, `Thick`.

`Normal` is the default style, which is used if you don't include any other style options. `Dark` is the same as normal, except uses a dark theme rather than being light. `Thick` makes the nav bar taller in appearance, best used when at the top of a webpage or fixed to the top.

See the preview below to see syntax, replace `$style` with one of the available style options.

```html
<nav class="nav bar $style">
    <ol>
        <li class="collapse"><a><i class="fa fa-bars"></i></a></li>
        <li><a href="#">...</a></li>
    </ol>
</nav>
```

#### Advanced Usage
Nav bars have multiple advanced options. Some of which include the following:  
`Brand`, `Dropdown`, `Input`, `Right Aligned`.

- `Brand` is useful for including your company/project logo or name. It automatically hides on collapse and has no hover feature.
    - Note: If you are using a logo, depending on it's size, you might have to adjust the padding of the brand class. You can do this by changing the padding of `.brand a`
- `Dropdowns` enable you to have dropdown menus from nav items.
- `Inputs` let you have inline forms, such as text fields and form submission buttons inline. These are already styled to fit in with the nav bar.
- `Right Aligned` items will be positioned on the right side of the nav bar, rather than being defaultly on the left.

Some of these do not have simple classes that you can add on to enable, but require more than 1 line of code to be used. Please see the syntax below to see how you can encorporate each of these advanced styles.

```html
<nav class="nav bar">
    <ol>
        <li class="collapse"><a><i class="fa fa-bars"></i></a></li>
        <li><a href="#">...</a></li>

        // Brands
        <li class="brand"><a href="#">Brand Name</a></li>

        // Dropdowns
        <li class="dropdown"><a class="dropdownitem">Dropdown ▾</a>
            <ol>
                <li><a href="#">...</a></li>
            </ol>
        </li>

        // Right Aligned
        <ol class="right">
            <li><a href="#">...</a></li>
        </ol>

        // Input
        <li><input type="text"></li>
        <li><input type="submit">Submit</a></li>
    </ol>
</nav>
```
