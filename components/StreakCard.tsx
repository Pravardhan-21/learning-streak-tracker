type Props = {
  streak: number
  totalDays: number
  lastDate: string | null
}

export default function StreakCard({
  streak,
  totalDays,
  lastDate
}: Props) {

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center">

      <h2 className="text-xl font-bold mb-4">
        Study Stats
      </h2>

      <p>Current Streak: {streak} days</p>

      <p>Total Study Days: {totalDays}</p>

      <p>
        Last Studied: {lastDate ? lastDate : "Never"}
      </p>

    </div>
  )
}