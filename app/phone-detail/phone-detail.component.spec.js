describe("phoneDetail", function () {
  // load the module that contains `phoneDetail` component before each test
  beforeEach(module("phoneDetail"));

  // test the controller
  describe("PhoneDetailController", function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function (
      $componentController,
      _$httpBackend_,
      $routeParams
    ) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET("phones/xyz.json").respond({ name: "phone xyz" });

      $routeParams.phoneId = "xyz";
      ctrl = $componentController("phoneDetail");
    }));

    it("should fetch the phone details", function () {
      expect(ctrl.phone).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.phone).toEqual({ name: "phone xyz" });
    });
  });
});
