describe("validator", function () {

    beforeAll(function () {
        $('body').append(`
        <div id="name">0ala</div>
        <div id="number">72</div>
        <div id="xyz1" class="xyz">0ab</div>
        <div id="xyz2" class="xyz">?cd</div>
        `);
    });

    it("invalid text", function () {
      $('#name').validate(/^[A-Z][a-z]+/);
      expect($('#name').css("background-color")).toEqual("rgb(255, 0, 0)");
    });

    it("valid text", function () {
      $('#number').validate(/^\d+/);
      expect($('#number').css("background-color")).toEqual("rgb(34, 34, 255)");
    });

    it("partialy valid", function () {
      $('.xyz').validate(/^\d[a-z]*/);
      expect($('#xyz1').css("background-color")).toEqual("rgb(34, 34, 255)");
      expect($('#xyz2').css("background-color")).toEqual("rgb(255, 0, 0)");
    });

});
