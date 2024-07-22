import React, { useEffect, useState } from 'react'
import { Row, Col, InputGroup, Form, Button, Card } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';


const LoginPage = () => {
    const {setUserData} = useUserContext();
    const [userInfo, setUserInfo] = useState(null);
    const onKakaoLogin=()=>{
        window.location.href = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=02059f168b6e2f91d0014fde2e56581e&redirect_uri=http://localhost:8080/user/login/kakao";
    }
    const [form, setform] = useState({
        user_uid: '',
        user_upass: ''
    })

    const { user_uid, user_upass } = form;

    const onChangeForm = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const onClickLogin = async (form) => {
        console.log(form)
        const res = await axios.post('/user/login', { user_uid, user_upass })
        console.log(res.data);
        if (res.data === 0) {
            alert("아이디가 없습니다")
        } else if (res.data === 2) {
            alert("비밀번호가 일치하지 않습니다")
        } else if (res.data === 1) {
            sessionStorage.setItem("uid", user_uid);
            const res2= await axios.get(`/user/read/${user_uid}`)
            setUserData({auth:res2.data.user_auth, img:res2.data.user_img, uname:res2.data.user_uname, nickname:res2.data.user_nickname})
            alert("로그인 성공")
            if (sessionStorage.getItem('target')) {
                window.location.href = sessionStorage.getItem('target')
            } else {
                window.location.href = "/"
            }
        }
    }

    const fetchUserInfo = async (code) => {
        try {
            const response = await axios.get(`http://localhost:8080/user/login/kakao?code=${code}`);
            setUserInfo(response.data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    // URL에서 코드 추출
    const getCodeFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('code');
    };

    // 카카오 로그인 완료 후 URL에서 코드 추출 및 사용자 정보 가져오기
    React.useEffect(() => {
        const code = getCodeFromUrl();
        if (code) {
            fetchUserInfo(code);
        }
    }, []);

    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: "50rem" }} className='text-center mt-5 o-hidden border-0 shadow-lg'>
                <Row className='mt-5'>
                    <div>
                        <img src='/images/green.png' style={{ width: "15rem" }} />
                    </div>
                </Row>
                <Row className='justify-content-center mb-5' >
                    <Col xs={12} md={10} lg={12} className='d-flex justify-content-center align-items-center'>
                        <div className='loginbox px-0'>
                            <form>
                                <InputGroup className='h-25'>
                                    <InputGroup.Text style={{ backgroundColor: "#002412", color: 'white' }} className=' justify-content-center w-25'><b>ID</b></InputGroup.Text>
                                    <Form.Control name="user_uid" value={user_uid} onChange={onChangeForm} />
                                </InputGroup >
                                <InputGroup>
                                    <InputGroup.Text style={{ backgroundColor: "#002412", color: 'white' }} className='justify-content-center w-25'><b>PW</b></InputGroup.Text>
                                    <Form.Control name="user_upass" value={user_upass} onChange={onChangeForm} />
                                </InputGroup>
                                <Button style={{ backgroundColor: "#2BBEC6", borderColor: "#2BBEC6", color: 'white' }} className='w-100 mt-2' onClick={() => onClickLogin(form)} ><b>로그인</b></Button>
                                <div className='text-center mt-2'>
                                    <div>
                                        <div>
                                            <img src='/images/kakao1.png' onClick={onKakaoLogin} style={{width:"20rem", height:"2.5rem" ,borderRadius:"8px"}}></img>
                                        </div>
                                        <div className='mt-2'>
                                            <img src='/images/naver1.png' style={{width:"20rem", height:"2.5rem" ,borderRadius:"8px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-2'>
                                    <span>
                                        <a href='/user/join'>회원가입</a>
                                    </span>
                                    <span className='mx-3'>
                                        <a href='/user/searchId'>아이디 찾기</a>
                                    </span>
                                    <span>
                                        <a href='/user/searchPass'>비밀번호 찾기</a>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default LoginPage