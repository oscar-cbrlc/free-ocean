const JsonHandler = require("./../../lib/utils/JsonHandler");

const JSONPath = "./../../test/test-meetings.json";

describe("JsonHandler", () => {
	test("should convert JSON data to JS object", () => {
		const data = JsonHandler.read(JSONPath);
		expect(data).not.toBeUndefined();
	});
	test("should write to file", () => {
		var reading = JsonHandler.read(JSONPath);
		const data = {id: 15, name: "another movement", organizer: "john doe"};
		JsonHandler.write(JSONPath, data);
		const postWrite = JsonHandler.read(JSONPath);
        
		if (reading != null){
			reading.push(data);
		}
		else {
			reading = [data];
		}
		expect(postWrite).toEqual(reading);
	});
});