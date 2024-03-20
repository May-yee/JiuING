import React, { Component } from 'react';
import axios from 'axios';
class Header extends Component {
    state = { 
        userEmail: "",
        passWord: "",
        userName: "會員名稱",
        headShot: "http://localhost:3000/images/head_sticker.png"
     } 
    render() { 
        return (
<header>
        <div className="container">
            <a href="/">
                <div className="logo_box row">
                    <img src="http://localhost:3000/images/LOGO.png" alt=""/>
                    <p>揪ing</p>
                </div>
            </a>
            <ul className="row">
                <a href="/Joing/memebers"><li>會員專區</li></a>
                <a href=""><li>新手上路</li></a>
                <a href=""><li>聯絡我們</li></a>
            </ul>
            <div className="member_box" onClick={this.toggleLogoIn}>
                <div className="member_img" >
                    <img src={this.state.headShot} alt=""/>
                </div>
                <p>{this.state.userName}</p>
            </div>
        </div>
        <div className="container" id="logindiv" onClick={this.logindiv}>
            <form className="logoIn" method='post' id="logoInform" onSubmit={this.logoIn}>
                <input type="text" name="userEmail" id="userEmail" required/>
                <input type="password" name="passWord" id="passWord" required/>
                <input type="submit" value="登入"/>
                <a href="/register">註冊帳號</a>
            </form>
        </div>
    </header>
        );
    }
    toggleLogoIn = (e) => {
        e.stopPropagation();
        const member_box = document.querySelector(".member_box");
        const logoIn = document.querySelector(".logoIn")
        logoIn.classList.add("show");
    }
    logindiv = (e) => {
        e.stopPropagation();
    }
    logoIn = async (e) => {
        e.preventDefault();
        var dataToServer = {
            userEmail: document.getElementById('userEmail').value,
            passWord: document.getElementById('passWord').value
        }
        var config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        var result = await axios.post(
            'http://localhost:8000/member/register/login', 
            dataToServer,
            config
        )
        if(result.data['success']) {
            this.setState({userName:result.data.userName})
            alert("登入成功");

        }else {
            alert('帳號或密碼錯誤')
        }
    }


}
 
export default Header;