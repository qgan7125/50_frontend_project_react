import { FC, MouseEvent, useState } from "react";
import data from './data.json';

const ExpandingCards: FC = () => {
  const [expaneded, setExpaneded] = useState<string>(data.data[0].label);

  const handleClick = (e: MouseEvent) => {
    const { id } = e.currentTarget;
    setExpaneded(id);
  };

  return (
    <main className="expandingCards__container">
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
    </main>
  );
};

export default ExpandingCards;
