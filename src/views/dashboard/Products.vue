<template>
  <section class="container">
    <div class="d-flex align-items-center">
      <h2 class="font-weight-bold d-flex justify-content-between text-primary mr-3">房間列表 (後臺管理)</h2>
      <a
        class="btn btn-secondary btn-sm"
        type="button"
        data-toggle="modal"
        data-target="#signoutModal"
      >Signout</a>
    </div>
    <div class="d-flex justify-content-end mb-2">
      <button
        type="button"
        class="btn btn-primary btn-lg px-3"
        data-toggle="modal"
        data-target="#addProductModal"
        @click="initData"
      >新增房間</button>
    </div>
    <div class="table-responsive">
      <table class="table border-bottom">
        <thead>
          <tr>
            <th scope="row" class="text-nowrap">房間分類</th>
            <th scope="row" width="300px">房間名稱</th>
            <th scope="row">額外服務</th>
            <th scope="row" width="150px" class="text-right text-nowrap">原價</th>
            <th scope="row" width="150px" class="text-right text-nowrap">售價</th>
            <th scope="row" width="150px" class="text-center text-nowrap">是否開放</th>
            <th scope="row" class="text-nowrap">編輯</th>
          </tr>
        </thead>
        <tbody class="p-0">
          <tr v-for="(item) in hexAPI.data" :key="item.id">
            <td class="align-middle">{{item.category}}</td>
            <td class="align-middle">{{item.title}}</td>
            <td class="align-middle">
              <span v-for="(item, index) in item.services" :key="index">。{{item}}</span>
            </td>
            <td class="text-right align-middle">{{item.origin_price}}</td>
            <td class="text-right align-middle">{{item.price}}</td>
            <!-- <td class="text-center align-middle" >{{ isUpFn(item.enabled) }}</td> -->
            <td class="text-center align-middle">
              <span v-if="item.enabled" class="text-success">已開放</span>
              <span v-else class="text-danger">未開放</span>
            </td>
            <td class="pr-0">
              <button
                class="btn btn-warning"
                @click="copyData(item)"
                data-toggle="modal"
                data-target="#addProductModal"
              >修改</button>
              <button
                class="btn btn-danger mr-0"
                @click="copyData(item)"
                data-toggle="modal"
                data-target="#deleteProductModal"
              >刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex justify-content-center">
      <!-- <pagination> -> 元件自定義名稱 -->
      <!-- pages -> props，元件自定義屬性 -->
      <!-- v-bind:pages -> 帶入 Vue data裡的 pagination -->
      <!-- @emit-pages -> 自訂元件中，methods其中一個事件或函式，
      元件樣板內可以有大小寫，但網頁中的要加上 - 符號-->
      <!-- getData -> Vue methods裡的其中一個函式 -->
      <!-- @emit-pages getData -->
      <!-- <pagination :pages="pagination" @emit-pages="getData"></pagination> -->
    </div>

    <!-- add/edit Modal -->
    <div
      class="modal fade"
      id="addProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white font-weight-bold">新增房間</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="#">
              <div class="form-row">
                <div class="col-6">
                  <div class="form-group">
                    <label for class>房間圖片</label>
                    <input
                      type="text"
                      placeholder="請輸入圖片網址"
                      class="form-control"
                      v-model="temporary.imageUrl"
                    />
                  </div>
                  <img :src="temporary.imageUrl" alt class="img-fluid" />
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for class>房間名稱</label>
                    <input
                      type="text"
                      placeholder="產品名稱"
                      class="form-control"
                      v-model="temporary.title"
                    />
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="col-6">
                      <div class="form-group">
                        <label for class>房間分類</label>
                        <input
                          type="text"
                          placeholder="分類名稱"
                          class="form-control"
                          v-model="temporary.category"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for class>單位</label>
                        <input
                          type="text"
                          placeholder="間"
                          class="form-control"
                          v-model="temporary.unit"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label for class>原價</label>
                        <input
                          type="number"
                          placeholder
                          class="form-control"
                          v-model="temporary.origin_price"
                        />
                      </div>
                    </div>

                    <div class="col-6">
                      <div class="form-group">
                        <label for class>售價</label>
                        <input
                          type="number"
                          placeholder
                          class="form-control"
                          v-model="temporary.price"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for class>房間描述</label>
                    <textarea
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="temporary.description"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for class>房間內容</label>
                    <textarea
                      type="text"
                      placeholder
                      class="form-control"
                      v-model="temporary.content"
                    ></textarea>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="isUp"
                      class="form-check-input"
                      v-model="temporary.enabled"
                    />
                    <label for="isUp" class="form-check-label">是否開放</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateData"
              data-dismiss="modal"
            >Save</button>
          </div>
        </div>
      </div>
    </div>

    <!-- delete Modal -->
    <div
      class="modal fade"
      id="deleteProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title text-white font-weight-bold">刪除房間</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>
              是否刪除
              <span class="text-danger">{{ temporary.title }}</span> ? 刪除後將無法復原 !
            </h3>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="deleteData"
              data-dismiss="modal"
            >Delete</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- signout Modal -->
    <div
      class="modal fade"
      id="signoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white font-weight-bold">是否登出 ?</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action>
              <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="signout"
                  data-dismiss="modal"
                >登出</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      product: {
        title: 'test',
        category: 'testCategory',
        content: 'test',
        description: 'test',
        imageUrl: [
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        ],
        enabled: true,
        origin_price: '2000',
        price: '1000',
        unit: '單位'
      },
      hexAPI: {
        data: []
      },
      pagination: {},
      temporary: {}
    }
  },
  props: ['token'],
  methods: {
    // 功能類 //
    signout (e) {
      e.preventDefault()
      // 將存放在瀏覽器的 cookie清空
      document.cookie = 'hexToken=; expires=; path=/'
      this.hexAPI.data = []
      // window.location = "index.html"
      this.$router.push('/')
    },
    /* 取得遠端 API資料 */
    // 預設為 1
    getData (page = 1) {
      const vm = this
      // vm.axios的驗證指令，Bearer是後端用的
      // const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        // 原本是 products ->最終結果是取得所有資料
        // 改成 products?page=${page} -> 由後端給第一頁資料
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`)
        .then((res) => {
          // 取得該頁資料
          vm.hexAPI.data = res.data.data
          // 取得分頁資訊
          vm.pagination = res.data.meta.pagination
        })
    },
    /* 新增資料 */
    addProduct () {
      const vm = this
      // const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        .post(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`, vm.temporary)
        .then(() => {
          vm.getData()
        })
    },
    /* 新建資料 */
    // 將 this.product的屬性值複製到暫存
    initData () {
      this.temporary = Object.assign({}, this.product)
    },
    /* 複製資料 */
    // 將 v-for所取出的 item放入暫存
    copyData (item) {
      const vm = this
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
      vm.axios
        .get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`)
        .then((res) => {
          vm.temporary = Object.assign({}, res.data.data)
        })
    },
    /* 修改資料 */
    updateData () {
      const vm = this
      // if判斷，若有值則為 true
      if (vm.temporary.id) {
        vm.hexAPI.data.forEach((item) => {
          if (vm.temporary.id === item.id) {
            vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
            // patch跟 post一樣需要兩個參數 patch(`API網址`, 單一物件資料)，否則不會變更
            vm.axios
              .patch(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${vm.temporary.id}`, vm.temporary)
              .then(() => {
                vm.getData()
                vm.cleanData()
              })
          }
        })
      } else {
        vm.addProduct()
      }
      vm.cleanData()
    },
    /* 刪除資料 */
    deleteData () {
      const vm = this
      vm.hexAPI.data.forEach((item) => {
        if (vm.temporary.id === item.id) {
          vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
          vm.axios
            .delete(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${vm.temporary.id}`)
            .then(() => {
              vm.getData()
              vm.cleanDate()
            })
        }
      })
    },
    // 工具類 //
    cleanDate () {
      this.temporary = {}
    }
  },
  created () {
    // 取出 token 名稱，若為空值則跳回 login.html，防止直接進 products.html
    // 由於 Dashboard.vue的 <router-view :token="token.api_token" v-if="checkSucces" />影響
    // 若 v-if="checkSucces" 為 false，不會將頁面導入
    this.getData()
  }
}
</script>
