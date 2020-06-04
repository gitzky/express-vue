<template>
  <div id="bg">
    <canvas id="cvs_bg"></canvas>
    <canvas id="cvs_1"></canvas>
    <canvas id="cvs_2"></canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.initCanvas();
    });
    // 当调整窗口大小时重绘canvas
    window.onresize = () => {
      this.initCanvas();
    };
  },
  methods: {
    initCanvas() {
      var config = {
        circle: {
          amount: 12, //气泡数量 18
          layer: 3,
          color: [102, 102, 102], // 色系 157, 97, 207
          alpha: 0.2, // 气泡透明度
        },
        line: {
          amount: 12,
          layer: 3,
          color: [255, 255, 255],
          alpha: 0.3,
        },
        speed: 0.5,
        angle: 20,
      };
      var cvs_bg = document.getElementById("cvs_bg"),
        cvs_1 = document.getElementById("cvs_1"),
        cvs_2 = document.getElementById("cvs_2");

      var bctx = cvs_bg.getContext("2d"),
        fctx1 = cvs_1.getContext("2d"),
        fctx2 = cvs_2.getContext("2d"),
        M = window.Math, // Cached Math
        degree = (config.angle / 360) * M.PI * 2,
        circles = [],
        lines = [],
        wWidth,
        wHeight,
        timer;

      requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback, element) {
          setTimeout(callback, 1000 / 60);
        };

      cancelAnimationFrame =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.msCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        clearTimeout;

      var setCanvasHeight = function() {
        // 获取视口宽度
        wWidth =
          document.documentElement.clientWidth || document.body.clientWidth;
        // 获取视口高度
        wHeight =
          document.documentElement.clientHeight || document.body.clientHeight;

        cvs_bg.width = wWidth;
        cvs_bg.height = wHeight;
        cvs_1.width = wWidth;
        cvs_1.height = wHeight;
        cvs_2.width = wWidth;
        cvs_2.height = wHeight;
      };

      var drawCircle = function(x, y, radius, color, alpha) {
        var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
        gradient.addColorStop(
          0,
          "rgba(" +
            color[0] +
            "," +
            color[1] +
            "," +
            color[2] +
            "," +
            alpha +
            ")"
        );
        gradient.addColorStop(
          1,
          "rgba(" +
            color[0] +
            "," +
            color[1] +
            "," +
            color[2] +
            "," +
            (alpha - 0.1) +
            ")"
        );

        fctx1.beginPath();
        fctx1.arc(x, y, radius, 0, M.PI * 2, true);
        fctx1.fillStyle = gradient;
        fctx1.fill();
      };

      var drawLine = function(x, y, width, color, alpha) {
        var endX = x + M.sin(degree) * width * 1,
          endY = y - M.cos(degree) * width * 1,
          gradient = fctx2.createLinearGradient(x, y, endX, endY);
        gradient.addColorStop(
          0,
          "rgba(" +
            color[0] +
            "," +
            color[1] +
            "," +
            color[2] +
            "," +
            alpha +
            ")"
        );
        gradient.addColorStop(
          1,
          "rgba(" +
            color[0] +
            "," +
            color[1] +
            "," +
            color[2] +
            "," +
            (alpha - 0.1) +
            ")"
        );

        fctx2.beginPath();
        fctx2.moveTo(x, y);
        fctx2.lineTo(endX, endY);
        fctx2.lineWidth = 3;
        fctx2.lineCap = "round";
        fctx2.strokeStyle = gradient;
        fctx2.stroke();
      };

      var drawBack = function() {
        bctx.clearRect(0, 0, wWidth, wHeight);

        var gradient = [];

        gradient[0] = bctx.createRadialGradient(
          wWidth * 0.3,
          wHeight * 0.1,
          0,
          wWidth * 0.3,
          wHeight * 0.1,
          wWidth * 0.9
        );
        // 0, 26, 77
        gradient[0].addColorStop(0, "rgb(3, 3, 3)");
        gradient[0].addColorStop(1, "transparent");

        bctx.translate(wWidth, 0);
        bctx.scale(-1, 1);
        bctx.beginPath();
        bctx.fillStyle = gradient[0];
        bctx.fillRect(0, 0, wWidth, wHeight);

        gradient[1] = bctx.createRadialGradient(
          wWidth * 0.1,
          wHeight * 0.1,
          0,
          wWidth * 0.3,
          wHeight * 0.1,
          wWidth
        );
        // 0, 150, 240
        gradient[1].addColorStop(0, "rgb(3, 3, 3)");
        gradient[1].addColorStop(0.8, "transparent");

        bctx.translate(wWidth, 0);
        bctx.scale(-1, 1);
        bctx.beginPath();
        bctx.fillStyle = gradient[1];
        bctx.fillRect(0, 0, wWidth, wHeight);

        gradient[2] = bctx.createRadialGradient(
          wWidth * 0.1,
          wHeight * 0.5,
          0,
          wWidth * 0.1,
          wHeight * 0.5,
          wWidth * 0.5
        );
        // 40, 20, 105
        gradient[2].addColorStop(0, "rgba(154, 135, 102)");
        gradient[2].addColorStop(0.3, "transparent");

        bctx.beginPath();
        bctx.fillStyle = gradient[2];
        bctx.fillRect(0, 0, wWidth, wHeight);
      };

      var animate = function() {
        var sin = M.sin(degree),
          cos = M.cos(degree);

        if (config.circle.amount > 0 && config.circle.layer > 0) {
          fctx1.clearRect(0, 0, wWidth, wHeight);
          for (var i = 0, len = circles.length; i < len; i++) {
            var item = circles[i],
              x = item.x,
              y = item.y,
              radius = item.radius,
              speed = item.speed;

            if (x > wWidth + radius) {
              x = -radius;
            } else if (x < -radius) {
              x = wWidth + radius;
            } else {
              x += sin * speed;
            }

            if (y > wHeight + radius) {
              y = -radius;
            } else if (y < -radius) {
              y = wHeight + radius;
            } else {
              y -= cos * speed;
            }

            item.x = x;
            item.y = y;

            drawCircle(x, y, radius, item.color, item.alpha);
          }
        }

        if (config.line.amount > 0 && config.line.layer > 0) {
          fctx2.clearRect(0, 0, wWidth, wHeight);
          for (var j = 0, len = lines.length; j < len; j++) {
            var item = lines[j],
              x = item.x,
              y = item.y,
              width = item.width,
              speed = item.speed;

            if (x > wWidth + width * sin) {
              x = -width * sin;
            } else if (x < -width * sin) {
              x = wWidth + width * sin;
            } else {
              x += sin * speed;
            }

            if (y > wHeight + width * cos) {
              y = -width * cos;
            } else if (y < -width * cos) {
              y = wHeight + width * cos;
            } else {
              y -= cos * speed;
            }

            item.x = x;
            item.y = y;
            drawLine(x, y, width, item.color, item.alpha);
          }
        }

        timer = requestAnimationFrame(animate);
      };

      var createItem = function() {
        circles = [];
        lines = [];

        if (config.circle.amount > 0 && config.circle.layer > 0) {
          for (var i = 0; i < config.circle.amount / config.circle.layer; i++) {
            for (var j = 0; j < config.circle.layer; j++) {
              circles.push({
                x: M.random() * wWidth,
                y: M.random() * wHeight,
                radius: M.random() * (20 + j * 5) + (20 + j * 5) * 0.5, // 气泡大小
                color: config.circle.color,
                alpha: M.random() * 0.2 + (config.circle.alpha - j * 0.1),
                speed: config.speed * (1 + j * 0.5), // 气泡速度
              });
            }
          }
        }

        if (config.line.amount > 0 && config.line.layer > 0) {
          for (var m = 0; m < config.line.amount / config.line.layer; m++) {
            for (var n = 0; n < config.line.layer; n++) {
              lines.push({
                x: M.random() * wWidth,
                y: M.random() * wHeight,
                width: M.random() * (20 + n * 5) + (20 + n * 5) * 2, // 线的长度
                color: config.line.color,
                alpha: M.random() * 0.2 + (config.line.alpha - n * 0.1),
                speed: config.speed * (1 + n * 1), // 线的速度
              });
            }
          }
        }

        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(animate);
        drawBack();
      };

      setCanvasHeight();
      createItem();
    },
  },
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
