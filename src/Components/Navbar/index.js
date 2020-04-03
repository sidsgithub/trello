import React, { useState } from "react";
import "antd/dist/antd.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Drawer } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.UserReducer.isAuthenticated);
  console.log(isAuth);

  dispatch({ type: "ADD_USER" }, [dispatch]);
  const [visible, setVisible] = useState();

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        {isAuth ? (
          <div>
            <Nav>
              <NavbarBrand>Welcome to your Board Station</NavbarBrand>
              <NavItem>
                <Link
                  to="/"
                  onClick={() => dispatch({ type: "CLEAR_USER" }, [dispatch])}
                >
                  Logout
                </Link>
              </NavItem>
              <NavItem>
                <MenuFoldOutlined onClick={showDrawer}></MenuFoldOutlined>
              </NavItem>
            </Nav>
            <Drawer
              title="Menu"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
                <Link to="/boardstation ">boardstation</Link>
            </Drawer>
          </div>
        ) : (
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">SignUp</Link>
            </NavItem>
            &nbsp;&nbsp;&nbsp;
            <NavItem>
              <Link to="/signin">SignIn</Link>
            </NavItem>
            &nbsp;&nbsp;&nbsp;
          </Nav>
        )}
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
