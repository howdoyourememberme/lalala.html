(function(window){
  function Snake(option){
    this.map = option.map;
    this.direction = "left";
    this.speed = option.speed ||1;
    this.size = option.size || 25;
    this.body = [
      {x : 15, y : 4},
      {x : 16, y : 4},
      {x : 17, y : 4}
      // {x : 18, y : 4},
      // {x : 19, y : 4},
      // {x : 20, y : 4},
      // {x : 21, y : 4},
      // {x : 22, y : 4},
      // {x : 23, y : 4},
      // {x : 23, y : 5},
      // {x : 23, y : 6},
      // {x : 23, y : 7},
      // {x : 23, y : 8},
      // {x : 23, y : 9},
      // {x : 23, y : 10}
    ];
  }

  Snake.prototype = {
    construcror:Snake,
    render : function(){
      for (var i = 0; i < this.body.length; i++) {
        var obj = this.body[i];
        var div = document.createElement("div");

        div.style.borderRadius = "50%";
        div.style.background = "lightblue";
        if(i==0){
          div.style.background = "yellow";
          div.style.zIndex = 999;
        }
        div.style.width = this.size + "px";
        div.style.height = this.size + "px";
        div.style.position = "absolute";
        div.style.left = obj.x * this.size + "px";
        div.style.top = obj.y * this.size + "px";

        this.map.map.appendChild(div);
      }
    },
    move : function(){
      for (var i = this.body.length - 1; i > 0; i--) {
        var obj = this.body;  
        obj[i].x = obj[i-1].x;
        obj[i].y = obj[i-1].y; 
      }
      var head = this.body[0];
      switch(this.direction){
        case "left":
          head.x -= 1;
          break;
        case "right":
          head.x += 1;
          break;
        case "up":
          head.y -= 1;
          break;
        case "down":
          head.y += 1;
          break;
      }
    },
    eat : function(){
      var last = this.body[this.body.length-1];
      var s = {
        x : last.x,
        y : last.y
      };
      this.body.push(s);
      // render();

    }
  }
  window.Snake = Snake;
})(window)