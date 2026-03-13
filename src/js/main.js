const { generateQRCode, downloadCanvas } = window.qrApp;

// load elements
const form = document.getElementById('qr-form');
const dataInput = document.getElementById('qr-data');
const sizeInput = document.getElementById('qr-size');
const colorDarkInput = document.getElementById('qr-color-dark');
const colorLightInput = document.getElementById('qr-color-light');
const logoInput = document.getElementById('qr-logo');
const previewContainer = document.getElementById('qr-preview-container');
const resultSection = document.getElementById('qr-result');
const downloadBtn = document.getElementById('btn-download');
const toast = document.getElementById('toast');

let currentCanvas = null;

// process config and render
form.addEventListener('submit', async () => {
  const data = dataInput.value.trim();
  if (!data) return;

  const options = {
    width: sizeInput.value,
    colorDark: colorDarkInput.value,
    colorLight: colorLightInput.value,
    logo: logoInput.files[0] || null
  };

  try {
    currentCanvas = await generateQRCode(data, options);
    
    previewContainer.innerHTML = '';
    
    // clone canvas for preview UI to decouple from actual image resolution
    const previewCanvas = document.createElement('canvas');
    const ctx = previewCanvas.getContext('2d');
    previewCanvas.width = currentCanvas.width;
    previewCanvas.height = currentCanvas.height;
    ctx.drawImage(currentCanvas, 0, 0);
    
    previewCanvas.style.maxWidth = '100%';
    previewCanvas.style.height = 'auto';
    previewCanvas.style.borderRadius = '8px';
    
    previewContainer.appendChild(previewCanvas);
    resultSection.classList.remove('hidden');
    
    // smooth UI transition
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (error) {
    console.error('Failed to generate QR code', error);
  }
});

// hook download action
downloadBtn.addEventListener('click', () => {
  if (currentCanvas) {
    downloadCanvas(currentCanvas, 'qr-code.png');
    showToast();
  }
});

function showToast() {
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
