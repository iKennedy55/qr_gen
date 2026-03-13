window.qrApp = window.qrApp || {};

// export canvas to png format
window.qrApp.downloadCanvas = function(canvas, filename = 'qr-code.png') {
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  
  link.href = dataUrl;
  link.download = filename;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
