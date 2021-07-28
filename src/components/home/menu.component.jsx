import { connect } from "react-redux";

import MenuItem from "./menu-item.component";
import "../../css/home/menu.css";
import { selectMenus } from "./../../redux/selectors/homepage.selectors";

const Menu = ({ menus }) => (
  <div className="menu">
    {menus.map((menu) => {
      return (
        <MenuItem
          key={menu.id}
          title={menu.title}
          imageUrl={menu.imageUrl}
          size={menu.size}
          linkUrl={menu.linkUrl}
        />
      );
    })}
  </div>
);

const mapStateToProps = (state) => ({
  menus: selectMenus(state),
});

export default connect(mapStateToProps)(Menu);
