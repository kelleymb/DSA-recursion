// Anagrams

// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order.
// Write a function that creates an anagram list, listing all the rearrangements of a given word. 
// For example, if the user types "east", the program should list all 24 permutations, 
// including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
// For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of 
// "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". 
// Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". 
// For "east", there should be 24 words.