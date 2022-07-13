export const GET_HOLIDAY_PACKAGES = `
  query {
    holidayPackages {
      data {
        id
        attributes {
          thumbnail {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          location
          numOfNights
          inclusive
          amenities
          price
        }
      }
    }
  }`;

export const GET_ARTICLES_BY_NEWEST_FIRST = `
  query {
    articles(sort: "createdAt:desc") {
      data {
        id
        attributes {
          title
          slug
          description
        }
      }
    }
  }`;

export const GET_ALL_ARTICLE_SLUGS = `
  query {
    articles {
      data {
        attributes {
          slug
        }
      }
    }
  }`;

export const GET_ARTICLE_BY_SLUG = (targetSlug) => `
  query {
    articles(filters: { slug: {eq: "${targetSlug}"} }) {
      data {
        attributes {
          title
          description
          content
          slug
          splash {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          createdAt
          publishedAt
          updatedAt
        }
      }
    }  
  }`;

export const GET_ABOUT_CONTENT = `
  query {
    about {
      data {
        id
        attributes {
          content
        }
      }
    }
  }`;
