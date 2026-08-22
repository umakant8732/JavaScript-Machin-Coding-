import { useEffect, useState } from "react";



export default function useTodo() {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    const [inputText, setInputText] = useState('')

    const handleTodo = () => {
        if (!inputText.trim()) {
            return
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false
        }

        setTodos([...todos, newTodo])
        setInputText("")
    }

    const handleDelete = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId)
        setTodos(updatedTodos)
    }


    const handleToggle = (todoId) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            else {
                return todo
            }
        })

        setTodos(updatedTodos)
    }



    const [editingId, setEditingId] = useState('')

    const handleEdit = (id, currentText) => {
        setEditingId(id)
        setInputText(currentText)

    }

    const handleUpdateTask = () => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === editingId ? { ...todo, text: inputText } : todo
        })



        setTodos(updatedTodos)
        setInputText("")
        setEditingId("")
    }




    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return {
        todos,
        inputText,
        setInputText,
        handleTodo,
        handleDelete,
        handleToggle,

        handleEdit,
        editingId,
        handleUpdateTask
    }

}