// Your code here
function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  // Handle empty string first
  if (word.length === 0) {
    return false;
  }

  // Then validate allowed characters
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only letters");
  }

  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

module.exports = { isPalindrome };
