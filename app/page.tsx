"use client"

import { useState } from "react"
import { Building } from "@/components/ui/building"
import type { Building as BuildingType } from "@/lib/types"
import { BuildingIcon, Building2, HomeIcon, Landmark } from "lucide-react"
import GuestHouseForm from "@/components/forms/guest-house-form"
import Asrama1Form from "@/components/forms/asrama1-form"
import Asrama2Form from "@/components/forms/asrama2-form"
import Asrama3Form from "@/components/forms/asrama3-form"
import Asrama4Form from "@/components/forms/asrama4-form"
import GedungKantorForm from "@/components/forms/gedung-kantor-form"
import AulaForm from "@/components/forms/aula-form"
import MasjidForm from "@/components/forms/masjid-form"
import RumahJabatanForm from "@/components/forms/rumah-jabatan-form"
import Navbar from "@/components/navbar"

export default function Home() {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null)

  const buildings: BuildingType[] = [
    {
      id: "guest-house",
      name: "Guest House",
      floors: 3,
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      id: "asrama-1",
      name: "Asrama 1",
      floors: 3,
      icon: <BuildingIcon className="h-6 w-6" />,
    },
    {
      id: "asrama-2",
      name: "Asrama 2",
      floors: 3,
      icon: <BuildingIcon className="h-6 w-6" />,
    },
    {
      id: "asrama-3",
      name: "Asrama 3",
      floors: 3,
      icon: <BuildingIcon className="h-6 w-6" />,
    },
    {
      id: "asrama-4",
      name: "Asrama 4",
      floors: 3,
      icon: <BuildingIcon className="h-6 w-6" />,
    },
    {
      id: "gedung-kantor",
      name: "Gedung Kantor",
      floors: 3,
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      id: "aula",
      name: "Aula",
      floors: 1,
      icon: <Landmark className="h-6 w-6" />,
    },
    {
      id: "masjid",
      name: "Masjid",
      floors: 1,
      icon: <Landmark className="h-6 w-6" />,
    },
    {
      id: "rumah-jabatan",
      name: "Rumah Jabatan",
      floors: 1,
      icon: <HomeIcon className="h-6 w-6" />,
    },
  ]

  const handleToggleBuilding = (buildingId: string) => {
    setSelectedBuilding(buildingId === selectedBuilding ? null : buildingId)
  }

  const renderForm = () => {
    switch (selectedBuilding) {
      case "guest-house":
        return <GuestHouseForm onClose={() => setSelectedBuilding(null)} />
      case "asrama-1":
        return <Asrama1Form onClose={() => setSelectedBuilding(null)} />
      case "asrama-2":
        return <Asrama2Form onClose={() => setSelectedBuilding(null)} />
      case "asrama-3":
        return <Asrama3Form onClose={() => setSelectedBuilding(null)} />
      case "asrama-4":
        return <Asrama4Form onClose={() => setSelectedBuilding(null)} />
      case "gedung-kantor":
        return <GedungKantorForm onClose={() => setSelectedBuilding(null)} />
      case "aula":
        return <AulaForm onClose={() => setSelectedBuilding(null)} />
      case "masjid":
        return <MasjidForm onClose={() => setSelectedBuilding(null)} />
      case "rumah-jabatan":
        return <RumahJabatanForm onClose={() => setSelectedBuilding(null)} />
      default:
        return null
    }
  }

  return (
    <>
      {!selectedBuilding ? (
        <>
          <Navbar />
          <main className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 pt-16">
            <div className="container mx-auto px-4 py-12">
              <div className="mb-12 text-center animate-fade-in">
                <h1 className="text-4xl font-bold text-white mb-4">Sistem Pengecekan Gedung</h1>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Silakan pilih gedung yang ingin Anda periksa untuk melihat dan mengisi formulir pengecekan ruangan.
                </p>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <BuildingIcon className="h-6 w-6 text-white" />
                <h2 className="text-2xl font-bold text-white" id="gedung">
                  Pilih Gedung
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {buildings.map((building, index) => (
                  <div
                    key={building.id}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <Building
                      building={building}
                      isSelected={selectedBuilding === building.id}
                      onToggle={handleToggleBuilding}
                    />
                  </div>
                ))}
              </div>
            </div>
          </main>
        </>
      ) : (
        renderForm()
      )}
    </>
  )
}
