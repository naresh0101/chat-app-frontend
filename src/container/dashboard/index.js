import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import ChatRoom from '../../views/chatRoom';


const Dashboard = () => {
  return (
      <div>
           <div className="row">
           <Sidebar />
            <Switch>
              <Route exact path="/" component={ChatRoom} />
            </Switch>
           </div>

      </div>
  );
};

export default Dashboard;
