import React from 'react'

const List = ({people}) => {
        return (
          <div>
            {people.map((e) => {
              const { id, name, age, image } = e;
              return (
                <div key={id} >
                  <img src={image} alt="" />
                  <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                  </div>
                </div>
              );
            })}
          </div>
)}

export default List