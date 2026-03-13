window.qrApp = window.qrApp || {};

// generate qr code on canvas
window.qrApp.generateQRCode = async function(data, options) {
  const canvas = document.createElement('canvas');
  const size = parseInt(options.width, 10);
  
  canvas.width = size;
  canvas.height = size;

  // configure layout
  const qrOptions = {
    width: size,
    margin: 2,
    color: {
      dark: options.colorDark,
      light: options.colorLight
    },
    errorCorrectionLevel: options.logo ? 'H' : 'M'
  };

  await QRCode.toCanvas(canvas, data, qrOptions);

  // draw logo overlay
  if (options.logo) {
    await drawLogo(canvas, options.logo, size, options.colorLight);
  }

  return canvas;
};

// draw logo in the center
function drawLogo(canvas, logoFile, canvasSize, bgFill) {
  return new Promise((resolve, reject) => {
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const logoSize = canvasSize * 0.25;
      const x = (canvasSize - logoSize) / 2;
      const y = (canvasSize - logoSize) / 2;
      
      // draw solid background to improve readability against qr dots
      ctx.fillStyle = bgFill || '#ffffff';
      ctx.fillRect(x - 4, y - 4, logoSize + 8, logoSize + 8);
      
      ctx.drawImage(img, x, y, logoSize, logoSize);
      resolve();
    };
    
    img.onerror = reject;
    img.src = URL.createObjectURL(logoFile);
  });
}
