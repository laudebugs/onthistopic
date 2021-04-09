let endpoint = "";
if (process.env.NODE_ENV === "development") {
  endpoint = process.env.REACT_APP_DEV_ENDPOINT;
}
if (process.env.NODE_ENV === "production") {
  endpoint = "https://onthistopic.herokuapp.com";
}

export default endpoint;
