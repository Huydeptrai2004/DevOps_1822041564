document.addEventListener("DOMContentLoaded", () => {
    const jsStatus = document.getElementById("js-status");
    const loadTime = document.getElementById("load-time");
    const checkBtn = document.getElementById("check-btn");
    const messageBox = document.getElementById("message-box");


    jsStatus.textContent = "Đã kết nối thành công (JS Active)";
    jsStatus.className = "status-ok";
    loadTime.textContent = new Date().toLocaleString("vi-VN");

   
    checkBtn.addEventListener("click", () => {
        const now = new Date().toLocaleTimeString("vi-VN");
        messageBox.textContent = ` File script.js đã hoạt động chính xác! (Kiểm tra lúc: ${now})`;
        messageBox.classList.remove("hidden");
    });
});
