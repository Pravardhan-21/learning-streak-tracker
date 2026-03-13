type Props = {
  dates: string[]
}

export default function HistoryList({ dates }: Props) {

  return (

    <div className="bg-white shadow-lg p-6 rounded-lg">

      <h2 className="text-xl font-bold mb-4">
        Study History
      </h2>

      <ul>

        {dates.map((date, index) => (

          <li key={index} className="border-b py-2">
            {date}
          </li>

        ))}

      </ul>

    </div>

  )
}