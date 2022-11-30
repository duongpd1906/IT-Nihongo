import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function JustifiedTab() {
	return (
		<Tabs
			defaultActiveKey="topic"
			id="justify-tab-example"
			className=""
			justify
		>
			<Tab eventKey="topic" title="Topic">
				hello dd topic
			</Tab>
			<Tab eventKey="vote" title="Vote">
				hello dd vote
			</Tab>
			<Tab eventKey="comment" title="Comment">
				hello dd comment
			</Tab>
		</Tabs>
	);
}

export default JustifiedTab;
