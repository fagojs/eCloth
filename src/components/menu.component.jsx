import React, { Component } from "react";
import "../css/menu.css";
import MenuItem from "./menu-item.component";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "Shoes",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "Mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 4,
        },
        {
          title: "Womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="menu">
        {sections.map((section) => {
          return (
            <MenuItem
              key={section.id}
              title={section.title}
              imageUrl={section.imageUrl}
              size={section.size}
            />
          );
        })}
      </div>
    );
  }
}

export default Menu;
