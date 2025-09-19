interface Config {
    siteName: string;
    testData: any[];
    PersonPortrait: string;
    PersonIntro: string;
    PersonName: string;
    PersonSocialLinks: { name: string; link: string }[];
    CoverServer: string;
    OutlineTitle?: string;
}



export const Config: Config = {
    siteName: 'Boke',
    PersonPortrait: `${import.meta.env.BASE_URL}/icons/logo.png`,
    PersonIntro: '拒绝内耗，先完成，再完美',
    PersonName: "衡千帆",
    OutlineTitle: '🧭 页面导航',
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