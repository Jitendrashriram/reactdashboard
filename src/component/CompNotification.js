
import React, { useState } from 'react';

import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

function CompNotification() {

  const [activeTab, setActiveTab] = useState('1');

    return (

    <>

<div className="bg-dark">
      <div className="p-2 pl-0 pt-0 flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path className="texttheme" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg> <h2 className="text-base font-semibold text-blue-500"> Company Notifications</h2></div>
      <Nav tabs>
        <NavItem className="text-sm font-normal text-gray-500">
          <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
           Notification
          </NavLink>
        </NavItem>
        <NavItem className="text-sm font-normal text-gray-500">
          <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            Dismissed
          </NavLink>
        </NavItem>
        <NavItem className="text-sm font-normal text-gray-500">
          <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
            Manage
          </NavLink>
        </NavItem>
      </Nav>
      <div className="flex text-sm p-3 pl-0 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> Notifications dismissed after 30days</div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          
        <div class="flex bg-gray-100 text-sm p-2">
              <div class="flex-none w-16 text-gray-500">
                    Today
              </div>
              <div class="flex-grow ...">
                    Sale Price of $59.19 has reached the Buy Price of $61
              </div>
              <div class="flex-none w-16 text-right text-gray-500">
                    Dismiss
              </div>
        </div>

        <div class="flex text-sm p-2">
              <div class="flex-none w-16 text-gray-500">
                    Nov20
              </div>
              <div class="flex-grow ...">
                    Sale Price of $59.19 has reached the Buy Price of $61
              </div>
              <div class="flex-none w-16 text-right text-gray-500">
                    Dismiss
              </div>
        </div>

        <div class="flex bg-gray-100 text-sm p-2">
              <div class="flex-none w-16 text-gray-500">
                    Today
              </div>
              <div class="flex-grow ...">
                    Sale Price of $59.19 has reached the Buy Price of $61
              </div>
              <div class="flex-none w-16 text-right text-gray-500">
                    Dismiss
              </div>
        </div>

        </TabPane>
        <TabPane tabId="2">Tab 2 Content</TabPane>
        <TabPane tabId="3">Tab 3 Content</TabPane>
      </TabContent>
    </div> 

     

      

	
		</>

        
    );
}

export default CompNotification