# [Caramel](http://caramel.ga)

[![devDependency Status](https://david-dm.org/lumios/caramel/dev-status.svg)](https://david-dm.org/lumios/caramel#info=devDependencies)

Caramel is a simple, modern, responsive website framework. Caramel is fully responsive, meaning you only need to write code once, to have the same results across multiple platforms. Created by [kurisubrooks](https://kurisubrooks.com), Caramel is being developed with help from the open-source community on GitHub.

## Getting Started
- [Download the latest Release](https://github.com/lumios/caramel/releases)
- [Download the latest Development Build](https://github.com/lumios/caramel/archive/master.zip)
- Clone the repo: ```git clone https://github.com/lumios/caramel.git```

## What's included?
Our [public releases](https://github.com/lumios/caramel/releases) only contain the released files that are necessary for front-end use. If you'd like to develop for, or modify Caramel, we'd recommend downloading a [Development Build](https://github.com/lumios/caramel/archive/master.zip), which includes our build tool, and the sass source files.

```
caramel/
├── showcase.html
│
├── css/
│   ├── caramel.css
│   └── caramel.min.css
│
├── js/
│   ├── caramel.js
│   ├── caramel.min.js
│   └── jquery.min.js
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
Stuck? We've got you covered! Go on over to our [website](http://caramel.ga/), and view the Showcase. All code usage and examples are listed on the page. If you want to see how the elements are styled on page, Right Click the page and click View Source. (Depending on whether your browser supports this feature.) Need further help? Shoot an email to [kurisu@lumios.xyz](mailto:kurisu@lumios.xyz), and he'll try to get back to you as soon as he can.

## Compiling
Want to tinker? Great! We've included an easy and hassle free way for you to easily compile Caramel.
Included is a build tool that you can use to compile Caramel back into CSS.

#### Prerequisites
Our compiler runs on [Node](https://nodejs.org/), so before you can continue, please ensure that you have it installed!  
Once you have Node installed, you need [Grunt](http://gruntjs.com/). Run the following set of commands to install:
```
npm i grunt -g
```

#### Installation:
To get the latest version of Caramel and to install the build tools, run the following set of commands:
```
cd ~/.../caramel
git clone https://github.com/lumios/caramel.git
npm i
```

#### Building:
To run the build tool, run the following set of commands:
```
cd ~/.../caramel
grunt build
```

After the build is complete, the output `caramel.css`, `caramel.min.css` and `caramel.min.js` files can be found in your `./src` folder.

## Compatibility
Caramel has been designed for any browser that natively supports [CSS3](https://html5test.com/). Caramel has been tested, and is recommended for use on:

Chrome | Firefox | Safari | Opera | Edge | IE
:----: | :-----: | :----: | :---: | :--: | :-:
  21+  |   28+   |   7+   | 12.1+ |  20+ | 10, 11

### Legal
```text
Copyright (c) 2015 Lumios – All Rights Reserved.

Permission is hereby granted, free of charge, to any persons obtaining
a copy of this software, to deal this software within the agreed guidelines.

Copying, modification, contribution, non-commercial distribution and/or
sub-licensing this software are allowed, so long as you are subject to the
following conditions:

The above copyright notice and this permission notice will be included in all
copies, un-modified, within the Software.
Licensing and security checks may not be removed.
Republication of this software for personal or commercial gain is prohibited.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
