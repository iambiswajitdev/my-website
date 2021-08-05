import Sidebar from "./sidebar";
import Drawer from "@material-ui/core/Drawer";
import { Col, Row } from "react-bootstrap";

const HeaderNavUserIconDrawer = ({ drawerState, changeDrawer }) => {
  return (
    <Drawer anchor="right" open={drawerState} onClose={changeDrawer}>
      {
        // *put all design here
      }
      <div className="profile_drawer">
        <Row>
          <Col lg={12} className="sideBarff">
            <Sidebar />
          </Col>
        </Row>
      </div>
    </Drawer>
  );
};

export default HeaderNavUserIconDrawer;
