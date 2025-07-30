function generateCard( title, cName, views, duration, monthOld, thumbnail){
    //Function to be complete
    let viewStr 
    if(views<1000000){
        viewStr = views/10000 + "K"
    }
    else if(views > 1000000){
        viewStr = views/1000000 + "M"
    }
    else{
        viewStr = views
    }
     let html =`<div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="image">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthOld} months ago</p>
            </div>
        </div>
    </div> `
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
generateCard("Introduction to HTML | Sigma Web Dev", "Shaurya Gupta", 570000000, "24:40", 8, "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")