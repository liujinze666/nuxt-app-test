/* eslint-disable test/consistent-test-it */
import { describe, expect, test } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('my test', async () => {
  await setup({

  })
  test('index page should be work', async () => {
    const html = await $fetch('/')
    expect(html).toMatch('<h1>Index Page</h1>')
  })
})
