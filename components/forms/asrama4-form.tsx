import RoomCheckForm from "./room-check-form"

interface Asrama4FormProps {
  onClose: () => void
}

export default function Asrama4Form({ onClose }: Asrama4FormProps) {
  return <RoomCheckForm buildingName="Asrama 4" onClose={onClose} />
}
