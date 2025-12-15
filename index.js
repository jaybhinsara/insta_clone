const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const header = document.getElementById("header");
const mainSection = document.getElementById("main-section");

header.innerHTML = `
    <img class="logo" src="images/logo.png">
    <img class="user-pic" src="images/user.png">
`
// Render posts
posts.forEach(post => {
    mainSection.innerHTML += `
        <section class="section-1">
            <div class="post-header">
                <img class="profile-pic" src="${post.avatar}" alt="${post.name} avatar">
                <div class="user-info">
                    <h1 class="name">${post.name}</h1>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            <img class="post-img" src="${post.post}" alt="Post by ${post.username}">
            <div class="post-interactions">
                <img class="icon" src="images/icon-heart.png" alt="Like icon">
                <p class="likes"> ${post.likes} </p>
                <img class="icon" src="images/icon-comment.png" alt="Comment icon">
                <img class="icon" src="images/icon-dm.png" alt="Direct message icon">
            </div>
            <div class="post-details">
            <p class="comment"><span class="username">${post.username}</span> ${post.comment}</p>
            </div>
            </section>
    `
})