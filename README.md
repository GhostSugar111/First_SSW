

![image-20230307143052127](image-20230307143052127.png)
示例 http://121.42.165.52/lawyer/lawyer
![image-20230307143012131](image-20230307143012131.png)

1. 布局 三个框 三个按钮

   List 左右两个框 用props.list来动态加载css（位置 函数

   ResultList 结果框 

   Btn 上下按钮 ok按钮

   ok按钮点击后结果才显示

   

2. 按钮事件

   同一父组件下两个相同子组件更改状态不及时渲染
   解决：在同一子组件下同时渲染两个子组件

   

   双击 单击选中显示红色 双击移动

   ​	单击 clickKey记录当前点击item的key 判断i和clickKey是否相同变红色
   ​	点击函数参数 i:下标 判断clickKey==i移动 
   ​	

   左移 右移

   解决：

   ![image-20230308124033279](image-20230308124033279.png)
   
   ok输出

​	父传子 getItems 处理完子传父items



