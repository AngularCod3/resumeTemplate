import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resumeTemplate';
  
data = [
	{
		"timeFrame": "2018 - Present",
		"company": "Principal Financial Group",
		"technology": ["Angular 7", "Django", "Python", "D3", "Typescript", "Data Analysis"],
		"points": ["Currently working on and is the sole dev of a responsive web Survey Creator tool. Using Angular 7 as the frontend framework, Bootstrap for positioning elements, Material UI design language, Django as the backend rest framework and PostgreSql for data storage. It contains dynamically created components, uses RxJs subscriptions and services for data sharing and has a clean minimalistic UI style. The tool is currently being used for internal surveys",
				 "Created a dental analysis multithreaded desktop app using Python’s PyQt5 package.",
				 "Created a full-fledged multi-tabbed trading desktop application using Python’s PyQt5 which had fully interactive charts, ability to create and chart user’s custom analysis, running machine learning models in the background. The entire UI and chart code were completely written in Python, which also helped it to gel well with the Python ML/AI code.",
				 "Creation of dashboards to display results of application of machine learning models on trading data using Python's plotly and matplotlib frameworks, which can further be used for trading analysis and predictions.",
				 "Data analysis and processing using pandas and numpy.",
				 "Creating visualizations using D3 and javascript"
				  ]
	},
	{
		"timeFrame": "2015 - 2018",
		"company": "Infosys Ltd (London, United Kingdom)",
		"technology": ["Python", "XSLT", "C#", "WPF", "VSTO"],
		"client": "LexisNexis UK",
		"points": ["Worked in London at client location for a year, providing coding solutions using Python and XSLT.",
				 "Wrote code in python, that scanned through several thousands of documents every week, understands the type of content, find the list of broken links, creating a report of it, and it eventually sent an email to the relevant editor who owned that content.",
				 "Created a VSTO Outlook plugin that reads an incoming automated email for a job failure, gets the relevant failure message from the correct location, and reads the failure to determine the type of failure it belongs to. It then stores the analysis as meta information within the email for easy retrieval, which also meant that the failure reasons are always stored automatically within Outlook, even if the logs themselves get overwritten every day.",
				 "The same plugin was also programmed to create a weekly/monthly summary of the types of failures and was sent to the managers for analysis and tracking.",
				 "Created a WPF tool that automated reloading jobs, retrieving documents, changing configurations and running them on a browser, reducing the manual effort of running hundreds of jobs from a day to a few seconds."
				  ]
	},
	{
		"timeFrame": "2012 - 2015",
		"company": "Infosys Ltd (Mangalore)",
		"technology": ["C#", "XSLT"],
		"client": "LexisNexis USA",
		"points": ["Responsible for the maintenance and performance tweaking of all the tools built in C# that were used in the team. One of the tool’s “Text Compare” run time was reduced from a couple of hours to a matter of minutes.",
				 "Developed tools in C# as per the business requirement. Some of the tools developed were the “Merge” tool that merged thousands of individual files based on their type, level hierarchy (title, chapter, citation and so on) etc., and the annotation merge tool that merged hundreds of different kinds of annotations based on their type and position in the file. Each tool contained more than a few thousand lines of code.",
				 "Implemented a modern user interface for the tools developed. ",
				 "Resolved critical defects by leveraging strengths in coding, debugging and testing.",
				 "Built conversion programs in XSLT through analysis of target schema and by defining rules for conversion of source data to target format.",
				 "Worked with multiple teams as required and adapted quickly to the workflow of each of them",
				 "Interaction with clients and onsite coordinates for requirement gathering."
				  ]
	}
]

  
}
