import { Config } from "@/config"
export const getCoverSrc = (CoverName: string): string => {
    return `${Config.CoverServer}${CoverName}.png`
}

export const getImgSrc = (CoverName: string): string => {
    return `${Config.CoverServer}${CoverName}.png`
}