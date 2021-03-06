'use strict';

require('./util/test-init');

const expressTests = require('./autotests/express/express');
const expressTestUtil = require('./util/express-test');

describe('express-4', function() {
    this.timeout(15000);

    before(function() {
        // install express 4
        expressTestUtil.installExpressVersion();
    });

    expressTests.test();
});
