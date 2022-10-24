import path from 'path';
import { readFile, ReadFileSyncOptions } from '@tsmugen/core';

/**
 * 获取原生代码
 * @param filePath 原生代码文件在 src/native 下的相对路径
 * @param options 文件读取配置项
 * @returns code
 */
export function getNativeCode(filePath: string, options?: ReadFileSyncOptions) {
    return readFile(path.join(process.cwd(), 'src/native', filePath), options);
}
