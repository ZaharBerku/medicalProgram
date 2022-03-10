const del = require("delete");

function cleanDist() {
   return del('build'); 
}

exports.cleanDist = cleanDist;