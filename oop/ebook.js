import { Book } from "./Book.js";

export class EBook extends Book {
    #fileFormat;

    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this.#fileFormat;
    }

    set fileFormat(value) {
        const allowed = ["PDF", "EPUB", "MOBI", "FB2", "TXT"];
        if (typeof value !== "string" || !allowed.includes(value.toUpperCase())) {
            throw new Error(`File format must be one of: ${allowed.join(", ")}`);
        }
        this.#fileFormat = value.toUpperCase();
    }

    printInfo() {
        console.log(`"${this.title}" by ${this.author}, published in ${this.year}, format: ${this.fileFormat}`);
    }

    static fromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error("First argument must be a Book instance");
        }
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}