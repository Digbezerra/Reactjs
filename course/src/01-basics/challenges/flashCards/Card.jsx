export const Card = ({ questionsData, selected }) => {
  const { question, answer } = questionsData;
  return (
    <>
      <p>{selected ? answer : question}</p>
    </>
  );
};
