import React from 'react';
import classes from './TodoItem.module.css';

const Todo = (props: { text: string; onRemoveTodo: () => void }) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default Todo;
