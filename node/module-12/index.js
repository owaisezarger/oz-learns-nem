const someFunction = () => {
  return "hello world";
};

try {
  // Code that might throw an error
  const result = someFunction();
  console.log(result);
} catch (error) {
  // Error handling
  console.error("An error occurred:", error);
}
