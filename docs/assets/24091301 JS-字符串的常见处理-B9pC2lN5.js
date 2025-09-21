const n=`---\r
category: '编程'\r
tags: ['javascript','字符串','编程知识']\r
icon: 'javascript2'\r
cover: 'javascript'\r
\r
---\r
 \r
###### 24091301\r
 \r
<br/>\r
 \r
\r
\r
# 字符串处理\r
\r
\r
## 1. 判断字符串中是否存在某个字符\r
\r
用 \`indexOf(key)\` 处理字符串 ，如果字符串中存在\`key\`，返回该\`key\`首次出现的索引值，如果不存在，则是返回 \`-1\`\r
\r
\`\`\`js\r
let str = "123";\r
console.log(str.indexOf("3"));  // 返回 2\r
console.log(str.indexOf("4"));  // 返回 -1\r
\r
\`\`\`\r
\r
## 2. 统计字符串的出现次数\r
\r
### 2.1 使用 match \r
\r
\`\`\`js\r
const count = (str, key) => {\r
  let count = 0\r
  if (!key) return count\r
  while(str.match(key)) {\r
    str = str.replace(key, '')\r
    count++\r
  }\r
  return count\r
}\r
\`\`\`\r
\r
### 2.2 使用 split\r
\r
\`\`\`js\r
let str = 'abcdefabc'\r
let key = 'ab'\r
let count = str.split(key).length - 1\r
\`\`\`\r
\r
### 2.3 使用 indexOf\r
\r
\`\`\`js\r
const count = (str, key) => {\r
  let count = 0;\r
  while (str.includes(key)) {\r
    const index = str.indexOf(key);\r
    count++;\r
    str = str.substring(index + key.length);\r
  }\r
  return count;\r
}\r
\`\`\`\r
\r
\r
## 3. 指定截取、精确截取字符串的某个片段\r
\r
通过 indexOf 找到起始位置和终止位置的索引，然后剪切字符串  \r
\r
\`\`\`js\r
// 适合处理具备片段的开头和结尾的唯一拥有标识的字符串数据\r
let content = '你的长文字符串数据'\r
let start = content.indexOf('开头的字符')  \r
let end = content.indexOf('结尾的字符')\r
// 截取信息\r
let info = content.slice(start, end)\r
// 注意，根据实际情况调整参数\r
// 这取决你想截取的内容\r
let info = content.slice(start+10, end-8)\r
\r
\`\`\`\r
\r
\r
## 4. 分割字符串\r
\r
\`\`\`js\r
const str = "Hello World! How are you?";\r
const arr = str.split(" "); \r
// 结果：["Hello", "World!", "How", "are", "you?"]\r
\r
\`\`\``;export{n as default};
