// import React, { useState } from 'react';
// import axios from 'axios';
// // import logo from './images/logo.png';
// import { Link } from 'react-router-dom';
// import '../styles/login.css';
// // import Kakao from '../images/kakao.png';
// // import Github from '../images/git.png';

// const Login = (props) => {
//   const { bg } = props;
//   bg('bg-blue');

//   const [values, setValues] = useState({
//     email: '',
//     password: '',
//   });
//   /*const [cookie, setCookie] = useState("");*/

//   const handleChange = (e) => {
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const submit = async (e) => {
//     e.preventDefault();

//     const data = {
//       email: values.email,
//       password: values.password,
//     };

//     try {
//       const response = await axios.post('/api/auth/login', data, { withCredentials: true });

//       if (response.data.success) {
//         alert(response.data.message);
//         console.log(response);
//       }
//     } catch (error) {
//       console.log(error);
//       alert(error.response.data.message);
//     }
//   };

//   return (
//     <div className='login-container'>
//       <div className='logo-layout'>
//         <img src={logo} className='logo' alt="logo" />
//         <p className='logo-text'>Code Wave</p>
//       </div>
//       <div className='login-layout'>
//         <div className='login-layout-top'>
//           <p className='login-text'>LOGIN</p>
//           <img src={logo} className='logo-mobile' alt="logo " />
//           <p className='logo-text-mobile'>Code Wave</p>
//           <form className='login-form' onSubmit={submit}>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 className='email-text'
//                 placeholder="E-mail"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               <input
//                 type="password"
//                 name="password"
//                 className='pw-text'
//                 placeholder="Password"
//                 value={values.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <button type="submit" className='login-button'>
//               로그인
//             </button>
//             <p className='lostPW'>비밀번호를 잃어버리셨나요?</p>
//             <div className='or-layout'>
//               <p className='left-or-border' />
//               <p className='or'>OR</p>
//               <p className='right-or-border' />
//             </div>
//             <div className='kakao-button'>
//               <a href="http://127.0.0.1:3001/api/auth/kakao" className='kakao-login-button'>
//                 <img src={Kakao} className='kakao-img' alt="error" />
//                 <span className='button-phrase'>카카오로 로그인</span>
//               </a>
//             </div>
//             <div className='github-button'>
//               <a href="http://127.0.0.1:3001/api/auth/github" className='github-login-button'>
//                 <img src={Github} className='github-img' alt="error" />
//                 <span className='button-phrase'>깃허브로 로그인</span>
//               </a>
//             </div>
//             <div className='login-layout-bottom-mobile'>
//               <p className='goSignUp-text'>계정이 없으신가요?</p>
//               <span className='goSignUp-text-link'>회원가입</span>
//             </div>
//           </form>
//         </div>
//         <div className='login-layout-bottom'>
//           <p className='goSignUp-text'>계정이 없으신가요?</p>
//           <span className='goSignUp-text-link'>회원가입</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
