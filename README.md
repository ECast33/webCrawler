# Web Crawler exapmple
### prerequisites
- Must have [Node.js](https://nodejs.org/) installed.
### Once node is installed you may run the program.
 - open up a terminal and navigate to the web crawler directory.
 i.e
 ```sh
 cd _Main/Development/webcrawler
 ```
 - install the dependencies by running
 ```sh
npm install
```
- this will install all the required dependencies in order to run the app.
- the following command runs the app passes in -d as a param for the directory to store the data, and any web links to be "Crawled".
```sh
node cli.js --daemon -d output_dir http://sonobi.com/ https://news.ycombinator.com/ http://html.com/ https://stackoverflow.com/
```

- to run tests run the following command
```sh
npm test
```
# DODA Example
```sh
node doDa.js
```
