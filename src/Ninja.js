import React from "react";

// UI Component

//props 전달하거나 {ninjas} 이렇게 전달 가능
const Ninja = ({ ninjas }) => {
  //const { ninjas } = props; //class가 아니여서 this사용 안함
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>name: {ninja.name}</div>
        <div>age:{ninja.age}</div>
        <div>belt: {ninja.belt}</div>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninja;
