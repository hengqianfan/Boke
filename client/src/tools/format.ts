


export const formatDate = (mo: number): string => {
    // 将数子转化为字符串操作
    let moStr = mo.toString()
    let year = moStr.slice(0, 2)
    let month = moStr.slice(2, 4)
    let day = moStr.slice(4, 6)
    return `⏰20${year}年${month}月${day}日`

}

export const formatDate2 = (momo: any) => {
    let year = momo.slice(0, 2)
    let month = momo.slice(2, 4)
    let day = momo.slice(4, 6)
    return `20${year}/${month}/${day}`
}

export const formatDate_timestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toISOString().split('T')[0]
}

/**
 * 根据空格符，格式化文件名，保留第一个空格符后面的字符
 * @param filename 处理前的名称
 * @returns 处理后的名称
 */
export const formatFileName = (filename: string): string => {
    const index = filename.indexOf(" ")
    if (index === -1) return filename  // 没有空格时，直接返回
    return filename.slice(index + 1)   // 去掉第一个空格前的部分
}

export const getFileNameByPath = (path: string): string => {
    return path.split('/').pop()?.replace(/\.md$/, '') || ''
}




export function extractTimestamp(filename: string): number {
    if (!filename) return 0
    const firstPart = filename.split(' ')[0]  // 获取空格前部分
    if (!/^\d{8}$/.test(firstPart)) return 0  // 不是8位数字则返回 null

    const yy = Number(firstPart.slice(0, 2))
    const mm = Number(firstPart.slice(2, 4)) - 1  // JS 月份0-11
    const dd = Number(firstPart.slice(4, 6))
    const hh = Number(firstPart.slice(6, 8))

    const fullYear = yy < 70 ? 2000 + yy : 1900 + yy  // 处理年份

    const date = new Date(fullYear, mm, dd, hh)
    return date.getTime()
}


/**
 * 格式化路径字符串
 * @param str - 要格式化的字符串
 */
export function formatPath(str: string): string {
    if (!str) return ''
    return str.trim().replace(/\//g, ' | ')
}

export function formatPath2(str: string): string {
    if (!str) return ''
    return str.trim().replace(/\//g, ' ➖ ')
}