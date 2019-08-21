// pages/danyuanpg/danyuanpg.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
		array: ['美国', '中国', '巴西', '日本'],
		index:0,
		toView: 'red',
		scrollTop: 0,
		kczd:[
			{
				time:'01:20～01:29',
				num:44,
				jd:'10%'
			},
			{
				time:'07:20～09:00',
				num:12,
				jd:'50%'
			},
			{
				time:'09:20～10:00',
				num:29,
				jd:'10%'
			},
			{
				time:'01:20～01:29',
				num:44,
				jd:'60%'
			},
			{
				time:'07:20～09:00',
				num:12,
				jd:'70%'
			},
			{
				time:'09:20～10:00',
				num:29,
				jd:'30%'
			},
			{
				time:'01:20～01:29',
				num:44,
				jd:'30%'
			},
			{
				time:'07:20～09:00',
				num:12,
				jd:'50%'
			},
			{
				time:'09:20～10:00',
				num:29,
				jd:'10%'
			},
		]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
	 bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
	upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
	jump(e){
		app.jump(e)
	}
})