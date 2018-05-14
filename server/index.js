const PythonShell = require('python-shell');

PythonShell.run('server/simple_generator.py', function (err) {
    if (err) throw err;
    console.log('finished python script');
});