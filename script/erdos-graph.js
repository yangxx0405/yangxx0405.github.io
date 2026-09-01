// 1. 数据定义 (包含所有节点和连线)
const graph = {
    nodes: [
        { id: "Erdos", name: "Paul Erdös", erdosNumber: 0 },
        { id: "Alon", name: "Noga Alon", erdosNumber: 1 },
        { id: "Aronov", name: "Boris Aronov", erdosNumber: 1 },
        { id: "Luczak", name: "Tomasz Łuczak", erdosNumber: 1 },
        { id: "Moran", name: "Shlomo Moran", erdosNumber: 1 },
        { id: "Pollack", name: "Richard M. Pollack", erdosNumber: 1 },
        { id: "Tetali", name: "Prasad Tetali", erdosNumber: 1 },
        { id: "Valtr", name: "Pavel Valtr", erdosNumber: 1 },
        { id: "Yao", name: "Frances Foong Yao", erdosNumber: 1 },
        { id: "Bhore", name: "Sujoy Bhore", erdosNumber: 2 },
        { id: "Suri", name: "Subhash Suri", erdosNumber: 2 },
        { id: "Vigoda", name: "Eric Vigoda", erdosNumber: 2 },
        { id: "You", name: "Me", erdosNumber: 3 },
    ],
    links: [
        {
            source: "Erdos", target: "Aronov",
            papers:
                "BORIS ARONOVL, PAUL ERDÖS, Wayne Goddard, and Daniel J. Kleitman, Michael Klugerman, János Pach, and Leonard J. Schulman. <br>\
              <b> Crossing Families. </b> <br>\
              In <i> Proceedings of the seventh annual symposium on Computational geometry (SCG 1991). </i>"

        },
        {
            source: "Erdos", target: "Alon",
            papers:
                "NOGA ALON and PAUL ERDÖS. <br>\
              <b> An Application of Graph Theory to Additive Number Theory. </b> <br>\
              <i> European J. Combin. 6.3 (1985): 201-203. </i>"
        },
        {
            source: "Erdos", target: "Pollack",
            papers:
                "PAUL ERDÖS, János Pach, Ronald Graham, RICHARD M. POLLACK, and Zsolt Tuza. <br>\
              <b> Radius, Diameter, and Minimum Degree. </b> <br>\
              <i> J. Combin. Theory, Series B 47.1 (1989): 73-79. </i>"
        },
        {
          source: "Erdos", target: "Valtr",
          papers:
            "PAUL ERDÖS, Zsolt Tuza, and PAVEL VALTR. <br>\
              <b> Ramsey-remainder. </b> <br>\
              <i> European J. Combin. 17.6 (1996): 519-532. </i>"
        },
        {
            source: "Erdos", target: "Yao",
            papers:
                "Fan Chung, PAUL ERDÖS, Ronald Graham, and FRANCES FOONG YAO. <br>\
              <b> Minimal Decompositions of Two Graphs into Pairwise Isomorphic Subgraphs. </b> <br>\
              In <i> Proceedings of 10th Southeastern International Conference on Combinatorics, Graph Theory and Computing (SEICCGTC 1979). </i>"
        },
        {
            source: "Erdos", target: "Moran",
            papers:
                "PAUL ERDÖS, Nathan Linial, and SHOLMO MORAN. <br>\
              <b> Extremal Problems on Permutations Under Cyclic Equivalence. </b> <br>\
              <i> Discrete Math. 64.1 (1987): 1-11. </i>"
        },
        {
            source: "Erdos", target: "Luczak",
            papers:
                "PAUL ERDÖS, TOMASZ ŁUCZAK, and Joel H. Spencer. <br>\
              <b> Subgraphs of Large Minimal Degree. </b> <br>\
              In <i> Random Graphs, Vol. 2 (1992): 59-66. </i>"
        },
        {
            source: "Erdos", target: "Tetali",
            papers:
                "PAUL ERDÖS and PRASAD TETALI. <br>\
              <b> Representations of Integers as the Sum of $k$ Terms. </b> <br>\
              <i> Random Structures & Algorithms 1.3 (1990): 245-261. </i>"
        },
        {
            source: "Alon", target: "Suri",
            papers:
                "Pankaj K. Agarwal, NOGA ALON, Boris Aronov, and SUBHASH SURI. <br>\
              <b> Can Visibility Graphs be Represented Compactly? </b> <br>\
              In <i> Proceedings of the ninth annual symposium on Computational geometry (SCG 1993). </i>" },
        {
            source: "Pollack", target: "Suri",
            papers:
                "William J. Lenhart, RICHARD M. POLLACK, Jörg-Rüdiger Sack, Raimund Seidel, Micha Sharir, SUBHASH SURI, Godfried T. Toussaint, Sue Whitesides, and Chee-Keng Yap. <br>\
              <b> Computing the Link Center of a Simple Polygon. </b> <br>\
              In <i> Proceedings of the third annual symposium on Computational geometry (SCG 1987). </i>" },
        {
            source: "Aronov", target: "Suri",
            papers:
                "Pankaj K. Agarwal, BORIS ARONOV, Micha Sharir, and SUBHASH SURI. <br>\
              <b> Selecting Distances in the Plane. </b> <br>\
              In <i> Proceedings of the sixth annual symposium on Computational geometry (SCG 1990). </i>"
        },
        {
            source: "Yao", target: "Suri",
            papers:
                "Clyde L. Monma, Mike Paterson, SUBHASH SURI, and FRANCES FOONG YAO. <br>\
              <b> Computing Euclidean Maximum Spanning Trees. </b> <br>\
              In <i> Proceedings of the fourth annual symposium on Computational geometry (SCG 1988). </i>"
        },
        {
            source: "Moran", target: "Suri",
            papers:
                "Alok Aggarwal, SHOLMO MORAN, Peter W. Shor, and SUBHASH SURI. <br>\
              <b> Computing the Minimum Visible Vertex Distance Between Two Polygons: Preliminar Version. </b> <br>\
              In <i> Algorithms and Data Structures: Workshop (WADS 1989). </i>"
        },
        {
          source: "Valtr", target: "Bhore",
          papers:
            "Martin Balko, SUJOY BHORE, Leonardo Martínez Sandoval, and PAVEL VALTR. <br>\
              <b> On Erdős–Szekeres-type problems for $k$-convex point sets. </b> <br>\
              In <i> International Workshop on Combinatorial Algorithms (IWOCA 2019). </i>"
        },
        {
          source: "Luczak", target: "Vigoda",
          papers:
            "TOMASZ ŁUCZAK and ERIC VIGODA. <br>\
              <b> Torpid Mixing of the Wang–Swendsen–Kotecký Algorithm for Sampling Colorings. </b> <br>\
              <i> J. Discrete Algorithms 3.1 (2005): 92-100. </i>"
        },
        {
          source: "Tetali", target: "Vigoda",
          papers:
            "Christian Borgs, Jennifer T. Chayes, Alan Frieze, Jeong Han Kim, PRASAD TETALI, ERIC VIGODA, and Van Ha Vu. <br>\
              <b> Torpid Mixing of Some Monte Carlo Markov Chain Algorithms in Statistical Physics. </b> <br>\
              In <i> Proceedings of the 40th Annual IEEE Symposium on Foundations of Computer Science (FOCS 1999): 218-229. </i>"
        },
        {
          source: "Bhore", target: "You",
          papers:
            "SUJOY BHORE, Subhash Suri, Jie Xue, XIONGXIN YANG, and Jiumu Zhu. <br>\
              <b> Near-Optimal Dynamic Data Structures for Maximum Depth and Klee’s Measure of Boxes. </b> <br>\
              <i> Preprint. </i>"
        },
        {
          source: "Vigoda", target: "You",
          papers:
            "Xiaoyu Chen, ERIC VIGODA, and XIONGXIN YANG. <br>\
              <b> Faster FPRAS for the Permanent via Restricted Poincaré Inequalities and Coupled Flows. </b> <br>\
              <i> arXiv:2608.26599 (2026). </i>"
        },
        {
            source: "Suri", target: "You", papers:
                "SUBHASH SURI, Jie Xue, XIONGXIN YANG, and Jiumu Zhu. <br>\
              <b> Dynamic Maximum Depth of Geometric Objects. </b> <br>\
              In <i> International Symposium on Computational Geometry (SoCG 2025). </i>" },
    ],
};

// 2. 设置画布大小
const width = 800;
const height = 720; // 为新增路径留出足够的垂直空间

const svg = d3
    .select("#erdosgraph")
    .append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("display", "block")
    .style("margin", "0 auto");

// 3. 核心：静态位置计算 (Static Layout Calculation)
const xSpacing = 200; // 层级横向间距
const erdosGroup = d3.group(graph.nodes, d => d.erdosNumber);

// 建立 ID 到 节点对象 的映射，方便后面连线使用
const nodeById = new Map();

erdosGroup.forEach((nodes, erdosNumber) => {
    const layerCount = nodes.length;
    // 垂直间距 80，居中显示
    const layerHeight = (layerCount - 1) * 80;
    const startY = (height - layerHeight) / 2;

    nodes.forEach((node, index) => {
        // 计算并固定坐标
        node.x = width - (erdosNumber * xSpacing + 100);
        node.y = startY + index * 80;

        // 存入 Map
        nodeById.set(node.id, node);
    });
});

// 4. 解析连线关系 (把 source: "Erdos" 变成 source: nodeObject)
// 以前 d3.forceSimulation 会自动做这一步，现在我们要手动做
graph.links.forEach(link => {
    link.source = nodeById.get(link.source);
    link.target = nodeById.get(link.target);
});


// 5. 绘图 (一次性绘制，无动画)

let lastClickedLink = null;

// 绘制连线
const link = svg
    .selectAll(".link")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", d => d.source.x) // 直接使用计算好的坐标
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y)
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .attr("stroke-width", 3)
    .style("cursor", "pointer")
    .on("click", function (event, d) {
        // 1. 更新 HTML 内容
        const infoBox = d3.select("#edge-info");
        infoBox.html(
            `<p>The first co-authored paper of ${d.source.name} and ${d.target.name}: </p> ${d.papers} `
        );

        // 2. 🔴 关键一步：告诉 MathJax 重新渲染 infoBox 里的内容
        if (window.MathJax && window.MathJax.typesetPromise) {
            // 获取原生 DOM 元素
            const element = document.querySelector("#edge-info");
            // 让 MathJax 渲染这个元素
            window.MathJax.typesetPromise([element]).catch((err) => console.log(err));
        }

        // 3. 恢复上一次点击的边颜色
        if (lastClickedLink) {
            d3.select(lastClickedLink).style("stroke", "#999");
        }

        // 4. 变更当前点击的边颜色
        d3.select(this).style("stroke", "tomato");
        lastClickedLink = this;
    });

// 绘制节点圆圈
const node = svg
    .selectAll(".node")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("cx", d => d.x) // 直接使用计算好的坐标
    .attr("cy", d => d.y)
    .attr("r", 15)
    .attr("fill", d => {
        switch (d.erdosNumber) {
            case 0: return "#FFD700";
            case 1: return "#1f77b4";
            case 2: return "#ff7f0e";
            default: return "#2ca02c";
        }
    })
    .attr("stroke", "#fff")
    .attr("stroke-width", 2);
// 注意：这里删除了 .call(d3.drag()...) 因为静态图不需要拖拽

// 绘制文字标签
const label = svg
    .selectAll(".label")
    .data(graph.nodes)
    .enter()
    .append("text")
    .attr("x", d => d.x) // 直接使用计算好的坐标
    .attr("y", d => d.y)
    .attr("dy", -20)     // 文字向上偏移，不遮挡节点
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .style("fill", "#333")
    .text(d => d.name);
