"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Building,
  LayoutDashboard,
  ClipboardCheck,
  Settings,
  LogOut,
  User,
  Bell,
  ChevronDown,
  HomeIcon,
  Building2,
  Landmark,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleLogout = () => {
    router.push("/login")
  }

  // Daftar gedung untuk menu sidebar
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

  if (!isMounted) {
    return null
  }

  // Perbaiki tampilan profil pengguna untuk menghindari duplikasi
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar collapsible="icon">
          <SidebarHeader className="border-b px-6 py-5">
            <div className="flex items-center gap-2">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PusbangSDM</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="/dashboard">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/checklist">
                    <ClipboardCheck className="h-5 w-5" />
                    <span>Ceklis Ruangan</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarSeparator />

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Building className="h-5 w-5" />
                  <span>Gedung</span>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {buildings.map((building) => (
                <SidebarMenuItem key={building.id}>
                  <SidebarMenuButton asChild>
                    <a href={`/dashboard/building/${building.id}`}>
                      {building.icon}
                      <span>{building.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <SidebarSeparator />

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Pengaturan</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start px-2">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>AF</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-sm">
                    <span className="font-medium">Ahmad Fauzi</span>
                    <span className="text-xs text-muted-foreground">Admin</span>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="/dashboard/settings">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notifikasi</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Pengaturan</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
          <SidebarTrigger />
        </Sidebar>

        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifikasi</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>AF</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Menu Profil</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a href="/dashboard/settings">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profil</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/dashboard/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Pengaturan</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Keluar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-muted/10">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
