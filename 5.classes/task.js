/*Задача 1. Печатное издание

Нужно помочь перевести небольшую районную библиотеку в современный цифровой формат. Начнём с реализации нескольких классов:

классы печатных изданий — книг, журналов;
класс библиотеки, который позволит работать с печатными изданиями: хранить их, выдавать читателям, принимать обратно.*/

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	};

	fix() {
		this.state = 1.5 * this.state
	};

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	};

	get state() {
		return this._state;
	}
};

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
};

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
};

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	};
};

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	};
};

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	};
};


/*Задача 2. Библиотека
Теперь с помощью классов можно описать все возможные печатные издания, которые бывают в библиотеке.
Пришло время подготовить саму библиотеку к работе в цифровом режиме — реализовать возможность хранить книги, выдавать их читателям и принимать обратно.*/

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	};

	addBook(book) {
		if (book.state > 30) {
		    this.books.push(book);
		}
	};

	findBookBy(type, value) {
        let result = null;
        for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				result = this.books[i]
			};
		};
        return result;
    };

    giveBookByName(bookName) {
        let result = null;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
				result = this.books[i];
                this.books.splice([i], 1);                
            }
        }
        return result;	
    };
};


/*Задача 3. Журнал успеваемости *
Мы продолжаем совершенствовать журнал успеваемости студентов. Нужно преобразовать код прошлого ДЗ к классам.*/

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	};

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		};
		if (!this.marks[subject]) {
			this.marks[subject] = [];
		};
		this.marks[subject].push(mark);
	};

	getAverageBySubject(subject) {
		if (!this.marks[subject] || this.marks[subject].length === 0) {
			return 0;
		};
		let sum = this.marks[subject].reduce((a, b) => a + b, 0);
		return sum / this.marks[subject].length;
	};

	getAverage() {
		if (Object.keys(this.marks).length === 0) {
			return 0;
		};
		let sum = 0;
		let count = 0;
		for (let element in this.marks) {
			sum += this.getAverageBySubject(element);
			count++;
		};
		return sum / count;
	};
};