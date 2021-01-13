export const Item = ({
        title,
        url,
        author,
        num_comments,
        points,
        onRemoveStory,
        key1
        }) => {
    // const onItemRemoveStory = () => {
    //     console.log("Item Works" )
    // }
    return (
    <div>
        <h2>Title: {title}</h2>
        <p>Url: <a href={url}>{url}</a></p>
        <h4>Auther: {author}</h4>
        <p>Comments: {num_comments}</p>
        <p>Points: {points}</p>
        <button onClick={onRemoveStory.bind(null, key1)}>Remove</button>
    </div>
)}