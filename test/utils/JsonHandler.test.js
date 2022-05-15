const JsonHandler = require("./../../lib/utils/JsonHandler");
const { v4: uuidv4 } = require("uuid");

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
	test("should update to file", () => {
		const id = uuidv4(); 
		const oldData = {id: id, name: "another movement", organizer: "john doe"};
		const newData = {id: id, name: "different"};
		JsonHandler.write(JSONPath, oldData);
		JsonHandler.update(JSONPath, id, {id: id, name: "different"});

		const postWrite = JsonHandler.read(JSONPath);
		expect(postWrite).not.toContain(oldData);
		expect(postWrite).toContainEqual(newData);
	});
	test("should delete object in file", () => {
		const id = uuidv4();
		const data = {id: id, name: "new movement", organizer: "john doe"};
		JsonHandler.write(JSONPath, data);
		JsonHandler.delete(JSONPath, id);

		const testData = {test:"test"};
		JsonHandler.write(JSONPath, testData);

		const postWrite = JsonHandler.read(JSONPath);
		// expect(postWrite).not.toContainEqual(testData);
		expect(postWrite).not.toContain(data);
	});
});