// Practice exercise one
// Task: Movie Collection Tracker  
// 1. Create an object `movie` with properties: `title`, `director`, `releaseYear`, and `rating`  
function movieCollectionTracker() {
    let movie = {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        rating: 9,

        // 2. Add a method `getSummary()` that returns a string 

        getSummary() {
            return (`"${this.title} (${this.releaseYear}), directed by ${this.title}, rated ${this.rating}/10"`)
        }
    };
    console.log("Summary:", movie.getSummary());

    // 3. Add a new property `isWatched` and update it to `true`
    movie.isWatched = true;
    console.log("Updated movie:", movie)

    // Challenge:
    // Create an array of at least 3 movies and write a function to display only the movies with `rating ≥ 8`.

    let movies = [
        {
            title: "To kill a monkey",
            director: "Kemi Adetiba",
            releaseYear: 2025,
            rating: 7.8
        },
        {
            title: "The Shawshank Redemption",
            director: "Darabont",
            releaseYear: 1994,
            rating: 9.3
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            releaseYear: 2008,
            rating: 9.4
        },
        {
            title: "Ferrari",
            director: "Micheal Mann",
            releaseYear: 2023,
            rating: 5.4

        }
    ];

    console.log("All movies:", movies);

    // Display each movie
    console.log("Movie list:");
    for (let movie of movies) {
    console.log(`${movie.title}: ${movie.director}; ${movie.releaseYear}; ${movie.rating}`)
    };


    let higherRating = [];

    for (let movie of movies) {
        if (movie.rating >= 8) {
            higherRating.push(movie);
        }
    }

    console.log("High ratings (>=8):");
    for (let movie of higherRating) {
        console.log(` ${movie.title}: ${movie.rating}`);
    }
}

// Practice exercise two
// 1. Create a cart item object with a method
function onlineShoppingCart() {
    const cartItem = {
    name: "Mouse",
    price: 1249.99,
    quantity: 2,
    getTotal() {
        return this.price * this.quantity;
    }
    };

    console.log(`${cartItem.name}: ₦${cartItem.getTotal()}`);


    // Create an array with multiple cart items
    const cart = [
    {
        name: "Mouse",
        price: 1249.99,
        quantity: 2,
        getTotal() {
        return this.price * this.quantity;
        }
    },
    {
        name: "Keyboard",
        price: 7999.99,
        quantity: 1,
        getTotal() {
        return this.price * this.quantity;
        }
    },
    {
        name: "USB Cable",
        price: 12000.50,
        quantity: 3,
        getTotal() {
        return this.price * this.quantity;
        }
    }
    ];

    // Function to calculate the total for all items in the cart
    function getCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].getTotal();
    }
    return total;
    }

    // Display the cart details
    console.log("Shopping Cart:");

    for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    console.log(`${item.name} - ₦${item.price} × ${item.quantity} = ₦${item.getTotal().toFixed(2)}`);
    }

    console.log(`Total: ₦${getCartTotal(cart).toFixed(2)}`);
}

// Practice Exercise 3 - Library Membership System 
function libraryMembershipSystem() {
    //  Create an object member with properties: name, membershipType (basic, premium), and borrowedBooks(array)  
    const member = {
    name: "Alabi Peter",
    membershipType: "premium",
    borrowedBooks: [],
    
    //Add a method borrowBook(book) that pushes a book into borrowedBooks  
    borrowBook(book) {
        this.borrowedBooks.push(book);
        console.log(`"${book}" has been borrowed by ${this.name}`);
    },
    
    // Add a method getBorrowedCount() that returns how many books the member has borrowed  
    getBorrowedCount() {
        return this.borrowedBooks.length;
    },
    
    // 4. Add a method getMembershipInfo() that returns a message based on membership type
    getMembershipInfo() {
        if (this.membershipType === "premium") {
        return `${this.name} is a PREMIUM member and can borrow as many times as possible!`;
        } else if (this.membershipType === "basic") {
        return `${this.name} is a BASIC member and can borrow up to 3 books at a time.`;
        } else {
        return `${this.name} has an unknown membership type.`;
        }
    }
    };

    // Check membership
    console.log("Library Membership System");
    console.log("-------------------------");
    console.log(member.getMembershipInfo());
    console.log();

    member.borrowBook("Harry Potter");
    member.borrowBook("The lord of the rings");
    member.borrowBook("Things fall apart");
    member.borrowBook("Independence")
    console.log("");

    // Check borrowed count
    console.log(`Total books borrowed: ${member.getBorrowedCount()}`);
    console.log(`Books: ${member.borrowedBooks.join(", ")}`);
    console.log();
}