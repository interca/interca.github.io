<style>
    .contact-info {
        display: flex; /* 使用 Flexbox 布局 */
        justify-content: center; /* 让内容水平居中 */
    }
    .contact-info span {
        margin-right: 10px; /* 添加一些间距，使得元素之间有一定的间隔 */
    }
</style>

<center>
    <h1>黄裕甲</h1>
    <div class="contact-info">
        <span>
            <img src="./assets/phone-solid.svg" width="18px">
            13538026482
        </span>
        <span>
            <img src="./assets/envelope-solid.svg" width="18px">
            <a href="1634340724@qq.com">1634340724@qq.com</a>
        </span>
        <span>
            <img src="./assets/github-brands.svg" width="18px">
            <a href="https://github.com/interca">hongshen</a>
        </span>
        <span>
            <img src="./assets/rss-solid.svg" width="18px">
            <a href="#">博客</a>
        </span>
    </div>
</center>


## <img src="./assets/info-circle-solid.svg" width="30px"> 个人信息 

 - 男，2002 年出生
 - 求职意向：后端开发工程师

## <img src="./assets/graduation-cap-solid.svg" width="30px"> 教育经历

- 学士，东莞理工学院，软件工程专业，2021.9~2025.6

## <img src="./assets/briefcase-solid.svg" width="30px"> 工作经历

### 1、快手

### 时间
2024年3.8-至今

### 职位
java开发工程师

### 负责业务
参与aigc数字人直播平台研发和维护

### 2、小黑盒
### 时间
2023年12.3-2024.3.4
### 职位
后端开发实习生
### 介绍  
小黑盒是一款为Steam游戏玩家定制，集新闻资讯、游戏资料库、玩家社区、战绩查询为一体的App，注册人数超过4000万，日活超过300万。
### 实习工作
主要负责用户推荐、社区内容的开发、App推送等。
- 帖子推荐: 新增爬坡topic召回和爬坡ItemCf召回，有效提高了用户点击率。
- 重构小黑盒App推送: 改变直接从数据库获取热帖，改为从推荐池获取热帖，再送入模型中计算，将计算后用户和贴子存入HDFS, 再异步读取HDFS，发往Kafka进行消费。将推送流程拆分，减少了耦合，提高了系统的稳定性，同时实现了根据用户特征值精准推送。
- 完善用户特征值计算: 将用户绑定Switch等第三方平台行为加入到用户的特征值，并且用户同一行为采取时间衰减的计算方式，有效提高用户特征值计算的准确率。
- gc优化: 针对老版本推送go服务的内存突然飙升，通过追踪内存分配情况，采用池化技术和定时手动触发GC的方式，将运行内存从18G降为9G。
- 游戏图鉴查询: 针对大部分游戏人物和英雄固定且数量较少的情况，采用内存缓存，定时将数据加载到内存，取代
- Redis缓存，接口平均访问速度从300ms降为46ms，有效提高系统的访问速度和稳定性。
推送缓存查询: 使用BitMap对推送过的帖子进行缓存，有效减少Redis的内存使用。

## <img src="./assets/project-diagram-solid.svg" width="30px"> 项目经历

### 莞青君

### 项目介绍 
莞青君是一款服务于学校讲座，提供抢票、验票、查询历史讲座等功能的小程序，使用人数超1w，多次承受超2000人同时抢票。
### 项目地址：https://github.com/DGUT-GuanQing/GQ-BackEnd
采用技术 ： SpringBoot、SpringCloud、SpringSecurity、Nacos、Feign、Redis、RabbitMQ、MinIO、MySQL。
### 功能实现：
- 使用JWT和SpringSecurity实现用户登陆和权限校验，保证系统的安全性。
- 使用CAS协议对接学校系统，实现用户中央认证登录。
- 结合Redis和Lua脚本实现抢票，通过RabbitMQ实现数据异步处理，显著提高系统处理速度。
针对mq发送失败和消费失败，采取重试机制，超过重试次数的将失败记录持久化，后期对用户采取补偿措施，使抢票服务的可用性达到百分之百。
- 用令牌桶算法进行接口限流，有效支持高达两千用户同时进行抢票，显著提升了系统稳定性和抗压能力。
- 使用Redis缓存热点数据，如当前讲座和用户信息，有效减轻数据库负担。在qps3000的场景下，系统能稳定运行。
- 在真实抢票环境中，面对2000多人抢票，cpu负载率始终低于百分之50，并且服务仍然能够快速响应查询。
- 负责后端整体架构设计，包括数据库设计、功能开发及项目部署。

## <img src="./assets/tools-solid.svg" width="30px"> 技能清单

- Java、spring框架
- redis、mysql、kafka、mongodb等中间件
- python、go相关框架