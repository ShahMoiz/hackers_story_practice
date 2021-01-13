import { Item } from "../itemComponent/item";
export const List = ({ list, onRemoveStory }) =>
list.map(({objectId, ...item}) => <Item onRemoveStory={onRemoveStory} key={objectId} key1={objectId} {...item}/>);

