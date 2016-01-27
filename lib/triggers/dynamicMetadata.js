'use strict';

const elasticio = require('elasticio-node');
const messages = elasticio.messages;

exports.process = function() {
    this.emit('data', messages.newMessageWithBody({
        name: 'John'
    }));
    this.emit('end');
};

/**
 * This method will be called when you have set dynamicMetadata to true
 * in your component.json for the action / trigger.
 * Here you have a possibility to determine the metadata on the fly.
 * You can do whatever asynchronous stuff you need to get the information about the data.
 * The output should be a JSON-schema.
 */
exports.getMetaModel = function(cfg, cb) {
    cb(null, {
        out: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    title: 'Name'
                }
            }
        }
    });
};
