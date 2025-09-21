const r=`---\r
aside: left\r
tags: ['javascript','编程知识','数组']\r
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
::: code-group\r
\r
\`\`\`js [示例]\r
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
\`\`\`js [详解]\r
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
};\r
\r
:::`;export{r as default};
