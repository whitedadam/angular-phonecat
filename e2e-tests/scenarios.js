describe("PhoneCat Application", function () {
  describe("phoneList", function () {
    beforeEach(function () {
      browser.get("index.html");
    });

    it("should filter the phone list as a user types into the search box", function () {
      var phoneList = element.all(by.repeater("phone in $ctrl.phones"));
      var query = element(by.model("$ctrl.query"));

      // Default length of phoneList
      expect(phoneList.count()).toBe(3);

      // Checking length when query 'nexus'
      query.sendKeys("nexus");
      expect(phoneList.count()).toBe(1);

      query.clear();

      // Checking length when query 'motorola'
      query.sendKeys("motorola");
      expect(phoneList.count()).toBe(2);
    });
  });
});
