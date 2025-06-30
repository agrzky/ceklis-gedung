"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Building,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Clock,
  Search,
  Download,
  Filter,
  Calendar,
  HomeIcon,
  Building2,
  Landmark,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard/layout"
import { BarChart } from "@/components/dashboard/bar-chart"
import { PieChart } from "@/components/dashboard/pie-chart"
import { DataTable } from "@/components/dashboard/data-table"
import { columns } from "@/components/dashboard/columns"

// Data dummy untuk tabel
const data = [
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
]

// Data untuk grafik batang
const barChartData = [
  { name: "Asrama 1", bersih: 12, kotor: 3, rusak: 1 },
  { name: "Asrama 2", bersih: 10, kotor: 5, rusak: 2 },
  { name: "Asrama 3", bersih: 8, kotor: 4, rusak: 3 },
  { name: "Asrama 4", bersih: 11, kotor: 2, rusak: 1 },
  { name: "Guest House", bersih: 9, kotor: 3, rusak: 0 },
  { name: "Gedung Kantor", bersih: 7, kotor: 4, rusak: 2 },
]

// Data untuk grafik pie
const pieChartData = [
  { name: "Bersih", value: 65, color: "#22c55e" },
  { name: "Kotor", value: 25, color: "#f59e0b" },
  { name: "Rusak", value: 10, color: "#ef4444" },
]

// Data untuk kartu statistik
const statsData = {
  totalChecks: 120,
  completedChecks: 98,
  pendingChecks: 22,
  cleanPercentage: 65,
}

// Data untuk gedung
const buildings = [
  { id: "asrama-1", name: "Asrama 1", icon: <Building className="h-5 w-5" /> },
  { id: "asrama-2", name: "Asrama 2", icon: <Building className="h-5 w-5" /> },
  { id: "asrama-3", name: "Asrama 3", icon: <Building className="h-5 w-5" /> },
  { id: "asrama-4", name: "Asrama 4", icon: <Building className="h-5 w-5" /> },
  { id: "guest-house", name: "Guest House", icon: <HomeIcon className="h-5 w-5" /> },
  { id: "gedung-kantor", name: "Gedung Kantor", icon: <Building2 className="h-5 w-5" /> },
  { id: "aula", name: "Aula", icon: <Landmark className="h-5 w-5" /> },
  { id: "masjid", name: "Masjid", icon: <Landmark className="h-5 w-5" /> },
  { id: "rumah-jabatan", name: "Rumah Jabatan", icon: <HomeIcon className="h-5 w-5" /> },
]

export default function DashboardPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<string>("all")

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-9">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Maret 2023</span>
              </Button>
              <Button size="sm" className="h-9">
                <Download className="mr-2 h-4 w-4" />
                <span>Unduh Laporan</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Ringkasan</TabsTrigger>
              <TabsTrigger value="analytics">Analitik</TabsTrigger>
              <TabsTrigger value="reports">Laporan</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Pengecekan</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statsData.totalChecks}</div>
                    <p className="text-xs text-muted-foreground">+2.5% dari bulan lalu</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pengecekan Selesai</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statsData.completedChecks}</div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((statsData.completedChecks / statsData.totalChecks) * 100)}% dari total pengecekan
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pengecekan Tertunda</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statsData.pendingChecks}</div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((statsData.pendingChecks / statsData.totalChecks) * 100)}% dari total pengecekan
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Persentase Bersih</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{statsData.cleanPercentage}%</div>
                    <p className="text-xs text-muted-foreground">+5% dari bulan lalu</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Kondisi Ruangan per Gedung</CardTitle>
                    <CardDescription>Jumlah ruangan berdasarkan kondisi untuk setiap gedung</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BarChart data={barChartData} />
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Distribusi Kondisi Ruangan</CardTitle>
                    <CardDescription>Persentase kondisi ruangan secara keseluruhan</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center">
                    <PieChart data={pieChartData} />
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Data Pengecekan Terbaru</CardTitle>
                    <CardDescription>Daftar pengecekan ruangan yang telah dilakukan</CardDescription>
                    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                      <div className="flex items-center space-x-2">
                        <div className="relative w-full md:w-80">
                          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Cari data pengecekan..." className="pl-8" />
                        </div>
                        <Button variant="outline" size="sm" className="h-9">
                          <Filter className="mr-2 h-4 w-4" />
                          <span>Filter</span>
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        <Select value={selectedBuilding} onValueChange={setSelectedBuilding}>
                          <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Pilih Gedung" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Semua Gedung</SelectItem>
                            {buildings.map((building) => (
                              <SelectItem key={building.id} value={building.id}>
                                <div className="flex items-center">{building.name}</div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <DataTable columns={columns} data={data} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analitik</CardTitle>
                  <CardDescription>Analisis mendalam tentang kondisi ruangan dan tren pengecekan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Konten analitik akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Laporan</CardTitle>
                  <CardDescription>Laporan pengecekan ruangan yang dapat diunduh</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Konten laporan akan ditampilkan di sini</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
