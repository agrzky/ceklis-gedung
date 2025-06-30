"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

// Definisi tipe data untuk tabel
export type ChecklistData = {
  id: string
  building: string
  floor: string
  date: string
  status: string
  cleanliness: string
  inspector: string
}

// Modifikasi kolom untuk lebih responsif
export const columns: ColumnDef<ChecklistData>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      // Mempersingkat ID untuk tampilan mobile
      return <div className="font-medium">#{row.getValue("id")}</div>
    },
  },
  {
    accessorKey: "building",
    header: "Gedung",
  },
  {
    accessorKey: "floor",
    header: "Lantai",
  },
  {
    accessorKey: "date",
    header: "Tanggal",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      return <div>{date.toLocaleDateString("id-ID")}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return <Badge variant={status === "Selesai" ? "default" : "outline"}>{status}</Badge>
    },
  },
  {
    accessorKey: "cleanliness",
    header: "Kondisi",
    cell: ({ row }) => {
      const cleanliness = row.getValue("cleanliness") as string
      let variant: "default" | "destructive" | "outline" | "secondary" = "default"

      switch (cleanliness) {
        case "Bersih":
          variant = "default"
          break
        case "Kotor":
          variant = "secondary"
          break
        case "Rusak":
          variant = "destructive"
          break
        default:
          variant = "outline"
      }

      return <Badge variant={variant}>{cleanliness || "-"}</Badge>
    },
  },
  {
    accessorKey: "inspector",
    header: "Pemeriksa",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const checklist = row.original

      return (
        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
          <a href={`/dashboard/checklist/${checklist.id}`}>
            <Eye className="h-4 w-4" />
            <span className="sr-only">Lihat detail</span>
          </a>
        </Button>
      )
    },
  },
]
