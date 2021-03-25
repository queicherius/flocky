import { escapeRegExp } from './index'

describe('escapeRegExp', () => {
  it('can escape the special characters in a string', () => {
    expect(escapeRegExp('How much $$$ for this?')).toEqual(
      'How much \\$\\$\\$ for this\\?'
    )
    expect(escapeRegExp('\\')).toEqual('\\\\')
    expect(escapeRegExp('^^')).toEqual('\\^\\^')
  })
})
