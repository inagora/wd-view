export default function drawLine(canvas, progress) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let step = 0;
    startProgress(ctx, step, progress);
  }
}

function initProgressBar(ctx): void {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#CCCCCC";
  ctx.lineTo(10, 10);
  ctx.lineTo(110, 10);
  ctx.stroke();
  ctx.closePath();
}

function startProgress(ctx, step = 0, progress): void {
  ctx.clearRect(0, 0, 300, 20);
  initProgressBar(ctx);
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "green";
  ctx.lineTo(10, 10);
  ctx.lineTo(10 + step, 10);
  ctx.stroke();
  ctx.closePath();
  ctx.closePath();
  // 进度显示
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.fillStyle = "#4a4a4a";
  ctx.font = "14px serif";
  ctx.fillText(step + "%", 120, 15);
  ctx.fill();
  ctx.closePath();
  step++;
  if (step <= progress) {
    setTimeout(() => {
      startProgress(ctx, step, progress);
    }, 20);
  }
}
