/// <binding BeforeBuild='default2' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var shell = require('child_process');

gulp.task('default', function (cb) {
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
        cb(err);
        console.log('Build Complete');
    })
});


gulp.task('buildAngularApp-1', function (cb) {
    const options = {
        cwd: 'angualar/moduleBase',
        env: process.env
    };
    console.log("Starting Build");

    var output = shell.spawn(process.env.comspec, ['/c', 'ng build -prod --aot -sm false -vc false -cc false -oh none'], options);

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
});
