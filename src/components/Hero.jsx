import React from 'react';
import { Section } from './Section';
import { Button } from './Button';

export const Hero = () => {
  return (
    <Section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Устал работать как зомби?<br />
          Найди профессию, которая зажжет тебя изнутри
        </h1>
        <p className="hero-subtitle">
          За 3 недели получишь 3-5 конкретных направлений, где твои таланты будут максимально востребованы — с планом безопасного перехода без риска для семьи
        </p>
        <p className="hero-text">
          Ты просыпаешься и не понимаешь, зачем идешь на работу. Делаешь задачи механически, без души. К вечеру приходишь домой выжатым, срываешься на близких. Работаешь ради семьи, но именно семью и разрушаешь своим состоянием.
        </p>
        <p className="hero-solution">
          Telegram-бот NAVIGATOR за 3 недели найдёт профессиональные направления, где ты перестанешь выгорать и начнешь получать энергию от работы.
        </p>
        <Button variant="primary" className="hero-cta">
          → Начать поиск своего призвания
        </Button>
        <p className="hero-guarantee">
          Гарантия возврата денег, если не получишь результат
        </p>
      </div>
    </Section>
  );
};
