// index.js
Page({

    data: {
      world: 'girl'
    },
    onTap() {
      if (this.data.world === 'girl') {
        this.setData({
          world: 'boy'
        })
      } else {
        this.setData({
          world: 'girl'
        })
      }
    }
})
