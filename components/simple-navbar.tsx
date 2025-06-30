import Link from "next/link"
import { Building } from "lucide-react"

export default function SimpleNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-gray-800">PusbangSDM</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
