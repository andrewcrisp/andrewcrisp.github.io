type Accomplishment = {
  accomplishment: string;
};
type Responsibility = {
  responsibility: string;
};
export type JobEntry = {
  employer: string;
  location: string;
  title: string;
  responsibilities: Responsibility[];
  accomplishments: Accomplishment[] | undefined;
}
export const jobs: JobEntry[] = [
  {
    title: "Senior Developer, Operations",
    employer: "allsynx/Businessolver 05/2023-Present",
    location: "Richardson, TX",
    responsibilities: [
      { responsibility: "Owned the end-to-end build, maintenance, and operation support of custom Electronic Data Interchange (EDI) backend software in C# and T-SQL as Windows services in a microkernel architecture." },
      { responsibility: "Diagramed the domain models and interrelations of the various software being developed in Visio and draw.io. " },
      { responsibility: "Quickly familiarized with in-house fullstack codebases (ColdFusion, .Net, React) to solve operational bugs, and explain software functions to internal users." },
      { responsibility: "Performed root-cause analysis of sporadic, difficult to reproduce bugs through diligent procedural investigation and reproducible experimentation." },
      { responsibility: "Documented findings in tickets, wiki articles, email communication, and live department level instructional sessions according to the scope of the problem." },
      { responsibility: "Applied expert SQL knowledge to optimize nonperformant queries, improving system throughput, reliability, and deadlock occurrence." },
      { responsibility: "Documented and proposed appropriate indexes and query changes to achieve improvements." },
      { responsibility: "Audited Microsoft SQL Server configuration and database design for performance and reliability." },
      { responsibility: "Operated in a Scrum/Agile pattern with git pull-request source control techniques and intra- and inter-team peer code reviews." },
      { responsibility: "Investigated system issues in Datadog log aggregation tools." },
      { responsibility: "Managed Azure DevOps operational ticket queue prioritization and velocity." },
    ],
    accomplishments: [
      { accomplishment: "Reduced runtime of numerous SQL operations from tens of minutes each to under ten seconds by reorganizing the queries and using more sanitary data access methodologies." },
      { accomplishment: "A notable example reduced daily runtime of all instances of the query by 6.5 hours (from 7.2 hours) for a reduction of 87.5%." },
      { accomplishment: "Presented the need for an architecture review and consolidation to the organization, resulting in an architecture review council being created." },
      { accomplishment: "The council examined the various methodologies used in the organization for the previous twenty years, recognized the drift, and drafted and executed a plan to migrate the codebases to a monorepo following the well documented Service-Based Architecture pattern." },
    ],
  },
  {
    title: "Data Scientist I",
    employer: "St Luke’s Health System 06/2021-04/2023",
    location: "Boise, ID",
    responsibilities: [
      { responsibility: "Built, trained, and validated predictive machine learning models with XGBoost, ARIMA, XGBoost for time series, and traditional predictive algorithms in both R and python on complex 1st party datasets." },
      { responsibility: "Designed, organized, and documented workflow, intake, and backlog with Visio, OneNote, and Azure DevOps." },
      { responsibility: "Monitored running models for performance and model drift with Shiny and MS SQL Server." },
      { responsibility: "Fostered secure programming practices in R, python, and SQL queries." },
      { responsibility: "Curated automated and manual testing standards in R and python." },
      { responsibility: "Integrated data science project architecture standards with organization data standards." },
      { responsibility: "Managed development (Rstudio/VSCode server instances) and PROD (docker/Linux bare metal) environments." },
      { responsibility: "Validated 1st and 3rd party analytics models and products." },
      { responsibility: "Prototyped experimental product deployments." },
      { responsibility: "Wrote and updated team training and onboarding documentation." },
      { responsibility: "Mentored team members in data science techniques, data acquisition, data wrangling, programming best practices, and professional communication." },
    ],
    accomplishments: [
      { accomplishment: "Predicted population growth at ZCTA and county levels for the service area with ARIMA in R and ggplot2 using census datasets." },
      { accomplishment: "Predicted duration of labor at the onset of the baby-delivery event by implementing a Random Forest model in Python." },
      { accomplishment: "Published internal Flask API in a Docker container to deliver model results." },
      { accomplishment: "Maintained and enhanced a predictive model diagnostic application built on Shiny, allowing comparison of multiple models or instances of the same model for performance and model drift." },
      { accomplishment: "Built database connection libraries in Python and R." },
      { accomplishment: "Interfaced the development environments with the enterprise secure credential vault via API calls, removing the need for developers to have copies of the credentials." },
      { accomplishment: "Enabled standardization of saving SQL query scripts in source control and executing them to be returned as Pandas DataFrame and Tidyverse tibble objects." },
    ],
  },
  {
    title: "Domain Architect II ",
    employer: "St Luke’s Health System 04/2019-06/2021",
    location: "Boise, ID",
    responsibilities: [
      { responsibility: "Evangelized programming best practices including source control with git and Azure Repos, de-coupled code design, configuration management." },
      { responsibility: "Identified and solved the need for a centralized data science environment." },
      { responsibility: "Designed and implemented multiple MS SQL databases to host Advanced Analytics model results." },
      { responsibility: "Secured access to privileged data sources with. Net APIs." },
      { responsibility: "Designed and built a secure hard drive sanitization tool." },
      { responsibility: "Trained customers on integrating web/API data to Excel and PowerBI." },
      { responsibility: "Mentored junior Data Scientists in domain specific concepts and professional communication." },
    ],
    accomplishments: [
      { accomplishment: "Identified and solved the need for a centralized data science environment." },
      { accomplishment: "Conducted and presented a buy vs build cost-benefit analysis." },
      { accomplishment: "Proposed purchasing Rstudio commercial solution (Posit) to senior directors with expected cost, installation plan, maintenance effort, and integration plan." },
      { accomplishment: "Installed R and Python Integrated Development Environment (Rstudio Server)." },
      { accomplishment: "Empowered analytics to leverage centralized, on-premises compute power with proximity to the data." },
      { accomplishment: "Reduced management burden and divergence of developer platforms." },
      { accomplishment: "Designed and programmed scenario enumerator for a supply chain optimization initiative in Python, relying heavily on Pandas enabled vectorized operations to reliably and repeatedly conduct feature engineering." },
      { accomplishment: "More than 20 million scenario variations with dimensions by vendor, product family, and cross-compatibility." },
      { accomplishment: "Enabled the enterprise purchasing managers to explore purchasing options and optimize for price, vendor complexity, contract compliance, and physician materials preferences." },
      { accomplishment: "Predicted Covid patient census over next two weeks at enterprise and department levels with XGBoost and ForecastML in R." },
      { accomplishment: "Pipelined raw SQL data ingestion, cleaning, structuring, generating features, forming projections, and exporting to SQL staging database for external team ETL and consumption in PowerBI with visibility at all levels of the organization." },
      { accomplishment: "Designed and implemented multiple databases and schemas to host Advanced Analytics models in support of enterprise Covid19 response using Microsoft SQL Server." },
      { accomplishment: "Organized team level operations and cross-team cooperation within Azure DevOps platform for a seven person team and a 100+ person department." },
      { accomplishment: "Implemented an instance of the CHIME tool for Covid Census predictions using Docker, Python, and Streamlit." },
      { accomplishment: "Designed and built a full stack application for enterprise Windows 10 migration program of 15000 workstations." },
      { accomplishment: "Secured access to first party data sources via a .Net WebAPI with AD SSO passthrough." },
      { accomplishment: "Designed and built a bootable secure hard drive sanitization tool with bash scripting, SQL database integration, and web based reporting for HIPAA compliance." },
    ],
  },
  {
    title: "Infrastructure Analyst ",
    employer: "St Luke’s Health System 09/2015-04/201",
    location: "Boise, ID",
    responsibilities: [
      { responsibility: "Conducted proof-of-concept technology experiments including SQL integrations, Visio visualizations, and vendor solutions." },
      { responsibility: "Rapidly responded to IT environment security events to detect infection and remediate vulnerabilities." },
      { responsibility: "Performed IT platform analysis in desktop and server environments via first party tools and custom scripted solutions to support operations and project work." },
      { responsibility: "Contributed technical components to projects in the form of programming, documentation, and configuration." },
      { responsibility: "Improved end user workflows through desktop virtualization and process enhancements." },
      { responsibility: "Championed gitlab implementation with internal development community." },
    ],
    accomplishments: [
      { accomplishment: "Identified need for and built a software suite to monitor end user compute device health and remediate configuration compliance issues." },
      { accomplishment: "Ingested data from AD, SCCM, and directly from the workstations." },
      { accomplishment: "System consisted of a server agent written in C#, MS SQL Server database for state, and a management web portal in .Net." },
      { accomplishment: "Conducted Hardware/Software workload analysis via SCCM and WMI/PowerShell in Excel for the migration of 15000 workstations to Windows 7." },
      { accomplishment: "Performed proof of concept project of Shavlik desktop patch/policy management platform." },
      { accomplishment: "Documented the desktop patching workflow using SCCM and Shavlik in Visio and Word." },
      { accomplishment: "Awarded valuable contributor of the year for designing the desktop patching program." },
      { accomplishment: "Migrated end user workflow to VDI desktops, keeping sensitive data inside the network." },
      { accomplishment: "Designed and implemented database schema for a Master Data Management Proof of Concept with the Profisee product, generating an Identity data object for employees and stakeholders." },
      { accomplishment: "Built on-premises Shiny/RStudio server, leveraging available compute power without incurring additional capital expense." },
      { accomplishment: "Built proof of concept product of Visio/SCCM data integration for dynamic asset intelligence and mapping, enabling desktop technicians to have a geographic image enriched with workstation information." },
      { accomplishment: "Built work intake forms in Cherwell Enterprise ITSM platform for internal customers." },
      {
        accomplishment:
          "Scripted vulnerability detection and policy compliance monitoring for the WannaCrypt ransomware event, daily integrating known threat vectors and CISA recommended responses across the 15,000 workstation environment, resulting in less than ten infections (&lt;. 06% infection rate).",
      },
      { accomplishment: "Solution used PowerShell and WMI for remote administration tasks and recorded data to a SQL database for daily environment hygiene reporting." },
    ],
  },
  {
    title: "Desktop Technician I/II ",
    employer: "Flextechs, LLC/St Luke’s Health System 01/2012-09/2015",
    location: "Boise, ID",
    responsibilities: [
      { responsibility: "Supported internal customers as deskside support in a Windows environment." },
      { responsibility: "Researched and integrated subsidiary business units to the enterprise computing standards in desktop, print, and server environments." },
      { responsibility: "Automated solutions with PowerShell scripts and C#/.Net desktop applications." },
      { responsibility: "Enforced desktop and user policy compliance." },
      { responsibility: "Prepared applications for packaging and delivery with App-V." },
    ],
    accomplishments: [
      { accomplishment: "Deployed desktop infrastructure in new-build hospital inpatient and outpatient facilities." },
      { accomplishment: "Standardized and improved legacy scripts, reducing variation and increasing runtime efficiency." },
      { accomplishment: "Onboarded 26 newly-acquired health care organizations and two hospitals to enterprise hardware and software standards on a monthly cadence over three years." },
      { accomplishment: "Mapped the physical layout of new offices to allow location based application and printing deployment using paper and Visio maps." },
      { accomplishment: "Automated device and asset discovery during subsequent iterations to reduce cycle duration and irrational process variation using PowerShell." },
    ],
  },
  {
    title: "Information Systems Lead ",
    employer: "US Army 09/2003-06/2009",
    location: "US Based",
    responsibilities: [{ responsibility: "Supported the IT needs of the US Army at the battalion and battery levels in the US and on deployment." }, { responsibility: "Operated IT service desk at Joint Base Balad, Iraq." }],
    accomplishments: [
      { accomplishment: "Scheduled and executed Video Teleconferences for the staff of the US Embassy in Baghdad, Iraq." },
      { accomplishment: "Provided 100% reliability in VTC meetings with as many as seven interconnected locations among four continents." },
      { accomplishment: "Developed and trained team in the most efficient deployment plan of the Command Post Node satellite Internet/WAN communications equipment, reaching a record setup time of 23 minutes, half that of the next fastest team." },
      { accomplishment: "Independently maintained and supported over 100 computers, 30 printers, and 150 customers." },
      { accomplishment: "Supported and trained customers in the use of all Microsoft Office Suite software." },
    ],
  },
];
