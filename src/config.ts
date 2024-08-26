import * as AllComponents from '@timus-networks/element-plus'
import * as AllIcons from '@element-plus/icons-vue'
import type { ElIdInjectionContext, ElZIndexInjectionContext } from '@timus-networks/element-plus/es/hooks'
import type { Component } from 'vue'
import { isVueComponent } from './utils'
import type { Options, PresetDirectives, PresetImport } from './types'

export const libraryName = '@timus-networks/element-plus'

export const iconLibraryName = '@element-plus/icons-vue'

export const optimizeDeps = ['dayjs', 'dayjs/plugin/*.js', 'lodash-unified']

const allComponents = Object.entries(AllComponents).reduce<string[]>((all, [key, item]) => {
  const regExp = /^El[A-Z]\w+/
  if (isVueComponent(item) && regExp.test(key) && regExp.test((item as Component).name ?? '')) {
    all.push(key)
  }
  return all
}, [])

export const allIcons = Object.keys(AllIcons)

export const allImportsWithStyle: string[] = [
  'ElLoading',
  'ElMessage',
  'ElMessageBox',
  'ElNotification'
]

const allImports: PresetImport[] = allImportsWithStyle

const allNoStylesComponents: string[] = [
  'ElAutoResizer',
  'ElCollection',
  'ElCollectionItem',
  'ElTooltipV2'
]

const allDirectives: PresetDirectives = {
  Loading: ['ElLoadingDirective', 'ElLoading'],
  Popover: ['ElPopoverDirective', 'ElPopover'],
  InfiniteScroll: 'ElInfiniteScroll'
}

const allSubComponents: Record<string, string[]> = {
  ElAnchor: ['ElAnchorLink'],
  ElBreadcrumb: ['ElBreadcrumbItem'],
  ElButton: ['ElButtonGroup'],
  ElCarousel: ['ElCarouselItem'],
  ElCheckbox: ['ElCheckboxButton', 'ElCheckboxGroup'],
  ElCollapse: ['ElCollapseItem'],
  ElCollection: ['ElCollectionItem'],
  ElContainer: ['ElAside', 'ElFooter', 'ElHeader', 'ElMain'],
  ElDescriptions: ['ElDescriptionsItem'],
  ElDropdown: ['ElDropdownItem', 'ElDropdownMenu'],
  ElForm: ['ElFormItem'],
  ElMenu: ['ElMenuItem', 'ElMenuItemGroup', 'ElSubMenu'],
  ElPopper: ['ElPopperArrow', 'ElPopperContent', 'ElPopperTrigger'],
  ElRadio: ['ElRadioGroup', 'ElRadioButton'],
  ElSkeleton: ['ElSkeletonItem'],
  ElSelect: ['ElOption', 'ElOptionGroup'],
  ElSteps: ['ElStep'],
  ElTable: ['ElTableColumn'],
  ElTableV2: ['ElAutoResizer'],
  ElTabs: ['ElTabPane'],
  ElTimeline: ['ElTimelineItem'],
  ElTour: ['ElTourStep']
}

const defaultInjectionID: ElIdInjectionContext = {
  prefix: 1024,
  current: 0
}

const defaultInjectionZIndex: ElZIndexInjectionContext = {
  current: 0
}

const defaultInclude: RegExp[] = [
  /\.vue$/,
  /\.vue\?vue/,
  /\.vue\?v=/,
  /\.((c|m)?j|t)sx?$/
]

const defaultExclude: RegExp[] = [
  /[\\/]node_modules[\\/]/,
  /[\\/]\.git[\\/]/,
  /[\\/]\.nuxt[\\/]/
]

export const defaults: Options = {
  components: allComponents,
  subComponents: allSubComponents,
  directives: allDirectives,
  imports: allImports,
  importStyle: 'css',
  themes: [],
  noStylesComponents: allNoStylesComponents,
  injectionID: defaultInjectionID,
  injectionZIndex: defaultInjectionZIndex,
  include: defaultInclude,
  exclude: defaultExclude,
  namespace: 'el',
  appendTo: [],
  icon: 'ElIcon'
}
