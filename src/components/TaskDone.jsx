import React from 'react'

const TaskDone = ({completedTasks}) => {
  return (
    <div className='mt-14 border-[1px] border-zinc-700 rounded-2xl p-5'>
      <h2 className='text-zinc-100 text-3xl font-mono tracking-tight leading-none pb-5'>Upcoming Work</h2>
      <table className='font-mono text-zinc-100 tracking-tight leading-none text-lg w-full'>
        <thead className='bg-zinc-700 border-[1px] border-zinc-600 rounded-2xl w-full h-[2vw]'>
          <tr>
            <th className='w-1/3'>To DO</th>
            <th className='w-1/3'>Deadline</th>
            <th className='w-1/3'>Priority</th>
          </tr>
        </thead>

        <tbody>
          {completedTasks.map( (t) => {
            return (
              <tr key={t.id} className='mt-3 bg-green-500 text-zinc-900 border-t border-zinc-950 h-[2.5vw] text-[1.25vw]'>
                <td className='w-1/3 text-left pl-1'>{t.task}</td>
                <td className='w-1/3 text-center pl-1'>{t.deadline}</td>
                <td className='w-1/3 text-center pl-1'>{t.priority}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

export default TaskDone