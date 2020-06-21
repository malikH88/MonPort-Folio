import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Col } from 'reactstrap';
import classnames from 'classnames';
import './Tabs.css';

const Tabs = (props) => {

	const [activeTab, setActiveTab] = useState('1');
	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	return (
		<div className='Background_Web'>
			<h1 className='h1'>Project Web</h1>
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
					<div className='Margin_Project'>
						<Col sm="12">
							<div className='Container_Project'>
								<div className='Container_title'>
									<h3 className='H3_title'>{props.ProjectApi.WildBook.title}</h3>
								</div>
								<div className='Container_Resume'>
									<p className='Resume'>{props.ProjectApi.WildBook.resume}</p>
								</div>
								<div className='Container_Image'>
									{props.ProjectApi.WildBook.image}
								</div>
								<div>
									<p>{props.ProjectApi.WildBook.link}</p>
								</div>
							</div>
						</Col>
					</div>
				</TabPane>
				<TabPane tabId="2">
					<div className='Margin_Project'>
						<Col sm="12">
							<div className='Container_Project'>
								<div className='Container_title'>
									<h3 className='H3_title'>{props.ProjectApi.Hackathon.title}</h3>
								</div>
								<div className='Container_Resume'>
									<p>{props.ProjectApi.Hackathon.resume}</p>
								</div>
								<div className='Container_Image'>
									{props.ProjectApi.Hackathon.image}
								</div>
								<div>
									<p>{props.ProjectApi.Hackathon.link}</p>
								</div>
							</div>
						</Col>
					</div>
				</TabPane>
				<TabPane tabId="3">
					<div className='Margin_Project'>
						<Col sm="12">
							<div className='Container_Project'>
								<div className='Container_title'>
									<h3 className='H3_title'>{props.ProjectApi.CocktailParadise.title}</h3>
								</div>
								<div className='Container_Resume'>
									<p>{props.ProjectApi.CocktailParadise.resume}</p>
								</div>
								<div className='Container_Image'>
									{props.ProjectApi.CocktailParadise.image}
								</div>
								<div>
									<p>{props.ProjectApi.CocktailParadise.link}</p>
								</div>
							</div>
						</Col>
					</div>
				</TabPane>
			</TabContent>
		</div>
	)
}

export default Tabs;