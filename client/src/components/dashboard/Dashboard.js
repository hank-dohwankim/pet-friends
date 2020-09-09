import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import PrivateRoute from '../routing/PrivateRoute';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <h1>Dashboard</h1>
      <p>
        <i className="fas fa-user">Welcome {user && user.name}</i>
      </p>
    </>
  );
};

Dashboard.propTypes = {
  getCUrrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
