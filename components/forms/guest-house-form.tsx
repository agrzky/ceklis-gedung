import RoomCheckForm from "./room-check-form"

interface GuestHouseFormProps {
  onClose: () => void
}

export default function GuestHouseForm({ onClose }: GuestHouseFormProps) {
  return <RoomCheckForm buildingName="Guest House" onClose={onClose} />
}
