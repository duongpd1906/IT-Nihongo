import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./JustifiedTab.css";

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
					<div className="topic__item">
						<div className="topic__header">
							Topic 1
						</div>
						<div className="topic__main">
							<div className="topic__detail">
								<span className="topic__detail-title">Design</span>
								<div className="topic__slide-list">
								</div>
							</div>
							<div className="cta">
								<button className="btn-edit">edit</button>
								<button className="btn-delete">delete</button>
							</div>
						</div>
					</div>
				</div>
			</Tab>
			<Tab eventKey="vote" title="Vote" className="tab-container">
				<div className="vote__list">
					<div className="vote__item">
						<div className="vote__header">
							Topic 2
						</div>
						<div className="vote__main">
							<div className="vote__detail">
								<span className="vote__detail-title">Vote</span>
								<div className="detail__item">
									<span>Vote: </span>
									<span>Yes</span>
								</div>
								<div className="detail__item">
									<span>Design: </span>
									<img src="https://images.adsttc.com/media/images/5de8/74f9/3312/fdbc/3500/005b/large_jpg/Culturist_5.jpg?1575515353" alt="design" />
								</div>
							</div>
							<div className="vote__detail">
								<span className="vote__detail-title">Detail</span>
								<div className="detail__item">
									<span>Amount: </span>
									<span>2</span>
								</div>
								<div className="detail__item">
									<span>Position: </span>
									<span>anywhere</span>
								</div>
								<div className="detail__item">
									<span>Description: </span>
									<span>none</span>
								</div>
							</div>
							<div className="cta">
								<button className="btn-edit">edit</button>
								<button className="btn-delete">delete</button>
							</div>
						</div>
					</div>
				</div>
			</Tab>
			<Tab eventKey="comment" title="Comment" className="tab-container">
				<div className="comment__list">
					<div className="comment__item">
						<div className="comment__header">
							<div className="comment__title">
								<span className="comment__topic-name">Topic 2</span>
								<span className="comment__design-name">, Design 1</span>
							</div>
							<span className="comment__time">1 days ago</span>
						</div>
						<div className="comment__main">
							<div className="comment__content">
								This design is very nice
							</div>
							<div className="cta">
								<button className="btn-edit">edit</button>
								<button className="btn-delete">delete</button>
							</div>
						</div>
					</div>
					<div className="comment__item">
						<div className="comment__header">
							<div className="comment__title">
								<span className="comment__topic-name">Topic 4</span>
								<span className="comment__design-name">, Design 3</span>
							</div>
							<span className="comment__time">2 days ago</span>
						</div>
						<div className="comment__main">
							<div className="comment__content">
								This topic is very bad
							</div>
							<div className="cta">
								<button className="btn-edit">edit</button>
								<button className="btn-delete">delete</button>
							</div>
						</div>
					</div>
				</div>
			</Tab>
		</Tabs>
	);
}

export default JustifiedTab;
