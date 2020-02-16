// miniprogram/pages/manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    date:'',
    lists: [
      { massage: "1111111111111111111111" },
      { massage: "2222222222222222222222" },
      { massage: "3333333333333333333333" },
      { massage: "4444444444444444444444" },
      { massage: "5555555555555555555555" },
      { massage: "6666666666666666666666" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
/**
 * 获取时间
 */
nowTime(){
  var TIME = util.formatTime(new Date());
  this.setData({
    time: TIME,
  });
}
})