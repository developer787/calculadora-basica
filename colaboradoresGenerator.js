const spawn = require('child_process').spawn;
const ls = spawn('git', ['log', '--format="%aN <%aE>"']);

ls.stdout.on('data', (data) => {
  const git = data.toString('utf8').split('\n');
  console.log(git);
//  console.log(`stdout: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      });
/*const exec = require('child_process').exec;
exec('git log --author=joel', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});*/
