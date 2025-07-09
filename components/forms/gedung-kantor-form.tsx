import RoomCheckForm from "./room-check-form"
import type { RoomCheckItem } from "@/lib/types"

interface GedungKantorFormProps {
  onClose: () => void
}

export default function GedungKantorForm({ onClose }: GedungKantorFormProps) {
  // Daftar kondisi objek khusus untuk Gedung Kantor (tanpa KAMAR dan BALKON KAMAR)
  const gedungKantorCheckItems: RoomCheckItem[] = [
    { id: 1, name: "Scents", checked: false, pic: "", description: "" },
    { id: 2, name: "Floor", checked: false, pic: "", description: "" },
    { id: 3, name: "Wall", checked: false, pic: "", description: "" },
    { id: 4, name: "Rubbish Bin", checked: false, pic: "", description: "" },
    { id: 5, name: "Mirror", checked: false, pic: "", description: "" },
    { id: 6, name: "Washbasin", checked: false, pic: "", description: "" },
    { id: 7, name: "Toilet Bowl", checked: false, pic: "", description: "" },
    { id: 8, name: "Door", checked: false, pic: "", description: "" },
    { id: 9, name: "Hand Shoap", checked: false, pic: "", description: "" },
    { id: 10, name: "Tisue Roll", checked: false, pic: "", description: "" },
    { id: 11, name: "Hand Drayer", checked: false, pic: "", description: "" },
  ]

  return <RoomCheckForm buildingName="Gedung Kantor" onClose={onClose} checkItems={gedungKantorCheckItems} />
}
