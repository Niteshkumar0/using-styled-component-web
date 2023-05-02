import React from 'react';
import { StyledCard } from './styles/card-styled';

export default function Card(props) {
  return (
    <StyledCard layout={props.id % 2 == 0 && 'row-reverse'}>
         <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
         </div>
         <div>
         <img src={`../image/${props.image}`} alt="" />
         </div>
    </StyledCard>
  )
}
