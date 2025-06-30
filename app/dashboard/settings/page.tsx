"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Key, Save } from "lucide-react"
import DashboardLayout from "@/components/dashboard/layout"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
    monthly: true,
  })

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Pengaturan</h2>
          </div>

          <Tabs defaultValue="account" className="space-y-4">
            <TabsList>
              <TabsTrigger value="account">Akun</TabsTrigger>
              <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
              <TabsTrigger value="security">Keamanan</TabsTrigger>
              <TabsTrigger value="appearance">Tampilan</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profil</CardTitle>
                  <CardDescription>Kelola informasi profil Anda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                        <AvatarFallback>AF</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        Ubah Foto
                      </Button>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap</Label>
                          <Input id="name" defaultValue="Ahmad Fauzi" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="ahmad.fauzi@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Nomor Telepon</Label>
                          <Input id="phone" defaultValue="081234567890" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Peran</Label>
                          <Select defaultValue="admin">
                            <SelectTrigger id="role">
                              <SelectValue placeholder="Pilih peran" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="inspector">Pemeriksa</SelectItem>
                              <SelectItem value="manager">Manajer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input id="bio" defaultValue="Admin sistem pengecekan gedung" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Simpan Perubahan
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notifikasi</CardTitle>
                  <CardDescription>Kelola preferensi notifikasi Anda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Metode Notifikasi</h3>
                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Notifikasi Email</Label>
                        <p className="text-sm text-muted-foreground">Terima notifikasi melalui email</p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="push-notifications">Notifikasi Push</Label>
                        <p className="text-sm text-muted-foreground">Terima notifikasi push di perangkat Anda</p>
                      </div>
                      <Switch
                        id="push-notifications"
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Jenis Notifikasi</h3>
                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="weekly-report">Laporan Mingguan</Label>
                        <p className="text-sm text-muted-foreground">
                          Terima laporan mingguan tentang pengecekan gedung
                        </p>
                      </div>
                      <Switch
                        id="weekly-report"
                        checked={notifications.weekly}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, weekly: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="monthly-report">Laporan Bulanan</Label>
                        <p className="text-sm text-muted-foreground">
                          Terima laporan bulanan tentang pengecekan gedung
                        </p>
                      </div>
                      <Switch
                        id="monthly-report"
                        checked={notifications.monthly}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, monthly: checked })}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Simpan Preferensi
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Keamanan</CardTitle>
                  <CardDescription>Kelola pengaturan keamanan akun Anda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Ubah Password</h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Password Saat Ini</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Password Baru</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Autentikasi Dua Faktor</h3>
                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Autentikasi Dua Faktor</Label>
                        <p className="text-sm text-muted-foreground">
                          Aktifkan autentikasi dua faktor untuk keamanan tambahan
                        </p>
                      </div>
                      <Button variant="outline">Aktifkan</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    Perbarui Password
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tampilan</CardTitle>
                  <CardDescription>Sesuaikan tampilan aplikasi</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Tema</h3>
                    <Separator />

                    <div className="grid grid-cols-3 gap-4">
                      <div className="border rounded-md p-4 cursor-pointer bg-white">
                        <div className="h-10 bg-white border rounded-md mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                        <p className="text-sm mt-2 text-center">Terang</p>
                      </div>

                      <div className="border rounded-md p-4 cursor-pointer bg-gray-950">
                        <div className="h-10 bg-gray-800 border border-gray-700 rounded-md mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded-md mb-2"></div>
                        <div className="h-4 bg-gray-700 rounded-md w-3/4"></div>
                        <p className="text-sm mt-2 text-center text-white">Gelap</p>
                      </div>

                      <div className="border rounded-md p-4 cursor-pointer bg-gradient-to-b from-white to-gray-950">
                        <div className="h-10 bg-white border rounded-md mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                        <p className="text-sm mt-2 text-center">Sistem</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Simpan Preferensi
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
