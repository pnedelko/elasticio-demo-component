exports.process = emitSnapshot;

function emitSnapshot(msg, cfg, snapshot) {
    console.log('Message %j', msg);
    console.log('Config %j', cfg);
    console.log('Snapshot %j', snapshot);

    snapshot.iteration = snapshot.iteration || 0;

    console.log('Iteration: %d', snapshot.iteration);

    snapshot.iteration += 1;

    this.emit('snapshot', snapshot);
    this.emit('end');
}
