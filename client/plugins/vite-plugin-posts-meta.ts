import { type Plugin } from 'vite'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

function getGitTime(filePath: string) {
    let createdAt = ''
    let updatedAt = ''

    try {
        // 文件创建时间（第一次 commit）
        createdAt = execSync(
            `git log --diff-filter=A --follow --format=%ct -- "${filePath}" | tail -1`
        ).toString().trim()

        // 文件修改时间（最后一次 commit）
        updatedAt = execSync(
            `git log -1 --format=%ct -- "${filePath}"`
        ).toString().trim()
    } catch (err) {
        console.error('[vite-plugin-posts-meta] Git 信息获取失败:', filePath)
    }

    return {
        createdAt: createdAt ? Number(createdAt) * 1000 : null,
        updatedAt: updatedAt ? Number(updatedAt) * 1000 : null,
    }
}

export default function postsMetaPlugin(): Plugin {
    return {
        name: 'vite-plugin-posts-meta',

        transform(code, id) {
            if (id.endsWith('.md')) {
                const times = getGitTime(id)

                // 把时间注入成 export
                return {
                    code: `
            export const createdAt = ${times.createdAt};
            export const updatedAt = ${times.updatedAt};
            export default ${JSON.stringify(code)};
          `,
                    map: null,
                }
            }
        },
    }
}
