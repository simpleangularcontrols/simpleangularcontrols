/// <binding BeforeBuild='default2' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var shell = require('child_process');

var plugins = {
    sass: require('gulp-sass'),
    svgSprite: require('gulp-svg-sprite'),
    xmlTransformer: require("gulp-xml-transformer")
};

gulp.task('default', function (done) {
    const options = {
        encoding: 'utf8',
        timeout: 0,
        maxBuffer: 200 * 1024,
        killSignal: 'SIGTERM',
        cwd: 'angualar/moduleBase',
        env: null
    };
    console.log("Starting Build");
    shell.exec("ng build", options, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
        console.log('Build Complete');
    });

    done();
});

gulp.task('buildAngularApp-Dev', function (done) {
    const options = {
        cwd: 'angualar/moduleBase',
        env: process.env
    };
    console.log("Starting Build");

    // Release
    // var output = shell.spawn(process.env.comspec, ['/c', 'ng build --prod --aot --build-optimizer --source-map false --vendor-chunk false --common-chunk false --output-hashing none'], options);
    // Debug
    var output = shell.spawn(process.env.comspec, ['/c', 'ng build --aot --source-map true --vendor-chunk false --common-chunk false --output-hashing none'], options);

    output.stdout.on('data', function (data) {
        console.log(data.toString());
    });

    output.stderr.on('data', function (data) {
        console.log(data.toString());
    });

    output.on('exit', function (code) {
        console.log('child process exited with code ' + code.toString());
    });

    output.on('error', function (code) {
        console.log('error: ' + code.toString());
    });
    done();
});

gulp.task('buildAngularApp-Prod', function (done) {
    const options = {
        cwd: 'angualar/moduleBase',
        env: process.env
    };
    console.log("Starting Build");

    // Release
    var output = shell.spawn(process.env.comspec, ['/c', 'ng build --prod --aot --build-optimizer --source-map false --vendor-chunk false --common-chunk false --output-hashing none'], options);
    // Debug
    // var output = shell.spawn(process.env.comspec, ['/c', 'ng build --aot -sm true -vc false -cc false -oh none'], options);

    output.stdout.on('data', function (data) {
        console.log(data.toString());
    });

    output.stderr.on('data', function (data) {
        console.log(data.toString());
    });

    output.on('exit', function (code) {
        console.log('child process exited with code ' + code.toString());
    });

    output.on('error', function (code) {
        console.log('error: ' + code.toString());
    });
    done();
});

gulp.task('sass-build', function (done) {

    gulp.src('./Layout/scss/style.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('./Layout/css/'));

    gulp.src('./Layout/scss/bootstrap/bootstrap.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('./Layout/css/'));

    gulp.src('./Layout/scss/nativestyles.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('./Layout/css/'));
    done();
});


gulp.task('svgsprite', function (done) {
    // Basic configuration example
    config = {
        //shape: {
        //    transform: [{
        //        custom: function (shape, sprite, callback) {
        //            console.log(sprite);
        //            console.log('------------------------------');
        //            // console.log(sprite);
        //            callback(null);
        //        }
        //    }]
        //},
        //svg: {
        //    transform: [function (svg) {
        //        svg = svg.replace(new RegExp('fill="#252525"', 'g'), 'fill="#252525" fill-opacity="0.4"');
        //        console.log('File\r\n');

        //        return svg;
        //    }]
        //},
        mode: {
            stack: {
                dest: './',
                sprite: "output/sprite.view.svg",
                bust: false,
                example: {
                    dest: 'output/template/template.html',
                    template: 'icons/template.html.mustache'
                },
                render: {
                    scss: {
                        dest: 'output/sprite.scss',
                        template: 'icons/template.scss.mustache'
                    }
                }
            }
        }
    };

    gulp.src('**/*.svg', { cwd: 'icons/svg' })
        .pipe(plugins.xmlTransformer((xml, libxmljs) => {
            // 'libxmljs' is libxmljs object. you can call any libxmljs function.
            var child = new libxmljs.Element(xml, 'note');
            child.text('some text');
            xml.get('//svg').addChild(child);

            // must return libxmljs Document object.
            return Promise.resolve(xml);
        }))
        .pipe(gulp.dest('icons/svg-disabled'));

    //gulp.src('**/*.svg', { cwd: 'icons/svg' })
    //    .pipe(plugins.svgSprite(config))
    //    .pipe(gulp.dest('icons'));

    done();
});