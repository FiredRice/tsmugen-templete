import { useStatedef, Null } from '@tsmugen/core';

function letsStart() {
    useStatedef({
        id: 1000,
        describe: 'Hello World!',
        type: 'S',
        movetype: 'I',
        physics: 'S',
        anim: 0
    });

    getNativeCode('debug.cns');

    Null({
        triggers: 1,
        describe: 'Hello World!'
    });
}

export default [letsStart];