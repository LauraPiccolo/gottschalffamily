async function fetchAPI(query, { variables, preview, folder } = {}) {
  const res = await fetch('https://gapi.storyblok.com/v1/api', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Token: 'aYu5zqsg2dHE3YmFmsDgFAtt',
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
  console.log(json.data)
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
            Title
            Subtitle
            Wo_ar
            Wo_de
            Wo_en
            Was_ar
            Was_de
            Was_en
            Wer_ar
            Wer_de
            Wer_en
            Wie_ar
            Wie_de
            Wie_en
            Warum_ar
            Warum_de
            Warum_en
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

// Events
export async function getEvents() {
    const data = await fetchAPI(`
    {
      story {
          id
          content {
              date
              theme
              Audio1
          }
      }
    }     
    `,
    {
        preview: true,
        folder: '/archived-events/berlin/'
    }
    )
    return data?.story.content
  }
  
