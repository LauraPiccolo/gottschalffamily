async function fetchAPI(query, { variables, preview, folder } = {}) {
  const res = await fetch('https://gapi.storyblok.com/v1/api', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Token: 'A4QWcFoedvzhb5EWFQ7zKgtt',
          Version: preview ? 'draft' : 'published',
          starts_with: folder ? folder : '/',
      },
      body: JSON.stringify({
          query,
          variables,
      }),
  })

  const json = await res.json()
  if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
  }
  return json.data
}

// Frontpage
export async function getHome() {
  const data = await fetchAPI(`
  {
    HomeItem(id: "home") {
        id
        name
        content {
          first_block
          content
        }
    }
  }     
  `,
  {
      preview: true
  }
  )
  return data?.HomeItem.content
}