import Carousel from 'react-bootstrap/Carousel';
import ban1 from '..//../Images/ban1.jpeg'
import ban2 from '..//../Images/ban2.jpeg'
import ban3 from '..//../Images/ban3.jpeg'
import card1 from '..//../Images/card1.jpg'
import card2 from '..//../Images/card2.jpg'
import card3 from '..//../Images/card3.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home=()=>{
    return(
        <>

<Carousel fade>
      <Carousel.Item>
       <img src={ban1} width={"100%"} height={500}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2} width={"100%"} height={500}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3} width={"100%"} height={500}/>
      </Carousel.Item>
    </Carousel>


    <div id='content'>
        <div id='headcont'>
    <h3>What We Do</h3>
    <h5>Since 1994, STS of NYS has been supplying top-notch temporary staff, including CDL drivers, warehouse selectors, forklift operators, assembly line workers, and more...</h5>
    </div>

<div id='cardwrap'>
<h1 style={{fontStyle: 'italic'}}>We are Hiring </h1>
    <div id='card'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Software Engineer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>HR</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Project Manager</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    </div>
    </div>
    </div>

    <div id='footcont'>
  <h3 style={{fontStyle:"italic"}}>Why Choose us?</h3>
  <p>"Success is not just about being the best in what you do; it's about consistently delivering excellence 
    and reliability, just as STS of NYS has done in the staffing industry for decades."</p>
<p>
What differentiates us from other labor supply firms is our exceptional ability to assess 
staffing needs properly—whether planned in advance or required on an emergency basis. We 
pride ourselves on deploying personnel who are perfectly suited to meet specific requirements.</p>
​<p>
Our nationwide reputation is built on a robust network of skilled temporary labor. The STS of NYS 
team is not only professional and experienced but has also consistently enabled our clients to enhance
 production, even during challenging circumstances. Trust STS of NYS for all your staffing needs</p>
    </div>
        </>
    )
}
export default Home