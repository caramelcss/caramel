const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

gulp.task("js", () =>
    gulp.src("./js/caramel.js")
        .pipe(babel({ presets: [["es2015", { "modules": false }]] }))
        .pipe(gulp.dest("./dist/js"))
        .pipe(uglify({ preserveComments: "license" }))
        .pipe(rename("caramel.min.js"))
        .on("error", function(error) {
            console.error(error);
            this.emit("end"); // eslint-disable-line no-invalid-this
        })
        .pipe(gulp.dest("./dist/js")));

gulp.task("sass", () =>
    gulp.src("./s*ss/caramel.s*ss")
        .pipe(sass().on("error", sass.logError))
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(rename("caramel.css"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(rename("caramel.min.css"))
        .pipe(gulp.dest("./dist/css")));

gulp.task("watch", () => gulp.watch(["./s*ss/**/*.s*ss", "./js/**/*.js"], ["sass", "js"]));
gulp.task("build", ["sass", "js"]);
