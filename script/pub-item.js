/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function html_to_element(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

/**
 * Generate a publication item element
 */
function gen_pub_item(table) {
    // 关键修改 1：给 title 加了 <div class="pub-title">
    // 关键修改 2：将 coauthors 改为 div，避免布局干扰
    var template_item = `
      <details class="pub-item">
        <summary class="pub-summary">
          <div class="pub-title">${table.title}</div>
          <div class="coauthors"></div>
          <div class="pub-info">
            <div class="${table.JC.category}"> ${table.JC.name} </div>
            <div class="pub-links"> </div>
          </div>
        </summary>
        <div class="pub-intro"> ${table.intro} </div>
      </details> `;

    var item = html_to_element(template_item);

    // --- Add authors list ---
    var authors = item.getElementsByClassName('coauthors')[0];
    for (let i = 0; i < table.authors.length; i++) {
        var pre_text = '';
        if (i == 0) pre_text = "with ";
        else if (i == table.authors.length - 1) pre_text = ", and ";
        else pre_text = ", ";

        authors.appendChild(document.createTextNode(pre_text));

        var author = table.authors[i];

        // 关键修改 3：移除了内联 style="color:black"，改为由 CSS 控制
        // 如果没有 link，使用 <span> 而不是空的 <a>
        var template_author = "";
        if (author.link && author.link !== "") {
            template_author = `<a href="${author.link}" target="_blank">${author.name}</a>`;
        } else {
            template_author = `<span>${author.name}</span>`;
        }

        var author_item = html_to_element(template_author);
        authors.appendChild(author_item);
    }

    // --- Add links list (PDF, Arxiv, etc.) ---
    var links = item.getElementsByClassName('pub-links')[0];
    for (let i = 0; i < table.links.length; i++) {
        var link = table.links[i];
        // 统一添加 target="_blank" 在新标签页打开链接
        var template_link = `<a class="pub-link" href="${link.link}" target="_blank">${link.name}</a>`;
        var link_item = html_to_element(template_link);
        links.appendChild(link_item);
    }

    return item;
}

/**
 * Add publication to the target element
 */
function add_pub(table) {
    var item = gen_pub_item(table);
    var target = document.getElementById('pub-target');
    if (target) {
        target.appendChild(item);
    } else {
        console.error("Error: Element with id 'pub-target' not found.");
    }
}