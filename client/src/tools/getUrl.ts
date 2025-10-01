import { Config } from "@/config"
export const getCoverSrc = (CoverName: string): string => {
    return `${Config.CoverServer}${CoverName}.png`
}

export const getImgSrc = (CoverName: string): string => {
    return `${Config.CoverServer}${CoverName}.png`
}


export const getIconSrcPro = (info: string): string => {
    // 判断是否是链接（假设如果包含 'http' 就是链接）
    if (info.startsWith('http://') || info.startsWith('https://')) {
        return info;
    }

    // 判断是否是路径（假设路径有 '/' 或者 '\\'）
    if (info.includes('/') || info.includes('\\')) {
        return info;
    }

    // 默认假设是图片名，拼接成完整的路径
    return `${Config.IconServer}${info}.png`;
}



export const getImgSrcPro = (info: string): string => {
    // 判断是否是链接（假设如果包含 'http' 就是链接）
    if (info.startsWith('http://') || info.startsWith('https://')) {
        return info;
    }

    // 判断是否是路径（假设路径有 '/' 或者 '\\'）
    if (info.includes('/') || info.includes('\\')) {
        // 注意 Base 必须加上
        return `${Config.Base}${info}`;
    }

    // 默认假设是图片名，拼接成完整的路径
    return `${Config.CoverServer}${info}.png`;
}