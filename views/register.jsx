import React, { Component } from 'react';
import axios from 'axios';
class Register extends Component {
    state = {
        userImgPreview: "http://localhost:3000/images/head_sticker.png",
        headShot: "",
        userEmail: "",
        passWord: "",
        passWord2:"",
        userName: "",
        birth: "",
        birthBoolean: 0,
        sex: "",
        introduction: "",
    }

    render() {
        const { userImgPreview } = this.state;

        return (
            <div className="main">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>註冊帳號</h2>
                    <div className="settingEdit">
                        <form id="registerform">
                            <div className="member_img">
                                <img id="imagePreview" src={userImgPreview} alt="" />
                            </div>
                            <div className="settingItem row">
                                <label className="settingItemTitle row"><h3>上</h3><h3>傳</h3><h3>頭</h3><h3>貼:</h3></label>
                                <input type="file" id="headShot" accept=".png,.jpg,.jpeg" onChange={this.handleImageChange} multiple={false} required />
                            </div>
                    <div className="settingItem row">
                        <label htmlFor="userName" className="settingItemTitle row"><h3>會</h3><h3>員</h3><h3>名</h3><h3>稱:</h3></label>
                        <input type="text" value={this.state.userName} name="userName" id="userName" onChange={this.userNameChange} required/>
                    </div>
                    <div className="settingItem row">
                        <label htmlFor="userEmail" className="settingItemTitle row"><h3>信</h3><h3>箱:</h3></label>
                        <input type="email" value={this.state.userEmail} name="userEmail" id="userEmail" onChange={this.userEmailChange} required/>
                    </div>
                    <div className="settingItem row">
                        <label htmlFor="passWord" className="settingItemTitle row"><h3>密</h3><h3>碼:</h3></label>
                        <input pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,13}$" type="passWord" value={this.state.passWord} onChange={this.passWordChange} name="passWord" id="passWord" required/>
                    </div>
                    <div className="settingItem row">
                        <label htmlFor="passWord2" className="settingItemTitle row"><h3>重</h3><h3>新</h3><h3>輸</h3><h3>入:</h3></label>
                        <input pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,13}$" type="passWord" value={this.state.passWord2} onChange={this.passWordChange2} name="passWord2" id="passWord2" required/>
                    </div>
                    <div className="settingItem row">
                        <label htmlFor="birth" className="settingItemTitle row"><h3>生</h3><h3>日:</h3></label>
                        <input type="date" value={this.state.birth} onChange={this.birthChange} name="birth" id="birth" required/>
                        <label for="birthBoolean" class="row">
                            <input type="checkbox" name="birthBoolean" id="birthBoolean" value={this.state.birthBoolean} onChange={this.birthBooleanChange}/>
                            <div class="checkbox"></div>
                            不公開
                        </label>
                    </div>
                            {/* 其他註冊表單欄位 */}
                            {/* ... */}
                            <div className="btn_group">
                                <button onClick={this.onClick} type="submit" className="btn btn_orange">確定</button>
                                <a href="/" className="btn btn_gray">取消</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }   //end of render

    handleImageChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            var newState = {...this.state};
            newState.headShot = e.target.files[0];
            newState.userImgPreview = reader.result;
            this.setState(newState);
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    userNameChange = (e) => {
        var newState = {...this.state};
        newState.userName = e.target.value;
        this.setState(newState);
    }
    userEmailChange = (e) => {
        var newState = {...this.state};
        newState.userEmail = e.target.value;
        this.setState(newState);
    }
    passWordChange = (e) => {
        var newState = {...this.state};
        newState.passWord = e.target.value;
        this.setState(newState);
    }
    passWordChange2 = (e) => {
        var newState = {...this.state};
        newState.passWord2 = e.target.value;
        this.setState(newState);
    }
    birthChange = (e) => {
        var newState = {...this.state};
        newState.birth = e.target.value;
        this.setState(newState);
    }
    birthBooleanChange = (e) => {
        var newState = {...this.state};
        newState.birthBoolean = e.target.value;
        this.setState(newState);
    }
    onClick = (e) => {

    }
}

export default Register;
