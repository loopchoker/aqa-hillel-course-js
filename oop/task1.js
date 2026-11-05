import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

// --- 1. Book instances and printInfo ---
const book1 = new Book("Kobzar", "Taras Shevchenko", 1840);
const book2 = new Book("Forest Song", "Lesia Ukrainka", 1911);
const book3 = new Book("1984", "George Orwell", 1949);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// --- 2. EBook instance and printInfo ---
const ebook1 = new EBook("Eneida", "Ivan Kotliarevskyi", 1798, "PDF");
ebook1.printInfo();

// --- 3. Getters and setters ---
console.log(book2.title);          // getter

book2.year = 1912;                 // setter, valid value
console.log(book2.year);

try {
    book2.year = "long ago";       // setter, invalid value
} catch (error) {
    console.log("Error:", error.message);
}

ebook1.fileFormat = "epub";        // setter, valid value
console.log(ebook1.fileFormat);

try {
    ebook1.fileFormat = "DOCX";    // setter, invalid value
} catch (error) {
    console.log("Error:", error.message);
}

// --- 4. Static method: oldest book (Book and EBook mixed) ---
const oldest = Book.findOldest([book1, book2, book3, ebook1]);
console.log("Oldest book:");
oldest.printInfo();

// --- 5. Static method: Book → EBook ---
const converted = EBook.fromBook(book3, "fb2");
converted.printInfo();
console.log(converted instanceof EBook);  // true