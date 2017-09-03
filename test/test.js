var assert = require('assert');
var Crawler = require('crawler');
var fs = require('fs-extra');

describe('Web Crawler', function () {
  describe('Url scraping Directory and file write', function () {

    it('Should Write a Directory', function (done) {
      var directory = './test/output';
      if (fs.existsSync('./' + directory)) {
        console.log('directory already created');
      } else {
        fs.mkdir(directory);
      }
      setTimeout(function(){ assert.equal(true, fs.existsSync('./' + directory)); }, 500);
      done();
    });

    it('should scrape a url and retrive the Title', function (done) {
      var c = new Crawler({
        maxConnections: 10,
        // This will be called for each crawled page
        callback: function (error, res, done) {
          if (error) {
            console.log(error);
          } else {
            var $ = res.$;
            var title = $("title").text();
            assert.equal('Google', title);
          }
          done();
        }
      });
      // Queue just one URL, with default callback
      c.queue('https://www.google.com/');
      done();
    });

    it('Write a file and check it exists', function (done) {
      fs.writeFile('./test/output/test.txt', 'test Page', function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('File was written');
        }
      });
      setTimeout(function(){ assert.equal(true, fs.existsSync('./test/output/test.txt'));}, 500);
      done();
    });

    it('Write a file, Read it, and assert the content is correct', function (done) {
      fs.writeFile('./test/output/testRead.txt', 'test Page', function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('File was written');
        }
      });
      var content;
      fs.readFile('./test/output/testRead.txt', function (err, data) {
        if (err) {
          console.log(err);
        }
        content = data;
        assert.equal('test Page', content);
      });

      done();
    });

    it('Should Take a Url and remove slashes', function (done) {
      var url = 'http://sonobi.com/';
      var newUrl = url.slice(url.indexOf('//') + 2);
      newUrl = newUrl.replace(newUrl.substring(newUrl.length - 1), '');
      assert.equal('sonobi.com', newUrl);
      done();
    });

  });
});
