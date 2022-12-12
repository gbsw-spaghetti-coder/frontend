import React, { useEffect, useState } from 'react';
import '../styles/pwEdit.css';
import logo from '../images/logo.png';
import axios from 'axios';

const PasswordEdit = () => {
  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });

  const handlePasswordType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const validatePassword = async (req, res) => {
    await axios
      .post('/api/auth/password', { withCredentials: true })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const editPassword = async () => {
    if (localStorage.getItem('token') === null) {
      alert('로그인 하세요');
      window.location.href = '/';
    } else {
      await axios.post('/api/user/password', { withCredentials: true });
    }
  };
  useEffect(() => {
    editPassword();
  }, []);

  return (
    <div className="passwordEdit-container">
      <img src={logo} alt="logo" className="pw-edit-logo" />
      <span className="pw-edit-logo-text">Code Wave</span>
      <div className="passwordEdit-layout">
        <span>Change Password</span>
        <div className="old-pw-div">
          <input
            type={pwType.type}
            className="old-password"
            name="old-pw"
            placeholder="현재 비밀번호를 입력하세요"
          />
          <button type="submit" onClick={validatePassword}>
            확인
          </button>
        </div>
        <div className="new-pw-div">
          <input
            type={pwType.type}
            className="new-password"
            name="new-pw"
            placeholder="새로운 비밀번호를 입력하세요"
          />
        </div>
        <div className="new-pwChk-div">
          <input
            type={pwType.type}
            className="new-password-chk"
            name="new-pw-chk"
            placeholder="새로운 비밀번호를 한번 더입력하세요"
          />
        </div>
        <div className="pwShowAndHide">
          <span onClick={handlePasswordType}>
            {pwType.visible ? (
              <span className="pwHide" style={{ fontSize: '5px', cursor: 'pointer' }}>
                비밀번호 숨기기
              </span>
            ) : (
              <span className="pwShow" style={{ fontSize: '5px', cursor: 'pointer' }}>
                비밀번호 보이기
              </span>
            )}
          </span>
        </div>
        <div className="pwEdit-button-div">
          <button type="submit" className="pwEdit-button">
            비밀번호 변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordEdit;
