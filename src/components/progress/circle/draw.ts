export default function drawCircle(canvas, progress) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let step = 0;
    progress = (progress / 100) * 360; // 进度转化为角度
    console.log(progress);
    initProgressBar(ctx);
    startProgress(ctx, step, progress);
  }
}

function initProgressBar(ctx): void {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#CCCCCC";
  ctx.arc(50, 60, 30, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();
}

function startProgress(ctx, step = 0, progress): void {
  let from = -Math.PI / 2;
  let to = (Math.PI / 180) * step + from;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "green";
  ctx.arc(50, 60, 30, -Math.PI / 2, to, false);
  ctx.stroke();
  ctx.closePath();
  step++;
  if (step <= progress) {
    setTimeout(() => {
      startProgress(ctx, step, progress);
    }, 10);
  }
}
