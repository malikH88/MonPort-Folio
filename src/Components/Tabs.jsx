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
							<h3>{props.ProjectApi.WildBook.title}</h3>
							<p>{props.ProjectApi.WildBook.Resume}</p>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="12">
							<h3>{props.ProjectApi.Hackathon.title}</h3>
							<p>{props.ProjectApi.Hackathon.Resume}</p>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="3">
					<Row>
						<Col sm="12">
							<h3>{props.ProjectApi.CocktailParadise.title}</h3>
							<p>{props.ProjectApi.CocktailParadise.Resume}</p>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</div>
	)
}

export default Tabs;