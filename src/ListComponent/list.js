export const List = () => {
    const list = [
        {
          title: 'React',
          url: 'https://google.com',
          auther: 'Abdul Moiz',
          num_comments: 3,
          points: 4,
          objectId: 0
        },
        {
          title: 'Angular',
          url: 'https://google.com',
          auther: 'Abdul hadi',
          num_comments: 3,
          points: 4,
          objectId: 1
        },
        {
          title: 'Laravel',
          url: 'https://google.com',
          auther: 'Haris',
          num_comments: 3,
          points: 4,
          objectId: 2
        },
      ];

        <div>
            {list.map(list => {
                <div key={list.objectId}>
                <h2>Title: {list.title}</h2>
                <a href={list.url}/>Url: {list.url}
                <h4>Auther: {list.auther}</h4>
                <p>Comments: {list.num_comments}</p>
                <p>Points: {list.points}</p>
                </div>
          })}
        </div>
}