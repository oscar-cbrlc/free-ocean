const fs = require("fs");
const path = require("path");

class JsonHandler{
	static read(filePath){
		const rawdata = fs.readFileSync(path.resolve(__dirname, filePath));
		if (rawdata != "") {
			return JSON.parse(rawdata);
		}
		else {
			return null;
		}
	}
	static write(filePath, data){
		var currentData = this.read(filePath);
		if (currentData == null) {
			currentData = [];
		}
		currentData.push(data);
		const stringData = JSON.stringify(currentData);
		fs.writeFileSync(path.resolve(__dirname, filePath), stringData);
	}
}

module.exports = JsonHandler;
