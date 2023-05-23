## MongoDB_Assignment

#### Info of all routes of the project

| Route | HTTP Verb | POST body | Description |
| ----- | --------- | --------- | ----------- |

### Task 1: Create a MongoDB model with an interface and schema for a "Book" collection that stores fields like title, author, genre, publication year, rating, price, and nested fields like "publisher" and "reviews". All the fields would be required.

Answer: added the model in the ./models/books folder

### Task 2: Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy"

`router.get("/:genre", getBooksByGenre);`
`http://localhost:4321/api/v1/book/Fantasy`

### Task 3: Implement a MongoDB query to find books in the "Books" collection with a specific genre “Sci-Fi” and published by “Roli Books”.

`router.get("/author/fixed", getBooksByGenreAndPublisher);`
`http://localhost:4321/api/v1/book/author/fixed`

### Task 4: "Create a static method within the 'Book' model or write a query function to retrieve books from the 'Books' collection that have a rating equal to or higher than 4."

`router.get("/rating/static", getBooksByRating);`
`http://localhost:4321/api/v1/book/rating/static`

### Task 5: In the existing book data, some books have their prices stored as strings instead of integers. To ensure consistent data representation, you are required to update the prices of all books from string format to integer format using a MongoDB update query. However, to limit the scope of the update and ensure data accuracy, the prices should be updated only for books published after 2020.

#### it is working in nosqlbooster

```ts
db.books.updateMany(
  {
    publicationYear: { $gt: 2020 }, // Filter books published after 2020
    price: { $type: "string" }, // Filter books with price stored as string
  },
  [
    {
      $set: {
        price: {
          $cond: {
            if: { $: ["$publicationYear", 2020] },
            then: { $toInt: "$price" },
            else: "$price",
          },
        },
      },
    },
  ]
);
```

### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

#### Answer:

- The purpose of creating a model with an interface and schema in MongoDB is to define the structure of a collection. It helps in defining the structure of a collection by defining the types of the fields, the default values of the fields, and the validation of the fields. It also helps in defining the methods of the collection.

### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

#### Answer:

- The concept of field filtering in MongoDB is to specify which fields to include or exclude in the returned documents. You can specify which fields to include or exclude in the returned documents by using the `select()` method. The `select()` method takes a string of field names to include or exclude in the returned documents. The `select()` method can also take an object of field names to include or exclude in the returned documents.

### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

#### Answer:

- Instance methods in MongoDB models are methods that are defined on the model's prototype. They are called on the model's instances. An example of a custom instance method is the `getFullName()` method. The `getFullName()` method returns the full name of the user.

### Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

#### Answer:

- You can use comparison operators like `$ne`, `$gt`, `$lt`, `$gte`, and `$lte` in MongoDB queries by using the `find()` method. The `find()` method takes a query object as an argument. The query object contains the comparison operators. The comparison operators are used to compare the values of the fields :

```ts
1. `"$ne" (not equal):` db.books.find({ price: { $ne: 10 } });
2. `"$gt" (greater than):` db.books.find({ price: { $gt: 10 } });
3. `"$lt" (less than):` db.books.find({ price: { $lt: 10 } });
4. `"$gte" (greater than or equal to):` db.books.find({ price: { $gte: 10 } });
5. `"$lte" (less than or equal to):` db.books.find({ price: { $lte: 10 } });
```

### Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

#### Answer:

- MongoDB's `$in` and `$nin` operators are used to match values against an array of values or exclude values from a given array. You can use them to match values against an array of values or exclude values from a given array by using the `find()` method. The `find()` method takes a query object as an argument. The query object contains the `$in` and `$nin` operators. The `$in` operator matches values against an array of values. The `$nin` operator excludes values from a given array.
