import React, { useState } from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { DefaultButton } from '@fluentui/react/lib/Button';
import styled from "styled-components";
import './TodoForm.css'

// import { setTextRange } from 'typescript';

interface Props {
    addTodo: AddTodo;
}

const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 #close {
    cursor: pointer;
    position: absolute;
    top: 50%;
    color: black;
    right: 0%;
    padding: 12px 16px;
    transform: translate(0%, -50%);
 }

 #close:hover {background: #bbb;}

 button {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;



export const TodoForm: React.FC<Props> = ({ addTodo }) => {
    
    const [title, setTitle] = useState('');
    const [tagList, setTagList] = useState<string[]>([])
    const [tag, setTag] = useState('');
    const [wrongForm, setWrongForm] = useState<boolean>(false);
    const [dueDate, setDueDate] = useState(new Date().toLocaleDateString()); //auto set date to today's date
    // function handleAddTag(){ 
    //     const updateTags = [
    //         ...tagList,
    //         tag
    //     ];
    //     console.log(tagList)
    //     setTagList(updateTags);
    // }
    function ErrorMessage() {
       if(wrongForm){
           return <div className='error'>YOU MUST ENTER A TITLE AND DATE!</div> 
       }
       else{
           return <div></div>
       }
    }
    
    return (
        <Styles>
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
                <table>
                    <tr>
                {tagList.map((tag, index) => {
                    return <DefaultButton
                        onClick={e => {
                            const updateTags = tagList.filter((_, ind) => ind !== index);
                            setTagList(updateTags);
                        }}>
                            {tag}<span id='close'>x</span>
                    </DefaultButton>
                })}
                </tr>
                </table>
                {/* {tagList.join(" ")} */}
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
                        if (!title){
                            setWrongForm(true);
                            return;
                        }
                        addTodo(title, new Date(dueDate), tagList);
                        setTitle('');
                        setTagList([])
                        setWrongForm(false);
                    }}>
                        Add Todo
                </PrimaryButton>
                <ErrorMessage></ErrorMessage>
            </form>
        </Styles>
    );
}