   	var bio = {
	    'name': "Ewa Małusecka",
	    'role': "Front-End Developer",
	    'contacts': {
	        'mobile': "+48 507 389 173",
	        'email': "maluseckae@gmail.com",
	        'github': "ewamal",
	        'location': "Cracow, Poland",
	   	},
	    'welcomeMessege': "Hi, here's my page with some of my projects and few things about me.",
	    'skills': ["JAVASCRIPT", "HTML5", 'CSS3', 'JQUERY', "ANGULAR.JS", "REACT", "NODE.JS"],
	    'biopic': "images/cvv.png"
	};



	var education = {
	    "schools": [{
	        'name': "AGH University of Science and Technology",
	        'dates': "2014-2016",
	        'degree': "BA",
	        'location': "Cracow",
	        'majors': ["Acustic Engineering"],
	        'url': "http://www.agh.edu.pl/en"
	    },
	    {
	    	'name': "WSEI College of Economics and Computer Science",
	        'dates': "2017-",
	        'degree': "BA",
	        'location': "Cracow",
	        'majors': ["Computer Studies"],
	        'url': "http://en.wsei.edu.pl/"
	    }
	    ],
	    "onlineCourses": [{
	            "school": "Udacity",
	            "title": 'Front-End Web Developer Nanodegree',
	            "dates": "in progress",
	            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	        }
	    ]
	};

	var work = {
	    "jobs": [
	        {
	            "employer": "Deutsche MTM-Gesellschaft Industrie-und Wirtschaftsberatung mbH Software House",
	            "title": "Front-End Developer (internship)",
	            "dates": "06.-08.2017",
	            "location": "Dresden, Germany",
	            "description": "There I got an opportunity to work on my JavaScript, HTML and CSS skills and learn new technologies, like AngularJS, and Node.js. I have worked on company’s real project in a team of experienced developers.",
	            "url": "https://www.dmtm.com/index.php?lng=14"
	        }
	    ]
	};

	var projects = {
	    "projects": [
	    		{
	            "title": "Weather app",
	            "dates": "February 2017",
	            "description": "Site showing current weather using openweathermap.org API. ",
	            "images": ["images/weather.png"],
	            "url" : "https://github.com/ewamal/weather"
	        }, 
	    		{
	            "title": "Random Quote Machine",
	            "dates": "December 2016",
	            "description": "Page showing random quotes using open API",
	            "images": ["images/randomQuote.png"],
	            "url" : "https://github.com/ewamal/random-quote-machine"
	        },
	        {
	            "title": "Comment's app in React",
	            "dates": "July 2017",
	            "description": "Simple commenting app in React",
	            "images": ["images/comments.gif"],
	            "url" : "https://github.com/ewamal/wiki-viewer"
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

	        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
	        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
	        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
	        var formattedOnlineURL = "<br>"     // HTMLonlineURL.replace("%data%", course.url); 

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
	        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images).replace("#", project.url);
	        
			
	        $(".project-entry:last").append(formattedProjectTitle);
	        $(".project-entry:last").append(formattedProjectDates);
	        $(".project-entry:last").append(formattedProjectDescription);
	        $(".project-entry:last").append(formattedProjectImage);
	    });
	};
	


	work.display = function displayWork() {
	    work.jobs.forEach(function(job) {
	        $("#workExperience").append(HTMLworkStart);

	        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
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
    

	$("#mapDiv").append(googleMap);

	bio.display();
	work.display();
	projects.display();
	education.display();
