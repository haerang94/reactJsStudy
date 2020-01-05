import React from "react";

const Contact = props => {
  //2초 후에 about 페이지로 이동한다
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid animi
        odio molestiae autem incidunt ex illo in, eveniet deleniti consequatur !
        Alias? Voluptatibus id dicta illo itaque libero tenetur. Dolore nemo,
        Excepturi minus non illo! Repudiandae magni at laboriosam labore
        expedita nostrum quam earum ipsa, aspernatur quaerat quia similique
        asperiores beatae placeat reiciendis esse autem numquam ut tempore?
        Veritatis, commodi tempora praesentium temporibus at culpa.
      </p>
    </div>
  );
};

export default Contact;
