module.exports = `<div class="row filter-row">
  <div class="columns small-8">
    <list-search/>
  </div>
  <div class="columns small-4">
    <label>sort</label>
    <select-vue
      v-model=""
      :custom-label="$customLabel.bind(null, {options: sortFilters})"
      :no-translate="false"
      :options="$optionsPrimitives(sortFilters)"
      >
    </select-vue>
  </div>
</div>`
