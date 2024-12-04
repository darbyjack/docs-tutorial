export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: "",
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <p>Prepared by: [Your Name]</p>
            <p>Company: [Your Company Name]</p>
            <h2>Overview</h2>
            <p>[Add a brief overview of the project and goals]</p>
            <h2>Scope of Work</h2>
            <p>[Detail the scope of work to be completed]</p>
            <h2>Timeline</h2>
            <p>[Specify the project timeline]</p>
            <h2>Budget</h2>
            <p>[Provide a budget estimate]</p>
        `,
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <p>Prepared by: [Your Name]</p>
            <h2>Introduction</h2>
            <p>[Introduce the project and its objectives]</p>
            <h2>Goals</h2>
            <ul>
                <li>[Goal 1]</li>
                <li>[Goal 2]</li>
                <li>[Goal 3]</li>
            </ul>
            <h2>Expected Outcomes</h2>
            <p>[Describe the expected outcomes]</p>
            <h2>Budget and Resources</h2>
            <p>[Outline the budget and resources required]</p>
        `,
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>
            <p>[Recipient Name]</p>
            <p>[Recipient Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>Dear [Recipient Name],</p>
            <p>[Start your letter here. Be concise and professional.]</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `,
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>[Your Name]</h1>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Phone Number]</p>
            <p>[Email Address]</p>
            <h2>Objective</h2>
            <p>[Write a brief career objective]</p>
            <h2>Experience</h2>
            <h3>[Job Title]</h3>
            <p>[Company Name]</p>
            <p>[Dates of Employment]</p>
            <p>[Job description and achievements]</p>
            <h2>Education</h2>
            <p>[Your Degree]</p>
            <p>[School Name]</p>
            <p>[Year Graduated]</p>
            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
            </ul>
        `,
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>
            <p>[Recipient Name]</p>
            <p>[Recipient Title]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>Dear [Recipient Name],</p>
            <p>I am writing to express my interest in the [Job Title] position at [Company Name].</p>
            <p>[Write the body of your cover letter, explaining your qualifications and enthusiasm for the role.]</p>
            <p>Thank you for considering my application. I look forward to the opportunity to discuss my candidacy further.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `,
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>
            <p>[Recipient Name]</p>
            <p>[Recipient Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>Dear [Recipient Name],</p>
            <p>[Write your letter content here.]</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `,
    },
];