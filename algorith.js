function analyzeSentence(input) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    // Iterate over each character in the sentence
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        // Increment sentence length
        sentenceLength++;
        
        // Check if the character is a vowel
        if ('aeiouAEIOU'.includes(char)) {
            vowelCount++;
        }
        
        // Check for word count based on spaces
        if (char === ' ') {
            wordCount++;
        }
    }
    
    // Adjust word count (add one for the last word after the last space)
    wordCount++;
    
    // Output results
    console.log(`Length of the sentence: ${sentenceLength}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

// Example input for testing
let inputSentence = "Hello world. This is a test sentence.";

// Call the function with example input
analyzeSentence(inputSentence);
