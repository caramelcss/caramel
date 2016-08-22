const gulp = require("gulp")
const sass = require("gulp-sass")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")

gulp.task("default", ["javascript", "sass", "sass-minify"])

gulp.task("javascript", () => {
    gulp.src("./src/js/caramel.js")
        .pipe(uglify({ preserveComments: "license" }))
        .pipe(rename("caramel.min.js"))
        .pipe(gulp.dest("./src/js"))
})

gulp.task("sass", () => {
    gulp.src("./src/css/caramel.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(sass())
        .pipe(rename("caramel.css"))
        .pipe(gulp.dest("./src/css"))
})

gulp.task("sass-minify", () => {
    gulp.src("./src/css/caramel.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(rename("caramel.min.css"))
        .pipe(gulp.dest("./src/css"))
})

gulp.task("sass:watch", () => {
    gulp.watch("./src/css/**/*.scss", [ "sass", "sass-minify" ])
})
