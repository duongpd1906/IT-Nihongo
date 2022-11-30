import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import "./Detail.css";

function Detail() {
	const { state } = useLocation();

	const { handleChange } = useAppContext();

	const handleDetailInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		handleChange({ name, value });
	};

	return (
		<div className="detail-page">
			<img src={state.design} alt="detail" className="detail-page-bg" />

			<div className="detail-page-container">
				<h2 className="detail-page-title">詳細 デザイン</h2>
				<h2 className="detail-page-title">Topic: {state.name}</h2>
				<div className="detail-page-main-content">
					<img
						src={state.design}
						alt="detail"
						className="detail-page-image"
					/>

					<form className="form">
						<div
							className="input-group"
							onChange={handleDetailInput}
						>
							<label
								className="input-label"
								htmlFor="description"
							>
								額
							</label>
							<input
								className="input-control"
								type="text"
								name="amount"
							/>
						</div>
						<div
							className="input-group"
							onChange={handleDetailInput}
						>
							<label className="input-label" htmlFor="position">
								位置
							</label>
							<input
								className="input-control"
								type="text"
								name="position"
							/>
						</div>
						<div
							className="input-group"
							onChange={handleDetailInput}
						>
							<label
								className="input-label"
								htmlFor="explanation"
							>
								説明
							</label>
							<input
								className="input-control"
								type="text"
								name="description"
							/>
						</div>
						<button type="submit" className="form-btn-submit">
							確認
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Detail;
