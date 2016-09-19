'use strict';

exports.process = function process() {
    console.log('Not implemented');
};

exports.selectTwo = function selectTwo(cfg, cb) {
    console.log('textOne value: %s', cfg.textOne);
    console.log('selectOne value: %s', cfg.selectOne);

    const select = {
        someStatic: 'Static value',
        textOne: cfg.textOne,
        selectOne: cfg.selectOne
    };

    return cb(null, select);
};
