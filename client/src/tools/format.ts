


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