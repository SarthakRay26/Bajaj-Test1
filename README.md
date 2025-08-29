# BFHL API

REST API built with Node.js and Express for processing array data according to Bajaj requirements.

## Features

- Processes input arrays and categorizes elements
- Returns odd/even numbers, alphabets, special characters
- Calculates sum of numeric values
- Creates concatenated string with alternating case in reverse order
- Handles errors gracefully

## API Endpoints

### POST /bfhl
Main processing endpoint that accepts an array and returns categorized data.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "sarthak_ray_26042002",
  "email": "sarthak.ray@example.com",
  "roll_number": "21BCE0001",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /bfhl
Returns operation code.

**Response:**
```json
{
  "operation_code": 1
}
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## Testing

You can test the API using curl:

```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R","$"]}'
```

## Deployment

This API can be deployed to various platforms:
- Vercel
- Railway
- Render
- Heroku
- Any Node.js hosting provider

Make sure to set the PORT environment variable appropriately for your hosting platform.

## Project Structure

```
bajaj-bfhl-api/
├── server.js          # Main application file
├── package.json       # Dependencies and scripts
├── README.md          # This file
└── instructions.txt   # Original requirements
```
