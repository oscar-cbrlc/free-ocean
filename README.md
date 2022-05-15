# free-ocean

<h2>General Information</h2>
  <p>Free Ocean proposal to reach the communities, where will be able to participate against pollution ocean, the idea is to have a social impact to promote the care of the oceans.</p>

<h2>Technologies</2>
  <div id="badge" align="center">
    <img src= "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
    <img src= "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
    <img src="https://img.shields.io/badge/JSON-black?style=for-the-badge&logo=json&badgeColor=010101">
  </div>

<h2>Status</h2>
  <p> this project is a BETA in development</p>

<h2>Installation</h2>

Project for the Hackaton "Hack The Ocean"

To use this project you need to have [Node and NPM](https://nodejs.org/es/) installed.<br>
After cloning, run the following commands in the terminal from the project folder:

```
npm install jest --save-dev
npm install eslint --save-dev
npm install uuid
```

<h2>Collaborators</2>
  <li><a href="https://github.com/EmmanuelPerezt/EmmanuelPerezt"> @EmmanuelPerezt</a></li>
  <li><a href="https://github.com/Jedlcl1"> @Jedlcl1</a></li>
  <li><a href="https://github.com/dJacoboSanta"> @dJacoboSanta</a></li>
  <li><a href="https://github.com/EdgarAnt"> @EdgarAnt</a></li>
  <li><a href="https://github.com/oscar-cbrlc"> @oscar-cbrlc</a></li>
  
  
## Project Diagram
```mermaid
graph
  JSON --> JSON_HANDLER
  JSON_HANDLER --> MEETINGS_CONTROLLER
  MEETING --> MEETINGS_CONTROLLER
  MEETING --> WEB_PAGE
  MEETINGS_CONTROLLER --> WEB_PAGE
```

## Class Diagram
  
```mermaid
classDiagram
    Meeting --> FrontEnd
    MeetingsController --> FrontEnd
    JsonHandler --> MeetingsController
    class Meeting{
      string id
      string name
      string organizer
      string description
      string[] tags
      date startDate
      date endDate
      string location
      number followers
      bool isActive
      addFollower()
      removeFollower()
      addTag(tag)
      removeTag(tag)
    }
    class MeetingsController{
      getAll() Meeting[]
      getMeeting(id) Meeting
      filterMeetings(predicate) Meetings[]
      addFollower(meetingId)
      removeFollower(meetingId)
      addTag(meetingId, tag)
      removeTag(meetingId, tag)
      addMeeting(meeting)
      updateMeeting(id, newMeeting)
      deleteMeeting(id)
    }
    class JsonHandler{
      read(filePath) any
      rewrite(filePath, data)
      write(filePath, data)
      update(filePath, id, newData)
      delete(filePath, id)
    }
```
  
