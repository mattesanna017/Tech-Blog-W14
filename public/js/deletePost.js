const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.id)
   // if (event.target.hasAttribute('data-id')) 
   console.log()
    const id = event.target.id;

      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
    
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Unable to delete post');
      }
    };
    
    
    const deletePostBtn = document.getElementsByClassName('deleteBtn')
    for(i=0; i<deletePostBtn.length; i++){
      deletePostBtn[i].addEventListener('click', deletePostHandler)
    }