// Handling asynchronous operations with callbacks:

function fetchData(callback) {
  setTimeout(() => {
    const data = "Fetched data";
    callback(data);
  }, 2000);
}
fetchData((ans) => {
  console.log(ans);
});
