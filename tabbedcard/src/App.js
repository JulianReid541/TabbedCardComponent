import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const transition = css`
  transition: transform: 0.45s;
`;

const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 240px;
`;

const Row = styled.div`
  display: flex;
  position: relative;
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 33.33%;
  height: 4px;
  background: #6b44a9;
  transform: translateXX(${p => p.active === 0 ? 0 : p.active * 100}%);
  ${transition};
`;

const Button = styled.button`
  flex: 1 1 33.33%;

  border-bottom: 1px solid ${rgba("white", 0.25)};

  color: ${p => rgba("white", p.active ? 0.85 : 0.25)};
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  transform: translateX(${p => p.active === 0 ? 0 : `-${p.active * 300}px`});
  ${transition};
`;

const Tab = styled.div`
  width: 300px;
`;

const tabs =  ["Vibrant", "Pretty"];

const Tabs = ({active, setActive}) => (
  <Row>
    <Underline active={active} />
    {tabs.map((tab, index) => (
      <Button active={active === index} onClick={() => setActive(index)}
      >
        {tab}
      </Button>
    ))}
  </Row>
);

const TabbedCard = () => {
  const [active, setActive] = useState(0);

  return (
    <Card>
      <Tabs active={active} setActive={setActive} />
      <Content active={active}>
        {tabs.map((tab) => (<Tab>{tab}</Tab>
        ))}
      </Content>
    </Card>
  );
};

export default TabbedCard;