// Register the `phoneList` component on the `phoneList` module.
angular.module("phoneList", []).component("phoneList", {
  templateUrl: "phone-list/phone-list.template.html",
  controller: [
    "$http", // inline injection?
    function PhoneListController($http) {
      var self = this;
      this.orderProp = "age";

      $http.get("phones/phones.json").then(function (response) {
        self.phones = response.data;
        // Next line is used to minify the return data.
        // For dev purposes we don't need 20+ phones on the page.
        self.phones = response.data.slice(0, 5);
      });
    },
  ],
});
