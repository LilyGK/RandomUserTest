import {test, expect} from '@playwright/test'


test('API response code @integration', async ({ request }) => {
    const startTime = Date.now()
    const response = await request.get('./api', {
    });
    const endTime = Date.now()
    const responseTime = (endTime - startTime)
    await expect(response.ok()).toBeTruthy()
    await expect(responseTime).toBeLessThan(500)
})

test('API response data @integration', async ({ request }) => {

    const response = await request.get('./api', {
    })
    const data = await response.json()
    await expect(data).toHaveProperty('results')
    await expect(data.results).toBeInstanceOf(Array)
    await expect(data.results.length).toBe(1)
    const user = data.results[0]
    await expect(user).toHaveProperty('name')
    await expect(user).toHaveProperty('location')
    await expect(user).toHaveProperty('email')
})

test('Exclude gender in API @integration ', async ({ request }) => {
    const response = await request.get('./api?exc=gender', {
    })
    const data = await response.json()
    const user = data.results[0]
    await expect(user).not.toHaveProperty('gender')
})


