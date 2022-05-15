const JsonHandler = require("../utils/JsonHandler");
var filePath = "./../../meetings.json";

class MeetingsController {
	static getAll() {
		const meetings = JsonHandler.read(filePath);
		return meetings;
	}

	static getMeeting(id) {
		const meetings = this.getAll();
		const meeting = meetings.find(m => m.id == id);
		return meeting;
	}

	static filterMeetings(predicate) {
		const meetings = this.getAll();
		const filtered = meetings.filter(predicate);
		return filtered;
	}

	static addFollower(meetingId) {
		var meeting = this.getMeeting(meetingId);
		meeting.addFollower();
		this.updateMeeting(meetingId, meeting);
	}

	static removeFollower(meetingId) {
		var meeting = this.getMeeting(meetingId);
		meeting.removeFollower();
		this.updateMeeting(meetingId, meeting);
	}


	static addTag(meetingId, tag) {
		var meeting = this.getMeeting(meetingId);
		meeting.addTag(tag);
		this.updateMeeting(meetingId, meeting);
	}

	static removeTag(meetingId, tag) {
		var meeting = this.getMeeting(meetingId);
		meeting.removeTag(tag);
		this.updateMeeting(meetingId, meeting);
	}

	static addMeeting(meeting) {
		JsonHandler.write(filePath, meeting);
	}

	static updateMeeting(id, newMeeting) {
		JsonHandler.update(filePath, id, newMeeting);
	}

	static deleteMeeting(id) {
		JsonHandler.delete(filePath, id);
	}
}

module.exports = MeetingsController;