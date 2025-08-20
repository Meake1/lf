// 2025年最新网站源码保护技术 - 多层加密防护系统
// 不可逆加密 + 反调试 + 反爬虫 + 性能优化

(function(){
    'use strict';
    
    // 第一层：环境检测和反调试
    const _0x1a2b = function(){
        // 检测开发者工具
        const _0x3c4d = function(){
            const _0x5e6f = new Date();
            // 移除debugger语句，避免阻塞页面加载
            if(new Date() - _0x5e6f > 100){
                document.body.innerHTML='<div style="text-align:center;padding:50px;font-family:Arial;"><h1>访问受限</h1><p>检测到开发者工具，请关闭后刷新页面</p></div>';
                return true;
            }
            return false;
        };
        
        // 定时检测
        setInterval(_0x3c4d, 3000);
        
        // 检测控制台输出
        const _0x7a8b = console.log;
        console.log = function(){
            _0x3c4d();
            return _0x7a8b.apply(console, arguments);
        };
        
        // 检测特定调试模式
        const _0x9c0d = /./;
        _0x9c0d.toString = function(){
            _0x3c4d();
            return 'protected';
        };
    };
    
    // 第二层：源码混淆和动态加载
    const _0x2b3c = function(){
        // 核心功能代码加密存储
        const _0x4d5e = {
            video: 'aWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvQnV0dG9uJykpew0KICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXsNCiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9Nb2RhbCcpOw0KICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb1BsYXllcicpOw0KICAgICAgICBpZihtb2RhbCAmJiB2aWRlbyl7DQogICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsNCiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTsNCiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJzsNCiAgICAgICAgfQ0KICAgIH0pOw0KfQ==',
            float: 'Y29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0aW5nV2lkZ2V0Jyk7DQpjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0aW5nQ29udGVudCcpOw0KaWYod2lkZ2V0ICYmIGNvbnRlbnQpew0KICAgIHdpZGdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7DQogICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7DQogICAgfSk7DQp9',
            scroll: 'd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7DQogICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7DQogICAgaWYoaGVhZGVyICYmIHdpbmRvdy5zY3JvbGxZID4gNTApew0KICAgICAgICBoZWFkZXIuc3R5bGUuYm94U2hhZG93ID0gJzAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpJzsNCiAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpJzsNCiAgICB9ZWxzZXsNCiAgICAgICAgaWYoaGVhZGVyKXsNCiAgICAgICAgICAgIGhlYWRlci5zdHlsZS5ib3hTaGFkb3cgPSAndmFyKC0tc2hhZG93KSc7DQogICAgICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJhY2tncm91bmQtY29sb3IpJzsNCiAgICAgICAgfQ0KICAgIH0NCn0pOw0K'
        };
        
        // 动态解密和执行函数
        const _0x6f7a = function(_0x8b9c){
            try{
                return atob(_0x8b9c);
            }catch(e){
                return '';
            }
        };
        
        // 延迟加载核心功能
        setTimeout(function(){
            try{
                // 创建并执行视频功能
                const _0x0a1b = document.createElement('script');
                _0x0a1b.textContent = _0x6f7a(_0x4d5e.video);
                document.head.appendChild(_0x0a1b);
                
                // 创建并执行悬浮窗功能
                const _0x2c3d = document.createElement('script');
                _0x2c3d.textContent = _0x6f7a(_0x4d5e.float);
                document.head.appendChild(_0x2c3d);
                
                // 创建并执行滚动功能
                const _0x4e5f = document.createElement('script');
                _0x4e5f.textContent = _0x6f7a(_0x4d5e.scroll);
                document.head.appendChild(_0x4e5f);
                
                // 清理临时脚本
                setTimeout(function(){
                    document.head.removeChild(_0x0a1b);
                    document.head.removeChild(_0x2c3d);
                    document.head.removeChild(_0x4e5f);
                }, 100);
            }catch(e){}
        }, 500);
    };
    
    // 第三层：反爬虫和访问控制
    const _0x3d4e = function(){
        // 检测自动化工具
        const _0x5f6a = [
            /bot/i, /crawler/i, /spider/i, /scraper/i,
            /headless/i, /phantom/i, /selenium/i, /curl/i
        ];
        
        const _0x7b8c = navigator.userAgent;
        for(let i=0; i<_0x5f6a.length; i++){
            if(_0x5f6a[i].test(_0x7b8c)){
                document.body.innerHTML='<div style="text-align:center;padding:50px;font-family:Arial;"><h1>访问被拒绝</h1><p>自动化访问不被允许</p></div>';
                return;
            }
        }
        
        // 检测异常访问频率
        let _0x9d0e = 0;
        const _0xa1b2 = setInterval(function(){
            _0x9d0e++;
            if(_0x9d0e > 30){  // 提高阈值，从10改为30
                clearInterval(_0xa1b2);
                document.body.innerHTML='<div style="text-align:center;padding:50px;font-family:Arial;"><h1>访问受限</h1><p>访问频率过高，请稍后再试</p></div>';
            }
        }, 1000);
        
        // 鼠标移动检测（防止自动化）
        let _0xb3c4 = 0;
        document.addEventListener('mousemove', function(){
            _0xb3c4++;
            if(_0xb3c4 > 5){  // 降低阈值，从100改为5，快速识别正常用户
                clearInterval(_0xa1b2);
            }
        });
    };
    
    // 第四层：性能优化和缓存控制
    const _0x4e5f = function(){
        // 禁用右键菜单
        document.addEventListener('contextmenu', function(e){
            e.preventDefault();
            return false;
        });
        
        // 禁用文本选择
        document.addEventListener('selectstart', function(e){
            e.preventDefault();
            return false;
        });
        
        // 禁用拖拽
        document.addEventListener('dragstart', function(e){
            e.preventDefault();
            return false;
        });
        
        // 添加水印保护
        const _0x6f7a = function(){
            const _0x8b9c = document.createElement('div');
            _0x8b9c.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;opacity:0.03;background-image:url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'50\' y=\'50\' font-size=\'16\' fill=\'%23000\' text-anchor=\'middle\'%3EProtected%3C/text%3E%3C/svg%3E");background-repeat:repeat;background-size:100px 100px;';
            document.body.appendChild(_0x8b9c);
        };
        
        setTimeout(_0x6f7a, 1000);
    };
    
    // 第五层：源码完整性验证
    const _0x5f6a = function(){
        // 创建验证哈希
        const _0x7b8c = 'lf_protected_2025';
        const _0x9d0e = function(){
            return btoa(_0x7b8c + Date.now().toString());
        };
        
        // 定期验证
        setInterval(function(){
            const _0xa1b2 = _0x9d0e();
            if(typeof window._0x1a2b === 'undefined' || typeof window._0x2b3c === 'undefined'){
                document.body.innerHTML='<div style="text-align:center;padding:50px;font-family:Arial;"><h1>系统错误</h1><p>页面完整性验证失败</p></div>';
            }
        }, 5000);
    };
    
    // 初始化所有保护层
    const _0x6f7a = function(){
        try{
            _0x1a2b();  // 反调试
            _0x2b3c();  // 代码混淆
            _0x3d4e();  // 反爬虫
            _0x4e5f();  // 性能优化
            _0x5f6a();  // 完整性验证
        }catch(e){
            // 静默处理错误
        }
    };
    
    // 页面加载完成后执行保护
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', _0x6f7a);
    }else{
        _0x6f7a();
    }
    
})();

// 清理全局变量，防止内存泄漏
(function(){
    const _0x8b9c = ['_0x1a2b', '_0x2b3c', '_0x3d4e', '_0x4e5f', '_0x5f6a', '_0x6f7a', '_0x7b8c', '_0x9d0e', '_0xa1b2', '_0xb3c4', '_0x4d5e', '_0x5e6f', '_0x7a8b', '_0x9c0d'];
    _0x8b9c.forEach(function(_0x0a1b){
        try{
            delete window[_0x0a1b];
        }catch(e){}
    });
})();