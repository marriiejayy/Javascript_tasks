// Practice exercise one
// Task: Movie Collection Tracker  

// Requirements:
// 1. Create an object `movie` with properties: `title`, `director`, `releaseYear`, and `rating`  
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


// Practice exercise two
let cartItems = {
    name 

    

}