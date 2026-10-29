type Accomplishment = {
  accomplishment: string;
  index: number;
};
type Responsibility = {
  responsibility: string;
  index: number;
};
export type JobEntry = {
  index: number;
  employer: string;
  location: string;
  title: string;
  startdate: Date;
  enddate: Date | undefined;
  responsibilities: Responsibility[];
  accomplishments: Accomplishment[] | undefined;
};
export const jobs: JobEntry[] = [
  {
    index: 5,
    title: "Senior Developer, Operations",
    employer: "allsynx/Businessolver",
    location: "Richardson, TX",
    startdate: new Date("5/1/2023"),
    enddate: undefined,
    responsibilities: [
      {
        index: 0,
        responsibility: "Owned the end-to-end build, maintenance, and operation support of custom Electronic Data Interchange (EDI) backend software in C# and T-SQL as Windows services in a microkernel architecture.",
      },
      {
        index: 1,
        responsibility: "Diagramed the domain models and interrelations of the various software being developed in Visio and draw.io. ",
      },
      {
        index: 2,
        responsibility: "Quickly familiarized with in-house fullstack codebases (ColdFusion, .Net, React) to solve operational bugs, and explain software functions to internal users.",
      },
      {
        index: 3,
        responsibility: "Performed root-cause analysis of sporadic, difficult to reproduce bugs through diligent procedural investigation and reproducible experimentation.",
      },
      {
        index: 4,
        responsibility: "Documented findings in tickets, wiki articles, email communication, and live department level instructional sessions according to the scope of the problem.",
      },
      {
        index: 6,
        responsibility: "Applied expert SQL knowledge to optimize nonperformant queries, improving system throughput, reliability, and deadlock occurrence.",
      },
      {
        index: 7,
        responsibility: "Documented and proposed appropriate indexes and query changes to achieve improvements.",
      },
      {
        index: 8,
        responsibility: "Audited Microsoft SQL Server configuration and database design for performance and reliability.",
      },
      {
        index: 9,
        responsibility: "Operated in a Scrum/Agile pattern with git pull-request source control techniques and intra- and inter-team peer code reviews.",
      },
      {
        index: 10,
        responsibility: "Investigated system issues in Datadog log aggregation tools.",
      },
      {
        index: 11,
        responsibility: "Managed Azure DevOps operational ticket queue prioritization and velocity.",
      },
    ],
    accomplishments: [
      {
        index: 0,
        accomplishment: "Reduced runtime of numerous SQL operations from tens of minutes each to under ten seconds by reorganizing the queries and using more sanitary data access methodologies.",
      },
      {
        index: 1,
        accomplishment: "A notable example reduced daily runtime of all instances of the query by 6.5 hours (from 7.2 hours) for a reduction of 87.5%.",
      },
      {
        index: 2,
        accomplishment: "Presented the need for an architecture review and consolidation to the organization, resulting in an architecture review council being created.",
      },
      {
        index: 3,
        accomplishment: "The council examined the various methodologies used in the organization for the previous twenty years, recognized the drift, and drafted and executed a plan to migrate the codebases to a monorepo following the well documented Service-Based Architecture pattern.",
      },
    ],
  },
  {
    index: 4,
    title: "Data Scientist I",
    employer: "St Luke’s Health System",
    location: "Boise, ID",
    startdate: new Date("6/1/2021"),
    enddate: new Date("4/1/2023"),
    responsibilities: [
      {
        index: 0,
        responsibility: "Built, trained, and validated predictive machine learning models with XGBoost, ARIMA, XGBoost for time series, and traditional predictive algorithms in both R and python on complex 1st party datasets.",
      },
      {
        index: 1,
        responsibility: "Designed, organized, and documented workflow, intake, and backlog with Visio, OneNote, and Azure DevOps.",
      },
      {
        index: 2,
        responsibility: "Monitored running models for performance and model drift with Shiny and MS SQL Server.",
      },
      {
        index: 3,
        responsibility: "Fostered secure programming practices in R, python, and SQL queries.",
      },
      {
        index: 4,
        responsibility: "Curated automated and manual testing standards in R and python.",
      },
      {
        index: 6,
        responsibility: "Integrated data science project architecture standards with organization data standards.",
      },
      {
        index: 7,
        responsibility: "Managed development (Rstudio/VSCode server instances) and PROD (docker/Linux bare metal) environments.",
      },
      {
        index: 8,
        responsibility: "Validated 1st and 3rd party analytics models and products.",
      },
      {
        index: 9,
        responsibility: "Prototyped experimental product deployments.",
      },
      {
        index: 10,
        responsibility: "Wrote and updated team training and onboarding documentation.",
      },
      {
        index: 11,
        responsibility: "Mentored team members in data science techniques, data acquisition, data wrangling, programming best practices, and professional communication.",
      },
    ],
    accomplishments: [
      {
        index: 0,
        accomplishment: "Predicted population growth at ZCTA and county levels for the service area with ARIMA in R and ggplot2 using census datasets.",
      },
      {
        index: 1,
        accomplishment: "Predicted duration of labor at the onset of the baby-delivery event by implementing a Random Forest model in Python.",
      },
      {
        index: 2,
        accomplishment: "Published internal Flask API in a Docker container to deliver model results.",
      },
      {
        index: 3,
        accomplishment: "Maintained and enhanced a predictive model diagnostic application built on Shiny, allowing comparison of multiple models or instances of the same model for performance and model drift.",
      },
      {
        index: 4,
        accomplishment: "Built database connection libraries in Python and R.",
      },
      {
        index: 6,
        accomplishment: "Interfaced the development environments with the enterprise secure credential vault via API calls, removing the need for developers to have copies of the credentials.",
      },
      {
        index: 7,
        accomplishment: "Enabled standardization of saving SQL query scripts in source control and executing them to be returned as Pandas DataFrame and Tidyverse tibble objects.",
      },
    ],
  },
  {
    index: 3,
    title: "Domain Architect II ",
    employer: "St Luke’s Health System",
    location: "Boise, ID",
    startdate: new Date("04/1/2019"),
    enddate: new Date("6/1/2021"),
    responsibilities: [
      {
        index: 0,
        responsibility: "Evangelized programming best practices including source control with git and Azure Repos, de-coupled code design, configuration management.",
      },
      {
        index: 1,
        responsibility: "Identified and solved the need for a centralized data science environment.",
      },
      {
        index: 2,
        responsibility: "Designed and implemented multiple MS SQL databases to host Advanced Analytics model results.",
      },
      {
        index: 3,
        responsibility: "Secured access to privileged data sources with. Net APIs.",
      },
      {
        index: 4,
        responsibility: "Designed and built a secure hard drive sanitization tool.",
      },
      {
        index: 6,
        responsibility: "Trained customers on integrating web/API data to Excel and PowerBI.",
      },
      {
        index: 7,
        responsibility: "Mentored junior Data Scientists in domain specific concepts and professional communication.",
      },
    ],
    accomplishments: [
      {
        index: 0,
        accomplishment: "Identified and solved the need for a centralized data science environment.",
      },
      {
        index: 1,
        accomplishment: "Conducted and presented a buy vs build cost-benefit analysis.",
      },
      {
        index: 2,
        accomplishment: "Proposed purchasing Rstudio commercial solution (Posit) to senior directors with expected cost, installation plan, maintenance effort, and integration plan.",
      },
      {
        index: 3,
        accomplishment: "Installed R and Python Integrated Development Environment (Rstudio Server).",
      },
      {
        index: 4,
        accomplishment: "Empowered analytics to leverage centralized, on-premises compute power with proximity to the data.",
      },
      {
        index: 6,
        accomplishment: "Reduced management burden and divergence of developer platforms.",
      },
      {
        index: 7,
        accomplishment: "Designed and programmed scenario enumerator for a supply chain optimization initiative in Python, relying heavily on Pandas enabled vectorized operations to reliably and repeatedly conduct feature engineering.",
      },
      {
        index: 8,
        accomplishment: "More than 20 million scenario variations with dimensions by vendor, product family, and cross-compatibility.",
      },
      {
        index: 9,
        accomplishment: "Enabled the enterprise purchasing managers to explore purchasing options and optimize for price, vendor complexity, contract compliance, and physician materials preferences.",
      },
      {
        index: 10,
        accomplishment: "Predicted Covid patient census over next two weeks at enterprise and department levels with XGBoost and ForecastML in R.",
      },
      {
        index: 11,
        accomplishment: "Pipelined raw SQL data ingestion, cleaning, structuring, generating features, forming projections, and exporting to SQL staging database for external team ETL and consumption in PowerBI with visibility at all levels of the organization.",
      },
      {
        index: 12,
        accomplishment: "Designed and implemented multiple databases and schemas to host Advanced Analytics models in support of enterprise Covid19 response using Microsoft SQL Server.",
      },
      {
        index: 13,
        accomplishment: "Organized team level operations and cross-team cooperation within Azure DevOps platform for a seven person team and a 100+ person department.",
      },
      {
        index: 14,
        accomplishment: "Implemented an instance of the CHIME tool for Covid Census predictions using Docker, Python, and Streamlit.",
      },
      {
        index: 15,
        accomplishment: "Designed and built a full stack application for enterprise Windows 10 migration program of 15000 workstations.",
      },
      {
        index: 16,
        accomplishment: "Secured access to first party data sources via a .Net WebAPI with AD SSO passthrough.",
      },
      {
        index: 17,
        accomplishment: "Designed and built a bootable secure hard drive sanitization tool with bash scripting, SQL database integration, and web based reporting for HIPAA compliance.",
      },
    ],
  },
  {
    index: 2,
    title: "Infrastructure Analyst",
    employer: "St Luke’s Health System",
    location: "Boise, ID",
    startdate: new Date("9/1/2015"),
    enddate: new Date("4/1/2019"),
    responsibilities: [
      {
        index: 0,
        responsibility: "Conducted proof-of-concept technology experiments including SQL integrations, Visio visualizations, and vendor solutions.",
      },
      {
        index: 1,
        responsibility: "Rapidly responded to IT environment security events to detect infection and remediate vulnerabilities.",
      },
      {
        index: 2,
        responsibility: "Performed IT platform analysis in desktop and server environments via first party tools and custom scripted solutions to support operations and project work.",
      },
      {
        index: 3,
        responsibility: "Contributed technical components to projects in the form of programming, documentation, and configuration.",
      },
      {
        index: 4,
        responsibility: "Improved end user workflows through desktop virtualization and process enhancements.",
      },
      {
        index: 5,
        responsibility: "Championed gitlab implementation with internal development community.",
      },
    ],
    accomplishments: [
      {
        index: 0,
        accomplishment: "Identified need for and built a software suite to monitor end user compute device health and remediate configuration compliance issues.",
      },
      {
        index: 1,
        accomplishment: "Ingested data from AD, SCCM, and directly from the workstations.",
      },
      {
        index: 2,
        accomplishment: "System consisted of a server agent written in C#, MS SQL Server database for state, and a management web portal in .Net.",
      },
      {
        index: 3,
        accomplishment: "Conducted Hardware/Software workload analysis via SCCM and WMI/PowerShell in Excel for the migration of 15000 workstations to Windows 7.",
      },
      {
        index: 4,
        accomplishment: "Performed proof of concept project of Shavlik desktop patch/policy management platform.",
      },
      {
        index: 6,
        accomplishment: "Documented the desktop patching workflow using SCCM and Shavlik in Visio and Word.",
      },
      {
        index: 7,
        accomplishment: "Awarded valuable contributor of the year for designing the desktop patching program.",
      },
      {
        index: 8,
        accomplishment: "Migrated end user workflow to VDI desktops, keeping sensitive data inside the network.",
      },
      {
        index: 9,
        accomplishment: "Designed and implemented database schema for a Master Data Management Proof of Concept with the Profisee product, generating an Identity data object for employees and stakeholders.",
      },
      {
        index: 10,
        accomplishment: "Built on-premises Shiny/RStudio server, leveraging available compute power without incurring additional capital expense.",
      },
      {
        index: 11,
        accomplishment: "Built proof of concept product of Visio/SCCM data integration for dynamic asset intelligence and mapping, enabling desktop technicians to have a geographic image enriched with workstation information.",
      },
      {
        index: 12,
        accomplishment: "Built work intake forms in Cherwell Enterprise ITSM platform for internal customers.",
      },
      {
        index: 13,
        accomplishment:
          "Scripted vulnerability detection and policy compliance monitoring for the WannaCrypt ransomware event, daily integrating known threat vectors and CISA recommended responses across the 15,000 workstation environment, resulting in less than ten infections (&lt;. 06% infection rate).",
      },
      {
        index: 14,
        accomplishment: "Solution used PowerShell and WMI for remote administration tasks and recorded data to a SQL database for daily environment hygiene reporting.",
      },
    ],
  },
  {
    index: 1,
    title: "Desktop Technician I/II ",
    employer: "Flextechs, LLC/St Luke’s Health System",
    location: "Boise, ID",
    startdate: new Date("1/1/2012"),
    enddate: new Date("9/1/2015"),
    responsibilities: [
      {
        index: 0,
        responsibility: "Supported internal customers as deskside support in a Windows environment.",
      },
      {
        index: 1,
        responsibility: "Researched and integrated subsidiary business units to the enterprise computing standards in desktop, print, and server environments.",
      },
      {
        index: 2,
        responsibility: "Automated solutions with PowerShell scripts and C#/.Net desktop applications.",
      },
      {
        index: 3,
        responsibility: "Enforced desktop and user policy compliance.",
      },
      {
        index: 4,
        responsibility: "Prepared applications for packaging and delivery with App-V.",
      },
    ],
    accomplishments: [
      {
        index: 0,
        accomplishment: "Deployed desktop infrastructure in new-build hospital inpatient and outpatient facilities.",
      },
      {
        index: 1,
        accomplishment: "Standardized and improved legacy scripts, reducing variation and increasing runtime efficiency.",
      },
      {
        index: 2,
        accomplishment: "Onboarded 26 newly-acquired health care organizations and two hospitals to enterprise hardware and software standards on a monthly cadence over three years.",
      },
      {
        index: 3,
        accomplishment: "Mapped the physical layout of new offices to allow location based application and printing deployment using paper and Visio maps.",
      },
      {
        index: 4,
        accomplishment: "Automated device and asset discovery during subsequent iterations to reduce cycle duration and irrational process variation using PowerShell.",
      },
    ],
  },
  {
    index: 0,
    title: "Information Systems Lead",
    employer: "US Army",
    location: "US Based",
    startdate: new Date("9/1/2003"),
    enddate: new Date("6/1/2009"),
    responsibilities: [
      {
        index: 0,
        responsibility: "Supported the IT needs of the US Army at the battalion and battery levels in the US and on deployment.",
      },
      {
        index: 1,
        responsibility: "Operated IT service desk at Joint Base Balad, Iraq.",
      },
    ],
    accomplishments: [
      {
        index: 0,
        accomplishment: "Scheduled and executed Video Teleconferences for the staff of the US Embassy in Baghdad, Iraq.",
      },
      {
        index: 1,
        accomplishment: "Provided 100% reliability in VTC meetings with as many as seven interconnected locations among four continents.",
      },
      {
        index: 2,
        accomplishment: "Developed and trained team in the most efficient deployment plan of the Command Post Node satellite Internet/WAN communications equipment, reaching a record setup time of 23 minutes, half that of the next fastest team.",
      },
      {
        index: 3,
        accomplishment: "Independently maintained and supported over 100 computers, 30 printers, and 150 customers.",
      },
      {
        index: 4,
        accomplishment: "Supported and trained customers in the use of all Microsoft Office Suite software.",
      },
    ],
  },
];
