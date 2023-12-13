import { useStatedef, Null, ChangeState, And } from '@tsmugen/core';
import { helloHelper } from 'src/helpers';
import { getNativeCode } from 'src/utils';

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
        triggers: And(
            NumHelper(helloHelper),
            enemynear.helloHelperEnemynear.AILevel,
            enemynear.helloHelperEnemynear.initVelY,
            `${NumHelper(root.helloHelperRoot)} != 0`
        ),
        describe: 'Hello World!'
    });

    ChangeState({
        triggers: time.equal(0),
        value: 0
    })
}

export default [letsStart];