import React from "react";
import "./Ninja.css";

// UI Component

const Ninja = ({ ninjas, deleteNinja }) => {
  return (
    <div className="ninja-list">
      {ninjas.map(ninja => {
        return ninja.age > 20 ? (
          <div className="ninja" key={ninja.id}>
            <div>name: {ninja.name}</div>
            <div>age:{ninja.age}</div>
            <div>belt: {ninja.belt}</div>
            {/* 이벤트 핸들러의 함수의 매개변수를 전달할 때 익명함수를 통해서 전달한다. 그냥 함수를 통해 매개변수를 전달하면 매번 호출하는 것처럼 되어 버튼을 클릭하지 않아도 자동적으로 호출하는 것처럼 되어버린다*/}
            <button
              onClick={() => {
                deleteNinja(ninja.id);
              }}
            >
              Delete Ninja
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninja;
