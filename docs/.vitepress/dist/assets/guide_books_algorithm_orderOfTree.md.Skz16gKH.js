import{_ as s,c as a,o as n,V as p}from"./chunks/framework.RLOxJhMo.js";const m=JSON.parse('{"title":"1. 二叉树的遍历","description":"","frontmatter":{},"headers":[],"relativePath":"guide/books/algorithm/orderOfTree.md","filePath":"guide/books/algorithm/orderOfTree.md","lastUpdated":1706771168000}'),l={name:"guide/books/algorithm/orderOfTree.md"},e=p(`<h1 id="_1-二叉树的遍历" tabindex="-1">1. 二叉树的遍历 <a class="header-anchor" href="#_1-二叉树的遍历" aria-label="Permalink to &quot;1. 二叉树的遍历&quot;">​</a></h1><h3 id="_1-1-定义" tabindex="-1">1.1 定义 <a class="header-anchor" href="#_1-1-定义" aria-label="Permalink to &quot;1.1 定义&quot;">​</a></h3><p>从根节点出发，按照某种次序访问二叉树中的所有结点，<strong>使得每个结点被访问1次 且 只被访问1次</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /**</span></span>
<span class="line"><span>     * 设置结点结构</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public static class TreeNode&lt;T&gt; {</span></span>
<span class="line"><span>        T val; // 二叉树的结点数据</span></span>
<span class="line"><span>        TreeNode&lt;T&gt; leftNode; // 二叉树的左子树（左孩子）</span></span>
<span class="line"><span>        TreeNode&lt;T&gt; rightNode; // 二叉树的右子树（右孩子）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public TreeNode(T data,TreeNode&lt;T&gt; left,TreeNode&lt;T&gt; right) {</span></span>
<span class="line"><span>            this.val = data;</span></span>
<span class="line"><span>            this.leftNode = left;</span></span>
<span class="line"><span>            this.rightNode = right;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获得 &amp; 设置二叉树的结点数据</span></span>
<span class="line"><span>        public T getData(){</span></span>
<span class="line"><span>            return val;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void setData(T data){</span></span>
<span class="line"><span>            this.val = data;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获得 &amp; 设置二叉树的左子树（左孩子）</span></span>
<span class="line"><span>        public TreeNode getLeftNode(){</span></span>
<span class="line"><span>            return leftNode;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public void setLeftNode(TreeNode leftNode){</span></span>
<span class="line"><span>            this.leftNode = leftNode;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获得 &amp; 设置二叉树的右子树（右孩子）</span></span>
<span class="line"><span>        public TreeNode getRightNode(){</span></span>
<span class="line"><span>            return rightNode;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        public void setRightNode(TreeNode rightNode){</span></span>
<span class="line"><span>            this.rightNode = rightNode;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="_1-2-遍历方式" tabindex="-1">1.2 遍历方式 <a class="header-anchor" href="#_1-2-遍历方式" aria-label="Permalink to &quot;1.2 遍历方式&quot;">​</a></h3><p>二叉树的遍历方式包括：</p><ol><li>前序遍历（深度优先遍历）</li><li>中序遍历</li><li>后序遍历</li><li>层序遍历（广度优先遍历）</li></ol><h3 id="_1-3-遍历实现" tabindex="-1">1.3 遍历实现 <a class="header-anchor" href="#_1-3-遍历实现" aria-label="Permalink to &quot;1.3 遍历实现&quot;">​</a></h3><p>遍历的实现方式分为：递归 &amp; 非递归方式，下面会详细说明</p><h4 id="_5-3-1-前序遍历" tabindex="-1">5.3.1 前序遍历 <a class="header-anchor" href="#_5-3-1-前序遍历" aria-label="Permalink to &quot;5.3.1 前序遍历&quot;">​</a></h4><blockquote><p>也称 深度优先遍历</p></blockquote><ul><li>简介</li></ul><p><img src="http://upload-images.jianshu.io/upload_images/944365-2bf8d1ab11baf4b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>递归实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   /**</span></span>
<span class="line"><span>     * 内容：前序遍历</span></span>
<span class="line"><span>     * 方式：递归</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>     public void preOrder(Node root){</span></span>
<span class="line"><span>        // 1. 判断二叉树结点是否为空；若是，则返回空操作</span></span>
<span class="line"><span>        if(root ==null)</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2. 访问根节点（显示根结点）</span></span>
<span class="line"><span>        printNode(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. 遍历左子树</span></span>
<span class="line"><span>        preOrder(root.getLeftNode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 4. 遍历右子树</span></span>
<span class="line"><span>        preOrder(root.getRightNode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/944365-db63e1408c1a6076.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>非递归实现 主要采用 <strong>栈实现</strong><img src="http://upload-images.jianshu.io/upload_images/944365-49f7049bde393775.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="流程图"></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  * 方式：非递归（栈实现）</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>    public static void preOrder_stack(Node root){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Stack&lt;Node&gt; stack = new Stack&lt;Node&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 步骤1：直到当前结点为空 &amp; 栈空时，循环结束</span></span>
<span class="line"><span>        while(root != null || stack.size()&gt;0){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 步骤2：判断当前结点是否为空</span></span>
<span class="line"><span>              // a. 若不为空，执行3</span></span>
<span class="line"><span>              // b. 若为空，执行5</span></span>
<span class="line"><span>              if(root != null){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 步骤3：输出当前节点，并将其入栈</span></span>
<span class="line"><span>                printNode(root);</span></span>
<span class="line"><span>                stack.push(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 步骤4：置当前结点的左孩子为当前节点</span></span>
<span class="line"><span>                // 返回步骤1</span></span>
<span class="line"><span>                root = root.getLeftNode();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 步骤5：出栈栈顶结点</span></span>
<span class="line"><span>                root = stack.pop();</span></span>
<span class="line"><span>                // 步骤6：置当前结点的右孩子为当前节点</span></span>
<span class="line"><span>                root = root.getRightNode();</span></span>
<span class="line"><span>                  // 返回步骤1</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/944365-a28eeb8885892f10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><h3 id="_5-3-2-中序遍历" tabindex="-1">5.3.2 中序遍历 <a class="header-anchor" href="#_5-3-2-中序遍历" aria-label="Permalink to &quot;5.3.2 中序遍历&quot;">​</a></h3><ul><li>简介</li></ul><p><img src="http://upload-images.jianshu.io/upload_images/944365-df8d5d51c48e1550.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>递归实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  * 方式：递归</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>    public void InOrder(Node root){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        // 1. 判断二叉树结点是否为空；若是，则返回空操作</span></span>
<span class="line"><span>        if(root ==null)</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2. 遍历左子树</span></span>
<span class="line"><span>        InOrder(root.getLeftNode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. 访问根节点（显示根结点）</span></span>
<span class="line"><span>        printNode(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 4. 遍历右子树</span></span>
<span class="line"><span>        InOrder(root.getRightNode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/944365-592fd0f95418775b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>非递归实现 主要采用 <strong>栈实现</strong></li></ul><p><img src="http://upload-images.jianshu.io/upload_images/944365-856e1aadb737c5c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="流程图"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  * 方式：非递归（栈实现）</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>    public static void InOrder_stack(Node root){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Stack&lt;Node&gt; stack = new Stack&lt;Node&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. 直到当前结点为空 &amp; 栈空时，循环结束</span></span>
<span class="line"><span>        while(root != null || stack.size()&gt;0){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 2. 判断当前结点是否为空</span></span>
<span class="line"><span>            // a. 若不为空，执行3、4</span></span>
<span class="line"><span>            // b. 若为空，执行5、6</span></span>
<span class="line"><span>            if(root != null){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 3. 入栈当前结点</span></span>
<span class="line"><span>                stack.push(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 4. 置当前结点的左孩子为当前节点</span></span>
<span class="line"><span>                // 返回步骤1</span></span>
<span class="line"><span>                root = root.getLeftNode();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 5. 出栈栈顶结点</span></span>
<span class="line"><span>                root = stack.pop();</span></span>
<span class="line"><span>                // 6. 输出当前节点</span></span>
<span class="line"><span>                printNode(root);</span></span>
<span class="line"><span>                // 7. 置当前结点的右孩子为当前节点</span></span>
<span class="line"><span>                root = root.getRightNode();</span></span>
<span class="line"><span>                // 返回步骤1</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span></code></pre></div><h3 id="_5-3-3-后序遍历" tabindex="-1">5.3.3 后序遍历 <a class="header-anchor" href="#_5-3-3-后序遍历" aria-label="Permalink to &quot;5.3.3 后序遍历&quot;">​</a></h3><ul><li>简介</li></ul><p><img src="http://upload-images.jianshu.io/upload_images/944365-249e3012e0ecd6ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>递归实现</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  * 方式：递归</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>    public void PostOrder(Node root){</span></span>
<span class="line"><span>        // 1. 判断二叉树结点是否为空；若是，则返回空操作</span></span>
<span class="line"><span>        if(root ==null)</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 2. 遍历左子树</span></span>
<span class="line"><span>        PostOrder(root.getLeftNode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. 遍历右子树</span></span>
<span class="line"><span>        PostOrder(root.getRightNode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 4. 访问根节点（显示根结点）</span></span>
<span class="line"><span>        printNode(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/944365-04a3de87309efd6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>非递归实现 主要采用 <strong>栈实现</strong></li></ul><p><img src="http://upload-images.jianshu.io/upload_images/944365-2d6066ec739bbfa6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  * 方式：非递归（栈实现）</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>    public void PostOrder_stack(Node root){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Stack&lt;Node&gt; stack = new Stack&lt;Node&gt;();</span></span>
<span class="line"><span>        Stack&lt;Node&gt; output = new Stack&lt;Node&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 步骤1：直到当前结点为空 &amp; 栈空时，循环结束——&gt; 步骤8</span></span>
<span class="line"><span>        while(root != null || stack.size()&gt;0){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 步骤2：判断当前结点是否为空</span></span>
<span class="line"><span>            // a. 若不为空，执行3、4</span></span>
<span class="line"><span>            // b. 若为空，执行5、6</span></span>
<span class="line"><span>            if(root != null){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 步骤3：入栈当前结点到中间栈</span></span>
<span class="line"><span>                output.push(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 步骤4：入栈当前结点到普通栈</span></span>
<span class="line"><span>                stack.push(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 步骤4：置当前结点的右孩子为当前节点</span></span>
<span class="line"><span>                // 返回步骤1</span></span>
<span class="line"><span>                root = root.getRightNode();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            }else{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                // 步骤5：出栈栈顶结点</span></span>
<span class="line"><span>                root = stack.pop();</span></span>
<span class="line"><span>                // 步骤6：置当前结点的右孩子为当前节点</span></span>
<span class="line"><span>                root = root.getLeftNode();</span></span>
<span class="line"><span>                // 返回步骤1</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 步骤8：输出中间栈的结点</span></span>
<span class="line"><span>        while(output.size()&gt;0){</span></span>
<span class="line"><span>            printNode(output.pop());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/944365-c957297154bb49e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><h3 id="_5-3-4-层序遍历" tabindex="-1">5.3.4 层序遍历 <a class="header-anchor" href="#_5-3-4-层序遍历" aria-label="Permalink to &quot;5.3.4 层序遍历&quot;">​</a></h3><ul><li>简介</li></ul><p><img src="http://upload-images.jianshu.io/upload_images/944365-5bdec8fd331d72a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>实现思路 非递归实现，采用 <strong>队列</strong></li></ul><p><img src="https://upload-images.jianshu.io/upload_images/944365-89a809f26a4fa5fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><ul><li>算法流程图 <img src="http://upload-images.jianshu.io/upload_images/944365-11c138468a4286db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>  * 方式：非递归（采用队列）</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>    public void levelTravel(Node root){</span></span>
<span class="line"><span>        // 创建队列</span></span>
<span class="line"><span>        Queue&lt;Node&gt; q=new LinkedList&lt;Node&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1. 判断当前结点是否为空；若是，则返回空操作</span></span>
<span class="line"><span>        if(root==null)</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        // 2. 入队当前结点</span></span>
<span class="line"><span>        q.add(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 3. 判断当前队列是否为空，若为空则跳出循环</span></span>
<span class="line"><span>        while(!q.isEmpty()){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 4. 出队队首元素</span></span>
<span class="line"><span>            root =  q.poll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 5. 输出 出队元素</span></span>
<span class="line"><span>            printNode(root);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 6. 若出队元素有左孩子，则入队其左孩子</span></span>
<span class="line"><span>            if(root.getLeftNode()!=null) q.add(root.getLeftNode());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 7. 若出队元素有右孩子，则入队其右孩子</span></span>
<span class="line"><span>            if(root.getRightNode()!=null) q.add(root.getRightNode());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p><img src="http://upload-images.jianshu.io/upload_images/944365-51b486e6bf39ef1c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p><h3 id="_5-4-遍历方式总结" tabindex="-1">5.4 遍历方式总结 <a class="header-anchor" href="#_5-4-遍历方式总结" aria-label="Permalink to &quot;5.4 遍历方式总结&quot;">​</a></h3><p><img src="http://upload-images.jianshu.io/upload_images/944365-76ff9f5a98585715.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="示意图"></p>`,48),i=[e];function t(o,c,r,d,g,u){return n(),a("div",null,i)}const b=s(l,[["render",t]]);export{m as __pageData,b as default};
