import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

export default function Posts() {
    const posts = [
      {
        id: 1,
        text: "Here's a professional thing I did",
        timestamp: '2021-present',
        author: {
          username: 'State of Wisconsin Investment Board',
        },
      },
      {
        id: 3,
        text: "Here's another professional thing",
        timestamp: '2019-2021',
        author: {
          username: 'UW-Madison Dept of Medicine',
        },
      
      },
      {
        id: 2,
        text: "yet another thing",
        timestamp: '2017-2021',
        author: {
          username: 'University of Wisconsin - Madison',
        },
      
      },
    ];

    return (
      <Stack direction="horizontal" className="PostParent">
        {posts.length === 0 ?
              <Container>
                <p>There are no blog posts.</p>
              </Container>              
        :
        posts.map(post => {
          return (
              <Container fluid className="Post" key={post.id}>
                <span className="PostTitle"> <b>{post.author.username}</b></span>
                <br />
                <span className="PostSubtitle"><b>{post.timestamp}</b></span>
                <br />
                <span className="PostText"> {post.text} </span>
              </Container>
              );
            })
        }
      </Stack>     
    );
}