import '@tsmugen/global';
import { Character, Mugen } from '@tsmugen/core';
import { injectGlobalHelpers, injectGlobalVars } from '@tsmugen/global';
import { customVars } from './vars';
import states from './states';
import { customHelpers } from './helpers';

// 全局对象注入自定义变量
injectGlobalVars(customVars);
// 全局对象注入自定义 helper
injectGlobalHelpers(customHelpers);

// 创建人物
const char = new Character();

// 为人物注入 states
char.injectStates(states);

// 创建 mugen 系统
const mugen = new Mugen();

// 为 mugen 系统注入人物
mugen.injectCharacter(char);

// 开始构建人物
mugen.build();
