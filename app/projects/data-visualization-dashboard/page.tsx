"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'

const salesData = [
  { month: 'Ene', ventas: 4000, usuarios: 240 },
  { month: 'Feb', ventas: 3000, usuarios: 139 },
  { month: 'Mar', ventas: 2000, usuarios: 980 },
  { month: 'Abr', ventas: 2780, usuarios: 390 },
  { month: 'May', ventas: 1890, usuarios: 480 },
  { month: 'Jun', ventas: 2390, usuarios: 380 },
]

const categoryData = [
  { name: 'Tecnología', value: 400, color: '#8884d8' },
  { name: 'Ropa', value: 300, color: '#82ca9d' },
  { name: 'Hogar', value: 300, color: '#ffc658' },
  { name: 'Deportes', value: 200, color: '#ff7300' },
]

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300']

export default function DataVisualizationDashboard() {
  const [selectedChart, setSelectedChart] = useState<'bar' | 'line' | 'pie'>('bar')

  const exportData = () => {
    const dataStr = JSON.stringify(salesData, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    const exportFileDefaultName = 'dashboard-data.json'
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Data Visualization Dashboard
        </h1>

        <div className="mb-8 flex flex-wrap gap-4 items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedChart('bar')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${selectedChart === 'bar' ? 'bg-green-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Barras
            </button>
            <button
              onClick={() => setSelectedChart('line')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${selectedChart === 'line' ? 'bg-green-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Líneas
            </button>
            <button
              onClick={() => setSelectedChart('pie')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${selectedChart === 'pie' ? 'bg-green-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              Pastel
            </button>
          </div>
          <button
            onClick={exportData}
            className="px-4 py-2 bg-blue-500 rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            Exportar Datos
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Ventas Totales</h3>
            <p className="text-3xl font-bold text-green-400">$16,060</p>
            <p className="text-sm text-gray-400">+12% vs mes anterior</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Usuarios Activos</h3>
            <p className="text-3xl font-bold text-blue-400">2,609</p>
            <p className="text-sm text-gray-400">+8% vs mes anterior</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Conversión</h3>
            <p className="text-3xl font-bold text-purple-400">3.2%</p>
            <p className="text-sm text-gray-400">+0.5% vs mes anterior</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Análisis de Ventas</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              {selectedChart === 'bar' && (
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                  <Legend />
                  <Bar dataKey="ventas" fill="#8884d8" name="Ventas ($)" />
                  <Bar dataKey="usuarios" fill="#82ca9d" name="Usuarios" />
                </BarChart>
              )}
              {selectedChart === 'line' && (
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="ventas" stroke="#8884d8" strokeWidth={2} name="Ventas ($)" />
                  <Line type="monotone" dataKey="usuarios" stroke="#82ca9d" strokeWidth={2} name="Usuarios" />
                </LineChart>
              )}
              {selectedChart === 'pie' && (
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold mb-6">Datos en Tabla</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-3">Mes</th>
                  <th className="pb-3">Ventas ($)</th>
                  <th className="pb-3">Usuarios</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((row, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-3">{row.month}</td>
                    <td className="py-3">{row.ventas.toLocaleString()}</td>
                    <td className="py-3">{row.usuarios}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}