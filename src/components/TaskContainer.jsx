import React, { useState } from 'react'
import TaskInput from './TaskInput'
import TaskUpcoming from './TaskUpcoming'
import TaskDone from './TaskDone'

const TaskContainer = () => {

    const [completedTasks, setCompletedTasks] = useState([]); 

    const [taskList, setTaskList] = useState([])
    const updateTaskList = (newTask) => {
        setTaskList(prev => {
            return [...prev,newTask]
        })
    }

    const markDone = (id) => { 
		const updatedTasks = taskList.map((t) => 
			t.id === id ? { ...t, done: true } : t 
		); 
		setTaskList(updatedTasks); 

		const completedTask = taskList.find((t) => t.id === id); 
        
		if (completedTask) { 
			setCompletedTasks([...completedTasks, completedTask]); 
		} 
	};

    const upcomingTask = taskList.filter( (task) => !task.done )

  return (
    <div className='w-1/2 min-h-[75vh] border-2 border-zinc-700 rounded-3xl bg-zinc-900 p-5'>
        <TaskInput taskList={taskList} updateTaskList={updateTaskList} />
        <TaskUpcoming upcomingTask={upcomingTask}  onMarkDone={markDone}  />
        <TaskDone completedTasks = {completedTasks} />
    </div>
  )
}

export default TaskContainer