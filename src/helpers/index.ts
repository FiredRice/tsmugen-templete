import { Helper, root, enemynear, parent, Var, AttrValue } from '@tsmugen/core';
import { injectPlayerVars } from '@tsmugen/global';

// helper变量
const helperVars = {
    initVelX: new Var(10),
    initVelY: new Var(11),
};

const helperId = 3000

// 创建全局 helper 并注入变量
export const helloHelper = injectPlayerVars(new Helper(ID.add(helperId)), helperVars);

// 创建相同的 helper ，但仅提供 root 调用
export const helloHelperRoot = injectPlayerVars(new Helper(root.ID.add(helperId)), helperVars);
// 创建相同的 helper ，但仅提供 enemynear 调用
export const helloHelperEnemynear = injectPlayerVars(new Helper(enemynear.ID.add(helperId)), helperVars);
// 创建相同的 helper ，但仅提供 parent 调用
export const helloHelperParent = injectPlayerVars(new Helper(parent.ID.add(helperId)), helperVars);

export const customHelpers = {
    helloHelperRoot,
    helloHelperEnemynear,
    helloHelperParent
};

export type CustomHelpers = typeof customHelpers;
