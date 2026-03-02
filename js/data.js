const DOMAINS = {
  "platform-overview": { name: "Platform Overview & Navigation", weight: 7, color: "#4CAF50" },
  "instance-config": { name: "Instance Configuration", weight: 10, color: "#2196F3" },
  "collaboration": { name: "Configuring Apps for Collaboration", weight: 20, color: "#FF9800" },
  "self-service-automation": { name: "Self-Service & Process Automation", weight: 20, color: "#9C27B0" },
  "database-security": { name: "Database Management & Platform Security", weight: 30, color: "#F44336" },
  "migration-scripting": { name: "Data Migration & Integration / Scripting", weight: 13, color: "#00BCD4" }
};

const QUESTIONS = [
  {
    id: 1, domain: "platform-overview", type: "single",
    question: "ServiceNow is an example of which cloud computing model?",
    options: ["aPaaS (Application Platform as a Service)", "PaaS (Platform as a Service)", "IaaS (Infrastructure as a Service)", "SaaS (Software as a Service)"],
    correct: 0,
    explanation: "ServiceNow is classified as aPaaS (Application Platform as a Service). It provides a cloud-based application development platform that allows customers to build, deploy, and manage enterprise applications."
  },
  {
    id: 2, domain: "platform-overview", type: "single",
    question: "What are the three main areas of the ServiceNow user interface in Next Experience?",
    options: ["Menu, Workspace, Dashboard", "Header, Sidebar, Footer", "Banner, App Navigator, Content Frame", "Toolbar, Navigation Pane, Detail View"],
    correct: 2,
    explanation: "The three main areas of the ServiceNow UI are the Banner (top bar), App Navigator (left side for browsing modules), and Content Frame (main area displaying content)."
  },
  {
    id: 3, domain: "platform-overview", type: "multi",
    question: "From the User menu in ServiceNow, which actions can a user select? (Choose 3)",
    options: ["Impersonate Users", "Send Notifications", "Log Out ServiceNow", "Elevate Roles", "Order from Service Catalog"],
    correct: [0,2,3],
    explanation: "From the User menu, users can Log Out, Elevate Roles (if high security plugin is active), and Impersonate Users (if they have the admin role). Sending notifications and ordering from the catalog are not User menu actions."
  },
  {
    id: 4, domain: "platform-overview", type: "single",
    question: "Which of the following does NOT appear in the Application Navigator History section?",
    options: ["Forms", "Lists", "UI Pages", "Records"],
    correct: 2,
    explanation: "The Application Navigator History section tracks recently visited records, lists, and forms but does not track UI Pages."
  },
  {
    id: 5, domain: "platform-overview", type: "single",
    question: "\"UAT, Development, Review, QA, and Test are user perspectives of the ServiceNow production instance.\" Is this statement true or false?",
    options: ["False, these are deprecated terminology", "True, but only in enterprise editions", "False, these are separate instances not perspectives", "True, they are different views within production"],
    correct: 2,
    explanation: "This is false. UAT, Development, QA, and Test are separate ServiceNow instances, not perspectives within a single production instance. Each has its own URL and data."
  },
  {
    id: 6, domain: "platform-overview", type: "single",
    question: "What term refers to application menus that users access quickly and often in the Navigator?",
    options: ["Tag", "Bookmark", "Favorite", "Breadcrumb"],
    correct: 2,
    explanation: "Favorites allow users to mark frequently accessed application menus and modules for quick access in the Navigator. Breadcrumbs show the navigation path, and tags are used to categorize records."
  },
  {
    id: 7, domain: "platform-overview", type: "single",
    question: "What is the primary purpose of a Personal Developer Instance (PDI) in ServiceNow?",
    options: ["To provide a free instance for learning and development", "To host production data for a customer", "To serve as a disaster recovery environment", "To run automated tests in a CI/CD pipeline"],
    correct: 0,
    explanation: "A Personal Developer Instance (PDI) is a free ServiceNow instance provided for learning, development, and testing purposes. It is available at developer.servicenow.com."
  },
  {
    id: 8, domain: "platform-overview", type: "single",
    question: "Which ServiceNow interface is the default modern UI experience that replaced UI16?",
    options: ["UI15", "Classic UI", "Next Experience (Unified Navigation)", "Service Portal"],
    correct: 2,
    explanation: "Next Experience (also called Unified Navigation or Polaris) is the modern UI framework that replaces UI16 as the default navigation experience."
  },
  {
    id: 9, domain: "platform-overview", type: "single",
    question: "What is the typical instance promotion path in ServiceNow?",
    options: ["Test to Development to Production", "Development to Production to Test", "Development to Test to Production", "Production to Test to Development"],
    correct: 2,
    explanation: "The standard instance promotion path is Development to Test to Production. Changes are built in dev, validated in test, and deployed to production."
  },
  {
    id: 10, domain: "platform-overview", type: "single",
    question: "A user wants to quickly navigate to the Incident list. What is the fastest method in the Application Navigator?",
    options: ["Click All and browse through every menu", "Open System Properties and search", "Type 'incident.list' in the filter navigator", "Navigate to the CMDB module first"],
    correct: 2,
    explanation: "Typing 'incident.list' (or just 'incident') in the Application Navigator filter is the fastest way to navigate directly to the Incident list."
  },
  {
    id: 11, domain: "platform-overview", type: "single",
    question: "How do administrators check which ServiceNow release version is currently running on their instance?",
    options: ["Transactions log", "Upgraded table", "Stats module or stats.do", "Memory Stats module"],
    correct: 2,
    explanation: "Admins can check the current release by navigating to stats.do in the browser or using the Stats module. This shows system information including the build version and release."
  },
  {
    id: 12, domain: "platform-overview", type: "single",
    question: "Which of the following best describes the ServiceNow platform?",
    options: ["An on-premises-only help desk tool", "A database management system for SQL queries", "A cloud-based platform for digital workflows built on a single data model", "A code-only development framework requiring Java"],
    correct: 2,
    explanation: "ServiceNow is a cloud-based platform for digital workflows. It uses a single data model architecture that allows different applications to share and reference the same data."
  },
  {
    id: 13, domain: "platform-overview", type: "single",
    question: "What search engine does ServiceNow use for text searching?",
    options: ["Apache Solr", "Elasticsearch", "Zing", "Lucene"],
    correct: 2,
    explanation: "ServiceNow uses Zing as its built-in text search engine. Zing indexes text fields and provides full-text search capabilities across the platform."
  },
  {
    id: 14, domain: "platform-overview", type: "single",
    question: "Why would an administrator use user impersonation in ServiceNow?",
    options: ["Testing and verifying what a user sees and can access", "To grant admin privileges to another user temporarily", "To permanently change another user's password", "To delete another user's records"],
    correct: 0,
    explanation: "User impersonation is used for testing and visibility purposes. Admins can impersonate other users to see the platform from their perspective, verify permissions, and troubleshoot issues."
  },
  {
    id: 15, domain: "instance-config", type: "single",
    question: "Which path is used to define and maintain record number prefixes (like INC, CHG) in ServiceNow?",
    options: ["System Properties > Number Format", "Number field > Number", "System Definition > Numbers", "System Definition > Number maintenance"],
    correct: 3,
    explanation: "Record number prefixes are configured under System Definition > Number maintenance. This is where you define the prefix (e.g., INC for incidents) and the number of digits."
  },
  {
    id: 16, domain: "instance-config", type: "single",
    question: "Which is true about a table with the 'Allow configuration' Application Access option selected?",
    options: ["Out of scope applications can create Business Rules for the table", "Any user with the user role can modify the application scripts", "Only in-scope application scripts can create Business Rules for it", "Out of scope applications can add new tables to the scoped application"],
    correct: 0,
    explanation: "When 'Allow configuration' is selected in Application Access, it allows out-of-scope applications to create configurations like Business Rules for that table."
  },
  {
    id: 17, domain: "instance-config", type: "single",
    question: "Where would you go to see if an admin impersonated another user?",
    options: ["System Log", "Base Class viewer", "Tables module", "User Administration module"],
    correct: 0,
    explanation: "Impersonation events are recorded in the System Log. Administrators can review the log to see who impersonated whom and when."
  },
  {
    id: 18, domain: "instance-config", type: "single",
    question: "How do you get to categories on an incident or other table in ServiceNow?",
    options: ["Go to System Definition > Choice List", "In the task SLA form", "Go to Social IT > Feed Administration > Messages", "Base Class viewer"],
    correct: 0,
    explanation: "Categories and other choice values for fields on tables are managed under System Definition > Choice List. This is where you can view and modify the available choices."
  },
  {
    id: 19, domain: "instance-config", type: "single",
    question: "How do you deactivate an application in ServiceNow?",
    options: ["Delete the application from the instance", "Remove all roles associated with the application", "Click the pencil icon in Application Navigator and uncheck Active", "Disable the application plugin from System Plugins"],
    correct: 2,
    explanation: "To deactivate an application, click the pencil icon in the Application Navigator and uncheck the Active checkbox. This hides the application without deleting it."
  },
  {
    id: 20, domain: "instance-config", type: "single",
    question: "Which ServiceNow feature will NOT run natively on smartphones?",
    options: ["User Administration", "Workflow execution", "Service Catalogue", "Self-Service"],
    correct: 0,
    explanation: "User Administration is not available natively on smartphones. Self-Service, Service Catalogue, and workflow execution are supported through the Now Mobile app."
  },
  {
    id: 21, domain: "instance-config", type: "single",
    question: "Which path leads to the table configuration page from a form?",
    options: ["Form Context menu > Configure > Table", "Form Context menu > View > Show Table", "Form Context menu > Configure > Dictionary", "Form Context menu > View > Table"],
    correct: 0,
    explanation: "To access the table configuration page from a form, right-click the form header and select Configure > Table from the context menu."
  },
  {
    id: 22, domain: "instance-config", type: "single",
    question: "What is the difference between personalizing and customizing in ServiceNow?",
    options: ["Personalizing requires admin role; customizing does not", "Personalizing changes apply to all users; customizing changes apply to one user", "They are interchangeable terms with the same meaning", "Personalizing affects only the current user's view; customizing affects all users"],
    correct: 3,
    explanation: "Personalizing changes the experience for the individual user only (e.g., list columns, homepage layout). Customizing changes the experience for all users (e.g., adding fields to a form, modifying business rules)."
  },
  {
    id: 23, domain: "instance-config", type: "single",
    question: "Which of the following are common ServiceNow user interfaces?",
    options: ["Platform UI, Service Portal, Workspace, and Now Mobile", "Platform UI, Eclipse IDE, Service Portal, and Terminal", "Classic UI, Modern UI, API Console, and Studio", "Service Portal, Workspace, Command Line, and REST Explorer"],
    correct: 0,
    explanation: "The common ServiceNow user interfaces are Platform UI (the main admin interface), Service Portal (end-user portal), Workspace (agent workspace), and Now Mobile (mobile application)."
  },
  {
    id: 24, domain: "instance-config", type: "single",
    question: "Which application is available to all users in ServiceNow by default?",
    options: ["Facilities", "Incident", "Self Service", "Change"],
    correct: 2,
    explanation: "Self Service is available to all users by default. Applications like Change, Incident, and Facilities require specific roles to access."
  },
  {
    id: 25, domain: "instance-config", type: "single",
    question: "To grant the 'admin' role to a user, the granting user must have which role?",
    options: ["Admin", "Super_user", "User_admin", "Security_admin"],
    correct: 0,
    explanation: "To grant the admin role, the granting user must already have the admin role. Only administrators can assign the admin role to other users."
  },
  {
    id: 26, domain: "instance-config", type: "single",
    question: "Where do you install applications and plugins in ServiceNow?",
    options: ["System Applications > All Available Applications", "Administration > Plugin Manager", "System Properties > Plugins", "System Definition > Application Menus"],
    correct: 0,
    explanation: "Applications and plugins are installed from System Applications > All Available Applications (or the ServiceNow Store). This interface shows both installed and available applications."
  },
  {
    id: 27, domain: "instance-config", type: "single",
    question: "What happens when you activate a plugin in ServiceNow?",
    options: ["It requires a full instance restart before taking effect", "It only downloads the plugin files for later installation", "It replaces existing configurations with plugin defaults", "It adds new tables, roles, properties, and other components to the instance"],
    correct: 3,
    explanation: "Activating a plugin adds its components (tables, roles, properties, demo data, etc.) to the instance. It extends the instance without replacing existing configurations."
  },
  {
    id: 28, domain: "instance-config", type: "single",
    question: "Which user interface is best suited for IT agents handling multiple tasks simultaneously?",
    options: ["Now Mobile", "Service Portal", "Platform UI Classic", "Agent Workspace"],
    correct: 3,
    explanation: "Agent Workspace is designed specifically for IT agents to handle multiple tasks efficiently. It provides a tabbed interface, contextual side panels, and built-in collaboration tools."
  },
  {
    id: 29, domain: "instance-config", type: "single",
    question: "What module is used to configure system-wide settings like company name and banner text?",
    options: ["System Definition > Configuration", "System UI > Brand", "System Properties", "System Applications > Settings"],
    correct: 2,
    explanation: "System Properties is used to configure system-wide settings including company name, banner text, date formats, and many other instance-level configurations."
  },
  {
    id: 30, domain: "instance-config", type: "single",
    question: "Which setting controls what users see on their ServiceNow homepage?",
    options: ["System UI > Homepage", "Self-Service > Homepage", "System Properties > Homepage", "Content Management > Pages"],
    correct: 0,
    explanation: "System UI > Homepage is where administrators configure the default homepage content and layout that users see when they log in."
  },
  {
    id: 31, domain: "instance-config", type: "single",
    question: "In the Settings menu accessible from the gear icon, which categories of settings are available?",
    options: ["General, Theme, Notifications, Lists, Forms, and Developer", "General, Security, Database, Network, and API", "Profile, Language, Timezone, and Currency", "Display, Accessibility, Audio, and Privacy"],
    correct: 0,
    explanation: "The Settings menu (gear icon) provides categories: General, Theme, Notifications, Lists, Forms, and Developer. These allow users to personalize their experience."
  },
  {
    id: 32, domain: "instance-config", type: "single",
    question: "What is the purpose of the Application Scope in ServiceNow?",
    options: ["To restrict how applications interact with each other and protect resources", "To limit the number of users who can access an application", "To define the geographic region where the app is deployed", "To set the maximum number of records an application can create"],
    correct: 0,
    explanation: "Application Scope restricts how applications interact with each other. It protects application resources by controlling which other applications can access its tables, scripts, and configurations."
  },
  {
    id: 33, domain: "instance-config", type: "single",
    question: "What is the function of the Update Set picker in the ServiceNow banner?",
    options: ["It specifies which Update Set captures configuration changes", "It controls the current user session timeout", "It selects which database to connect to", "It determines the current application scope"],
    correct: 0,
    explanation: "The Update Set picker in the banner allows administrators to select which Update Set will capture their configuration changes. All modifications are recorded in the selected Update Set."
  },
  {
    id: 34, domain: "instance-config", type: "single",
    question: "Which role allows a user to add or remove fields from a list view?",
    options: ["admin", "list_admin", "personalize_list", "itil"],
    correct: 2,
    explanation: "The personalize_list role allows users to add or remove fields from their personal list view. The admin role also has this ability, but personalize_list is the specific role for this purpose."
  },
  {
    id: 35, domain: "collaboration", type: "single",
    question: "Which allows editing field values in a list without opening the form?",
    options: ["Edit Menu", "Data Editor", "List Editor", "Form Designer"],
    correct: 2,
    explanation: "The List Editor allows users to edit field values directly in the list view by double-clicking on a cell, without needing to open the full form."
  },
  {
    id: 36, domain: "collaboration", type: "single",
    question: "What is the name of the string that displays filter criteria applied to a list?",
    options: ["Bookmarks", "Tags", "Favorites", "Breadcrumbs"],
    correct: 3,
    explanation: "Breadcrumbs display the filter criteria currently applied to a list. They appear above the list and show the conditions being used to filter records."
  },
  {
    id: 37, domain: "collaboration", type: "single",
    question: "Which module displays a list of tasks assigned to a user's group but not yet assigned to an individual user?",
    options: ["My Groups Tasks", "My Groups Work", "My Teams Work", "My Teams Tasks"],
    correct: 1,
    explanation: "My Groups Work shows tasks assigned to the user's group that have not yet been assigned to a specific individual. This helps group members see unassigned work."
  },
  {
    id: 38, domain: "collaboration", type: "single",
    question: "What section on a task record shows the most recent updates made to the record?",
    options: ["Journal", "Timeline", "Activity", "Audit Log"],
    correct: 2,
    explanation: "The Activity section (Activity Stream) on a task record shows the most recent updates, including work notes, comments, and field changes in chronological order."
  },
  {
    id: 39, domain: "collaboration", type: "single",
    question: "Which tool is used to have conversations with logged-in users in real-time?",
    options: ["User Presence", "Connect Chat", "Comments", "Now Messenger"],
    correct: 1,
    explanation: "Connect Chat allows real-time conversations with logged-in users. It provides instant messaging capabilities within the ServiceNow platform."
  },
  {
    id: 40, domain: "collaboration", type: "single",
    question: "What is the purpose of a Related List on a form?",
    options: ["Present related records from other tables", "Present related fields from the same record", "Dot-walk to a core table for referencing", "Create a one-to-many relationship between tables"],
    correct: 0,
    explanation: "A Related List presents related records from other tables on a form. For example, an Incident form may show a Related List of child tasks or associated change requests."
  },
  {
    id: 41, domain: "collaboration", type: "single",
    question: "Column context menus on lists are used for which of the following?",
    options: ["Displaying view form, viewing related tasks, and adding relationships", "Opening record producers, creating templates, and assigning records", "Displaying filtering options, assigning tags, and searching", "Creating quick reports, configuring the list, and exporting data"],
    correct: 3,
    explanation: "Column context menus (right-clicking a column header) provide options for creating quick reports, configuring the list layout, and exporting data from that column."
  },
  {
    id: 42, domain: "collaboration", type: "single",
    question: "What format does a condition builder use?",
    options: ["Field > Operator > Name", "Name > Field > Condition", "Field > Operator > Value", "Field > Condition > Operator"],
    correct: 2,
    explanation: "The condition builder follows the format: Field > Operator > Value. For example, 'Priority > is > 1' or 'State > is > Active'."
  },
  {
    id: 43, domain: "collaboration", type: "single",
    question: "How do you change the sort sequence of fields or tasks in ServiceNow?",
    options: ["Modify the order field", "Modify Field Types", "Arrange in Alphabetical Order setting", "Variable Set configuration"],
    correct: 0,
    explanation: "The sort sequence of fields or tasks is controlled by modifying the order field. Lower values appear first in the display sequence."
  },
  {
    id: 44, domain: "collaboration", type: "single",
    question: "\"Views are only for lists to personalize list layout and columns\" - Is this statement true or false?",
    options: ["True, forms use a separate configuration mechanism", "False, views work for both lists and forms", "False, views only apply to forms", "True, views only apply to list layouts"],
    correct: 1,
    explanation: "This statement is false. Views work for both lists AND forms. You can create different views of a form to show different field layouts for different purposes."
  },
  {
    id: 45, domain: "collaboration", type: "single",
    question: "What can be used to automatically populate fields when creating a new record from a form?",
    options: ["Formatters", "Template", "Assignment Rules", "Reference Qualifiers"],
    correct: 1,
    explanation: "Templates can be used to automatically populate fields in a form when creating new records. They pre-fill field values to save time and ensure consistency."
  },
  {
    id: 46, domain: "collaboration", type: "single",
    question: "Which is NOT related to a UI Action?",
    options: ["List Link", "Form Link", "Form Button", "Search"],
    correct: 3,
    explanation: "UI Actions create buttons, form links, and list links. Search is not a UI Action type. UI Actions can execute client-side or server-side scripts when triggered."
  },
  {
    id: 47, domain: "collaboration", type: "single",
    question: "A UI Action with order 110 displays after a UI Action with order 120. True or false?",
    options: ["False, lower order numbers display first", "True, higher numbers display first", "False, order number has no effect on display position", "True, display order is reversed"],
    correct: 0,
    explanation: "False. Lower order numbers display first. A UI Action with order 110 would display before one with order 120."
  },
  {
    id: 48, domain: "collaboration", type: "single",
    question: "A gauge can be added to which of the following?",
    options: ["Home Page", "Favorites", "User Profile", "Change Request"],
    correct: 0,
    explanation: "Gauges can be added to the Home Page. They provide visual indicators such as speedometers, progress bars, or dials that display real-time data on dashboards and homepages."
  },
  {
    id: 49, domain: "collaboration", type: "single",
    question: "What type of UI functionality creates buttons, form links, and context menu items?",
    options: ["UI Action", "Client Script", "UI Policy", "Business Rule"],
    correct: 0,
    explanation: "UI Actions create buttons, form links, and context menu items on forms and lists. They can execute both client-side and server-side scripts."
  },
  {
    id: 50, domain: "collaboration", type: "single",
    question: "What interface displays multiple performance analytics widgets on one screen?",
    options: ["Dashboard", "Form", "List", "Timeline"],
    correct: 0,
    explanation: "A Dashboard displays multiple performance analytics widgets, reports, and gauges on a single screen, providing a consolidated view of key metrics."
  },
  {
    id: 51, domain: "collaboration", type: "single",
    question: "When using Performance Analytics, what kind of KPI signals support long-term workflow stability decisions?",
    options: ["Stability signals", "Long-term signals", "Non-signals", "Anti-signals"],
    correct: 1,
    explanation: "Long-term signals in Performance Analytics are used to make decisions that statistically support long-term workflow stability and process improvement."
  },
  {
    id: 52, domain: "collaboration", type: "multi",
    question: "Reports can be created from which places in the platform? (Choose 2)",
    options: ["Statistics module", "List column heading", "View / Run module", "Metrics module"],
    correct: [1,2],
    explanation: "Reports can be created from list column headings (right-click a column and select report options) and from the View/Run module under Reporting."
  },
  {
    id: 53, domain: "self-service-automation", type: "single",
    question: "Which module would you use to create a new email notification for users affected by network outages?",
    options: ["System Notification > Email > Notifications", "Administration > Notification Overview", "User Preferences > Email > Notifications", "System Properties > Email > Settings"],
    correct: 0,
    explanation: "New notifications are created under System Notification > Email > Notifications. This module lets you define who receives notifications, when they trigger, and what content they contain."
  },
  {
    id: 54, domain: "collaboration", type: "single",
    question: "What is the difference between Performance Analytics and Reporting in ServiceNow?",
    options: ["There is no difference; they are the same feature", "Reporting tracks data over time; Performance Analytics shows real-time data only", "Performance Analytics runs reports faster than the Reporting module", "Performance Analytics tracks data over time with snapshots; Reporting shows data at the moment the report runs"],
    correct: 3,
    explanation: "Performance Analytics takes snapshots of data over time to show trends and patterns. Reporting shows data as it exists at the point in time the report is run."
  },
  {
    id: 55, domain: "collaboration", type: "single",
    question: "What is the purpose of a Visual Task Board (VTB) in ServiceNow?",
    options: ["To define workflow activities for task routing", "To display tasks in a Kanban-style board for visual task management", "To create Gantt charts for project planning", "To generate automated reports about task completion"],
    correct: 1,
    explanation: "Visual Task Boards (VTBs) display tasks in a Kanban-style board format. Users can drag and drop tasks between lanes (e.g., Open, In Progress, Closed) for visual task management."
  },
  {
    id: 56, domain: "collaboration", type: "single",
    question: "Which report type would you use to show the distribution of incidents by priority?",
    options: ["Line chart", "Trend report", "Bar chart or pie chart", "Calendar report"],
    correct: 2,
    explanation: "A bar chart or pie chart is ideal for showing the distribution of incidents by priority, as they display categorical data in an easy-to-compare visual format."
  },
  {
    id: 57, domain: "collaboration", type: "single",
    question: "How do you add a report to a dashboard in ServiceNow?",
    options: ["Export the report and import it into the dashboard module", "Reports cannot be added to dashboards directly", "Use the 'Add to Dashboard' option from the report or add a widget from the dashboard editor", "Copy the report URL and paste it into a dashboard widget"],
    correct: 2,
    explanation: "Reports can be added to dashboards by using the 'Add to Dashboard' option from the report view, or by editing the dashboard and adding a report widget."
  },
  {
    id: 58, domain: "self-service-automation", type: "single",
    question: "Which notification trigger causes an email to be sent when a record is inserted into a table?",
    options: ["Record updated", "Record queried", "Record inserted", "Record deleted"],
    correct: 2,
    explanation: "The 'Record inserted' trigger causes an email notification to be sent when a new record is created in the specified table."
  },
  {
    id: 59, domain: "self-service-automation", type: "single",
    question: "What is the purpose of an email template in ServiceNow notifications?",
    options: ["To define which users receive the notification", "To define reusable email content with dynamic field values", "To filter which records trigger notifications", "To schedule when notifications are sent"],
    correct: 1,
    explanation: "Email templates define reusable email content that can include dynamic field values using variables. They standardize notification content and can be referenced by multiple notification records."
  },
  {
    id: 60, domain: "collaboration", type: "single",
    question: "What are the main components of a form in ServiceNow?",
    options: ["Tabs, panels, and widgets arranged in a grid", "Sections, fields, related lists, and formatters", "Header, body, and footer sections with navigation buttons", "Title bar, menu bar, and content area"],
    correct: 1,
    explanation: "A ServiceNow form consists of sections (grouping fields), fields (data entry elements), related lists (showing related records), and formatters (special elements like activity streams)."
  },
  {
    id: 61, domain: "collaboration", type: "single",
    question: "What tool is used to configure the layout of a form, including adding and arranging sections and fields?",
    options: ["Schema Map", "List Editor", "Form Designer", "Table Builder"],
    correct: 2,
    explanation: "Form Designer is a drag-and-drop tool used to configure form layouts. It allows administrators to add, remove, and rearrange sections, fields, and formatters on a form."
  },
  {
    id: 62, domain: "collaboration", type: "single",
    question: "Which type of filter in ServiceNow can be saved and shared with other users?",
    options: ["Saved filter with visibility set to Everyone", "Column filter", "Quick filter", "Personal filter only"],
    correct: 0,
    explanation: "Saved filters can be configured with visibility set to 'Everyone' so they are shared with all users. Personal filters are only visible to the user who created them."
  },
  {
    id: 63, domain: "collaboration", type: "single",
    question: "What is the purpose of tags in ServiceNow lists?",
    options: ["To set priority levels on task records", "To define access control permissions", "To trigger automated workflows on tagged records", "To create visual categories for organizing and quickly finding records"],
    correct: 3,
    explanation: "Tags allow users to create visual categories to organize and quickly find records. Tags are personal and can be applied to any record for easy filtering."
  },
  {
    id: 64, domain: "collaboration", type: "single",
    question: "What is an Assignment Rule in ServiceNow?",
    options: ["A rule that prevents unauthorized field changes", "A rule that automatically assigns records to users or groups based on conditions", "A rule that assigns priority based on impact and urgency", "A rule that routes approvals to the correct manager"],
    correct: 1,
    explanation: "Assignment Rules automatically assign records to specific users or groups based on defined conditions. For example, all P1 incidents from a specific category could be auto-assigned to a specialized team."
  },
  {
    id: 65, domain: "self-service-automation", type: "single",
    question: "How are notifications triggered in ServiceNow?",
    options: ["Only through workflow activities sending email actions", "Only through manual email sends by administrators", "Only through Business Rules running on record changes", "By events, conditions on records being inserted or updated, or scheduled triggers"],
    correct: 3,
    explanation: "Notifications can be triggered by events, by conditions when records are inserted or updated, or by scheduled triggers. Multiple trigger mechanisms provide flexibility."
  },
  {
    id: 66, domain: "collaboration", type: "single",
    question: "What is the purpose of the Form Context Menu in ServiceNow?",
    options: ["To manage form templates for all tables", "To display a list of all forms available in the instance", "To provide quick access to configuration options, export, and view settings for the current form", "To create new forms from scratch"],
    correct: 2,
    explanation: "The Form Context Menu (right-click on form header) provides quick access to configuration options like Configure > Form Layout, Configure > Table, Save as Template, and Export."
  },
  {
    id: 67, domain: "collaboration", type: "single",
    question: "Which feature allows users to receive notifications based on records they are watching or following?",
    options: ["Connect Chat alerts", "Email subscriptions only", "System scheduled jobs", "Activity subscriptions and favorites"],
    correct: 3,
    explanation: "Activity subscriptions allow users to follow records and receive notifications when changes occur. Users can subscribe to specific records they want to monitor."
  },
  {
    id: 68, domain: "collaboration", type: "single",
    question: "What is the maximum number of Visual Task Board lanes allowed by default?",
    options: ["Unlimited", "20", "5", "10"],
    correct: 0,
    explanation: "By default, there is no hard limit on VTB lanes, though performance may degrade with very large numbers. The practical limit depends on screen size and usability."
  },
  {
    id: 69, domain: "collaboration", type: "single",
    question: "Which of the following accurately describes how list filters work in ServiceNow?",
    options: ["Filters modify the underlying table structure", "Filters can only be applied by administrators", "Filters temporarily restrict which records display in the list based on conditions", "Filters permanently remove records that don't match from the database"],
    correct: 2,
    explanation: "List filters temporarily restrict which records are displayed based on conditions. They do not modify or delete data; they only change the view of the list."
  },
  {
    id: 70, domain: "collaboration", type: "single",
    question: "What does the 'Group by' feature do on a ServiceNow list?",
    options: ["Creates separate tables for each group", "Merges duplicate records into groups", "Assigns records to user groups automatically", "Organizes list records into collapsible sections based on a field value"],
    correct: 3,
    explanation: "The Group by feature organizes list records into collapsible sections based on a selected field value, such as grouping incidents by priority or assignment group."
  },
  {
    id: 71, domain: "collaboration", type: "single",
    question: "What is a formatter in the context of ServiceNow forms?",
    options: ["A script that formats field values before saving", "A tool for formatting report output to PDF", "A special form element that displays non-field content like activity streams or process flows", "A plugin that formats notification email templates"],
    correct: 2,
    explanation: "A formatter is a special form element that displays non-field content on a form. Examples include the Activity formatter (showing the activity stream) and the Process Flow formatter."
  },
  {
    id: 72, domain: "collaboration", type: "single",
    question: "Which of the following is a valid way to personalize a list view in ServiceNow?",
    options: ["Change the data type of fields you want hidden", "Use the list column header gear icon to add or remove columns", "Modify the table schema to hide columns", "Edit the ACL to restrict visible fields"],
    correct: 1,
    explanation: "Users with the personalize_list role can use the gear icon on list column headers to add, remove, or reorder columns in their personal list view."
  },
  {
    id: 73, domain: "collaboration", type: "single",
    question: "In ServiceNow, what is the purpose of the 'Save as' option on a report?",
    options: ["To convert the report to a different chart type", "To create a copy of the report with a new name", "To export the report data to CSV format", "To save the report as a dashboard widget"],
    correct: 1,
    explanation: "The 'Save as' option creates a copy of the report with a new name. This allows you to duplicate a report and modify it without changing the original."
  },
  {
    id: 74, domain: "collaboration", type: "single",
    question: "What determines who receives an email notification in ServiceNow?",
    options: ["Only the user's email notification preferences", "The 'Who will receive' section including users, groups, and email addresses, combined with user subscription preferences", "Only the assignment group on the triggering record", "Only the 'Users' field on the notification record"],
    correct: 1,
    explanation: "Email notification recipients are determined by the 'Who will receive' section (which can include specific users, groups, and email addresses) combined with individual user notification preferences."
  },
  {
    id: 75, domain: "self-service-automation", type: "single",
    question: "Multiple Choice, Single Line Text, and Select Box are what type of elements in ServiceNow?",
    options: ["Order Guides", "Request Types", "Variable Types", "Related Lists"],
    correct: 2,
    explanation: "Multiple Choice, Single Line Text, and Select Box are Variable Types used in Service Catalog items and Record Producers to collect information from users."
  },
  {
    id: 76, domain: "self-service-automation", type: "single",
    question: "A Service Catalog may include which of the following components?",
    options: ["Catalog Items, Asset Contracts, Task Surveys", "Record Producers, Order Guides, and Catalog Items", "Order Guides, Catalog Items, and Interceptors", "Order Guides, Exchange Rates, Calendars"],
    correct: 1,
    explanation: "A Service Catalog includes Record Producers (create records from catalog), Order Guides (bundle multiple items), and Catalog Items (individual requestable items)."
  },
  {
    id: 77, domain: "self-service-automation", type: "single",
    question: "The display sequence of variables in a Service Catalog Item is controlled using which field?",
    options: ["The Choice field in the Variable form", "The Default Value field in the Catalog Item form", "The Order field in the Variable form", "The Sequence field in the Catalog Item form"],
    correct: 2,
    explanation: "The display sequence of variables is controlled by the Order field on the Variable form. Lower order values display first."
  },
  {
    id: 78, domain: "self-service-automation", type: "single",
    question: "What does the REQ number represent in ServiceNow Service Catalog?",
    options: ["The individual item in the order", "The stage of fulfillment", "The task to complete", "The order number"],
    correct: 3,
    explanation: "REQ (Request) number represents the overall order number. Individual items within the order get RITM (Requested Item) numbers, and fulfillment work gets SCTASK numbers."
  },
  {
    id: 79, domain: "self-service-automation", type: "single",
    question: "What is true about Service Catalog Variables?",
    options: ["Are global by default", "Can only be used in Order Guides", "Can only be used in Record Producers", "Cannot affect the order price"],
    correct: 0,
    explanation: "Service Catalog Variables are global by default, meaning they can be used across multiple catalog items. Variable Sets allow you to group and reuse variables."
  },
  {
    id: 80, domain: "self-service-automation", type: "single",
    question: "Which statement describes a Service Catalog workflow's purpose?",
    options: ["Generates item variable types, tasks, and notifications", "Generates item variable types, tasks, and approvals", "Drives complex fulfillment and sends notifications", "Cannot send notifications but drives fulfillment"],
    correct: 2,
    explanation: "A Service Catalog workflow drives complex fulfillment processes and can send notifications. It automates the request lifecycle including approvals, tasks, and communication."
  },
  {
    id: 81, domain: "self-service-automation", type: "single",
    question: "What purpose is a Record Producer used for?",
    options: ["Virtual representation of activities and visual boards", "Memory management and response time monitoring", "Creating task-based records through the service catalog", "Valuing, depreciating, and determining cost allocation"],
    correct: 2,
    explanation: "A Record Producer creates task-based records (like incidents, change requests) through the Service Catalog interface, providing a user-friendly way to submit requests."
  },
  {
    id: 82, domain: "self-service-automation", type: "single",
    question: "What is the best way to share a knowledge article with another user?",
    options: ["Take a screenshot and email it", "Use a permalink to the article", "Share the screen during a call", "Copy and paste the article content"],
    correct: 1,
    explanation: "A permalink provides a direct URL to the knowledge article that can be shared with others. This ensures the recipient sees the most current version of the article."
  },
  {
    id: 83, domain: "self-service-automation", type: "multi",
    question: "Which are the four knowledge workflows available in the ServiceNow base instance? (Choose 4)",
    options: ["Retire Knowledge", "Approval Publish", "Draft Review", "Instant Publish", "Instant Retire"],
    correct: [0,1,3,4],
    explanation: "The four base knowledge workflows are: Approval Publish (requires approval before publishing), Instant Publish (publishes immediately), Instant Retire (retires immediately), and Retire Knowledge (follows a retirement process)."
  },
  {
    id: 84, domain: "self-service-automation", type: "single",
    question: "To access knowledge articles without logging in, the article must be configured as:",
    options: ["Set to Retire", "Set to Public", "Set to Private", "Set to Review status"],
    correct: 1,
    explanation: "Knowledge articles must be set to Public to be accessible without authentication. Public articles are available to anonymous users through the Service Portal."
  },
  {
    id: 85, domain: "self-service-automation", type: "single",
    question: "What is the knowledge article publishing workflow stage progression?",
    options: ["Published > Review > Draft > Retire", "Draft > Review > Published > Retire", "Review > Draft > Published > Retire", "Draft > Published > Review > Retire"],
    correct: 1,
    explanation: "The standard knowledge article workflow progresses from Draft (initial creation) to Review (approval process) to Published (available to users) to Retire (end of life)."
  },
  {
    id: 86, domain: "self-service-automation", type: "single",
    question: "A Script Include and a reference record that can customize transitions between different SLA states describes which feature?",
    options: ["SLA Conditions and Script Include", "Task management configuration", "Application Scoping", "Knowledge Instant Publish"],
    correct: 0,
    explanation: "SLA Conditions and Script Include are used to customize transitions between different SLA states (e.g., start, pause, stop, reset). They provide fine-grained control over SLA behavior."
  },
  {
    id: 87, domain: "self-service-automation", type: "single",
    question: "Which table stores SLA definitions in ServiceNow?",
    options: ["task_sla", "SLA", "sla_definition", "contract_sla"],
    correct: 3,
    explanation: "SLA definitions are stored in the contract_sla table. The task_sla table stores individual SLA records applied to specific tasks."
  },
  {
    id: 88, domain: "self-service-automation", type: "single",
    question: "Which table stores SLA records that are applied to individual tasks like incidents?",
    options: ["SLA", "task_sla", "contract_sla", "sla_definition"],
    correct: 1,
    explanation: "The task_sla table stores SLA records that are applied to individual tasks. Each record tracks the SLA progress for a specific task (incident, change, etc.)."
  },
  {
    id: 89, domain: "self-service-automation", type: "single",
    question: "Is the SLA feature in ServiceNow applicable only for task-based tables?",
    options: ["No, SLAs can only be applied to CMDB tables", "No, SLAs can be applied to any table", "Yes, SLAs apply only to task-based tables", "No, SLAs apply only to configuration items"],
    correct: 2,
    explanation: "Yes, SLAs in ServiceNow are applicable only for task-based tables (tables that extend the Task table). This includes incidents, changes, problems, and other task types."
  },
  {
    id: 90, domain: "self-service-automation", type: "single",
    question: "In an SLA definition, which set of conditions controls SLA behavior?",
    options: ["Begin, Stop, Pause", "Start, Stop, Reset", "Start, Stop, Pause", "Start, End, Pause"],
    correct: 1,
    explanation: "SLA definitions use Start, Stop, and Reset conditions. Start defines when the SLA begins tracking, Stop defines when it completes, and Reset defines when it should restart."
  },
  {
    id: 91, domain: "self-service-automation", type: "single",
    question: "Which is used to initiate a flow in Flow Designer?",
    options: ["A Trigger", "Core Action", "An Event", "A Spoke"],
    correct: 0,
    explanation: "A Trigger initiates a flow in Flow Designer. Triggers define the conditions that start a flow, such as a record being created, updated, or a scheduled time."
  },
  {
    id: 92, domain: "self-service-automation", type: "multi",
    question: "What are the benefits of building flows using Flow Designer? (Choose 3)",
    options: ["Supports easy integration with 3rd party systems", "Provides IDE for complicated scripting", "Supports No-Code application development", "Provides natural-language descriptions of flow logic", "Automatically populates SLA records"],
    correct: [0,2,3],
    explanation: "Flow Designer supports easy 3rd-party integration (via spokes), provides natural-language descriptions of flow logic for readability, and supports no-code development for non-developers."
  },
  {
    id: 93, domain: "self-service-automation", type: "single",
    question: "What is the conversational bot platform in ServiceNow that provides user assistance?",
    options: ["Live Feed", "Connect Chat", "Answer Agent", "Virtual Agent"],
    correct: 3,
    explanation: "Virtual Agent is ServiceNow's conversational bot platform that provides automated assistance to users through chat interfaces, helping resolve common issues without human intervention."
  },
  {
    id: 94, domain: "self-service-automation", type: "single",
    question: "All workflows must have a beginning and an end. True or false?",
    options: ["False", "Only automated workflows need both", "Only approval workflows need both", "True"],
    correct: 3,
    explanation: "True. All workflows must have a beginning activity and an end activity. The workflow engine requires these to properly track the lifecycle of the workflow execution."
  },
  {
    id: 95, domain: "self-service-automation", type: "single",
    question: "When a workflow is checked out, who do the changes apply to?",
    options: ["All users in the admin group", "The user who checked it out", "No one until it is published", "All users on the instance"],
    correct: 1,
    explanation: "When a workflow is checked out, changes apply only to the user who checked it out. Other users continue to see the published version until the changes are published."
  },
  {
    id: 96, domain: "self-service-automation", type: "single",
    question: "Which of the following is NOT related to a Workflow in ServiceNow?",
    options: ["Versions", "Categories", "Activities", "Transitions"],
    correct: 1,
    explanation: "Categories are not a component of workflows. Workflows consist of Activities (actions to perform), Transitions (connections between activities), and Versions (revision history)."
  },
  {
    id: 97, domain: "self-service-automation", type: "single",
    question: "What is NOT part of the Workflow Editor User Interface?",
    options: ["Canvas", "Activity Tab", "Palette", "Title bar"],
    correct: 1,
    explanation: "Activity Tab is not a standard part of the Workflow Editor UI. The Workflow Editor includes a Canvas (where you design), Palette (available activities), and Title bar."
  },
  {
    id: 98, domain: "self-service-automation", type: "single",
    question: "What is a Spoke in Flow Designer?",
    options: ["A reusable sub-component that runs inside a flow", "A set of actions for a specific application or integration", "A visual connector between flow actions", "A trigger condition that starts a flow"],
    correct: 1,
    explanation: "A Spoke is a scoped set of actions, subflows, and other components packaged together for a specific application or integration (e.g., Slack Spoke, Microsoft Teams Spoke)."
  },
  {
    id: 99, domain: "self-service-automation", type: "single",
    question: "What is a Subflow in Flow Designer?",
    options: ["A reusable sequence of actions that can be called from other flows", "A visual representation of flow dependencies", "A trigger that initiates secondary flows", "A debugging tool for testing flow execution"],
    correct: 0,
    explanation: "A Subflow is a reusable sequence of actions that can be called from within other flows. It promotes modularity and reduces duplication in flow design."
  },
  {
    id: 100, domain: "self-service-automation", type: "single",
    question: "Which feature replaced the legacy Workflow Editor for new automation development?",
    options: ["Flow Designer", "Orchestration Engine", "Business Rule Engine", "Process Automation Designer"],
    correct: 0,
    explanation: "Flow Designer replaces the legacy Workflow Editor for new automation development. It provides a modern, no-code interface for building automated processes."
  },
  {
    id: 101, domain: "self-service-automation", type: "single",
    question: "What is an Order Guide in the Service Catalog?",
    options: ["A template for creating new catalog categories", "A user manual for placing catalog orders", "A sequential guide that bundles multiple catalog items into a single request", "A report showing catalog order history"],
    correct: 2,
    explanation: "An Order Guide bundles multiple catalog items into a single, guided request process. Users are walked through a sequence of items that can be ordered together."
  },
  {
    id: 102, domain: "self-service-automation", type: "single",
    question: "What is a Variable Set in the Service Catalog?",
    options: ["A security setting that controls variable visibility", "A configuration file that stores catalog settings", "A reusable collection of variables that can be shared across multiple catalog items", "A report that shows all variables used in the catalog"],
    correct: 2,
    explanation: "A Variable Set is a reusable collection of variables that can be shared across multiple catalog items. This avoids duplicating the same variables on different items."
  },
  {
    id: 103, domain: "self-service-automation", type: "single",
    question: "Which catalog item type is specifically designed to create records on a target table?",
    options: ["Order Guide", "Record Producer", "Standard Catalog Item", "Content Item"],
    correct: 1,
    explanation: "A Record Producer is designed to create records on a target table (e.g., Incident, Change Request) through the Service Catalog, providing a user-friendly frontend."
  },
  {
    id: 104, domain: "self-service-automation", type: "single",
    question: "What is the relationship between a Request (REQ), Requested Item (RITM), and Catalog Task (SCTASK)?",
    options: ["REQ contains RITMs, each RITM can have SCTASKs for fulfillment", "They are independent records with no relationship", "SCTASK is the parent of RITM and REQ", "RITM contains REQs, each REQ generates SCTASKs"],
    correct: 0,
    explanation: "A Request (REQ) is the overall order, containing one or more Requested Items (RITM). Each RITM can generate Catalog Tasks (SCTASK) for the actual fulfillment work."
  },
  {
    id: 105, domain: "self-service-automation", type: "single",
    question: "Which ServiceNow feature allows end users to find answers and request services without contacting IT directly?",
    options: ["System Administration Console", "Agent Workspace", "Platform UI", "Service Portal"],
    correct: 3,
    explanation: "The Service Portal provides a self-service interface where end users can search knowledge articles, submit catalog requests, and check ticket status without directly contacting IT."
  },
  {
    id: 106, domain: "self-service-automation", type: "single",
    question: "What happens when a knowledge article is flagged by a user?",
    options: ["The article is automatically updated with corrections", "A notification is sent to the knowledge base owner for review", "The article is immediately deleted from the knowledge base", "The article is hidden from all users"],
    correct: 1,
    explanation: "When a user flags a knowledge article, a notification is sent to the knowledge base owner or designated reviewer for review. The article remains visible until action is taken."
  },
  {
    id: 107, domain: "database-security", type: "single",
    question: "What is the master table that contains a record for each table in the database?",
    options: ["sys_db_object", "sys_object_db", "sys_master_db", "sys_master_object"],
    correct: 0,
    explanation: "sys_db_object is the master table containing a record for every table in the ServiceNow database. It stores metadata about each table."
  },
  {
    id: 108, domain: "database-security", type: "single",
    question: "When a user creates a custom table named 'XYZ', how does ServiceNow name it?",
    options: ["XYZ", "u_xyz", "x_xyz", "sys_xyz"],
    correct: 1,
    explanation: "Custom tables created by users are automatically prefixed with 'u_'. So a table named 'XYZ' becomes 'u_xyz'. Scoped application tables use 'x_' prefix instead."
  },
  {
    id: 109, domain: "database-security", type: "single",
    question: "User records are stored in which table?",
    options: ["User [u_sys_user]", "User [sn_user]", "User [s_user]", "User [sys_user]"],
    correct: 3,
    explanation: "User records are stored in the sys_user table. This is one of the core system tables and contains all user accounts in the ServiceNow instance."
  },
  {
    id: 110, domain: "database-security", type: "single",
    question: "What are the two most commonly used core tables in ServiceNow?",
    options: ["sys_user and sys_user_group", "incident and change_request", "cmdb and cmdb_rel_ci", "Task [task] and Configuration Item [cmdb_ci]"],
    correct: 3,
    explanation: "Task [task] and Configuration Item [cmdb_ci] are the two most commonly used core tables. Task is the base for all task-based tables, and cmdb_ci stores configuration items."
  },
  {
    id: 111, domain: "database-security", type: "single",
    question: "Which table types can be extended by other tables but do not extend another table themselves?",
    options: ["Extended Tables", "Core Tables", "Custom Tables", "Base Tables"],
    correct: 3,
    explanation: "Base Tables can be extended by other tables but do not extend any table themselves. They are at the top of the table hierarchy (e.g., the Task table is a base table)."
  },
  {
    id: 112, domain: "database-security", type: "single",
    question: "What technique is used to get information from referenced fields across tables?",
    options: ["Dot-Walking", "Record-Hopping", "Table-Walking", "Sys_ID Pulling"],
    correct: 0,
    explanation: "Dot-Walking allows you to access fields on related records through reference fields. For example, incident.caller_id.department references the department of the incident caller."
  },
  {
    id: 113, domain: "database-security", type: "single",
    question: "Access Control rules for the entire Incident table (all rows and fields) use which object name?",
    options: ["incident.!", "incident.*", "incident.all", "incident.None"],
    correct: 1,
    explanation: "The object name 'incident.*' applies to all fields on the Incident table. The asterisk wildcard means the rule covers every field in the table."
  },
  {
    id: 114, domain: "database-security", type: "single",
    question: "What is the most common role that has access to almost all platform features, functions, and data?",
    options: ["Base Admin [base_admin]", "Security Admin [security_admin]", "Sys Admin [sys_admin]", "System Administrator [admin]"],
    correct: 3,
    explanation: "The admin role (System Administrator) is the most common role with access to almost all platform features. It provides broad system-wide privileges."
  },
  {
    id: 115, domain: "database-security", type: "single",
    question: "Which role is required to create or modify Access Control Lists (ACLs)?",
    options: ["Security_admin", "Admin", "Sys_admin", "Acl_admin"],
    correct: 0,
    explanation: "The security_admin role is required to create or modify ACLs. Even users with the admin role need to elevate to security_admin to manage access controls."
  },
  {
    id: 116, domain: "database-security", type: "single",
    question: "What is the ACL (table access control) rule evaluation order?",
    options: ["Any table name (wildcard), parent table name, table name", "Table name, parent table name, any table name (wildcard)", "Parent table name, table name, any table name (wildcard)", "Any table name (wildcard), table name, parent table name"],
    correct: 1,
    explanation: "ACL rules are evaluated from most specific to most generic: table name first, then parent table name, then wildcard (*). The first matching rule is applied."
  },
  {
    id: 117, domain: "database-security", type: "single",
    question: "When evaluating Access Controls, ServiceNow searches and evaluates in which order?",
    options: ["Only for matches on the current field", "From most generic to most specific match", "Only for matches on the current table", "From most specific to most generic match"],
    correct: 3,
    explanation: "ServiceNow evaluates ACLs from most specific to most generic. It first checks for rules on the specific table, then parent tables, then wildcard rules."
  },
  {
    id: 118, domain: "database-security", type: "single",
    question: "At which three levels can ACLs be applied?",
    options: ["Table, row, and column", "User, group, and role", "Application, module, and widget", "Database, schema, and record"],
    correct: 0,
    explanation: "ACLs can be applied at three levels: Table (controls access to the entire table), Row (controls access to specific records), and Column (controls access to specific fields)."
  },
  {
    id: 119, domain: "database-security", type: "single",
    question: "What are the three permission types used in ACL rules?",
    options: ["Users, groups, and departments", "Allow, deny, and inherit", "Roles, conditional expressions, and scripts", "Read, write, and delete"],
    correct: 2,
    explanation: "ACL rules use three permission types: Roles (role-based access), Conditional expressions (field-value conditions), and Scripts (custom logic for complex decisions)."
  },
  {
    id: 120, domain: "database-security", type: "multi",
    question: "How do Data Classifications support administrators and auditors? (Choose 2)",
    options: ["Help with privacy laws, security, and compliance", "Track the creation, update, and deletion of all records", "Visualize the current sensitivity of data within the instance", "Protect sensitive information by scrambling data"],
    correct: [0,2],
    explanation: "Data Classifications help with privacy laws/security/compliance and visualize data sensitivity. They help organizations understand where sensitive data exists in their instance."
  },
  {
    id: 121, domain: "database-security", type: "single",
    question: "What encryption feature is included in ServiceNow by default?",
    options: ["Field-level encryption", "Data in use encryption", "Data in transit encryption", "Data at rest encryption"],
    correct: 2,
    explanation: "Data in transit encryption (SSL/TLS) is included by default in ServiceNow. Data at rest and data in use encryption are optional features that require additional configuration."
  },
  {
    id: 122, domain: "database-security", type: "multi",
    question: "Which components are ServiceNow's responsibility according to the Shared Responsibility Model? (Choose 2)",
    options: ["Media disposal and destruction", "Infrastructure management", "Authentication and authorization configuration", "Backup and restore of customer data"],
    correct: [0,1],
    explanation: "Under the Shared Responsibility Model, ServiceNow is responsible for infrastructure management and media disposal/destruction. Customers are responsible for authentication/authorization config and backup/restore."
  },
  {
    id: 123, domain: "database-security", type: "single",
    question: "Which Security Center feature helps resolve platform-related security issues and misconfigurations?",
    options: ["Security hardening", "Customer actions", "Security scanner", "Best practices"],
    correct: 0,
    explanation: "Security hardening helps resolve platform-related security issues and misconfigurations by providing recommendations and automated fixes for security vulnerabilities."
  },
  {
    id: 124, domain: "database-security", type: "single",
    question: "An Administrator wants to review all users having privileged access to identify those no longer needing it. Which Security Center feature helps?",
    options: ["Security hardening", "Customer actions", "Security scanner", "Security posture console"],
    correct: 1,
    explanation: "Customer actions in Security Center helps administrators review privileged access, identify users who no longer need elevated permissions, and take appropriate action."
  },
  {
    id: 125, domain: "database-security", type: "multi",
    question: "What are the three key tables in an enterprise CMDB? (Choose 3)",
    options: ["cmdb", "cmdb_rel_ci", "cmdb_bak", "sn_cmdb_bak", "sn_cmdb", "cmdb_ci"],
    correct: [0,1,5],
    explanation: "The three key CMDB tables are: cmdb (base CMDB table), cmdb_ci (Configuration Items table), and cmdb_rel_ci (CI Relationships table)."
  },
  {
    id: 126, domain: "database-security", type: "single",
    question: "What is the purpose of the import set table in ServiceNow?",
    options: ["It acts as a staging area for records imported", "A new application module in ServiceNow", "Used to import user data only", "None of the above"],
    correct: 0,
    explanation: "The import set table acts as a staging area for records imported from external sources. Data is loaded here first, then transformed and mapped to the target table."
  },
  {
    id: 127, domain: "database-security", type: "single",
    question: "What is the correct process for loading data through an import set and transform map?",
    options: ["Load data > Run transform > Create transform map", "Load data > Create transform map > Run transform", "Create transform map > Load data > Run transform", "Run transform > Load data > Create transform map"],
    correct: 1,
    explanation: "The correct import process is: Load Data (into the staging table) > Create Transform Map (map source to target fields) > Run Transform (move data to target table)."
  },
  {
    id: 128, domain: "database-security", type: "single",
    question: "You can coalesce on a single field to update an existing record. If a target table record has the same value in the coalesce field as the staging record, the target is updated. Which concept does this describe?",
    options: ["Show Activity Stream", "Workflow orchestration", "Application Scoping", "Single-field coalesce"],
    correct: 3,
    explanation: "Single-field coalesce uses one field to match import records against existing records. If a match is found, the existing record is updated; if no match, a new record is created."
  },
  {
    id: 129, domain: "database-security", type: "single",
    question: "Which statement applies to a set of fields when they are coalesced during an import?",
    options: ["If a match is found, the system creates a new record", "If a match is not found, the system does not create a Transform Map", "If a match is not found, the existing record is updated", "If a match is found using the coalesce fields, the existing record is updated"],
    correct: 3,
    explanation: "When coalesce fields find a match, the existing record is updated with the import data. If no match is found, a new record is inserted."
  },
  {
    id: 130, domain: "database-security", type: "single",
    question: "What is the definition of a transform map in ServiceNow?",
    options: ["A map used to trigger Business Rules before data is queued", "A map to determine relationships between fields in an Import Set and fields in an existing table", "A map used to store the history of incident records", "A map used to add data to encrypted fields"],
    correct: 1,
    explanation: "A transform map defines the mapping between fields in an import set table and fields in a target table. It determines how imported data maps to the destination."
  },
  {
    id: 131, domain: "database-security", type: "multi",
    question: "What are possible import sources in ServiceNow? (Choose 5)",
    options: ["NETWORK", "HTTP", "CSV", "SFTP", "JDBC", "EXCEL"],
    correct: [1,2,3,4,5],
    explanation: "Valid import sources include HTTP, CSV, SFTP, EXCEL, and JDBC. NETWORK is not a valid import source type in ServiceNow."
  },
  {
    id: 132, domain: "database-security", type: "single",
    question: "How are users and groups related in ServiceNow?",
    options: ["All to All", "One to Many", "Many to Many", "One to One"],
    correct: 2,
    explanation: "Users and groups have a Many-to-Many relationship. A user can belong to multiple groups, and a group can contain multiple users."
  },
  {
    id: 133, domain: "database-security", type: "single",
    question: "How are users related to roles and groups?",
    options: ["One to One", "One to Many", "Many to Many", "Many to One"],
    correct: 1,
    explanation: "Users have a One-to-Many relationship with roles and groups. One user can have many roles and belong to many groups."
  },
  {
    id: 134, domain: "database-security", type: "single",
    question: "Which table stores roles in ServiceNow?",
    options: ["user_role", "imp_user", "sys_user_role", "sys_role"],
    correct: 2,
    explanation: "Roles are stored in the sys_user_role table. This table contains the definitions of all roles available in the ServiceNow instance."
  },
  {
    id: 135, domain: "database-security", type: "single",
    question: "Can roles contain other roles in ServiceNow?",
    options: ["No, roles can only be assigned to users directly", "Yes, any access granted to one role is automatically granted to roles that contain it", "Yes, but only admin can contain other roles", "No, roles are flat and independent"],
    correct: 1,
    explanation: "Yes, roles can contain other roles. When a role contains another role, any access granted to the contained role is automatically inherited by users who have the containing role."
  },
  {
    id: 136, domain: "database-security", type: "single",
    question: "What is a schema map in ServiceNow?",
    options: ["A configuration panel for database backups", "JavaScript configured to run when records change", "The gear icon allowing column additions to lists", "A graphical representation showing referenced, referencing, extended, and extending tables"],
    correct: 3,
    explanation: "A schema map is a graphical representation that shows table relationships including referenced tables, referencing tables, extended tables, and extending tables."
  },
  {
    id: 137, domain: "database-security", type: "single",
    question: "What can be used to join two tables in ServiceNow?",
    options: ["Link Tables", "Database Views", "Table Merge utility", "Views module"],
    correct: 1,
    explanation: "Database Views can be used to join two tables in ServiceNow. They create a virtual table that combines data from multiple source tables."
  },
  {
    id: 138, domain: "database-security", type: "single",
    question: "How are referenced fields visually identified in ServiceNow?",
    options: ["From the Reference Lookup Icon", "From Base Class indicators", "By bold text formatting", "By a blue background color"],
    correct: 0,
    explanation: "Referenced fields are identified by the Reference Lookup Icon (a small magnifying glass or reference icon) that appears next to the field, indicating it references another table."
  },
  {
    id: 139, domain: "database-security", type: "multi",
    question: "Which items are associated with the CMDB? (Choose 3)",
    options: ["Service Processes", "Table and fields only", "Dependency views", "User Permissions exclusively", "Database"],
    correct: [0,2,4],
    explanation: "The CMDB is associated with a Database (storing CI data), Dependency views (showing CI relationships), and Service Processes (mapping services to infrastructure)."
  },
  {
    id: 140, domain: "database-security", type: "single",
    question: "User passwords are imported to ServiceNow through an LDAP connection. True or false?",
    options: ["False, LDAP only imports group memberships", "True, but only encrypted passwords are imported", "True, passwords are synced for single sign-on", "False, LDAP imports user data but NOT passwords"],
    correct: 3,
    explanation: "False. LDAP in ServiceNow does NOT import passwords. Authentication against LDAP is done through LDAP bind operations, where ServiceNow sends credentials to the LDAP server for verification."
  },
  {
    id: 141, domain: "database-security", type: "multi",
    question: "Which are valid ServiceNow User Authentication Methods? (Choose 3)",
    options: ["XML feed", "Local database", "LDAP", "SSO", "FTP authentication"],
    correct: [1,2,3],
    explanation: "Valid ServiceNow authentication methods include Local database (built-in), LDAP (directory service), and SSO (Single Sign-On). Other methods include SAML 2.0, OAuth 2.0, and Digest Token."
  },
  {
    id: 142, domain: "database-security", type: "single",
    question: "After the high security plugin is activated, what is an elevated privilege?",
    options: ["A promotion for extension tables", "Users with the Admin role by default", "A role with special permissions during a login session", "Enabling ITIL role admin access"],
    correct: 2,
    explanation: "An elevated privilege is a role with special permissions that can be activated during a login session. After the high security plugin, certain sensitive roles must be explicitly elevated."
  },
  {
    id: 143, domain: "database-security", type: "single",
    question: "What is a role in ServiceNow?",
    options: ["A set of members sharing a subscription", "A collection of permissions granted to users", "Users who share the same purpose", "A collection of tasks assigned to a user"],
    correct: 1,
    explanation: "A role is a collection of permissions that can be granted to users. Roles determine what a user can see and do within the ServiceNow platform."
  },
  {
    id: 144, domain: "self-service-automation", type: "single",
    question: "As it relates to ServiceNow reporting, which statement describes what a metric can do?",
    options: ["A metric is a comparative measurement for flow and SLA effectiveness", "A metric is a report gauge on homepages displaying real-time data", "A metric is a time measurement for reporting workflow and SLA effectiveness", "A metric is used to measure and evaluate the effectiveness of IT service management processes"],
    correct: 3,
    explanation: "A metric measures and evaluates the effectiveness of IT service management processes. Metrics collect data about process performance for analysis and reporting."
  },
  {
    id: 145, domain: "self-service-automation", type: "single",
    question: "Which provides the ability to automate integration tasks with custom integration in ServiceNow?",
    options: ["IntegrationHub", "States configuration", "Updates module", "Notification engine"],
    correct: 0,
    explanation: "IntegrationHub provides the ability to automate integration tasks and build custom integrations. It includes spokes for connecting to external systems and services."
  },
  {
    id: 146, domain: "database-security", type: "single",
    question: "What is the CI Relationship Editor used for?",
    options: ["To import configuration items from external sources", "To create new CI classes and categories", "To edit the properties of individual configuration items", "To define and manage relationships between configuration items in the CMDB"],
    correct: 3,
    explanation: "The CI Relationship Editor is used to define and manage relationships between configuration items (CIs) in the CMDB, showing how different CIs depend on or relate to each other."
  },
  {
    id: 147, domain: "database-security", type: "single",
    question: "What is the CSDM (Common Service Data Model) in ServiceNow?",
    options: ["A scripting framework for service automation", "A standardized data model that defines how to structure service-related data in the CMDB", "A security configuration for protecting service data", "A reporting tool for service performance metrics"],
    correct: 1,
    explanation: "CSDM (Common Service Data Model) is a standardized data model that defines best practices for structuring service-related data in the CMDB, ensuring consistency across implementations."
  },
  {
    id: 148, domain: "database-security", type: "single",
    question: "What type of table relationship is created when a reference field on one table points to another table?",
    options: ["One-to-one relationship", "One-to-many relationship", "Many-to-many relationship", "Self-referencing relationship"],
    correct: 1,
    explanation: "A reference field creates a one-to-many relationship. One record in the referenced table can be referenced by many records in the table containing the reference field."
  },
  {
    id: 149, domain: "database-security", type: "single",
    question: "How is a many-to-many relationship implemented in ServiceNow?",
    options: ["Using a reference qualifier", "Using dot-walking between the two tables", "Using a many-to-many (M2M) table that stores pairs of sys_ids", "Using reference fields on both tables"],
    correct: 2,
    explanation: "Many-to-many relationships are implemented using a dedicated M2M table that stores pairs of sys_ids from both related tables, linking records together."
  },
  {
    id: 150, domain: "database-security", type: "single",
    question: "What is a sys_id in ServiceNow?",
    options: ["A human-readable record number like INC0001234", "A 32-character GUID that uniquely identifies every record", "The primary key defined by the administrator", "A session identifier for logged-in users"],
    correct: 1,
    explanation: "A sys_id is a 32-character globally unique identifier (GUID) automatically assigned to every record in ServiceNow. It serves as the primary key for all records."
  },
  {
    id: 151, domain: "database-security", type: "single",
    question: "Which type of table inherits fields and business logic from a parent table?",
    options: ["Core table", "Custom table", "Base table", "Extended table"],
    correct: 3,
    explanation: "An extended table inherits all fields, business logic, and configurations from its parent table. For example, the Incident table extends the Task table."
  },
  {
    id: 152, domain: "database-security", type: "single",
    question: "What is the purpose of a Reference Qualifier in ServiceNow?",
    options: ["To create a new reference relationship between tables", "To validate data format in a reference field", "To define the display value of a reference field", "To restrict the records available for selection in a reference field"],
    correct: 3,
    explanation: "A Reference Qualifier restricts the records available for selection in a reference field. For example, limiting an assignment field to show only active users."
  },
  {
    id: 153, domain: "database-security", type: "single",
    question: "What happens when you delete a record that is referenced by other records?",
    options: ["The reference fields on other records are set to empty/null", "The deletion is blocked by default", "All referencing records are automatically deleted", "An error occurs and the database rolls back"],
    correct: 0,
    explanation: "When a referenced record is deleted, the reference fields on other records that pointed to it are typically set to empty (null). The referencing records themselves are not deleted."
  },
  {
    id: 154, domain: "database-security", type: "single",
    question: "What is the purpose of the Dictionary in ServiceNow?",
    options: ["To provide a glossary of ServiceNow terminology", "To store and manage all field definitions including type, length, and default values", "To translate the platform into different languages", "To define custom scripting functions"],
    correct: 1,
    explanation: "The Dictionary (sys_dictionary) stores all field definitions for every table, including field type, length, default values, and other metadata about each field."
  },
  {
    id: 155, domain: "database-security", type: "single",
    question: "Which of the following is a valid field type in ServiceNow?",
    options: ["Reference", "XML Document", "Binary Large Object (BLOB)", "All of the above"],
    correct: 3,
    explanation: "All of the above are valid ServiceNow field types. Reference fields link to other tables, BLOB stores binary data, and XML Document stores XML-formatted data."
  },
  {
    id: 156, domain: "database-security", type: "single",
    question: "What is a Data Policy in ServiceNow?",
    options: ["A server-side enforcement of data requirements regardless of the interface used", "A security policy that controls who can view data", "A backup policy for data retention", "A client-side rule that controls form field visibility"],
    correct: 0,
    explanation: "A Data Policy enforces data requirements server-side, regardless of which interface is used (form, web service, import set). Unlike UI Policies, they work across all access methods."
  },
  {
    id: 157, domain: "database-security", type: "single",
    question: "What is the difference between a Data Policy and a UI Policy?",
    options: ["Data Policies enforce rules regardless of interface; UI Policies only affect the form", "Data Policies are client-side; UI Policies are server-side", "Data Policies only affect imports; UI Policies affect all interfaces", "There is no difference; they are interchangeable"],
    correct: 0,
    explanation: "Data Policies enforce data requirements regardless of the interface (form, API, import). UI Policies only affect the form interface and run client-side."
  },
  {
    id: 158, domain: "database-security", type: "single",
    question: "Which field type allows users to select from a predefined list of values?",
    options: ["Reference", "Integer", "Choice", "String"],
    correct: 2,
    explanation: "A Choice field allows users to select from a predefined list of values. Choices can be defined in the Choice List (sys_choice table) for the specific table and field."
  },
  {
    id: 159, domain: "database-security", type: "single",
    question: "What module allows administrators to view and manage the structure of tables and their relationships?",
    options: ["System Explorer", "Table Builder", "Data Dictionary", "Schema Map"],
    correct: 3,
    explanation: "Schema Map provides a visual, graphical view of table structures and their relationships (references, extensions). It helps administrators understand the data model."
  },
  {
    id: 160, domain: "database-security", type: "single",
    question: "What is the purpose of Mapping Assist in the import process?",
    options: ["To validate imported data against business rules", "To compress large data sets during import", "To help map fields from the import set table to the target table", "To automatically detect the file format of imported data"],
    correct: 2,
    explanation: "Mapping Assist helps administrators map fields from the import set table to the target table during transform map creation. It suggests field-level mappings based on field names."
  },
  {
    id: 161, domain: "database-security", type: "single",
    question: "What is the purpose of the Audit log in ServiceNow?",
    options: ["To log all API calls to the instance", "To track user login and logout times only", "To monitor system performance metrics", "To record all changes made to audited fields, showing who changed what and when"],
    correct: 3,
    explanation: "The Audit log records all changes made to audited fields, including who made the change, what the old and new values were, and when the change occurred."
  },
  {
    id: 162, domain: "database-security", type: "single",
    question: "Which approach is used to identify whether an imported record should be inserted as new or update an existing record?",
    options: ["Data reconciliation", "Coalescing", "Field validation", "Transform mapping"],
    correct: 1,
    explanation: "Coalescing is used during imports to determine whether a record should be inserted (new) or updated (existing). Coalesce fields are matched against the target table to find existing records."
  },
  {
    id: 163, domain: "database-security", type: "single",
    question: "What is the primary purpose of the CMDB in ServiceNow?",
    options: ["To manage project timelines and milestones", "To store user credentials and authentication data", "To maintain a log of all system changes", "To store configuration items and their relationships for IT service management"],
    correct: 3,
    explanation: "The CMDB (Configuration Management Database) stores configuration items (CIs) and their relationships, providing a comprehensive view of the IT infrastructure for service management."
  },
  {
    id: 164, domain: "database-security", type: "single",
    question: "What type of access does an ACL with no conditions, no roles, and no scripts grant?",
    options: ["Full access to all users", "Access to authenticated users only", "No access to anyone", "Access only to the admin role"],
    correct: 2,
    explanation: "An ACL with no conditions, no roles, and no scripts denies access to everyone. At least one requirement (role, condition, or script returning true) must be met for access."
  },
  {
    id: 165, domain: "database-security", type: "single",
    question: "Which of the following best describes the concept of table extension in ServiceNow?",
    options: ["Creating a view that combines two tables", "Linking two tables using a reference field", "Adding new fields to an existing table without creating a child table", "Creating a child table that inherits fields and logic from a parent table"],
    correct: 3,
    explanation: "Table extension creates a child table that inherits all fields, ACLs, and business logic from the parent table. For example, Incident extends Task, inheriting all Task fields."
  },
  {
    id: 166, domain: "database-security", type: "single",
    question: "What is the significance of the 'x_' prefix on a table name?",
    options: ["It indicates a temporary import table", "It indicates a deprecated table", "It indicates an extended system table", "It indicates a table created within a scoped application"],
    correct: 3,
    explanation: "The 'x_' prefix indicates a table created within a scoped application. The full prefix includes the vendor prefix and app name (e.g., x_vendor_app_tablename)."
  },
  {
    id: 167, domain: "migration-scripting", type: "single",
    question: "What is the language used for scripting in ServiceNow?",
    options: ["JavaScript", "AngularJS", "Java", "Jelly"],
    correct: 0,
    explanation: "JavaScript is the scripting language used in ServiceNow for both client-side and server-side scripting. Server-side uses Mozilla Rhino as the JavaScript engine."
  },
  {
    id: 168, domain: "migration-scripting", type: "multi",
    question: "Which objects are used as part of the client-side scripting API? (Choose 2)",
    options: ["g_user", "current and previous", "workflow.scratchpad", "gs", "g_form"],
    correct: [0,4],
    explanation: "g_form and g_user are client-side scripting API objects. g_form manipulates forms, g_user accesses user info. current, previous, gs, and workflow.scratchpad are server-side objects."
  },
  {
    id: 169, domain: "migration-scripting", type: "single",
    question: "What are the steps to retrieve and apply an Update Set from another instance?",
    options: ["Verify Complete, Retrieve, Preview, Apply", "Verify Complete, Retrieve, Preview, Commit", "Verify Complete, Test Connection, Commit", "Verify Complete, Test Connection, Apply"],
    correct: 1,
    explanation: "The correct Update Set migration process is: Verify the Update Set is Complete > Retrieve it from the source > Preview to check for conflicts > Commit to apply."
  },
  {
    id: 170, domain: "migration-scripting", type: "single",
    question: "What is responsible for capturing and moving configuration changes between ServiceNow instances?",
    options: ["Update set", "Import set", "None of the above", "Change request"],
    correct: 0,
    explanation: "Update sets capture and move configuration changes between instances. They record customization changes (not data records) made in one instance for deployment to another."
  },
  {
    id: 171, domain: "migration-scripting", type: "single",
    question: "What data records are captured in an update set?",
    options: ["Only incident and change records", "All data records including user records and incidents", "Data records are NOT captured; only configuration/customization changes are captured", "Only records from custom tables"],
    correct: 2,
    explanation: "Update sets do NOT capture data records. They only capture configuration and customization changes such as business rules, UI policies, form layouts, and other system configurations."
  },
  {
    id: 172, domain: "migration-scripting", type: "single",
    question: "If several update sets have modified the same object, which change will be in the merged update set?",
    options: ["All changes are kept as separate versions", "The first change made", "The change from the highest-priority update set", "The most recent change"],
    correct: 3,
    explanation: "When merging update sets that have modified the same object, the most recent change wins. The latest modification overrides earlier ones."
  },
  {
    id: 173, domain: "migration-scripting", type: "single",
    question: "Which is an Update Set best practice?",
    options: ["Before moving customizations, ensure both instances are on different versions", "Use the Baseline Update Set to store changed items", "Avoid using the Default Update Set for moving customizations", "Reopen completed Update Sets until applied to another instance"],
    correct: 2,
    explanation: "Best practice is to avoid using the Default Update Set for customizations you plan to move. Create named update sets to organize and track changes for specific purposes."
  },
  {
    id: 174, domain: "migration-scripting", type: "single",
    question: "Customer updates and payload in update sets are stored in which table?",
    options: ["sys_update_set", "sys_update_xml", "sys_customer_update", "update_set"],
    correct: 1,
    explanation: "The individual update payloads (customization changes) are stored in the sys_update_xml table. Each record represents one configuration change captured in an update set."
  },
  {
    id: 175, domain: "migration-scripting", type: "single",
    question: "UI Policies can make fields read-only, mandatory, or hidden. True or false?",
    options: ["False, UI Policies can only hide fields", "False, that is the function of Data Policies only", "False, UI Policies can only make fields mandatory", "True"],
    correct: 3,
    explanation: "True. UI Policies run client-side and can dynamically change form behavior by making fields read-only, mandatory, or hidden based on conditions."
  },
  {
    id: 176, domain: "migration-scripting", type: "single",
    question: "Business Rules are used to enforce mandatory data on a form. True or false?",
    options: ["True, Business Rules run before the form loads", "True, Business Rules handle form field enforcement", "False, only Client Scripts can enforce mandatory fields", "False, UI Policies handle making fields mandatory on forms"],
    correct: 3,
    explanation: "False. Business Rules run server-side and are primarily for automation, not form field enforcement. UI Policies handle making fields mandatory, read-only, or hidden on forms."
  },
  {
    id: 177, domain: "migration-scripting", type: "single",
    question: "Which statement correctly describes the difference between a Client Script and a Business Rule?",
    options: ["Client Script executes on the client browser; Business Rule executes on the server", "Client Script runs before record load; Business Rule runs after load", "Client Script runs before load; Business Rule runs after update", "Client Script executes on server; Business Rule executes on client"],
    correct: 0,
    explanation: "Client Scripts execute in the user's browser (client-side) while Business Rules execute on the ServiceNow server (server-side). This is the fundamental distinction."
  },
  {
    id: 178, domain: "migration-scripting", type: "single",
    question: "An Administrator wants to display a reminder message to any user submitting an incident. Which feature does this?",
    options: ["Data Policy", "Business Rule", "Client Script", "Policy"],
    correct: 2,
    explanation: "A Client Script (specifically an onSubmit type) runs in the browser when a user submits a form. It can display messages, validate fields, and confirm actions before submission."
  },
  {
    id: 179, domain: "migration-scripting", type: "single",
    question: "Which GlideForm method prints a message on a blue background at the top of the current form?",
    options: ["g_form.addInfoMsg()", "g_form.showFieldMsg()", "g_form.showFieldMessage()", "g_form.addInfoMessage()"],
    correct: 3,
    explanation: "g_form.addInfoMessage() displays a blue informational message banner at the top of the form. g_form.showFieldMsg() displays a message next to a specific field."
  },
  {
    id: 180, domain: "migration-scripting", type: "single",
    question: "What is the GlideForm client-side scripting object?",
    options: ["g_form", "gs.form", "sn.form", "sn_form"],
    correct: 0,
    explanation: "g_form is the GlideForm client-side scripting object. It provides methods for manipulating form fields, values, and behavior in client scripts and UI policies."
  },
  {
    id: 181, domain: "migration-scripting", type: "single",
    question: "Which objects can you use in a Scheduled Script Execution script?",
    options: ["GlideRecord and current", "GlideSystem and GlideRecord", "GlideSystem and current", "GlideUser and GlideRecord"],
    correct: 1,
    explanation: "Scheduled Script Execution can use GlideSystem (gs) and GlideRecord. The 'current' object is not available in scheduled scripts as there is no triggering record."
  },
  {
    id: 182, domain: "migration-scripting", type: "multi",
    question: "In a privately-scoped application, which methods are used for logging messages in server-side scripts? (Choose 2)",
    options: ["gs.logError()", "gs.error()", "gs.debug()", "gs.log()", "gs.message()"],
    correct: [0,1],
    explanation: "In scoped applications, gs.logError() and gs.error() are available for logging. gs.log() and gs.debug() are only available in the global scope."
  },
  {
    id: 183, domain: "migration-scripting", type: "single",
    question: "The Business Rule script template shown as (function executeRule(current, previous) {...})(); represents which type of JavaScript function?",
    options: ["Anonymous function", "Self-invoking function", "Constructor function", "Scoped function"],
    correct: 1,
    explanation: "This pattern is a self-invoking (immediately invoked) function expression (IIFE). It defines and immediately executes the function, preventing variable leakage to the global scope."
  },
  {
    id: 184, domain: "migration-scripting", type: "single",
    question: "What is a ServiceNow event?",
    options: ["Business rules, client scripts, fields, and forms collectively", "An indication that something notable has occurred, such as approving a request", "Semaphores that control user transactions", "A process for creating new tables and filling out extend table fields"],
    correct: 1,
    explanation: "A ServiceNow event is an indication to platform processes that something notable has occurred (e.g., a request was approved, an incident was created). Events can trigger notifications and scripts."
  },
  {
    id: 185, domain: "migration-scripting", type: "multi",
    question: "What can trigger an event in ServiceNow? (Choose 2)",
    options: ["UI Pages", "Workflows", "Client Scripts", "Business Rules"],
    correct: [1,3],
    explanation: "Events can be triggered by Business Rules (server-side) and Workflows. Client Scripts and UI Pages run on the client side and cannot directly trigger server-side events."
  },
  {
    id: 186, domain: "migration-scripting", type: "single",
    question: "UI Policies run on which side?",
    options: ["Both client and server side equally", "Database side", "Server side only", "Client side"],
    correct: 3,
    explanation: "UI Policies run on the client side (in the browser). They dynamically change form field behavior without requiring scripting."
  },
  {
    id: 187, domain: "migration-scripting", type: "single",
    question: "The onCellEdit() client script executes when?",
    options: ["A particular field is modified on a list", "A record is deleted from a list", "Any field on any form is modified", "A particular field is modified on a form"],
    correct: 0,
    explanation: "The onCellEdit() client script type executes when a particular field is modified directly on a list view (using the List Editor). It does not apply to form edits."
  },
  {
    id: 188, domain: "migration-scripting", type: "single",
    question: "When can you NOT use Scheduled Jobs?",
    options: ["To check conditions daily", "To send email on user request", "For client-side form validation", "To update old records on a schedule"],
    correct: 2,
    explanation: "Scheduled Jobs cannot perform client-side form validation. They run on the server on a schedule and have no access to the client browser or form interface."
  },
  {
    id: 189, domain: "migration-scripting", type: "single",
    question: "What are the four types of Client Scripts in ServiceNow?",
    options: ["onCreate, onModify, onSave, onClose", "onInsert, onUpdate, onDelete, onQuery", "onBefore, onAfter, onDisplay, onAsync", "onLoad, onChange, onSubmit, onCellEdit"],
    correct: 3,
    explanation: "The four Client Script types are: onLoad (when form loads), onChange (when a field changes), onSubmit (when form is submitted), and onCellEdit (when a list cell is edited)."
  },
  {
    id: 190, domain: "migration-scripting", type: "single",
    question: "When do Business Rules execute in relation to database operations?",
    options: ["Only after database operations", "Only during form submission events", "Only before database operations", "Before or after insert, update, delete, or query operations"],
    correct: 3,
    explanation: "Business Rules can execute before or after database operations including insert, update, delete, and query. The timing (before/after) and operation type are configured on the rule."
  },
  {
    id: 191, domain: "migration-scripting", type: "single",
    question: "Which server-side object provides access to the record that triggered a Business Rule?",
    options: ["gs", "workflow.scratchpad", "previous", "current"],
    correct: 3,
    explanation: "The 'current' object provides access to the record that triggered the Business Rule. It contains the current field values of the record being processed."
  },
  {
    id: 192, domain: "migration-scripting", type: "single",
    question: "What does the 'previous' object represent in a Business Rule?",
    options: ["The previous Business Rule that executed", "The record that was processed before the current one", "The parent record of the current record", "The prior version of the current record before the update"],
    correct: 3,
    explanation: "The 'previous' object contains the field values of the current record before the update was made. It is useful for comparing old and new values in before/after Business Rules."
  },
  {
    id: 193, domain: "migration-scripting", type: "single",
    question: "Which GlideSystem method is used to add informational messages in server-side scripts?",
    options: ["gs.print()", "gs.message()", "gs.addInfoMessage()", "gs.log()"],
    correct: 2,
    explanation: "gs.addInfoMessage() displays an informational message to the user from server-side code. gs.log() writes to the system log but does not display a message to the user."
  },
  {
    id: 194, domain: "database-security", type: "single",
    question: "What is the default behavior when no ACL rule matches a user's access request?",
    options: ["The system prompts the user for elevated credentials", "Access is granted to all authenticated users", "Access is granted only to the admin role", "Access is denied"],
    correct: 3,
    explanation: "When no ACL rule matches, access is denied by default. ServiceNow follows a deny-by-default security model where explicit permission must be granted through ACL rules."
  },
  {
    id: 195, domain: "database-security", type: "single",
    question: "What is the difference between an Import Set and an Update Set?",
    options: ["Import Sets work with CSV only; Update Sets work with XML only", "Import Sets move configurations; Update Sets move data", "Import Sets bring external data into ServiceNow; Update Sets move configuration changes between instances", "They are the same thing with different names"],
    correct: 2,
    explanation: "Import Sets bring external data INTO ServiceNow from sources like CSV and Excel. Update Sets move configuration/customization changes BETWEEN ServiceNow instances."
  },
  {
    id: 196, domain: "collaboration", type: "single",
    question: "What is the primary purpose of the Form Designer in ServiceNow?",
    options: ["To write custom HTML for form rendering", "To configure form layout by adding, removing, and arranging fields and sections", "To design email notification templates", "To create new database tables from a visual interface"],
    correct: 1,
    explanation: "Form Designer provides a drag-and-drop interface for configuring form layout. Administrators can add, remove, and rearrange fields, sections, and formatters."
  },
  {
    id: 197, domain: "self-service-automation", type: "single",
    question: "Which ServiceNow feature allows administrators to define automated processes without writing code?",
    options: ["Script Include Editor", "Business Rule scripting console", "Background Script executor", "Flow Designer"],
    correct: 3,
    explanation: "Flow Designer provides a no-code/low-code interface for building automated processes. Administrators can create flows using triggers and actions without writing scripts."
  },
  {
    id: 198, domain: "database-security", type: "single",
    question: "What field type is used to store a link to a record in another table?",
    options: ["Choice", "Reference", "String", "URL"],
    correct: 1,
    explanation: "A Reference field stores a link (sys_id) to a record in another table. It creates a relationship between tables and enables dot-walking to access related record data."
  },
  {
    id: 199, domain: "database-security", type: "single",
    question: "Which of the following is true about the Task table in ServiceNow?",
    options: ["It can only store incident records", "It is a base table extended by Incident, Change, Problem, and other task types", "It is a custom table that must be created manually", "It stores only completed tasks for archival"],
    correct: 1,
    explanation: "The Task table is a base table that is extended by many task-type tables including Incident, Change Request, Problem, and others. All task tables inherit Task's fields and logic."
  },
  {
    id: 200, domain: "self-service-automation", type: "single",
    question: "What is the primary difference between a Catalog Item and a Record Producer?",
    options: ["A Catalog Item generates a request with requested items; a Record Producer creates a record directly on a target table", "Catalog Items are free; Record Producers have a cost", "There is no difference; they are interchangeable", "Record Producers can only create incidents; Catalog Items can create any record"],
    correct: 0,
    explanation: "A Catalog Item generates a Request (REQ) with Requested Items (RITM). A Record Producer creates a record directly on a specified target table (e.g., Incident, Change) through the catalog interface."
  }
];
