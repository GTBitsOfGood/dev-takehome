import React, { useState } from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';


// import { setTextRange } from 'typescript';

interface Props {
    addTodo: AddTodo;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
    
    const [title, setTitle] = useState('');
    const [tagList, setTagList] = useState(['']);
    const [tag, setTag] = useState('');
    const [dueDate, setDueDate] = useState("2018-07-22");
    // function handleAddTag(){ 
    //     const updateTags = [
    //         ...tagList,
    //         tag
    //     ];
    //     console.log(tagList)
    //     setTagList(updateTags);
    // }

    return (
        <form>
            <label>Title</label>
            <input 
                type='text'
                placeholder='todo title goes here'
                value={title}
                onChange = {e => {
                    setTitle(e.target.value);
                }}
            />
            <br></br>
            <label>Tags</label>
            <input 
                type='text'
                placeholder='tags go here'
                value={tag}
                onChange = {e => {
                    setTag(e.target.value);
                }}
            />
            <PrimaryButton onClick={e => {
                e.preventDefault();
                const updateTags = [
                    ...tagList,
                    tag
                ];
                console.log(tagList)
                setTagList(updateTags);
                setTag('')
                }}>
                Add Tag
            </PrimaryButton>
            <br></br>
            {tagList}
            <br></br>
            <label>Date</label>
            <input 
                type='date'
                value={dueDate}
                onChange = {e => {
                    setDueDate(e.target.value);
                }}
            />
            <br></br>
            <PrimaryButton
                type='submit'
                onClick={e => {
                    e.preventDefault();
                    addTodo(title, new Date(dueDate), tagList);
                    setTitle('');
                    setTagList([''])
                }}>
                    Add Todo
            </PrimaryButton>
        </form>
    );
}