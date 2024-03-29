const QR = require("./qrcode.js");

export default class Painter {
 
  constructor(ctx, data,posterData) {//posterData是的做划线价格的用的
    this.ctx = ctx;
    this.data = data;
    this.posterData = posterData;
    
  }
  
  
  paint(callback) {
    this.style = {
      width: this.data.width.toPx(),
      height: this.data.height.toPx()
    };

    this._background();
    if (JSON.stringify(this.posterData) != '{}' && this.posterData) {
      let priceH = this._fillAbsText(this.posterData.salesPrice)
      if (this.posterData?.markPrice) {
        let screenK = 750/getApp().systemInfo.windowWidth
        this.posterData.markPrice.css.left =this.posterData.salesPrice.css.left.toPx()*screenK +priceH.measuredWith*screenK+this.posterData.markPrice.css.ml.toPx()*screenK+'rpx'
        
        this._fillAbsText( this.posterData.markPrice)
      } 
    }
    for (const view of this.data.views) {
      this._drawAbsolute(view);
    }
    this.ctx.draw(false, () => {
      callback();
    });
  }

  _background() {
    this.ctx.save();
    const {
      width,
      height
    } = this.style;
    const bg = this.data.background;
    this.ctx.translate(width / 2, height / 2);

    this._doClip(this.data.borderRadius, width, height);

    if (!bg) {
      // 如果未设置背景，则默认使用白色
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
    } else if (bg.startsWith('#') || bg.startsWith('rgba') || bg.toLowerCase() === 'transparent') {
      // 背景填充颜色
      this.ctx.fillStyle = bg;
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
    } else {
      // 背景填充图片
      this.ctx.drawImage(bg, -(width / 2), -(height / 2), width, height);
    }

    this.ctx.restore();
  }

  _drawAbsolute(view) {
    // 证明 css 为数组形式，需要合并
    if (view.css && view.css.length) {
      /* eslint-disable no-param-reassign */
      view.css = Object.assign(...view.css);
    }

    switch (view.type) {
      case 'image':
        this._drawAbsImage(view);

        break;

      case 'text':
        this._fillAbsText(view);

        break;

      case 'rect':
        this._drawAbsRect(view);

        break;

      case 'qrcode':
        this._drawQRCode(view);

        break;

      default:
        break;
    }
  }
  /**
   * 根据 borderRadius 进行裁减
   */


  _doClip(borderRadius, width, height) {
    if (borderRadius && width && height) {
      const r = Math.min(borderRadius.toPx(), width / 2, height / 2); // 防止在某些机型上周边有黑框现象，此处如果直接设置 setFillStyle 为透明，在 Android 机型上会导致被裁减的图片也变为透明， iOS 和 IDE 上不会
      // setGlobalAlpha 在 1.9.90 起支持，低版本下无效，但把 setFillStyle 设为了 white，相对默认的 black 要好点

      this.ctx.globalAlpha = 0;
      this.ctx.fillStyle = 'white';
      this.ctx.beginPath();
      this.ctx.arc(-width / 2 + r, -height / 2 + r, r, 1 * Math.PI, 1.5 * Math.PI);
      this.ctx.lineTo(width / 2 - r, -height / 2);
      this.ctx.arc(width / 2 - r, -height / 2 + r, r, 1.5 * Math.PI, 2 * Math.PI);
      this.ctx.lineTo(width / 2, height / 2 - r);
      this.ctx.arc(width / 2 - r, height / 2 - r, r, 0, 0.5 * Math.PI);
      this.ctx.lineTo(-width / 2 + r, height / 2);
      this.ctx.arc(-width / 2 + r, height / 2 - r, r, 0.5 * Math.PI, 1 * Math.PI);
      this.ctx.closePath();
      this.ctx.fill(); // 在 ios 的 6.6.6 版本上 clip 有 bug，禁掉此类型上的 clip，也就意味着，在此版本微信的 ios 设备下无法使用 border 属性

      if (!(getApp().globalData.systemInfo && getApp().globalData.systemInfo.version <= '6.6.6' && getApp().globalData.systemInfo.platform === 'ios')) {
        this.ctx.clip();
      }

      this.ctx.globalAlpha = 1;
    }
  }
  /**
   * 画边框
   */


  _doBorder(view, width, height) {
    if (!view.css) {
      return;
    }

    const {
      borderRadius,
      borderWidth,
      borderColor
    } = view.css;

    if (!borderWidth) {
      return;
    }

    this.ctx.save();

    this._preProcess(view, true);

    let r;

    if (borderRadius) {
      r = Math.min(borderRadius.toPx(), width / 2, height / 2);
    } else {
      r = 0;
    }

    const lineWidth = borderWidth.toPx();
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = borderColor || 'black';
    this.ctx.beginPath();
    this.ctx.arc(-width / 2 + r, -height / 2 + r, r + lineWidth / 2, 1 * Math.PI, 1.5 * Math.PI);
    this.ctx.lineTo(width / 2 - r, -height / 2 - lineWidth / 2);
    this.ctx.arc(width / 2 - r, -height / 2 + r, r + lineWidth / 2, 1.5 * Math.PI, 2 * Math.PI);
    this.ctx.lineTo(width / 2 + lineWidth / 2, height / 2 - r);
    this.ctx.arc(width / 2 - r, height / 2 - r, r + lineWidth / 2, 0, 0.5 * Math.PI);
    this.ctx.lineTo(-width / 2 + r, height / 2 + lineWidth / 2);
    this.ctx.arc(-width / 2 + r, height / 2 - r, r + lineWidth / 2, 0.5 * Math.PI, 1 * Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.restore();
  }

  _preProcess(view, notClip) {
    let width;
    let height;
    let extra;

    switch (view.type) {
      case 'text':
        {
          const fontWeight = view.css.fontWeight === 'bold' ? 'bold' : 'normal';
          view.css.fontSize = view.css.fontSize ? view.css.fontSize : '20rpx';
          this.ctx.font = `normal ${fontWeight} ${view.css.fontSize.toPx()}px sans-serif`; // this.ctx.setFontSize(view.css.fontSize.toPx());

          const textLength = this.ctx.measureText(view.text).width;
          width = view.css.width ? view.css.width.toPx() : textLength; // 计算行数

          const calLines = Math.ceil(textLength / width);
          const lines = view.css.maxLines < calLines ? view.css.maxLines : calLines;
          const lineHeight = view.css.lineHeight ? view.css.lineHeight.toPx() : view.css.fontSize.toPx();
          height = lineHeight * lines;
          extra = {
            lines: lines,
            lineHeight: lineHeight
          };
          break;
        }

      case 'image':
        {
          // image 如果未设置长宽，则使用图片本身的长宽
          const ratio = getApp().globalData.systemInfo.pixelRatio ? getApp().globalData.systemInfo.pixelRatio : 2;
          width = view.css && view.css.width ? view.css.width.toPx() : Math.round(view.sWidth / ratio);
          height = view.css && view.css.height ? view.css.height.toPx() : Math.round(view.sHeight / ratio);
          break;
        }

      default:
        {
          if (!(view.css.width && view.css.height)) {
            
            return;
          }

          width = view.css.width.toPx();
          height = view.css.height.toPx();
        }
    }

    const x = view.css && view.css.right ? this.style.width - view.css.right.toPx(true) : view.css && view.css.left ? view.css.left.toPx(true) : 0;
    const y = view.css && view.css.bottom ? this.style.height - height - view.css.bottom.toPx(true) : view.css && view.css.top ? view.css.top.toPx(true) : 0;
    const angle = view.css && view.css.rotate ? this._getAngle(view.css.rotate) : 0; // 当设置了 right 时，默认 align 用 right，反之用 left

    const align = view.css && view.css.align ? view.css.align : view.css && view.css.right ? 'right' : 'left';

    switch (align) {
      case 'center':
        this.ctx.translate(x, y + height / 2);
        break;

      case 'right':
        this.ctx.translate(x - width / 2, y + height / 2);
        break;

      default:
        this.ctx.translate(x + width / 2, y + height / 2);
        break;
    }

    this.ctx.rotate(angle);

    if (!notClip && view.css && view.css.borderRadius) {
      this._doClip(view.css.borderRadius, width, height);
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y,
      extra: extra
    };
  }

  _drawQRCode(view) {
    this.ctx.save();
    const {
      width,
      height
    } = this._preProcess(view);

    QR.api.draw(view.content, this.ctx, -width / 2, -height / 2, width, height, view.css.background, view.css.color);
    this.ctx.restore();

    this._doBorder(view, width, height);
  }

  _drawAbsImage(view) {
    if (!view.url) {
      return;
    }

    this.ctx.save();

    const {
      width,
      height
    } = this._preProcess(view); // 获得缩放到图片大小级别的裁减框


    let rWidth;
    let rHeight;
    let startX = 0;
    let startY = 0;

    if (width > height) {
      rHeight = Math.round(view.sWidth / width * height);
      rWidth = view.sWidth;
    } else {
      rWidth = Math.round(view.sHeight / height * width);
      rHeight = view.sHeight;
    }

    if (view.sWidth > rWidth) {
      startX = Math.round((view.sWidth - rWidth) / 2);
    }

    if (view.sHeight > rHeight) {
      startY = Math.round((view.sHeight - rHeight) / 2);
    }

    if (view.css && view.css.mode === 'scaleToFill') {
      this.ctx.drawImage(view.url, -(width / 2), -(height / 2), width, height);
    } else {
      this.ctx.drawImage(view.url, startX, startY, rWidth, rHeight, -(width / 2), -(height / 2), width, height);
    }

    this.ctx.restore();

    this._doBorder(view, width, height);
    
  }
  _fillAbsText(view) {
    if (!view.text) {
      return;
    }

    this.ctx.save();

    const {
      width,
      height,
      extra
    } = this._preProcess(view);
    this.ctx.fillStyle = view.css.color || 'black';
    const {
      lines,
      lineHeight
    } = extra;
    const preLineLength = Math.round(view.text.length / lines);
    let start = 0;
    let alreadyCount = 0;
    let text = view.text.substr(start, alreadyCount);
    let measuredWith = this.ctx.measureText(text).width; // 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
    for (let i = 0; i < lines; ++i) {
      alreadyCount = preLineLength;
     
      // 如果已经到文本末尾，也不要进行该循环

      while (start + alreadyCount <= view.text.length && (width - measuredWith > view.css.fontSize.toPx() || measuredWith > width)) {
        if (measuredWith < width) {
          text = view.text.substr(start, ++alreadyCount);
        } else {
          if (text.length <= 1) {
            // 如果只有一个字符时，直接跳出循环
            break;
          }

          text = view.text.substr(start, --alreadyCount);
        }

        measuredWith = this.ctx.measureText(text).width;
      }

      start += text.length; // 如果是最后一行了，发现还有未绘制完的内容，则加...

      if (i === lines - 1 && start < view.text.length) {
        while (this.ctx.measureText(`${text}...`).width > width) {
          if (text.length <= 1) {
            // 如果只有一个字符时，直接跳出循环
            break;
          }

          text = text.substring(0, text.length - 1);
        }

        text += '...';
        measuredWith = this.ctx.measureText(text).width;
      }

      this.ctx.setTextAlign(view.css.align ? view.css.align : 'left');
      let x;

      switch (view.css.align) {
        case 'center':
          x = 0;
          break;

        case 'right':
          x = width / 2;
          break;

        default:
          x = -(width / 2);
          break;
      }

      const y = -(height / 2) + (i === 0 ? view.css.fontSize.toPx() : view.css.fontSize.toPx() + i * lineHeight);

      if (view.css.textStyle === 'stroke') {
        this.ctx.strokeText(text, x, y, measuredWith);
      } else {
        this.ctx.fillText(text, x, y, measuredWith);
      }
      const fontSize = view.css.fontSize.toPx();
      if (view.css.textDecoration) {
        this.ctx.beginPath();

        if (/\bunderline\b/.test(view.css.textDecoration)) {
          this.ctx.moveTo(x, y);
          this.ctx.lineTo(x + measuredWith, y);
        }

        if (/\boverline\b/.test(view.css.textDecoration)) {
          this.ctx.moveTo(x, y - fontSize);
          this.ctx.lineTo(x + measuredWith, y - fontSize);
        }
        if (/\bline-through\b/.test(view.css.textDecoration)) {
          this.ctx.moveTo(x, y - fontSize / 3);
          this.ctx.lineTo(x + measuredWith, y - fontSize / 3);
        }

        this.ctx.closePath();
        this.ctx.strokeStyle = view.css.color;
        this.ctx.stroke();
      }
    }

    this.ctx.restore();
    
    this._doBorder(view, width, height);
    return {measuredWith}
  }

  _drawAbsRect(view) {
    this.ctx.save();

    const {
      width,
      height
    } = this._preProcess(view);

    this.ctx.fillStyle = view.css.color;
    this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
    this.ctx.restore();

    this._doBorder(view, width, height);
  }

  _getAngle(angle) {
    return Number(angle) * Math.PI / 180;
  }

}