const messageContent = require('./message-content')
const filtersContent = require('./filters-content')

module.exports = function(filters = false, message = false) {
  return `<template>
    ${filters ? filtersContent : null}
    ${message ? messageContent : null}
    <div class="row">
      <div class="columns small-12">
        <search-filter-no-results/>
      </div>
    </div>
    <div class="row">
      <div class="columns small-8"></div>
      <div class="columns small-4 sticky"></div>
    </div>
  </div>
</template>`
}
