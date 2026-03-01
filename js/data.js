const DOMAINS = {
  "platform-overview": { name: "Platform Overview & Navigation", weight: 7, color: "#4CAF50" },
  "instance-config": { name: "Instance Configuration", weight: 13, color: "#2196F3" },
  "collaboration": { name: "Configuring Apps for Collaboration", weight: 20, color: "#FF9800" },
  "self-service-automation": { name: "Self-Service & Process Automation", weight: 20, color: "#9C27B0" },
  "database-security": { name: "Database Management & Platform Security", weight: 25, color: "#F44336" },
  "migration-scripting": { name: "Data Migration & Integration / Scripting", weight: 15, color: "#00BCD4" }
};

const QUESTIONS = [
  // ========== DOMAIN 1: Platform Overview & Navigation (15 questions) ==========
  {
    id: 1, domain: "platform-overview", type: "single",
    question: "What is the primary purpose of a Personal Developer Instance (PDI) in ServiceNow?",
    options: ["To host production data for a customer", "To provide a free instance for learning and development", "To run automated tests in a CI/CD pipeline", "To serve as a disaster recovery environment"],
    correct: 1,
    explanation: "A Personal Developer Instance (PDI) is a free ServiceNow instance provided for learning, development, and testing purposes. It is not meant for production data or DR."
  },
  {
    id: 2, domain: "platform-overview", type: "single",
    question: "Which ServiceNow interface is the default modern UI experience introduced to replace UI16?",
    options: ["UI15", "Service Portal", "Next Experience (Unified Navigation)", "Classic UI"],
    correct: 2,
    explanation: "Next Experience (also called Unified Navigation or Polaris) is the modern UI framework that replaces UI16 as the default navigation experience."
  },
  {
    id: 3, domain: "platform-overview", type: "single",
    question: "In the Next Experience UI, where do users access applications and modules?",
    options: ["The banner frame at the top", "The Application Navigator (All menu)", "The context menu on forms", "The homepage widgets"],
    correct: 1,
    explanation: "In Next Experience, the Application Navigator is accessed via the 'All' menu on the left side, allowing users to browse and search for applications and modules."
  },
  {
    id: 4, domain: "platform-overview", type: "single",
    question: "What is the typical instance promotion path in ServiceNow?",
    options: ["Production → Test → Development", "Development → Test → Production", "Development → Production → Test", "Test → Development → Production"],
    correct: 1,
    explanation: "The standard instance promotion path is Development → Test → Production. Changes are built in dev, validated in test, and deployed to production."
  },
  {
    id: 5, domain: "platform-overview", type: "single",
    question: "A user wants to quickly navigate to the Incident table in Next Experience. What is the fastest method?",
    options: ["Click All, then browse through menus", "Type 'incident.list' in the Application Navigator filter", "Open System Properties", "Navigate to the CMDB"],
    correct: 1,
    explanation: "Typing 'incident.list' (or just 'incident') in the Application Navigator filter is the fastest way to navigate directly to the Incident list."
  },
  {
    id: 6, domain: "platform-overview", type: "single",
    question: "Which of the following best describes the ServiceNow platform?",
    options: ["An on-premises-only help desk tool", "A cloud-based platform for digital workflows built on a single data model", "A code-only development framework", "A database management system"],
    correct: 1,
    explanation: "ServiceNow is a cloud-based platform that provides digital workflow automation across the enterprise, built on a single data model and architecture."
  },
  {
    id: 7, domain: "platform-overview", type: "single",
    question: "What does the 'Favorites' feature allow users to do in ServiceNow?",
    options: ["Bookmark external websites", "Pin frequently used applications and modules for quick access", "Save filter conditions on lists", "Create custom dashboards"],
    correct: 1,
    explanation: "Favorites allow users to pin frequently accessed applications, modules, and records for quick access from the navigator."
  },
  {
    id: 8, domain: "platform-overview", type: "single",
    question: "Which of the following is NOT a standard ServiceNow instance type?",
    options: ["Development", "Test", "Staging", "Production"],
    correct: 2,
    explanation: "The standard ServiceNow instance types are Development, Test, and Production. While some organizations may have additional sub-production instances, 'Staging' is not a standard ServiceNow instance type designation."
  },
  {
    id: 9, domain: "platform-overview", type: "single",
    question: "What is a 'view' in ServiceNow?",
    options: ["A type of report", "A way to display different layouts of the same form or list", "A dashboard widget", "A type of user role"],
    correct: 1,
    explanation: "A view defines which fields are displayed and their arrangement on a form or list. Multiple views can exist for the same table, showing different field layouts for different purposes."
  },
  {
    id: 10, domain: "platform-overview", type: "multi",
    question: "Which of the following are components of the Next Experience UI? (Choose two)",
    options: ["Unified Navigation", "Content frame", "Banner frame (UI16 only)", "Classic CMS"],
    correct: [0, 1],
    explanation: "Next Experience UI includes Unified Navigation (the left-side All menu and navigation) and the Content frame (where forms, lists, and other content are displayed). Banner frame is UI16 and Classic CMS is a legacy portal."
  },
  {
    id: 11, domain: "platform-overview", type: "single",
    question: "What happens to a PDI if it is not accessed for a period of time?",
    options: ["It is permanently deleted", "It goes to sleep (hibernate) and can be woken up", "It is automatically upgraded", "It transfers to production"],
    correct: 1,
    explanation: "PDIs hibernate after a period of inactivity. They can be woken up by logging in, but may eventually be reclaimed if inactive for an extended period."
  },
  {
    id: 12, domain: "platform-overview", type: "single",
    question: "Which URL pattern is used to access a ServiceNow instance?",
    options: ["www.servicenow.com/instance", "instance-name.service-now.com", "servicenow://instance-name", "instance-name.servicenow.local"],
    correct: 1,
    explanation: "ServiceNow instances are accessed via the URL pattern: instance-name.service-now.com (e.g., mycompany.service-now.com)."
  },
  {
    id: 13, domain: "platform-overview", type: "single",
    question: "What is the function of the global search in Next Experience?",
    options: ["It only searches for user records", "It searches across multiple tables and returns results from various record types", "It replaces the Application Navigator", "It only works with Knowledge articles"],
    correct: 1,
    explanation: "Global search in Next Experience searches across multiple tables simultaneously, returning results from incidents, knowledge articles, catalog items, and other configured record types."
  },
  {
    id: 14, domain: "platform-overview", type: "single",
    question: "In ServiceNow, what is a 'module'?",
    options: ["A JavaScript library", "A link within an application menu that opens a page, list, or record", "A type of database table", "A security role"],
    correct: 1,
    explanation: "A module is a menu item within an application that navigates to a specific page, list, form, or URL when clicked in the Application Navigator."
  },
  {
    id: 15, domain: "platform-overview", type: "single",
    question: "Which feature allows administrators to see the platform exactly as another user would?",
    options: ["User delegation", "Impersonation", "Role elevation", "Session debugging"],
    correct: 1,
    explanation: "Impersonation allows administrators to log in as another user to see the platform from their perspective, including their roles, groups, and data access. This is useful for troubleshooting."
  },

  // ========== DOMAIN 2: Instance Configuration (25 questions) ==========
  {
    id: 16, domain: "instance-config", type: "single",
    question: "How are plugins activated in a ServiceNow instance?",
    options: ["By editing XML files on the server", "Through System Definition > Plugins", "By importing an update set", "Through the Service Catalog"],
    correct: 1,
    explanation: "Plugins are activated through System Definition > Plugins. Administrators search for the desired plugin and click Activate to enable its functionality."
  },
  {
    id: 17, domain: "instance-config", type: "single",
    question: "What is the purpose of System Properties in ServiceNow?",
    options: ["To define table schemas", "To configure system-wide settings and behaviors", "To create user accounts", "To design forms"],
    correct: 1,
    explanation: "System Properties are name-value pairs that control system-wide settings and behaviors, such as enabling features, setting defaults, and configuring integrations."
  },
  {
    id: 18, domain: "instance-config", type: "single",
    question: "An administrator needs to change the company logo displayed in the banner. Where should they go?",
    options: ["System Properties > CSS", "System Properties > Basic Configuration UI16", "System UI > Branding Editor", "System Definition > Plugins"],
    correct: 1,
    explanation: "The company logo and banner can be configured through System Properties > Basic Configuration UI16 (or the appropriate branding settings for Next Experience)."
  },
  {
    id: 19, domain: "instance-config", type: "single",
    question: "Which property controls the maximum number of records displayed in a list?",
    options: ["glide.ui.list.page_size", "glide.ui.max_records", "glide.list.max_display", "glide.ui.per_page"],
    correct: 3,
    explanation: "The glide.ui.per_page property controls the default number of records shown per page in list views."
  },
  {
    id: 20, domain: "instance-config", type: "single",
    question: "What must happen before a plugin can be activated on a production instance?",
    options: ["It must be approved by ServiceNow support", "It should be tested on a sub-production instance first", "It requires a system reboot", "It must be purchased separately"],
    correct: 1,
    explanation: "Best practice dictates that plugins should be activated and tested on a sub-production (dev/test) instance before being activated in production to avoid unexpected issues."
  },
  {
    id: 21, domain: "instance-config", type: "single",
    question: "What is the effect of impersonating a user?",
    options: ["The admin's roles are combined with the impersonated user's roles", "The admin sees the system exactly as the impersonated user would, with only that user's roles and permissions", "The impersonated user is logged out", "Both users share a session simultaneously"],
    correct: 1,
    explanation: "When impersonating a user, the admin assumes that user's identity completely, seeing only their roles, permissions, and data access. The admin's own roles are not combined."
  },
  {
    id: 22, domain: "instance-config", type: "single",
    question: "Which of the following can be configured through the System Properties > Email module?",
    options: ["Table schemas", "SMTP server settings and email properties", "ACL rules", "Business rules"],
    correct: 1,
    explanation: "Email properties including SMTP server settings, email sending/receiving behavior, and notification defaults are configured through System Properties > Email."
  },
  {
    id: 23, domain: "instance-config", type: "single",
    question: "What is user delegation in ServiceNow?",
    options: ["Assigning a user to a group", "Allowing a user to act on behalf of another user for approvals and tasks", "Creating a new user account from a template", "Granting admin rights to a user"],
    correct: 1,
    explanation: "User delegation allows a user to designate another user to act on their behalf for approvals and other tasks during a specified time period (e.g., during vacation)."
  },
  {
    id: 24, domain: "instance-config", type: "multi",
    question: "Which of the following are valid methods to personalize the ServiceNow interface? (Choose two)",
    options: ["Setting a personal theme/dark mode", "Modifying system-wide ACLs", "Configuring personal list layouts", "Editing the data dictionary"],
    correct: [0, 2],
    explanation: "Users can personalize their interface by setting personal themes and configuring personal list layouts (column choices). ACLs and data dictionary are admin-level configurations, not personalizations."
  },
  {
    id: 25, domain: "instance-config", type: "single",
    question: "What is the difference between a System Property and a User Preference?",
    options: ["They are the same thing", "System Properties affect all users; User Preferences are per-user settings", "User Preferences override System Properties always", "System Properties are only for admins"],
    correct: 1,
    explanation: "System Properties are system-wide settings that affect all users, while User Preferences are per-user settings that allow individual customization of their experience."
  },
  {
    id: 26, domain: "instance-config", type: "single",
    question: "An administrator activates a plugin and notices new tables and modules. What caused this?",
    options: ["A bug in the system", "Plugins can add tables, modules, business rules, and other components when activated", "Another administrator made changes simultaneously", "The instance was upgraded"],
    correct: 1,
    explanation: "When a plugin is activated, it installs all associated components including tables, modules, business rules, UI pages, and other configurations that the plugin requires."
  },
  {
    id: 27, domain: "instance-config", type: "single",
    question: "Which table stores system properties in ServiceNow?",
    options: ["sys_user_preference", "sys_properties", "sys_configuration", "sys_settings"],
    correct: 1,
    explanation: "System properties are stored in the sys_properties table. Each property has a name, value, and description."
  },
  {
    id: 28, domain: "instance-config", type: "single",
    question: "What is the purpose of the 'glide.ui.session_timeout' property?",
    options: ["To set the maximum number of concurrent users", "To define how long a user session stays active before timing out", "To configure the login page display", "To set password expiration"],
    correct: 1,
    explanation: "The glide.ui.session_timeout property defines the duration (in minutes) a user session remains active before the user is automatically logged out due to inactivity."
  },
  {
    id: 29, domain: "instance-config", type: "single",
    question: "How can an administrator restrict which plugins can be activated?",
    options: ["Plugins cannot be restricted", "By requiring the 'admin' role and following change management processes", "By deleting the plugin files", "By setting a system property to false"],
    correct: 1,
    explanation: "Plugin activation requires the admin role. Organizations should follow change management processes and test plugins in sub-production before activating in production."
  },
  {
    id: 30, domain: "instance-config", type: "single",
    question: "What is the Branding Editor used for in Next Experience?",
    options: ["Writing custom CSS only", "Customizing the look and feel including logo, colors, and favicon", "Managing user accounts", "Configuring email templates"],
    correct: 1,
    explanation: "The Branding Editor in Next Experience allows administrators to customize visual elements including the company logo, color scheme, favicon, and other branding elements."
  },
  {
    id: 31, domain: "instance-config", type: "single",
    question: "Which of the following is true about deactivating a plugin?",
    options: ["All data associated with the plugin is immediately deleted", "Not all plugins can be deactivated; some are dependencies for other plugins", "Deactivating always requires a ServiceNow support ticket", "Deactivated plugins are removed from the instance permanently"],
    correct: 1,
    explanation: "Not all plugins can be deactivated, especially if other active plugins depend on them. Deactivating a plugin does not delete data but disables the functionality."
  },
  {
    id: 32, domain: "instance-config", type: "single",
    question: "An admin wants to display a custom message on the login page. Which approach should they use?",
    options: ["Edit the HTML of the login page directly", "Configure the login page system properties", "Create a UI Page", "Modify the database schema"],
    correct: 1,
    explanation: "ServiceNow provides system properties to customize the login page, including adding custom messages, configuring the background image, and adjusting the layout."
  },
  {
    id: 33, domain: "instance-config", type: "single",
    question: "What is the purpose of the 'glide.ui.compact_list' property?",
    options: ["To enable a condensed list view with less whitespace", "To limit the number of list columns", "To disable list pagination", "To sort lists alphabetically"],
    correct: 0,
    explanation: "The glide.ui.compact_list property, when set to true, enables a more compact/condensed display of list views with reduced whitespace between rows."
  },
  {
    id: 34, domain: "instance-config", type: "multi",
    question: "Which of the following are considered instance configuration activities? (Choose two)",
    options: ["Activating plugins", "Writing business rules", "Setting system properties", "Creating GlideRecord scripts"],
    correct: [0, 2],
    explanation: "Instance configuration includes non-scripting activities like activating plugins and setting system properties. Writing business rules and GlideRecord scripts are development/scripting activities."
  },
  {
    id: 35, domain: "instance-config", type: "single",
    question: "How does ServiceNow handle instance upgrades?",
    options: ["Customers must manually download and install patches", "ServiceNow manages upgrades on a regular release cycle; customers choose when to upgrade", "Upgrades happen automatically without notice", "Instances cannot be upgraded once deployed"],
    correct: 1,
    explanation: "ServiceNow manages the upgrade process through its regular release cycle (family releases). Customers work with ServiceNow to schedule their upgrade window."
  },
  {
    id: 36, domain: "instance-config", type: "single",
    question: "What is the purpose of the 'Welcome' page or homepage in ServiceNow?",
    options: ["To display the login form", "To provide a configurable dashboard landing page with widgets and reports", "To show system error logs", "To manage plugins"],
    correct: 1,
    explanation: "The homepage serves as a configurable dashboard landing page where users see relevant widgets, reports, and information when they first log in."
  },
  {
    id: 37, domain: "instance-config", type: "single",
    question: "Which notification channel is NOT natively supported in ServiceNow?",
    options: ["Email", "SMS", "Push notifications", "Fax"],
    correct: 3,
    explanation: "ServiceNow natively supports email, SMS, and push notifications as notification channels. Fax is not a natively supported notification channel."
  },
  {
    id: 38, domain: "instance-config", type: "single",
    question: "What role is typically required to impersonate another user?",
    options: ["itil", "user_admin", "admin or impersonator", "security_admin"],
    correct: 2,
    explanation: "The admin role has impersonation capability by default. The 'impersonator' role can also be granted to allow specific users to impersonate others without full admin access."
  },
  {
    id: 39, domain: "instance-config", type: "single",
    question: "Which system property controls whether users can personalize their list columns?",
    options: ["glide.ui.list_personalize", "glide.ui.personalize_list", "glide.ui.list.allow_personalize", "glide.cms.enable_personalize"],
    correct: 1,
    explanation: "The glide.ui.personalize_list property controls whether end users are allowed to personalize their list column layouts."
  },
  {
    id: 40, domain: "instance-config", type: "single",
    question: "What is the recommended approach when configuring email notifications for the first time?",
    options: ["Configure directly in production", "Set up and test in a sub-production instance, then move via update set", "Send test emails to all users", "Disable all existing notifications first"],
    correct: 1,
    explanation: "Email notifications should be configured and tested in a sub-production instance first, then promoted to production via update sets to avoid sending unintended emails to real users."
  },

  // ========== DOMAIN 3: Configuring Apps for Collaboration (40 questions) ==========
  {
    id: 41, domain: "collaboration", type: "single",
    question: "What is a list view in ServiceNow?",
    options: ["A form showing a single record", "A tabular display of multiple records from a table", "A dashboard widget", "A type of report"],
    correct: 1,
    explanation: "A list view displays multiple records from a table in a tabular format with configurable columns, filters, and sorting options."
  },
  {
    id: 42, domain: "collaboration", type: "single",
    question: "How can a user create a personal filter for a list?",
    options: ["By modifying the table schema", "By using the filter builder (funnel icon) on the list and saving the filter", "By editing system properties", "By creating a new view"],
    correct: 1,
    explanation: "Users can create personal filters using the filter builder (funnel icon) above the list. Filters can be saved for quick reuse."
  },
  {
    id: 43, domain: "collaboration", type: "single",
    question: "What is a breadcrumb in the context of ServiceNow lists?",
    options: ["A navigation trail showing the path to the current page", "A visual indicator of list filter conditions applied to refine the list", "A type of notification", "A bookmark feature"],
    correct: 1,
    explanation: "Breadcrumbs in ServiceNow lists show the filter conditions currently applied, allowing users to see and modify the active filters."
  },
  {
    id: 44, domain: "collaboration", type: "single",
    question: "Which of the following is used to add a related list to a form?",
    options: ["List Controls", "Form Designer or Form Layout", "The Application Navigator", "System Properties"],
    correct: 1,
    explanation: "Related lists are added to forms using the Form Designer (or Form Layout/Form Design). Administrators can drag related lists onto the form layout."
  },
  {
    id: 45, domain: "collaboration", type: "single",
    question: "What is a formatter in ServiceNow form design?",
    options: ["A script that formats data", "A non-field element added to a form layout (e.g., Activity formatter, Process flow)", "A CSS class for styling", "A data validation rule"],
    correct: 1,
    explanation: "A formatter is a non-field UI element that can be added to a form layout, such as the Activity formatter (showing work notes/comments) or the Process Flow formatter."
  },
  {
    id: 46, domain: "collaboration", type: "single",
    question: "What is the Task table in ServiceNow?",
    options: ["A table that only stores incident records", "A base table that many work-related tables extend (incident, problem, change, etc.)", "A table for storing user preferences", "A reporting table"],
    correct: 1,
    explanation: "The Task [task] table is a base table that provides common fields (assignment, state, priority, etc.) to child tables like Incident, Problem, Change Request, and others."
  },
  {
    id: 47, domain: "collaboration", type: "multi",
    question: "Which tables extend the Task table? (Choose two)",
    options: ["Incident [incident]", "User [sys_user]", "Change Request [change_request]", "System Property [sys_properties]"],
    correct: [0, 2],
    explanation: "Incident and Change Request both extend the Task table, inheriting its common fields like assignment group, state, and priority. User and System Property are independent tables."
  },
  {
    id: 48, domain: "collaboration", type: "single",
    question: "What is a Visual Task Board (VTB)?",
    options: ["A Gantt chart for project management", "A Kanban-style board that displays records as cards organized by lanes", "A type of report", "A workflow visualization tool"],
    correct: 1,
    explanation: "A Visual Task Board (VTB) is a Kanban-style board that displays records as draggable cards organized into lanes (columns), typically based on a state or category field."
  },
  {
    id: 49, domain: "collaboration", type: "single",
    question: "How can a VTB be created from a list of records?",
    options: ["Only through the admin console", "By right-clicking the list header and selecting 'Show Visual Task Board'", "By creating a new report", "VTBs cannot be created from lists"],
    correct: 1,
    explanation: "Users can create a VTB directly from any list by right-clicking the list header or using the list context menu to select the Visual Task Board option."
  },
  {
    id: 50, domain: "collaboration", type: "single",
    question: "What are notifications in ServiceNow?",
    options: ["System log entries", "Automated messages (email/SMS/push) triggered by events or conditions", "Dashboard widgets", "A type of workflow activity"],
    correct: 1,
    explanation: "Notifications are automated messages sent via email, SMS, or push notifications when specific events occur or conditions are met on records."
  },
  {
    id: 51, domain: "collaboration", type: "single",
    question: "Which condition can trigger a notification?",
    options: ["Only when a record is created", "When a record is inserted, updated, or a specific event is fired", "Only through a manual button click", "Only through a scheduled job"],
    correct: 1,
    explanation: "Notifications can be triggered when records are inserted, updated, or when specific events fire. They support conditions like 'record inserted', 'record updated', and event-based triggers."
  },
  {
    id: 52, domain: "collaboration", type: "single",
    question: "What is the purpose of a UI Action in ServiceNow?",
    options: ["To define table relationships", "To add buttons, links, or context menu items that perform actions on forms and lists", "To create email templates", "To configure ACLs"],
    correct: 1,
    explanation: "UI Actions create buttons, links, or context menu items on forms and lists. They can run client-side scripts, server-side scripts, or both when clicked."
  },
  {
    id: 53, domain: "collaboration", type: "single",
    question: "An administrator wants to create a report showing the number of incidents by priority. Which report type is most appropriate?",
    options: ["List report", "Bar chart or Pie chart", "Calendar report", "Trend report"],
    correct: 1,
    explanation: "A Bar chart or Pie chart is ideal for showing the count of records grouped by a category field like priority. Bar charts are good for comparison, pie charts for proportions."
  },
  {
    id: 54, domain: "collaboration", type: "single",
    question: "What is a pivot table report used for in ServiceNow?",
    options: ["Displaying a simple list of records", "Showing data in a two-dimensional grid grouped by row and column fields", "Creating a timeline view", "Generating PDF documents"],
    correct: 1,
    explanation: "A pivot table report displays data in a two-dimensional matrix/grid, with one field as rows and another as columns, showing aggregate values at the intersections."
  },
  {
    id: 55, domain: "collaboration", type: "single",
    question: "Where are dashboards managed in ServiceNow?",
    options: ["System Definition > Dashboards", "Self-Service > Dashboards or Performance Analytics > Dashboards", "System Properties > Dashboard Config", "The CMDB"],
    correct: 1,
    explanation: "Dashboards are typically managed through Self-Service > Dashboards or through Performance Analytics > Dashboards, where users can create, edit, and share dashboards."
  },
  {
    id: 56, domain: "collaboration", type: "single",
    question: "What is an SLA in ServiceNow?",
    options: ["A type of user role", "A Service Level Agreement that defines expected response and resolution times for tasks", "A scripting language", "A type of notification"],
    correct: 1,
    explanation: "An SLA (Service Level Agreement) defines the expected timeframes for task response and resolution. ServiceNow tracks SLA compliance and can trigger escalations when SLAs are at risk."
  },
  {
    id: 57, domain: "collaboration", type: "single",
    question: "Which SLA-related record tracks the actual elapsed time against an SLA definition?",
    options: ["SLA Definition", "Task SLA", "SLA Workflow", "SLA Report"],
    correct: 1,
    explanation: "A Task SLA record is automatically created when a task meets the start conditions of an SLA Definition. It tracks the actual elapsed time, percentage complete, and breach status."
  },
  {
    id: 58, domain: "collaboration", type: "single",
    question: "What does the 'Group by' feature do on a list?",
    options: ["Sorts the list alphabetically", "Groups records into collapsible sections based on a field value", "Filters out records", "Creates a new report"],
    correct: 1,
    explanation: "Group by organizes list records into collapsible sections based on the values of a selected field, making it easier to view related records together."
  },
  {
    id: 59, domain: "collaboration", type: "single",
    question: "How can an administrator make a field mandatory on a form?",
    options: ["Only through a client script", "Through the dictionary, UI Policy, or client script", "Only through the data dictionary", "Through the ACL system"],
    correct: 1,
    explanation: "Fields can be made mandatory through multiple methods: setting the Mandatory attribute in the dictionary, using a UI Policy, or using a client script. The best method depends on whether it should always be mandatory or conditional."
  },
  {
    id: 60, domain: "collaboration", type: "single",
    question: "What is the difference between a 'form view' and a 'list view'?",
    options: ["They are the same thing", "A form view shows a single record's details; a list view shows multiple records in a table", "A form view is for admins; a list view is for end users", "A list view cannot be customized"],
    correct: 1,
    explanation: "A form view displays the details of a single record with its fields, while a list view shows multiple records from a table in a tabular format with configurable columns."
  },
  {
    id: 61, domain: "collaboration", type: "multi",
    question: "Which of the following are valid report types in ServiceNow? (Choose two)",
    options: ["Trend report", "Gantt chart", "Donut chart", "Network diagram"],
    correct: [0, 2],
    explanation: "ServiceNow supports various report types including Trend (showing data over time), Bar, Pie, Donut, List, Pivot, and others. Gantt charts and network diagrams are not standard report types."
  },
  {
    id: 62, domain: "collaboration", type: "single",
    question: "What is the Activity formatter used for on a form?",
    options: ["Displaying workflow activities", "Showing work notes, additional comments, and the activity stream on a record", "Formatting date fields", "Creating automated activities"],
    correct: 1,
    explanation: "The Activity formatter displays the activity stream on a form, including work notes, additional comments, and other journal entries in chronological order."
  },
  {
    id: 63, domain: "collaboration", type: "single",
    question: "A manager wants a weekly email showing all open incidents assigned to their team. What should be configured?",
    options: ["A UI Action", "A scheduled report", "A client script", "A business rule"],
    correct: 1,
    explanation: "A scheduled report can be configured to automatically email report results on a recurring schedule (daily, weekly, monthly) to specified recipients."
  },
  {
    id: 64, domain: "collaboration", type: "single",
    question: "What is 'dot-walking' in ServiceNow?",
    options: ["A debugging technique", "Accessing fields on related tables through reference fields using dot notation", "A type of list navigation", "Walking through workflow steps"],
    correct: 1,
    explanation: "Dot-walking uses dot notation to access fields on referenced records. For example, 'caller_id.department' on an incident accesses the department field of the caller's user record."
  },
  {
    id: 65, domain: "collaboration", type: "single",
    question: "What is the purpose of list controls?",
    options: ["To define who can see a list", "To configure the buttons, links, and features available on a list layout", "To control list sorting only", "To set list refresh intervals"],
    correct: 1,
    explanation: "List controls configure which buttons, features, and UI elements appear on a list, such as New button, filters, search, and other list-level features."
  },
  {
    id: 66, domain: "collaboration", type: "single",
    question: "How are form sections used?",
    options: ["To create separate database tables", "To organize form fields into logical groups with collapsible headers", "To define security boundaries", "To create new views"],
    correct: 1,
    explanation: "Form sections organize fields into logical, collapsible groups on a form, improving usability by grouping related fields together (e.g., 'Contact Information', 'Resolution Details')."
  },
  {
    id: 67, domain: "collaboration", type: "single",
    question: "What happens when you personalize a list layout?",
    options: ["It changes the list for all users", "It saves a personal column configuration that only you see", "It creates a new table view", "It modifies the data dictionary"],
    correct: 1,
    explanation: "Personalizing a list layout saves a personal column configuration visible only to you. Other users continue to see the default or their own personalized layouts."
  },
  {
    id: 68, domain: "collaboration", type: "single",
    question: "Which field type displays a magnifying glass icon and allows searching for related records?",
    options: ["String field", "Reference field", "Choice field", "Date field"],
    correct: 1,
    explanation: "Reference fields display a magnifying glass icon and link to records in other tables. They allow users to search for and select related records."
  },
  {
    id: 69, domain: "collaboration", type: "single",
    question: "What is a trend report best used for?",
    options: ["Showing current record counts", "Displaying how a metric changes over time", "Listing individual records", "Comparing two different tables"],
    correct: 1,
    explanation: "Trend reports are specifically designed to show how data changes over time, such as incident volume per month or average resolution time over weeks."
  },
  {
    id: 70, domain: "collaboration", type: "single",
    question: "How can you share a dashboard with other users?",
    options: ["Dashboards cannot be shared", "By setting the dashboard visibility to a group or making it global", "By emailing a screenshot", "By creating a duplicate for each user"],
    correct: 1,
    explanation: "Dashboards can be shared by setting their visibility to specific groups or roles, or by making them global so all users can access them."
  },
  {
    id: 71, domain: "collaboration", type: "single",
    question: "What is a condition builder used for in list filters?",
    options: ["Building JavaScript conditions", "Creating visual filter conditions with AND/OR logic to filter list records", "Configuring form layouts", "Defining ACL conditions"],
    correct: 1,
    explanation: "The condition builder provides a visual interface for creating filter conditions using AND/OR logic. Users select fields, operators, and values to define which records to display."
  },
  {
    id: 72, domain: "collaboration", type: "single",
    question: "What is the difference between 'Work Notes' and 'Additional Comments' on a task?",
    options: ["There is no difference", "Work Notes are visible only to ITIL users; Additional Comments are visible to the customer", "Work Notes are automated; Additional Comments are manual", "Additional Comments are internal only"],
    correct: 1,
    explanation: "Work Notes are internal journal entries visible only to ITIL/fulfiller users. Additional Comments (Customer Visible) can be seen by the end user/customer, making them suitable for customer communication."
  },
  {
    id: 73, domain: "collaboration", type: "single",
    question: "Which feature allows users to export list data?",
    options: ["The form context menu", "The list context menu (right-click header) with export options like CSV, Excel, PDF", "System Properties", "The Application Navigator"],
    correct: 1,
    explanation: "Users can export list data by right-clicking the list header or column header and selecting export options such as CSV, Excel, PDF, or other formats."
  },
  {
    id: 74, domain: "collaboration", type: "single",
    question: "What is Performance Analytics in ServiceNow?",
    options: ["A tool for monitoring server performance", "An analytics feature for tracking KPIs, trends, and benchmarks using indicators and dashboards", "A code profiling tool", "A network monitoring module"],
    correct: 1,
    explanation: "Performance Analytics tracks Key Performance Indicators (KPIs) over time using indicators, breakdowns, and analytics dashboards to identify trends and measure performance."
  },
  {
    id: 75, domain: "collaboration", type: "single",
    question: "An SLA is about to breach. What automated action can ServiceNow take?",
    options: ["Nothing; SLAs are informational only", "Trigger notifications, escalations, or workflow activities", "Automatically close the task", "Delete the record"],
    correct: 1,
    explanation: "When SLAs are at risk of breaching, ServiceNow can automatically trigger notifications to alert stakeholders, escalate the task, or run workflow activities to ensure timely resolution."
  },
  {
    id: 76, domain: "collaboration", type: "single",
    question: "What is a template in the context of ServiceNow forms?",
    options: ["A blank form layout", "A pre-defined set of field values that can be applied when creating new records", "A type of report", "A CSS theme"],
    correct: 1,
    explanation: "Templates are pre-defined sets of field values that can be applied when creating new records, saving time by auto-populating commonly used field combinations."
  },
  {
    id: 77, domain: "collaboration", type: "single",
    question: "How can you configure a list to automatically refresh at regular intervals?",
    options: ["Through a business rule", "Using the list's auto-refresh setting in the list header/context menu", "By writing a client script", "This is not possible"],
    correct: 1,
    explanation: "Lists can be configured to auto-refresh at specified intervals through the list header settings or context menu, keeping displayed data current without manual refresh."
  },
  {
    id: 78, domain: "collaboration", type: "single",
    question: "What are 'Related Lists' on a form?",
    options: ["Duplicate lists", "Lists of records from other tables that have a relationship to the current record", "Lists of similar records", "A type of report widget"],
    correct: 1,
    explanation: "Related Lists display records from other tables that are related to the current record, such as showing all incidents related to a specific CI or all tasks assigned to a user."
  },
  {
    id: 79, domain: "collaboration", type: "single",
    question: "What is the purpose of the 'Update' button vs 'Submit' button on a form?",
    options: ["They do the same thing", "Submit creates a new record and stays on the form; Update saves changes to an existing record", "Update creates a new record; Submit saves changes", "Submit is for admins only"],
    correct: 1,
    explanation: "Submit is used when creating a new record (it inserts the record). Update is used to save changes to an existing record. After Submit, you typically return to the list or the created record."
  },
  {
    id: 80, domain: "collaboration", type: "single",
    question: "Which feature allows drag-and-drop form design in ServiceNow?",
    options: ["Form Layout", "Form Designer", "UI Builder", "Schema Designer"],
    correct: 1,
    explanation: "Form Designer provides a drag-and-drop interface for designing form layouts. Administrators can add, remove, and rearrange fields, sections, and formatters visually."
  },

  // ========== DOMAIN 4: Self-Service & Process Automation (40 questions) ==========
  {
    id: 81, domain: "self-service-automation", type: "single",
    question: "What is the Service Catalog in ServiceNow?",
    options: ["A list of all database tables", "A self-service portal where users can request items and services", "A configuration management tool", "A reporting module"],
    correct: 1,
    explanation: "The Service Catalog is a self-service interface where end users can browse and request services, hardware, software, and other items from predefined catalog items."
  },
  {
    id: 82, domain: "self-service-automation", type: "single",
    question: "What is the difference between a Catalog Item and a Record Producer?",
    options: ["They are the same thing", "A Catalog Item generates a Requested Item; a Record Producer creates a record on a target table (e.g., Incident)", "A Record Producer is for admins only", "A Catalog Item requires approval; a Record Producer does not"],
    correct: 1,
    explanation: "A Catalog Item, when ordered, creates a Requested Item (RITM) with associated catalog tasks. A Record Producer creates a record directly on a specified target table, such as creating an incident from the catalog."
  },
  {
    id: 83, domain: "self-service-automation", type: "single",
    question: "What is an Order Guide in the Service Catalog?",
    options: ["Documentation for ordering items", "A guided, multi-step process that bundles multiple catalog items into a single request", "A report showing order history", "An approval workflow"],
    correct: 1,
    explanation: "An Order Guide provides a wizard-like, multi-step ordering experience that can bundle multiple catalog items together, guiding the user through a structured request process."
  },
  {
    id: 84, domain: "self-service-automation", type: "single",
    question: "What are catalog variables?",
    options: ["JavaScript variables used in catalog scripts", "Form fields/questions on a catalog item that collect information from the requester", "System properties for the catalog", "Database columns on the sc_cat_item table"],
    correct: 1,
    explanation: "Catalog variables are the questions/fields presented to users when they order a catalog item. They collect information needed to fulfill the request (e.g., laptop type, justification)."
  },
  {
    id: 85, domain: "self-service-automation", type: "multi",
    question: "Which of the following are types of catalog variables? (Choose two)",
    options: ["Single Line Text", "GlideRecord", "Select Box (dropdown)", "Business Rule"],
    correct: [0, 2],
    explanation: "Single Line Text and Select Box (dropdown) are types of catalog variables used to collect user input. GlideRecord is a scripting API, and Business Rule is a server-side automation."
  },
  {
    id: 86, domain: "self-service-automation", type: "single",
    question: "What is Knowledge Management in ServiceNow?",
    options: ["A database management tool", "A system for creating, organizing, and sharing knowledge articles for self-service and support", "A project management module", "A type of notification"],
    correct: 1,
    explanation: "Knowledge Management provides a system for creating, reviewing, publishing, and retiring knowledge articles that help users find answers and solutions through self-service."
  },
  {
    id: 87, domain: "self-service-automation", type: "single",
    question: "What is the knowledge article lifecycle?",
    options: ["Create → Publish → Archive", "Draft → Review → Published → Retired", "Write → Submit → Approve", "New → Active → Closed"],
    correct: 1,
    explanation: "Knowledge articles follow a lifecycle: Draft (being written) → Review (being validated) → Published (available to users) → Retired (no longer relevant). The exact workflow can be customized."
  },
  {
    id: 88, domain: "self-service-automation", type: "single",
    question: "What is a Knowledge Base in ServiceNow?",
    options: ["A single knowledge article", "A container/collection that organizes related knowledge articles with shared permissions and workflows", "A database table", "A type of report"],
    correct: 1,
    explanation: "A Knowledge Base is a container that groups related knowledge articles together. Each knowledge base can have its own access controls, workflows, and approval processes."
  },
  {
    id: 89, domain: "self-service-automation", type: "single",
    question: "What is Flow Designer in ServiceNow?",
    options: ["A tool for designing form layouts", "A no-code/low-code tool for building automated workflows using triggers, actions, and flow logic", "A CSS editor", "A database design tool"],
    correct: 1,
    explanation: "Flow Designer is a no-code/low-code automation tool that allows administrators to build flows using triggers, actions, and flow logic steps without writing scripts."
  },
  {
    id: 90, domain: "self-service-automation", type: "single",
    question: "What is the difference between a Flow and a Subflow in Flow Designer?",
    options: ["They are the same thing", "A Flow has a trigger and runs independently; a Subflow has no trigger and is called by other flows", "A Subflow runs on the client side", "A Flow is legacy; Subflows are modern"],
    correct: 1,
    explanation: "A Flow is a complete automation with a trigger that starts it. A Subflow is a reusable sequence of actions without its own trigger, designed to be called from within other flows."
  },
  {
    id: 91, domain: "self-service-automation", type: "single",
    question: "What is a Spoke in Flow Designer?",
    options: ["A type of trigger", "A scoped application that contains Flow Designer actions and subflows for a specific integration or domain", "A flow variable", "A type of approval"],
    correct: 1,
    explanation: "A Spoke is a scoped application containing Flow Designer actions and subflows tailored for a specific integration (e.g., Slack Spoke, Microsoft Teams Spoke) or domain."
  },
  {
    id: 92, domain: "self-service-automation", type: "single",
    question: "What triggers can start a Flow in Flow Designer?",
    options: ["Only manual triggers", "Record-based triggers, schedule-based triggers, or application-based triggers", "Only email triggers", "Only API calls"],
    correct: 1,
    explanation: "Flows can be triggered by record events (created, updated, deleted), schedules (daily, weekly), or application triggers (inbound email, REST API calls, etc.)."
  },
  {
    id: 93, domain: "self-service-automation", type: "single",
    question: "What is the legacy Workflow Editor used for?",
    options: ["Only for creating approval workflows", "Building graphical workflow automations (drag-and-drop activities) - now largely replaced by Flow Designer", "Editing CSS workflows", "Managing database transactions"],
    correct: 1,
    explanation: "The legacy Workflow Editor provides a graphical drag-and-drop interface for building automated workflows. While still functional, Flow Designer is the recommended modern alternative."
  },
  {
    id: 94, domain: "self-service-automation", type: "single",
    question: "What is an approval rule in ServiceNow?",
    options: ["A business rule that runs on approval", "A configuration that automatically generates approval requests based on conditions", "A type of ACL", "A client script"],
    correct: 1,
    explanation: "Approval rules define conditions under which approval requests are automatically generated. They specify who needs to approve and under what circumstances."
  },
  {
    id: 95, domain: "self-service-automation", type: "single",
    question: "What is the difference between an Approval Rule and an Approval Policy?",
    options: ["They are the same thing", "Approval rules are simpler condition-based; approval policies are more complex with multiple conditions and actions", "Approval policies are legacy only", "Approval rules require scripting"],
    correct: 1,
    explanation: "Approval rules are simpler condition-based configurations. Approval policies are more sophisticated, using the Decision Table framework for complex multi-condition approval requirements."
  },
  {
    id: 96, domain: "self-service-automation", type: "single",
    question: "What is an Assignment Rule?",
    options: ["A rule that assigns roles to users", "A rule that automatically assigns tasks to users or groups based on conditions", "A rule that assigns ACLs", "A type of business rule"],
    correct: 1,
    explanation: "Assignment rules automatically assign records (like incidents or catalog tasks) to specific users or groups based on defined conditions, streamlining the routing process."
  },
  {
    id: 97, domain: "self-service-automation", type: "single",
    question: "A catalog item requires manager approval for requests over $500. How should this be configured?",
    options: ["Using a client script on the catalog item", "Using a catalog item approval rule or flow that checks the price and generates approval", "By making the price field read-only", "Through a UI policy"],
    correct: 1,
    explanation: "Conditional approvals on catalog items are configured using approval rules or Flow Designer flows that evaluate conditions (like price > $500) and generate approval requests accordingly."
  },
  {
    id: 98, domain: "self-service-automation", type: "single",
    question: "What is the Service Portal in ServiceNow?",
    options: ["The classic UI for admins", "A modern, widget-based portal framework for building user-facing self-service portals", "The Application Navigator", "A type of report"],
    correct: 1,
    explanation: "Service Portal is a modern, responsive portal framework that allows organizations to build custom self-service portals using configurable widgets, pages, and themes."
  },
  {
    id: 99, domain: "self-service-automation", type: "single",
    question: "How does knowledge article feedback work?",
    options: ["Users cannot provide feedback on articles", "Users can rate articles and flag them as helpful/not helpful, which feeds into article quality metrics", "Feedback is only available to admins", "Feedback requires a separate plugin"],
    correct: 1,
    explanation: "Users can rate knowledge articles, mark them as helpful or not helpful, and provide comments. This feedback helps knowledge managers improve article quality and relevance."
  },
  {
    id: 100, domain: "self-service-automation", type: "single",
    question: "What is the purpose of a Catalog Category?",
    options: ["To restrict access to catalog items", "To organize catalog items into logical groups for easier browsing", "To define pricing for items", "To create approval workflows"],
    correct: 1,
    explanation: "Catalog categories organize catalog items into logical groups (e.g., Hardware, Software, Services), making it easier for users to browse and find the items they need."
  },
  {
    id: 101, domain: "self-service-automation", type: "single",
    question: "What is a Catalog Task?",
    options: ["A task to create a new catalog item", "A fulfillment task generated when a catalog item is ordered, assigned to a fulfillment group", "A scheduled catalog maintenance task", "An approval task"],
    correct: 1,
    explanation: "Catalog Tasks (sc_task) are fulfillment tasks automatically generated when a catalog item is ordered. They are assigned to fulfillment groups to track the work needed to fulfill the request."
  },
  {
    id: 102, domain: "self-service-automation", type: "single",
    question: "In Flow Designer, what is an Action?",
    options: ["A trigger that starts a flow", "A reusable, single-purpose operation that performs a specific task (e.g., Create Record, Send Email)", "A flow variable", "A condition check"],
    correct: 1,
    explanation: "An Action in Flow Designer is a reusable single-purpose step that performs a specific operation, such as creating a record, sending an email, updating a field, or calling a REST API."
  },
  {
    id: 103, domain: "self-service-automation", type: "multi",
    question: "Which of the following can be configured in a Flow Designer flow? (Choose two)",
    options: ["If/Else conditions for branching logic", "Custom HTML pages", "For Each loops to iterate over records", "Direct database SQL queries"],
    correct: [0, 2],
    explanation: "Flow Designer supports If/Else branching for conditional logic and For Each loops for iterating over record sets. It does not create custom HTML pages or run direct SQL."
  },
  {
    id: 104, domain: "self-service-automation", type: "single",
    question: "What is the execution order when a catalog item is submitted?",
    options: ["Fulfillment → Approval → Request", "Request created → Approval (if required) → Catalog Tasks generated for fulfillment", "Approval → Request → Fulfillment simultaneously", "Tasks first, then request"],
    correct: 1,
    explanation: "When a catalog item is ordered: a Request (REQ) and Requested Item (RITM) are created, approvals are generated if required, and upon approval, Catalog Tasks are created for fulfillment."
  },
  {
    id: 105, domain: "self-service-automation", type: "single",
    question: "What is a Data Policy in ServiceNow?",
    options: ["A policy that controls data storage limits", "A server-side rule that enforces data requirements (mandatory, read-only) regardless of how data enters the system", "A type of ACL", "A backup policy"],
    correct: 1,
    explanation: "Data Policies enforce data requirements (mandatory fields, read-only fields) on the server side, ensuring data integrity regardless of whether data comes from forms, imports, web services, or other channels."
  },
  {
    id: 106, domain: "self-service-automation", type: "single",
    question: "How does a Data Policy differ from a UI Policy?",
    options: ["They are identical", "UI Policies only affect the form UI; Data Policies enforce rules server-side across all data entry methods", "Data Policies only work on imports", "UI Policies are server-side; Data Policies are client-side"],
    correct: 1,
    explanation: "UI Policies control form behavior (show/hide, mandatory, read-only) only on the UI. Data Policies enforce the same types of rules server-side, applying to all data entry methods including APIs, imports, and scripts."
  },
  {
    id: 107, domain: "self-service-automation", type: "single",
    question: "What is the purpose of the 'Can Read' and 'Can Write' knowledge base permissions?",
    options: ["They control database-level access", "They determine who can view and who can contribute articles to a knowledge base", "They are ACL types", "They control Service Portal access"],
    correct: 1,
    explanation: "Knowledge base permissions control who can read (view) articles and who can write (contribute/edit) articles within a specific knowledge base, using roles or groups."
  },
  {
    id: 108, domain: "self-service-automation", type: "single",
    question: "An organization wants to automate the onboarding process for new hires. Which ServiceNow feature is most appropriate?",
    options: ["A single catalog item", "A Flow Designer flow or workflow triggered by HR case creation", "A notification rule", "A report"],
    correct: 1,
    explanation: "Flow Designer flows (or legacy workflows) can automate multi-step onboarding processes, triggering tasks across departments (IT, HR, Facilities) when an HR onboarding case is created."
  },
  {
    id: 109, domain: "self-service-automation", type: "single",
    question: "What is a Variable Set in the Service Catalog?",
    options: ["A collection of JavaScript variables", "A reusable group of catalog variables that can be shared across multiple catalog items", "A set of system properties", "A type of report filter"],
    correct: 1,
    explanation: "A Variable Set is a reusable collection of catalog variables that can be applied to multiple catalog items, avoiding the need to recreate the same variables on each item."
  },
  {
    id: 110, domain: "self-service-automation", type: "single",
    question: "What is the difference between 'Requested For' and 'Requested By' on a catalog request?",
    options: ["They are always the same user", "Requested By is who submitted the request; Requested For is the person who will receive the item/service", "Requested For is the approver", "Requested By is the fulfiller"],
    correct: 1,
    explanation: "Requested By is the person who submitted the catalog request. Requested For is the intended recipient of the item or service, which may be a different person (e.g., a manager ordering a laptop for their team member)."
  },
  {
    id: 111, domain: "self-service-automation", type: "single",
    question: "Which table stores Service Catalog requests?",
    options: ["incident", "sc_request", "task", "sc_cat_item"],
    correct: 1,
    explanation: "Service Catalog requests are stored in the sc_request table. Individual line items are in sc_req_item (Requested Items), and fulfillment tasks are in sc_task."
  },
  {
    id: 112, domain: "self-service-automation", type: "single",
    question: "What is the purpose of a Catalog Client Script?",
    options: ["It runs on the server when a catalog item is submitted", "It runs in the browser to control catalog item form behavior (show/hide variables, set values)", "It creates catalog items automatically", "It generates reports on catalog usage"],
    correct: 1,
    explanation: "Catalog Client Scripts run in the user's browser to control the catalog item form behavior, such as showing/hiding variables based on selections, setting default values, or validating input."
  },
  {
    id: 113, domain: "self-service-automation", type: "single",
    question: "What is a Catalog UI Policy?",
    options: ["A policy that restricts catalog access", "A no-code way to dynamically change catalog variable attributes (mandatory, visible, read-only) based on conditions", "A server-side validation rule", "A type of ACL for the catalog"],
    correct: 1,
    explanation: "Catalog UI Policies dynamically change catalog variable behavior (mandatory, visible, read-only) based on conditions without scripting, similar to form UI Policies but for catalog items."
  },
  {
    id: 114, domain: "self-service-automation", type: "single",
    question: "In Flow Designer, what is a trigger?",
    options: ["A manual button click only", "The event or condition that starts a flow's execution", "A type of action step", "A subflow reference"],
    correct: 1,
    explanation: "A trigger is the event or condition that initiates a flow's execution. Examples include record creation/update, a scheduled time, an inbound email, or a service catalog request."
  },
  {
    id: 115, domain: "self-service-automation", type: "single",
    question: "How can you make a knowledge article visible only to IT staff?",
    options: ["By setting the article to Draft state", "By configuring the knowledge base 'Can Read' permission to the appropriate role or group", "By hiding it in the Application Navigator", "By encrypting the article"],
    correct: 1,
    explanation: "Knowledge base access is controlled through Can Read/Can Write permissions. Setting Can Read to an IT-specific role or group restricts article visibility to IT staff only."
  },
  {
    id: 116, domain: "self-service-automation", type: "single",
    question: "What happens when a requested item's approval is rejected?",
    options: ["The item is automatically re-submitted", "The requested item moves to a closed/cancelled state and no fulfillment tasks are created", "The request is escalated to an admin", "Nothing happens until the requester takes action"],
    correct: 1,
    explanation: "When an approval is rejected, the requested item typically moves to a closed incomplete or cancelled state. No fulfillment tasks are generated since the request was not approved."
  },
  {
    id: 117, domain: "self-service-automation", type: "single",
    question: "What is the purpose of the Execution Plan on a catalog item?",
    options: ["To define the item's price", "To define the fulfillment tasks that will be created when the item is ordered and how they relate to each other", "To schedule when the item is available", "To set approval requirements"],
    correct: 1,
    explanation: "The Execution Plan (or catalog item workflow/flow) defines what fulfillment tasks are created, their order (sequential or parallel), and assignment when the catalog item is ordered."
  },
  {
    id: 118, domain: "self-service-automation", type: "single",
    question: "Which module is used to view all pending approvals for the current user?",
    options: ["Self-Service > My Requests", "Self-Service > My Approvals", "System Logs > Approvals", "Service Catalog > Approvals"],
    correct: 1,
    explanation: "Self-Service > My Approvals shows all pending approval requests for the currently logged-in user, allowing them to approve or reject items."
  },
  {
    id: 119, domain: "self-service-automation", type: "single",
    question: "What is the relationship between a Request (REQ), Requested Item (RITM), and Catalog Task (SCTASK)?",
    options: ["They are all the same record type", "A REQ contains one or more RITMs, and each RITM can generate one or more SCTASKs", "SCTASKs contain RITMs which contain REQs", "There is no relationship between them"],
    correct: 1,
    explanation: "A Request (REQ) is the parent container. It contains one or more Requested Items (RITM), one for each catalog item ordered. Each RITM can generate one or more Catalog Tasks (SCTASK) for fulfillment."
  },
  {
    id: 120, domain: "self-service-automation", type: "single",
    question: "What is the benefit of using Flow Designer over the legacy Workflow Editor?",
    options: ["Flow Designer is faster at runtime", "Flow Designer provides a modern, no-code interface with better reusability (subflows, actions, spokes) and is the strategic direction for ServiceNow automation", "Workflow Editor has been completely removed", "There is no benefit; they are equivalent"],
    correct: 1,
    explanation: "Flow Designer offers a modern no-code/low-code interface, reusable components (subflows, actions, spokes), better testing capabilities, and is ServiceNow's strategic automation platform going forward."
  },

  // ========== DOMAIN 5: Database Management & Platform Security (50 questions) ==========
  {
    id: 121, domain: "database-security", type: "single",
    question: "What is a table in ServiceNow?",
    options: ["A visual component on a form", "A structured collection of records with defined fields, similar to a database table", "A type of report", "A user group"],
    correct: 1,
    explanation: "A table in ServiceNow is a structured collection of records (rows) with defined fields (columns), analogous to a relational database table. Each table stores specific types of data."
  },
  {
    id: 122, domain: "database-security", type: "single",
    question: "Where are field definitions (type, length, default value) configured?",
    options: ["System Properties", "The Data Dictionary (System Definition > Dictionary)", "The Application Navigator", "Form Designer only"],
    correct: 1,
    explanation: "The Data Dictionary (accessible through System Definition > Dictionary or by right-clicking a field label) defines field attributes including type, length, default values, and other properties."
  },
  {
    id: 123, domain: "database-security", type: "single",
    question: "What is a reference field?",
    options: ["A field that contains a URL", "A field that creates a relationship to another table by storing the sys_id of a record in that table", "A field that references a system property", "A calculated field"],
    correct: 1,
    explanation: "A reference field stores the sys_id of a record from another table, creating a relationship between tables. For example, the Caller field on an Incident references the User table."
  },
  {
    id: 124, domain: "database-security", type: "single",
    question: "What is the difference between a 1:many and a many:many relationship?",
    options: ["They are the same", "1:many uses a reference field (one parent, many children); many:many uses an intermediary table (M2M) to link records", "1:many requires scripting; many:many does not", "Many:many is not supported in ServiceNow"],
    correct: 1,
    explanation: "A 1:many relationship uses a reference field (e.g., many incidents reference one assignment group). A many:many relationship uses an intermediary (M2M) table to allow records in two tables to reference multiple records in each other."
  },
  {
    id: 125, domain: "database-security", type: "single",
    question: "What is the CMDB in ServiceNow?",
    options: ["Configuration Management Dashboard", "Configuration Management Database - a repository of IT assets and their relationships", "Change Management Data Browser", "A scripting module"],
    correct: 1,
    explanation: "The CMDB (Configuration Management Database) is a centralized repository that stores information about IT assets (Configuration Items/CIs) and their relationships, supporting ITSM processes."
  },
  {
    id: 126, domain: "database-security", type: "single",
    question: "What is CSDM in ServiceNow?",
    options: ["Customer Service Data Module", "Common Service Data Model - a framework/standard for organizing data in the CMDB", "Configuration System Data Manager", "A type of security model"],
    correct: 1,
    explanation: "CSDM (Common Service Data Model) is ServiceNow's recommended framework for organizing and structuring data in the CMDB. It defines standard tables, relationships, and lifecycle states."
  },
  {
    id: 127, domain: "database-security", type: "single",
    question: "What is a Transform Map used for?",
    options: ["Transforming report data", "Defining how import set data maps to target table fields during data import", "Transforming UI layouts", "Converting scripts between languages"],
    correct: 1,
    explanation: "A Transform Map defines the field mappings between an import set (staging table) and a target table, specifying how imported data should be mapped, transformed, and loaded."
  },
  {
    id: 128, domain: "database-security", type: "single",
    question: "What is an Import Set in ServiceNow?",
    options: ["A collection of update sets", "A staging table where imported data is temporarily stored before being transformed to a target table", "A set of import scripts", "A backup of the database"],
    correct: 1,
    explanation: "An Import Set is a staging table that temporarily holds data from an external source (CSV, Excel, JDBC, etc.) before it is transformed and loaded into the target ServiceNow table."
  },
  {
    id: 129, domain: "database-security", type: "single",
    question: "What is the correct order of steps when importing data?",
    options: ["Transform → Import → Map", "Load data into Import Set → Create/Run Transform Map → Data appears in target table", "Create target table → Write script → Import", "Map fields → Import → Validate"],
    correct: 1,
    explanation: "The import process is: 1) Load data into an Import Set (staging table), 2) Create/run a Transform Map that maps import set fields to target table fields, 3) Data is inserted/updated in the target table."
  },
  {
    id: 130, domain: "database-security", type: "single",
    question: "What is an ACL (Access Control List) in ServiceNow?",
    options: ["A type of user group", "A security rule that defines who can access specific records, fields, or operations", "An application configuration", "A type of business rule"],
    correct: 1,
    explanation: "An ACL (Access Control List) is a security rule that controls access to data. ACLs define who can perform operations (read, write, create, delete) on specific tables, records, or fields."
  },
  {
    id: 131, domain: "database-security", type: "single",
    question: "In what order are ACLs evaluated?",
    options: ["Alphabetically by name", "Most specific to least specific (field-level → record-level → table-level)", "Randomly", "By creation date"],
    correct: 1,
    explanation: "ACLs are evaluated from most specific to least specific: field-level ACLs are checked first, then record-level, then table-level. The system matches the most specific rule applicable."
  },
  {
    id: 132, domain: "database-security", type: "single",
    question: "What does it mean if no ACL rule matches a user's request?",
    options: ["Access is granted by default", "Access is denied (default deny)", "The system prompts the user for credentials", "The request is logged but allowed"],
    correct: 1,
    explanation: "ServiceNow follows a 'default deny' approach. If no ACL rule explicitly grants access, the request is denied. This is a security best practice."
  },
  {
    id: 133, domain: "database-security", type: "single",
    question: "What is a role in ServiceNow?",
    options: ["A user's job title", "A named permission set that grants access to features, modules, and data", "A type of group", "A workflow step"],
    correct: 1,
    explanation: "A role is a named collection of permissions that controls what a user can see and do. Roles are assigned to users or groups and referenced in ACLs to control data access."
  },
  {
    id: 134, domain: "database-security", type: "single",
    question: "What is the difference between a role and a group?",
    options: ["They are the same thing", "A group is a collection of users; a role defines permissions. Groups can have roles assigned, giving all group members those permissions", "Groups are for security; roles are for notifications", "Roles contain groups"],
    correct: 1,
    explanation: "Groups are collections of users (e.g., a team). Roles define permissions (e.g., itil, admin). When a role is assigned to a group, all members of that group inherit the role's permissions."
  },
  {
    id: 135, domain: "database-security", type: "multi",
    question: "Which of the following are valid ACL operations? (Choose two)",
    options: ["Read", "Execute", "Write", "Compile"],
    correct: [0, 2],
    explanation: "Standard ACL operations include Read, Write, Create, and Delete. Execute and Compile are not standard ACL operations in ServiceNow."
  },
  {
    id: 136, domain: "database-security", type: "single",
    question: "An administrator wants to prevent users from seeing the 'Social Security Number' field on the Employee table. What should they create?",
    options: ["A UI Policy to hide the field", "A field-level ACL that restricts read access to the SSN field", "A client script to remove the field", "A business rule to clear the field"],
    correct: 1,
    explanation: "A field-level ACL is the proper security mechanism to restrict access to sensitive fields. UI Policies only hide fields on the form but don't prevent API or report access."
  },
  {
    id: 137, domain: "database-security", type: "single",
    question: "What is the sys_id?",
    options: ["A sequential auto-increment number", "A 32-character globally unique identifier (GUID) assigned to every record in ServiceNow", "The record's display value", "A user-assigned ID"],
    correct: 1,
    explanation: "The sys_id is a 32-character GUID (Globally Unique Identifier) automatically assigned to every record in ServiceNow. It serves as the primary key for all records."
  },
  {
    id: 138, domain: "database-security", type: "single",
    question: "What is table inheritance in ServiceNow?",
    options: ["Copying data between tables", "A child table extending a parent table, inheriting all parent fields and adding its own", "Sharing ACLs between tables", "A backup mechanism"],
    correct: 1,
    explanation: "Table inheritance allows a child table to extend a parent table, inheriting all of the parent's fields while adding its own specific fields. For example, Incident extends Task."
  },
  {
    id: 139, domain: "database-security", type: "single",
    question: "What is the Schema Map used for?",
    options: ["Mapping data imports", "Visually displaying table relationships and their fields in a graphical interface", "Creating database schemas", "Mapping user roles to groups"],
    correct: 1,
    explanation: "The Schema Map provides a visual, graphical representation of table relationships, showing how tables are connected through reference fields and inheritance."
  },
  {
    id: 140, domain: "database-security", type: "single",
    question: "What is a Configuration Item (CI) in the CMDB?",
    options: ["A system property", "A record representing an IT asset, service, or component that needs to be managed", "A type of user account", "A workflow configuration"],
    correct: 1,
    explanation: "A Configuration Item (CI) is a record in the CMDB representing any IT asset, service, or component that needs to be tracked and managed (servers, applications, network devices, etc.)."
  },
  {
    id: 141, domain: "database-security", type: "single",
    question: "What is the purpose of a coalesce field in a Transform Map?",
    options: ["To merge two fields into one", "To identify matching records to update instead of creating duplicates during import", "To encrypt field values", "To combine multiple tables"],
    correct: 1,
    explanation: "A coalesce field acts as a matching key during import. When the transform runs, it checks if a record with the same coalesce field value already exists. If so, it updates; if not, it inserts a new record."
  },
  {
    id: 142, domain: "database-security", type: "single",
    question: "Which of the following best describes row-level security?",
    options: ["Encrypting individual rows", "ACL conditions that restrict access to specific records based on field values or user attributes", "Deleting rows that are not needed", "Sorting rows by security level"],
    correct: 1,
    explanation: "Row-level security uses ACL conditions to restrict access to specific records. For example, an ACL might only allow users to see incidents assigned to their group."
  },
  {
    id: 143, domain: "database-security", type: "single",
    question: "What is field-level security?",
    options: ["Encrypting field data", "ACLs that control read/write access to individual fields on a record", "Making fields mandatory", "Field validation rules"],
    correct: 1,
    explanation: "Field-level security uses ACLs to control which users can read or write specific fields on a record. This is more granular than table or record-level security."
  },
  {
    id: 144, domain: "database-security", type: "single",
    question: "An ACL rule has these components: Type, Operation, Name, and what else?",
    options: ["Script only", "Condition/Script and Role requirements", "Table schema", "Workflow"],
    correct: 1,
    explanation: "ACL rules consist of: Type (record/field), Operation (read/write/create/delete), Name (table.field), and the access criteria which include Conditions, Scripts, and Role requirements."
  },
  {
    id: 145, domain: "database-security", type: "single",
    question: "What is the 'admin' role special behavior regarding ACLs?",
    options: ["Admins must follow all ACLs", "The admin role bypasses all ACL checks by default", "Admin role only bypasses read ACLs", "There is no special behavior"],
    correct: 1,
    explanation: "By default, the admin role bypasses all ACL evaluations, granting full access to all data. This can be modified with the 'glide.security.strict' system property."
  },
  {
    id: 146, domain: "database-security", type: "single",
    question: "What is the purpose of the 'glide.security.strict' property?",
    options: ["To enable password complexity", "To require the admin role to pass ACL checks like other roles instead of bypassing them", "To enforce two-factor authentication", "To disable all security"],
    correct: 1,
    explanation: "When glide.security.strict is set to true, even users with the admin role must pass ACL checks rather than automatically bypassing them, providing tighter security."
  },
  {
    id: 147, domain: "database-security", type: "single",
    question: "What is the difference between 'Contains roles' and 'Role' on an ACL?",
    options: ["They are the same", "The Role field requires the user to have that role; Contains roles checks if the user has any of the listed roles", "Contains roles is for groups only", "Role is deprecated"],
    correct: 1,
    explanation: "The Role field on an ACL specifies which roles grant access. If multiple roles are listed, the user needs at least one. The 'Requires role' section defines the required roles for the ACL to grant access."
  },
  {
    id: 148, domain: "database-security", type: "single",
    question: "How can an administrator quickly see the ACLs applied to a specific field?",
    options: ["Check the system log", "Right-click the field label and select 'Security Policy' or use the Security Diagnosis tool", "Open the schema map", "Check the data dictionary"],
    correct: 1,
    explanation: "Right-clicking a field label provides access to security information. The Security Diagnosis tool (security_diagnosis.do) helps identify which ACLs are being evaluated for a specific resource."
  },
  {
    id: 149, domain: "database-security", type: "single",
    question: "What is the purpose of the User Administration module?",
    options: ["Managing database tables", "Creating, modifying, and deactivating user accounts, managing roles and groups", "Configuring system properties", "Building reports"],
    correct: 1,
    explanation: "User Administration modules allow administrators to create new user accounts, modify user properties, assign roles and groups, and deactivate users who no longer need access."
  },
  {
    id: 150, domain: "database-security", type: "single",
    question: "When should you deactivate a user account vs. deleting it?",
    options: ["Always delete accounts that are no longer needed", "Deactivate to preserve audit trails and historical data; deleting removes all associated records", "There is no difference", "Delete is recommended for compliance"],
    correct: 1,
    explanation: "User accounts should be deactivated rather than deleted to preserve audit trails, historical assignments, and data integrity. Deleting a user can orphan related records."
  },
  {
    id: 151, domain: "database-security", type: "multi",
    question: "Which of the following are valid field types in ServiceNow? (Choose two)",
    options: ["True/False", "Array", "Reference", "Hyperlink"],
    correct: [0, 2],
    explanation: "True/False (boolean) and Reference are valid ServiceNow field types. While ServiceNow has many field types (String, Integer, Date, etc.), 'Array' is not a standard field type."
  },
  {
    id: 152, domain: "database-security", type: "single",
    question: "What is a dictionary override?",
    options: ["Deleting a dictionary entry", "Changing inherited field attributes on a child table without affecting the parent table", "Overriding system properties", "A type of ACL"],
    correct: 1,
    explanation: "A dictionary override allows changing the attributes (default value, mandatory, read-only, etc.) of an inherited field on a child table without affecting the parent table's field definition."
  },
  {
    id: 153, domain: "database-security", type: "single",
    question: "What is the purpose of a CI relationship in the CMDB?",
    options: ["To define ACL rules", "To document how Configuration Items are connected (e.g., 'runs on', 'used by', 'depends on')", "To create import mappings", "To define user group membership"],
    correct: 1,
    explanation: "CI relationships document how configuration items are connected to each other, such as 'Application X runs on Server Y' or 'Service A depends on Database B'. This supports impact analysis."
  },
  {
    id: 154, domain: "database-security", type: "single",
    question: "What is the 'Elevated Privilege' (elevation) feature?",
    options: ["Granting admin role to all users", "Requiring users with security-sensitive roles to explicitly activate those roles for the current session", "A type of impersonation", "Automatic role assignment"],
    correct: 1,
    explanation: "Elevated Privilege requires users with certain sensitive roles (like security_admin) to explicitly activate the role elevation for their current session before using those privileges."
  },
  {
    id: 155, domain: "database-security", type: "single",
    question: "What is a data import source in ServiceNow?",
    options: ["A JavaScript data source", "A configured connection to external data (file, JDBC, LDAP, etc.) used to load data into import sets", "A type of table", "A report data source"],
    correct: 1,
    explanation: "A data source defines the connection to external data for import purposes. Sources can be files (CSV, Excel, XML), JDBC connections, LDAP directories, or other external systems."
  },
  {
    id: 156, domain: "database-security", type: "single",
    question: "What happens during the 'Preview' step of a data import?",
    options: ["Data is immediately imported", "The system shows a preview of how data will be mapped and transformed without actually modifying the target table", "A report is generated", "ACLs are validated"],
    correct: 1,
    explanation: "The Preview step shows how the imported data will map to the target table, including which records will be inserted vs. updated, without actually making any changes to the target table."
  },
  {
    id: 157, domain: "database-security", type: "single",
    question: "What is an onBefore transform script used for?",
    options: ["Running after the transform completes", "Executing custom logic before each row is transformed from the import set to the target table", "Validating ACLs", "Creating the import set"],
    correct: 1,
    explanation: "An onBefore transform script runs before each row is processed during transformation, allowing custom logic like data manipulation, validation, or conditional skipping of records."
  },
  {
    id: 158, domain: "database-security", type: "single",
    question: "What is the difference between the 'itil' and 'admin' roles?",
    options: ["They are the same", "itil provides access to ITSM applications (Incident, Problem, Change); admin provides full system administration access", "itil is more powerful than admin", "admin is for end users; itil is for administrators"],
    correct: 1,
    explanation: "The itil role provides access to ITSM applications like Incident, Problem, and Change Management. The admin role provides full system administration access including configuration and security."
  },
  {
    id: 159, domain: "database-security", type: "single",
    question: "How are groups used for assignment in ServiceNow?",
    options: ["Groups cannot be used for assignment", "Tasks can be assigned to groups, and group members can then individually pick up or be assigned the task", "Groups are only for email notifications", "Groups replace roles"],
    correct: 1,
    explanation: "Groups are commonly used as assignment targets for tasks. When a task is assigned to a group, any member of that group can claim or be assigned the task for resolution."
  },
  {
    id: 160, domain: "database-security", type: "single",
    question: "What is the purpose of the 'snc_internal' role?",
    options: ["It is assigned to external users", "It identifies internal ServiceNow platform users vs. external portal users", "It grants admin privileges", "It enables LDAP integration"],
    correct: 1,
    explanation: "The snc_internal role distinguishes internal platform users (who access the backend) from external users (who access only the Service Portal or other external interfaces)."
  },
  {
    id: 161, domain: "database-security", type: "single",
    question: "A field on a child table needs a different default value than the parent table. What should be used?",
    options: ["Edit the parent table field directly", "Create a dictionary override on the child table", "Create a new field with a different name", "Write a business rule"],
    correct: 1,
    explanation: "A dictionary override allows you to change field attributes (like default value) on a child table without affecting the parent table. This is the proper mechanism for this scenario."
  },
  {
    id: 162, domain: "database-security", type: "single",
    question: "What is the Application Scope in ServiceNow?",
    options: ["The number of users who can access an app", "A namespace that protects application resources and prevents naming conflicts between applications", "A security role", "The geographic region of an instance"],
    correct: 1,
    explanation: "Application Scope provides a namespace for applications, protecting their resources (tables, scripts, etc.) from unintended modifications by other applications and preventing naming conflicts."
  },
  {
    id: 163, domain: "database-security", type: "single",
    question: "What is the 'Number' field on task records?",
    options: ["The sys_id", "An auto-generated, human-readable identifier (e.g., INC0001234) configured with a Number Maintenance rule", "A manual entry field", "A reference to another table"],
    correct: 1,
    explanation: "The Number field is an auto-generated, human-readable identifier (like INC0001234 for incidents). The numbering pattern and prefix are configured through Number Maintenance rules."
  },
  {
    id: 164, domain: "database-security", type: "single",
    question: "What is the purpose of Before query business rules in the context of security?",
    options: ["To format query results", "To add encoded query conditions that restrict which records a user can see, providing row-level security", "To validate data before saving", "To log query performance"],
    correct: 1,
    explanation: "Before query business rules can append additional query conditions to restrict which records are returned, effectively implementing row-level security by filtering results based on user attributes."
  },
  {
    id: 165, domain: "database-security", type: "multi",
    question: "Which of the following are CMDB best practices? (Choose two)",
    options: ["Store all company data in the CMDB", "Follow the CSDM model for organizing CI data", "Keep CI relationships updated to support accurate impact analysis", "Give all users admin access to the CMDB"],
    correct: [1, 2],
    explanation: "CMDB best practices include following the CSDM model for data organization and keeping CI relationships current for accurate impact analysis. Not all company data belongs in the CMDB."
  },
  {
    id: 166, domain: "database-security", type: "single",
    question: "What is a choice list in ServiceNow?",
    options: ["A list view of records", "A predefined set of selectable values for a field (dropdown)", "A type of report", "A user selection tool"],
    correct: 1,
    explanation: "A choice list is a predefined set of values that appear as a dropdown for a field. Choices are defined in the sys_choice table and can be customized per table and field."
  },
  {
    id: 167, domain: "database-security", type: "single",
    question: "What is the purpose of the 'Active' field on user records?",
    options: ["To indicate if the user is currently logged in", "To control whether the user account is enabled (can log in) or disabled", "To show if the user has been recently active", "To track user activity hours"],
    correct: 1,
    explanation: "The Active field (true/false) on user records controls whether the account is enabled. Setting Active to false prevents the user from logging in without deleting the account."
  },
  {
    id: 168, domain: "database-security", type: "single",
    question: "How does table extension differ from table relationship?",
    options: ["They are the same thing", "Extension creates parent-child inheritance (shared fields); relationships link independent tables via reference fields", "Extension is for CMDB only", "Relationships require scripting"],
    correct: 1,
    explanation: "Table extension creates an inheritance hierarchy where the child inherits parent fields. Table relationships use reference fields to link records between independent tables without inheritance."
  },
  {
    id: 169, domain: "database-security", type: "single",
    question: "What field type would you use to allow users to select multiple values from a list?",
    options: ["Reference", "List (glide_list)", "String", "Choice"],
    correct: 1,
    explanation: "The List (glide_list) field type allows users to select multiple values, storing multiple references. A standard Choice field only allows a single selection."
  },
  {
    id: 170, domain: "database-security", type: "single",
    question: "What is the purpose of the cmdb_ci_server table?",
    options: ["It stores service catalog servers", "It stores Configuration Items that represent physical or virtual servers, extending cmdb_ci", "It stores user account information", "It stores server-side scripts"],
    correct: 1,
    explanation: "The cmdb_ci_server table extends cmdb_ci (the base CI table) and stores Configuration Items specifically representing physical or virtual servers with server-specific attributes."
  },

  // ========== DOMAIN 6: Data Migration & Integration / Scripting (30 questions) ==========
  {
    id: 171, domain: "migration-scripting", type: "single",
    question: "What is an Update Set in ServiceNow?",
    options: ["A set of data records to import", "A collection of configuration changes that can be moved between instances", "A type of backup", "A scripting framework"],
    correct: 1,
    explanation: "An Update Set captures configuration changes (customizations) made in one instance so they can be transferred to another instance, supporting the dev → test → prod promotion path."
  },
  {
    id: 172, domain: "migration-scripting", type: "single",
    question: "What is the process for moving an Update Set from development to test?",
    options: ["Copy the database", "Complete the update set in dev → Retrieve it in test → Preview → Commit", "Email the update set file", "Both instances share the same update set automatically"],
    correct: 1,
    explanation: "The process is: 1) Complete the update set in dev, 2) In the test instance, retrieve the update set from dev, 3) Preview to check for issues, 4) Commit to apply changes."
  },
  {
    id: 173, domain: "migration-scripting", type: "single",
    question: "What happens during the 'Preview' of an update set?",
    options: ["Changes are applied immediately", "The system checks for potential issues like conflicts, missing references, and collisions without applying changes", "A backup is created", "The update set is deleted"],
    correct: 1,
    explanation: "Preview analyzes the update set for potential problems such as conflicts with existing customizations, missing references, and collisions. No changes are applied during preview."
  },
  {
    id: 174, domain: "migration-scripting", type: "single",
    question: "What is an update set collision?",
    options: ["Two update sets with the same name", "When an update set tries to modify a record that has been changed in the target instance since the base version", "A database error", "Two users editing the same record"],
    correct: 1,
    explanation: "A collision occurs when an update set contains changes to a record that has also been modified in the target instance. The admin must resolve the collision by choosing which version to keep."
  },
  {
    id: 175, domain: "migration-scripting", type: "single",
    question: "What types of client scripts are available in ServiceNow?",
    options: ["Only onLoad", "onLoad, onChange, onSubmit, and onCellEdit", "Before, After, and Display", "Insert and Update"],
    correct: 1,
    explanation: "The four types of client scripts are: onLoad (when form loads), onChange (when a field value changes), onSubmit (when form is submitted), and onCellEdit (when a list cell is edited)."
  },
  {
    id: 176, domain: "migration-scripting", type: "single",
    question: "What is the GlideForm (g_form) API used for?",
    options: ["Querying database records", "Manipulating form fields on the client side (show/hide, mandatory, values, messages)", "Server-side data processing", "Creating tables"],
    correct: 1,
    explanation: "GlideForm (g_form) is a client-side API for interacting with the current form. It provides methods to get/set field values, show/hide fields, set mandatory/read-only, and display messages."
  },
  {
    id: 177, domain: "migration-scripting", type: "single",
    question: "Which g_form method is used to make a field mandatory?",
    options: ["g_form.setRequired('field_name')", "g_form.setMandatory('field_name', true)", "g_form.mandatory('field_name')", "g_form.setFieldMandatory('field_name')"],
    correct: 1,
    explanation: "g_form.setMandatory('field_name', true) makes a field mandatory on the form. Pass false as the second parameter to make it optional again."
  },
  {
    id: 178, domain: "migration-scripting", type: "single",
    question: "Which g_form method hides a field on the form?",
    options: ["g_form.hideField('field_name')", "g_form.setVisible('field_name', false)", "g_form.setDisplay('field_name', false)", "g_form.removeField('field_name')"],
    correct: 2,
    explanation: "g_form.setDisplay('field_name', false) hides a field from the form. setVisible controls visibility but keeps the field's space, while setDisplay completely removes it from view."
  },
  {
    id: 179, domain: "migration-scripting", type: "single",
    question: "What is the GlideUser (g_user) API?",
    options: ["A server-side user management API", "A client-side API that provides information about the currently logged-in user", "A form manipulation API", "A database query API"],
    correct: 1,
    explanation: "GlideUser (g_user) is a client-side API that provides information about the current user, such as their name, user ID, roles, and whether they have specific roles."
  },
  {
    id: 180, domain: "migration-scripting", type: "single",
    question: "Which g_user method checks if the current user has a specific role?",
    options: ["g_user.getRole('role_name')", "g_user.hasRole('role_name')", "g_user.checkRole('role_name')", "g_user.isRole('role_name')"],
    correct: 1,
    explanation: "g_user.hasRole('role_name') returns true if the currently logged-in user has the specified role. Note: users with 'admin' role will return true for any role check."
  },
  {
    id: 181, domain: "migration-scripting", type: "single",
    question: "What is a Business Rule in ServiceNow?",
    options: ["A client-side script", "A server-side script that executes when records are queried, inserted, updated, or deleted", "A UI action", "A workflow activity"],
    correct: 1,
    explanation: "A Business Rule is a server-side script that runs when records are displayed, queried, inserted, updated, or deleted. They automate processes and enforce business logic on the server."
  },
  {
    id: 182, domain: "migration-scripting", type: "single",
    question: "When does a 'before' business rule execute?",
    options: ["After the record is saved to the database", "Before the record is saved to the database, allowing modification of values before they are written", "When the form is loaded in the browser", "After the form is submitted but before the server processes it"],
    correct: 1,
    explanation: "A 'before' business rule executes before the database operation (insert/update). This allows you to modify field values before they are committed to the database."
  },
  {
    id: 183, domain: "migration-scripting", type: "single",
    question: "When does an 'after' business rule execute?",
    options: ["After the form loads", "After the record has been saved to the database", "After a client script runs", "After the form is submitted but before saving"],
    correct: 1,
    explanation: "An 'after' business rule executes after the database operation is complete. It's useful for actions that depend on the record being saved, like creating related records or sending notifications."
  },
  {
    id: 184, domain: "migration-scripting", type: "single",
    question: "What is a 'display' business rule?",
    options: ["A rule that controls form layout", "A business rule that runs when a form is loaded, before it is displayed to the user, to prepare data", "A rule that controls field display", "A CSS rule for forms"],
    correct: 1,
    explanation: "A 'display' business rule runs when a record's form is loaded (before display). It can pass data to the client via g_scratchpad, but cannot modify the record in the database."
  },
  {
    id: 185, domain: "migration-scripting", type: "single",
    question: "What is the purpose of g_scratchpad in a display business rule?",
    options: ["Temporary data storage on the server", "A mechanism to pass server-side data to client scripts without additional AJAX calls", "A debugging tool", "A form field buffer"],
    correct: 1,
    explanation: "g_scratchpad allows display business rules to pass data from the server to client scripts. Data set on g_scratchpad server-side is available in client scripts, avoiding extra server calls."
  },
  {
    id: 186, domain: "migration-scripting", type: "single",
    question: "What is an async business rule?",
    options: ["A rule that runs in the user's browser", "A business rule that runs after the transaction in a separate thread, not blocking the user", "A rule that runs before the transaction", "A rule that only runs on queries"],
    correct: 1,
    explanation: "An async (asynchronous) business rule runs in a separate thread after the database transaction completes. It doesn't block the user's transaction, making it suitable for long-running operations."
  },
  {
    id: 187, domain: "migration-scripting", type: "single",
    question: "What is a UI Policy and how does it differ from a client script?",
    options: ["They are identical", "A UI Policy is a no-code way to set field attributes (mandatory, visible, read-only) based on conditions; a client script requires JavaScript", "UI Policies run on the server; client scripts run on the client", "Client scripts are no-code; UI Policies require scripting"],
    correct: 1,
    explanation: "UI Policies provide a no-code interface to dynamically change form field attributes (mandatory, visible, read-only) based on conditions. Client scripts achieve similar goals but require JavaScript code."
  },
  {
    id: 188, domain: "migration-scripting", type: "single",
    question: "What is GlideRecord?",
    options: ["A client-side form API", "A server-side JavaScript API for querying, inserting, updating, and deleting records in the database", "A type of business rule", "A reporting API"],
    correct: 1,
    explanation: "GlideRecord is the primary server-side JavaScript API for database operations. It provides methods to query records, iterate results, and perform CRUD operations on any table."
  },
  {
    id: 189, domain: "migration-scripting", type: "single",
    question: "Which GlideRecord method executes a query and retrieves matching records?",
    options: ["gr.get()", "gr.query()", "gr.find()", "gr.search()"],
    correct: 1,
    explanation: "gr.query() executes the constructed query and retrieves matching records. Results are then iterated using gr.next(). gr.get() retrieves a single record by sys_id."
  },
  {
    id: 190, domain: "migration-scripting", type: "single",
    question: "What does gr.addQuery('priority', '1') do in a GlideRecord script?",
    options: ["Sets the priority field to 1", "Adds a filter condition to only return records where priority equals 1", "Creates a new record with priority 1", "Deletes records with priority 1"],
    correct: 1,
    explanation: "addQuery adds a filter condition to the GlideRecord query. gr.addQuery('priority', '1') restricts results to records where the priority field equals 1."
  },
  {
    id: 191, domain: "migration-scripting", type: "single",
    question: "What is a Script Include?",
    options: ["A client-side script library", "A reusable server-side JavaScript class/function that can be called from business rules, flows, and other server scripts", "A type of UI action", "An import script"],
    correct: 1,
    explanation: "A Script Include is a reusable server-side JavaScript class or function. They are loaded on demand and can be called from business rules, scheduled jobs, flows, and other server-side scripts."
  },
  {
    id: 192, domain: "migration-scripting", type: "single",
    question: "What does the 'Client callable' checkbox on a Script Include do?",
    options: ["Makes the script run on the client", "Allows the Script Include to be called from client scripts via GlideAjax", "Makes it available in UI Policies", "Enables it to run as a scheduled job"],
    correct: 1,
    explanation: "Checking 'Client callable' allows client-side scripts to call the Script Include through GlideAjax, enabling asynchronous server-side operations triggered from the browser."
  },
  {
    id: 193, domain: "migration-scripting", type: "multi",
    question: "Which of the following are valid operations in a 'before' business rule? (Choose two)",
    options: ["Modify the current record's field values before save", "Delete unrelated records", "Abort the transaction using current.setAbortAction(true)", "Query external REST APIs synchronously"],
    correct: [0, 2],
    explanation: "Before business rules commonly modify field values before save and can abort the transaction using current.setAbortAction(true). While you can do other operations, these are the primary use cases."
  },
  {
    id: 194, domain: "migration-scripting", type: "single",
    question: "What is the 'current' object in a business rule?",
    options: ["The currently logged-in user", "A GlideRecord object representing the record being processed by the business rule", "The current form view", "The current application scope"],
    correct: 1,
    explanation: "In a business rule, 'current' is a GlideRecord object representing the record that triggered the business rule. You can read and modify its fields."
  },
  {
    id: 195, domain: "migration-scripting", type: "single",
    question: "What is the 'previous' object in a business rule?",
    options: ["The record before the current one in a list", "A read-only GlideRecord containing the record's values before the current update", "The previous version of the business rule", "The parent record"],
    correct: 1,
    explanation: "The 'previous' object contains the record's field values before the current update. It's useful for comparing old vs. new values to determine what changed."
  },
  {
    id: 196, domain: "migration-scripting", type: "single",
    question: "Which g_form method retrieves the value of a field?",
    options: ["g_form.getField('field_name')", "g_form.getValue('field_name')", "g_form.readField('field_name')", "g_form.get('field_name')"],
    correct: 1,
    explanation: "g_form.getValue('field_name') returns the current value of the specified field on the form. For reference fields, it returns the sys_id."
  },
  {
    id: 197, domain: "migration-scripting", type: "single",
    question: "What is the REST API used for in ServiceNow?",
    options: ["Resetting user passwords", "Enabling external systems to interact with ServiceNow data and functionality via HTTP", "Running server-side scripts", "Managing update sets"],
    correct: 1,
    explanation: "The REST API allows external systems to interact with ServiceNow using standard HTTP methods (GET, POST, PUT, DELETE) to query, create, update, and delete records."
  },
  {
    id: 198, domain: "migration-scripting", type: "single",
    question: "What is Integration Hub in ServiceNow?",
    options: ["A network monitoring tool", "A central place to build, manage, and monitor integrations with external systems using spokes and flows", "A database integration tool", "A type of CMDB"],
    correct: 1,
    explanation: "Integration Hub provides a centralized platform for building and managing integrations with external systems. It uses spokes (integration packages) and Flow Designer for no-code integration."
  },
  {
    id: 199, domain: "migration-scripting", type: "single",
    question: "When should you use a UI Policy instead of a client script?",
    options: ["Always use client scripts", "When you need simple field attribute changes (mandatory, visible, read-only) without writing code", "When you need to query the server", "When you need to modify database records"],
    correct: 1,
    explanation: "UI Policies are preferred for simple, no-code field attribute changes. Client scripts should be used when more complex logic, server calls (GlideAjax), or custom behaviors are needed."
  },
  {
    id: 200, domain: "migration-scripting", type: "single",
    question: "What is the execution order of client scripts and UI policies on form load?",
    options: ["Client scripts first, then UI Policies", "UI Policies first, then onLoad client scripts", "They run simultaneously", "onLoad client scripts run first, then UI Policies are applied"],
    correct: 3,
    explanation: "On form load, onLoad client scripts execute first, then UI Policies are applied. This means UI Policies can override changes made by onLoad client scripts."
  }
];
