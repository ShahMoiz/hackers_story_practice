import { Item } from "../itemComponent/item";
export const List = ({ list }) => 
{
    return list.map(item => <Item />)
    // <div>
    //     {props.list.map(list =>
    //     (
    //     <div key={list.objectId}>
    //         <h2>Title: {list.title}</h2>
    //         <a href={list.url} />Url: {list.url}
    //         <h4>Auther: {list.auther}</h4>
    //         <p>Comments: {list.num_comments}</p>
    //         <p>Points: {list.points}</p>
    //     </div>
    //     ))
    //     }

    // </div>
}
