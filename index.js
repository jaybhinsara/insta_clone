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
header.innerHTML = `
    <img class="logo" src="images/logo.png">
    <img class="user-pic" src="images/user.png">
`;



//const postSection = document.getElementById("post-section");
//
//function renderPosts() {
//    let postHTML = "";
//    posts.forEach(function(post) {
//        postHTML += `
//        <section class="section-1">
//            <div class="post-header">
//                <img class="avatar" src="${post.avatar}" alt="avatar of ${post.name}">
//                <div class="post-user-info">
//                    <p class="post-name"><strong>${post.name}</strong></p>
//                    <p class="post-location">${post.location}</p>
//                </div>
// //           </div>
  //          <div class="post-content">
 //               <img class="post-img" src="${post.post}" alt="post by ${post.username}">
//                <div class="post-interactions">
  //                  <img class="icon" src="images/icon-heart.png" alt="like icon">
 //                   <img class="icon" src="images/icon-comment.png" alt="comment icon">
  //                  <img class="icon" src="images/icon-dm.png" alt="share icon">
 //               </div>
//                <div class="post-likes">
 //                   <p>Liked by <strong>artlover99</strong> and <strong>others 55</strong></p>
 //               </div>
 //               <div class="post-caption">
//                   <p><strong>${post.username}</strong> ${post.comment}</p>
//                </div>
//            </div>
//        </section>
//        `;
//    });
//    postSection.innerHTML = postHTML;
//}
//
//renderPosts();      

