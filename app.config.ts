export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'rounded-full uppercase border-6 border-black text-black pt-0'
      },
      variants: {
        size: {
          md: {
            base: 'py-0.5'
          }
        }
      },
      compoundVariants: [
        { color: 'primary', variant: 'solid', class: 'text-black font-black' },
        { color: 'secondary', variant: 'solid', class: 'text-black font-black' }
      ],
      defaultVariants: {
        size: 'xl'
      }
    },
    card: {
      variants: {
        variant: {
          outline: {
            root: 'rounded-xs bg-transparent border-6 border-black ring-none'
          }
        }
      }
    }
  }
})
