import { useState } from 'react'
import './App.css'

const notes = [
  { title: 'Vite', text: '开发服务器启动很快，改代码会立即刷新。' },
  { title: 'React', text: '用组件和 state 管理界面，下面的计数器就是一个例子。' },
  { title: 'FirGrok2', text: '这个仓库里的第一个项目，可以直接在此基础上继续改。' },
]

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <p className="eyebrow">ssttmkkw-hue / FirGrok2</p>
      <h1>你好，React</h1>
      <p className="lead">一个可以马上跑起来的小项目。点一下按钮，确认状态更新是通的。</p>

      <button className="counter" type="button" onClick={() => setCount((n) => n + 1)}>
        点击次数：{count}
      </button>

      <ul className="cards">
        {notes.map((note) => (
          <li key={note.title}>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
