// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true
  },
  {
    rules: {
      'style/comma-dangle': ['error', 'never'], // Trailing commas are not allowed
      'no-console': 'off',
      'antfu/top-level-function': 'off' //  Top-level functions are allowed
    }
  }
)
