const { v4: uuidv4 } = require('uuid');
class Meeting {
    constructor(name, organizer, description, tags, startDate, endDate, location) {
        this.id = uuidv4()
        this.name = name;
        this.organizer = organizer;
        this.description = description;
        this.tags = tags;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.followers = 0;
        this.isActive = false;
    }

    addFollower() {
        this.followers += 1;
    }

    removeFollower() {
        if (this.followers > 0) {
            this.followers -= 1
        }
    }

    addTag(tag) {
        this.tags.push(tag);
    }
   
    removeTag(tag) {
        const index = this.tags.indexOf(tag);
        if (index > -1) {
            this.tags.splice(index, 1);
        }
    }
}

module.exports = Meeting;