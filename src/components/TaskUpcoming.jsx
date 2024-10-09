import React from 'react'

const TaskUpcoming = ({ upcomingTask, onMarkDone }) => {
  return (
    <div className='mt-14 border-[1px] border-zinc-700 rounded-2xl p-5'>
      <h2 className='text-zinc-100 text-3xl font-mono tracking-tight leading-none pb-5'>Upcoming Work</h2>
      <table className='font-mono text-zinc-100 tracking-tight leading-none text-lg w-full'>
        <thead className='bg-zinc-700 border-[1px] border-zinc-600 rounded-2xl w-full h-[2vw]'>
          <tr>
            <th>To DO</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {upcomingTask.map((t) => {
            return (
              <tr key={t.id} className='mt-3 bg-zinc-950 text-zinc-100 border-t border-zinc-100 h-[2.5vw] text-[1.25vw]'>
                <td className='w-1/4 text-left pl-1'>{t.task}</td>
                <td className='w-1/4 text-center pl-1'>{t.deadline}</td>
                <td className='w-1/4 text-center pl-1'>{t.priority}</td>
                <td className='w-1/4 text-center pl-1'>
                  {!t.done && (
                  <button
                  className="mark-done bg-[#42f342] px-2 py-1 border-1 border-zinc-900 cursor-pointer w-full mr-2 text-zinc-900 font-semibold"
                  onClick={() => onMarkDone(t.id)}
                >
                  Mark Done
                </button>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TaskUpcoming