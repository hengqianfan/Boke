interface Config {
    siteName: string;
    testData: any[];
    PersonPortrait: string;
    PersonIntro: string;
    PersonName: string;
    PersonSocialLinks: { name: string; link: string }[];
    IconServer: string;
    CoverServer: string;
    OutlineTitle?: string;
    OutlineShow: boolean;
    /**
     * 自动去除文件名前的排序编码
     */
    AutoFormatFileName?: boolean;
    SearchDefaultKeyword: string;
    SearchEngineList: { name: string, icon: string, baseurl: string }[]
    animationMode: 'none' | 'slide-fade',
    Base: string
}


export const Config: Config = {
    AutoFormatFileName: true,
    siteName: 'Boke',
    PersonPortrait: 'logo',
    PersonIntro: '拒绝内耗，先完成，再完美',
    PersonName: "衡千帆",
    animationMode: 'slide-fade',
    SearchDefaultKeyword: '外站搜索',
    SearchEngineList: [
        {
            name: "bing",
            icon: "bing",
            baseurl: "https://bing.com/search?q="
        },
        {
            name: "google",
            icon: "google",
            baseurl: "https://www.google.com/search?q="
        },
        {
            name: "baidu",
            icon: "baidu",
            baseurl: "https://baidu.com/s?wd="
        },
        {
            name: "github",
            icon: "github",
            baseurl: "https://github.com/search?q="
        },
        {
            name: "csdn",
            icon: "csdn",
            baseurl: "https://so.csdn.net/so/search?q="
        },
        {
            name: "npm",
            icon: "npm",
            baseurl: "https://www.npmjs.com/search?q="
        },
        {
            name: "zhihu",
            icon: "zhihu2",
            baseurl: "https://www.zhihu.com/search?type=content&q="
        },
        {
            name: "bilibili",
            icon: "bilibili",
            baseurl: "https://search.bilibili.com/all?keyword="
        },
        {
            name: "youtube",
            icon: "youtube3",
            baseurl: "https://www.youtube.com/results?search_query="
        },
        {
            name: "haici",
            icon: "haici",
            baseurl: "https://corp.dict.cn/search?q="
        },
        {
            name: "iciba",
            icon: "iciba",
            baseurl: "https://www.iciba.com/word?w="
        }
    ],

    OutlineTitle: '页面导航',
    OutlineShow: false,
    Base: '/Boke/',
    IconServer: 'https://raw.githubusercontent.com/hengqianfan/nIcon/refs/heads/main/repo/',
    CoverServer: 'https://raw.githubusercontent.com/hengqianfan/nCover/refs/heads/main/repo/',
    PersonSocialLinks: [
        {
            name: "bilibili",
            link: "https://bilibili.com/"
        },
        {
            name: "github",
            link: "https://github.com/hengqianfan"
        },
        {
            name: "heihe",
            link: "https://github.com/hengqianfan"
        }
    ],
    testData: [
        {
            id: 1,
            title: 'title1',
            content: 'content1',
            icon: 'icon1',
            date: '2024-06-01',
            updateDate: '2024-06-02',
            categories: ['category1', 'category2'],
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'title2',
            content: 'content1',
            icon: 'icon1',
            date: '2024-06-01',
            updateDate: '2024-06-02',
            categories: ['category1', 'category2'],
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'title3',
            content: 'content1',
            icon: 'icon1',
            date: '2024-06-01',
            updateDate: '2024-06-02',
            categories: ['category1', 'category2'],
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'title4',
            content: 'content1',
            icon: 'icon1',
            date: '2024-06-01',
            updateDate: '2024-06-02',
            categories: ['category1', 'category2'],
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'title1',
            content: 'content1',
            icon: 'icon1',
            date: '2024-06-01',
            updateDate: '2024-06-02',
            categories: ['category1', 'category2'],
            tags: ['tag1', 'tag2']
        }

    ]
}