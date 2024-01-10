# API Endpoints
## GET /question/:id
- Retrieve a specific quiz question by providing its index.

Example:

- curl http://localhost:3000/question/0
## To Get the answer send a post request with the question number
POST /answer/:id
Submit an answer to a specific quiz question. The answer should be sent in the request body.
### Example:
curl -X POST -H "Content-Type: application/json" -d '{"answer": 1}' http://localhost:3000/answer/0
Answer Validation
{
  "correct": true,
  "message": "Correct answer!"
}
Error Handling
If a requested question is not found, the API will respond with a 404 status and an error message.
