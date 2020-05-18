import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ArticleProjets from './ArticleProjets';

function Tabs() {

	const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
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
							<h4>Wild Book</h4>
							<ArticleProjets/>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
          <Row>
            <Col sm="12">
							<h4>Hackathon</h4>
							<ArticleProjets/>
            </Col>
          </Row>
        </TabPane>
				<TabPane tabId="3">
          <Row>
            <Col sm="12">
							<h4>Cocktail Paradise</h4>
							<ArticleProjets/>
            </Col>
          </Row>
        </TabPane>
			</TabContent>
		</div>
	)
}

export default Tabs;