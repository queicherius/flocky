import { Benchmark } from '../benchmarkHelper'
import { hash } from './hash'

function makeString(length: number): string {
  let text = ''
  for (let i = 0; i < length; i++) {
    text += 'A'
  }
  return text
}

const ONE_KB_STRING = makeString(1024)
const ONE_MB_STRING = makeString(1024 * 1024)

const benchmark = new Benchmark('hash')

benchmark.add({
  library: 'flocky',
  input: '1KB String',
  func: () => hash(ONE_KB_STRING),
})

benchmark.add({
  library: 'flocky',
  input: '1MB String',
  func: () => hash(ONE_MB_STRING),
})

benchmark.run()
