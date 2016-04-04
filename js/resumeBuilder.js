// // /*
// // This is empty on purpose! Your code to build the resume will go here.
// //  */
var bio = {"name":"Han Zhang", "job":"Student and incoming software developer", "contacts": {
		"email": "zh355245849@gmail.com",
		"github": "zh355245849",
		"linkin":"zh355245849",
		"mobile":"2019810262",
		"location": "Hoboken,NJ,USA"
	}, "picture":"images/han.jpg",
		"welcomeMessage":"Welcome to my e-resume!",
		"skills":"Java(proficient), python, javascript, C, C++, C#, SQL, HTML, XML, OSX, Linux, Photoshop"};
var work = {"jobs": [
		{
			"employer": "Stevens Institute of Technology",
			"title": "Teaching Assisstant",
			"location": "Hoboken,NJ,USA",
			"WorkedDate": "January 2016 - May 2016",
			"description": "1. Teaching Assistant of CS550(Computer Organization and Programming)." + "<br />"
							 + "2. Grading students' assignments."
		},
		{
			"employer": "Amazon",
			"title": "Software Developer Engineer Intern",
			"location": "Seattle",
			"WorkedDate": "June 2016 - August 2016",
			"description": "Internship at Amazon"
		}
	]
};
var education = {"schools": [
		{ "name": "Macau University of Science and Technology",
			"datesAttended": "2011 - 2015",
			"location": "Macau, China",
			"degree": "Bachelor Science degree",
			"major": "Software Development"
		},
		{ "name": "Stevens Institute of Technology",
			"datesAttended": "2015 - 2017",
			"location": "Hoboken,NJ,USA",
			"degree": "Master degree",
			"major": "Computer Science"		}		
	]}
var projects = {
	"projects": [
	{
			"title": "Distribute Hash Table",
			"datesWorked": "November 2015",
			"description": "•	Implement the add, delete, join node functions in the Hash Table" + "<br/>" +
							"•	Write code with java based on Jersey Framework" + "<br/>" +
							"•	Learned many knowledge of design patterns and resource-oriented programming"
		},
		{
			"title": "FTP",
			"datesWorked": "October 2015",
			"description": "•	Implement the send and receive functions between client and server" + "<br/>" +
						   "•	Implement both active mode and passive mode FTP",
		},
		{
			"title": "Student Achievement Ranking System",
			"datesWorked": "December 2012 - January 2013",
			"description": "• Wrote code with java and introduced some characters of GUI" + "<br/>" +
							"• Draw the UML class diagram and write the report"
		}
	]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.job);
var formatPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.linkin));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#header").append(formatPicture);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#skills").append(HTMLskills.replace("%data%", bio.skills))
for(contact in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[contact]);
	$("#footerContacts").append(formattedContactInfo[contact]);
}

$("#workExperience").append(HTMLworkStart);
for(w in work.jobs) {
	var formatEmploy = HTMLworkEmployer.replace("%data%", work.jobs[w].employer);
	var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[w].title);
	var formatLocation = HTMLworkLocation.replace("%data%", work.jobs[w].location);
	var formatDate = HTMLworkDates.replace("%data%", work.jobs[w].WorkedDate);
	var formatDescription = HTMLworkDescription.replace("%data%", work.jobs[w].description);
	var tmp = formatEmploy + formatTitle;
	$(".work-entry").append(tmp);
	$(".work-entry").append(formatLocation);
	$(".work-entry").append(formatDate);
	$(".work-entry").append(formatDescription);
}

$("#education").append(HTMLschoolStart);
for(e in education.schools) {
	var formatName = HTMLschoolName.replace("%data%", education.schools[e].name);
	var formatDate = HTMLschoolDates.replace("%data%", education.schools[e].datesAttended);
	var formatLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
	var formatDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
	var formatMajor = HTMLschoolMajor.replace("%data%", education.schools[e].major);
	var tmp = formatName + formatDegree;
	$(".education-entry").append(tmp);
	$(".education-entry").append(formatDate);
	$(".education-entry").append(formatLocation);
	$(".education-entry").append(formatDegree);
	$(".education-entry").append(formatMajor);
}

$("#projects").append(HTMLprojectStart);
for(p in projects.projects) {
	var formatTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
	var formatDate = HTMLprojectTitle.replace("%data%", projects.projects[p].datesWorked);
	var formatDescription = HTMLprojectTitle.replace("%data%", projects.projects[p].description);
	$(".project-entry").append(formatTitle);
	$(".project-entry").append(formatDate);
	$(".project-entry").append(formatDescription);
}

$("#mapDiv").append(googleMap);












