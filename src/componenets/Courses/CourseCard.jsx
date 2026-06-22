
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '@/assets/placeholder.svg'
function CourseCard(props) {
    

    const [addToFav, setAddToFav] = useState(false);

    function toggleFav() {
        setAddToFav(!addToFav); 
    } 
 
  return (
      <Card className="course-card h-100">
        <div className="course-image-wrap">
          <Card.Img variant="top" src={props.course.image ?? placeholder} alt={props.course.title} />
          <span className={props.course.isAvailable ? 'course-badge available' : 'course-badge'}>
            {props.course.isAvailable ? 'Available' : 'Soon'}
          </span>
        </div>
        <Card.Body>
          <Link to={`/courses/${props.course.id}`} className="text-decoration-none text-dark">
            <Card.Title style={{ fontSize: "1rem" }}>{props.course.title}</Card.Title>
          </Link>
          <Card.Text>
            {props.course.body.length > 100 ? props.course.body.substring(0, 100) + "..." : props.course.body}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Duration: {props.course.duration ?? 'Not specified'}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="pt-0">
            <Button
            className="w-100 my-2"
            variant={!addToFav ? 'primary' : 'secondary'}
            onClick={toggleFav}
          >
            {addToFav ? "Added To Favorite" : "Add to Favorites"}
          </Button>

          <Link
            className={props.course.isAvailable ? 'btn btn-outline-primary w-100' : 'btn btn-outline-secondary w-100 disabled'}
            to={props.course.isAvailable ? '/courses/' + props.course.id : '#'}
            aria-disabled={!props.course.isAvailable}
            tabIndex={props.course.isAvailable ? undefined : -1}
          >
            {props.course.isAvailable ? "Start Course" : "Coming Soon"}
          </Link>
        </Card.Body>
      </Card>
  );
}

export default CourseCard;
