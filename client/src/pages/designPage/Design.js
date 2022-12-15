/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Design.css";
import imgGirl from "../../assets/img/unnamed.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { format } from "timeago.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

	const handleErrorImage = (data) => {
		setDefaultImage((prev) => ({
			...prev,
			[data.target.alt]: data.target.alt,
			linkDefault: imgGirl,
		}));
	};

	const { state } = useLocation();

	const { handleChange, allComments, addComment, getAllComments, isVoting } =
		useAppContext();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const handleSubmit = () => {
		if (isVoting) {
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
		} else {
			setShow(true);
		}
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
			<div className="Design">
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
					<div>このデザインをフィードバックする</div>
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
								<div className="comment_main">
									<div className="comment_header">
										<div className="comment_information">
											{comment.createdBy.username}{" "}
											Commented{" "}
											{format(comment.createdAt)}{" "}
										</div>
									</div>
									<div className="comment_body">
										<div>{comment.text}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						You have to vote topic before choose design
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Click <a href="/">here</a> to go back
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default DesignChosen;
