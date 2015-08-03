var fs = require(fs)
module.exports = {
  crawl: function() {
    currentDir = path.join('/Users/Default','');
    fs.readdir('/Users/Default', function (err, files) {
  	currentDir = path.join('/Users/Default', '');
       if (err) {
          throw err;
        }
        var data = [];
        files
        .forEach(function (file) {
          try {
                  var isDirectory = fs.statSync(path.join(currentDir,file)).isDirectory();
                  if (isDirectory) {
                    data.push({ Name : file, IsDirectory: true, Path : path.join(currentDir, file)  });
                  } else {
                    var ext = path.extname(file);
                    data.push({ Name : file, Ext : ext, IsDirectory: false, Path : path.join(currentDir, file) });
                  }

          } catch(e) {
            console.log(e);
          }

        });
        return data;
      });
    }
}
