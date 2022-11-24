import './Detail.css';

function Detail() {

    return (
        <div className="detail-page">
            <img src="https://noithatkendesign.vn/storage/app/media/uploaded-files/thiet-ke-quan-cafe-the-coffee-house-02.jpg" alt="detail" className="detail-page-bg" />

            <div className="detail-page-container">
                <h2 className="detail-page-title">詳細 デザイン</h2>
                <div className="detail-page-main-content">
                    <img src="https://noithatkendesign.vn/storage/app/media/uploaded-files/thiet-ke-quan-cafe-the-coffee-house-02.jpg" alt="detail" className="detail-page-image" />

                    <form className="form">
                        <div className="input-group">
                            <label className="input-label" htmlFor="description">額</label>
                            <input className="input-control" type="text" />
                        </div>
                        <div className="input-group">
                            <label className="input-label" htmlFor="position">位置</label>
                            <input className="input-control" type="text" />
                        </div>
                        <div className="input-group">
                            <label className="input-label" htmlFor="explanation">説明</label>
                            <input className="input-control" type="text" />
                        </div>
                        <button type="submit" className="form-btn-submit">確認</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Detail;