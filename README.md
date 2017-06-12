# [![Caramel](dist/assets/header2.png)](https://kurisubrooks.com/caramel)

[![Join us on Discord](https://discordapp.com/api/guilds/292970618834649088/embed.png)](https://discord.gg/jD5V5EH)

> Caramel is a simple, modern, responsive website framework. Caramel is fully responsive, meaning you only need to write code once, to have the same results across multiple platforms. Created by [kurisubrooks](https://kurisubrooks.com), Caramel is being developed with help from the open-source community on GitHub.

## Getting Started
- [Download the latest Release](https://github.com/kurisubrooks/caramel/releases)
- [Download the latest Development Build](https://github.com/kurisubrooks/caramel/archive/master.zip)
- Clone the repo: ```git clone https://github.com/kurisubrooks/caramel.git```

#### Quick Start
Jump right into Caramel by using the following HTML5 Boilerplate.

```html
<!doctype html>
<html lang="en">
<head>
    <title>Caramel</title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./caramel.min.css" rel="stylesheet">
</head>
<body>

    <main>
        <h1>Welcome to Caramel!</h1>
        <p>Your code goes down here!</p>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="./caramel.min.js"></script>

</body>
</html>
```

## What's included?
Our [public releases](https://github.com/kurisubrooks/caramel/releases) only contain the files that are necessary for front-end development. If you'd like to develop for, or modify Caramel, we'd recommend downloading the [Development Build](https://github.com/kurisubrooks/caramel/archive/master.zip), which includes our build tool, and the sass source files.

```
caramel/
├── showcase.html
│
├── css/
│   ├── caramel.css
│   └── caramel.min.css
│
└── js/
    ├── caramel.js
    └── caramel.min.js
```

## Documentation
Head on over to our [website](https://kurisubrooks.com/caramel), and view the Showcase. All code usage and examples are listed right there on the page! If you want to see the exact syntax we use to show you the content on the page, simply right click on the page and view source (depending on whether your browser supports this feature).

Still stuck or need further help? Tweet [@kurisubrooks](https://twitter.com/kurisubrooks), and he'll try to answer any questions you may have.

## Compiling
We've included an easy and hassle free way for you to compile Caramel. We've included our own Gulp build tool, that you can use to compile Caramel.

#### Required:
Our compiler runs on [Node.js](https://nodejs.org/), so before you can continue, please ensure that you have it installed.
Once you have Node installed, you'll need [Gulp](http://gulpjs.com/). If you already have both Node and Gulp installed, skip these steps, otherwise install [Node.js](https://nodejs.org/) from their website, then run the following command to install Gulp:
```
npm install gulp --global
```
**Note: You may need to run this command with sudo on macOS**

#### Install:
To get the latest version of Caramel and to install the build tools, run the following set of commands:
```
git clone https://github.com/kurisubrooks/caramel.git
cd ./caramel
npm install
```

#### Usage:
To run the build tool, run the following command:
```
gulp
```

After the build is complete, the output `caramel.css`, `caramel.min.css` and `caramel.min.js` files can be found in your `./dist/css` and `./dist/js` folders respectively.

## Compatibility
Caramel has been designed for any browser that supports [CSS3](https://html5test.com/). Caramel has been tested, and is recommended for use on:

Chrome | Firefox | Safari | Opera | Edge | IE
:----: | :-----: | :----: | :---: | :--: | :-:
  21+  |   28+   |   7+   | 12.1+ |  20+ | 10, 11
