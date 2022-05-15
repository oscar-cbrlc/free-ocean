const fs = require("fs");
const path = require("path");
const json = require('json-update');

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

    static rewrite(filePath, data) {
		const stringData = JSON.stringify(data);
		fs.writeFileSync(path.resolve(__dirname, filePath), stringData);
    }

	static write(filePath, data){
		var currentData = this.read(filePath);
		if (currentData == null) {
			currentData = [];
		}
		currentData.push(data);
		this.rewrite(filePath, currentData);
	}

    static update(filePath, id, newData) {
        var data = this.read(filePath);
        const item = data.find(i => i.id === id);
        const index = data.indexOf(item);
        data[index] = newData;
        this.rewrite(filePath, data);
    }
}

module.exports = JsonHandler;
