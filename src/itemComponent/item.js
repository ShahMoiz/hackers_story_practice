export const Item = ({
        title,
        url,
        author,
        num_comments,
        points
}) => (
    <div>
        <h2>Title: {title}</h2>
        <p>Url: <a href={url}>{url}</a></p>
        <h4>Auther: {author}</h4>
        <p>Comments: {num_comments}</p>
        <p>Points: {points}</p>
    </div>
)