import type { ReactNode } from "react"

export interface Building {
  id: string
  name: string
  floors: number
  icon: ReactNode
}

export interface RoomCheckItem {
  id: number
  name: string
  checked: boolean
  pic: string
  description: "Bersih" | "Kotor" | "Rusak" | ""
}

export interface FormData {
  building: string
  floor: string
  period: string
  date: string
  checkItems: RoomCheckItem[]
}
