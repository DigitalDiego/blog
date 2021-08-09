const headerTitle = document.getElementById('header-title');
    postSectionBtn = document.getElementById('post-section-btn');
    postList = document.getElementById('post-list');
    deletePostBtn = document.getElementById('delete-post-btn');
    postDate = document.getElementById('post-date');
    postSection = document.getElementById('post-section');
    postTitle = document.getElementById('post-title');
    postText = document.getElementById('post-text');
    addPostBtn = document.getElementById('add-post-btn')
    closePostSectionBtn = document.getElementById('close-post-section-btn');
    blogNameSection = document.getElementById('blog-name-section');
    blogName = document.getElementById('blog-name');
    addNameBtn = document.getElementById('add-name-btn');
var blogTitle = '';
const checkForTitle = () => {
        if(blogTitle == ''){
            blogNameSection.style.display = 'flex'
        };
};
checkForTitle();
addNameBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(blogName.value.length < 1)return;
    blogTitle = blogName.value;
    headerTitle.innerHTML = `${blogTitle}`
    blogName.value = '';
    blogNameSection.style.display = 'none';
});
headerTitle.addEventListener('click', () => {
    addNameSection.style.display = 'flex';
});
const postTemplate = (data) => {
    postList.insertAdjacentHTML('beforeend', `
        <div class="post">
            <header class='post-header'>
                <h1 class='post-title'>
                    ${data.title}
                </h1>
            </header>
            <div class="post-content">
                <p class='post-text'>
                    ${data.text}
                </p>
            </div>
            <div class="post-date">
                <p id='post-date'>
                    ${data.date}
                </p>
            </div>
            <div class="delete-post-btn" id="delete-post-btn">
                <i class="fas fa-times"></i>
            </div>                
        </div>
    `)
}
const addPost = (event) => {
    event.preventDefault();
    if(postTitle.value.length || postText.value.length < 1)return;
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    const data = {
        title:`${postTitle.value}`,
        text:`${postText.value}`,
        date:`${month}-${day}-${year}`
    }
    postTemplate(data);
    postTitle.value = '';
    postText.value = '';
}
postSectionBtn.addEventListener('click', () => {
    postSection.style.display = 'flex'
})
closePostSectionBtn.addEventListener('click', () => {
    postSection.style.display = 'none';
})
addPostBtn.addEventListener('click', addPost);