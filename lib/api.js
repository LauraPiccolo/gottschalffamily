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
export async function getEvents(path) {
    const data = await fetchAPI(`
    {
        ArchivedeventItem(id: "archived-events/${path}") {
          id
          content {
            Text1
            Text2
            Text3
            Title1
            Title2
            Title3
            Video1 {
                filename
            }
            Video2 {
                filename
            }
            Video3 {
                filename
            }
            Photo1 {
                filename
            }
            Photo2 {
                filename
            }
            Photo3 {
                filename
            }
            Audio1 {
                filename
            }
            Audio2 {
                filename
            }
            Audio3 {
                filename
            }
            date
            Feedback_medias {
                filename
            }
          }
        }
      } 
    `,
    {
        preview: true,
    }
    )
    return data?.ArchivedeventItem.content
  }

  export async function getThemes(path) {
    const data = await fetchAPI(`
    {
        ThemeItems {
          items {
            content {
                Title
                Description
                Timing
                City_name_1
                City_date_1
                City_name_2
                City_date_2
            }
          }
        }
      } 
    `,
    {
        preview: true,
    }
    )
    return data?.ThemeItems.items
  }

  export async function getEventList(path) {
    const data = await fetchAPI(`
    {
        ArchivedeventItems {
          items {
            content {
              theme {
                name
              }
              date
            }
            full_slug
          }
        }
      }
      
    `,
    {
        preview: true,
    }
    )
    return data?.ArchivedeventItems.items
  }
  
