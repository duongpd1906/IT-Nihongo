import Slider from "react-slick";
import "./UserTopic.css";

function UserTopic(props) {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	const list_img = props.topic.list_img;

	return (
		<div className="topic__item">
			<div className="topic__header">{props.topic.topicName}</div>
			<div className="topic__main">
				<div className="topic__detail">
					<span className="topic__detail-title">Design</span>
					<div className="topic__slide-list">
						<Slider {...settings}>
							{list_img.map((image) => (
								<div>
									<img src={image.image} alt="design" />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserTopic;
