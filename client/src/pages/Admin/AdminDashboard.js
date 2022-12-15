import React from "react";
import Table from 'react-bootstrap/Table';
import "./AdminDashboard.css";


function AdminDashboard() {
  const topic = {
    id: 1,
    name: 'Cafe',
    vote_total: 418,
    vote_no: 22,
    vote_yes: 396,
    most_voted_design: 'https://images.adsttc.com/media/images/518d/5d69/b3fc/4be4/2e00/0019/large_jpg/DonCafe_8.jpg?1432542274',
  }

  const topicSummary = [
    topic,
    topic,
    topic,
    topic,
    topic
  ]

  return (
    <div className="admin-dashboard">
      <h2 className="admin-title">Topic Summary</h2>
      <Table striped bordered responsive className="admin-table">
        <thead>
          <tr>
            <th rowSpan={2}>#</th>
            <th rowSpan={2}>Topic</th>
            <th rowSpan={2}>Total Vote</th>
            <th colSpan={2}>Vote</th>
            <th rowSpan={2}>Most voted Design</th>
          </tr>
          <tr>
            <th>No </th>
            <th>Yes</th>
          </tr>
        </thead>
        <tbody>
          {
            topicSummary.map((topic, index) => (
              <tr key={index}>
                <td>{topic.id}</td>
                <td>{topic.name}</td>
                <td>{topic.vote_total}</td>
                <td>{topic.vote_no}</td>
                <td>{topic.vote_yes}</td>
                <td><img src={topic.most_voted_design} alt={topic.most_voted_design} /></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default AdminDashboard;
