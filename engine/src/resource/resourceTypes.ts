export interface KRrsourceOptions {
    readonly type: 'sheet' | 'json' | 'xml' | 'text' | 'atlas' | 'img' | 'audio' | 'res' | 'rawAtlas' | 'spine',
    readonly id: string,
    readonly scr?: string,
    readonly sheet?: {
        readonly frame?: number,
        readonly width: number,
        readonly size: readonly [number, number]
    }
    readonly spine?: {
        readonly rawAtlas?: string,
        readonly json?: string,
        readonly atlas?: string
    }
}