// Register the `phoneList` component on the `phoneList` module.
angular.module("phoneList", []).component("phoneList", {
  templateUrl: "phone-list/phone-list.template.html",
  controller: [
    "Phone", // inline injection?
    function PhoneListController(Phone) {
      this.phones = Phone.query();
      this.orderProp = "age";
    },
  ],
});
