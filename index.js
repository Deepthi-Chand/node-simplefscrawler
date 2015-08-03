var fs = require(fs)
module.exports = {
  crawl: function(directory) {
    currentDir = path.join(directory,'');
    fs.readdir(currentDir, function (err, files) {
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
