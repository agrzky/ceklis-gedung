"use client"

import { useState } from "react"
import type { Building as BuildingType } from "@/lib/types"

interface BuildingProps {
  building: BuildingType
  isSelected: boolean
  onToggle: (id: string) => void
}

export function Building({ building, isSelected, onToggle }: BuildingProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        relative rounded-xl border p-6 cursor-pointer
        transition-all duration-300 ease-in-out
        ${isSelected ? "border-primary bg-primary/5 shadow-lg" : "border-gray-200 bg-white shadow-sm"}
        ${isHovered ? "transform scale-105 shadow-xl" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onToggle(building.id)}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-center">
          <div
            className={`p-2 rounded-full transition-colors duration-200 ${
              isSelected ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-600"
            }`}
          >
            {building.icon}
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{building.name}</h3>
        </div>

        <div className="mt-2 flex items-center text-gray-500">
          <span
            className={`text-sm transition-colors duration-200 ${isSelected ? "text-primary/80" : "text-gray-500"}`}
          >
            {building.floors} Lantai
          </span>
        </div>

        <div className="mt-auto pt-4">
          <span className="inline-flex items-center cursor-pointer text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200">
            {isSelected ? "Terpilih" : "Pilih Gedung Ini"}
          </span>
        </div>
      </div>
    </div>
  )
}
