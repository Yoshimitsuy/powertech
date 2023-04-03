import React from 'react';
import { InfoSec } from './InfoSection.elements';
import { Container } from '../../globalStyles';

// eslint-disable-next-line react/prop-types
const InfoSection = ({ lightBg }) => {
  return (
    <>
      <InfoSec lightBg={ lightBg }>
        <Container>
          {/* <InfoRow>
            <InfoColumn>
              <TextWrapper></TextWrapper>
            </InfoColumn>
          </InfoRow> */}
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;