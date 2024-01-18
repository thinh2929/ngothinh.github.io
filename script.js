//element
let bg1 = document.querySelector(".bg1")
let bg2 = document.querySelector(".bg2")
let html = document.querySelector("html")
let membrane = document.querySelector(".membrane")
let information = document.querySelector(".information")
let inforClose = document.querySelector(".infor_close")
//list
let avatar = document.querySelectorAll(".avatar")
let infor = document.querySelectorAll(".infor")
//variable
let index1 = 0;
let index2 = 0;
const avatarElement = Array.from(avatar)
const inforElement = Array.from(infor)
let isNotPocessing = true
let currentAvar;
//array
const thinhInfor = ["Ngô Anh Thịnh", "Mèo thơm", "16", "https://wa-magazine.com/wp-content/uploads/2023/05/cake-884x600.jpeg", "https://file.hstatic.net/200000536009/collection/pc_gaming_core_i7_a89473a0ce934d868844387097dca141.jpg", "🟦", "https://i.pinimg.com/564x/ef/cd/44/efcd4465c1f704d9d1e2114e427a4454.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png", "Facebook của Thịnh", "Instagram của Thịnh"]
const lanhInfor = ["Lý Xuân Lành", "Viên sỏi", "16", "https://giadinh.mediacdn.vn/2019/5/27/photo-8-15589280775541846741123.jpg", "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/06/Sach-hay.jpg", "🔵", "https://kenh14cdn.com/203336854389633024/2022/5/20/photo-1-16530604782761816326924.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png", "Facebook của Lành", "Instagram của Lành"]
//default set
bg1.style.left = '0px'
bg2.style.left = '1920px'
//function
const parseMethod = function (s)
{
    return Number(s.replace(/px$/, ''));
};

const bgMethod = (bg1, bg2) => {
    delay = 10;
    let i = 1;
    let count1 = 1;
    let count2 = 1;
    firstCount = 1;
    let loop = 1;

    setInterval(() => {
        bg2.style.left = `${parseMethod(bg2.style.left) - i}px`
        bg1.style.left = `${parseMethod(bg1.style.left) - i}px`

        count2++
        
        if (loop == 1) {
            firstCount++
            if(firstCount >= 1920) {
                bg1.style.left = '1920px'
                loop++
            }
        } else {
            if (count1 >= 1920*2) {
                bg1.style.left = '1920px'
                count1 = 0
            }
            count1++
        }
        

        if (count2 >= 1920*2) {
            bg2.style.left = '1920px'
            count2 = 0
        }
    }, delay)
}

//event 

avatarElement.map((avar) => {
    avar.onmouseover = function() {
        membrane.style["backgroundColor"] = 'rgba(0, 0, 0, 0.5)'
        information.style.display = 'flex'

        if(avar.classList.contains('thinh') && isNotPocessing) {
            avar.style.border = '15px solid rgb(255, 0, 170)'
            currentAvar = avar
            inforElement.map((infor,index) => {
                if (infor.tagName == 'SPAN') {
                    infor.innerHTML = `${thinhInfor[index]}`
                } else if (infor.tagName == 'IMG') {
                    infor.src = `${thinhInfor[index]}`
                } else if (infor.tagName == 'A') {
                    if (index === 8) {
                        infor.href = 'https://www.facebook.com/thinh.ngoanh'
                    } else {
                        infor.href = 'https://www.instagram.com/anhthinh3010/?next=%2F'
                    }
                    infor.innerHTML = `${thinhInfor[index]}`
                }
            })
        }
        if(avar.classList.contains('lanh') && isNotPocessing) {
            avar.style.border = '15px solid rgb(255, 0, 170)'
            currentAvar = avar
            inforElement.map((infor,index) => {
                if (infor.tagName == 'SPAN') {
                    infor.innerHTML = `${lanhInfor[index]}`
                } else if (infor.tagName == 'IMG') {
                    infor.src = `${lanhInfor[index]}`
                } else if (infor.tagName == 'A') {
                    if (index === 8) {
                        infor.href = 'https://www.facebook.com/lanh.xuan.75248'
                    } else {
                        infor.href = 'https://www.instagram.com/w_eathie/?next=%2F'
                    }
                    infor.innerHTML = `${lanhInfor[index]}`
                }
            })
        }
        isNotPocessing = false
    }
})

inforClose.onclick = function() {
    membrane.style["backgroundColor"] = 'rgba(0, 0, 0, 0)'
    information.style.display = 'none'
    isNotPocessing = true
    currentAvar.style.border = '5px solid black'
}

//main
bgMethod(bg1,bg2)