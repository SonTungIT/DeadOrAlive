import React from 'react';
import './ImportModal.scss';
import Button from '~/components/Layout/components/Button';

function ShopModal({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Thêm Mới Tin Tức</h1>
                </div>
                <form className="form-input">
                    <div className="body">
                        <div>Cài Đặt</div>
                        <label className="label-input">
                            <input type="text" placeholder="Id" />
                            <input type="text" placeholder="Tên Items" />
                            <input type="text" placeholder="Images" />
                            <input type="text" placeholder="Loại" />
                            <input type="text" placeholder="Trạng Thái" />
                        </label>
                    </div>
                    <div className="ant-divider" role="separator"></div>
                    <div className="footer">
                        <Button
                            onClick={() => {
                                closeModal(false);
                            }}
                            text
                        >
                            Cancel
                        </Button>
                        <Button type="submit" rounded>
                            Thêm
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShopModal;
