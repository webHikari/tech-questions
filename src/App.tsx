import { Tabs, Container, Title, Paper, Accordion } from '@mantine/core'
import '@mantine/core/styles.css'
import './App.css'
import hardQuestions from './hardQuestions'
import easyQuestions from './easyQuestions'
import roflQuestions from './roflQuestions'

function App() {
  return (
      <Container className="app-container">
        <Title order={1} ta="center" mb={30}>psy tech interview</Title>
        <Paper shadow="xl" radius="lg" p={0} className="tabs-container">
          <Tabs defaultValue="Сложные вопросы" variant="default" className="custom-tabs">
            <Tabs.List>
              <Tabs.Tab value="Сложные вопросы">Сложные вопросы</Tabs.Tab>
              <Tabs.Tab value="Легкие вопросы">Легкие вопросы</Tabs.Tab>
              <Tabs.Tab value="Рофло-вопросы">Рофло-вопросы</Tabs.Tab>
              <Tabs.Tab value="Инфа">Инфа</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Сложные вопросы">
              <div className="accordion-container">
                <Accordion variant="separated">
                  {hardQuestions.map((qa, index) => (
                    <Accordion.Item key={index} value={`hard-${index}`}>
                      <Accordion.Control>
                        <div className="question-title">{qa.question}</div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="answer-content">{qa.answer}</div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Легкие вопросы">
              <div className="accordion-container">
                <Accordion variant="separated">
                  {easyQuestions.map((qa, index) => (
                    <Accordion.Item key={index} value={`easy-${index}`}>
                      <Accordion.Control>
                        <div className="question-title">{qa.question}</div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="answer-content">{qa.answer}</div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Рофло-вопросы">
              <div className="accordion-container">
                <Accordion variant="separated">
                  {roflQuestions.map((qa, index) => (
                    <Accordion.Item key={index} value={`rofl-${index}`}>
                      <Accordion.Control>
                        <div className="question-title">{qa.question}</div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="answer-content">{qa.answer}</div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Инфа">
              <div className="company-info">
                <h2>Информация о компании</h2>
                <p>
                  Nexora Technologies — международная технологическая компания с головным офисом в Дубае. Мы специализируемся на разработке высоконагруженных веб-приложений, продуктов для автоматизации бизнес-процессов и платформ нового поколения для электронной коммерции, аналитики и коммуникаций.
                  <br />
                  <br />
                  Наша команда состоит из талантливых инженеров, дизайнеров и продакт-менеджеров, распределённых по всему миру. Мы ценим инициативность, самостоятельность и способность принимать решения. Работа у нас — это про доверие, прозрачность процессов и технологическую экспертизу.
                  <br />
                  <br />
                  Среди наших клиентов — стартапы из США и Европы, крупные e-commerce-платформы на Ближнем Востоке и внутренние R&D-проекты, где мы экспериментируем с новыми архитектурами и подходами к разработке.
                  <br />
                  <br />
                  Мы активно развиваем собственные решения и участвуем в open-source-сообществе. В команде нет случайных людей — только профессионалы, которым интересно делать сложные и полезные продукты.
                </p>
                <h2>Информация о процессах</h2>
                <p>
                ⚙️ Наши процессы
                Мы строим процессы вокруг людей, а не наоборот. Главное — эффективность, прозрачность и комфорт в работе. Без бюрократии, бессмысленных митингов и "менеджмента ради менеджмента".
                <br />
                <br />
                🔧 Технологический процесс:
                GitHub Flow — короткие фиче-ветки, ревью перед мержем, CI на каждый pull request.
                <br />
                <br />
                Код ревью — обязательное, но адекватное. Обсуждаем архитектуру, читаемость и потенциальные проблемы.
                <br />
                <br />
                CI/CD — автоматические сборки, тесты и деплой. Используем GitHub Actions, Docker, иногда self-hosted runners.
                <br />
                <br />
                Техдолг — не складируем, а вычищаем по ходу. Есть время на рефакторинг, не горим в проде.
                <br />
                <br />
                📅 Рабочий процесс:
                Планирование — 1-недельные итерации, без перегруза тасками. Всё в Notion / Linear.
                <br />
                <br />
                Митинги — минимум, только по делу: планинг, демо и краткие синки.
                <br />
                <br />
                Асинхронность — большинство коммуникации идёт в Slack. Никто не висит в Zoom по 5 часов.
                <br />
                <br />
                Фидбек — регулярные one-on-one с тимлидом. Обратная связь — это не формальность, а рабочий инструмент.
                <br />
                <br />
                🌍 Формат работы:
                Полностью удалённая команда, работаем по гибкому графику. Главное — быть на связи в core-времени (обычно с 12:00 до 17:00 по МСК или Дубаю).
                <br />
                <br />
                Возможность релокации в офис в Дубае (по желанию, не обязательно).
                <br />
                <br />
                Предоставляем технику, оплачиваем софт, курсы и конференции по запросу.
                </p>


                <h2>Информация о вакансии</h2>
                <p>
                💼 Вакансия: Senior Frontend Engineer (Pug/Node.js stack)
                <br />
                <br />
                📍 Remote · 🏢 HQ — Dubai · Full-time
                <br />
                <br />

                Описание позиции
                Мы ищем опытного Frontend-инженера, который поможет нам развивать и поддерживать существующие проекты с использованием Pug (ex-Jade), Node.js и связанных технологий. Важно понимание как современных фронтенд-практик, так и умение работать со "старичками" в кодовой базе.
                <br />
                <br />
                Ты будешь работать в распределённой команде инженеров над веб-приложениями для клиентов из сферы e-commerce, аналитики и внутренних продуктов.
                <br />
                <br />

                Задачи:
                <ul>
                  <li>Разработка и поддержка клиентской части на Pug, JavaScript/TypeScript, SCSS/PostCSS</li>
                  <li>Вёрстка компонент и страниц по дизайн-системе (есть Figma, нет хаоса)</li>
                  <li>Интеграция с Node.js backend-частью (SSR, templating, middlewares)</li>
                  <li>Рефакторинг старого кода, улучшение структуры и производительности</li>
                  <li>Участие в обсуждении архитектурных решений и UI/UX</li>
                </ul>
                <br />

                Требования:
                <ul>
                  <li>4+ лет опыта в frontend-разработке</li>
                  <li>Уверенное знание HTML, CSS, JavaScript</li>
                  <li>Опыт работы с Pug/Jade</li>
                  <li>Знание Node.js, Express, middlewares</li>
                  <li>Умение читать чужой код и не срываться :)</li>
                  <li>Грамотная работа с Git (merge, rebase, pull request flow)</li>
                  <li>Умение работать в распределённой команде, самостоятельно принимать решения</li>
                </ul>

                Будет плюсом:
                <ul>
                  <li>Опытработы с Tailwind, TypeScript</li>  
                  <li>Знакомство с Vite/Webpack и современной сборкой</li>
                  <li>Знание принципов SSR и templating-систем</li>
                  <li>Опыт миграции старых шаблонов на современные технологии</li>
                </ul>
                <br />

                Что предлагаем:
                <ul>
                  <li>Удалённая работа с гибким графиком</li>
                  <li>Зарплата в USD, обсуждается на собеседовании</li>
                  <li>Работа в международной команде без микроменеджмента</li>
                  <li>Онбординг, поддержка тимлида, адекватные процессы</li>
                  <li>Участие в развитии интересных продуктов с реальными пользователями</li>
                  <li>Перспективы роста: техлид, архитектура, новые проекты</li>
                </ul>
                </p>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Container>
  )
}

export default App
