const MeetingsController = require("./../../lib/controllers/MeetingsController");
//filePath = require("./../../lib/controllers/MeetingsController");

const Meeting = require("./../../lib/models/Meeting");

// to use test file instead of the original file
filePath = "./../../test/test-meetings.json"

describe('Tests for MeetingController', () => {
    test('should get list or empty', () => {
        const meetings = MeetingsController.getAll();
        expect(meetings).not.toBeUndefined();
    });
    test('should add meeting', () => {
        const meeting = new Meeting("Movement 1", "Javier", "This is my first movement", ["ocean", "cleaning"], new Date(), new Date(), "Puerto Vallarta, Jalisco");
        MeetingsController.addMeeting(meeting);
        const postAdded = MeetingsController.getAll();
        MeetingsController.deleteMeeting(meeting.id);
        expect(postAdded).toContain(postAdded.find(f => f.id === meeting.id));
    });

    test('should get filtered by a param', () => {
        const meeting = new Meeting("Movement 1", "Javier", "This is my first movement", ["ocean", "cleaning"], new Date(), new Date(), "Puerto Vallarta, Jalisco");
        MeetingsController.addMeeting(meeting);
        const filtered = MeetingsController.filterMeetings(m => m.name == "Movement 1");
        MeetingsController.deleteMeeting(meeting.id);
        expect(filtered).toContain(filtered.find(f => f.id === meeting.id));
    });
});