const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to categorize array elements
function processData(data) {
    const result = {
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: 0
    };

    let alphabetChars = [];

    data.forEach(item => {
        const str = String(item);
        
        // Check if it's a number
        if (!isNaN(str) && !isNaN(parseFloat(str))) {
            const num = parseInt(str);
            result.sum += num;
            
            if (num % 2 === 0) {
                result.even_numbers.push(str);
            } else {
                result.odd_numbers.push(str);
            }
        }
        // Check if it's alphabetic
        else if (/^[a-zA-Z]+$/.test(str)) {
            result.alphabets.push(str.toUpperCase());
            // Store individual characters for concatenation
            for (let char of str) {
                alphabetChars.push(char);
            }
        }
        // Everything else is special character
        else {
            result.special_characters.push(str);
        }
    });

    // Create concatenation string in reverse order with alternating caps
    const concatString = createConcatString(alphabetChars);
    
    return {
        ...result,
        sum: result.sum.toString(),
        concat_string: concatString
    };
}

// Helper function to create concatenated string in reverse order with alternating caps
function createConcatString(alphabetChars) {
    if (alphabetChars.length === 0) return "";
    
    // Reverse the array
    const reversed = alphabetChars.reverse();
    
    // Apply alternating caps - start with uppercase (index 0 = uppercase, index 1 = lowercase)
    let result = "";
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) {
            result += reversed[i].toUpperCase();
        } else {
            result += reversed[i].toLowerCase();
        }
    }
    
    return result;
}

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input: 'data' must be an array"
            });
        }

        // Process the data
        const processedData = processData(data);
        
        // Build response
        const response = {
            is_success: true,
            user_id: "sarthak_ray_26042002", // Replace with your actual details
            email: "sarthak.ray@example.com", // Replace with your actual email
            roll_number: "21BCE0001", // Replace with your actual roll number
            ...processedData
        };

        res.status(200).json(response);
        
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// GET /bfhl endpoint (optional, for testing)
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoints: {
            "POST /bfhl": "Main processing endpoint",
            "GET /bfhl": "Operation code endpoint"
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
