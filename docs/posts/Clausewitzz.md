---
title: Clausewitzz
date: 2026-10-23
tags:
  - schedule
---
Talk is cheap, show me the renderer
#### Phase1：CG Maths, Modern C++, Algorithms（2026.10.21 ～ 2026.11.15）
**图形数学与光栅化基础（参考 GAMES101）**
[1]几何与变换： 齐次坐标系、MVP 观测与透视投影矩阵推导、罗德里格斯旋转公式（Rodrigues' Rotation Formula）与四元数插值（Slerp） 
[2]光栅化与成像： 三角形边界遍历与判定、重心坐标（Barycentric Coordinates）与透视矫正插值、深度缓冲（Z-Buffer）算法 
[3]经典光照模型： Blinn-Phong 反射模型、着色频率（Flat, Gouraud, Phong）、双线性纹理插值与 Mipmap 链式构建
[4]辐射度量学与离线渲染核心：
[4.1]辐射度量通量体系（Flux, Intensity, Irradiance, Radiance）
[4.2]渲染方程（The Rendering Equation）与微表面 BRDF（Cook-Torrance：NDF/GGX、Smith 几何遮蔽、Fresnel-Schlick）
[4.3]蒙特卡洛数值积分（Monte Carlo Integration）与经典路径追踪（Path Tracing，俄罗斯轮盘赌终结条件）
**REFERENCES:** 计算机图形学数学与基础
GAMES101《现代计算机图形学入门》（闫令琪）：L01~L04（数学变换与投影）、L05~L09（光栅化与着色）、L13~L17（辐射度量学与路径追踪）
GAMES101 全部 Assignment 1~7 核心逻辑推导与代码实现

**Modern C++ 核心内存与并发（参考《Effective Modern C++》）**
[1]内存与资源管理： RAII 机制、三类智能指针实现原理与控制块开销、移动语义（`std::move`）与完美转发（`std::forward`）
[2]底层硬件亲和性： `alignas`/`alignof` 内存对齐、Cache-Line 缓存行命中率与填充（Padding）、面向数据设计（DOD）与结构体数组（SoA vs AoS）
[3]并发原语与内存模型： `std::thread`、互斥锁与条件变量、`std::atomic` 原子操作与 CAS 无锁原语、Acquire/Release 内存序（构建 GPU 屏障同步直觉）
**REFERENCES:** 现代 C++ 内存与系统
《Effective Modern C++》：条款 18~22（智能指针底层原理）、条款 23~30（移动语义、右值引用与完美转发）
《C++并发编程实战（第2版）》：第 4 章（并发操作同步）、第 5 章（C++ 内存模型与原子操作深入）
《C++ Primer》：第12-16章（动态内存与智能指针、拷贝控制、面向对象程序设计、模板与泛型编程）
	❗️10.24
	**动态内存：**[.12.1]shared_ptr类 直接管理内存 shared_ptr和new结合使用 智能指针和异常 unique_ptr weak_ptr [.12.2]new和数组 allocator类 [.12.3]文本查询程序设计 文本查询程序类的定义 
	**拷贝控制：**[.13.1]拷贝构造函数 拷贝赋值运算符 析构函数 三/五法则 使用=default 阻止拷贝 [.13.2]行为像值的类 定义行为像指针的类 [.13.3]交换操作 [.13.4]拷贝控制示例 [.13.5]动态内存管理类 [.13.6]右值引用 移动构造函数和移动赋值运算符 右值引用和成员函数
	❗️10.25
	**操作重载与类型转换：**[.14.2]重载输出运算符 重载输入运算符 [.14.3]相等运算符 关系运算符 [.14.4]赋值运算符 [.14.5]下标运算符 [.14.6]递增和递减运算符 [.14.7]成员访问运算符 [.14.8]lambda是函数对象 标准库定义的函数对象 可调用对象与function [.14.9]类型转换运算符 避免有二义性的类型转换 函数匹配与重载运算符 
	**面向对象程序设计：**[.15.1]OOP概述 [.15.2]定义基类 定义派生类 类型转换与继承 [.15.3]虚函数 [.15.4]抽象基类 [.15.5]访问控制与继承 [.15.6]继承中的类作用域 [.15.7]虚析构函数 合成拷贝控制与继承 派生类的拷贝控制成员 继承的构造函数 [.15.8]编写Basket类 [.15.9]面向对象的解决方案 Query_base类和Query类 派生类 eval函数 
	**模板与泛型编程：**[.16.1]函数模板 类模板 模板参数 成员模板 控制实例化 效率与灵活性 [.16.2]类型转换与模板类型参数 函数模板显式实参 尾置返回类型与类型转换 函数指针和实参推断 模板实参推断和引用 理解std::move 转发 [.16.3]重载与模板 [.16.4]编写可变参数函数模板 包扩展 转发参数包 [.16.5]模板特例化
开源速查：changkun/modern-cpp-tutorial（现代 C++ 语言特性与内存对齐实战）

**LeetCode 算法突破（C++ 实现）**
[1]总量目标： 刷透 LeetCode 核心高频 100 题（手撕 Bug-free 熟练度，不考虑网络流、AC 自动机等竞赛偏门题）
[2]高频专题清单：
链表与双指针（反转链表、LRU 缓存机制、三数之和、滑动窗口最长子串）
二叉树与图论基础（递归与层序遍历、最近公共祖先 LCA、Dijkstra 最短路、拓扑排序）
经典动态规划（0-1 背包、最长递增子序列 LIS、打家劫舍、区间买卖股票）
单调栈与单调队列（下一个更大元素、接雨水、滑动窗口最大值）
**REFERENCES:** 算法突破（C++ 实现）
LeetCode 核心高频题库（重点：双指针、滑动窗口、二叉树遍历、记忆化搜索与动态规划、单调栈）
配套题解：灵茶山艾府核心算法模板与视频解析

#### Phase2：Vulkan PBR Renderer （2026.11.16 ～ 2026.12.31）
**项目一：基于 Vulkan 的轻量级模块化 PBR 渲染引擎**
[1]硬件抽象与显式控制：
[1.1]物理设备选择、队列族（Queue Families）协商、WSI 交换链（Swapchain）多缓冲呈现架构
[1.2]固定管线状态构建、SPIR-V 着色器字节码离线编译与绑定
[2]显存分配与无撕裂多帧同步：
[2.1]集成 VMA（Vulkan Memory Allocator）实现显存子分配与碎片管理
[2.2]顶点/索引数据暂存缓冲（Staging Buffer）机制与显存对齐
[2.3]基于 `VkSemaphore` 与 `VkFence` 的多帧在飞（Frames-in-Flight）显隐同步环路
[3]核心渲染特性落地：
[3.1]延迟着色（Deferred Shading）管线：配置 G-Buffer 附件（Albedo, Normal, Material, Depth）与延迟光照计算子通道（Subpass）
[3.2]基于图像的光照（IBL）：Split-Sum 近似预滤波环境贴图卷积通道与 BRDF 积分查找表（LUT）生成
[3.3]级联阴影贴图（CSM）：视锥体分层切分（View Frustum Splitting）、正交投影紧密包围盒拟合与 PCF 软阴影平滑滤波
[4]轻量级 RenderGraph 架构重构：
[4.1]声明式 Pass 节点与输入/输出物理资源读写依赖追踪
[4.2]自动生成管线屏障（`VkPipelineBarrier`）与图像内存布局自动流转（Image Layout Transitions）
[5]性能度量与排障实战（简历核心亮点）：
[5.1]使用 RenderDoc 抓帧，分析 G-Buffer 内存对齐、像素历史与管线停顿（Pipeline Stall）
[5.2]排查并消除 Vulkan 校验层（Validation Layer）报错，排查内存屏障掩码错误引发的竞争冒险
**REFERENCES:** 现代 Vulkan API 实战
官方指南：vulkan-tutorial.com（从交换链协商到固定管线装配完整流程）
工业级开源参考：SaschaWillems/Vulkan（重点研读：Deferred Shading、Cascaded Shadow Mapping、Vulkan-Hpp 实践）
显存管理库：GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator（VMA 官方快速入门手册）
**REFERENCES:** 实时渲染数学与架构
《Real-Time Rendering 4th (RTR4)》：第 7 章（阴影算法与 CSM 分层拟合）、第 9 章（基于物理的材质与 Cook-Torrance BRDF 分离和近似）
RenderGraph 架构设计参考：国内外技术博客《Render Graphs and Frame Graphs Architecture》（重点理解有向无环图 DAG 资源依赖遍历与屏障折叠）
**REFERENCES:** 性能分析与抓帧调试
工具实战：RenderDoc 官方文档与案例教程（重点掌握 Pipeline State 状态机排查、Mesh Output 顶点调试、Texture Viewer 查看深度分级）

#### Phase3：CUDA 3D Gaussian Splatting Renderer（2027.1.1 ～ 2027.2.15）
**项目二：基于 CUDA 的轻量级 3DGS 实时端侧光栅化渲染器**
*利用云端算力生成资产，在本地 2GB 极低显存设备上实现前沿空间辐射场极限前向推理*
[1]云端资产流水线与解耦：
[1.1]采集多视角图像集，租用 AutoDL RTX 4090 运行 COLMAP 位姿估算与 3DGS 官方训练脚本（单次成本控制在 1 元人民币内）
[1.2]解析生成的 `.ply` 密集高斯点云文件，自建 CPU 内存映射与 GPU 紧凑显存数据结构
[2]手写 CUDA 瓦片光栅化内核（Tile-based Forward Rasterizer）：
[2.1]几何与协方差投影 Kernel：计算三维高斯协方差矩阵经由相机投影雅可比矩阵映射为屏幕二维椭圆协方差
[2.2]瓦片分块（Tile Binning）与键值生成：将屏幕划分为 16x16 瓦片，计算高斯重叠覆盖范围并生成 Tile-ID 与 64 位深度联合键值
[2.3]高性能并行基数排序：调用 CUB 库完成各瓦片内高斯球严格由浅入深（Front-to-back）的极速基数排序（Radix Sort）
[3]片元着色与 Alpha 混合流水线：
[3.1]共享内存（Shared Memory）分块协作加载：同 Warp 线程协同将高斯球属性载入片上 `__shared__` 内存，消除全局显存重复访问带宽
[3.2]前向离散化体渲染积分：根据排序序列执行颜色累积与透射率衰减，完成透明度混合计算
[4]2GB 显存极限调优与压力测试（面试降维打击核武器）：
[4.1]属性半精度量化：将高斯球谐系数（SH）由 FP32 压缩至 FP16，显存占用直降 50%
[4.2]早期光线/瓦片终止（Early-Exit）：当像素累积不透明度饱和（$\alpha > 0.99$）时提前终止循环，消除无用指令吞吐
[4.3]规避 Bank Conflict：重构共享内存填充步长，使用 Nvidia Nsight Graphics 实测消除带宽瓶颈，在 2GB 本地显存设备上稳定达到 60+ FPS
**REFERENCES:** 3DGS 理论与官方实现
SIGGRAPH 2023 最佳论文：Kerbl et al.《3D Gaussian Splatting for Real-Time Radiance Field Rendering》（重点精读：Section 4 瓦片光栅化架构、Section 5 渲染方程推导）
开源实现解构：graphdeco-inria/diff-gaussian-rasterization（重点研读 C++/CUDA 原生 forward.cu 源码）
**REFERENCES:** CUDA 并行计算与极限性能榨取
NVIDIA 官方手册：《CUDA C++ Programming Guide》（重点研读：第 3 章编程模型、第 5 章性能指南：Warp Divergence 与 Shared Memory Bank Conflicts 规避）
并行算法库集成：NVIDIA/cub（重点应用：`cub::DeviceRadixSort` 键值排序）
性能剖析利器：NVIDIA Nsight Graphics 用户指南（重点：GPU Trace 占用率分析与内存带宽吞吐量定位）
**REFERENCES:** 云端算力部署
AutoDL 官方帮助文档：实例租用与环境配置（PyTorch、CUDA Toolkit 与 COLMAP 位姿解算流水线一键部署）


#### Phase4 Rendering Theory & Interview Preparation（2027.2.16 ～ 2027.3.1）
**图形学与着色器八股突击（7 ～ 10 天，补齐技术栈）**
[1]经典图形学八股： 四元数插值（Slerp）与万向节死锁、视锥体平截头体剔除数学推导、延迟着色 vs 前向着色管线开销对比、Early-Z 深度测试与管线阻断、TAA 速度缓冲重投影与历史鬼影抑制
[2]现代架构与前沿演进： GPU 硬件线程束（Warp）分支分化与延迟隐藏机制、NeRF 体渲染方程推导与 Instant-NGP 多分辨率哈希网格思想、3DGS 相比传统隐式神经辐射场的硬件友好性优势
**REFERENCES:** 前沿神经渲染演进视野
经典论文精读：Mildenhall et al.《NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis》（重点：体渲染离散化积分推导）
学术突破对比：Müller et al.《Instant Neural Graphics Primitives with a Multiresolution Hash Encoding》（重点：多分辨率哈希网格与片上访存加速）
**REFERENCES:** 工业级面经速查与总结
课程进阶复习：GAMES202《高质量实时渲染》（实时阴影 PCSS 与 IBL 预滤波理论）
大厂高频题库：牛客网“图形学面经”与“游戏引擎研发面经”高频总结（重点攻坚：Vulkan 显存屏障同步、GPU 硬件调度架构、C++ 内存模型）

**简历定稿＆投递（2月下旬开启）**
[1]简历一页纸：
教育背景：哈工大（C9）计算机相关专业本科生
专业技能：Modern C++ (17/20)、Vulkan 显式图形 API、CUDA 编程与 GPU 架构优化、计算机图形学（PBR / CSM / 3DGS）
核心项目：
1.《基于 CUDA 的轻量级 3DGS 实时端侧光栅化渲染器（2GB 显存极限优化）》
2.《基于 Vulkan 的轻量级模块化 PBR 渲染引擎（集成轻量 RenderGraph）》
技术成果：附带 60FPS 实机运行演示视频链接（B站/YouTube）与 GitHub 完整开源工程
算法水平：LeetCode 经典高频题手撕 Bug-free，熟悉线性代数、空间几何与树结构
[2]目标阵地精准覆盖：
米哈游（逆熵工作室 / 核心技术中台 / 图形研发实习生 - AI引擎）
腾讯（IEG 互动娱乐事业群：天美/光子技术中心渲染引擎开发）
库洛游戏（引擎研发部 / 游戏技术美术工程师 - 程序向）
大疆创新（智能平台与物理传感器仿真平台研发）
网易（雷火伏羲实验室 / 互娱战魂自研引擎组）
硬件与智驾中坚：英伟达中国（GPU 驱动 / DevTech）、华为（车 BU 仿真 / 2012 实验室）、理想汽车（自动驾驶仿真引擎）
#### Statistics
---

达成所有目标（手撕代码 Bug-free、无校验层报错、跑满 60FPS 并有严密的性能度量），总计需要 **650 ～ 750 小时** 

| Phase                                       | Task                    | Milestone                                               | Learn Cost | Debug Cost | Total          |
| :------------------------------------------ | :---------------------- | :------------------------------------------------------ | :--------- | :--------- | :------------- |
| **阶段一**<br>数理与 C++<br>*(10月中~11月中)*         | **GAMES101 全套推导**       | 视锥投影推导、光栅化重心插值、A7 路径追踪与 BVH 实现                          | 45h        | 20h        | **65h**        |
|                                             | **现代 C++ 与并发**          | 智能指针实现、移动语义、原子操作与 Acquire/Release 内存序实操                 | 35h        | 15h        | **50h**        |
|                                             | **LeetCode 高频 100 题**   | 灵茶山模板复现、手撕 Bug-free（单调栈、DP、图论等）                         | 65h        | 20h        | **85h**        |
| **阶段二**<br>项目一：Vulkan PBR<br>*(11月中~12月下旬)* | **硬件抽象与显存多帧同步**         | Swapchain、Pipeline、VMA 集成、`VkFence`/`VkSemaphore` 多帧在飞  | 40h        | 25h        | **65h**        |
|                                             | **核心渲染特性落地**            | 延迟着色 G-Buffer + Subpass、IBL 环境贴图卷积与 LUT、CSM 分层阴影拟合与 PCF | 55h        | 35h        | **90h**        |
|                                             | **RenderGraph 架构重构**    | DAG 依赖遍历、管线屏障与图像布局流转自动生成                                | 30h        | 20h        | **50h**        |
|                                             | **RenderDoc 分析与性能排障**   | 消除校验层报错、抓帧性能分析、工程结构整理                                   | 10h        | 10h        | **20h**        |
| **阶段三**<br>项目二：CUDA 3DGS<br>*(1月中~2月中，寒假)*  | **资产管线与数据解析**           | AutoDL 训练、PLY 二进制格式 CPU/GPU 内存映射设计                      | 15h        | 10h        | **25h**        |
|                                             | **瓦片光栅化 Kernel 手写**     | 3D 协方差雅可比投影、16x16 瓦片分块、CUB 并行基数排序                       | 35h        | 25h        | **60h**        |
|                                             | **片元着色与 Alpha 混合**      | Warp 协同加载共享内存、离散体渲染积分、Early-Exit                        | 30h        | 20h        | **50h**        |
|                                             | **2GB 极限调优与 Nsight 实测** | FP16 精度压缩、Bank Conflict 消除、Nsight Graphics 抓帧           | 20h        | 15h        | **35h**        |
| **阶段四**<br>八股与春招出猎<br>*(2月下旬~3月)*           | **图形八股与前沿论文总结**         | NeRF / Instant-NGP / 3DGS 理论对比、GPU 硬件体系常识               | 35h        | —          | **35h**        |
|                                             | **简历定稿、录屏与投递**          | 录制 60FPS 实机视频、写 README、投递跟踪与复盘                          | 30h        | 5h         | **35h**        |
| **合计总工时**                                   | —                       | —                                                       | **445h**   | **220h**   | **665 ～ 750h** |
