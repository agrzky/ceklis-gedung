"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, CheckCircle, AlertCircle, Clock, Search, Download, Filter, Calendar } from "lucide-react"
import DashboardLayout from "@/components/dashboard/layout"
import { BarChart } from "@/components/dashboard/bar-chart"
import { PieChart } from "@/components/dashboard/pie-chart"
import { DataTable } from "@/components/dashboard/data-table"
import { columns } from "@/components/dashboard/columns"
import { getBuildingData, getBuildingIcon, getBuildingName } from "@/lib/building-data"

export default function BuildingDetailPage() {
  const params = useParams()
  const buildingId = params.id as string
  const [buildingData, setBuildingData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulasi loading data
    const loadData = async () => {
      setIsLoading(true)
      try {
        // Mendapatkan data gedung berdasarkan ID
        const data = getBuildingData(buildingId)
        setBuildingData(data)
      } catch (error) {
        console.error("Error loading building data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [buildingId])

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    )
  }

  if (!buildingData) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Gedung tidak ditemukan</h2>
            <p className="text-muted-foreground">Gedung dengan ID {buildingId} tidak tersedia</p>
            <Button className="mt-4" onClick={() => window.history.back()}>
              Kembali
            </Button>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  const buildingName = getBuildingName(buildingId)
  const BuildingIcon = getBuildingIcon(buildingId)

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-full bg-primary/10">
                <BuildingIcon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{buildingName}</h2>
            </div>
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
              <TabsTrigger value="history">Riwayat Pengecekan</TabsTrigger>
              <TabsTrigger value="issues">Masalah</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Pengecekan</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{buildingData.stats.totalChecks}</div>
                    <p className="text-xs text-muted-foreground">+{buildingData.stats.checkGrowth}% dari bulan lalu</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pengecekan Selesai</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{buildingData.stats.completedChecks}</div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((buildingData.stats.completedChecks / buildingData.stats.totalChecks) * 100)}% dari
                      total
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pengecekan Tertunda</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{buildingData.stats.pendingChecks}</div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((buildingData.stats.pendingChecks / buildingData.stats.totalChecks) * 100)}% dari
                      total
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Persentase Bersih</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{buildingData.stats.cleanPercentage}%</div>
                    <p className="text-xs text-muted-foreground">
                      {buildingData.stats.cleanGrowth > 0 ? "+" : ""}
                      {buildingData.stats.cleanGrowth}% dari bulan lalu
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Kondisi Ruangan per Lantai</CardTitle>
                    <CardDescription>Jumlah ruangan berdasarkan kondisi untuk setiap lantai</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BarChart data={buildingData.floorConditionData} />
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Distribusi Kondisi Ruangan</CardTitle>
                    <CardDescription>Persentase kondisi ruangan secara keseluruhan</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center">
                    <PieChart data={buildingData.conditionDistribution} />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Informasi Gedung</CardTitle>
                  <CardDescription>Detail dan spesifikasi gedung</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Spesifikasi</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Jumlah Lantai</span>
                          <span className="font-medium">{buildingData.details.floors}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Jumlah Ruangan</span>
                          <span className="font-medium">{buildingData.details.rooms}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Luas Bangunan</span>
                          <span className="font-medium">{buildingData.details.area} m²</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Tahun Pembangunan</span>
                          <span className="font-medium">{buildingData.details.yearBuilt}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Status Pemeliharaan</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Pengecekan Terakhir</span>
                          <span className="font-medium">{buildingData.maintenance.lastCheck}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Perbaikan Terakhir</span>
                          <span className="font-medium">{buildingData.maintenance.lastRepair}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Status</span>
                          <Badge variant={buildingData.maintenance.status === "Baik" ? "default" : "secondary"}>
                            {buildingData.maintenance.status}
                          </Badge>
                        </li>
                        <li className="flex justify-between">
                          <span>Jadwal Pengecekan Berikutnya</span>
                          <span className="font-medium">{buildingData.maintenance.nextCheck}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Riwayat Pengecekan</CardTitle>
                  <CardDescription>Daftar pengecekan ruangan yang telah dilakukan di {buildingName}</CardDescription>
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
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full md:w-[180px]">
                          <SelectValue placeholder="Pilih Lantai" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Lantai</SelectItem>
                          {Array.from({ length: buildingData.details.floors }, (_, i) => (
                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                              Lantai {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <DataTable columns={columns} data={buildingData.checklistData} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="issues" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Masalah Teridentifikasi</CardTitle>
                  <CardDescription>Daftar masalah yang teridentifikasi pada pengecekan ruangan</CardDescription>
                </CardHeader>
                <CardContent>
                  {buildingData.issues.length > 0 ? (
                    <div className="space-y-4">
                      {buildingData.issues.map((issue: any, index: number) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{issue.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                            </div>
                            <Badge
                              variant={
                                issue.severity === "Tinggi"
                                  ? "destructive"
                                  : issue.severity === "Sedang"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {issue.severity}
                            </Badge>
                          </div>
                          <div className="mt-4 flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <span>Lokasi: {issue.location}</span>
                              <span>Dilaporkan: {issue.reportedDate}</span>
                            </div>
                            <div>
                              <Badge variant="outline">{issue.status}</Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-medium">Tidak Ada Masalah</h3>
                      <p className="text-muted-foreground">Semua pengecekan dalam kondisi baik</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
