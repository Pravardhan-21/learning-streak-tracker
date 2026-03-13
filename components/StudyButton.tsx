"use client"

import { useState } from "react"

export default function StudyButton({ refresh }: any) {

  const [message, setMessage] = useState("")

  const handleClick = async () => {

    const res = await fetch("/api/study", {
      method: "POST"
    })

    const data = await res.json()

    setMessage(data.message)

    if (data.success) {
      refresh()
    }
  }

  return (

    <div className="mt-4 text-center">

      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        I Studied Today
      </button>

      {message && (
        <p className="mt-2">{message}</p>
      )}

    </div>
  )
}