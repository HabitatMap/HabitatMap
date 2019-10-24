document.addEventListener("DOMContentLoaded", () => {
  // Instanciating InstantSearch.js with Algolia credentials
  const search = instantsearch({
    appId: "BT6BD4TUL1",
    apiKey: "ca3aa6ff50f85bb9af2c2cb55adbf9bb",
    indexName: "habitatmap_dev",
    routing: true
  });

  // Adding searchbar and results widgets
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: ".js--search-searchbar",
      placeholder: "Search...",
      poweredBy: true // This is required if you're on the free Community plan
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: ".js--search-hits"
    })
  );

  // Starting the search
  search.start();
});
