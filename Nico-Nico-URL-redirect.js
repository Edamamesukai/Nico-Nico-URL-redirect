// ==UserScript==
// @name         Nico-Nico-URL-redirect
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  ニコニコのドメインのスマホ版表示を直します
// @author       You
// @match        *://sp.nicovideo.jp/*
// @match        *://sp.seiga.nicovideo.jp/*
// @match        *://dic.nicovideo.jp/t/a/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log("niconico domain auto changer 実行します")
    // 動画プレイヤーがスマホ表示の場合、パソコンに直す
    if (location.href.match("sp.nicovideo.jp")) {
        location.href = location.href.replace("sp.nicovideo.jp", "nicovideo.jp");
    }
    // ニコニコ静画がスマホ表示の場合、パソコンに直す
    else if (location.href.match("sp.seiga.nicovideo.jp")) {
        location.href = location.href.replace("sp.seiga.nicovideo.jp", "seiga.nicovideo.jp").replace("/#!", "");
    }
    // ニコニコ大百科がスマホ表示の場合、パソコンに直す
    else if (location.href.match("dic.nicovideo.jp/t/a")) {
        location.href = location.href.replace("dic.nicovideo.jp/t/a", "dic.nicovideo.jp/a");
    }
})();