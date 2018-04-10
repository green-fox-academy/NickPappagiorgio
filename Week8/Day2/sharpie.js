const sharpie = {
  new: function (color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  },

  use: function () {
    this.inkAmount -= this.width;
  }
};

const blue = sharpie.new('blue', 20);

function consumes() {
  while (sharpie.inkAmount > 0) {
    sharpie.use();
    console.log(sharpie.inkAmount);
  }
}

consumes();
