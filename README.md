# API Endpoints
## GET /question/:id
- Retrieve a specific quiz question by providing its id.

Example:
## To Get the answer send a post request with the question number
POST /answer/:id
Submit an answer to a specific quiz question. The answer should be sent in the request body.
### Example:
Answer Validation
{
  "correct": true,
  "message": "Correct answer!"
}
### Error Handling
If a requested question is not found, the API will respond with a 404 status and an error message.
