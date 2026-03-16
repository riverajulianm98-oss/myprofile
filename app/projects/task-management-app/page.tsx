"use client"

import { useState } from "react"

type Task = {
  id: string
  title: string
  description: string
  category: string
  priority: "low" | "medium" | "high"
  done: boolean
  createdAt: Date
}

const categories = ["Trabajo", "Personal", "Estudio", "Otros"]
const priorities = ["low", "medium", "high"] as const

export default function TaskManagementApp() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Completar portfolio",
      description: "Terminar la sección de proyectos y demo de tienda",
      category: "Trabajo",
      priority: "high",
      done: false,
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Aprender TypeScript",
      description: "Estudiar tipos avanzados y generics",
      category: "Estudio",
      priority: "medium",
      done: true,
      createdAt: new Date(Date.now() - 86400000),
    },
  ])

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    category: "Trabajo",
    priority: "medium" as const,
  })

  const [editing, setEditing] = useState<string | null>(null)
  const [editTask, setEditTask] = useState<Task | null>(null)

  const addTask = () => {
    if (!newTask.title.trim()) return
    const task: Task = {
      id: Date.now().toString(),
      ...newTask,
      done: false,
      createdAt: new Date(),
    }
    setTasks([task, ...tasks])
    setNewTask({ title: "", description: "", category: "Trabajo", priority: "medium" })
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const toggleDone = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const startEdit = (task: Task) => {
    setEditing(task.id)
    setEditTask({ ...task })
  }

  const saveEdit = () => {
    if (!editTask) return
    setTasks(tasks.map(t => t.id === editTask.id ? editTask : t))
    setEditing(null)
    setEditTask(null)
  }

  const cancelEdit = () => {
    setEditing(null)
    setEditTask(null)
  }

  const priorityColors = {
    low: "bg-green-500/20 text-green-300",
    medium: "bg-yellow-500/20 text-yellow-300",
    high: "bg-red-500/20 text-red-300",
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Task Management App
        </h1>

        {/* Add Task Form */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
          <h2 className="text-xl font-semibold mb-4">Nueva Tarea</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Título de la tarea"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-400 focus:border-pink-400 focus:outline-none"
            />
            <textarea
              placeholder="Descripción (opcional)"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-400 focus:border-pink-400 focus:outline-none resize-none"
              rows={3}
            />
            <div className="flex gap-4">
              <select
                value={newTask.category}
                onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                className="rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-pink-400 focus:outline-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as typeof newTask.priority })}
                className="rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-pink-400 focus:outline-none"
              >
                {priorities.map(p => (
                  <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                ))}
              </select>
              <button
                onClick={addTask}
                className="px-6 py-3 bg-pink-500 rounded-lg font-semibold hover:bg-pink-400 transition"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              {editing === task.id && editTask ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editTask.title}
                    onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
                    className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-pink-400 focus:outline-none"
                  />
                  <textarea
                    value={editTask.description}
                    onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                    className="w-full rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-pink-400 focus:outline-none resize-none"
                    rows={3}
                  />
                  <div className="flex gap-4">
                    <select
                      value={editTask.category}
                      onChange={(e) => setEditTask({ ...editTask, category: e.target.value })}
                      className="rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-pink-400 focus:outline-none"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <select
                      value={editTask.priority}
                      onChange={(e) => setEditTask({ ...editTask, priority: e.target.value as typeof editTask.priority })}
                      className="rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-pink-400 focus:outline-none"
                    >
                      {priorities.map(p => (
                        <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                      ))}
                    </select>
                    <button
                      onClick={saveEdit}
                      className="px-4 py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-400 transition"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-4 py-3 bg-gray-500 rounded-lg font-semibold hover:bg-gray-400 transition"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleDone(task.id)}
                        className="w-5 h-5 rounded border-white/20 bg-black/40 text-pink-500 focus:ring-pink-500"
                      />
                      <h3 className={`text-xl font-semibold ${task.done ? 'line-through text-gray-400' : ''}`}>
                        {task.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${priorityColors[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                    {task.description && (
                      <p className={`text-gray-300 mb-3 ${task.done ? 'line-through' : ''}`}>
                        {task.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{task.category}</span>
                      <span>{task.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => startEdit(task)}
                      className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="px-3 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <p className="text-center text-gray-400 mt-12">No hay tareas aún. ¡Agrega una nueva!</p>
        )}
      </div>
    </main>
  )
}