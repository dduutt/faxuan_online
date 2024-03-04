// ==UserScript==
// @name         法宣助手
// @namespace    http://tampermonkey.net/
// @version      20240304
// @description  进入视频学习页面点击完成学习快速完成法宣在线视频学习
// @author       github.com/dduutt
// @match        http://www.faxuanyun.com/bps/courseware/t/*
// @require      https://cdn.jsdelivr.net/gh/dduutt/faxuan_online@master/course.js


// ==/UserScript==
(function() {
    'use strict';

    // 监听页面改变
    const observer = new MutationObserver(add_button);
    observer.observe(document.getElementById('ware_num'), {
        childList: true, // 观察子元素的添加和删除
    });
})();

function add_button(){
    // 在 psVideo 右上角新增按钮
    const psVideo = document.getElementById('psVideo');
    if (!psVideo) return;
    const btn = document.getElementById('learn_button');
    if(!!btn)return;
    const button = document.createElement('button');
    button.id = "learn_button"
    button.innerHTML = '开始学习';
    button.style.position = 'absolute';
    button.style.top = '0';
    button.style.right = '0';
    button.style.padding = '5px 10px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    psVideo.appendChild(button);
    button.addEventListener('click',learn);
}

function learn(t){
    const url = 'https://cdn.jsdelivr.net/gh/dduutt/faxuan_online/learn_course.js'
    t.target.disabled = true;
    t.target.innerHTML = '学习中';
    kill_course();
    setTimeout(()=>{
        t.target.disabled = true;
        t.target.innerHTML = '开始学习';
    },3000)
}
