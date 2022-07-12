import React, { useState } from 'react';
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from 'reactstrap';
import '../css/style.css';
const items = [
  {
    src: 'https://static.ybox.vn/2022/6/5/1656068633597-1240%20x%20522.gif',
    altText: 'Cuoc thi 1',
    caption: 'Slide 1',
  },
  {
    src: 'https://static.ybox.vn/2022/6/5/1656068633597-1240%20x%20522.gif',
    altText: 'Cuoc thi 2',
    caption: 'Slide 2',
  },
  {
    src: 'https://static.ybox.vn/2022/6/5/1656068633597-1240%20x%20522.gif',
    altText: 'Cuoc thi 3',
    caption: 'Slide 3',
  },
];

export default function CompetitionPublicHeader() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItemData = items.map((item, value) => {
    return (
      <CarouselItem key={`carouse-${value}`} onExited={() => setAnimating(false)} onExiting={() => setAnimating(true)}>
        <img src={item.src} alt={item.altText} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </CarouselItem>
    );
  });

  return (
    <>
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: '600px',
          backgroundImage: 'url("' + require('assets/img/theme/public-competition1.png').default + '")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <span className="mask bg-gradient-info opacity-4" />

        <Container fluid className="mt-6">
          <Row className="justify-content-center">
            <Col lg="10" md="10" className="text-center mt-4">
              <CarouselControl directionText="Previous" direction="prev" onClickHandler={previous} style={{ position: 'relative' }} />
              <Carousel previous={previous} next={next} activeIndex={activeIndex}>
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={(newIndex) => {
                    if (animating) return;
                    setActiveIndex(newIndex);
                  }}
                />
                {carouselItemData}
              </Carousel>
              <CarouselControl directionText="Next" direction="next" onClickHandler={next} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
