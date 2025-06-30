"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import type { FormData, RoomCheckItem } from "@/lib/types"
import { ArrowLeft, Printer, Save } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { format, addDays, subDays, startOfMonth, endOfMonth, isSameMonth } from "date-fns"
import { id } from "date-fns/locale"
import SimpleNavbar from "@/components/simple-navbar"

interface RoomCheckFormProps {
  buildingName: string
  onClose: () => void
  checkItems?: RoomCheckItem[]
  hasMultipleFloors?: boolean
  maxFloors?: number
}

export default function RoomCheckForm({
  buildingName,
  onClose,
  checkItems,
  hasMultipleFloors = true,
  maxFloors = 3,
}: RoomCheckFormProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [periodStart, setPeriodStart] = useState(startOfMonth(new Date()))

  const formattedDate = format(currentDate, "EEEE, d MMMM yyyy", { locale: id })
  const formattedPeriod = format(periodStart, "MMMM yyyy", { locale: id })

  const startDate = subDays(currentDate, 3)
  const endDate = addDays(currentDate, 3)

  const dateRange = `${format(startDate, "d MMM", { locale: id })} - ${format(endDate, "d MMM yyyy", { locale: id })}`

  const defaultCheckItems: RoomCheckItem[] = checkItems || [
    { id: 1, name: "PLAFON", checked: false, pic: "", description: "" },
    { id: 2, name: "SAMPAH", checked: false, pic: "", description: "" },
    { id: 3, name: "BAK SAMPAH BESAR", checked: false, pic: "", description: "" },
    { id: 4, name: "MEJA / KURSI", checked: false, pic: "", description: "" },
    { id: 5, name: "MOPING", checked: false, pic: "", description: "" },
    { id: 6, name: "KACA DALAM / LUAR", checked: false, pic: "", description: "" },
    { id: 7, name: "KAMAR", checked: false, pic: "", description: "" },
    { id: 8, name: "BALKON KAMAR", checked: false, pic: "", description: "" },
    { id: 9, name: "KESET", checked: false, pic: "", description: "" },
    { id: 10, name: "LOBI DAATING", checked: false, pic: "", description: "" },
    { id: 11, name: "RELLING TANGGA", checked: false, pic: "", description: "" },
    { id: 12, name: "LANTAI DALAM GEDUNG", checked: false, pic: "", description: "" },
    { id: 13, name: "TANGGA", checked: false, pic: "", description: "" },
    { id: 14, name: "PINTU KACA LOBI", checked: false, pic: "", description: "" },
  ]

  const [formData, setFormData] = useState<FormData>({
    building: buildingName,
    floor: "1",
    period: formattedPeriod,
    date: formattedDate,
    checkItems: defaultCheckItems,
  })

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      period: formattedPeriod,
      date: formattedDate,
    }))
  }, [formattedPeriod, formattedDate])

  const handleCheckChange = (id: number, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      checkItems: prev.checkItems.map((item) => (item.id === id ? { ...item, checked } : item)),
    }))
  }

  const handlePicChange = (id: number, pic: string) => {
    setFormData((prev) => ({
      ...prev,
      checkItems: prev.checkItems.map((item) => (item.id === id ? { ...item, pic } : item)),
    }))
  }

  const handleDescriptionChange = (id: number, description: "Bersih" | "Kotor" | "Rusak" | "") => {
    setFormData((prev) => ({
      ...prev,
      checkItems: prev.checkItems.map((item) => (item.id === id ? { ...item, description } : item)),
    }))
  }

  const handleFloorChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      floor: value,
    }))
  }

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setCurrentDate(date)
      if (!isSameMonth(date, periodStart)) {
        setPeriodStart(startOfMonth(date))
      }
    }
  }

  const handlePeriodChange = (date: Date | null) => {
    if (date) {
      setPeriodStart(date)
      if (!isSameMonth(currentDate, date)) {
        setCurrentDate(date) // Set to the first day of the selected month
      }
    }
  }

  const handleSave = () => {
    console.log("Saving form data:", formData)
    alert("Data berhasil disimpan!")
  }

  const handlePrint = () => {
    window.print()
  }

  // Generate floor options based on maxFloors
  const floorOptions = Array.from({ length: maxFloors }, (_, i) => ({
    value: (i + 1).toString(),
    label: `Lantai ${i + 1}`,
  }))

  return (
    <>
      <SimpleNavbar />
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto mt-16 print:shadow-none">
        <div className="flex items-center mb-6 print:hidden">
          <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <span className="bg-primary text-white p-1 rounded-md mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </span>
            {buildingName}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">GEDUNG</span>
              <Select defaultValue={formData.building} disabled>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={formData.building} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={formData.building}>{formData.building}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Lantai</span>
              {hasMultipleFloors ? (
                <Select value={formData.floor} onValueChange={handleFloorChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Lantai" />
                  </SelectTrigger>
                  <SelectContent>
                    {floorOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Select value="1" disabled>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lantai 1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Lantai 1</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">PERIODE</span>
              <div className="w-full">
                <DatePicker
                  selected={periodStart}
                  onChange={handlePeriodChange}
                  dateFormat="MMMM yyyy"
                  showMonthYearPicker
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  wrapperClassName="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white text-center py-3 rounded-t-md mb-4">
          <h2 className="text-lg font-bold">KARTU PENGECEKAN RUANGAN</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">TANGGAL</span>
              <div className="w-full">
                <DatePicker
                  selected={currentDate}
                  onChange={handleDateChange}
                  dateFormat="EEEE, d MMMM yyyy"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  minDate={startOfMonth(periodStart)}
                  maxDate={endOfMonth(periodStart)}
                  wrapperClassName="w-full"
                />
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600">{dateRange}</div>
        </div>

        <div className="text-sm text-gray-500 mb-2">
          TGL: {currentDate.getDate()}-{currentDate.getMonth() + 1}-{currentDate.getFullYear()}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left w-12">NO</th>
                <th className="border p-2 text-left">KONDISI OBJEK</th>
                <th className="border p-2 text-center w-32">SUDAH DIPERIKSA</th>
                <th className="border p-2 text-center w-24">PIC</th>
                <th className="border p-2 text-center w-40">KETERANGAN</th>
              </tr>
            </thead>
            <tbody>
              {formData.checkItems.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2 text-center">
                    <Checkbox
                      checked={item.checked}
                      onCheckedChange={(checked) => handleCheckChange(item.id, checked as boolean)}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border p-2">
                    <Input
                      value={item.pic}
                      onChange={(e) => handlePicChange(item.id, e.target.value)}
                      placeholder="PIC"
                      className="h-8 text-sm"
                    />
                  </td>
                  <td className="border p-2">
                    <Select
                      value={item.description}
                      onValueChange={(value) =>
                        handleDescriptionChange(item.id, value as "Bersih" | "Kotor" | "Rusak" | "")
                      }
                    >
                      <SelectTrigger className="h-8 text-sm">
                        <SelectValue placeholder="Pilih kondisi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="-">-</SelectItem>
                        <SelectItem value="Bersih">Bersih</SelectItem>
                        <SelectItem value="Kotor">Kotor</SelectItem>
                        <SelectItem value="Rusak">Rusak</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center text-sm">
          <div>
            Gedung: {buildingName} {hasMultipleFloors ? `Lantai ${formData.floor}` : ""}
          </div>
          <div>{format(currentDate, "EEEE, d MMMM yyyy", { locale: id })}</div>
        </div>

        <div className="mt-8 flex justify-end space-x-4 print:hidden">
          <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Cetak
          </Button>
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Simpan
          </Button>
        </div>
      </div>
    </>
  )
}
