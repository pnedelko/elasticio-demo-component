'use strict';

exports.process = function process() {
    console.log('Not implemented');
};

exports.selectTwo = function selectTwo(cfg, cb) {
    console.log('textOne value: %s', cfg.textOne);
    console.log('selectOne value: %s', cfg.selectOne);

    const select = {
        someStatic: 'Static value',
        textOne: `Value from text one: ${cfg.textOne}`,
        selectOne: `Value from select one ${cfg.selectOne}`
    };

    return cb(null, select);
};
