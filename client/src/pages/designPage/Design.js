/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { format } from "timeago.js";
import imgGirl from "../../assets/img/unnamed.png";
import { useAppContext } from "../../context/appContext";
import "./Design.css";

function DesignChosen() {
	const navigate = useNavigate();
	const [defaultImage, setDefaultImage] = useState({});
	const [commentText, setCommentText] = useState("");
	const [listComments, setListComments] = useState([]);
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const [item, setItem] = useState();
	const [isHidden, setIsHidden] = useState(true);

	const handleErrorImage = (data) => {
		setDefaultImage((prev) => ({
			...prev,
			[data.target.alt]: data.target.alt,
			linkDefault: imgGirl,
		}));
	};

	const { state } = useLocation();

	const { handleChange, allComments, addComment, getAllComments } =
		useAppContext();

	const handleSubmit = () => {
		handleChange({
			name: "design",
			value: item ? item._id : state.list_img[0]._id,
		});
		navigate("/detail", {
			state: {
				name: state.name,
				design: item ? item.image : state.list_img[0].image,
			},
		});
	};

	useEffect(() => {
		const designId = item ? item._id : state.list_img[0]._id;
		const comments = allComments.filter(
			(comment) => comment.design === designId
		);
		setListComments(comments);
	}, [item]);

	useEffect(() => {
		const designId = item ? item._id : state.list_img[0]._id;
		const comments = allComments.filter(
			(comment) => comment.design === designId
		);
		setListComments(comments);
	}, [allComments]);

	const handleCommentChange = (e) => {
		setCommentText(e.target.value);
	};

	const handleComment = () => {
		const design = item ? item._id : state.list_img[0]._id;
		const topic = state.topicId;
		const text = commentText;
		const comment = { design, topic, text };
		addComment(comment);
		getAllComments();
	};

	return (
		<div className="design-form">
			<div className="design-title">
				<div>Topic: {state.name}</div>
				<p>デザインを選ぶ</p>
			</div>
			<div className="design">
				<Slider {...settings}>
					{state.list_img.map((item) => (
						<div
							className="card"
							onClick={() => {
								setItem(item);
							}}
						>
							<div className="card-top">
								<img
									src={item.image}
									alt={item.title}
									onError={handleErrorImage}
								/>
							</div>
						</div>
					))}
				</Slider>
				<div
					className="design-label"
					onClick={() =>
						navigate("/upload", {
							state: { topic: state.name },
						})
					}
				>
					あなたのデザインを追加
				</div>
				<div className="design-display">
					<img src={`${item ? item.image : state.src}`}></img>
				</div>
				<div className="design-label2" onClick={handleSubmit}>
					確認
				</div>
				<div className="design-comment">
					<div className="design-comment-title">このデザインをフィードバックする</div>
					<div className="submit-button">
						<input
							type="text"
							placeholder="comment here"
							onChange={handleCommentChange}
							value={commentText}
						></input>
						<Button
							variant="outline-primary"
							onClick={handleComment}
						>
							COMMENT
						</Button>{" "}
					</div>
				</div>
				<div className="comment-list-container">
					{listComments.map((comment) => {
						return (
							<div className="comment-container">
								<div className="user_comment">
									<img
										src="https://i.pinimg.com/originals/a9/c8/a3/a9c8a371859b14e6505835d0d465f9d5.jpg"
										alt=""
									/>
								</div>
								<div className={"comment_main " + (isHidden ? "is-hidden" : "")}>
									<div className="comment_header">
										<div className="comment_information">
											{comment.createdBy.username}{" "}
											Commented{" "}
											{format(comment.createdAt)}{" "}
										</div>
									</div>
									<div className="comment_body">
										<div className="comment_content">This design so beautiful</div>
										<div className="hidden-comment">
											<div>This comment is hidden!</div>
											<div><span onClick={() => {
												setIsHidden(false);
											}}>Click here</span> if you're sure to view it.</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default DesignChosen;
