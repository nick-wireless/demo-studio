export default defineAppConfig({
  header: {
    title: 'UI x Content x Studio',
  },
  ui: {
    primary: 'blue',
    gray: 'slate',
    buttion: {
      rounded: 'rounded-full',
      default: {
        size: 'md',
      }
    },
    input: {
      default: {
        size: 'md',
      },
    },
    card: {
      rounded: 'rounded-xl',
    },
    footer: {
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-8 lg:py-16',
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
    page: {
      hero: {
        wrapper: 'lg:py-24'
      }
    }
  },
})
