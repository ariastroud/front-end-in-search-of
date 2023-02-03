import axios from "axios";
import { useParams, useOutletContext } from "react-router-dom";

const getItemApi = async (id) => {
  const response = await axios.get(`http://127.0.0.1:5000/items/${id}`);
  return response.data;
};

const Item = () => {
  const { id } = useParams();
  // console.log(id);
  const item = getItemApi(id);
  console.log(item);
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default Item;
