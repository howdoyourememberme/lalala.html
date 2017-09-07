(function(w){

  function Game(){
    this.map = new Map({color : "hotpink"});
    this.food = new Food({map:this.map});
    this.snake = new Snake({map:this.map}); 
  }
  Game.prototype = {
    constructor:Game,
    gameStart: function(){
      this.map.render();
      this.userControl();
      // this.food.setPos();
      var that = this;

      this.timer = setInterval(function(){
        that.map.map.innerHTML='';
        that.food.render();
        that.snake.move();
        that.snake.render();
        that.impact();
        that.gameover();
      },300);
    },
    impact : function(){
      var header = this.snake.body[0];
      // console.log(header);
      // alert('吃!');
      if(header.x==this.food.x&&header.y==this.food.y){
        this.snake.eat();
        this.food.setPos();
      }
    },
    gameover : function(){
      var header = this.snake.body[0];
      if(header.x <0 ||header.y<0|| header.x>this.map.col-1 ||header.y>this.map.row-1){
        clearInterval(this.timer);
        alert("你挂啦！");

      }
    },
    userControl : function(){
      var that = this;
      window.onkeydown = function(e) {
        var code = e.keyCode;
        switch(code){
          case 37:
          that.snake.direction = "left";
          break;
          case 38:
          that.snake.direction = "up";
          break;
          case 39:
          that.snake.direction = "right";
          break;
          case 40:
          that.snake.direction = "down";
          break;
        }
      }
    }
  }






  w.Game = Game;
})(window)