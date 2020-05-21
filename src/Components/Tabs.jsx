import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../Css/Tabs.css';

const Tabs = (props) => {

	const [activeTab, setActiveTab] = useState('1');
	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	return (
		<div>
      <h1>PROJECT</h1>
			<Nav tabs>
				<NavItem>
					<NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>Wild Book</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>Hackathon</NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>Paradise</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Row>
						<Col sm="12">
              <div className='Container_Project'>
                <div className='Container_title'>
                  <h3 className='H3_title'>{props.ProjectApi.WildBook.title}</h3>
                </div>
                <div className='Container_Resume'>
                  <p>{props.ProjectApi.WildBook.Resume}</p>
                </div>
              </div>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="12">
            <div className='Container_Project'>
                <div className='Container_title'>
                  <h3 className='H3_title'>{props.ProjectApi.Hackathon.title}</h3>
                </div>
                <div className='Container_Resume'>
                  <p>{props.ProjectApi.Hackathon.Resume}</p>
                </div>
              </div>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row>
						<Col sm="12">
            <div className='Container_Project'>
                <div className='Container_title'>
                  <h3 className='H3_title'>{props.ProjectApi.CocktailParadise.title}</h3>
                </div>
                <div className='Container_Resume'>
                  <p>{props.ProjectApi.CocktailParadise.Resume}</p>
                </div>
              </div>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</div>
	)
}

export default Tabs;