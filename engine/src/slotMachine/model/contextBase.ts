import { Injector } from '../../core/injector';
import { C_TABLE_LINES_INFO } from '../../util/constant';
import * as QueryString from '../../util/querystring';
import { configureLanguage, Languages } from '../util/lang';
import { TableLinesOptions } from './line_base';

export interface URLConfigOption {
    readonly operator: string,
    readonly funPLay: boolean,
    readonly showLog: boolean,
    readonly token: string | undefined,
    readonly lang: Languages
}

export interface GameCommonContextOptions {
    urlConfig: URLConfigOption,    
    table: TableLinesOptions
}

export function getUrlConfig(): URLConfigOption {
    return {
        operator: QueryString.getParameter('op', '1'),
        funPLay: QueryString.getParameter('fun', '1') == '1',
        showLog: QueryString.getParameter('log', '0') == '1',
        token: QueryString.getParameter('token') || QueryString.getParameter('s'),
        lang: configureLanguage()
    };
}

export const initialState = {
    urlConfig: getUrlConfig(),
    table: Injector.Obj.get(C_TABLE_LINES_INFO)
}