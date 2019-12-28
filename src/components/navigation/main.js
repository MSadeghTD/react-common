import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Nav } from 'react-bootstrap';

import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  mainSidebarStick: {
    position: 'relative',
    top: '0',
    height: '100vh',
    'overflow-x': 'hidden',
    'overflow-y': 'auto',
  },
  navItem: {
    'text-align': 'center',
    fontSize: '14px',
    marginBottom: '16px',
  },
  navLinkDark: {
    color: '#333333',
    padding: '5px 8px',
    fontSize: '12px',
  },
});
const MainNavigation = ({ panes, activePane }) => (
  <div className={css(styles.mainSidebarStick)}>
    <Row>
      <Col>
        <Nav variant="pills" className="flex-column">
          {panes.map(item => {
            if (item.invisible) return null;
            return (
              <Nav.Item className={css(styles.navItem)} key={item.id}>
                <Nav.Link active={activePane === item.id} className={css(styles.navLinkDark)} disabled={item.isDisabled} {...item.linkProps}>
                  <h1 style={{ margin: '0 0 4px' }}>{item.icon}</h1>
                  {item.name}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </Col>
    </Row>
  </div>
);
const paneFormat = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  linkProps: PropTypes.object.isRequired,
  invisible: PropTypes.bool,
});
MainNavigation.propTypes = {
  panes: PropTypes.arrayOf(paneFormat).isRequired,
  activePane: PropTypes.string.isRequired,
};
export default MainNavigation;