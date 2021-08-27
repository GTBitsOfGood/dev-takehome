import React from 'react';
import { Checkbox } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Flex, Spacer, Center, Text, Square } from "@chakra-ui/react"
import styled from "styled-components";
import { Box } from '@chakra-ui/react';
import './TodoItem.css'

/*  

CHECBOX TODO TITLE _____________________ DUE DATE
TAGS
*/





interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
      // <Grid container spacing={2} justify="center">

          <Flex color="white"  className="card">
              <Box bg="white" p={4} color="black">
                <Checkbox checked={todo.complete} label={todo.title + " "} onChange={() => {toggleTodo(todo); }}/>
                Tags: {todo.tagList.map((tag, index) => {
                      return <><DefaultButton className="todo">
                              <p>{tag}</p>
                      </DefaultButton></>
                  })}
              </Box>
              <Box bg="white"  p={4} color="black">
                Due: {todo.dueDate.toLocaleDateString()}
              </Box>
          </Flex> 
      // </Grid>
    );
}




