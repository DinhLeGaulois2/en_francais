describe('calculator.js', function () { // the class
    let calculator;
    let calculator2;

    beforeEach(function () {
        // Anything inside this block executes before
        // each spec (it) inside this describe.
        calculator = new Calculator();
        calculator2 = new Calculator();
    });

    describe('calculator', function () { // the constructor
        // Belong to the class, not a specific function
        it('can be instantiated', function () {
            jasmine.addMatchers(customMatchers);

            expect(calculator).toBeCalculator(); // custom/
        })

        // Functions
        describe('add()', function () {
            it('should add numbers to total', function () {
                // Create an instance of "<b>Calculator</b>"
                // IMPORTANT: create new instance for EACH test
                //  --> Each test will be independant from each other
                calculator.add(5);

                // expect total to be 5
                expect(calculator.total).toBe(5);
            });
        })

        describe('substract()', function () {
            it('should substract numbers from total', function () {
                calculator.total = 30;
                calculator.substract(5);

                expect(calculator.total).toBe(25);
            });
        })

        describe('multiply()', function () {
            it('should multiply total by number', function () {
                calculator.total = 100;
                calculator.multiply(2);

                expect(calculator.total).toBe(200);
            });
        })

        describe('divide()', function () {
            it('should divide total by number', function () {
                const calculator = new Calculator();
                calculator.total = 200;
                calculator.divide(2);

                expect(calculator.total).toBe(100);
            });

            it('handles divide by zero', function () {
                const calculator = new Calculator();

                expect(function () { calculator.divide(0) }).toThrow();
                expect(function () { calculator.divide(0) }).toThrowError(Error);
                expect(function () { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
            })
        })

        describe('get version with callback', function () {
            // "<b>done</b>" is a callback
            it('fetches version from external source', function (done) {
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1" }')
                ));

                calculator.version.then(function (version) {
                    expect(version).toBe('0.1');
                    // "<b>done</b>" is a callback
                    done(); // need to call the callback function !!!!!!!!!!!!!!!!!
                });
            });
        })

        describe('get version with async and await', function () {
            // "<b>done</b>" is a callback
            it('fetches version from external source', async function (done) {
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1" }')
                ));

                const version = await calculator.version;

                expect(version).toBe('0.1');
                done();
            });
        })
    })
});

