import RoomCheckForm from "./room-check-form"
import type { RoomCheckItem } from "@/lib/types"

interface GedungKantorFormProps {
  onClose: () => void
}

export default function GedungKantorForm({ onClose }: GedungKantorFormProps) {
  // Daftar kondisi objek khusus untuk Gedung Kantor (tanpa KAMAR dan BALKON KAMAR)
  const gedungKantorCheckItems: RoomCheckItem[] = [
    { id: 1, name: "PLAFON", checked: false, pic: "", description: "" },
    { id: 2, name: "SAMPAH", checked: false, pic: "", description: "" },
    { id: 3, name: "BAK SAMPAH BESAR", checked: false, pic: "", description: "" },
    { id: 4, name: "MEJA / KURSI", checked: false, pic: "", description: "" },
    { id: 5, name: "MOPING", checked: false, pic: "", description: "" },
    { id: 6, name: "KACA DALAM / LUAR", checked: false, pic: "", description: "" },
    { id: 7, name: "KESET", checked: false, pic: "", description: "" },
    { id: 8, name: "LOBI DAATING", checked: false, pic: "", description: "" },
    { id: 9, name: "RELLING TANGGA", checked: false, pic: "", description: "" },
    { id: 10, name: "LANTAI DALAM GEDUNG", checked: false, pic: "", description: "" },
    { id: 11, name: "TANGGA", checked: false, pic: "", description: "" },
    { id: 12, name: "PINTU KACA LOBI", checked: false, pic: "", description: "" },
  ]

  return <RoomCheckForm buildingName="Gedung Kantor" onClose={onClose} checkItems={gedungKantorCheckItems} />
}
