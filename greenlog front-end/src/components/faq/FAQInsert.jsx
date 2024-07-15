import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, InputGroup, FormControl, Spinner } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const FAQInsert = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const uid = sessionStorage.getItem("uid");
  const [form, setForm] = useState({
    faq_question: '',
    faq_answer: '',
    faq_category: '',
    faq_writer: uid
  });

  const { faq_question, faq_answer, faq_category } = form;

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onChangeCKEditor = (event, editor) => {
    let data = editor.getData();
    data = data.replace(/<\/?p>/g, '');  // <p> 태그를 제거
    setForm({ ...form, faq_answer: data });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (faq_question === "") {
      alert("질문을 입력하세요!");
      return;
    }
    if (faq_category === "") {
      alert("카테고리를 선택하세요!");
      return;
    }
    if (!window.confirm("FAQ를 등록하실래요?")) return;
    setLoading(true);
  
    const updateForm = { ...form };
    try {
      const response = await axios.post("/faq/insert", updateForm);
      setLoading(false);
  
      if (response.status === 200) {
        alert('FAQ가 등록되었습니다.');
        navigate(`/community/faq/list.json`);
      } else {
        alert('FAQ 등록에 실패했습니다.');
      }
    } catch (error) {
      setLoading(false);
      console.error('There was an error inserting the FAQ!', error);
      alert('FAQ 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h1 className="text-center my-5">FAQ 등록</h1>
      <Form onSubmit={onSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            as="select"
            name="faq_category"
            value={faq_category}
            onChange={onChangeForm}
            style={{ maxWidth: '150px', marginRight: '10px' }}>
            <option value="">카테고리를 선택하세요</option>
            <option value="회원">회원</option>
            <option value="포인트">포인트</option>
            <option value="참여방법">참여방법</option>
          </FormControl>
          <FormControl
            type="text"
            name="faq_question"
            placeholder="질문을 입력하세요"
            value={faq_question}
            onChange={onChangeForm}
          />
        </InputGroup>
        <Form.Group controlId="faq_answer">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="faq_answer"
            value={faq_answer}
            onChange={onChangeForm}
          />
        </Form.Group>
        <Button type="submit" className="mt-3" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : '등록'}
        </Button>
      </Form>
    </div>
  );
};

export default FAQInsert;
