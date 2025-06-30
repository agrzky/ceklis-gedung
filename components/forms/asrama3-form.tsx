import RoomCheckForm from "./room-check-form"

interface Asrama3FormProps {
  onClose: () => void
}

export default function Asrama3Form({ onClose }: Asrama3FormProps) {
  return <RoomCheckForm buildingName="Asrama 3" onClose={onClose} />
}
