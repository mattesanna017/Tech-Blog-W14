const addPostHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.parentElement)
    const title = document.querySelector('#projectTitle').value.trim();
    const description = document.querySelector('#projectDescription').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  
  
  document
    .querySelector('.postProject')
    .addEventListener('submit', addPostHandler);
  
  