import { Item } from "../itemComponent/item";
export const List = ({ list }) => 
list.map(({objectId, ...item}) => <Item key={objectId} {...item}/>);
