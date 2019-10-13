let csvToJson = require('convert-csv-to-json');

let fileInputName = 'all.csv';
let fileOutputName = 'all.json';

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
