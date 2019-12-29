import React from "react";

// UI Component

//props 전달하거나 {ninjas} 이렇게 전달 가능
const Ninja = ({ ninjas }) => {
  //const { ninjas } = props; //class가 아니여서 this사용 안함
  // const ninjaList = ninjas.map(ninja => {
  //   // 20보다 낮으면 아예 화면에 나타나지 않음
  //   return ninja.age > 20 ? (
  //     <div className="ninja" key={ninja.id}>
  //       <div>name: {ninja.name}</div>
  //       <div>age:{ninja.age}</div>
  //       <div>belt: {ninja.belt}</div>
  //     </div>
  //   ) : null;
  // });
  return (
    <div className="ninja-list">
      {ninjas.map(ninja => {
        // 20보다 낮으면 아예 화면에 나타나지 않음
        return ninja.age > 20 ? (
          <div className="ninja" key={ninja.id}>
            <div>name: {ninja.name}</div>
            <div>age:{ninja.age}</div>
            <div>belt: {ninja.belt}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninja;
