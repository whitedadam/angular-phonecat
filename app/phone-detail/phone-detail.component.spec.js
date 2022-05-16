describe("phoneDetail", function () {
  // load the module that contains `phoneDetail` component before each test
  beforeEach(module("phoneDetail"));

  // test the controller
  describe("controller", function () {
    var $httpBackend, ctrl;
    var xyzPhoneData = {
      name: "phone xyz",
      images: ["image/url1.png", "image/url2.png"],
    };

    beforeEach(inject(function (
      $componentController,
      _$httpBackend_,
      $routeParams
    ) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET("phones/xyz.json").respond(xyzPhoneData);

      $routeParams.phoneId = "xyz";
      ctrl = $componentController("phoneDetail");
    }));

    it("should fetch the phone details", function () {
      expect(ctrl.phone).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });
  });
});
