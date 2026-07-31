export interface SkillGroup {
    category: string;
    items: string[];
}

export const skills: SkillGroup[] = [
    {
        category: "Languages",
        items: ["Kotlin", "Java", "Swift", "SQL", "HTML", "CSS"],
    },
    {
        category: "Frameworks & Libraries",
        items: ["Android SDK", "Spring Boot", "Kotlin Multiplatform", "SpriteKit", "Astro", "Microsoft SQL Server", "PostgreSQL"],
    },
    {
        category: "Tools",
        items: ["Android Studio", "IntelliJ IDEA", "Xcode", "Civil3D", "AutoCAD", "Excel"]
    }
];