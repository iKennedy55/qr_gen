# QR Generator

A minimal and responsive client-side web application for generating customizable QR codes.

## Objective

Build a clean web app allowing users to generate offline QR codes from various formats (URLs, text, email links) with styling controls and downloadable outputs.

## Tech Stack

- HTML5
- Vanilla CSS
- Vanilla JavaScript (ES Modules)
- `qrcode` (NPM standalone build)

## Folder Structure

```
qr/
├── README.md
├── index.html
├── src/
│   ├── css/
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── main.css
│   └── js/
│       ├── main.js
│       └── modules/
│           ├── qr-generator.js
│           └── download.js
├── assets/
│   └── icons/
└── temp/
```

## Installation

1. Clone or download this project.
2. Serve the directory using a built-in web server to ensure ES Modules resolve correctly (e.g. `python -m http.server`).

## Usage

1. **Content**: Fill the text area with a URL, text, email, etc.
2. **Customization**: Use the options panel to tune the size, colors, or add a center logo image.
3. **Generate**: Create the QR visual preview.
4. **Download**: Export your configured QR code instantly as a PNG image.
