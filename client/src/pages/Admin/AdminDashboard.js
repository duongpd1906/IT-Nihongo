import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useAppContext } from "../../context/appContext";
import "./AdminDashboard.css";

function AdminDashboard() {
	const { getAllTopicsAdmin, allTopics, getAllVotes, allVotes } =
		useAppContext();

	const topicSummary = [];

	useEffect(() => {
		getAllTopicsAdmin();
		getAllVotes();
	}, []);

	const getSummary = () => {
		allTopics.forEach((topic) => {
			const topicName = topic.topicName;
			const vote_total = allVotes.filter(
				(vote) => vote.topic._id === topic._id
			).length;
			const vote_yes = allVotes.filter(
				(vote) => vote.topic._id === topic._id && vote.vote === true
			).length;
			const vote_no = allVotes.filter(
				(vote) => vote.topic._id === topic._id && vote.vote === false
			).length;
			topicSummary.push({
				topicName,
				vote_total,
				vote_yes,
				vote_no,
			});
			console.log({ topicName, vote_total, vote_yes, vote_no });
		});
	};

	getSummary();

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
					</tr>
					<tr>
						<th>No </th>
						<th>Yes</th>
					</tr>
				</thead>
				<tbody>
					{topicSummary.map((topic, index) => (
						<tr key={index}>
							<td>{index}</td>
							<td>{topic.topicName}</td>
							<td>{topic.vote_total}</td>
							<td>{topic.vote_no}</td>
							<td>{topic.vote_yes}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default AdminDashboard;
