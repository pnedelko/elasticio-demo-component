'use strict';

const elasticio = require('elasticio-node');
const messages = elasticio.messages;

exports.process = function(msg, cfg) {
    this.emit('data', messages.newMessageWithBody(cfg));
    this.emit('end');
};
