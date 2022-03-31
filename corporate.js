const ham=QuerySelector("ham");
const meni=QuerySelector("meni");


ham.addEventListener("click",() => {
    ham.classList.toggle("active");
    meni.classList.toggle("active");
})                                                              /*listner ili liener*/
document.querySelectorAll("meni-linkovi").forEach(n =>n.
    addEventListener("click",()=>{
        ham.classList.remove("active");
        meni.classList.remove("active");
    }))