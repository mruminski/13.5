var os = require('os');
var time = require('./formatTime');
var colors = require('colors');

function getOSinfo() {
  var type = os.type();
  switch (type) {
    case 'Darwin':
      type = 'OSX';
      break;
    case 'Windows_NT':
      type = 'Windows';
      break;
    default:
      type = type;
  }
  var release = os.release;
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var user = os.userInfo();

  console.log('OS:'.blue, type);
  console.log('Release:'.green, release);
  console.log('CPU Model:'.red, cpu);
  console.log('Uptime:'.rainbow, time.format(uptime));
  console.log('User name:'.yellow, user.username);
  console.log('Home dir:'.magenta, user.homedir);
}

exports.print = getOSinfo;