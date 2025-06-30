import RoomCheckForm from "./room-check-form"

interface Asrama1FormProps {
  onClose: () => void
}

export default function Asrama1Form({ onClose }: Asrama1FormProps) {
  return <RoomCheckForm buildingName="Asrama 1" onClose={onClose} />
}
