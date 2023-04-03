import React from 'react';
import { Link } from 'react-router-dom';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from './InfoSection.elements';

import { Container, Button } from '../../globalStyles';

// eslint-disable-next-line react/prop-types
const InfoSection = ({ 
  // eslint-disable-next-line react/prop-types
  lightBg, imgStart, lightTopLine, topLine, lightText, lightTextDesc, buttonLabel, description, headline, primary
}) => {
  return (
    <>
      <InfoSec lightBg={ lightBg }>
        <Container>
          <InfoRow imgStart={ imgStart }>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={ lightTopLine }>{ topLine }</TopLine>
                <Heading lightText={ lightText }>{ headline }</Heading>
                <Subtitle lightTextDesc={ lightTextDesc }>{ description }</Subtitle>
                <Link to='sign-up'>
                  <Button big fontBig primary={ primary }>
                    { buttonLabel }
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;