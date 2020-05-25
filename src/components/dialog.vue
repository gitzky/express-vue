<template>
  <div>
    <el-dialog
      class="z_person-dialog"
      width="70%"
      top="5vh"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <div slot="title" class="z_title">一键卖驴</div>
      <div>
        <el-form ref="form" size="small" :model="form" :inline="true">
          <el-form-item label="销售类型">
            <el-select v-model="form.saleType">
              <el-option value="肉驴">肉驴</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="驴舍">
            <el-select v-model="form.roomNum">
              <el-option value="肉驴001舍">肉驴001舍</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="编号">
            <el-input v-model="form.rfidNum" placeholder="请输入耳号或RFID后四位" />
          </el-form-item>
          <el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
        </el-form>
        <el-table
          ref="multipleTable"
          height="480px"
          tooltip-effect="dark"
          style="width: 100%"
          :data="tableData"
          :header-cell-style="{background:'#f0f5fc'}"
          @selection-change="handleSelectionChange"
        >
          <el-table-column label="全选" type="selection" width="55"></el-table-column>
          <el-table-column align="center" label="类型" show-overflow-tooltip>
            <template slot-scope="scope" :data="scope">黑毛驴肉驴黑毛驴肉驴黑毛驴肉驴黑毛驴肉驴</template>
          </el-table-column>
          <el-table-column align="center" label="驴舍" show-overflow-tooltip>
            <template slot-scope="scope" :data="scope">肉驴118舍 肉驴1</template>
          </el-table-column>
          <el-table-column align="center" label="RFID" show-overflow-tooltip>
            <template slot-scope="scope" :data="scope">000000000000000</template>
          </el-table-column>
          <el-table-column align="center" label="耳号" width="130" show-overflow-tooltip>
            <template slot-scope="scope" :data="scope">00000000</template>
          </el-table-column>
          <el-table-column align="center" label="品种" width="130" show-overflow-tooltip>
            <template slot-scope="scope" :data="scope">德州驴</template>
          </el-table-column>
          <el-table-column align="center" label="毛色" width="130" show-overflow-tooltip>
            <template slot-scope="scope" :data="scope">三粉色</template>
          </el-table-column>
          <el-table-column align="center" label="岁龄" width="130" show-overflow-tooltip>
            <template slot-scope="scope" :data="scope">2年</template>
          </el-table-column>
        </el-table>
        <div slot="fotter" class="clear mar10_t">
          <el-button type="primary" size="small">一键卖驴（{{multipleSelection.length}}）</el-button>
          <el-row class="pull-right" type="flex" justify="end">
            <el-pagination
              background
              layout=" prev, pager, next"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagination.currentPage"
              :page-size="pagination.pageSize"
              :total="pagination.total"
            />
          </el-row>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogVisible: Boolean
  },

  data() {
    return {
      form: {
        saleType: null,
        roomNum: null,
        rfidNum: null
      },
      multipleSelection: [], // 选中的商品
      tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pagination: {
        total: 50,
        currentPage: 1,
        pageSize: 5
      }
    };
  },
  created() {},

  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
    loadData(val) {
      this.$store.dispatch("", {}).then(response => {});
    },
    // 分页
    handleSizeChange(val) {
      this.pagination.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(" this.multipleSelection", this.multipleSelection);
    }
  }
};
</script>

<style lang="scss">
// 弹窗样式
.z_person-dialog.el-dialog__wrapper {
  .el-dialog__header {
    position: relative;
    padding: 10px 20px;
    border-bottom: 1px solid #e8e8e8;
    button.el-dialog__headerbtn {
      top: 15px;
    }
    .z_title {
      line-height: 16px;
      border-left: 3px solid #666;
      font-size: 16px;
      color: #666;
      padding: 0px 8px;
      margin: 5px 0;
    }
  }
  .el-dialog__body {
    padding: 10px 20px;
    .z_table {
      .z_th {
        height: 48px;
        width: 100%;
        line-height: 48px;
        padding: 0 15px;
        background: #f0f5fc;
        .cell {
          text-align: center;
        }
        label.el-checkbox {
          width: 10%;
        }
        .z_th_2 {
          display: inline-block;
          width: 80%;
          text-align: center;
          color: #909399;
          font-weight: bold;
        }
      }
      .z_td {
        padding: 15px;
        div.el-checkbox-group {
          border-bottom: 1px solid #e8e8e8;
          label.el-checkbox {
            width: 33.3%;
            margin: 0 0 -1px 0;
            padding: 10px 0;
            border-bottom: 1px solid #e8e8e8;
          }
        }
      }
    }
  }
}
</style>
