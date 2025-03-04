import React, { useState } from "react";
import "./App.css";
import img1 from "./photo/1.jpg";
import img2 from "./photo/2.jpg";
import img3 from "./photo/3.jpg";
import img4 from "./photo/4.jpg";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
      <div className="app">
        <header className="app-header">
          <h1>С Днём 8 Марта, моя дорогая!</h1>
          <p>
            Ты — самое дорогое, что есть в моей жизни. Спасибо за твою любовь,
            заботу и поддержку каждый день.
          </p>

          {/* Слайдер с изображениями */}
          <div className="image-slider">
            <button onClick={handlePrev} className="slider-button slider-prev">
              ❮
            </button>
            <img
                src={images[currentSlide]}
                alt="Цветы"
                className="slider-image"
            />
            <button onClick={handleNext} className="slider-button slider-next">
              ❯
            </button>
          </div>

          {/* Дополнительные декоративные элементы */}
          <div className="decorations">
            <div className="confetti">🎉</div>
            <div className="confetti">🎈</div>
            <div className="confetti">✨</div>
          </div>

          {/* Сердечки */}
          <div className="heart-container">
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
            <span className="heart">❤️</span>
          </div>

          {/* Личное сообщение */}
          <footer>
            <p>
              Помни, что я всегда рядом и готов разделить с тобой каждую секунду
              нашей жизни. С любовью, от твоего Никиты.
            </p>
          </footer>
        </header>
      </div>
  );
}

export default App;