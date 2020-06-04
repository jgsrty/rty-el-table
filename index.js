import RtyElTable from "./rty-el-table";

export default RtyElTable;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("rty-el-table", RtyElTable);
}
