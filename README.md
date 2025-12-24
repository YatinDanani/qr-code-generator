# Scan & Visit - QR Code Generator

A simple, elegant web application that generates QR codes from text or URLs instantly. Creating QR codes has never been this fun and easy!

## 🌟 Features

- **Instant QR Code Generation** - Convert any text or URL into a QR code in seconds
- **Clean, Modern UI** - Minimalist design with smooth animations
- **Error Handling** - Visual feedback with shake animation when input is empty
- **Responsive Design** - Works seamlessly across different screen sizes
- **Smooth Animations** - Elegant entrance effects using Intersection Observer API
- **Accessibility** - Respects user's motion preferences with `prefers-reduced-motion`

## 🚀 Live Demo

Check out the live application here: [Scan & Visit](https://webhome.csc.uvic.ca/~yatindanani/fullmarks.html)

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling, animations, and transitions
- **JavaScript (ES6)** - Interactive functionality and API integration
- **QR Server API** - QR code generation service

## 📋 How to Use

1. Visit the website
2. Enter any text or URL in the input field
3. Click the "Generate QR Code" button
4. Your QR code will appear instantly!
5. Scan the QR code with any smartphone camera

## 💻 Installation & Setup

To run this project locally:

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Open `fullmarks.html` in your web browser:
```bash
# On macOS
open fullmarks.html

# On Linux
xdg-open fullmarks.html

# On Windows
start fullmarks.html
```

Or simply drag and drop the `fullmarks.html` file into your browser.

## 📁 Project Structure

```
.
├── fullmarks.html      # Main HTML file
├── 99+1.css           # Stylesheet with animations
├── script.js          # JavaScript for QR generation and animations
└── README.md          # Project documentation
```

## 🎨 Key Features Explained

### Smooth Scroll Animations
The project uses the **Intersection Observer API** to create elegant fade-in animations as elements come into view:
- Header slides down and fades in
- Container slides up and fades in
- Animations respect user's motion preferences

### Input Validation
If users try to generate a QR code without entering text:
- Input field shakes with a subtle animation
- Visual feedback ensures users know what went wrong

### QR Code Display
- QR codes smoothly expand into view
- Clean border and padding for professional appearance
- Generated using the reliable QR Server API

## 🌐 API Reference

This project uses the **QR Server API** for QR code generation:
```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={your-text}
```

## 🎯 Future Enhancements

Potential features to add:
- [ ] Customizable QR code colors
- [ ] Different QR code sizes
- [ ] Download QR code as image
- [ ] QR code history/saved codes
- [ ] Error correction level options
- [ ] Dark mode toggle

## 👨‍💻 Author

**Yatin Danani**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- QR code generation powered by [QR Server API](https://goqr.me/api/)
- Font: Times New Roman
- Inspired by modern minimalist design principles

---

Made with ❤️ by Yatin Danani
