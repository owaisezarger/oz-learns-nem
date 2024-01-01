function fetchData(callback) {
  setTimeout(() => {
    const error = new Error("Some error occurred");
    callback(error, null);
  }, 2000);
}

fetchData((err, data) => {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Data:", data);
  }
});
