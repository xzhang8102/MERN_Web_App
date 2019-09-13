import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 && (
    <div className={`alert alert-${alerts[alerts.length - 1].alertType}`}>
      {alerts[alerts.length - 1].msg}
    </div>
  );
// alerts.map(alert => (
//   <div key={alert.id} className={`alert alert-${alert.alertType}`}>
//     {alert.msg}
//   </div>
// ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return { alerts: state.alert };
};

export default connect(mapStateToProps)(Alert);
