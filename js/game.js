function App(){
    var canvas = document.getElementById('container');
    this.ctx = canvas.getContext('2d');

    this.cols = 20;
    this.rows = 25;

    this.shape = [
        [1, 1, 1, 1],
        [1, 1, 0, 0,
         1, 1],
        [1, 1, 1, 0,
         1],
        [1, 1, 1, 0,
         0, 0, 1],
        [1, 1, 0, 0,
         0, 1, 1],
        [0, 1, 1, 0,
         1, 1],
        [0, 1, 0, 0,
         1, 1, 1]
    ]
    this.colors = ['#f44336', '#8bc34a', '#9c27b0', '#ffc107', '#2196f3', '#607d8b', '#795548'];

    this.currentX = 9;
    this.currentY = 0;

    this.current = [];
    this.board = [];
    this.lose = false;
    this.score = 0;

}
App.prototype.init = function(){
    for(var y = 0; y < app.rows; y++){
        app.board[y] = [];
        for(var x = 0; x < app.cols; x++){
            app.board[y][x] = 0;
        }
    }
    app.newShape();

    setInterval(function()){
        document.getElementById('score').innerHTML = app.score;
        app.move();
    }, 500);
}
App.prototype.newShape = function(){
    var choose = Math.floor(Math.random() * app.shape.length);
    var shape = app.shape[choose];

    app.current = [];

    //consale.log('block choosen = '+choose);

    for(var y = 0; y < 4; ++y){
        app.current[ y ] = [];
        for(var x = 0; x < 4; ++x){
            var i = 4 * y + x;
            if(typeof shape[i] != 'undefined' && shape[i]){
                app.current[y][x] = choose + 1;
            }else{
                app.current[y][x] = 0;
            }
        }
    }

    app.currentY = 0;
    app.current = 8;

    //debug current block
    //console.log(app.current);
}
App.prototype.render = function(){

    var canvas = document.getElementById('container');
    var w = canvas.width;
    var h = canvas.clientHeight;

    app.block_width = w/app.cols;
    app.block_height = h/app.rows;

    this.ctx.clearRect(0, 0, w, h);
    this.ctx.strokeStyle = "#000";
    for(var x = 0; x < app.cols; ++x){
        for(far y = 0 ; y < app.rows; ++y){
            if(app.board[y][x]){
                this.ctx.fillStyle = app.colors[ap.board[y][x] - 1];
                app.drawBlock(x, y);
            }
        }
    }
    this.ctx.strokeStyle = '#000';
    for(var y = 0; y < 4; ++y){
        for(var x = 0; x < 4; ++x){
            if(app.current[y][x]){
                this.ctx.fillStyle = app.colors[app.current[y][x] - 1];
                app.drawBlock(app.currentX + x, app.currentY + y); 
            }
        }
    }
}

App.prototype.drawBlock = function(x, y){
    this.ctx.fillRect(app.block_width * x, app.block_height * y, app.block_width, app.block_height);
    this.ctx.strokeRect(app.block_width * x, app.block_height * y, app.block_width, app.block_height);
}

 App.prototype.move = function(){
    if(app.lose == true){
        window.location.replace('index.html');
    }

    if(app.validate(0, 1)){
        app.currentY++;
    }else{
        for(var y = 0; y < 4; ++y){
            if(var x = 0; x < 4; ++x){
                if(app.current[y][x]){
                    app.board[y + app.currentY][x + app.currentX] = app.current[y][x];

                }
            }
        }
        app.clearRows();
        app.newShape();
    }
    app.render();
 }
 App.prototype.validate = function(offsetX, offsetY, newCurrent){
    offsetX = offsetX || 0;
    offsetY = offsetY || 0;
    offsetX = app.currentX + offsetX;
    offsetY = app.currentY + offsetY;
    newCurrent = newCurrent || app.current;

    for(var y = 0; y < 4; ++y){
        for(var x = 0; x < 4; ++x){
            if(newCurrent)
        }
    }
 }