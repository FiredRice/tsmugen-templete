import { useStatedef, Null, ChangeState, And, NativeCode } from '@tsmugen/core';
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

    Null({
        triggers: And(
            NumHelper(helloHelper),
            enemynear.helloHelperEnemynear.AILevel,
            enemynear.helloHelperEnemynear.initVelY,
            `${NumHelper(root.helloHelperRoot)} != 0`
        ),
        describe: 'Hello World!',
    });

    // 仅在 1.1 版本的人物包中添加原生代码
    NativeCode(getNativeCode('debug.cns'), '1.1');

    // 仅在 1.0 版本的人物包中添加 Null 控制器
    Null({
        triggers: `${NumHelper(root.helloHelperRoot)} != 0`,
        describe: '1.0 代码',
        version: '1.0'
    });

    ChangeState({
        triggers: time.equal(0),
        value: 0
    })
}

export default [letsStart];