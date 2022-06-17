function draw(isMain) {
  const canvas = document.getElementById('canvas');
  canvas.width = 850;
  canvas.height = 650;
  if (canvas.getContext) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y,   x + w, y + h, r);
      this.arcTo(x + w, y + h, x,   y + h, r);
      this.arcTo(x,   y + h, x,   y,   r);
      this.arcTo(x,   y,   x + w, y,   r);
      this.closePath();
      return this;
    }

    const ctx = canvas.getContext('2d');
    
    let lt = 9;           // line thickness

    let lw = 345;         // layer widht
    let lh = 500;         // layer height
    let lr = 24;          // layer radius

    let ix = 50;          // initial x
    let iy = 10;          // initial y

    let sx = 45;          // step x
    let sy = 45;          // step y

    let dy = 30;          // y line displacement
    let liW = 330;        // line width
    let lpc = "#5e17eb";  // light purple color
    let wc = "#FFF";      // white color

    ctx.strokeStyle = lpc;
    ctx.fillStyle = wc;

    ctx.lineWidth = lt;
    if (isMain) {
      for(let i = 0; i <= 2; ++i) {

        ctx.strokeStyle = lpc;
        ctx.roundRect(ix, iy, lw, lh, lr).fill();
        ctx.roundRect(ix, iy, lw, lh, lr).stroke();
  
        ctx.strokeStyle = wc;
        ctx.beginPath();
        ctx.moveTo(ix + lw + lt / 2, iy + dy);
        ctx.lineTo(ix + lw + liW + lt / 2, iy + dy); 
        ctx.stroke();
        ix += sx;
        iy += sy;
      }
    }
    else {
      ctx.strokeStyle = lpc;
      ctx.roundRect(ix, iy, lw, lh, lr).fill();
      ctx.roundRect(ix, iy, lw, lh, lr).stroke();
    }
  }
}

$('.navbar-toggler').click(function(){

});
