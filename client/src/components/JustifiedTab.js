import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./JustifiedTab.css";
import UserComment from "./UserComment";
import UserTopic from "./UserTopic.js";
import UserVote from "./UserVote.js";


function JustifiedTab() {

	return (
		<Tabs
			defaultActiveKey="topic"
			id="justify-tab-example"
			className="tabs-container"
			justify
		>
			<Tab eventKey="topic" title="Topic" className="tab-container">
				<div className="topic__list">
					<UserTopic />
				</div>
			</Tab>
			<Tab eventKey="vote" title="Vote" className="tab-container">
				<div className="vote__list">
					<UserVote />
				</div>
			</Tab>
			<Tab eventKey="comment" title="Comment" className="tab-container">
				<div className="comment__list">
					<UserComment />
					<UserComment />
				</div>
			</Tab>
		</Tabs>
	);
}

export default JustifiedTab;
