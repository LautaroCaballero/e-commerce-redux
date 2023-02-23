import APIrequest from "../utils/config/axios.config";

export function getAllProducts() {
  return APIrequest.get("/", {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
