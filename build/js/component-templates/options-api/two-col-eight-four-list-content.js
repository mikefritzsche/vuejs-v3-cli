module.exports = `<transition name="fade">
  <div class="row">
    <div
      id="list-content"
      class="columns small-4"
    >
      <list>
        <list-header>
          <list-header-cell column-name="name"/>
          <list-header-cell column-type="action-menu"/>
        </list-header>
        <list-body :column-count="1">
          <template v-for="() in ">
            <!-- list item component -->
          </template>
        </list-body>
      </list>
      <div class="card-section">
        <div class="row">
          <div class="columns small-12">
            <spinner :options="{ size: 'small' }"></spinner>
          </div>
        </div>
      </div>
    </div>

    <div class="columns small-8 sticky right">
      <div class="card detail-card">
        <div class="card-section">
          <h4 class="card-main-title">Title here</h4>
          <div class="row">
            <div class="columns small-12">
              Copy here
            </div>
          </div>
        </div>
        <transition name="component-fade" mode="out-in">
          <!-- side card component -->
        </transition>
      </div>
    </div>
  </div>
</transition>

<div 
  v-if="initialLoad"
  id="page-loading-wrapper"
  class="row section lazy-render"
>
  <div class="columns small-12">
    <div id="page-loading" class="text-center">
      <spinner/>
    </div>
  </div>
</div>`
