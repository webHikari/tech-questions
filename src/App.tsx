import { Tabs, Container, Title, Paper } from '@mantine/core'
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
              <ul className="questions-list">
                {hardQuestions.map((question, index) => (
                  <li key={index} className="question-item">{question}</li>
                ))}
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value="Легкие вопросы">
              <ul className="questions-list">
                {easyQuestions.map((question, index) => (
                  <li key={index} className="question-item">{question}</li>
                ))}
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value="Рофло-вопросы">
              <ul className="questions-list">
                {roflQuestions.map((question, index) => (
                  <li key={index} className="question-item">{question}</li>
                ))}
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value="Инфа">
              <div className="company-info">
                <h2>Информация о компании</h2>
                <p>Здесь будет информация о компании.</p>
                <h2>Информация о вакансии</h2>
                <p>Здесь будет информация о вакансии.</p>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Container>
  )
}

export default App
