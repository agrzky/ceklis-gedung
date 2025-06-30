import RoomCheckForm from "./room-check-form"

interface Asrama2FormProps {
  onClose: () => void
}

export default function Asrama2Form({ onClose }: Asrama2FormProps) {
  return <RoomCheckForm buildingName="Asrama 2" onClose={onClose} />
}
