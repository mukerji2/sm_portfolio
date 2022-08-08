import { useParams } from 'react-router-dom';
import Body from '../components/Body';

export default function ItemPage() {
  const { itemname } = useParams();

  return (
    <Body>
      <h1>{itemname}</h1>
      <p>TODO</p>
    </Body>
  );
}