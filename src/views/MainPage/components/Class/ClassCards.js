import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ClassCards() {
  return (
    <div>
      <div>
        지금 바로 신청하세요!
      </div>
      <div>
        함께 배울 친구들이 기다리고 있어요
      </div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("/Users/danielkim/Desktop/dots-cloning/src/assets/svg/sampleImg.svg").default} />
        <Card.Body>
          <Card.Text>
            ITㆍ코딩
          </Card.Text>
          <Card.Title>마인크래프트 코딩 - 나만의 점령전 게임 개발하기</Card.Title>
          <Card.Text>
            나만의 마인크래프트 점령전 게임 만들기
          </Card.Text>
          <Card.Text>
            12주 과정ㆍ07월 08일부터 수강 가능
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup.Item>170개</ListGroup.Item>
        </Card.Body>
      </Card>
    </div>

  );
}

export default ClassCards;