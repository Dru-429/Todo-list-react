import React, { useState } from 'react'

const TaskInput = ({taskList, updateTaskList}) => {

    const [task,setTask] = useState("")
    const [deadline,setDeadline] = useState("")
    const [priority,setPriority] = useState("top")

    const handelTask =(e) => {
        setTask(e.target.value)
    }

    const handelDeadline = (e) => {
        setDeadline(e.target.value)
    }

    const handelPriority = (e) => {
        setPriority(e.target.value)
    }

    const addTask = () => {

        if (task.trim("") === "" || deadline === "") {
            alert("Please put valid task and deadline...")
            return
        }

        let currDate = new Date()
        let selectedDate = new Date(deadline)

        if (selectedDate < currDate) {
            alert("Please selecte a valid Date... ")
            return
        }

        let newTask = {
            id: taskList.length + 1, 
			task, 
			priority, 
			deadline, 
			done: false, 
        }

        updateTaskList(newTask)

        setDeadline("")
        setPriority("top")
        setTask("")
        console.log(taskList)
    }

    return (
        <div className='flex gap-5 font-mono tracking-tighter '>
            <input
                type="text"
                id='task'
                placeholder='Enter Task...'
                value={task}
                onChange={handelTask}
                className='text-zinc-900 p-2 border-[1px]  rounded-2xl font-[400] w-1/4'
            />
            <input
                type="date"
                id='deadline'
                value={deadline}
                onChange={handelDeadline}
                className='text-zinc-900 p-2 border-[1px]  rounded-2xl font-[400] w-1/4'

            />

            <select 
                id="priority"
                value={priority}
                onChange={handelPriority}
                className='text-zinc-900 p-2 border-[1px]  rounded-2xl font-[400] w-1/4'
            >
                <option value="Top">Top Priority</option>   
                <option value="Mid">Mid Priority</option>   
                <option value="low">Low Priority</option>   
            </select>

            <button 
                className='bg-[#42f342] px-2 py-1 border-none cursor-pointer rounded-2xl w-1/4 text-zinc-900 font-semibold'
                id='add-task'
                onClick={addTask}
            >
                Add Task
            </button>
        </div>
    )
}

export default TaskInput