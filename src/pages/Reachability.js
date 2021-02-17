import React from 'react';
import { Alert } from 'react-bootstrap'

const Reachability = () => {
    return (
        <div>

          {navigator.onLine
            ?(
              <Alert variant="success">
              You are online
              </Alert>
            )
            :(
              <Alert variant="danger">
                You are offline
              </Alert>
            )
          }
        </div>
    );
};

export default Reachability;
