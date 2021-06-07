import React from 'react';

const Error = ({err}) => {
    return (
        <div className="notification is-danger is-light">
        {err}
      </div>
    );
};

export default Error;