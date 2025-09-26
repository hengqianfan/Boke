const r=`---\r
category: '编程'\r
tags: ['js','编程知识','数组']\r
cover: 'javascript'\r
\r
---\r
\r
\r
###### 25060801\r
 \r
<br/>\r
 \r
## 1. 简单需求\r
\r
### 1.1 将数组倒序排列\r
\r
- 利用 \`reverse()\` ,会改变原数组\r
\r
\`\`\`js\r
const arr = [1, 2, 3, 4, 5];\r
arr.reverse();\r
console.log(arr); // 输出: [5, 4, 3, 2, 1]\r
\`\`\`\r
\r
## 1.2 提取数组每一项的属性值，形成新数组\r
\r
\`\`\`js\r
const originalArray = [\r
  { id: 1, name: 'Alice', age: 25 },\r
  { id: 2, name: 'Bob', age: 30 },\r
  { id: 3, name: 'Charlie', age: 28 }\r
];\r
\r
// 提取所有 name 属性值\r
const names = originalArray.map(item => item.name);\r
console.log(names); // 输出: ['Alice', 'Bob', 'Charlie']\r
\r
// 提取所有 age 属性值\r
const ages = originalArray.map(item => item.age);\r
console.log(ages); // 输出: [25, 30, 28]\r
\`\`\`\r
\r
### 1.3 数组去重\r
\r
\`\`\`js\r
const arr = [1, 2, 2, 3, 'a', 'a'];\r
const unique = [...new Set(arr)];\r
// 结果: [1, 2, 3, 'a']\r
\`\`\`\r
\r
## 2. 多维数组\r
\r
### 2.1 将多维数组转为一维数组\r
\r
\r
\r
\`\`\`js \r
const reArrange = (data, list=[]) => {\r
    data.forEach((item) => {\r
        if (item.children && item.children.length > 0) {\r
            reArrange(item.children, list);\r
        } else {\r
            list.push(item);\r
        }\r
    });\r
    return list;\r
};\r
\`\`\`\r
\r
\r
\r
\`\`\`js \r
// 重组数据函数\r
const reArrange = (data, list=[]) => { // 设置list的起始值，因为内部会再次调用函数，必须存在list变量\r
    // 利用 forEach 遍历数据\r
    data.forEach((item) => {\r
        // 当数据中存在子代时，会再次执行，遍历子代数据，直到找到末端数据\r
        if (item.children && item.children.length > 0) {\r
            reArrange(item.children, list);\r
        // 没有子代，直接生成新的数组内容\r
        } else {\r
            list.push(item);\r
        }\r
    });\r
    return list;\r
}\r
\`\`\`\r
\r
\r
\r
###  2.2 JS如何对深层嵌套的数组进行增删改查\r
\r
\r
\r
\`\`\`js\r
const data = [\r
    {\r
        name: "111",\r
        id: 1,\r
        child: [\r
            {\r
                name: "222",\r
                id: 2,\r
                child: [],\r
            },\r
            {\r
                name: "333",\r
                id: 3,\r
                child: [\r
                    {\r
                        name: "444",\r
                        id: 4,\r
                        child: [],\r
                    },\r
                    {\r
                        name: "555",\r
                        id: 5,\r
                        child: [],\r
                    },\r
                ],\r
            },\r
        ],\r
    },\r
    {\r
        name: "666",\r
        id: 6,\r
        child: []\r
    },\r
    {\r
        name: "777",\r
        id: 7,\r
    }\r
];\r
\r
//1， 扁平结构 数据接口 key值可以 遍历\r
var arr = []\r
\r
function fixData (data, status, parent, level=0) {\r
    //console.log("data: ", data);\r
    data.length>0&&data.map((item) => {\r
        var obj = { ...item };\r
        if (status == 1) {\r
            obj.parentId = parent.id;\r
            console.log("itemm: ", obj);\r
        }\r
\r
        if ((item.child && item.child == 0) || !item.child) {\r
            arr.push(obj);\r
        } else {\r
            obj.child = [];\r
            obj.isParent = true;\r
            obj.level = level+1;\r
            arr.push(obj);\r
            fixData(item.child, 1, item, obj.level);\r
            console.log(item,'item');\r
            \r
        }\r
    });\r
\r
}\r
fixData(data)\r
\r
console.log('arr: ', arr);\r
\r
//2， 更新数据\r
var forObj = {}\r
arr.map(v => {\r
    forObj[v.id]=v\r
})\r
console.log("forObj: ", forObj);\r
console.log("forObj_findKey: ", forObj["1"]);\r
\r
// 3，还原数据\r
\r
async function originData(forObj){\r
    var arr = []\r
    Object.keys(forObj).forEach((key)=>{\r
        console.log(key, forObj[key]);\r
        arr.push(forObj[key]);\r
    })\r
    console.log("arr: ", arr);\r
\r
    var originObj = {}\r
    var originArr = []\r
    var originChildArr = []\r
    await arr.map(item => {\r
        if (item.isParent || !item.parentId) {\r
            originArr.push(item);\r
        } else {\r
            originChildArr.push(item);\r
        }\r
    })\r
\r
    console.log(originArr)\r
    console.log(originChildArr)\r
\r
    await originChildArr.map(item => {\r
        originArr.map(v => {\r
            if(item.parentId == v.id){\r
                v.child.push(item)\r
            }\r
        })\r
    })\r
    \r
    console.log(originArr);\r
\r
    var eleOriginArr = [...originArr];\r
    await eleOriginArr.map((v,index)=> {\r
        v.index = index\r
        originObj[v.id] = v;\r
    })\r
    console.log("originObj: ", originObj);\r
    await originArr.map((item,i) => {\r
        var targetObj = originObj[item.id+""]\r
        if(targetObj.parentId){\r
            var objj = originObj[targetObj.parentId + ""];\r
            if (objj) {\r
                originArr.splice(i, 1);\r
                objj.child.push(targetObj);\r
            }\r
        }\r
\r
    })\r
    console.log("originArr: ", originArr);\r
\r
\r
\r
    //await originArr.map((item,i) => {\r
    //     eleOriginArr.map((v)=> {\r
    //        if(item.id==v.id)return\r
\r
    //        if (item.parentId == v.id) {\r
    //            v.child.push(item);\r
    //            console.log("iiii: ", i)\r
    //            eleOriginArr.splice(i,1)\r
    //        }\r
\r
    //    })\r
    //});\r
\r
    console.log("eleOriginArr: ", eleOriginArr);\r
    \r
}\r
originData(forObj);\r
\`\`\`\r
\r
\r
## 遍历数组增加属性\r
\r
\`\`\`js\r
\r
// 生成符合 element 规范的属性 \r
const sites = ref([])\r
\r
const resetData = (momo = []) => {\r
    let arr = []\r
    for (let i = 0; i < momo.length; i++) {\r
        let obj = {}\r
        obj = momo[i]\r
        obj.value = momo[i].title\r
        obj.label = momo[i].title\r
        arr.push(obj)\r
        obj.children = resetData(momo[i].items)\r
\r
\r
    }\r
    return arr\r
}\r
sites.value = resetData(sites_data)\r
\r
\`\`\``;export{r as default};
