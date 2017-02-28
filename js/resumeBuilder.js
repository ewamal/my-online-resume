   	var bio = {
	    'name': "Ewa Małusecka",
	    'role': "Front-End  Developer",
	    'contacts': {
	        'mobile': "513285825",
	        'email': "maluseckae@gmail.com",
	        'github': "ewamal",
	        'location': "Cracow",
	   	},
	    'welcomeMessege': "Hi, here's my page with some of my projects and few things about me.",
	    'skills': ["JS", "HTML5", 'CSS3', 'JQUERY', "AJAX"],
	    'biopic': "images/cvv.png"
	};



	var education = {
	    "schools": [{
	        'name': "AGH University of Science and Technology",
	        'dates': "2014-2016",
	        'degree': "BA",
	        'location': "Cracow",
	        'majors': ["Acustic Engineering", "English"],
	        'url': "http://www.agh.edu.pl/en"
	    }],
	    "onlineCourses": [{
	            "school": "Udacity",
	            "title": 'Front-End Web Developer Nanodegree',
	            "dates": "in progress",
	            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	        },
	        {
	            "school": "FreeCodeCamp",
	            "title": "Front-End Development",
	            "dates": "in progress",
	            "url": "https://www.freecodecamp.com/"
	        }
	    ]
	};

	var work = {
	    "jobs": [{
	            "employer": "Codewise",
	            "title": "Web Dev Intern",
	            "dates": "2015-2016",
	            "location": "Warsaw",
	            "description": "Creating web pages with HTML, CSS and JS"
	        },
	        {
	            "employer": "Deloitte",
	            "title": "Front-End Dev Trainee",
	            "dates": "2016-2017",
	            "location": "Cracow",
	            "description": "Creating web pages with HTML, CSS and JS"
	        }
	    ]
	};

	var projects = {
	    "projects": [{
	            "title": "Random Quote Machine",
	            "dates": "December 2016",
	            "description": "Project done for FreeCodeCamp. Page showing random quotes using other pages' API",
	            "images": ["images/randomQuote.png"]
	        },
	        {
	            "title": "Wikipedia Viewer",
	            "dates": "January 2017",
	            "description": "Project done for FreeCodeCamp. Page showing Wikipedia search results using Wikipedia API",
	            "images": ["images/wikiViewer.png"]
	        }
	    ]
	};


	bio.display = function() {

	    var formattedName = HTMLheaderName.replace("%data%", bio.name);
	    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessege);
	    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);


	    $("#header").prepend(formattedRole);
	    $("#header").prepend(formattedName);
	    $("#header").append(formattedBioPic);
	    $("#header").append(formattedWelcomeMsg);

	    $("#topContacts,#footerContacts").append(formattedEmail);
	    $("#topContacts,#footerContacts").append(formattedGithub);
	    $("#topContacts,#footerContacts").append(formattedLocation);
	    $("#topContacts,#footerContacts").append(formattedMobile);




	    if (bio.skills.length > 0) {
	        $("#header").append(HTMLskillsStart);
	        bio.skills.forEach(function(skill) {
	            var formattedSkills = HTMLskills.replace("%data%", skill);
	            $("#skills").append(formattedSkills);
	        });
	    }
	};


	education.display = function() {
	    education.schools.forEach(function(school) {

	        $("#education").append(HTMLschoolStart);

	        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
	        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
	        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
	        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
	        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

	        var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;

	        $(".education-entry:last").append(formattedSchoolNameAndDegree);
	        $(".education-entry:last").append(formattedSchoolDates);
	        $(".education-entry:last").append(formattedSchoolLocation);
	        $(".education-entry:last").append(formattedSchoolMajor);
	    });


	    $('#education').append(HTMLonlineClasses);
	    education.onlineCourses.forEach(function(course) {

	        $("#education").append(HTMLschoolStart);

	        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
	        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
	        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
	        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);

	        var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;

	        $(".education-entry:last").append(formattedOnlineTitleAndSchool);
	        $(".education-entry:last").append(formattedOnlineDates);
	        $(".education-entry:last").append(formattedOnlineURL);
	    });
	};
	


	projects.display = function() {

	    projects.projects.forEach(function(project) {

	        $("#projects").append(HTMLprojectStart);

	        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
	        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
	        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

	        project.images.forEach(function(image){
	        	var formattedProjectImage = HTMLprojectImage.replace("%data%",image);
	        	$(".project-entry:last").append(formattedProjectImage);
	        });

	        $(".project-entry:last").append(formattedProjectTitle);
	        $(".project-entry:last").append(formattedProjectDates);
	        $(".project-entry:last").append(formattedProjectDescription);
	    });
	};
	


	work.display = function displayWork() {
	    work.jobs.forEach(function(job) {
	        $("#workExperience").append(HTMLworkStart);

	        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
	        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
	        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
	        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

	        var formattedWorkEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;

	        $(".work-entry:last").append(formattedWorkEmployerAndTitle);
	        $(".work-entry:last").append(formattedWorkDates);
	        $(".work-entry:last").append(formattedWorkLocation);
	        $(".work-entry:last").append(formattedWorkDescription);
	    });
	};


	$(document).click(function(loc) {
	    x = loc.pageX;
	    y = loc.pageY;
	    logClicks(x, y);
	});

	$("#main").append(internationalizeButton);

	function inName(name) {
	    name = name.trim().split(" ");
	    name[1] = name[1].toUpperCase();
	    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	    return name[0] + " " + name[1];
	}


	$("#mapDiv").append(googleMap);


bio.display();
work.display();
projects.display();
education.display();
