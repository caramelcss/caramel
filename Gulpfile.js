const gulp = require("gulp");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

gulp.task("default", ["js", "sass"]);

gulp.task("js", () =>
    gulp.src("./js/caramel.js")
        .pipe(babel())
        .pipe(gulp.dest("./dist/js"))
        .pipe(uglify({ preserveComments: "license" }))
        .pipe(rename("caramel.min.js"))
        .pipe(gulp.dest("./dist/js")));

gulp.task("sass", () =>
    gulp.src("./scss/caramel.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(sass())
        .pipe(rename("caramel.css"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(rename("caramel.min.css"))
        .pipe(gulp.dest("./src/css")));

gulp.task("watch", () =>
    gulp.watch("./scss/**/*.scss", ["sass"]));
