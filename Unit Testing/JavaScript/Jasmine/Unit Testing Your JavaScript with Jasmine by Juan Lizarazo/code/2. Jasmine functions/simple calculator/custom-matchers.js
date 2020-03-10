const customMatchers = {
    toBeCalculator: function () {
        return {
            compare: function (actual) {
                const result = {
                    pass: actual instanceof Calculator,
                    message: ''
                }

                if(result.pass){
                    // in case of "<font color="red" size="+2">not</font>": for example, "expect(2).<font color="red" size="+2">not</font>.<font color="blue">toBeCalculator()</font>
                    result.message = 'Expected ' + actual + ' not to be instance of Calculator'
                } else{
                    result.message = 'Expected ' + actual + ' to be instance of Calculator'
                }                

                return result
            }
        }
    }
}