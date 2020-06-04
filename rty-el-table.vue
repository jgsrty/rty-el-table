<template>
  <!-- 表格 -->
  <div class="common-table">
    <el-table
      v-loading="loading"
      :data="tableData"
      border
      stripe
      style="width: 100%"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
    >
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        width="50"
      >
      </el-table-column>
      <el-table-column
        v-for="(item, ind) in tableProps"
        :key="ind"
        :align="item.align"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
      >
        <template slot-scope="scope">
          <slot v-if="item.custom" :name="item.prop" :row="scope.row"></slot>
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <slot name="handle"></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "xz-search-table",
  props: {
    // 表格数据列表
    tableData: {
      type: Array,
      default: () => []
    },
    // 表格数据参数
    tableProps: {
      type: Array,
      default: () => []
    },
    // 加载loading
    loading: {
      type: Boolean,
      default: false
    },
    // 是否显示序号列
    showIndexColumn: {
      type: Boolean,
      default: true
    }
  }
};
</script>
