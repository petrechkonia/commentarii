export interface Book {
    title: string;
    author: string;
}

export interface YearGroup {
    year: string;
    books: Book[];
}

export const readBooks: YearGroup[] = [
    {
        year: "Now Reading",
        books: [
            { title: "Functional Programming in Scala", author: "Michael Pilquist" },
            { title: "The Innovators", author: "Walter Isaacson" },
        ]
    },
    {
        year: "2026",
        books: [
            { title: "The Joy of Kotlin", author: "Pierre-Yves Saumont" },
            { title: "How to Win Friends and Influence People", author: "Dale Carnegie" },
        ]
    },
    {
        year: "2025",
        books: [
            { title: "Effective Java", author: "Joshua Bloch" },
            { title: "Never Split The Difference", author: "Chris Voss" },
            { title: "Spring in Action", author: "Craig Walls" },
            { title: "Spring Start Here", author: "Laurentiu Spilca" },
            { title: "Atomic Habits", author: "James Clear" },
            { title: "The Pragmatic Programmer", author: "David Thomas, Andrew Hunt" },
            { title: "Jetpack Compose by Tutorials", author: "Kodeco Team" },
            { title: "Kotlin Coroutines by Tutorials", author: "Kodeco Team" },
        ]
    },
    {
        year: "2024",
        books: [
            { title: "Android Apprentice", author: "Kodeco Team" },
            { title: "Kotlin Apprentice", author: "Kodeco Team" },
            { title: "Apple Game Frameworks and Technologies", author: "Tammy Coron" },
            { title: "Swift Apprentice", author: "Kodeco Team" },
        ]
    },
]