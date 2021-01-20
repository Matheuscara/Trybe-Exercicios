db.movies.updateOne(
  { "title": "Home Alone" },
  {
    $push: {
      "cast": {
        $each: [
          {
            "actor": "Macaulay Colkin",
            "character": "Kevin"
          },
          {
            "actor": "Joe Pesci",
            "character": "Harry"
          },
          {
            "actor": "Daniel Stern"
          }
        ]
      }
    }
  }
);
