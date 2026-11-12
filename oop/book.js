export class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.title = title; // these call the setters below,
        this.author = author; // so validation runs on creation too
        this.year = year;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Title must be a non-empty string");
        }
        this.#title = value.trim();
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author must be a non-empty string");
        }
        this.#author = value.trim();
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (!Number.isInteger(value) || value < 0 || value > currentYear) {
            throw new Error(`Year must be a whole number from 0 to ${currentYear}`);
        }
        this.#year = value;
    }

    printInfo() {
        console.log(`"${this.title}" by ${this.author}, published in ${this.year}`);
    }

    static findOldest(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error("Expected a non-empty array of books");
        }
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}
