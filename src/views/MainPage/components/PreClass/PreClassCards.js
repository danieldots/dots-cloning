import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PreClassCards() {
  return (
    <div>
        <div>
        관심이 모이면 수업이 열려요!
        </div>
        <div>
        원하는 수업이 열릴 수 있게 버튼을 눌러보세요!
        </div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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

export default PreClassCards;