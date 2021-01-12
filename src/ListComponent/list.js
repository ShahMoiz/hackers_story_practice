import { Item } from "../itemComponent/item";
export const List = ({ list }) => 
list.map(({objectID, ...item}) => <Item key={objectID} {...item}/>);
