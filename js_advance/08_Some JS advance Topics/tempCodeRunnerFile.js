function callReqest(baseUrl) {
  return function(endpoint) {
    console.log(`${baseUrl}/${endpoint}`);
  }
}

const api = callReqest("https://api.github.com");
api("users/Bhavya2065");
api("repos/Bhavya2065/java-script");