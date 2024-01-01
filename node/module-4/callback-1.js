function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data";
    callback(data);
  }, 2000);
}
function processData(data) {
  console.log("Processed data:", data);
}
fetchData(processData);
