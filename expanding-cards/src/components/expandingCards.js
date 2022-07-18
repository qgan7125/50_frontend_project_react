import React, { useState } from "react";

const ExpandingCards = (props) => {
  const { data } = props;
  const [expaneded, setExpaneded] = useState(data.data[0].label);

  const handleClick = (e) => {
    const { id } = e.target;
    setExpaneded(id);
  };

  return (
    <div className="expandingCards__container">
      {data.data.map((img) => (
        <div
          className={
            "expandingCards__cards" + (img.label === expaneded ? " active" : "")
          }
          id={img.label}
          key={img.label}
          style={{ backgroundImage: `url(${img.url})` }}
          onClick={handleClick}
        >
          <h3>{img.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;
