import React, { useRef, useState } from "react";
import "./styles.css"

interface Props {
    todo123: string
    setTodo123: React.Dispatch<React.SetStateAction<string>>
    a: number
    handleAdd: (kejadianwkwk: React.FormEvent<EventTarget>) => void
}

// const InputField: ({todo, setTodo}: Props) => JSX.Element = ({ todo, setTodo }: Props) => {
const InputField: React.FC<Props> = ({ todo123, setTodo123, a, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }}>
            <input 
                ref={inputRef}
                type="input" 
                onChange={
                    (e) => setTodo123(e.target.value)
                }
                placeholder="masukkan abcd" 
                className="input__box"
                value={todo123} />

            <button className="input__submit" type="submit">Go</button>
        </form>
    )
}

export default InputField