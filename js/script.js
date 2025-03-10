document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // ป้องกันการโหลดหน้าใหม่

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "1234") { // จำลองข้อมูลล็อกอิน
                alert("เข้าสู่ระบบสำเร็จ!");
                window.location.href = "profile.html"; // เปลี่ยนไปยังหน้าโปรไฟล์
            } else {
                alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // ตรวจสอบว่าหน้าเว็บเป็นหน้าโปรไฟล์
    if (document.getElementById("username-display")) {
        const usernameDisplay = document.getElementById("username-display");
        const storedUsername = localStorage.getItem("username") || "admin";
        usernameDisplay.textContent = storedUsername;
    }

    // ระบบโพสต์ข้อความ
    const postButton = document.getElementById("post-button");
    const postContainer = document.getElementById("posts-container");
    const newPost = document.getElementById("new-post");

    if (postButton) {
        postButton.addEventListener("click", function() {
            if (newPost.value.trim() !== "") {
                const post = document.createElement("div");
                post.classList.add("post");
                post.innerHTML = `<p>${newPost.value}</p><button class='delete-post'>ลบ</button>`;
                postContainer.prepend(post);
                newPost.value = "";

                // ปุ่มลบโพสต์
                post.querySelector(".delete-post").addEventListener("click", function() {
                    post.remove();
                });
            }
        });
    }

    // ระบบออกจากระบบ
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            alert("ออกจากระบบสำเร็จ!");
            window.location.href = "login.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // ตรวจสอบว่าหน้าเว็บเป็นหน้าโปรไฟล์
    if (document.getElementById("username-display")) {
        const usernameDisplay = document.getElementById("username-display");
        const storedUsername = localStorage.getItem("username") || "admin";
        usernameDisplay.textContent = storedUsername;
    }

    // ระบบโพสต์ข้อความ
    const postButton = document.getElementById("post-button");
    const postContainer = document.getElementById("posts-container");
    const newPost = document.getElementById("new-post");

    if (postButton) {
        postButton.addEventListener("click", function() {
            if (newPost.value.trim() !== "") {
                const post = document.createElement("div");
                post.classList.add("post");
                post.innerHTML = `<p>${newPost.value}</p><button class='delete-post'>ลบ</button>`;
                postContainer.prepend(post);
                newPost.value = "";

                // ปุ่มลบโพสต์
                post.querySelector(".delete-post").addEventListener("click", function() {
                    post.remove();
                });
            }
        });
    }

    // ระบบออกจากระบบ
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            alert("ออกจากระบบสำเร็จ!");
            window.location.href = "login.html";
        });
    }

    // ระบบเพิ่มเพื่อน
    const addFriendButton = document.getElementById("add-friend-button");
    const friendNameInput = document.getElementById("friend-name");
    const friendsContainer = document.getElementById("friends-container");

    if (addFriendButton) {
        addFriendButton.addEventListener("click", function() {
            const friendName = friendNameInput.value.trim();
            if (friendName !== "") {
                const friendItem = document.createElement("li");
                friendItem.innerHTML = `${friendName} <button class='remove-friend'>ลบ</button>`;
                friendsContainer.appendChild(friendItem);
                friendNameInput.value = "";

                // ปุ่มลบเพื่อน
                friendItem.querySelector(".remove-friend").addEventListener("click", function() {
                    friendItem.remove();
                });
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // ตรวจสอบว่าหน้าเว็บเป็นหน้าโปรไฟล์
    if (document.getElementById("username-display")) {
        const usernameDisplay = document.getElementById("username-display");
        const storedUsername = localStorage.getItem("username") || "admin";
        usernameDisplay.textContent = storedUsername;
    }

    // ระบบโพสต์ข้อความในโปรไฟล์
    const postButton = document.getElementById("post-button");
    const postContainer = document.getElementById("posts-container");
    const newPost = document.getElementById("new-post");

    if (postButton) {
        postButton.addEventListener("click", function() {
            if (newPost.value.trim() !== "") {
                const post = document.createElement("div");
                post.classList.add("post");
                post.innerHTML = `<p>${newPost.value}</p><button class='delete-post'>ลบ</button>`;
                postContainer.prepend(post);
                newPost.value = "";

                // ปุ่มลบโพสต์
                post.querySelector(".delete-post").addEventListener("click", function() {
                    post.remove();
                });
            }
        });
    }

    // ระบบออกจากระบบ
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            alert("ออกจากระบบสำเร็จ!");
            window.location.href = "login.html";
        });
    }

    // ระบบเพิ่มเพื่อน
    const addFriendButton = document.getElementById("add-friend-button");
    const friendNameInput = document.getElementById("friend-name");
    const friendsContainer = document.getElementById("friends-container");

    if (addFriendButton) {
        addFriendButton.addEventListener("click", function() {
            const friendName = friendNameInput.value.trim();
            if (friendName !== "") {
                const friendItem = document.createElement("li");
                friendItem.innerHTML = `${friendName} <button class='remove-friend'>ลบ</button>`;
                friendsContainer.appendChild(friendItem);
                friendNameInput.value = "";

                // ปุ่มลบเพื่อน
                friendItem.querySelector(".remove-friend").addEventListener("click", function() {
                    friendItem.remove();
                });
            }
        });
    }

    // ระบบโพสต์ในหน้าหลัก
    const submitPostButton = document.getElementById("submit-post");
    const postFeedContainer = document.getElementById("post-container");
    const postContentInput = document.getElementById("post-content");

    if (submitPostButton) {
        submitPostButton.addEventListener("click", function() {
            const content = postContentInput.value.trim();
            if (content !== "") {
                const newPost = document.createElement("div");
                newPost.classList.add("post");
                newPost.innerHTML = `<p>${content}</p><button class='delete-post'>ลบ</button>`;
                postFeedContainer.prepend(newPost);
                postContentInput.value = "";

                // ปุ่มลบโพสต์
                newPost.querySelector(".delete-post").addEventListener("click", function() {
                    newPost.remove();
                });
            }
        });
    }
});
