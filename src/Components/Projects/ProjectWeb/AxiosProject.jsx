import React from "react";
import axios from 'axios';
import { TabPane, Col } from 'reactstrap';


export default class ProjectContent extends React.Component {
  state = {
    project: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/project`)
      .then(res => {
        const project = res.data;
        this.setState({ project });
      })
  }

  render() {
    return (
      <TabPane tabId="4">
        <div className='Margin_Project'>
          <Col sm="12">
            <div className='Container_Project'>
              <div className='Container_title'>
                <h3 className='H3_title'>{this.state.project.map(project => <>{project.name}</>)}</h3>
              </div>
              <div className='Container_Resume'>
                {this.state.project.map(project => <>{project.description}</>)}
              </div>
              <div>
                <p>{this.state.project.map(project => <>{project.link}</>)}</p>
              </div>
            </div>
          </Col>
        </div>
      </TabPane>
    )
  }
}