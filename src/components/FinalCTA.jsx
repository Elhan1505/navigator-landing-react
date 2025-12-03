import React from 'react';
import { Section } from './Section';
import { Button } from './Button';

export const FinalCTA = () => {
  return (
    <Section id="final-cta" className="final-cta-section">
      <h2 className="section-title">Каждый день в выгорании — это потерянный день жизни</h2>

      <p className="section-text">
        Ты можешь продолжать работать на автопилоте, разрушая здоровье и отношения с семьей. Можешь потратить ещё 5-10 лет в поисках себя методом проб и ошибок.
      </p>
      <p className="section-text">
        А можешь за 3 недели получить карту своих возможностей через Telegram-бота NAVIGATOR и начать движение к профессии, которая даст энергию вместо выгорания.
      </p>

      <h3 className="subsection-title">Выбор за тобой:</h3>

      <div className="choice-grid">
        <div className="choice-item negative">
          <h4>Путь 1: Продолжать терпеть</h4>
          <ul>
            <li>❌ Здоровье будет разрушаться дальше</li>
            <li>❌ Семейные отношения ухудшатся</li>
            <li>❌ Годы жизни уйдут в никуда</li>
            <li>❌ Страх перемен будет только расти</li>
          </ul>
        </div>

        <div className="choice-item positive">
          <h4>Путь 2: Начать менять жизнь сегодня</h4>
          <ul>
            <li>✓ За 3 недели получить 3-5 конкретных направлений</li>
            <li>✓ Понять где твои таланты максимально востребованы</li>
            <li>✓ Получить план безопасного перехода без риска для семьи</li>
            <li>✓ Вернуть энергию и смысл в профессиональную деятельность</li>
          </ul>
        </div>
      </div>

      <p className="transformation-promise">
        <strong>Через год ты будешь благодарить себя за решение, принятое сегодня.</strong>
      </p>

      <Button variant="primary" className="final-cta-button">
        → НАЧАТЬ ПОИСК СВОЕГО ПРИЗВАНИЯ
      </Button>

      <div className="final-details">
        <p className="guarantee">Гарантия возврата 100% если не получишь результат</p>
        <div className="pricing-details">
          <p><strong>Стоимость:</strong> 50 000 рублей</p>
          <p><strong>Рассрочка:</strong> 25 000 + 25 000 через неделю</p>
          <p><strong>Срок:</strong> 3 недели</p>
          <p><strong>Формат:</strong> Telegram-бот NAVIGATOR, доступен 24/7</p>
        </div>
        <p className="limitation">
          <em>Количество активных доступов ограничено для качественной обработки персональных анализов.</em>
        </p>
      </div>
    </Section>
  );
};
