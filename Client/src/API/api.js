import axios from "axios";
import qs from "querystring";

// const data = qs.stringify({
//   a: "aaa"
// });

export const getBigtable = function(token, callback) {
  axios
    .get(`/user/gettable`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        token
      }
    })
    .then(res => {
      callback(false, res);
    })
    .catch(error => console.log(error));
};
