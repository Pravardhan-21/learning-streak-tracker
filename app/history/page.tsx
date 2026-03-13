"use client"

import { useEffect, useState } from "react"
import HistoryList from "@/components/HistoryList"

export default function HistoryPage() {

  const [dates, setDates] = useState<string[]>([])

  useEffect(() => {

    fetch("/api/history")
      .then(res => res.json())
      .then(data => setDates(data))

  }, [])

  return (

    <main className="flex flex-col items-center p-10">

      <h1 className="text-3xl font-bold mb-6">
        Study History
      </h1>

      <div className="w-[400px]">
        <HistoryList dates={dates} />
      </div>

    </main>

  )
}