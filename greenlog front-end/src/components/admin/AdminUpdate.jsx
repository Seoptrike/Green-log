import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col, Button, Badge, InputGroup, Form, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GiCancel } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';
import ModalAddress from '../../common/useful/ModalAddress';
import { ElevatorSharp } from '@mui/icons-material';

//엑스버튼 누를 시 취소하기, 수정아이콘누를 시 수정하기
//비밀번호체크
//이미지변경
//전화번호 유효성, 이메일 유효성


const AdminUpdate = () => {
  const { user_uid } = useParams();
  const [form, setForm] = useState("");
  const [origin, setOrigin] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [isEmail, setIsEmail] =useState(false);
  const [phoneCheck, setPhoneCheck]=useState(false);
  const [gender, setGender] = useState(0);
  const [auth, setAuth] = useState(0);
  const styleRed = "danger"
  const styleBlue = "primary"

  const { user_key, user_nickname, user_uname, user_phone, user_address1, user_address2,
    user_birth, user_email, user_gender, user_auth } = form;

  const callAPI = async () => {
    const res = await axios.get(`/user/read/${user_uid}`);
    setForm(res.data);
    setOrigin(res.data);

  }
  useEffect(() => {
    callAPI();
  }, []);

  //수정취소
  const onClickReset = () => {
    alert("취소하시겠습니까?");
    callAPI();
  }

  //회원영구삭제
  const onClickDelete = async (user_key) => {
    alert(`${user_key} 회원 정보는 다시 복구할 수 없습니다. 그래도 삭제하시겠습니까?`);
    await axios.post(`/user/delete/${user_key}`);
    alert("회원영구 삭제완료!");
    window.location.href = "/user/admin/list.json";
  }

  //닉네임 중복확인
  const onCheckNickname = (user_nickname) => {
    if (origin.user_nickname === user_nickname) {
      alert("다른유저가 사용하고 있는 닉네임입니다.");
      setIsCheck(false);
    } else {
      alert("사용가능한 닉네임입니다");
      setIsCheck(true);
    }
  }

  //폼변경
  const onChangeForm = (e) => {
   // if(e.targe.name==="user_phone"){
   //  const patternNum = /^\d{3}-\d{3,4}-\d{4}$/;
   //  if(patternNum.test(e.target.value)){
   // setForm(e.target.value)}
  //} 
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  //정보수정
  const onClickUpdate = async (form) => {
    if (!window.confirm("변경된 내용을 수정하시겠습니까?")) return;
    const updateForm = { ...form, user_gender: gender, user_auth: auth }
    await axios.post("/user/admin/update", updateForm);
    window.location.href = `/user/admin/read/${user_uid}`;
  }

  //useEffect(()=>{
  //  if (inputValue.length === 13) {
    //setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
 // }
 // },[inputValue]) 자동적으로 하이픈 넣기


  return (
    <div><h1 className='text-center my-5'>{user_uid}({user_uname})님 회원정보</h1>
      <Row className='justify-content-center'>
        <Col xs={12} sm={11} md={10} lg={9} className='mb-3'>
          <Card className='text-center' border={user_gender === 1 ? styleBlue : styleRed}>
            <Card.Body>
              <Row>
                <Col lg={4}>
                  <Card.Img variant="top" src="/images/woman.jpg" width="100%" />
                  <InputGroup>
                    <input type="file" />
                  </InputGroup>
                </Col>
                <Col lg={6}>
                  <Card.Text>
                    <div className='text-start'>
                      <br />
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>회원번호</InputGroup.Text>
                        <Form.Control value={user_key} disabled="true" />
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>아이디</InputGroup.Text>
                        <Form.Control value={user_uid} name="user_uid" disabled="true" />
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>비밀번호</InputGroup.Text>
                        <Button>비밀번호수정</Button>
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>이름</InputGroup.Text>
                        <Form.Control value={user_uname} name="user_uname" onChange={onChangeForm} />
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>닉네임</InputGroup.Text>
                        <Form.Control value={user_nickname} name="user_nickname" onChange={onChangeForm} />
                        <Button onClick={() => onCheckNickname(user_nickname)} >중복확인</Button>
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>생년월일</InputGroup.Text>
                        <Form.Control value={user_birth} name="user_birth" onChange={onChangeForm} type="date" />
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>성별</InputGroup.Text>
                        <Form.Select onChange={(e) => setGender(parseInt(e.target.value))} value={gender}>
                          <option value="0">남자</option>
                          <option value="1">여자</option>
                        </Form.Select>
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>전화번호</InputGroup.Text>
                        <Form.Control value={user_phone} name="user_phone" onChange={onChangeForm} />
                        
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>이메일</InputGroup.Text>
                        <Form.Control value={user_email} name="user_email" onChange={onChangeForm} />
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>주소</InputGroup.Text>
                        <Form.Control value={user_address1} name="user_address1" onChange={onChangeForm} />
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <Form.Control value={user_address2} name="user_address2" onChange={onChangeForm} />
                        <ModalAddress form={form} setform={setForm} />
                      </InputGroup>
                      <InputGroup className='mb-2'>
                        <InputGroup.Text>권한</InputGroup.Text>
                        <Form.Select onChange={(e) => setAuth(parseInt(e.target.value))} value={auth}>
                          <option value={0}>일반회원</option>
                          <option value={1}>우수회원</option>
                          <option value={500}>블랙리스트</option>
                          <option value={999}>탈퇴회원</option>
                          <option value={100}>관리자</option>
                        </Form.Select>
                      </InputGroup>
                    </div>
                  </Card.Text>
                </Col>
                <Col lg={2}>
                  <FaEdit style={{ fontSize: "40px", cursor: "pointer" }} className='me-4' onClick={() => onClickUpdate(form)} />
                  <GiCancel style={{ fontSize: "40px", cursor: "pointer" }} onClick={onClickReset} />
                </Col>
              </Row>
              <div className='text-end mt-3'>
                <Button className='px-5' onClick={() => onClickDelete(user_key)}>회원영구삭제</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
 }
export default AdminUpdate