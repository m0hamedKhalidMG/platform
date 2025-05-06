// src/pages/Surveys.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import surveys from '../data/surveys';

const SurveysContainer = styled.div`
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
`;
const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: #2c3e50;
`;
const SurveyCard = styled(motion.div)`
  background: #f9f9f9;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;
const SurveyTitle = styled.h3`
  color: #c39e6f;
  font-size: 1.75rem;
  margin-bottom: 20px;
  text-align: center;
`;
const SurveyForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;
const QuestionGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const SurveyLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;
const SurveyInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
`;
const SubmitButton = styled(motion.button)`
  background: #c39e6f;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  width: fit-content;
  margin-top: 10px;
  cursor: pointer;
`;

function Surveys() {
  const [responses, setResponses] = useState({});
  const handleChange = (surveyId, idx, value) => {
    setResponses((prev) => ({
      ...prev,
      [surveyId]: { ...prev[surveyId], [idx]: value },
    }));
  };
  const handleSubmit = (e, surveyId) => {
    e.preventDefault();
    console.log('Responses:', responses[surveyId]);
    alert('تم إرسال الاستبانة بنجاح!');
  };

  return (
    <SurveysContainer>
      <Heading
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        الاستبانات
      </Heading>
      {surveys.map((survey, i) => (
        <SurveyCard
          key={survey.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <SurveyTitle>{survey.title}</SurveyTitle>
          <SurveyForm onSubmit={(e) => handleSubmit(e, survey.id)}>
            {survey.questions.map((q, idx) => (
              <QuestionGroup key={idx}>
                <SurveyLabel>{`${idx + 1}. ${q}`}</SurveyLabel>
                <SurveyInput
                  type="text"
                  placeholder="اكتب إجابتك هنا..."
                  onChange={(e) => handleChange(survey.id, idx, e.target.value)}
                />
              </QuestionGroup>
            ))}
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              إرسال
            </SubmitButton>
          </SurveyForm>
        </SurveyCard>
      ))}
    </SurveysContainer>
  );
}
export default Surveys;
