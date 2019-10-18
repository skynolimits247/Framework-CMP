let rentalMovies = [
    {
      "Title":`Crazy, Stupid, Love.`,
      "ProductId":11,
      "Quantity":1,
      "TotalPrice": 19.99,
      "UserId":22
    },
    {
        "Title":`Dr. Strangelove`,
        "ProductId":19,
        "Quantity":1,
      "TotalPrice": 19.99,
        "UserId":22
     },
    {
      "Title":`Love Actually`,
      "ProductId":"2003",
      "Quantity":1,
      "TotalPrice": 19.99,
        "UserId":22
      },
      {
        "Title":`Shakespeare in Love`,
        "ProductId":"1998",
        "Quantity":2,
       "TotalPrice": 40.00,
        "UserId":22
      }
    ];
const fetchCart = () => {
        return rentalMovies;
};

export default fetchCart;