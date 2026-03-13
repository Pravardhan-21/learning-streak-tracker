"use client"

import { useEffect, useState } from "react"
import StreakCard from "@/components/StreakCard"
import StudyButton from "@/components/StudyButton"

export default function Home() {

  const [stats, setStats] = useState({
    currentStreak: 0,
    totalDays: 0,
    lastStudyDate: null
  })

  const fetchStats = async () => {

    const res = await fetch("/api/streak")

    const data = await res.json()

    setStats(data)

  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (

    <main className="flex flex-col items-center justify-center min-h-screen gap-6">

      <h1 className="text-4xl font-bold">
        Daily Learning Streak Tracker
      </h1>

      <div className="w-[400px]">

        <StreakCard
          streak={stats.currentStreak}
          totalDays={stats.totalDays}
          lastDate={stats.lastStudyDate}
        />

        <StudyButton refresh={fetchStats} />

      </div>

    </main>

  )
}