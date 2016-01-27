exports.process = function(msg, cfg, snapshot) {
    console.log('Message %j', msg);
    console.log('Config %j', cfg);
    console.log('Snapshot %j', snapshot);

    snapshot.attempt = snapshot.attempt || 1;
    this.emit('rebound', new Error(`This is the ${snapshot.attempt} attempt`));
    snapshot.attempt += 1;
    this.emit('end');
};
