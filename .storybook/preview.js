// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }
import GlobalStyles from '../src/styles/global.ts'
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
