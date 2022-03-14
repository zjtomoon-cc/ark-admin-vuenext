import type { ProjectConfig } from '/#/config'

const setting: ProjectConfig = {
  grayMode: false,
  showBreadCrumb: true,
  menuSetting: {
    hidden: false,
    collapse: false,
    uniqueOpened: true,
  },
  elementUISetting: {
    size: 'default',
    zIndex: 2000,
    autoInsertSpace: true,
    maxMessage: 5,
  },
  headerSetting: {
    fullscreen: false,
  },
}

export default setting
