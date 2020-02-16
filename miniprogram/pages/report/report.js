
var self;
Page({
  data: {

   name:"232323",
   idcard:null,



    array: ['业主','租客','外来客人'],
    objectArray: [
      {
        id: 0,
        name: '业主'
      },
      {
        id: 1,
        name: '租客'
      }, {
        id: 2,
        name: '外来客人'
      }
     
    ],
    index: 0,

    sexArray:['男','女'],
    objectSexArray:[
      {
        id: 0,
        name: '男'
      },
      {
        id: 1,
        name: '女'
      }

    ]
    ,
    sexindex:0,
    
    region: ['恭城县', '恭城镇', '茶南社区'],
    customItem: '全部',
    statusItems: [
      { name: '正常', value: '正常' },
      { name: '发烧', value: '发烧'},
      { name: '咳嗽', value: '咳嗽' },
      { name: '感冒', value: '感冒' },
      { name: '乏力', value: '乏力' },
      { name: '腹泻', value: '腹泻' },
      { name: '其他', value: '其他' },
    ]
  ,
  outText:"无",
  touchKind:"无",

  },
  onLoad: function (options) {
    console.log("onload11");
    self = this;
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },


  bindSexChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sexindex: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

  // , formSubmit: function (e) {
  //   //console.log(e.detail.name['txtname']) ;
  //   console.log('form发生了submit事件，携带数据为：', e.detail.value)
  //   onAdd(e);
  // },
,
  bindOutRecord(e){//出行记录
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      outText: e.detail.value
    })

  },
  bindTouchKind(e){//接触史
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      touchKind: e.detail.value
    })

  },
  formSubmit: function (e)  {

    console.log(self.data.name);
    
    const db = wx.cloud.database()
    db.collection('Resident').add({
      data: {
        name:e.detail.value.name,
        identityNO:e.detail.value.idcard,
        state: e.detail.value
      },
      success: res => {
        console.log(e.data.detail.value);
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
         name:e.detail.value.name
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
})