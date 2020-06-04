# rty-el-table

> a component base element-table

### Install

```
npm install rty-el-table
```

### Usage

**引入组件**

#### 此组件基于 element-ui，请确认已引入 element-ui 组件库

```
import rtyElTable from 'rty-el-table/src'
```

### 组件参数

| 参数            | 说明           | 类型    | 默认值 |
| --------------- | -------------- | ------- | ------ |
| tableData       | 表格数据列表   | Array   |        |
| tableProps      | 表格数据参数   | Array   |        |
| ~~pageParams~~      | ~~分页参数~~       | ~~Object~~  |        |
| loading         | 加载 loading   | Boolean | false  |
| showIndexColumn | 是否显示序号列 | Boolean | false  |

### tableProps 属性

| 参数     | 说明             | 类型    | 默认值 | 可选值            |
| -------- | ---------------- | ------- | ------ | ----------------- |
| label    | 显示的标题       | String  |        |                   |
| prop     | 对应列内容字段名 | String  |        |                   |
| align    | 对其方式         | String  | left   | left,center,right |
| minWidth | 加载 loading     | String  | 自适应 |                   |
| custom   | 自定义列标识     | Boolean | false  |                   |

### ~~pageParams 属性~~

| 参数      | 说明         | 类型   | 默认值 |
| --------- | ------------ | ------ | ------ |
| ~~page~~      | ~~当前页~~       | ~~Number~~ | ~~1~~      |
| ~~page_size~~ | ~~每页显示个数~~ | ~~Number~~ | ~~10~~     |
| ~~total~~     | ~~总条数~~       | ~~Number~~ | ~~0~~      |

### ~~Methods~~

| 方法       | 说明         |
| ---------- | ------------ |
| ~~changePage~~ | ~~分页回调函数~~ |

