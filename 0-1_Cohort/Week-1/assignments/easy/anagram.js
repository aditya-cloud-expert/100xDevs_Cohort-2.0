function isAnagram(str1, str2) {
  // If the lengths of the strings are different, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert both strings to lowercase to handle case-insensitive comparison
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  // Create a frequency map to count the occurrences of each character in str1
  const charCount = new Map();

  // Count occurrences of characters in str1
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Subtract the occurrences of characters in str2 from the map
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) - 1);
    } else {
      // If char in str2 does not exist in charCount, the strings are not anagrams
      return false;
    }
  }

  // Check if all values in the map are zero, meaning every character matches
  for (let value of charCount.values()) {
    if (value !== 0) {
      return false;
    }
  }

  // If we pass all checks, the strings are anagrams
  return true;
}

module.exports = isAnagram;
