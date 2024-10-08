/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    var copy = init
    return {
        increment: function() {
            init += 1
            return init
        },
        decrement: function() {
            init -= 1
            return init
        },
        reset: function() {
             init = copy
            return init
        }
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */