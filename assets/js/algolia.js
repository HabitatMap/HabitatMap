document.addEventListener("DOMContentLoaded", () => {
  const search = instantsearch({
    appId: "BT6BD4TUL1",
    apiKey: "ca3aa6ff50f85bb9af2c2cb55adbf9bb",
    indexName: "habitatmap_dev",
    routing: true,
    searchFunction: helper => {
      const container = document.querySelector(".js--search-hits");

      if (helper.state.query === "") {
        container.style.display = "none";
      } else {
        container.style.display = "";
      }

      helper.search();
    }
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: ".js--search-searchbar",
      placeholder: "Search...",
      poweredBy: true // This is required if you're on the free Community plan
    })
  );

  const hitTemplate = hit => {
    if (hit._highlightResult.content !== undefined) {
      return hit._highlightResult.content.value;
    } else {
      return "";
    }
  };

  search.addWidget(
    instantsearch.widgets.hits({
      container: ".js--search-hits",
      templates: {
        item: hit => `
          <li class="post-list__item">
            <h2 class="post-list__title heading heading--small">
              <a href="${hit.url}">
                ${hit._highlightResult.title.value}
              </a>
            </h2>
            <div class="post-snippet">${hitTemplate(hit)}</div>
          </li>
        `
      }
    })
  );

  search.start();
});
