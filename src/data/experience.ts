
export interface WorkExperience {
    company: string;
    role: string;
    location?: string;
    startDate: string;
    endDate?: string;
    highlights: string[];
    tech?: string[];
}

export const experience: WorkExperience[] = [
    {
        company: "TBC",
        role: "Android Developer",
        location: "Tbilisi, Georgia (Hybrid)",
        startDate: "2025-07",
        endDate: "2026-04",
        highlights: [
            "Member of the Currency Transfers in Digital team, developed and maintained features for Retail and Business mobile banking apps in an Agile environment",
            "Developed a highly anticipated international transfers feature for the retail mobile app",
            "Collaborated with the Open Banking team to replace a webview-based feature with a fully native implementation, improving user experience",
            "Supported the Domestic Transfers team by developing the recipient selection page and contributing to the unified transfers flow, including error handling and a status-page widget",
            "Contributed as part of the team that achieved Continuous Deployment and High Availability certification (2025)",
            "Improved the overall technical health of the codebase",
        ],
        tech: ["Kotlin", "Android Development", "Agile"],
    },
    {
        company: "Domus Fabrilis",
        role: "Junior Civil Engineer",
        location: "Bakhvi, Georgia",
        startDate: "2024-06",
        endDate: "2024-09",
        highlights: [
            "Worked on one of the most challenging construction projects in Georgia, due to the rugged, remote wilderness terrain",
            "Represented the contractor side of a 3-hydropower-plant project, 2 of which fell under the contractor's scope of responsibility",
            "One of only two engineers on the contractor's team",
            "Introduced an efficient block-casting strategy, later used to build the on-site concrete factory",
            "Conducted steel shed surveying and earthwork calculations to level the site surface using Civil 3D",
            "Performed excavation and backfill calculations for penstock works in Civil 3D and prepared AIPs",
            "Contributed to establishing conventions and templates for construction and earthwork drawings, as well as Excel-based documentation",
            "Departed shortly after initial concrete works began, to pursue a newfound interest in programming",
        ],
        tech: ["Civil3D", "Surveying", "Earthworks"],
    },
];