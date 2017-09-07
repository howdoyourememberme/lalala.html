(function(window){
  function Food(option){
    this.map = option.map; //地图
    this.color = option.color || "yellow";
    this.x = 0; //第0行
    this.y = 0; //第0列
    this.size = option.size || 25;
    this.setPos();
  }

  Food.prototype.render = function(){
    var div = document.createElement("div");
    div.style.background=this.color;

    div.style.width = this.size + "px";
    div.style.height = this.size + "px";

    div.style.position='relative';
    div.style.left = this.x*this.size + "px";
    div.style.top = this.y*this.size + "px";
    div.style.borderRadius = "50%";
    this.map.map.appendChild(div);
  }

  Food.prototype.setPos = function(){
    this.x = parseInt(Math.random()*this.map.col);
    this.y = parseInt(Math.random()*this.map.row);
    console.log(this.x);
    console.log(this.y);

  }





  window.Food = Food;
})(window);