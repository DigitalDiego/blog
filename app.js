const headerTitle = document.getElementById('header-title');
    postSectionBtn = document.getElementById('post-section-btn');
    postList = document.getElementById('post-list');
    postSection = document.getElementById('post-section');
    postTitle = document.getElementById('post-title');
    postText = document.getElementById('post-text');
    addPostBtn = document.getElementById('add-post-btn')
    closePostSectionBtn = document.getElementById('close-post-section-btn');
    closeNameSectionHeader = document.getElementById('close-name-section-header')
    blogNameSection = document.getElementById('blog-name-section');
    blogName = document.getElementById('blog-name');
    addNameBtn = document.getElementById('add-name-btn');
    closeNameSectionBtn = document.getElementById('close-name-section-btn');
const body = document.querySelector('body');
addNameBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(blogName.value.length < 1)return;
    headerTitle.innerHTML = blogName.value;
    titleOfTheBlog = blogName.value;
    blogNameSection.remove();
    localStorage.setItem("blog", headerTitle.innerHTML);
});
headerTitle.addEventListener('click', () => {
    blogNameSection.style.display = 'flex';
    closeNameSectionHeader.style.display = 'flex'; 
});
closeNameSectionBtn.addEventListener('click', () => {
    blogNameSection.style.display = 'none'
})
const addPost = (event) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    event.preventDefault();
    if(postTitle.value.length < 1 || postText.value.length < 1)return;
    // Container
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    postList.appendChild(postContainer);
    // Header
    const postHeader = document.createElement('header');
    postHeader.classList.add("post-header");
    postContainer.appendChild(postHeader)
    // Title
    const title = document.createElement('h1');
    title.classList.add('post-title');
    title.innerHTML = postTitle.value;
    postHeader.appendChild(title);
    // Post Content
    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    postContainer.appendChild(postContent);
    // Text
    const text = document.createElement('p');
    text.classList.add('post-text');
    text.innerHTML = postText.value;
    postContent.appendChild(text);
    // Post Date Container
    const postDateContainer = document.createElement('div');
    postDateContainer.classList.add('post-date');
    postContainer.appendChild(postDateContainer);
    // Post Date
    const postDate = document.createElement('p');
    postDate.innerHTML = `${month}-${day}-${year}`;
    postDateContainer.appendChild(postDate);
    // Icon
    const deletePostBtn = document.createElement('i');
    deletePostBtn.classList.add('fas')
    deletePostBtn.classList.add('fa-times')
    deletePostBtn.classList.add('delete-post-btn')
    deletePostBtn.setAttribute('id', 'delete-post-btn');
    postContainer.appendChild(deletePostBtn);
    // Delete Post Container
    const deletePostBtns = document.querySelectorAll('.delete-post-btn');
    deletePostBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.remove();
        })
    })
    // Reset
    postSection.style.display = 'none';
    postTitle.value = '';
    postText.value = '';
    localStorage.setItem("item", postList.innerHTML);
}
postSectionBtn.addEventListener('click', () => {
    postSection.style.display = 'flex'
})
closePostSectionBtn.addEventListener('click', () => {
    postSection.style.display = 'none';
})
addPostBtn.addEventListener('click', addPost);
const blog = localStorage.getItem("blog");
const item = localStorage.getItem("item");
if(item) {
    postList.innerHTML = item;
}
if(blog){
    headerTitle.innerHTML = blog;
}