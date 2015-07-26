# [Caramel](http://caramel.ga)
Caramel is a simple, modern, responsive website framework. Caramel is fully responsive, meaning you only need to write code once, to have the same results across multiple platforms. Created by [kurisubrooks](https://kurisubrooks.com), Caramel is being developed with help from the open-source community on GitHub.

## Getting Started
- [Download the latest Release](https://github.com/lumios/caramel/releases)
- [Download the latest Development Build](https://github.com/lumios/caramel/archive/master.zip)
- Clone the repo: ```git clone https://github.com/lumios/caramel.git```

## What's included?
Our [public releases](https://github.com/lumios/caramel/releases) only contain the released files that are necessary for front-end use. If you'd like to develop for, or modify Caramel, we'd recommend downloading the [Development Builds](https://github.com/lumios/caramel/archive/master.zip), which include our compiling script, and the sass source files.

```
caramel/
├── index.html
│
├── css/
│   ├── caramel.css
│   ├── caramel.min.css
│   └── font-awesome.min.css
│
├── js/
│   ├── caramel.js
│   ├── caramel.min.js
│   └── jquery-2.1.3.min.js
│
└── fonts/
    └── fontawesome/
        ├── fontawesome.otf
        ├── fontawesome-webfont.eot
        ├── fontawesome-webfont.svg
        ├── fontawesome-webfont.ttf
        ├── fontawesome-webfont.woff
        └── fontawesome-webfont.woff2
```

## Documentation
Stuck? We've got you covered! Go on over to our [website](http://caramel.ga/), and view the Showcase. All code usage and examples are listed on the page. If you want to see how the elements are styled on page, Right Click the page and click View Source. (Depending on whether your browser supports this feature.)

## Modification
Want to make some changes to Caramel? No problem! We've included a way for you to easily modify Caramel with the use of our Build Script. Simply make your changes to the Source Code (.scss files), then run our compile script with the below command.

**Please Note:** Our compiler runs on [Ruby](https://www.ruby-lang.org/), and requires [Sass Command Line](http://sass-lang.com/install). Both must be installed for the Compiling Script to function.

#### Syntax:

```shell
ruby path/to/compile.rb  path/to/caramel.scss
```

## Compatibility
Caramel has been designed for any browser that natively supports [CSS3](https://html5test.com/). Caramel has been tested, and is recommended for use on:

Chrome | Firefox | Safari | Opera | Edge | IE
:----: | :-----: | :----: | :---: | :--: | :-:
  21+  |   28+   |   7+   | 12.1+ |  20+ | 10, 11

---

&copy; 2015 [Lumios](http://lumios.ga) &mdash;
Caramel is released under the [GNU GPL2](https://github.com/lumios/caramel/blob/master/LICENSE) Open Source License.
