import { Building, Building2, HomeIcon, Landmark } from "lucide-react"
import type { ChecklistData } from "@/components/dashboard/columns"

// Fungsi untuk mendapatkan nama gedung berdasarkan ID
export function getBuildingName(buildingId: string): string {
  const buildingNames: Record<string, string> = {
    "asrama-1": "Asrama 1",
    "asrama-2": "Asrama 2",
    "asrama-3": "Asrama 3",
    "asrama-4": "Asrama 4",
    "guest-house": "Guest House",
    "gedung-kantor": "Gedung Kantor",
    aula: "Aula",
    masjid: "Masjid",
    "rumah-jabatan": "Rumah Jabatan",
  }

  return buildingNames[buildingId] || "Gedung Tidak Dikenal"
}

// Fungsi untuk mendapatkan ikon gedung berdasarkan ID
export function getBuildingIcon(buildingId: string): any {
  const buildingIcons: Record<string, any> = {
    "asrama-1": Building,
    "asrama-2": Building,
    "asrama-3": Building,
    "asrama-4": Building,
    "guest-house": HomeIcon,
    "gedung-kantor": Building2,
    aula: Landmark,
    masjid: Landmark,
    "rumah-jabatan": HomeIcon,
  }

  return buildingIcons[buildingId] || Building
}

// Data dummy untuk semua checklist
export function getAllChecklistData(): ChecklistData[] {
  return [
    {
      id: "1",
      building: "Asrama 1",
      floor: "1",
      date: "2023-03-15",
      status: "Selesai",
      cleanliness: "Bersih",
      inspector: "Ahmad Fauzi",
    },
    {
      id: "2",
      building: "Asrama 2",
      floor: "2",
      date: "2023-03-14",
      status: "Selesai",
      cleanliness: "Kotor",
      inspector: "Budi Santoso",
    },
    {
      id: "3",
      building: "Guest House",
      floor: "1",
      date: "2023-03-13",
      status: "Selesai",
      cleanliness: "Bersih",
      inspector: "Citra Dewi",
    },
    {
      id: "4",
      building: "Masjid",
      floor: "1",
      date: "2023-03-12",
      status: "Selesai",
      cleanliness: "Bersih",
      inspector: "Dian Purnama",
    },
    {
      id: "5",
      building: "Aula",
      floor: "1",
      date: "2023-03-11",
      status: "Selesai",
      cleanliness: "Bersih",
      inspector: "Eko Prasetyo",
    },
    {
      id: "6",
      building: "Gedung Kantor",
      floor: "3",
      date: "2023-03-10",
      status: "Selesai",
      cleanliness: "Kotor",
      inspector: "Fajar Nugroho",
    },
    {
      id: "7",
      building: "Asrama 3",
      floor: "2",
      date: "2023-03-09",
      status: "Selesai",
      cleanliness: "Rusak",
      inspector: "Galih Pratama",
    },
    {
      id: "8",
      building: "Asrama 4",
      floor: "1",
      date: "2023-03-08",
      status: "Selesai",
      cleanliness: "Bersih",
      inspector: "Hendra Wijaya",
    },
    {
      id: "9",
      building: "Rumah Jabatan",
      floor: "1",
      date: "2023-03-07",
      status: "Selesai",
      cleanliness: "Bersih",
      inspector: "Indra Kusuma",
    },
    {
      id: "10",
      building: "Guest House",
      floor: "2",
      date: "2023-03-06",
      status: "Selesai",
      cleanliness: "Kotor",
      inspector: "Joko Widodo",
    },
    {
      id: "11",
      building: "Asrama 1",
      floor: "3",
      date: "2023-03-05",
      status: "Tertunda",
      cleanliness: "",
      inspector: "Ahmad Fauzi",
    },
    {
      id: "12",
      building: "Asrama 2",
      floor: "1",
      date: "2023-03-04",
      status: "Tertunda",
      cleanliness: "",
      inspector: "Budi Santoso",
    },
    {
      id: "13",
      building: "Gedung Kantor",
      floor: "2",
      date: "2023-03-03",
      status: "Tertunda",
      cleanliness: "",
      inspector: "Citra Dewi",
    },
    {
      id: "14",
      building: "Asrama 3",
      floor: "1",
      date: "2023-03-02",
      status: "Tertunda",
      cleanliness: "",
      inspector: "Dian Purnama",
    },
    {
      id: "15",
      building: "Asrama 4",
      floor: "2",
      date: "2023-03-01",
      status: "Tertunda",
      cleanliness: "",
      inspector: "Eko Prasetyo",
    },
  ]
}

// Fungsi untuk mendapatkan data gedung berdasarkan ID
export function getBuildingData(buildingId: string) {
  // Data dummy untuk setiap gedung
  const buildingData: Record<string, any> = {
    "asrama-1": {
      stats: {
        totalChecks: 24,
        completedChecks: 20,
        pendingChecks: 4,
        cleanPercentage: 75,
        checkGrowth: 3.2,
        cleanGrowth: 5.1,
      },
      floorConditionData: [
        { name: "Lantai 1", bersih: 8, kotor: 2, rusak: 0 },
        { name: "Lantai 2", bersih: 7, kotor: 1, rusak: 1 },
        { name: "Lantai 3", bersih: 5, kotor: 3, rusak: 1 },
      ],
      conditionDistribution: [
        { name: "Bersih", value: 75, color: "#22c55e" },
        { name: "Kotor", value: 20, color: "#f59e0b" },
        { name: "Rusak", value: 5, color: "#ef4444" },
      ],
      details: {
        floors: 3,
        rooms: 45,
        area: 1200,
        yearBuilt: 2010,
      },
      maintenance: {
        lastCheck: "15 Maret 2023",
        lastRepair: "10 Februari 2023",
        status: "Baik",
        nextCheck: "15 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Asrama 1"),
      issues: [
        {
          title: "Kebocoran Atap",
          description: "Terdapat kebocoran atap di kamar 302",
          severity: "Sedang",
          location: "Lantai 3, Kamar 302",
          reportedDate: "12 Maret 2023",
          status: "Dalam Proses",
        },
        {
          title: "Kerusakan Lampu",
          description: "Lampu di koridor lantai 2 tidak berfungsi",
          severity: "Rendah",
          location: "Lantai 2, Koridor",
          reportedDate: "14 Maret 2023",
          status: "Belum Ditangani",
        },
      ],
    },
    "asrama-2": {
      stats: {
        totalChecks: 22,
        completedChecks: 18,
        pendingChecks: 4,
        cleanPercentage: 70,
        checkGrowth: 2.8,
        cleanGrowth: 4.5,
      },
      floorConditionData: [
        { name: "Lantai 1", bersih: 7, kotor: 2, rusak: 1 },
        { name: "Lantai 2", bersih: 6, kotor: 3, rusak: 1 },
        { name: "Lantai 3", bersih: 5, kotor: 2, rusak: 0 },
      ],
      conditionDistribution: [
        { name: "Bersih", value: 70, color: "#22c55e" },
        { name: "Kotor", value: 25, color: "#f59e0b" },
        { name: "Rusak", value: 5, color: "#ef4444" },
      ],
      details: {
        floors: 3,
        rooms: 42,
        area: 1150,
        yearBuilt: 2011,
      },
      maintenance: {
        lastCheck: "14 Maret 2023",
        lastRepair: "5 Februari 2023",
        status: "Baik",
        nextCheck: "14 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Asrama 2"),
      issues: [
        {
          title: "Kerusakan Kunci Pintu",
          description: "Kunci pintu kamar 105 rusak",
          severity: "Sedang",
          location: "Lantai 1, Kamar 105",
          reportedDate: "10 Maret 2023",
          status: "Selesai",
        },
        {
          title: "AC Tidak Dingin",
          description: "AC di kamar 210 tidak dingin",
          severity: "Rendah",
          location: "Lantai 2, Kamar 210",
          reportedDate: "12 Maret 2023",
          status: "Dalam Proses",
        },
      ],
    },
    "asrama-3": {
      stats: {
        totalChecks: 20,
        completedChecks: 16,
        pendingChecks: 4,
        cleanPercentage: 65,
        checkGrowth: 2.5,
        cleanGrowth: 3.8,
      },
      floorConditionData: [
        { name: "Lantai 1", bersih: 6, kotor: 3, rusak: 1 },
        { name: "Lantai 2", bersih: 5, kotor: 2, rusak: 2 },
        { name: "Lantai 3", bersih: 4, kotor: 3, rusak: 1 },
      ],
      conditionDistribution: [
        { name: "Bersih", value: 65, color: "#22c55e" },
        { name: "Kotor", value: 25, color: "#f59e0b" },
        { name: "Rusak", value: 10, color: "#ef4444" },
      ],
      details: {
        floors: 3,
        rooms: 40,
        area: 1100,
        yearBuilt: 2012,
      },
      maintenance: {
        lastCheck: "9 Maret 2023",
        lastRepair: "20 Februari 2023",
        status: "Perlu Perbaikan",
        nextCheck: "9 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Asrama 3"),
      issues: [
        {
          title: "Kerusakan Plafon",
          description: "Plafon di kamar 315 rusak dan perlu diganti",
          severity: "Tinggi",
          location: "Lantai 3, Kamar 315",
          reportedDate: "8 Maret 2023",
          status: "Dalam Proses",
        },
        {
          title: "Saluran Air Tersumbat",
          description: "Saluran air di kamar mandi lantai 2 tersumbat",
          severity: "Sedang",
          location: "Lantai 2, Kamar Mandi",
          reportedDate: "7 Maret 2023",
          status: "Selesai",
        },
        {
          title: "Kerusakan Jendela",
          description: "Jendela di kamar 102 tidak bisa ditutup dengan baik",
          severity: "Rendah",
          location: "Lantai 1, Kamar 102",
          reportedDate: "5 Maret 2023",
          status: "Belum Ditangani",
        },
      ],
    },
    "asrama-4": {
      stats: {
        totalChecks: 18,
        completedChecks: 15,
        pendingChecks: 3,
        cleanPercentage: 72,
        checkGrowth: 3.0,
        cleanGrowth: 4.2,
      },
      floorConditionData: [
        { name: "Lantai 1", bersih: 7, kotor: 2, rusak: 0 },
        { name: "Lantai 2", bersih: 6, kotor: 1, rusak: 1 },
        { name: "Lantai 3", bersih: 5, kotor: 2, rusak: 0 },
      ],
      conditionDistribution: [
        { name: "Bersih", value: 72, color: "#22c55e" },
        { name: "Kotor", value: 22, color: "#f59e0b" },
        { name: "Rusak", value: 6, color: "#ef4444" },
      ],
      details: {
        floors: 3,
        rooms: 38,
        area: 1050,
        yearBuilt: 2013,
      },
      maintenance: {
        lastCheck: "8 Maret 2023",
        lastRepair: "15 Februari 2023",
        status: "Baik",
        nextCheck: "8 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Asrama 4"),
      issues: [
        {
          title: "Kerusakan Pintu",
          description: "Pintu kamar 205 tidak bisa dikunci",
          severity: "Sedang",
          location: "Lantai 2, Kamar 205",
          reportedDate: "6 Maret 2023",
          status: "Dalam Proses",
        },
      ],
    },
    "guest-house": {
      stats: {
        totalChecks: 15,
        completedChecks: 13,
        pendingChecks: 2,
        cleanPercentage: 80,
        checkGrowth: 3.5,
        cleanGrowth: 5.5,
      },
      floorConditionData: [
        { name: "Lantai 1", bersih: 6, kotor: 1, rusak: 0 },
        { name: "Lantai 2", bersih: 5, kotor: 1, rusak: 0 },
        { name: "Lantai 3", bersih: 4, kotor: 1, rusak: 0 },
      ],
      conditionDistribution: [
        { name: "Bersih", value: 80, color: "#22c55e" },
        { name: "Kotor", value: 20, color: "#f59e0b" },
        { name: "Rusak", value: 0, color: "#ef4444" },
      ],
      details: {
        floors: 3,
        rooms: 20,
        area: 800,
        yearBuilt: 2015,
      },
      maintenance: {
        lastCheck: "13 Maret 2023",
        lastRepair: "25 Februari 2023",
        status: "Baik",
        nextCheck: "13 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Guest House"),
      issues: [],
    },
    "gedung-kantor": {
      stats: {
        totalChecks: 12,
        completedChecks: 10,
        pendingChecks: 2,
        cleanPercentage: 75,
        checkGrowth: 2.8,
        cleanGrowth: 4.0,
      },
      floorConditionData: [
        { name: "Lantai 1", bersih: 4, kotor: 1, rusak: 0 },
        { name: "Lantai 2", bersih: 3, kotor: 2, rusak: 0 },
        { name: "Lantai 3", bersih: 2, kotor: 1, rusak: 1 },
      ],
      conditionDistribution: [
        { name: "Bersih", value: 75, color: "#22c55e" },
        { name: "Kotor", value: 17, color: "#f59e0b" },
        { name: "Rusak", value: 8, color: "#ef4444" },
      ],
      details: {
        floors: 3,
        rooms: 30,
        area: 1000,
        yearBuilt: 2010,
      },
      maintenance: {
        lastCheck: "10 Maret 2023",
        lastRepair: "18 Februari 2023",
        status: "Baik",
        nextCheck: "10 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Gedung Kantor"),
      issues: [
        {
          title: "AC Rusak",
          description: "AC di ruang rapat lantai 3 tidak berfungsi",
          severity: "Sedang",
          location: "Lantai 3, Ruang Rapat",
          reportedDate: "9 Maret 2023",
          status: "Dalam Proses",
        },
      ],
    },
    aula: {
      stats: {
        totalChecks: 8,
        completedChecks: 7,
        pendingChecks: 1,
        cleanPercentage: 85,
        checkGrowth: 4.0,
        cleanGrowth: 6.0,
      },
      floorConditionData: [{ name: "Lantai 1", bersih: 7, kotor: 1, rusak: 0 }],
      conditionDistribution: [
        { name: "Bersih", value: 85, color: "#22c55e" },
        { name: "Kotor", value: 15, color: "#f59e0b" },
        { name: "Rusak", value: 0, color: "#ef4444" },
      ],
      details: {
        floors: 1,
        rooms: 5,
        area: 500,
        yearBuilt: 2014,
      },
      maintenance: {
        lastCheck: "11 Maret 2023",
        lastRepair: "22 Februari 2023",
        status: "Baik",
        nextCheck: "11 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Aula"),
      issues: [],
    },
    masjid: {
      stats: {
        totalChecks: 6,
        completedChecks: 6,
        pendingChecks: 0,
        cleanPercentage: 90,
        checkGrowth: 5.0,
        cleanGrowth: 7.0,
      },
      floorConditionData: [{ name: "Lantai 1", bersih: 6, kotor: 0, rusak: 0 }],
      conditionDistribution: [
        { name: "Bersih", value: 90, color: "#22c55e" },
        { name: "Kotor", value: 10, color: "#f59e0b" },
        { name: "Rusak", value: 0, color: "#ef4444" },
      ],
      details: {
        floors: 1,
        rooms: 3,
        area: 400,
        yearBuilt: 2012,
      },
      maintenance: {
        lastCheck: "12 Maret 2023",
        lastRepair: "1 Maret 2023",
        status: "Baik",
        nextCheck: "12 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Masjid"),
      issues: [],
    },
    "rumah-jabatan": {
      stats: {
        totalChecks: 5,
        completedChecks: 5,
        pendingChecks: 0,
        cleanPercentage: 85,
        checkGrowth: 3.5,
        cleanGrowth: 5.0,
      },
      floorConditionData: [{ name: "Lantai 1", bersih: 5, kotor: 0, rusak: 0 }],
      conditionDistribution: [
        { name: "Bersih", value: 85, color: "#22c55e" },
        { name: "Kotor", value: 15, color: "#f59e0b" },
        { name: "Rusak", value: 0, color: "#ef4444" },
      ],
      details: {
        floors: 1,
        rooms: 8,
        area: 350,
        yearBuilt: 2016,
      },
      maintenance: {
        lastCheck: "7 Maret 2023",
        lastRepair: "15 Februari 2023",
        status: "Baik",
        nextCheck: "7 April 2023",
      },
      checklistData: getAllChecklistData().filter((item) => item.building === "Rumah Jabatan"),
      issues: [],
    },
  }

  return buildingData[buildingId] || null
}
