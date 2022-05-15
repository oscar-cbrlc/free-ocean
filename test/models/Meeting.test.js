const Meeting = require("../../lib/models/Meeting");

describe('Tests for creating object', () => {
    test('should create object properly', () => {
        const meeting = new Meeting("Movement 1", "Javier", "This is my first movement", ["ocean", "cleaning"], new Date(), new Date(), "Puerto Vallarta, Jalisco");

        expect(meeting.id).not.toBeUndefined();
        expect(meeting.followers).toEqual(0);
        expect(meeting.isActive).toBe(false);
    });

    test('should add follower', () => {
        const meeting = new Meeting("Movement 1", "Javier", "This is my first movement", ["ocean", "cleaning"], new Date(), new Date(), "Puerto Vallarta, Jalisco");
        meeting.addFollower();
        expect(meeting.followers).toEqual(1);
    });

    test('should remove follower', () => {
        const meeting = new Meeting("Movement 1", "Javier", "This is my first movement", ["ocean", "cleaning"], new Date(), new Date(), "Puerto Vallarta, Jalisco");
        meeting.addFollower();
        meeting.removeFollower();
        expect(meeting.followers).toEqual(0);
    });

    test('should add tag', () => {
        const meeting = new Meeting("Movement 1", "Javier", "This is my first movement", ["ocean", "cleaning"], new Date(), new Date(), "Puerto Vallarta, Jalisco");
        meeting.addTag("teamseas");
        expect(meeting.tags).toEqual(["ocean", "cleaning", "teamseas"]);
    });

    test('should remove tag', () => {
        const meeting = new Meeting("Movement 1", "Javier", "This is my first movement", ["ocean", "cleaning"], new Date(), new Date(), "Puerto Vallarta, Jalisco");
        meeting.removeTag("cleaning");
        expect(meeting.tags).toEqual(["ocean"]);
    });
});