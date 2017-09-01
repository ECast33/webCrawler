var argv        = require('minimist')(process.argv.slice(2));
const { spawn } = require('child_process');
var async       = require('async');
var urls        = argv._;

//
// CLI
// USAGE: Spawns a child process/thread for each url passed into the CLI
//

const PARALLEL_PROCESS_LIMIT = 5;

console.log('Processing', urls.length, (urls.length > 1 ? 'urls' : 'url'));

async.eachLimit(urls, PARALLEL_PROCESS_LIMIT, function(url, done) {

  console.log('Spawning process to crawl', url);
  const crawl_process = spawn('node', ['./webCrawler.js', '--daemon', '-d', 'output_dir', url]);
  
  crawl_process.stdout.on('data', (data) => {
    console.log(`[${url} Process]: ${data}`);
  });
  
  crawl_process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  crawl_process.on('close', (code) => {
    console.log(`crawler process exited with code ${code}`);
    console.log('[' + url + ']', 'processed!\n');
    done();
  });

},
function(err) {
  console.log('web crawler complete!');
});