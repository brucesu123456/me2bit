export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'brucesu123456',
    avatar: '',
    username: 'bruce',
    title: 'dev',
    desc: '开发者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/brucesu123456' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/brucesu123456' },
    ],
    nameAliases: ['Bruce Su', 'tiger'],
    emailAliases: ['xxxxxx'],
  }
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
