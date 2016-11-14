define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var sinon = require('./node_modules/sinon/lib/sinon.js');
    var once = require('app/once');
    
    registerSuite({
        name: 'sinon once example',

        'test the test': function () {
            assert( 1 === 1, 'one equals one');
        },
        'test once calls passed function': function () {
            var callback = sinon.spy();
            var proxy = once(callback);
            proxy();
            assert( callback.called === true, 'passed function called');
        },
        'test once calls passed function only once': function() {
            var callback = sinon.spy();
            var proxy = once(callback);
            proxy();
            proxy();
            assert( callback.calledOnce === true, 'passed function called only once');
        },
        'test once calls passed function with correct this and args': function() {
            var callback = sinon.spy();
            var proxy = once(callback);
            var obj = {};
            proxy.call( obj, 1, 2, 3 );
            assert( callback.calledOn( obj ));
            assert( callback.calledWith( 1, 2, 3 ));
        }
    });
});
