import express from 'express';
const app = express();
app.use(express.static('dist'))

//  app.get('/', (req, res) => {
//     res.send('server is running')
//  })

 app.get('/api/jokes' , (req, res) => {
    const jokes = [
        {
            "id": 1,
            "name": "John Doe",
            "age": 18,
            "grade": 12,
            "subjects": ["Mathematics", "Physics", "English"]
          },
          {
            "id": 2,
            "name": "Jane Smith",
            "age": 17,
            "grade": 11,
            "subjects": ["Chemistry", "Biology", "History"]
          },
          {
            "id": 3,
            "name": "Bob Johnson",
            "age": 19,
            "grade": 12,
            "subjects": ["Computer Science", "Spanish", "Art"]
          }
    ];
    res.send(jokes)
 })

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Ser at http://localhost:${port}`)
});