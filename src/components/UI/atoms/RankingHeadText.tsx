import styled from "styled-components";

const RankingHeadTexts = styled.th<{text : string }>`
  padding: 1.2rem 2rem 1.2rem 1rem;
  text-align : ${(props : any) => props.text === 'Profile' ? 'center' : 'left'}
`;


const RankingHeadInnerText = styled.span`
  font-size: 1.15em;
`;

const RankingHeadText: React.FC<{ text: string }> = (props) => {
  return (
    <>
      <RankingHeadTexts text={props.text}>
        <RankingHeadInnerText>
          {props.text}
        </RankingHeadInnerText>
      </RankingHeadTexts>
    </>
  );
};

export default RankingHeadText;
