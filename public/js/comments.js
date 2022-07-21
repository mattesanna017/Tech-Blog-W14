
const addComment = async (event) => {
    const postid= event.target.id
    const comment = document.querySelector('#blogComment').value.trim();
  
  
    
    if (comment) {
      event.preventDefault();
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment: comment, post_id: postid }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.replace(`/post/${postid}`);
      } else {
        alert('Unable to create a post');
      }
    }
  };
  
    document
    .querySelector('.addCommentForm')
    .addEventListener('submit', addComment);
  
  