import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  DynamicWidgets,
  RefinementList,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
  Highlight,
} from 'react-instantsearch-hooks-web';

import { Panel } from './Panel';

// import type { Hit } from 'instantsearch.js';

import './App.css';

const searchClient = algoliasearch(
  '0IP15PABX2',
  '1c2ab539da9ae5240c1217fadabd6109'
);

function Hit({ hit }) {
  return (
    <a href={hit.company_url} style={{textDecoration: "none", color: "inherit"}}>
      <article>
        <img src={hit.logo_url} alt={hit.name} />
        <h1>{hit.name}</h1>
        <p>{hit.high_concept}</p>
      </article>
    </a>

  );
}

export function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">awesome-startups</a>
        </h1>
        <h1 className="header-title">
          <a href="/">download</a>
        </h1>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="awesome-startups">
          <Configure hitsPerPage={10} />
          <div className="search-panel">
            <div className="search-panel__filters">
              <DynamicWidgets fallback={RefinementList}></DynamicWidgets>
              <RefinementList attribute="tags" />
            </div>

            <div className="search-panel__results">
              <SearchBox placeholder="" className="searchbox" />

              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}
