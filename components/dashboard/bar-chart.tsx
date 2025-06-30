"use client"

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

interface BarChartProps {
  data: {
    name: string
    bersih: number
    kotor: number
    rusak: number
  }[]
}

export function BarChart({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsBarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="bersih" fill="#22c55e" name="Bersih" />
        <Bar dataKey="kotor" fill="#f59e0b" name="Kotor" />
        <Bar dataKey="rusak" fill="#ef4444" name="Rusak" />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
