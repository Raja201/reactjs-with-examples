import React from 'react'

const PropsExample = ({data}) => {
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Description: {data.description}</p>
      </div>
    );
  };
  
export default PropsExample