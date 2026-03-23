import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Array<{id: string; title: string; completed: boolean}>>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        title: input,
        completed: false
      }
      setTodos([...todos, newTodo])
      setInput('')
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          兜兜每日提醒
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="添加新的待办事项..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              添加
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 py-8">暂无待办事项</p>
          ) : (
            todos.map(todo => (
              <div
                key={todo.id}
                className="bg-white rounded-lg shadow p-4 flex items-center gap-4"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 text-blue-500 rounded cursor-pointer"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-800'
                  }`}
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  删除
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
