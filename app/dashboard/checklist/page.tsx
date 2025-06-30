"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Download, Plus, Calendar } from "lucide-react"
import DashboardLayout from "@/components/dashboard/layout"
import { DataTable } from "@/components/dashboard/data-table"
import { columns } from "@/components/dashboard/columns"
import { getAllChecklistData } from "@/lib/building-data"

export default function ChecklistPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBuilding, setSelectedBuilding] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const allChecklistData = getAllChecklistData()

  // Filter data berdasarkan pencarian dan filter
  const filteredData = allChecklistData.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.building.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.inspector.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesBuilding =
      selectedBuilding === "all" || item.building.toLowerCase().replace(/\s+/g, "-") === selectedBuilding
    const matchesStatus = selectedStatus === "all" || item.status === selectedStatus

    return matchesSearch && matchesBuilding && matchesStatus
  })

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Ceklis Ruangan</h2>
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

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="completed">Selesai</TabsTrigger>
              <TabsTrigger value="pending">Tertunda</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Data Pengecekan Ruangan</CardTitle>
                  <CardDescription>Daftar semua pengecekan ruangan yang telah dilakukan</CardDescription>
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-full md:w-80">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Cari gedung atau pemeriksa..."
                          className="pl-8"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="sm" className="h-9">
                        <Filter className="mr-2 h-4 w-4" />
                        <span>Filter</span>
                      </Button>
                    </div>
                    <div className="flex flex-col xs:flex-row items-center gap-2 mt-2 md:mt-0">
                      <Select value={selectedBuilding} onValueChange={setSelectedBuilding}>
                        <SelectTrigger className="w-full md:w-[180px]">
                          <SelectValue placeholder="Pilih Gedung" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Gedung</SelectItem>
                          <SelectItem value="asrama-1">Asrama 1</SelectItem>
                          <SelectItem value="asrama-2">Asrama 2</SelectItem>
                          <SelectItem value="asrama-3">Asrama 3</SelectItem>
                          <SelectItem value="asrama-4">Asrama 4</SelectItem>
                          <SelectItem value="guest-house">Guest House</SelectItem>
                          <SelectItem value="gedung-kantor">Gedung Kantor</SelectItem>
                          <SelectItem value="aula">Aula</SelectItem>
                          <SelectItem value="masjid">Masjid</SelectItem>
                          <SelectItem value="rumah-jabatan">Rumah Jabatan</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <SelectTrigger className="w-full md:w-[180px]">
                          <SelectValue placeholder="Pilih Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Status</SelectItem>
                          <SelectItem value="Selesai">Selesai</SelectItem>
                          <SelectItem value="Tertunda">Tertunda</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end mb-4">
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Tambah Pengecekan Baru
                    </Button>
                  </div>
                  <DataTable columns={columns} data={filteredData} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pengecekan Selesai</CardTitle>
                  <CardDescription>Daftar pengecekan ruangan yang telah selesai</CardDescription>
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-full md:w-80">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Cari gedung atau pemeriksa..." className="pl-8" />
                      </div>
                      <Button variant="outline" size="sm" className="h-9">
                        <Filter className="mr-2 h-4 w-4" />
                        <span>Filter</span>
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Pilih Gedung" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Gedung</SelectItem>
                          <SelectItem value="asrama-1">Asrama 1</SelectItem>
                          <SelectItem value="asrama-2">Asrama 2</SelectItem>
                          <SelectItem value="asrama-3">Asrama 3</SelectItem>
                          <SelectItem value="asrama-4">Asrama 4</SelectItem>
                          <SelectItem value="guest-house">Guest House</SelectItem>
                          <SelectItem value="gedung-kantor">Gedung Kantor</SelectItem>
                          <SelectItem value="aula">Aula</SelectItem>
                          <SelectItem value="masjid">Masjid</SelectItem>
                          <SelectItem value="rumah-jabatan">Rumah Jabatan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <DataTable columns={columns} data={allChecklistData.filter((item) => item.status === "Selesai")} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pengecekan Tertunda</CardTitle>
                  <CardDescription>Daftar pengecekan ruangan yang masih tertunda</CardDescription>
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-full md:w-80">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Cari gedung atau pemeriksa..." className="pl-8" />
                      </div>
                      <Button variant="outline" size="sm" className="h-9">
                        <Filter className="mr-2 h-4 w-4" />
                        <span>Filter</span>
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Pilih Gedung" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Gedung</SelectItem>
                          <SelectItem value="asrama-1">Asrama 1</SelectItem>
                          <SelectItem value="asrama-2">Asrama 2</SelectItem>
                          <SelectItem value="asrama-3">Asrama 3</SelectItem>
                          <SelectItem value="asrama-4">Asrama 4</SelectItem>
                          <SelectItem value="guest-house">Guest House</SelectItem>
                          <SelectItem value="gedung-kantor">Gedung Kantor</SelectItem>
                          <SelectItem value="aula">Aula</SelectItem>
                          <SelectItem value="masjid">Masjid</SelectItem>
                          <SelectItem value="rumah-jabatan">Rumah Jabatan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <DataTable columns={columns} data={allChecklistData.filter((item) => item.status === "Tertunda")} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
