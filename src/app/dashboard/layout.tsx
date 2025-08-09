"use client"

import { ReactNode } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { usePathname } from "next/navigation"
import AuthLayout from "./auth-layout"

export default function DashboardRootLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  
  // Use AuthLayout for the main dashboard login page
  if (pathname === "/dashboard") {
    return <AuthLayout>{children}</AuthLayout>
  }
  
  // Use DashboardLayout for all other dashboard pages
  return <DashboardLayout>{children}</DashboardLayout>
}
