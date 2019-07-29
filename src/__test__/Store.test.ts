import { Store } from '../store/Store'

const test: {
  input: string,
  validSymbols: string,
  result: {
    symbol: string,
    count: number,
  }[],
}[] = [
  {
    input: 'aa0bbb1ccCCCссс2! ',
    validSymbols: 'a,b,c',
    result: [
      { symbol: 'a', count: 2 },
      { symbol: 'b', count: 3 },
      { symbol: 'c', count: 2 },
    ],
  },
  {
    input: 'abab',
    validSymbols: 'a,b,c',
    result: [{ symbol: 'a', count: 2 }, { symbol: 'b', count: 2 }],
  },
]

const validSymbol: {
  validSymbols: string,
  result: string,
} = {
  validSymbols: 'abc',
  result: 'abc',
}

describe('Тестирование функций хранилища:', () => {
  it('Тестирование функции установки валидных символов', () => {
    const store: Store = new Store()
    store.setValidSymbols(validSymbol.validSymbols)
    expect(store.validSymbols).toEqual(validSymbol.result)
  })

  it('Тестирование функции подсчета количества разрешенных символов', () => {
    const store: Store = new Store()
    for (const item of test) {
      store.setValidSymbols(item.validSymbols)
      store.setValue(item.input)
      expect(store.symbols).toEqual(item.result)
    }
  })
})
