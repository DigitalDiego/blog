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
    var blogTitle = '';
    const checkForTitle = () => {
        if(blogTitle == ''){
            blogNameSection.style.display = 'flex'
        };
    };
    // checkForTitle();
    addNameBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if(blogName.value.length < 1)return;
        blogTitle = blogName.value;
        headerTitle.innerHTML = `${blogTitle}`
        blogName.value = '';
        blogNameSection.style.display = 'none';
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
    // Posts
    const posts = document.querySelectorAll('.post');
        body = document.querySelector('body');
    posts.forEach(post => {
        post.addEventListener('click', () => {
            // Section
            const section = document.createElement('div');
            section.classList.add('full-blog-post-section');
            body.appendChild(section);
            // Close Btn
            const closeDiv = document.createElement('div')
            closeDiv.classList.add('close-div');
            section.appendChild(closeDiv);
            // Button
            const closeBtn = document.createElement('button')
            closeBtn.classList.add('close-full-blog-post-section-btn');
            closeDiv.appendChild(closeBtn);
            closeBtn.addEventListener('click', () => {
                section.remove();
            })
            // Icon
            const closeIcon = document.createElement('i')
            closeIcon.classList.add('fas');
            closeIcon.classList.add('fa-times');
            closeBtn.appendChild(closeIcon);
            // Header
            const sectionHeader = document.createElement('header')
            section.appendChild(sectionHeader);
            // Title
            const sectionTitle = document.createElement('h1');
            sectionTitle.innerHTML = post.childNodes[0].childNodes[0].innerHTML;
            sectionHeader.appendChild(sectionTitle);
            // Container
            const sectionContainer = document.createElement('div');
            sectionContainer.classList.add('container');
            section.appendChild(sectionContainer);
            // Text
            const sectionText = document.createElement('p');
            sectionText.innerHTML = post.childNodes[1].childNodes[0].innerHTML;
            sectionContainer.appendChild(sectionText);
            // Date Container
            const sectionDateContainer = document.createElement('div');
            sectionDateContainer.classList.add('date');
            section.append(sectionDateContainer);
            // Date
            const sectionDate = document.createElement('p');
            sectionDate.innerHTML = post.childNodes[2].childNodes[0].innerHTML;
            sectionDateContainer.appendChild(sectionDate);
        })
    })
    // Reset
    postSection.style.display = 'none';
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