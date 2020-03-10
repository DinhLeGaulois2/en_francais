describe('main.js', function() {
  describe('calculate()', function() {
    it('validates expression when first number is invalid', function() {
      spyOn(window, 'updateResult').and.stub();

      calculate('a+3');

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it('validates expression when second number is invalid', function() {
      spyOn(window, 'updateResult');

      calculate('3+a');

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it('validates expression when operation is invalid', function() {
      spyOn(window, 'updateResult');

      calculate('2_3');

      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    xit('calls add');
    xit('calls subtract');
    xit('calls multiply');
    xit('calls divide');
    xit('validates operation');
    xit('calls updateResult');
  });

  describe('updateResult()', function() {
    beforeAll(function() {
      // Executed ONCE before all specs inside this suite are executed.
      const element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);

      this.element = element;
    });

    afterAll(function() {
      // Executed ONCE after all specs inside this describe are executed.
      document.body.removeChild(this.element);
    });

    it('adds result to DOM element', function() {
      updateResult('5');

      expect(this.element.innerText).toBe('5');
    });
  });
});
